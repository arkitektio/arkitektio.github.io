'use client';

import { useEffect, useRef, useState, type ComponentProps, type MouseEvent, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'fumadocs-core/link';
import { Popover, PopoverContent, PopoverTrigger } from 'fumadocs-ui/components/ui/popover';
import { ArrowRight, BookOpen } from 'lucide-react';
import { GLOSSARY, glossaryForHref, normalizeHref, type GlossaryEntry, type GlossaryId } from '@/lib/glossary';
import { cn } from '@/lib/utils';

// Term popovers: hover (or tap, or Enter) on a term shows its one-line definition and a
// "Read more" link, instead of sending the reader off to the full page. The terms live
// in src/lib/glossary.ts. Docs links to a glossary target become popovers on their own
// (GlossaryAwareLink, wired in as the MDX `a`); plain words use <Term id="…">.

const OPEN_DELAY = 150;
const CLOSE_DELAY = 200;

/** Open on hover with a short delay, stay open while the pointer is over trigger or popover. */
function useHoverOpen() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const lastPointer = useRef<string>('mouse');

  useEffect(() => () => clearTimeout(timer.current), []);

  const later = (value: boolean, ms: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(value), ms);
  };

  const hover = {
    onPointerEnter: (e: React.PointerEvent) => {
      lastPointer.current = e.pointerType;
      if (e.pointerType === 'mouse') later(true, OPEN_DELAY);
    },
    onPointerLeave: (e: React.PointerEvent) => {
      if (e.pointerType === 'mouse') later(false, CLOSE_DELAY);
    },
    onPointerDown: (e: React.PointerEvent) => {
      lastPointer.current = e.pointerType;
    },
  };

  /** A click never navigates: with a mouse it pins the popover open, on touch it toggles. */
  const onClick = (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let "open in new tab" through
    e.preventDefault();
    clearTimeout(timer.current);
    setOpen((was) => (lastPointer.current === 'mouse' ? true : !was));
  };

  return { open, setOpen, hover, onClick, cancel: () => clearTimeout(timer.current) };
}

function Definition({ entry, hover }: { entry: GlossaryEntry; hover: ReturnType<typeof useHoverOpen> }) {
  return (
    <PopoverContent
      className="max-w-xs min-w-0 bg-fd-popover/95 p-3"
      collisionPadding={8}
      // hover must not move focus (or scroll); keyboard users still Tab into the popover
      onOpenAutoFocus={(e) => e.preventDefault()}
      onPointerEnter={hover.cancel}
      onPointerLeave={hover.hover.onPointerLeave}
    >
      <p className="flex items-center gap-1.5 font-semibold text-fd-foreground">
        <BookOpen className="size-3.5 text-fd-primary" aria-hidden />
        {entry.term}
      </p>
      <p className="mt-1 text-fd-muted-foreground">{entry.definition}</p>
      <Link
        href={entry.href}
        className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-fd-primary hover:underline"
      >
        Read more <ArrowRight className="size-3" aria-hidden />
      </Link>
    </PopoverContent>
  );
}

const triggerClass = 'cursor-help decoration-dotted underline-offset-4';

/** A docs link that opens its glossary popover instead of navigating. */
export function GlossaryLink({
  entry,
  className,
  ...props
}: { entry: GlossaryEntry } & ComponentProps<typeof Link>) {
  const hover = useHoverOpen();
  return (
    <Popover open={hover.open} onOpenChange={hover.setOpen}>
      <PopoverTrigger asChild>
        <Link {...props} {...hover.hover} onClick={hover.onClick} className={cn(triggerClass, className)} />
      </PopoverTrigger>
      <Definition entry={entry} hover={hover} />
    </Popover>
  );
}

/**
 * The MDX `a`: links to a glossary target become popovers, everything else stays a
 * plain link. A link to the page you are on (terminology linking to its own anchors)
 * just scrolls, as before.
 */
export function GlossaryAwareLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const href = typeof props.href === 'string' ? props.href : undefined;
  const entry = glossaryForHref(href);
  if (!entry || !href || normalizeHref(href).split('#')[0] === normalizeHref(pathname)) {
    return <Link {...props} />;
  }
  return <GlossaryLink entry={entry} {...props} />;
}

/** A plain word with a glossary popover: `<Term id="hub">hubs</Term>`. */
export function Term({ id, children }: { id: GlossaryId; children?: ReactNode }) {
  const entry = GLOSSARY[id] as GlossaryEntry | undefined;
  const hover = useHoverOpen();
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') console.warn(`<Term>: no glossary entry "${id}"`);
    return <>{children}</>;
  }
  return (
    <Popover open={hover.open} onOpenChange={hover.setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          {...hover.hover}
          onClick={hover.onClick}
          className={cn(triggerClass, 'inline p-0 text-inherit underline [font:inherit]')}
        >
          {children ?? entry.term.toLowerCase()}
        </button>
      </PopoverTrigger>
      <Definition entry={entry} hover={hover} />
    </Popover>
  );
}
