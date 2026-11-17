'use client';

/* The animation kit behind the smart microscopy deck's figures.

   Three kinds of motion:
   - Builds (`sm-in`, `sm-pop`, `sm-draw`, …) run once each time a slide is
     shown. They are scoped to `section.present`, the class reveal.js puts on
     the current slide, so arriving at a slide replays its build and every
     other slide (thumbnails, overview, print) shows the finished state.
     They only animate inside <Steps>; a plain slide has no entrance at all.
   - Steps (`<Steps cues={…}>`): a figure that tells a story in time is a
     movie that plays one segment per press of "next" (right arrow, space,
     the clicker). Inside it the builds keep their `delay(seconds)` (`--d`),
     and so do the figure's own keyframes. Nothing in the deck is stepped by
     a mouse click: every step is a reveal.js fragment (`useKeySteps`).
   - Flows (`Token`) loop forever: SMIL `animateMotion` along a path, phased
     with a negative `begin` so several tokens on one path spread out instead
     of starting together at the origin.

   `prefers-reduced-motion` drops the builds to their end state and hides the
   tokens. */

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useReveal } from '@revealjs/react';
import type { CSSProperties, ReactNode } from 'react';

export const PRIMARY = 'var(--color-fd-primary)';
export const BORDER = 'var(--color-fd-border)';
export const MUTED = 'var(--color-fd-muted-foreground)';
export const FG = 'var(--color-fd-foreground)';
export const SURFACE = 'var(--color-fd-card)';
/** The one colour that means "this is the problem". Fixed, so it reads the
    same in light and dark mode. */
export const WARN = '#d97706';
export const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

/** Stagger a build: `<g className="sm-in" style={delay(0.4)}>`. */
export function delay(seconds: number, extra?: CSSProperties): CSSProperties {
  return { ['--d' as string]: `${seconds}s`, ...extra } as CSSProperties;
}

/** An id fragment that is safe inside CSS class names and `url(#…)`. */
export function useUid() {
  return `u${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
}

const CSS = `
/* A build's delay only counts inside <Steps>; everywhere else the slide
   arrives in one piece. */
.reveal .slides section :is(.sm-in, .sm-pop, .sm-fade, .sm-draw, .sm-grow, .sm-grow-y, .sm-ping, .sm-converge) { --sm-at: calc(var(--d, 0s) * var(--sm-stagger, 0)); }
.sm-steps { --sm-stagger: 1; }
.sm-in, .sm-pop, .sm-grow, .sm-ping, .sm-converge { transform-box: fill-box; }
.sm-pop, .sm-ping { transform-origin: center; }
.sm-grow { transform-origin: left center; }
.sm-grow-y { transform-box: fill-box; transform-origin: center bottom; }

section.present .sm-steps .sm-in { animation: sm-in 0.6s cubic-bezier(.2,.7,.2,1) var(--sm-at) both; }
section.present .sm-steps .sm-pop { animation: sm-pop 0.55s cubic-bezier(.3,1.5,.5,1) var(--sm-at) both; }
section.present .sm-steps .sm-fade { animation: sm-fade 0.7s ease-out var(--sm-at) both; }
section.present .sm-steps .sm-draw { stroke-dasharray: 1; animation: sm-draw 0.9s ease-in-out var(--sm-at) both; }
section.present .sm-steps .sm-grow { animation: sm-grow 0.6s cubic-bezier(.4,0,.2,1) var(--sm-at) both; }
section.present .sm-steps .sm-grow-y { animation: sm-grow-y 0.6s cubic-bezier(.4,0,.2,1) var(--sm-at) both; }
section.present .sm-steps .sm-ping { animation: sm-ping 1.1s ease-out var(--sm-at) both; }
section.present .sm-steps .sm-converge { animation: sm-converge 1.6s cubic-bezier(.6,0,.2,1) var(--sm-at) both; }
/* The few entrances that are wanted: opt in by name. */
.sm-entrance-pop { transform-box: fill-box; transform-origin: center; }
section.present .sm-entrance-pop { animation: sm-pop 0.55s cubic-bezier(.3,1.5,.5,1) var(--d, 0.5s) both; }
section.present .sm-glow { animation: sm-glow 2.2s ease-in-out var(--d, 0s) infinite; }
.sm-pulse { animation: sm-pulse 2.4s ease-in-out var(--d, 0s) infinite; }

@keyframes sm-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@keyframes sm-pop { from { opacity: 0; transform: scale(0.35); } to { opacity: 1; transform: none; } }
@keyframes sm-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes sm-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes sm-grow { from { transform: scaleX(0); } to { transform: none; } }
@keyframes sm-grow-y { from { transform: scaleY(0); } to { transform: none; } }
@keyframes sm-ping { 0% { opacity: 0.9; transform: scale(0.4); } 100% { opacity: 0; transform: scale(2.4); } }
@keyframes sm-converge { from { opacity: 0.4; transform: translate(var(--x), var(--y)); } to { opacity: 1; transform: none; } }
@keyframes sm-glow {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in oklch, var(--color-fd-primary) 45%, transparent); }
  50% { box-shadow: 0 0 0 7px color-mix(in oklch, var(--color-fd-primary) 0%, transparent); }
}
@keyframes sm-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

