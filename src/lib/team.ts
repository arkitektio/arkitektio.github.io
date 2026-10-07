// The people behind Arkitekt, shown on /team. Tutorial stewards
// (src/lib/stewards.ts) are the members marked `steward`.
export type TeamMember = {
  name: string;
  /** What they do in the project, in a few words. */
  role: string;
  /** Where to find them, e.g. a GitHub profile. */
  url?: string;
  /** Picture in `public/team`, e.g. `/team/jhnnsrs.jpg`. Initials show until it is set. */
  avatar?: string;
  /** Guides readers through tutorials. */
  steward?: boolean;
};

export const team = {
  jhnnsrs: {
    name: 'Johannes Roos',
    role: 'Maintainer',
    url: 'https://github.com/jhnnsrs',
    steward: true,
  },
  wilhelmi: {
    name: 'Alexander Wilhelmi',
    role: 'Contributor',
    url: 'https://github.com/alexschroeter',
  },
  golden: {
    name: 'Artemiy Golden',
    role: 'Contributor',
    url: 'https://github.com/artgolden',
  },
  schmidt: {
    name: 'Deborah Schmidt',
    role: 'Contributor',
    url: 'https://github.com/frauzufall',
  },
  diederich: {
    name: 'Benedict Diederich',
    role: 'Contributor',
    url: 'https://github.com/beniroquai',
  },
  niemeyer: {
    name: 'Franziska Niemeyer',
    role: 'Contributor',
    url: 'https://github.com/Franzili',
  },
} satisfies Record<string, TeamMember>;

export type TeamMemberId = keyof typeof team;