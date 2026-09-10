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
    title: 'Open a volume',
    tagline: 'but from home.',
    hue: 185,
    caption:
      'Open gigabytes, quickly, from home. A dataset straight off the microscope, streamed chunk by chunk into the Orkestrator desktop app.',
  },
  {
    slug: 'annotate-by-probing',
    title: 'Annotate by probing',
    tagline: 'but in 3D.',
    hue: 115,
    caption:
      'The readout follows the cursor through the volume, and the mark lands where the ray hits. The ray is marched on your own machine, inside Orkestrator.',
  },
  {
    slug: 'example-meshes',
    title: 'Meshes in the viewer',
    tagline: 'and not just volumes.',
    hue: 327,
    caption:
      'Traced surfaces at scale. Level of detail tightens near the camera with no popping at cell boundaries, because the boundary vertices are shared.',
  },
  {
    slug: 'flim-data',
    title: 'FLIM data',
    tagline: 'not just confocal.',
    hue: 300,
    caption:
      'Not just confocal. Lifetime imaging in the same viewer, with the renderer switched on the fly.',
  },
  {
    slug: 'whole-slide-imaging',
    title: 'Whole-slide imaging',
    tagline: 'zooming in and out.',
    hue: 334,
    caption:
      'Thousands of tiles, acquired over hours, placed into one slide space. Pan across the section, then zoom to a nucleus without leaving the viewer.',
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
