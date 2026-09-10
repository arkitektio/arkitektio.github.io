/* The short product loops the front page plays instead of a static screenshot.
   They are cut from the volume-viewer presentation recordings by
   `scripts/make-clips.sh`, which normalises every clip to the same frame so the
   hero and bento slots can reserve one aspect ratio up front and never shift
   layout, whichever clip a page load happens to pick. */

import { asset } from './base-path';

export type FrontPageClip = {
  slug: string;
  /** Short name, doubles as the video's accessible label. */
  title: string;
  /** Second line of the hero headline while this clip plays ("Bioimage analysis, ..."). */
  tagline: string;
  /** One or two sentences for the caption. */
  caption: string;
  /**
   * Majority OKLCH hue of the poster, precomputed by `scripts/clip-hues.py`
   * (the same vote `src/lib/majority-hue.ts` runs in the browser). The site
   * tints to it while the clip is on screen.
   */
  hue: number;
};

/** Frame every clip is encoded at (see scripts/make-clips.sh). */
export const clipWidth = 1280;
export const clipHeight = 672;

/** Where the recordings come from; the caption links here. */
export const clipsDeckHref = '/presentations/volume-viewer';

export const frontPageClips: FrontPageClip[] = [
  {
    slug: 'open-a-volume',
    title: 'Open large datasets',
    tagline: 'but from home.',
    hue: 185,
    caption:
      'Open gigabytes, quickly, from home, streamed chunk by chunk into the Orkestrator desktop app.',
  },
  {
    slug: 'annotate-by-probing',
    title: 'Annotate & Explore',
    tagline: 'but in 3D.',
    hue: 115,
    caption:
      'Annotate structures in 3D, right in Orkestrator.',
  },
  {
    slug: 'example-meshes',
    title: 'Data is not just volumes',
    tagline: 'and not just volumes.',
    hue: 327,
    caption:
      'Large meshes, point clouds, and other data types can be visualised in the same viewer.',
  },
  {
    slug: 'flim-data',
    title: 'More than just flourescence',
    tagline: 'not just confocal.',
    hue: 300,
    caption:
      'Orkestrator can visualise more the just channels. Hyperspectral, FLIM, and other data types can be explored in the same viewer.',
  },
  {
    slug: 'whole-slide-imaging',
    title: 'Whole-slide imaging',
    tagline: 'zooming in and out.',
    hue: 334,
    caption:
      'Of course, we also allow you to overlay spatial transcriptomics data on top of whole-slide images...',
  },
];

export function clipSources(slug: string) {
  return {
    mp4: asset(`/clips/${slug}.mp4`),
    poster: asset(`/clips/${slug}.jpg`),
  };
}

/**
 * The clip a slot should play: the pinned one if `pinned` names a real clip,
 * otherwise a random pick, never the clip in `exclude` (so the two slots on
 * the page do not show the same loop).
 */
export function pickClip(
  pinned: string | null | undefined,
  exclude?: string,
): FrontPageClip {
  const pinnedClip = pinned
    ? frontPageClips.find((clip) => clip.slug === pinned)
    : undefined;
  if (pinnedClip) return pinnedClip;

  const pool = frontPageClips.filter((clip) => clip.slug !== exclude);
  const candidates = pool.length > 0 ? pool : frontPageClips;
  return candidates[Math.floor(Math.random() * candidates.length)];
}
