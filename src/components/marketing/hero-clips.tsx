"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { applyBrandHueFromContent } from "@/components/site/brand-color";
import { frontPageClips, type FrontPageClip } from "@/lib/front-page-clips";
import { usePicks } from "./random-clip";

/**
 * Which front-page clip the hero is on. Shared between the carousel (which
 * advances it) and the headline (whose second line follows it), and the one
 * place that re-tints the site to the clip's precomputed hue.
 */
export type HeroClips = {
  clips: FrontPageClip[];
  /** Index into `clips`, or -1 before the page has picked a start. */
  active: number;
  current: FrontPageClip | undefined;
  /** `?hero=<slug>` named a real clip: stay on it. */
  pinned: boolean;
  select: (index: number) => void;
  advance: () => void;
};

const HeroClipsContext = createContext<HeroClips | undefined>(undefined);

export function HeroClipsProvider({ children }: { children: ReactNode }) {
  const picks = usePicks();
  const clips = frontPageClips;
  const startIndex = picks
    ? Math.max(
        0,
        clips.findIndex((clip) => clip.slug === picks.hero.slug),
      )
    : -1;
  const pinned = picks?.heroPinned ?? false;

  const [selected, setSelected] = useState<number | null>(null);
  const active = selected ?? startIndex;
  const current = active >= 0 ? clips[active] : undefined;

  // The first tint (page load) snaps, so the hero does not paint in one colour
  // and then drift; every later one fades over a few seconds.
  const tintedOnce = useRef(false);
  useEffect(() => {
    if (!current) return;
    applyBrandHueFromContent(current.hue, { animate: tintedOnce.current });
    tintedOnce.current = true;
  }, [current]);

  const value = useMemo<HeroClips>(
    () => ({
      clips,
      active,
      current,
      pinned,
      select: (index) => setSelected(index),
      advance: () => setSelected((active + 1) % clips.length),
    }),
    [clips, active, current, pinned],
  );

  return (
    <HeroClipsContext.Provider value={value}>
      {children}
    </HeroClipsContext.Provider>
  );
}

export function useHeroClips(): HeroClips {
  const ctx = useContext(HeroClipsContext);
  if (!ctx)
    throw new Error("useHeroClips needs a <HeroClipsProvider> above it");
  return ctx;
}

/**
 * The second line of the hero headline: the playing clip's tagline, fading in
 * with each change. `fallback` is what the server renders (and what stays if
 * the page never picks a clip).
 */
export function HeroTagline({
  fallback,
  className,
}: {
  fallback: string;
  className?: string;
}) {
  const { current } = useHeroClips();
  return (
    <span key={current?.slug ?? "fallback"} className={className}>
      <span className="hero-tagline-in inline-block">
        {current?.tagline ?? fallback}
      </span>
    </span>
  );
}
