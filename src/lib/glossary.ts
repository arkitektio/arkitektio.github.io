// The glossary behind the term popovers (src/components/docs/glossary.tsx).
//
// Every docs link whose target is one of these entries (`href` or one of its `aliases`)
// opens a small popover with the one-line definition instead of navigating; the popover
// links on to the full page. Plain words that are not links can use
// `<Term id="hub">hub</Term>` in MDX. Keep definitions to one sentence.

export type GlossaryEntry = {
  /** What the popover is titled. */
  term: string;
  /** One sentence, no jargon the reader would have to look up again. */
  definition: string;
  /** Where "Read more" goes. */
  href: string;
  /** Other link targets that mean the same term. */
  aliases?: string[];
};

const T = '/docs/concepts/terminology';

export const GLOSSARY = {
  hub: {
    term: 'Hub',
    definition: 'The server at the center: it stores your data and passes work between your apps.',
    href: '/docs/concepts#the-hub',
  },
  coordinator: {
    term: 'Coordinator',
    definition:
      'Knows who is who and introduces apps to hubs. It never sees your data. go.arkitekt.live is one.',
    href: '/docs/concepts#the-coordinator',
  },
  app: {
    term: 'App',
    definition: 'Any program that connects to a hub and does actual work, from Orkestrator to a script.',
    href: `${T}#what-is-an-app`,
    aliases: ['/docs/concepts#apps'],
  },
  action: {
    term: 'Action',
    definition: 'Something an app can do, described by its inputs and outputs, like "Image → Mask".',
    href: `${T}#what-is-an-action`,
  },
  implementation: {
    term: 'Implementation',
    definition: 'How one particular app does an action. Several apps can implement the same action.',
    href: `${T}#what-is-an-implementation`,
  },
  agent: {
    term: 'Agent',
    definition: 'One running instance of an app, which receives tasks, runs them and reports back.',
    href: `${T}#agent`,
  },
  task: {
    term: 'Task',
    definition: 'One run of an action, with your inputs. The hub routes it to an app that can do it.',
    href: `${T}#task`,
  },
  organization: {
    term: 'Organization',
    definition:
      'The group your data belongs to, like a lab or a facility. Data never crosses between organizations.',
    href: `${T}#organization`,
    aliases: [`${T}#the-hard-boundary`, `${T}#open-by-default-within-your-organization`],
  },
  workflow: {
    term: 'Workflow',
    definition: 'Several actions chained together, designed once and run as one.',
    href: `${T}#workflow`,
  },
  port: {
    term: 'Port',
    definition: 'One typed input or output of an action, such as an image or a number.',
    href: `${T}#port`,
  },
  mesh: {
    term: 'Mesh',
    definition:
      "An encrypted network between your organization's machines, so apps reach a hub across networks.",
    href: '/docs/concepts/security/mesh',
  },
  provenance: {
    term: 'Provenance',
    definition: 'The record of how each piece of data came to be: from what, by which task, started by whom.',
    href: '/docs/concepts/provenance',
  },
} satisfies Record<string, GlossaryEntry>;

export type GlossaryId = keyof typeof GLOSSARY;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Strips base path, `.html`, query and trailing slash, so hrefs compare equal however they were written. */
export function normalizeHref(href: string): string {
  const [rawPath, hash = ''] = href.split('#');
  let path = rawPath.split('?')[0];
  if (basePath && path.startsWith(basePath)) path = path.slice(basePath.length) || '/';
  path = path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  return hash ? `${path}#${hash}` : path;
}

const byHref = new Map<string, GlossaryEntry>();
for (const entry of Object.values(GLOSSARY) as GlossaryEntry[]) {
  for (const href of [entry.href, ...(entry.aliases ?? [])]) byHref.set(normalizeHref(href), entry);
}

/** The glossary entry a link points at, if any. */
export function glossaryForHref(href: string | undefined): GlossaryEntry | undefined {
  if (!href || !href.startsWith('/')) return undefined;
  return byHref.get(normalizeHref(href));
}
