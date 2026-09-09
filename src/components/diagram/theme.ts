/* Shared theme-token colour & card-chrome helpers for the diagrams. Every value
   is built from the OKLCH `--orbit-*` / `--brand-hue` tokens in global.css, so
   colours flip with light/dark and rotate with the brand hue. No React. */

import type { CSSProperties } from 'react';

/* Flow-line colour: lightness from `--orbit-flow-l` (theme-flipped), chroma
   defaults to `--orbit-flow-c` but can be overridden for the off-brand accents
   (token amber, blocked red, per-app hues). `hue` is a number or a CSS expr like
   `var(--brand-hue)` / `calc(var(--brand-hue) + 150)`. */
export const flow = (hue: number | string, chroma: number | string = 'var(--orbit-flow-c)') =>
  `oklch(var(--orbit-flow-l) ${chroma} ${hue})`;

/** A plain saturated dot colour for a given hue (legends, plane swatches). */
export const hueDot = (hue: number | string) => `oklch(0.7 0.16 ${hue})`;

/** The card background gradient (shared between every node card). */
export const cardGradient = (hue: number | string) =>
  `linear-gradient(180deg, oklch(var(--orbit-card-l1) var(--orbit-card-c) ${hue}), oklch(var(--orbit-card-l2) var(--orbit-card-c) ${hue}))`;

/** Full node-card style for the animated figures (hot = highlighted this step). */
export const cardStyle = (hue: number | string, isHot: boolean, hotScale = 1.05): CSSProperties => ({
  borderColor: isHot ? `oklch(var(--orbit-card-border-hot-l) 0.15 ${hue})` : `oklch(var(--orbit-card-border-l) 0.1 ${hue} / 0.55)`,
  backgroundImage: cardGradient(hue),
  boxShadow: isHot
    ? `0 0 0 1.5px oklch(var(--orbit-card-border-hot-l) 0.15 ${hue}), 0 0 36px -8px oklch(0.6 0.2 ${hue} / 0.6)`
    : `0 10px 30px -18px oklch(0.55 0.15 ${hue} / 0.55)`,
  transform: isHot ? `scale(${hotScale})` : 'scale(1)',
  transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
});

/** Icon-chip border/background for a card. */
export const iconBox = (hue: number | string): CSSProperties => ({
  borderColor: `oklch(var(--orbit-card-border-l) 0.11 ${hue} / 0.5)`,
  backgroundColor: `oklch(var(--orbit-card-iconbg-l) 0.08 ${hue} / 0.45)`,
});

/** Icon foreground colour for a card. */
export const iconColor = (hue: number | string) => `oklch(var(--orbit-card-fg-l) 0.16 ${hue})`;
