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
// what a first-time reader sees, and the stored value for "show everything"
const DEFAULT_PERSONA: Persona = 'use';
const ALL = 'all';
// Only while this is on <html> do sidebar rows glide in and out (see
// global.css), so a page that loads with a persona already picked does not move.
const ANIMATE_ATTR = 'data-persona-animate';
const ANIMATE_MS = 450;
let animateTimer: ReturnType<typeof setTimeout> | undefined;

const icons: Record<Persona, LucideIcon> = { use: Microscope, run: Server, build: Code };

function readPersona(): Persona | null {
  const value = document.documentElement.getAttribute(PERSONA_ATTR);
  return isPersona(value) ? value : null;
}

function subscribe(onChange: () => void) {
  document.addEventListener(PERSONA_EVENT, onChange);
  return () => document.removeEventListener(PERSONA_EVENT, onChange);
}

/**
 * The persona the docs are filtered to, or `null` for all of them. A reader who
 * never picked gets the default, which is also what the prerender assumes.
 */
export const usePersona = () =>
  useSyncExternalStore<Persona | null>(subscribe, readPersona, () => DEFAULT_PERSONA);

export function setPersona(persona: Persona | null) {
  const root = document.documentElement;
  root.setAttribute(ANIMATE_ATTR, '');
  if (persona) root.setAttribute(PERSONA_ATTR, persona);
  else root.removeAttribute(PERSONA_ATTR);
  if (animateTimer) clearTimeout(animateTimer);
  animateTimer = setTimeout(() => root.removeAttribute(ANIMATE_ATTR), ANIMATE_MS);
  try {
    // "all" is stored too: no stored value means the default persona
    localStorage.setItem(PERSONA_STORAGE_KEY, persona ?? ALL);
  } catch {
    /* ignore */
  }
  document.dispatchEvent(new CustomEvent(PERSONA_EVENT));
}

/**
 * Runs before paint: puts the saved persona on <html>, or the default one for a
 * first visit, so the sidebar comes up already filtered.
 */
export function PersonaScript() {
  const code = `(function(){try{var p=localStorage.getItem(${JSON.stringify(
    PERSONA_STORAGE_KEY,
  )});if(p==null)p=${JSON.stringify(DEFAULT_PERSONA)};if(${JSON.stringify(
    personas,
  )}.indexOf(p)>-1)document.documentElement.setAttribute(${JSON.stringify(
    PERSONA_ATTR,
  )},p);}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

/**
 * The persona switch at the top of the sidebar: pick who you are, and the
 * sidebar, the search and the previous/next links leave out what is written
 * for the others.
 */
export function PersonaBar() {
  const persona = usePersona();
  const options: { value: Persona | null; title: string; hint: string; Icon: LucideIcon }[] = [
    { value: null, title: 'All', hint: 'Docs for everyone', Icon: Users },
    ...personas.map((value) => ({
      value,
      title: personaInfo[value].title,
      hint: personaInfo[value].badge,
      Icon: icons[value],
    })),
  ];

  return (
    <div
      role="group"
      aria-label="Show the docs for"
      className="grid grid-cols-4 gap-0.5 rounded-lg border bg-fd-secondary/50 p-0.5 text-xs"
    >
      {options.map(({ value, title, hint, Icon }) => {
        const active = persona === value;
        return (
          <button
            key={title}
            type="button"
            title={hint}
            aria-pressed={active}
            onClick={() => setPersona(value)}
            className={cn(
              'flex flex-col items-center gap-1 rounded-md px-1 py-1.5 font-medium transition-colors',
              active
                ? 'bg-fd-background text-fd-primary shadow-sm'
                : 'text-fd-muted-foreground hover:text-fd-accent-foreground',
            )}
          >
            <Icon className="size-4" />
            {title}
          </button>
        );
      })}
    </div>
  );
}

/** A card that also picks a persona, for the "I want to…" choice on the docs home. */
export function PersonaCard({
  persona,
  ...props
}: ComponentProps<typeof Card> & { persona: Persona }) {
  const Icon = icons[persona];
  return (
    <Card
      icon={<Icon />}
      {...props}
      // global.css marks the card of the picked persona
      data-persona-card={persona}
      onClick={() => setPersona(persona)}
    />
  );
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
