// The docs are one tree, organised by kind of page (Diataxis). Who a page is for
// is a tag: `personas` in its frontmatter, shown as a badge above the title.
// A page without the tag is for everyone.
export const personas = ['use', 'run', 'build'] as const;

export type Persona = (typeof personas)[number];

export const personaInfo: Record<Persona, { title: string; audience: string; badge: string }> = {
  use: { title: 'Use', audience: 'Scientists', badge: 'For scientists' },
  run: { title: 'Run', audience: 'Admins', badge: 'For admins' },
  build: { title: 'Build', audience: 'Developers', badge: 'For developers' },
};

// The first path segment of a docs page is its Diataxis type.
export const pageTypes: Record<string, string> = {
  tutorials: 'Tutorial',
  guides: 'Guide',
  reference: 'Reference',
  concepts: 'Concept',
};