.sm-ping { opacity: 0; }

/* Only the slide on screen moves. Every slide stays mounted, so without this
   the loops on the neighbouring slides keep running too: pause every CSS
   animation off the current slide, and drop the SMIL tokens there. */
.reveal .slides section:not(.present) :is(*, *::before, *::after) { animation-play-state: paused !important; }
.reveal .slides section:not(.present) .sm-token { display: none; }

/* A figure shown again as the ground for an overlay: no build, just there. */
section.present .sm-still :is(.sm-in, .sm-pop, .sm-fade, .sm-draw, .sm-grow, .sm-grow-y, .sm-converge) { animation: none; }

@media (prefers-reduced-motion: reduce) {
  section.present :is(.sm-in, .sm-pop, .sm-fade, .sm-draw, .sm-grow, .sm-grow-y, .sm-converge, .sm-glow, .sm-entrance-pop) { animation: none; }
  .sm-pulse, section.present .sm-loop { animation: none !important; }
  .sm-token { display: none; }
}
`;

/** The kit's stylesheet. Rendered once, on the cover; styles are global, and
    every slide stays mounted, so one copy serves the whole deck. */
export function AnimStyles() {
  const deck = useReveal();
  // Nothing moves unless it was asked to: when a slide comes up, or one of its
  // fragments is shown, every one-shot animation on it jumps straight to its
  // end and every loop (CSS or SMIL) is stopped. Only a live <Steps> movie,
  // which runs on key presses, and anything marked `sm-animate` are left alone.
  useEffect(() => {
    if (!deck) return;
    let raf = 0;
    const settle = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const slide = deck.getCurrentSlide();
        if (!slide) return;
        for (const a of slide.getAnimations({ subtree: true })) {
          if (!(a instanceof CSSAnimation)) continue;
          const target = (a.effect as KeyframeEffect | null)?.target;
          if (a.effect?.getComputedTiming().iterations === Infinity) {
            if (!target?.closest('.sm-steps-live, .sm-animate')) a.pause();
            continue;
          }
          if (target?.closest('.sm-steps, .sm-animate')) continue;
          a.finish();
        }
        for (const svg of slide.querySelectorAll('svg')) svg.pauseAnimations();
      });
    };
    deck.on('ready', settle);
    deck.on('slidechanged', settle);
    deck.on('fragmentshown', settle);
    deck.on('fragmenthidden', settle);
    settle();
    return () => {
      cancelAnimationFrame(raf);
      deck.off('ready', settle);
      deck.off('slidechanged', settle);
      deck.off('fragmentshown', settle);
      deck.off('fragmenthidden', settle);
    };
  }, [deck]);
  return <style>{CSS}</style>;
}

/* --- SVG primitives --------------------------------------------------------- */

export function T({
  x,
  y,
  children,
  size = 16,
  fill = FG,
  weight = 400,
  anchor = 'middle',
  mono = false,
  italic = false,
  className,
  style,
}: {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  fill?: string;
  weight?: number;
  anchor?: 'start' | 'middle' | 'end';
  mono?: boolean;
  italic?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill={fill}
      fontWeight={weight}
      textAnchor={anchor}
      dominantBaseline="middle"
      fontFamily={mono ? MONO : 'inherit'}
      fontStyle={italic ? 'italic' : undefined}
      className={className}
      style={style}
    >
      {children}
    </text>
  );
}

export type BoxTone = 'default' | 'primary' | 'solid' | 'warn' | 'ghost';

/** A labelled box: the node of every diagram in the deck. */
export function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  tag,
  tone = 'default',
  className,
  style,
  rx = 12,
  titleSize = 19,
  tagColor,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: ReactNode;
  sub?: ReactNode;
  /** A mono line under the sub: machine, timing, kind. */
  tag?: ReactNode;
  tone?: BoxTone;
  className?: string;
  style?: CSSProperties;
  rx?: number;
  titleSize?: number;
  /** Overrides the tag line's colour (default: primary, or warn on a warn box). */
  tagColor?: string;
}) {
  const fill =
    tone === 'solid' ? PRIMARY : tone === 'primary' ? PRIMARY : tone === 'warn' ? WARN : SURFACE;
  const fillOpacity = tone === 'primary' ? 0.1 : tone === 'warn' ? 0.1 : tone === 'ghost' ? 0 : 1;
  const stroke =
    tone === 'primary' || tone === 'solid' ? PRIMARY : tone === 'warn' ? WARN : BORDER;
  const text = tone === 'solid' ? 'var(--color-fd-primary-foreground)' : FG;
  const lines = 1 + (sub ? 1 : 0) + (tag ? 1 : 0);
  const top = y + h / 2 - ((lines - 1) * 22) / 2;
  return (
    <g className={className} style={style}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={rx}
        fill={fill}
        fillOpacity={fillOpacity}
        stroke={stroke}
        strokeWidth={1.6}
        strokeDasharray={tone === 'ghost' ? '6 5' : undefined}
      />
      <T x={x + w / 2} y={top} size={titleSize} weight={600} fill={tone === 'ghost' ? MUTED : text}>
        {title}
      </T>
      {sub ? (
        <T x={x + w / 2} y={top + 22} size={15} fill={tone === 'solid' ? text : MUTED}>
          {sub}
        </T>
      ) : null}
      {tag ? (
        <T x={x + w / 2} y={top + (sub ? 44 : 22)} size={14} mono weight={700} fill={tagColor ?? (tone === 'warn' ? WARN : PRIMARY)}>
          {tag}
        </T>
      ) : null}
    </g>
  );
}

/** Arrowhead markers, one per colour, under a figure-unique prefix. */
export function Arrowheads({ id }: { id: string }) {
  const head = (suffix: string, color: string) => (
    <marker
      id={`${id}-${suffix}`}
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="7"
      markerHeight="7"
      orient="auto-start-reverse"
    >
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  );
  return (
    <defs>
      {head('fg', MUTED)}
      {head('primary', PRIMARY)}
      {head('warn', WARN)}
    </defs>
  );
}

/** A straight or poly line that can draw itself in (`sm-draw` needs
    `pathLength`). */
export function Path({
  d,
  stroke = MUTED,
  width = 2.5,
  head,
  className,
  style,
  dash,
  opacity,
}: {
  d: string;
  stroke?: string;
  width?: number;
  /** Marker id to put on the end. */
  head?: string;
  className?: string;
  style?: CSSProperties;
  dash?: string;
  opacity?: number;
}) {
  const draws = head && className?.split(' ').includes('sm-draw');
  const line = (
    <path
      d={d}
      pathLength={1}
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dash}
      strokeOpacity={opacity}
      markerEnd={head && !draws ? `url(#${head})` : undefined}
      className={className}
      style={style}
    />
  );
  if (!draws) return line;
  // A marker ignores the dash that draws the line in, so a drawn arrow would
  // show its head before its line. The head rides on a sliver of the last
  // segment instead, and fades in as the line arrives.
  const n = d.match(/-?\d+(\.\d+)?/g)?.map(Number) ?? [];
  const [x1, y1, x2, y2] = n.slice(-4);
  const at = parseFloat(String((style as Record<string, unknown> | undefined)?.['--d'] ?? '0')) || 0;
  return (
    <>
      {line}
      <path
        d={`M${x2 - (x2 - x1) * 0.01} ${y2 - (y2 - y1) * 0.01} L${x2} ${y2}`}
        fill="none"
        stroke={stroke}
        strokeWidth={width}
        strokeOpacity={opacity}
        markerEnd={`url(#${head})`}
        className="sm-fade"
        style={delay(at + 0.75)}
      />
    </>
  );
}

