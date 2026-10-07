// The people behind Arkitekt, shown on /team. Tutorial stewards
// (src/lib/stewards.ts) are the members marked `steward`.
export type TeamMember = {
  name: string;
  /** What they do in the project, in a few words. */
  role: string;
  /** Where to find them, e.g. a GitHub profile. */
  url?: string;
  /** Picture: a GitHub avatar URL, or a file in `public/team` (e.g. `/team/jhnnsrs.jpg`). Initials show until it is set. */
  avatar?: string;
  /** Guides readers through tutorials. */
  steward?: boolean;
};

export const team = {
  jhnnsrs: {
    name: 'Johannes Roos',
    role: 'Maintainer',
    url: 'https://github.com/jhnnsrs',
    avatar: 'https://github.com/jhnnsrs.png?size=160',
    steward: true,
  },
  wilhelmi: {
    name: 'Alexander Wilhelmi',
    role: 'Contributor',
    url: 'https://github.com/alexschroeter',
    avatar: 'https://github.com/alexschroeter.png?size=160',
  },
  golden: {
    name: 'Artemiy Golden',
    role: 'Contributor',
    url: 'https://github.com/artgolden',
    avatar: 'https://github.com/artgolden.png?size=160',
  },
  schmidt: {
    name: 'Deborah Schmidt',
    role: 'Contributor',
    url: 'https://github.com/frauzufall',
    avatar: 'https://github.com/frauzufall.png?size=160',
  },
  diederich: {
    name: 'Benedict Diederich',
    role: 'Contributor',
    url: 'https://github.com/beniroquai',
    avatar: 'https://github.com/beniroquai.png?size=160',
  },
  niemeyer: {
    name: 'Franziska Niemeyer',
    role: 'Contributor',
    url: 'https://github.com/Franzili',
    avatar: 'https://github.com/Franzili.png?size=160',
  },
} satisfies Record<string, TeamMember>;

export type TeamMemberId = keyof typeof team;