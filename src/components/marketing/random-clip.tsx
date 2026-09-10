'use client';

import { useSyncExternalStore } from 'react';
import { type FrontPageClip, pickClip } from '@/lib/front-page-clips';
import { DemoClip } from './demo-clip';

export type ClipSlot = 'hero' | 'demo';

/**
 * Which clip each front-page slot plays. Decided once per page load, on the
 * client (the site is a static export): `?hero=<slug>` and `?demo=<slug>` pin
 * a slot, anything else is random, and the two slots never get the same clip.
 * Cached per query string so both slots agree and re-renders do not reshuffle.
 */
export type Picks = Record<ClipSlot, FrontPageClip> & {
  /** `?hero=<slug>` named a real clip, so the hero should stay on it. */
  heroPinned: boolean;
};

let cachedSearch: string | undefined;
let cachedPicks: Picks | undefined;

function getPicks(): Picks {
  const search = window.location.search;
  if (!cachedPicks || cachedSearch !== search) {
    const params = new URLSearchParams(search);
    const hero = pickClip(params.get('hero'));
    const demo = pickClip(params.get('demo'), hero.slug);
    cachedSearch = search;
    cachedPicks = { hero, demo, heroPinned: params.get('hero') === hero.slug };
  }
  return cachedPicks;
}

const noPicks = undefined;
const subscribe = () => () => {};

export function usePicks(): Picks | undefined {
  return useSyncExternalStore(subscribe, getPicks, () => noPicks);
}

/** A front-page slot playing whichever clip this page load picked for it. */
export function RandomClip({
  slot,
  priority,
  caption,
  tintBrand,
  className,
}: {
  slot: ClipSlot;
  priority?: boolean;
  caption?: boolean;
  tintBrand?: boolean;
  className?: string;
}) {
  const picks = usePicks();
  return (
    <DemoClip
      clip={picks?.[slot]}
      priority={priority}
      caption={caption}
      tintBrand={tintBrand}
      className={className}
    />
  );
}