/** Something travelling along a path, forever. `phase` (0–1) spreads several
    tokens on one path. `hold` (0–1) is the share of each loop it spends
    parked at the end before going round again. */
export function Token({
  path,
  dur,
  phase = 0,
  hold = 0,
  children,
}: {
  path: string;
  dur: number;
  phase?: number;
  hold?: number;
  children?: ReactNode;
}) {
  const begin = `${-phase * dur}s`;
  const timing =
    hold > 0
      ? { keyPoints: '0;1;1', keyTimes: `0;${(1 - hold).toFixed(3)};1`, calcMode: 'linear' as const }
      : {};
  return (
    <g className="sm-token">
      {children ?? <circle r={7} fill={PRIMARY} />}
      <animateMotion dur={`${dur}s`} begin={begin} repeatCount="indefinite" path={path} {...timing} />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.06;0.94;1"
        dur={`${dur}s`}
        begin={begin}
        repeatCount="indefinite"
      />
    </g>
  );
}

/** A figure's own looping keyframes, scoped under its uid and only running
    on the current slide. */
export function LoopStyles({ css }: { css: string }) {
  return <style>{css}</style>;
}

/* --- steps ------------------------------------------------------------------ */

/** Steps driven by the deck's "next" key instead of the mouse: `count` empty
    reveal.js fragments, and how many of them are showing. Render `marks`
    anywhere inside the figure (`svg` for inside an <svg>); `step` goes from 0
    to `count` as the presenter presses on, and back down on "previous".
    Arriving at the slide from the one after it, every step is already taken. */
