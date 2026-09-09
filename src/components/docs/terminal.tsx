"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "asciinema-player/dist/bundle/asciinema-player.css";
import { asset } from "@/lib/base-path";

type AsciinemaPlayerProps = {
  src: string;
  // START asciinemaOptions
  cols?: string;
  rows?: string;
  autoPlay?: boolean;
  preload?: boolean;
  loop?: boolean | number;
  startAt?: number | string;
  speed?: number;
  idleTimeLimit?: number;
  theme?: string;
  poster?: string;
  fit?: string;
  fontSize?: string;
  // END asciinemaOptions
};

// Brand-aligned terminal palette. Foreground + ANSI colours mirror the Material
// scheme used in the site's code blocks, and the "green" slots (2 / 10, the
// usual prompt + success colour) are tied to the live brand variable so the
// cast re-tints with the rest of the UI.
const TERMINAL_THEME: React.CSSProperties = {
  // let our card surface show through instead of the player's own slab
  ['--term-color-background' as string]: 'transparent',
  ['--term-color-foreground' as string]: '#d6d6e0',
  ['--term-color-0' as string]: '#0a0a0c',
  ['--term-color-1' as string]: '#ff5370',
  ['--term-color-2' as string]: 'var(--color-fd-primary)',
  ['--term-color-3' as string]: '#ffcb6b',
  ['--term-color-4' as string]: '#82aaff',
  ['--term-color-5' as string]: '#c792ea',
  ['--term-color-6' as string]: '#89ddff',
  ['--term-color-7' as string]: '#e8e8ef',
  ['--term-color-8' as string]: '#546e7a',
  ['--term-color-9' as string]: '#ff869a',
  ['--term-color-10' as string]: 'var(--color-fd-primary)',
  ['--term-color-11' as string]: '#ffd98a',
  ['--term-color-12' as string]: '#9cc4ff',
  ['--term-color-13' as string]: '#ddb6f2',
  ['--term-color-14' as string]: '#a9e9ff',
  ['--term-color-15' as string]: '#ffffff',
};

export const InnerTerminal = ({
  src,
  autoPlay = true,
  speed = 1.5,
  fit = "width",
  ...asciinemaOptions
}: AsciinemaPlayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<typeof import("asciinema-player")>();
  useEffect(() => {
    import("asciinema-player").then((p) => {
      setPlayer(p);
    });
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    const instance = player?.create(asset(src), currentRef, {
      autoPlay,
      speed,
      fit,
      ...asciinemaOptions,
    });
    return () => {
      instance?.dispose();
    };
  }, [src, player, asciinemaOptions]);

  return (
    <div
      // `--term-color-*` custom properties inherit down into the player's
      // `.ap-terminal`, so setting them here themes the cast to match the UI.
      style={TERMINAL_THEME}
      className="coding group relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c] text-sm leading-normal text-white/85 shadow-[0_0_80px_-40px_var(--color-fd-primary)]"
    >
      {/* brand glow behind the terminal, mirrors the other media cards */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-primary/15 blur-[100px]" />
      </div>

      {/* window chrome */}
      <div className="relative flex shrink-0 items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-inset ring-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15 ring-1 ring-inset ring-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-fd-primary/70 ring-1 ring-inset ring-fd-primary/30" />
        </div>
        <span className="ml-2 font-mono text-[11px] tracking-[0.16em] text-fd-primary">
          TERMINAL
        </span>
      </div>

      {/* `fit="width"` lets the cast scale to the card width and keep its own
          (terminal-shaped) height, so the card never stretches out of bounds */}
      <div className="relative w-full p-3">
        <div ref={ref} className="w-full" />
      </div>
    </div>
  );
};

// Client-only: asciinema-player touches the DOM and must not run during the
// static prerender.
export const Terminal = dynamic(() => Promise.resolve(InnerTerminal), {
  ssr: false,
  loading: () => <div>Loading…</div>,
});

export default Terminal;
