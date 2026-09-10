"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  clipHeight,
  clipSources,
  clipWidth,
  clipsDeckHref,
} from "@/lib/front-page-clips";
import { useMotionAllowed } from "./demo-clip";
import { useHeroClips } from "./hero-clips";
import { useInView } from "./reveal";

/**
 * The hero: every front-page clip in turn, each playing through once before
 * the next one fades in, with a caption underneath saying what is on screen.
 *
 * - Starts on the clip this page load picked for the hero slot (random, or
 *   pinned with `?hero=<slug>`, in which case it loops that clip and stays).
 * - Only the current, previous and next clips have a <video> mounted: next
 *   so the switch is instant, previous so the fade-out does not jump back to
 *   its poster. Everything else is a poster.
 * - The dots jump to a clip; the bar along the bottom edge is the progress
 *   of the one playing.
 * - Pauses while scrolled away; reduced motion / Save-Data get posters only,
 *   with the dots still working.
 * - Which clip is on is shared state (see hero-clips): the headline follows
 *   it and the site tints to the clip's hue.
 */
export function HeroCarousel({ className }: { className?: string }) {
  const { clips, active, current, pinned, select, advance } = useHeroClips();
  const count = clips.length;

  const motionOk = useMotionAllowed();
  const { ref, inView } = useInView<HTMLDivElement>(0, {
    once: false,
    rootMargin: "200px",
  });

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);

  const videosOn = motionOk && active >= 0;
  const hasVideo = (i: number) =>
    videosOn &&
    (i === active ||
      i === (active + 1) % count ||
      i === (active - 1 + count) % count);

  // Play the active clip (when on screen), park the others at their start.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active) {
        if (inView) {
          video.play().catch(() => {
            /* autoplay refused: the poster stays, which is fine */
          });
        } else {
          video.pause();
        }
      } else {
        video.pause();
        if (video.currentTime !== 0) video.currentTime = 0;
      }
    });
    if (barRef.current) barRef.current.style.transform = "scaleX(0)";
  }, [active, inView, videosOn]);

  return (
    <figure
      className={cn("w-full", className)}
      aria-roledescription="carousel"
      aria-label="What Orkestrator looks like"
    >
      <div
        ref={ref}
        className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0c] shadow-2xl shadow-black/40"
        style={{ aspectRatio: `${clipWidth} / ${clipHeight}` }}
      >
        {active >= 0 &&
          clips.map((clip, i) => {
            const isActive = i === active;
            const sources = clipSources(clip.slug);
            return (
              <div
                key={clip.slug}
                aria-hidden={!isActive}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  isActive ? "opacity-100" : "opacity-0",
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized images */}
                <img
                  src={sources.poster}
                  alt=""
                  width={clipWidth}
                  height={clipHeight}
                  fetchPriority={isActive ? "high" : "auto"}
                  loading={isActive ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 size-full object-cover"
                />
                {hasVideo(i) && (
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    muted
                    playsInline
                    loop={pinned}
                    disablePictureInPicture
                    preload="auto"
                    aria-label={clip.title}
                    onEnded={isActive && !pinned ? advance : undefined}
                    onTimeUpdate={
                      isActive
                        ? (e) => {
                            const v = e.currentTarget;
                            if (barRef.current && v.duration > 0) {
                              barRef.current.style.transform = `scaleX(${v.currentTime / v.duration})`;
                            }
                          }
                        : undefined
                    }
                    className="absolute inset-0 size-full object-cover"
                  >
                    <source src={sources.mp4} type="video/mp4" />
                  </video>
                )}
              </div>
            );
          })}

        {/* progress of the playing clip */}
        {videosOn && !pinned && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-white/10"
          >
            <div
              ref={barRef}
              className="h-full origin-left bg-primary transition-transform duration-300 ease-linear"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-col gap-3 px-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        {/* Reserve a couple of lines so the caption arriving with the pick
            does not push the section around. */}
        <figcaption className="min-h-[2.5rem] text-sm leading-snug text-white/60">
          {current && (
            <span key={current.slug} className="hero-caption-in block">
              <span className="font-medium text-white/85">
                {current.title}.
              </span>{" "}
              {current.caption}{" "}
            </span>
          )}
        </figcaption>

        <div
          role="tablist"
          aria-label="Clips"
          className="flex shrink-0 items-center gap-1.5 pt-0.5"
        >
          {clips.map((clip, i) => {
            const isActive = i === active;
            return (
              <button
                key={clip.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={clip.title}
                title={clip.title}
                onClick={() => select(i)}
                className="group -m-1 p-1"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-300",
                    isActive
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-white/30 group-hover:bg-white/60",
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </figure>
  );
}