export function useKeySteps(count: number, svg = false) {
  const deck = useReveal();
  const ref = useRef<Element | null>(null);
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!deck || count <= 0) return;
    const sync = () => {
      const el = ref.current;
      if (el) setStep(el.querySelectorAll(':scope > .fragment.visible').length);
    };
    const events = ['ready', 'slidechanged', 'fragmentshown', 'fragmenthidden'] as const;
    for (const e of events) deck.on(e, sync);
    sync();
    return () => {
      for (const e of events) deck.off(e, sync);
    };
  }, [deck, count]);
  const items = Array.from({ length: Math.max(0, count) }, (_, i) =>
    svg ? <g key={i} className="fragment" /> : <span key={i} className="fragment" />,
  );
  const setRef = (el: Element | null) => {
    ref.current = el;
  };
  const marks = svg ? (
    <g ref={setRef} aria-hidden>
      {items}
    </g>
  ) : (
    <span ref={setRef} aria-hidden className="pointer-events-none absolute size-0 overflow-hidden">
      {items}
    </span>
  );
  return { step: Math.min(step, Math.max(0, count)), marks };
}

/** A figure that plays one segment per press of "next".

    Everything timed inside it (the `sm-*` builds with their `delay()`, and the
    figure's own keyframes) is one movie on one clock, in seconds since the
    slide came up. On arrival it stands at `cues[0]`, without an entrance.
    Each press of "next" plays on to the next cue (the steps are reveal.js
    fragments, so "previous" steps back, and after the last cue "next" moves
    on to the next slide). A press while it is playing carries on from the
    cue it was heading for.

    Loops that are not part of the story (a blinking cursor, a flame) keep
    running: an infinite animation only follows the clock if it lasts
    `period` seconds. Animations that start later (a reveal.js fragment) are
    left alone too. */
