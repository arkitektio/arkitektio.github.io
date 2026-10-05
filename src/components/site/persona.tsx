'use client';

import { useMemo, useSyncExternalStore } from 'react';
import type { ComponentProps } from 'react';
import { usePathname } from 'next/navigation';
import type { Item, Node } from 'fumadocs-core/page-tree';
import { Card } from 'fumadocs-ui/components/card';
import { useTreeContext } from 'fumadocs-ui/contexts/tree';
import { PageFooter, type FooterProps } from 'fumadocs-ui/layouts/docs/page';
import { Code, Microscope, Server, Users, type LucideIcon } from 'lucide-react';
import {
  isPersona,
  matchesPersona,
  PERSONA_ATTR,
  PERSONA_STORAGE_KEY,
  personaInfo,
  personas,
  type Persona,
} from '@/lib/persona';
import type { Tagged } from '@/lib/page-tree';
import { cn } from '@/lib/utils';

const PERSONA_EVENT = 'arkitekt:persona';
// Only while this is on <html> do sidebar rows glide in and out (see
// global.css), so a page that loads with a persona already picked does not move.
const ANIMATE_ATTR = 'data-persona-animate';
const ANIMATE_MS = 450;
let animateTimer: ReturnType<typeof setTimeout> | undefined;

const icons: Record<Persona, LucideIcon> = { use: Microscope, deploy: Server, build: Code };

function readPersona(): Persona | null {
  const value = document.documentElement.getAttribute(PERSONA_ATTR);
  return isPersona(value) ? value : null;
}

function subscribe(onChange: () => void) {
  document.addEventListener(PERSONA_EVENT, onChange);
  return () => document.removeEventListener(PERSONA_EVENT, onChange);
}

/** The persona the reader picked, or `null` for everyone (also while prerendering). */
export const usePersona = () => useSyncExternalStore(subscribe, readPersona, () => null);

export function setPersona(persona: Persona | null) {
  const root = document.documentElement;
  root.setAttribute(ANIMATE_ATTR, '');
  if (persona) root.setAttribute(PERSONA_ATTR, persona);
  else root.removeAttribute(PERSONA_ATTR);
  if (animateTimer) clearTimeout(animateTimer);
  animateTimer = setTimeout(() => root.removeAttribute(ANIMATE_ATTR), ANIMATE_MS);
  try {
    if (persona) localStorage.setItem(PERSONA_STORAGE_KEY, persona);
    else localStorage.removeItem(PERSONA_STORAGE_KEY);
  } catch {
    /* ignore */
  }
  document.dispatchEvent(new CustomEvent(PERSONA_EVENT));
}

/**
 * Runs before paint: puts the saved persona on <html>, so the sidebar comes up
 * already filtered.
 */
export function PersonaScript() {
  const code = `(function(){try{var p=localStorage.getItem(${JSON.stringify(
    PERSONA_STORAGE_KEY,
  )});if(${JSON.stringify(personas)}.indexOf(p)>-1)document.documentElement.setAttribute(${JSON.stringify(
    PERSONA_ATTR,
  )},p);}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

const BAR_HEIGHT = '2.75rem';

/**
 * The bar across the top of the docs: pick who you are, and the sidebar, the
 * search and the previous/next links leave out what is written for the others.
 */
export function PersonaBar() {
  const persona = usePersona();
  const options: { value: Persona | null; title: string; hint?: string; Icon: LucideIcon }[] = [
    { value: null, title: 'Everyone', Icon: Users },
    ...personas.map((value) => ({
      value,
      title: personaInfo[value].title,
      hint: personaInfo[value].audience,
      Icon: icons[value],
    })),
  ];

  return (
    <div
      id="persona-bar"
      className="sticky top-0 z-40 flex items-center gap-3 border-b bg-fd-background/80 px-4 text-sm backdrop-blur-sm"
      style={{ height: BAR_HEIGHT }}
    >
      {/* the docs layout starts below the bar */}
      <style>{`:root { --fd-banner-height: ${BAR_HEIGHT}; }`}</style>
      <span className="text-fd-muted-foreground max-sm:hidden">Show the docs for</span>
      <div role="group" aria-label="Show the docs for" className="flex items-center gap-1">
        {options.map(({ value, title, hint, Icon }) => {
          const active = persona === value;
          return (
            <button
              key={title}
              type="button"
              aria-pressed={active}
              onClick={() => setPersona(value)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-medium transition-colors',
                active
                  ? 'border-fd-primary/40 bg-fd-primary/10 text-fd-primary'
                  : 'border-transparent text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
              )}
            >
              <Icon className="size-3.5" />
              {title}
              {hint && <span className="font-normal opacity-70 max-md:hidden">· {hint}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** A card that also picks a persona, for the "I want to…" choice on the docs home. */
export function PersonaCard({
  persona,
  ...props
}: ComponentProps<typeof Card> & { persona: Persona }) {
  const Icon = icons[persona];
  return <Card icon={<Icon />} {...props} onClick={() => setPersona(persona)} />;
}

const trim = (url: string) => (url.length > 1 ? url.replace(/\/$/, '') : url);

function listPages(nodes: Node[], out: Tagged<Item>[] = []) {
  for (const node of nodes) {
    if (node.type === 'folder') {
      if (node.index) out.push(node.index);
      listPages(node.children, out);
    } else if (node.type === 'page' && !node.external) out.push(node);
  }
  return out;
}

/** Previous/next links that step over the pages the picked persona leaves out. */
export function PersonaFooter(props: FooterProps) {
  const persona = usePersona();
  const { root } = useTreeContext();
  const pathname = trim(usePathname());

  const items = useMemo(() => {
    if (!persona) return undefined;
    const pages = listPages(root.children).filter(
      (page) => trim(page.url) === pathname || matchesPersona(page.personas, persona),
    );
    const index = pages.findIndex((page) => trim(page.url) === pathname);
    if (index === -1) return undefined;
    return { previous: pages[index - 1], next: pages[index + 1] };
  }, [persona, root, pathname]);

  return <PageFooter {...props} items={items} />;
}
