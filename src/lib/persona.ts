// The docs are one tree, organised by kind of page (Diataxis). Who a page is for
// is a tag: `personas` in its frontmatter. A page without the tag is for everyone.
export const personas = ['use', 'run', 'build'] as const;

export type Persona = (typeof personas)[number];

export const personaInfo: Record<Persona, { title: string; audience: string; badge: string }> = {
  use: { title: 'Use', audience: 'Scientists', badge: 'For scientists' },
  run: { title: 'Run', audience: 'Admins', badge: 'For admins' },
  build: { title: 'Build', audience: 'Developers', badge: 'For developers' },
};

export const isPersona = (value: unknown): value is Persona =>
  personas.includes(value as Persona);

/** Whether a page tagged `tags` shows while `persona` is selected. */
export const matchesPersona = (tags: readonly Persona[] | undefined, persona: Persona | null) =>
  persona === null || !tags || tags.length === 0 || tags.includes(persona);

// The first path segment of a docs page is its Diataxis type.
export const pageTypes: Record<string, string> = {
  tutorials: 'Tutorial',
  guides: 'Guide',
  reference: 'Reference',
  concepts: 'Concept',
};

export const PERSONA_STORAGE_KEY = 'arkitekt-persona';
/** On <html>: the selected persona. The sidebar is filtered in CSS from it. */
export const PERSONA_ATTR = 'data-persona';