export function Steps({
  cues,
  period,
  children,
  className = 'relative shrink-0',
  pips = true,
  live = false,
  speed = 1,
  onStep,
}: {
  /** Told which cue the figure now stands at (0 on arrival and after a restart). */
  onStep?: (step: number) => void;
  /** How much faster than written the segments play (the cues stay the same). */
  speed?: number;
  /** Plays one segment per press of "next". Off by default: the figure simply stands at
      its last cue, complete, and nothing in it moves. */
  live?: boolean;
  /** Where the movie stops, in seconds, ascending. */
  cues: number[];
  /** The length of the figure's story loop, when it has one. */
  period?: number;
  children: ReactNode;
  className?: string;
  /** The row of dots that says how many presses are left. */
  pips?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const stepped = live && cues.length > 1;
  const { step, marks } = useKeySteps(stepped ? cues.length - 1 : 0);
  const stepRef = useRef(step);
  const run = useRef<{ tracks: Animation[]; step: number; timer: number; target: number | null }>({
    tracks: [],
    step: 0,
    timer: 0,
    target: null,
  });
  const key = cues.join(',');
  const onStepRef = useRef(onStep);
  useEffect(() => {
    onStepRef.current = onStep;
  }, [onStep]);

  const seek = useCallback((t: number) => {
    for (const a of run.current.tracks) {
      a.pause();
      setTime(a, t * 1000);
    }
  }, []);

  const play = useCallback(
    (from: number, to: number) => {
      const r = run.current;
      window.clearTimeout(r.timer);
      for (const a of r.tracks) {
        setTime(a, from * 1000);
        setRate(a, speed);
        // play() rewinds an animation that is already over, so those stay put.
        const end = Number(a.effect?.getComputedTiming().endTime ?? Infinity);
        if (from * 1000 < end) a.play();
        else a.pause();
      }
      r.target = to;
      r.timer = window.setTimeout(
        () => {
          seek(to);
          r.target = null;
        },
        (Math.max(0, to - from) * 1000) / speed,
      );
    },
    [seek, speed],
  );

  const start = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const r = run.current;
    r.tracks = el.getAnimations({ subtree: true }).filter((a) => {
      if (!(a instanceof CSSAnimation)) return false;
      const t = a.effect?.getComputedTiming();
      if (!t) return false;
      if (t.iterations !== Infinity) return true;
      return period !== undefined && Math.abs(Number(t.duration) - period * 1000) < 1;
    });
    // no entrance: a live figure arrives at the cue its fragments say (the
    // first, or the last when coming back from the next slide), any other at
    // its last
    r.step = stepRef.current;
    seek(live ? cues[Math.min(r.step, cues.length - 1)] : cues[cues.length - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, period, seek, live]);

  // (Re)start whenever the slide comes up: that is when its animations exist.
  useEffect(() => {
    const section = ref.current?.closest('section');
    if (!section) return;
    const r = run.current;
    let present = false;
    let raf = 0;
    const sync = () => {
      const now = section.classList.contains('present');
      if (now === present) return;
      present = now;
      window.clearTimeout(r.timer);
      cancelAnimationFrame(raf);
      r.target = null;
      if (now) raf = requestAnimationFrame(() => (raf = requestAnimationFrame(start)));
    };
    const mo = new MutationObserver(sync);
    mo.observe(section, { attributes: true, attributeFilter: ['class'] });
    sync();
    return () => {
      mo.disconnect();
      window.clearTimeout(r.timer);
      cancelAnimationFrame(raf);
    };
  }, [start]);

  // The fragments moved: one step forward plays its segment, anything else
  // (a step back, a jump) just stands at its cue.
  useEffect(() => {
    stepRef.current = step;
    onStepRef.current?.(step);
    const r = run.current;
    if (!stepped || step === r.step) return;
    const forward = step === r.step + 1;
    r.step = step;
    if (forward) play(cues[step - 1], cues[step]);
    else {
      window.clearTimeout(r.timer);
      r.target = null;
      seek(cues[step]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, stepped, key, play, seek]);

  return (
    <div
      ref={ref}
      className={cn_('sm-steps', stepped && 'sm-steps-live', className)}
    >
      {children}
      {marks}
      {pips && stepped ? (
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 flex -translate-y-[14px] gap-[5px]">
          {cues.map((_, i) => (
            <span
              key={i}
              className="block size-[6px] rounded-full"
              style={{ background: i <= step ? PRIMARY : BORDER }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function setTime(a: Animation, ms: number) {
  a.currentTime = ms;
}

function setRate(a: Animation, rate: number) {
  a.playbackRate = rate;
}

function cn_(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(' ');
}
