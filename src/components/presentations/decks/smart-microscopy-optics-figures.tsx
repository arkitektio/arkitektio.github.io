'use client';

/* Figures for the "something completely different" detour of the smart
   microscopy deck: Optikit (designing the instrument), newswitch (running the
   design, simulated first), microscopes built for one question with their own
   bloks, and every detector as a sensor in the coordinate graph.

   Built on `smart-microscopy-anim.tsx`. Example values (parts, pitches,
   lifetimes) are illustrative, not from a real bench. */

import type { CSSProperties, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';
import { BORDER, FG, LoopStyles, MUTED, PRIMARY, Path, SURFACE, T, WARN, delay, useUid } from './smart-microscopy-anim';

/* --- openUC2: modularity is king -------------------------------------------- */

/** What a microscope program quietly assumes, and what the next cube build
    does instead. */
const QUIRKS: [string, string][] = [
  ['one camera, the right way up', 'two cameras, one of them mirrored by the splitter'],
  ['focus moves the stage', 'focus moves the objective cube, and there is no stage'],
  ['an LED you switch on', 'a laser behind a fiber, synced to the camera'],
  ['the same build tomorrow', 'three cubes swapped over lunch'],
];

export function QuirksFigure() {
  return (
    <div className="grid w-full grid-cols-4 gap-4" role="list">
      {QUIRKS.map(([assumed, actual], i) => (
        <div key={assumed} role="listitem" className="sm-in flex flex-col gap-2 rounded-2xl border-2 border-fd-border bg-fd-card p-4 shadow-sm" style={delay(0.9 + i * 0.25)}>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">the software assumed</span>
          <span className="text-[17px] text-fd-muted-foreground line-through decoration-[#d97706]/70 decoration-2">{assumed}</span>
          <span className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#d97706]">this build</span>
          <span className="text-[17px] font-semibold leading-snug">{actual}</span>
        </div>
      ))}
    </div>
  );
}

/* --- Optikit: the bench ----------------------------------------------------- */

const LIBRARY: [string, string][] = [
  ['LED', '470 nm'],
  ['Objective', '10× · NA 0.25'],
  ['Tube lens', 'f 100 mm'],
  ['Beam splitter', '50 : 50'],
  ['Camera ×2', '3.45 µm pitch'],
];

/** Optikit as KiCad for optics: parts from a library go onto a bench, the
    light is traced through them, and out come the facts the instrument needs
    (µm per pixel, one light path per camera) and a priced parts list. */
export function OptikitBenchFigure() {
  const ax = 190; // the optical axis
  const bench = { x: 270, y: 20, w: 560, h: 340 };
  // three rays: LED → sample → objective → tube lens → splitter → cameras
  const rays = [-1, 0, 1].map((s) => ({
    main: `M330 ${ax + s * 6} L420 ${ax + s * 12} L490 ${ax + s * 24} L600 ${ax + s * 24} L700 ${ax + s * 8} L770 ${ax}`,
    fold: `M700 ${ax + s * 8} L${700 + s * 8} ${ax + 70} L700 ${ax + 120}`,
  }));
  return (
    <div className="relative mx-auto h-[400px] w-[1100px]" role="img" aria-label="Optikit: parts from a library, an LED, an objective, a tube lens, a beam splitter and two cameras, placed on a bench; the light is traced through them to both cameras, and out come the µm per pixel, one light path per camera and a priced parts list.">
      {/* the library */}
      <div className="sm-in absolute left-0 top-[20px] flex w-[240px] flex-col gap-2 rounded-2xl border-2 border-fd-border bg-fd-card p-3 shadow-sm" style={delay(0.1)}>
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">library</span>
        {LIBRARY.map(([name, spec], i) => (
          <div key={name} className="sm-in flex items-center justify-between rounded-lg border border-fd-border bg-fd-background/60 px-2.5 py-1.5" style={delay(0.25 + i * 0.12)}>
            <span className="text-[15px] font-semibold">{name}</span>
            <span className="font-mono text-[11.5px] text-fd-muted-foreground">{spec}</span>
          </div>
        ))}
        <span className="mt-1 text-[13px] leading-snug text-fd-muted-foreground">authored once per part, reused in every design</span>
      </div>

      <svg width={1100} height={400} viewBox="0 0 1100 400" className="absolute inset-0" aria-hidden>
        <defs>
          <pattern id="okit-dots" width={20} height={20} patternUnits="userSpaceOnUse">
            <circle cx={1.5} cy={1.5} r={1.3} fill={MUTED} fillOpacity={0.25} />
          </pattern>
        </defs>
        <rect className="sm-fade" style={delay(0.2)} x={bench.x} y={bench.y} width={bench.w} height={bench.h} rx={16} fill="url(#okit-dots)" stroke={BORDER} strokeWidth={1.6} />
        <T className="sm-fade" style={delay(0.2)} x={bench.x + 16} y={bench.y + 20} anchor="start" size={11} mono weight={700} fill={MUTED}>
          THE BENCH
        </T>

        {/* the light, traced once the parts are down */}
        {rays.map((r, i) => (
          <g key={i}>
            <Path className="sm-draw" style={delay(1.7 + i * 0.08)} d={r.main} stroke={PRIMARY} width={2} opacity={0.75} />
            <Path className="sm-draw" style={delay(2.1 + i * 0.08)} d={r.fold} stroke={WARN} width={2} opacity={0.75} />
          </g>
        ))}

        {/* the parts */}
        <g className="sm-pop" style={delay(0.6)}>
          <rect x={300} y={ax - 18} width={30} height={36} rx={6} fill={SURFACE} stroke={FG} strokeWidth={2} />
          <circle cx={315} cy={ax} r={7} fill={PRIMARY} fillOpacity={0.7} />
          <T x={315} y={ax + 38} size={12} fill={MUTED}>LED</T>
        </g>
        <g className="sm-pop" style={delay(0.75)}>
          <rect x={417} y={ax - 40} width={6} height={80} rx={2} fill={MUTED} fillOpacity={0.35} />
          <T x={420} y={ax + 58} size={12} fill={MUTED}>sample</T>
        </g>
        <g className="sm-pop" style={delay(0.9)}>
          <path d={`M478 ${ax - 18} L502 ${ax - 32} L502 ${ax + 32} L478 ${ax + 18} Z`} fill={SURFACE} stroke={FG} strokeWidth={2} />
          <T x={490} y={ax + 52} size={12} fill={MUTED}>objective</T>
        </g>
        <g className="sm-pop" style={delay(1.05)}>
          <ellipse cx={600} cy={ax} rx={9} ry={40} fill={PRIMARY} fillOpacity={0.12} stroke={PRIMARY} strokeWidth={2} />
          <T x={600} y={ax + 56} size={12} fill={MUTED}>tube lens</T>
        </g>
        <g className="sm-pop" style={delay(1.2)}>
          <rect x={686} y={ax - 14} width={28} height={28} fill={SURFACE} stroke={FG} strokeWidth={2} transform={`rotate(45 700 ${ax})`} />
          <line x1={688} y1={ax + 12} x2={712} y2={ax - 12} stroke={FG} strokeWidth={1.5} />
          <T x={700} y={ax - 34} size={12} fill={MUTED}>splitter</T>
        </g>
        <g className="sm-pop" style={delay(1.35)}>
          <rect x={770} y={ax - 22} width={40} height={44} rx={6} fill={SURFACE} stroke={PRIMARY} strokeWidth={2.2} />
          <T x={790} y={ax} size={13} weight={700} fill={PRIMARY}>A</T>
          <T x={790} y={ax - 34} size={12} fill={MUTED}>camera</T>
        </g>
        <g className="sm-pop" style={delay(1.45)}>
          <rect x={678} y={ax + 120} width={44} height={40} rx={6} fill={SURFACE} stroke={WARN} strokeWidth={2.2} />
          <T x={700} y={ax + 140} size={13} weight={700} fill={WARN}>B</T>
          <T x={742} y={ax + 140} anchor="start" size={12} fill={MUTED}>camera</T>
        </g>
      </svg>

      {/* what comes out */}
      <div className="absolute right-0 top-[20px] flex w-[230px] flex-col gap-2.5">
        <span className="sm-fade font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground" style={delay(2.4)}>
          out of the trace
        </span>
        {(
          [
            ['µm per pixel', '3.45 µm ÷ 10× = 0.345'],
            ['a light path per camera', 'A straight, B folded'],
            ['a parts list', 'priced, ready to order'],
          ] as const
        ).map(([title, sub], i) => (
          <div key={title} className="sm-in flex flex-col gap-0.5 rounded-xl border-2 border-fd-primary/40 bg-fd-primary/5 px-3 py-2.5" style={delay(2.5 + i * 0.25)}>
            <span className="text-[16px] font-semibold leading-tight">{title}</span>
            <span className="font-mono text-[12.5px] text-fd-muted-foreground">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- newswitch: the design runs, simulated first ---------------------------- */

/** Which parts are real in each `simulate:` mode: 0 everything simulated,
    1 only the unwired ones, 2 nothing. A part is real from its mode onwards. */
const NS_PARTS: { name: string; what: string; realFrom: 1 | 2 }[] = [
  { name: 'stage', what: 'x · y · z', realFrom: 1 },
  { name: 'LED', what: '470 nm', realFrom: 2 },
  { name: 'filter wheel', what: '6 slots', realFrom: 2 },
  { name: 'camera A', what: 'usb3-vision', realFrom: 1 },
  { name: 'camera B', what: 'usb3-vision', realFrom: 2 },
];
const NS_MODES = ['everything', 'unwired', 'nothing'] as const;
const NS_SAYS = ['every part simulated', 'what is wired is real', 'the real instrument'] as const;

/** Beads for the simulated frame: fixed, so server and browser agree. */
const BEADS: [number, number, number][] = [
  [34, 40, 7], [92, 28, 5], [150, 62, 8], [208, 34, 6], [60, 104, 6], [126, 122, 9],
  [190, 108, 5], [236, 140, 7], [40, 168, 8], [104, 186, 5], [170, 176, 7], [222, 204, 6],
  [78, 222, 7], [140, 232, 5], [28, 230, 4], [246, 80, 4],
];

/** newswitch reads the Optikit design, so the instrument runs before it is
    built: `simulate:` flips from everything, to the unwired parts, to
    nothing, and the same actions run against whatever is there. */
export function SimulateFigure() {
  const u = useUid();
  const T0 = 10; // seconds per full cycle
  const win = (from: number, to: number) => {
    // on for [from, to) of the three thirds; keyframes in %
    const a = (from / 3) * 100;
    const b = (to / 3) * 100;
    const pts = [`0% { opacity: ${from === 0 ? 1 : 0}; }`];
    if (from > 0) pts.push(`${(a - 1).toFixed(1)}% { opacity: 0; }`, `${(a + 1).toFixed(1)}% { opacity: 1; }`);
    if (to < 3) pts.push(`${(b - 1).toFixed(1)}% { opacity: 1; }`, `${(b + 1).toFixed(1)}% { opacity: 0; }`);
    pts.push(`100% { opacity: ${to === 3 ? 1 : 0}; }`);
    return pts.join(' ');
  };
  const css = [
    ...[0, 1, 2].map((m) => `.${u}-m${m} { opacity: ${m === 0 ? 1 : 0}; } section.present .${u}-m${m} { animation: ${u}-m${m} ${T0}s linear 1.2s infinite; } @keyframes ${u}-m${m} { ${win(m, m + 1)} }`),
    ...[1, 2].map((r) => `.${u}-real${r} { opacity: 0; } section.present .${u}-real${r} { animation: ${u}-real${r} ${T0}s linear 1.2s infinite; } @keyframes ${u}-real${r} { ${win(r, 3)} }`),
    ...[1, 2].map((r) => `section.present .${u}-sim${r} { animation: ${u}-sim${r} ${T0}s linear 1.2s infinite; } @keyframes ${u}-sim${r} { ${win(0, r)} }`),
    `@media (prefers-reduced-motion: reduce) { section.present [class*="${u}-"] { animation: none !important; } }`,
  ].join('\n');
  return (
    <div className="relative mx-auto h-[400px] w-[1100px]" role="img" aria-label="newswitch reads the Optikit design. A setting, simulate, cycles from everything, to unwired, to nothing: first every part is simulated and the frame shows beads drawn through the traced optics, then the wired stage and camera A are real, then the whole instrument is real. The same actions run in every mode.">
      <LoopStyles css={css} />

      {/* from Optikit */}
      <div className="sm-in absolute left-0 top-[110px] flex w-[200px] flex-col gap-1.5 rounded-2xl border-2 border-dashed border-fd-border bg-fd-card/60 p-3.5" style={delay(0.1)}>
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">from Optikit</span>
        <span className="text-[18px] font-semibold leading-tight">the design</span>
        <span className="text-[13.5px] leading-snug text-fd-muted-foreground">parts, light paths, µm per pixel, pinned by its hash</span>
      </div>
      <svg width={1100} height={400} viewBox="0 0 1100 400" className="absolute inset-0" aria-hidden>
        <Path className="sm-draw" style={delay(0.4)} d="M206 170 L262 170" stroke={BORDER} width={2.4} />
        <Path className="sm-draw" style={delay(0.9)} d="M672 170 L728 170" stroke={BORDER} width={2.4} />
        <circle className="sm-fade" style={delay(0.6)} cx={262} cy={170} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
        <circle className="sm-fade" style={delay(1.1)} cx={728} cy={170} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
      </svg>

      {/* newswitch: the instrument, part by part */}
      <div className="sm-pop absolute left-[268px] top-0 flex h-[380px] w-[400px] flex-col gap-2.5 rounded-2xl border-2 border-fd-border bg-fd-card p-3.5 shadow-sm" style={delay(0.3)}>
        <div className="flex items-baseline justify-between">
          <span className="text-[19px] font-semibold">newswitch</span>
          <span className="font-mono text-[12px] text-fd-muted-foreground">the instrument</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[13px]">
          <span className="text-fd-muted-foreground">simulate:</span>
          <span className="flex flex-1 rounded-lg border border-fd-border bg-fd-background/60 p-0.5">
            {NS_MODES.map((m, i) => (
              <span key={m} className="relative flex-1 py-1 text-center">
                <span className={`${u}-m${i} absolute inset-0 rounded-md bg-fd-primary`} />
                <span className="relative">
                  <span className={cn(`${u}-m${i}`, 'absolute inset-0 font-semibold text-fd-primary-foreground')}>{m}</span>
                  <span className="text-fd-muted-foreground">{m}</span>
                </span>
              </span>
            ))}
          </span>
        </div>
        {NS_PARTS.map((p, i) => (
          <div key={p.name} className="sm-in flex items-center justify-between rounded-lg border border-fd-border bg-fd-background/60 px-3 py-[7px]" style={delay(0.6 + i * 0.1)}>
            <span className="flex items-baseline gap-2">
              <span className="text-[15.5px] font-semibold">{p.name}</span>
              <span className="font-mono text-[11.5px] text-fd-muted-foreground">{p.what}</span>
            </span>
            <span className="relative h-[22px] w-[92px]">
              <span className={`${u}-sim${p.realFrom} absolute inset-0 flex items-center justify-center rounded-full border border-dashed border-fd-border font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-fd-muted-foreground`}>simulated</span>
              <span className={`${u}-real${p.realFrom} absolute inset-0 flex items-center justify-center rounded-full bg-fd-primary font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-fd-primary-foreground`}>hardware</span>
            </span>
          </div>
        ))}
        <span className="mt-auto text-[13.5px] leading-snug text-fd-muted-foreground">
          The same actions, states and bloks in every mode: Arkitekt can’t tell the difference.
        </span>
      </div>

      {/* what comes out */}
      <div className="sm-pop absolute left-[734px] top-0 flex w-[366px] flex-col gap-2 rounded-2xl border-2 border-fd-border bg-fd-card p-3.5 shadow-sm" style={delay(1)}>
        <div className="flex items-baseline justify-between">
          <span className="text-[17px] font-semibold">camera A</span>
          <span className="relative h-[18px] w-[190px] text-right font-mono text-[12px] text-fd-primary">
            {NS_SAYS.map((s, i) => (
              <span key={s} className={`${u}-m${i} absolute inset-0`}>{s}</span>
            ))}
          </span>
        </div>
        <svg viewBox="0 0 270 250" className="h-[226px] w-full rounded-xl bg-[#0b1020]" aria-hidden>
          <defs>
            <filter id={`${u}-blur`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>
          </defs>
          <g filter={`url(#${u}-blur)`}>
            {BEADS.map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} fill="#4ade80" fillOpacity={0.55 + (i % 3) * 0.15} />
            ))}
          </g>
          <g className={`${u}-m0`}>
            <text x={10} y={240} fontSize={11} fontFamily="ui-monospace, monospace" fill="#94a3b8">gfp-beads · drawn through the traced optics</text>
          </g>
        </svg>
        <div className="flex flex-col gap-1">
          {['routines run before the hardware exists', 'calibration finds the errors hidden in it'].map((t, i) => (
            <span key={t} className="sm-in flex items-center gap-2 text-[14px]" style={delay(1.6 + i * 0.2)}>
              <Check className="size-[16px] shrink-0 text-fd-primary" strokeWidth={2.6} /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- a microscope for one question ------------------------------------------ */

function BlokFrame({ children, at }: { children: ReactNode; at: number }) {
  return (
    <div className="sm-pop relative rounded-xl border-2 border-fd-primary/50 bg-fd-background p-3 shadow-sm" style={delay(at)}>
      <span className="absolute -top-[10px] right-3 rounded-full bg-fd-primary px-2 py-px font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-fd-primary-foreground">blok</span>
      {children}
    </div>
  );
}

/** Three instruments, each assembled for one question, each shipping the
    bloks for it in its description. Same hub, same actions, its own UI. */
export function QuestionScopesFigure() {
  const decay = Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    return `${i === 0 ? 'M' : 'L'}${8 + t * 220} ${84 - 70 * Math.exp(-t * 4)}`;
  }).join(' ');
  const bars = Array.from({ length: 22 }, (_, i) => 70 * Math.exp(-(i / 21) * 4) * (0.85 + ((i * 37) % 10) / 40));
  const profile = Array.from({ length: 40 }, (_, i) => {
    const x = i / 39;
    return `${i === 0 ? 'M' : 'L'}${8 + x * 220} ${84 - 66 * Math.exp(-((x - 0.5) ** 2) / 0.012)}`;
  }).join(' ');
  const cards: { q: string; scope: string; what: string; blok: ReactNode }[] = [
    {
      q: 'Did the stain take?',
      scope: 'he-microscope',
      what: 'brightfield · colour camera',
      blok: (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <svg width={64} height={64} viewBox="0 0 64 64" aria-hidden className="rounded-lg">
              <rect width={64} height={64} fill="#f6eef3" />
              {[[14, 16, 6, 1], [36, 12, 5, 0], [50, 30, 6, 1], [22, 38, 7, 1], [42, 48, 5, 0], [10, 52, 5, 0]].map(([x, y, r, b], i) => (
                <circle key={i} cx={x} cy={y} r={r} fill={b ? '#8a5a2b' : '#6b5aa6'} fillOpacity={0.85} />
              ))}
            </svg>
            <span className="flex flex-1 flex-col gap-1">
              <span className="font-mono text-[12px] text-fd-muted-foreground">DAB uptake</span>
              <span className="relative h-[10px] rounded-full bg-fd-muted">
                <span className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-[#8a5a2b]" />
                <span className="absolute -inset-y-1 left-[45%] w-[2px] bg-fd-foreground" />
              </span>
              <span className="font-mono text-[12px]">0.62 · above 0.45</span>
            </span>
          </div>
          <div className="flex gap-2">
            <span className="flex-1 rounded-lg bg-fd-primary py-1 text-center text-[13px] font-semibold text-fd-primary-foreground">next stain</span>
            <span className="flex-1 rounded-lg border border-fd-border py-1 text-center text-[13px]">stain again</span>
          </div>
        </div>
      ),
    },
    {
      q: 'How long does it glow?',
      scope: 'flim',
      what: 'pulsed source · photon counter',
      blok: (
        <div className="flex flex-col gap-1.5">
          <svg viewBox="0 0 236 92" className="h-[92px] w-full" aria-hidden>
            {bars.map((h, i) => (
              <rect key={i} x={8 + i * 10} y={86 - h} width={8} height={h} rx={1} fill={PRIMARY} fillOpacity={0.25} />
            ))}
            <path d={decay} fill="none" stroke={PRIMARY} strokeWidth={2.2} />
            <line x1={6} y1={87} x2={232} y2={87} stroke={BORDER} />
          </svg>
          <span className="flex justify-between font-mono text-[12.5px]">
            <span className="text-fd-muted-foreground">fit · mono-exp</span>
            <span className="font-semibold text-fd-primary">τ = 2.4 ns</span>
          </span>
        </div>
      ),
    },
    {
      q: 'Is the sheet in focus?',
      scope: 'light-sheet',
      what: 'cylindrical lens · two arms',
      blok: (
        <div className="flex flex-col gap-1.5">
          <svg viewBox="0 0 236 92" className="h-[92px] w-full" aria-hidden>
            <path d={profile} fill={PRIMARY} fillOpacity={0.12} stroke={PRIMARY} strokeWidth={2.2} />
            <line x1={118} y1={6} x2={118} y2={88} stroke={WARN} strokeWidth={1.5} strokeDasharray="4 4" />
            <line x1={6} y1={87} x2={232} y2={87} stroke={BORDER} />
          </svg>
          <span className="flex items-center gap-2 font-mono text-[12.5px]">
            <span className="text-fd-muted-foreground">offset</span>
            <span className="relative h-[6px] flex-1 rounded-full bg-fd-muted">
              <span className="absolute -top-[4px] left-[50%] size-[14px] -translate-x-1/2 rounded-full border-2 border-fd-primary bg-fd-card" />
            </span>
            <span className="font-semibold text-fd-primary">waist 4.1 µm</span>
          </span>
        </div>
      ),
    },
  ];
  return (
    <div className="mx-auto flex w-[1100px] flex-col gap-4" role="img" aria-label="Three instruments, each built for one question. An H and E brightfield scope asks did the stain take, and ships a stain-check blok. A FLIM scope asks how long does it glow, and ships a lifetime blok. A light-sheet asks is the sheet in focus, and ships a sheet-alignment blok.">
      <div className="grid grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <div key={c.scope} className="sm-in flex flex-col gap-3 rounded-2xl border-2 border-fd-border bg-fd-card p-4 shadow-sm" style={delay(0.15 + i * 0.35)}>
            <span className="text-[24px] font-bold italic leading-tight tracking-[-0.01em]">“{c.q}”</span>
            <span className="flex flex-col">
              <span className="font-mono text-[15px] font-semibold">{c.scope}</span>
              <span className="font-mono text-[12px] text-fd-muted-foreground">{c.what}</span>
            </span>
            <BlokFrame at={0.6 + i * 0.35}>{c.blok}</BlokFrame>
          </div>
        ))}
      </div>
      <p className="sm-fade text-center text-[17px] text-fd-muted-foreground" style={delay(1.8)}>
        The bloks live in the instrument’s description; Orkestrator renders them. <span className="text-fd-foreground">Change the question, change the instrument, and its UI comes along.</span>
      </p>
    </div>
  );
}

/* --- every detector is a sensor in the coordinate graph ---------------------- */

/** The same five cells, as each camera sees them. */
const SENSOR_CELLS: [number, number, number][] = [
  [34, 38, 13], [86, 30, 10], [104, 82, 15], [52, 96, 11], [76, 120, 8],
];

function SensorTile({ x, y, color, mirrored = false, rings = false, label }: { x: number; y: number; color: string; mirrored?: boolean; /** Outlines only, to lay over another tile. */ rings?: boolean; label?: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={140} height={140} rx={8} fill={rings ? 'none' : SURFACE} stroke={color} strokeWidth={2} strokeDasharray={rings ? '6 5' : undefined} />
      <g transform={mirrored ? 'translate(140 0) scale(-1 1)' : undefined}>
        {SENSOR_CELLS.map(([cx, cy, r], i) =>
          rings ? (
            <circle key={i} cx={cx} cy={cy} r={r + 4} fill="none" stroke={color} strokeWidth={3} />
          ) : (
            <circle key={i} cx={cx} cy={cy} r={r} fill={color} fillOpacity={0.55} />
          ),
        )}
        {/* a corner marker, so the flip shows */}
        <path d="M10 10 L30 10 M10 10 L10 30" stroke={color} strokeWidth={3} strokeLinecap="round" />
      </g>
      {label}
    </g>
  );
}

/** Each detector is a coordinate system of its own: camera A straight, camera
    B mirrored by the splitter. The trace from Optikit says how each one maps
    onto the stage and the sample, so both land on the same cells. */
export function SensorSpacesFigure() {
  const u = useUid();
  const sample = { x: 800, y: 30, w: 290, h: 330 };
  const tile = { x: sample.x + 75, y: sample.y + 80 };
  const css = `
.${u}-flip { transform-box: fill-box; transform-origin: center; }
section.present .${u}-flip { animation: ${u}-flip 1s cubic-bezier(.6,0,.2,1) 2.6s both; }
@keyframes ${u}-flip { from { transform: scaleX(-1); } to { transform: none; } }
@media (prefers-reduced-motion: reduce) { section.present .${u}-flip { animation: none; } }
`;
  const conv = (fx: number, fy: number, at: number): CSSProperties => ({ ...delay(at), ['--x' as string]: `${fx - tile.x}px`, ['--y' as string]: `${fy - tile.y}px` }) as CSSProperties;
  const node = (x: number, y: number, title: string, sub: string, at: number) => (
    <g className="sm-pop" style={delay(at)}>
      <rect x={x - 70} y={y - 26} width={140} height={52} rx={12} fill={SURFACE} stroke={BORDER} strokeWidth={1.6} />
      <T x={x} y={y - 7} size={16} weight={600}>{title}</T>
      <T x={x} y={y + 12} size={11.5} mono fill={MUTED}>{sub}</T>
    </g>
  );
  return (
    <svg width={1100} height={400} viewBox="0 0 1100 400" role="img" aria-label="Camera A and camera B each have their own coordinate system in pixels; B sees the cells mirrored by the splitter. Each maps through its traced optics, 0.345 µm per pixel and for B a mirror, onto the stage and then the sample, where both images land on the same cells." className="mx-auto block">
      <LoopStyles css={css} />

      {/* the sensors */}
      <SensorTile x={40} y={20} color={PRIMARY} label={<T x={70} y={160} size={13} mono fill={MUTED}>camera A · y, x · px</T>} />
      <SensorTile x={40} y={210} color={WARN} mirrored label={<T x={70} y={160} size={13} mono fill={MUTED}>camera B · y, x · px</T>} />

      {/* the graph */}
      <Path className="sm-draw" style={delay(0.6)} d="M180 90 C 300 90, 330 200, 450 200" stroke={PRIMARY} width={2.4} />
      <Path className="sm-draw" style={delay(0.8)} d="M180 280 C 300 280, 330 200, 450 200" stroke={WARN} width={2.4} />
      <Path className="sm-draw" style={delay(1.2)} d="M590 200 L 660 200" stroke={BORDER} width={2.4} />
      <Path className="sm-draw" style={delay(1.4)} d={`M660 200 L ${sample.x} 200`} stroke={BORDER} width={2.4} />
      <g className="sm-in" style={delay(0.9)}>
        <T x={300} y={78} size={13} mono weight={700} fill={PRIMARY}>× 0.345 µm/px</T>
        <T x={300} y={96} size={11.5} fill={MUTED}>from the trace</T>
        <T x={300} y={300} size={13} mono weight={700} fill={WARN}>mirror · × 0.345</T>
        <T x={300} y={318} size={11.5} fill={MUTED}>the splitter folds it</T>
      </g>
      {node(520, 200, 'stage', 'x · y · z µm', 1.1)}
      <T className="sm-in" style={delay(1.5)} x={730} y={186} size={11.5} mono fill={MUTED}>holder</T>

      {/* the sample: both land on the same cells */}
      <rect className="sm-fade" style={delay(1.4)} x={sample.x} y={sample.y} width={sample.w} height={sample.h} rx={16} fill={PRIMARY} fillOpacity={0.05} stroke={PRIMARY} strokeOpacity={0.45} strokeWidth={1.6} />
      <T className="sm-fade" style={delay(1.4)} x={sample.x + 16} y={sample.y + 22} anchor="start" size={11} mono weight={700} fill={MUTED}>
        SAMPLE · µm
      </T>
      <g className="sm-converge" style={conv(40, 20, 1.8)}>
        <SensorTile x={tile.x} y={tile.y} color={PRIMARY} />
      </g>
      <g className="sm-converge" style={conv(40, 210, 2)}>
        <g className={`${u}-flip`}>
          <SensorTile x={tile.x} y={tile.y} color={WARN} rings />
        </g>
      </g>
      <T className="sm-in" style={delay(3.4)} x={sample.x + sample.w / 2} y={sample.y + sample.h - 50} size={15} weight={600}>
        same cells, both cameras
      </T>
      <T className="sm-in" style={delay(3.5)} x={sample.x + sample.w / 2} y={sample.y + sample.h - 28} size={12.5} fill={MUTED}>
        no hand-made registration
      </T>
    </svg>
  );
}
