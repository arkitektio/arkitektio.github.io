// Tutorials are guided by a steward: a person who walks the reader through the
// steps, shown with their picture on every tutorial page.
export type Steward = {
  name: string;
  /** Where to find them, e.g. a GitHub profile. */
  url?: string;
  /** Picture in `public/stewards`, e.g. `/stewards/jhnnsrs.jpg`. Initials show until it is set. */
  avatar?: string;
};

export const stewards = {
  jhnnsrs: {
    name: 'Johannes Roos',
    url: 'https://github.com/jhnnsrs',
  },
} satisfies Record<string, Steward>;

export type StewardId = keyof typeof stewards;

/** Guides every tutorial that does not name a `steward` in its frontmatter. */
export const defaultSteward: StewardId = 'jhnnsrs';

export const getSteward = (id?: string): Steward =>
  stewards[(id && id in stewards ? id : defaultSteward) as StewardId];
