import { team, type TeamMember, type TeamMemberId } from './team';

// Tutorials are guided by a steward: a team member who walks the reader through
// the steps, shown with their picture on every tutorial page.
export type Steward = TeamMember;

/** Guides every tutorial that does not name a `steward` in its frontmatter. */
export const defaultSteward: TeamMemberId = 'jhnnsrs';

export const getSteward = (id?: string): Steward =>
  team[(id && id in team ? id : defaultSteward) as TeamMemberId];
