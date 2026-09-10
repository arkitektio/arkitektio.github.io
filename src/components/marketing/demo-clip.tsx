"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { applyBrandHueFromContent } from "@/components/site/brand-color";
import {
  clipHeight,
  clipSources,
  clipWidth,
  clipsDeckHref,
  type FrontPageClip,
} from "@/lib/front-page-clips";
import { useInView } from "./reveal";

/**
 * A muted, looping product clip that costs nothing until it is needed.
 *
 * - The box reserves the clip's aspect ratio, so nothing shifts when media
 *   arrives (or when `clip` is still undefined before the page has picked one).
 * - The poster is a plain <img>, so first paint shows a still straight away.
 * - The <video> is only mounted once the box is near the viewport (or right
 *   away with `priority`, for the hero), and it pauses while scrolled away.
 * - Users who asked for reduced motion or Save-Data only ever get the poster.
 * - With `tintBrand`, the clip's (precomputed) poster hue becomes the site's
 *   brand hue, the way orkestrator-next tints itself after the open scene.
 */
export function DemoClip({
  clip,
  priority = false,
  caption = false,
  tintBrand = false,
  className,
}: {
  clip?: FrontPageClip;
  /** Above the fold: fetch the poster eagerly and mount the video on load. */
  priority?: boolean;
  /** Overlay the clip's title + caption along the bottom edge. */
  caption?: boolean;
  /** Re-tint `--brand-hue` from the poster once it has loaded. */
  tintBrand?: boolean;
  className?: string;
}) {
  useEffect(() => {
    if (tintBrand && clip) applyBrandHueFromContent(clip.hue);
  }, [clip, tintBrand]);
  const { ref, inView } = useInView<HTMLDivElement>(0, {
    once: false,
    rootMargin: "200px",
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const motionOk = useMotionAllowed();

  // Once the video has been mounted keep it mounted, so scrolling away and back
  // pauses/resumes instead of re-fetching.
  const [mounted, setMounted] = useState(false);
  const shouldMount = motionOk && Boolean(clip) && (priority || inView);
  if (shouldMount && !mounted) setMounted(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      video.play().catch(() => {
        /* autoplay refused: the poster stays, which is fine */
      });
    } else {
      video.pause();
    }
  }, [inView, mounted, clip]);

  const sources = clip ? clipSources(clip.slug) : undefined;

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden bg-[#0a0a0c]", className)}
      style={{ aspectRatio: `${clipWidth} / ${clipHeight}` }}
    >
      {clip && sources && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized images */}
          <img
            src={sources.poster}
            alt=""
            width={clipWidth}
            height={clipHeight}
            fetchPriority={priority ? "high" : "auto"}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          {mounted && (
            <video
              key={clip.slug}
              ref={videoRef}
              muted
              loop
              autoPlay
              playsInline
              disablePictureInPicture
              preload={priority ? "auto" : "metadata"}
              aria-label={clip.title}
              className="absolute inset-0 size-full object-cover"
            >
              <source src={sources.mp4} type="video/mp4" />
            </video>
          )}
          {caption && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-5 pb-4 pt-14 text-white sm:px-6">
              <p className="text-sm font-semibold leading-tight sm:text-base">
                {clip.title}
              </p>
              {/* On phones the card is too small for more than the title. */}
              <p className="mt-1 hidden max-w-2xl text-xs leading-snug text-white/75 sm:block sm:text-sm">
                {clip.caption}
              </p>
              <Link
                href={clipsDeckHref}
                className="pointer-events-auto mt-2 hidden items-center gap-1 text-xs font-medium text-white/60 transition-colors hover:text-white sm:inline-flex"
              >
                From the volume viewer talk
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* prefers-reduced-motion + Save-Data, read as an external store so the server
   render (no motion) and the first client frame agree, then the real answer
   takes over without a hydration mismatch. */
const reduceMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const mql = window.matchMedia(reduceMotionQuery);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getMotionAllowed() {
  if (window.matchMedia(reduceMotionQuery).matches) return false;
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  return !connection?.saveData;
}

export function useMotionAllowed() {
  return useSyncExternalStore(subscribeMotion, getMotionAllowed, () => false);
}
