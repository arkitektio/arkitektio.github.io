import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { asset } from '@/lib/base-path';

/**
 * Building blocks for the home-page bento grid. Cells come in two flavours:
 * a plain bordered card, and a `glow` frame whose thick brand-coloured border
 * + soft outer glow makes a cell pop (mirrors the accented cells on the
 * Fumadocs landing page). Screenshots are dropped in via <ScreenshotSlot>,
 * which renders a labelled placeholder until a real `src` is supplied.
 *
 * The grid is responsive: one column on phones, two from `sm` up. Rows size to
 * their content (items in a row still stretch to match each other) so a short
 * text card is never inflated to a media card's height. Use `sm:col-span-2` on
 * a card to make it span the full width.
 */

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', className)}>
      {children}
    </div>
  );
}

export function BentoCard({
  glow = false,
  href,
  hrefLabel,
  className,
  children,
}: {
  glow?: boolean;
  /** When set, the whole card becomes a link to this docs page. */
  href?: string;
  /** Accessible label for the stretched link (defaults to "Learn more"). */
  hrefLabel?: string;
  className?: string;
  children: ReactNode;
}) {
  if (glow) {
    return (
      <div
        className={cn(
          'rounded-3xl border-primary/40 border-1 overflow-hidden shadow-[0_0_20px_-10px_var(--color-fd-primary)]',
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-fd-border bg-fd-card/50 backdrop-blur',
        href && 'transition-colors hover:border-fd-primary/50',
        className,
      )}
    >
      {/* Stretched link: covers the whole card so any click on a non-interactive
          area navigates. Interactive children opt back in with `relative z-10`. */}
      {href && (
        <Link
          href={href}
          aria-label={hrefLabel ?? 'Learn more'}
          className="absolute inset-0 z-[1]"
        />
      )}
      {href && (
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-4 z-[2] grid size-8 place-items-center rounded-full border border-fd-border bg-fd-card/80 text-fd-muted-foreground opacity-0 transition group-hover:opacity-100 group-hover:text-fd-primary"
        >
          <ArrowUpRight className="size-4" />
        </span>
      )}
      {children}
    </div>
  );
}

/**
 * A drop-in slot for a screenshot. Pass `src` once you have the image; until
 * then it renders a dashed placeholder so the layout is visible while building.
 */
export function ScreenshotSlot({
  src,
  alt = '',
  label = 'Screenshot',
  className,
  imgClassName,
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  imgClassName?: string;
}) {
  if (src) {
    return (
      <img
        src={asset(src)}
        alt={alt}
        className={cn('h-full w-full object-cover', imgClassName)}
      />
    );
  }

  return (
    <div
      className={cn(
        'flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-fd-border bg-fd-muted/40 text-fd-muted-foreground',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <ImageIcon className="size-4" />
        {label}
      </span>
    </div>
  );
}
