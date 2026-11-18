'use client';

/* Animated figures for the Arkitekt half of the smart microscopy deck: the
   hub, the app, and one figure per line of the debt list it pays down (mesh,
   replay, coordinate systems, spaces, bloks), then Optikit.

   Built on `smart-microscopy-anim.tsx`. Loops that tell a short story (share,
   bloks) carry their own keyframes, scoped under a figure uid and only
   running on the current slide. Example values (timestamps, coordinates,
   thresholds) are illustrative, not from a real run. */

import { Fragment as ReactFragment, useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Fragment } from '@revealjs/react';
import { Bot, BrickWall, Building2, Check, Cpu, Database, LayoutDashboard, Laptop, Layers, Lock, Microchip, Microscope, Network, NotebookPen, Pipette, Radio, ScanSearch, Server, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { ArmMoving3D, FrameModel3D } from './smart-microscopy-frame-3d';
import { cn } from '@/lib/cn';
import {
  Arrowheads,
  BORDER,
  Box,
  FG,
  LoopStyles,
  MUTED,
  PRIMARY,
  Path,
  SURFACE,
  Steps,
  T,
  Token,
  WARN,
  delay,
  useUid,
} from './smart-microscopy-anim';
import { KimFigure } from './smart-microscopy-figures';

/** `section.present`-scoped looping animation for one element class. */
/** A figure whose entrance is its one presentational animation: its builds
    keep their `delay()` stagger (as inside `<Steps>`), but it plays through on
    arrival, with no clicks of its own. For figures that already advance by
    reveal.js fragments. */
const STAGGERED = { '--sm-stagger': 1 } as CSSProperties;

function loop(u: string, name: string, seconds: number, keyframes: string, start = 0.6) {
  return `section.present .${u}-${name} { animation: ${u}-${name} ${seconds}s linear ${start}s infinite both; }
  @keyframes ${u}-${name} { ${keyframes} }`;
}

/* --- the hub ---------------------------------------------------------------- */

type HubNode = { name: string; what: string; icon: LucideIcon; teaser?: boolean };

const HUB_DEVICES: HubNode[] = [
  { name: 'Microscopes', what: 'acquire · move stage', icon: Microscope },
  { name: 'Robots', what: 'carry · stain', icon: Bot },
  { name: 'Clusters', what: 'train · scale out', icon: Server, teaser: true },
];
const HUB_APPS: HubNode[] = [
  { name: 'Fiji', what: 'macros become actions', icon: ScanSearch },
  { name: 'napari', what: 'view · annotate', icon: Layers },
  { name: 'Notebooks', what: 'script the whole lab', icon: NotebookPen },
];
const HUB_BELOW: (HubNode & { x: number })[] = [
  { name: 'Orkestrator', what: 'workflows · UI', icon: Workflow, x: 262 },
  { name: 'The mesh', what: 'one lab network', icon: Network, x: 522 },
];

/** One node of the hub graph: an icon tile, a name, what it does there. */
function HubCard({ node, x, y, w, at, tone = 'default', tag }: { node: HubNode; x: number; y: number; w: number; at: number; tone?: 'default' | 'ghost' | 'primary'; tag?: string }) {
  const Icon = node.icon;
  return (
    <div className="absolute" style={{ left: x, top: y, width: w }}>
      <div
        className={cn(
          'sm-pop flex h-[76px] items-center gap-3.5 rounded-2xl border-2 px-3.5',
          tone === 'ghost' ? 'border-dashed border-fd-border bg-fd-card/40 opacity-60' : 'border-fd-border bg-fd-card shadow-sm',
          tone === 'primary' && 'border-fd-primary/70 shadow-md',
        )}
        style={delay(at)}
      >
        <span
          className={cn(
            'flex size-[46px] shrink-0 items-center justify-center rounded-xl',
            tone === 'ghost' ? 'bg-fd-muted text-fd-muted-foreground' : 'bg-fd-primary/12 text-fd-primary',
            tone === 'primary' && 'bg-fd-primary text-fd-primary-foreground',
          )}
        >
          <Icon className="size-[26px]" strokeWidth={1.8} />
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="flex items-center gap-2 text-[20px] font-semibold leading-tight">
            {node.name}
            {tag ? (
              <span className={cn('whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em]', tone === 'primary' ? 'bg-fd-primary/15 text-fd-primary' : 'bg-fd-muted text-fd-muted-foreground')}>
                {tag}
              </span>
            ) : null}
          </span>
          <span className="truncate font-mono text-[12.5px] text-fd-muted-foreground">{node.what}</span>
        </span>
      </div>
    </div>
  );
}

/** Hub in the middle, apps around it, calls flowing through. Microscopes and
    robots (the arm and the OT-2 of the running example) are first-class from
    the start; `beyond` turns the cluster teaser into one for the outlook. */
export function HubFigure({ beyond = false }: { beyond?: boolean }) {
  const u = useUid();
  const W = 1000;
  const side = { w: 252, ys: [22, 160, 298] };
  const hub = { x: 380, y: 100, w: 240, h: 176 };
  const rows = side.ys.map((y) => y + 38);
  const ports = [hub.y + 48, hub.y + 88, hub.y + 128];
  const inLines = rows.map((cy, i) => `M${side.w} ${cy} C ${side.w + 70} ${cy}, ${hub.x - 70} ${ports[i]}, ${hub.x} ${ports[i]}`);
  const outLines = rows.map((cy, i) => `M${W - side.w} ${cy} C ${W - side.w - 70} ${cy}, ${hub.x + hub.w + 70} ${ports[i]}, ${hub.x + hub.w} ${ports[i]}`);
  const below = HUB_BELOW.map((b) => [b.x + 108, 344] as const);
  const downPorts = [hub.x + 70, hub.x + hub.w - 70];
  const down = below.map(([bx, by], i) => `M${downPorts[i]} ${hub.y + hub.h} C ${downPorts[i]} ${hub.y + hub.h + 40}, ${bx} ${by - 40}, ${bx} ${by}`);
  const muted = (i: number) => HUB_DEVICES[i].teaser && !beyond;
  const lit = (i: number) => HUB_DEVICES[i].teaser && beyond;
  const dots: [number, number, boolean][] = [
    ...rows.map((cy, i) => [side.w, cy, muted(i)] as [number, number, boolean]),
    ...ports.map((py, i) => [hub.x, py, muted(i)] as [number, number, boolean]),
    ...rows.map((cy) => [W - side.w, cy, false] as [number, number, boolean]),
    ...ports.map((py) => [hub.x + hub.w, py, false] as [number, number, boolean]),
    ...downPorts.map((x) => [x, hub.y + hub.h, false] as [number, number, boolean]),
    ...below.map(([x, y]) => [x, y, false] as [number, number, boolean]),
  ];
  return (
    <div className="relative mx-auto h-[420px] w-[1000px]" role="img" aria-label={`Arkitekt in the middle; microscopes, robots ${beyond ? 'and clusters' : 'and, later, clusters'} on one side, Fiji, napari and notebooks on the other, Orkestrator and the mesh below`}>
      <LoopStyles
        css={`
          .${u}-halo { transform-box: fill-box; transform-origin: center; opacity: 0; }
          section.present .${u}-halo { animation: ${u}-halo 3s ease-out 1.6s infinite; }
          @keyframes ${u}-halo { 0% { opacity: 0.45; transform: scale(1); } 100% { opacity: 0; transform: scale(1.25); } }
          @media (prefers-reduced-motion: reduce) { section.present .${u}-halo { animation: none; } }
        `}
      />
      <svg width={W} height={420} viewBox={`0 0 ${W} 420`} className="absolute inset-0" aria-hidden>
        <rect className={`${u}-halo`} x={hub.x} y={hub.y} width={hub.w} height={hub.h} rx={26} fill="none" stroke={PRIMARY} strokeWidth={3} />
        {inLines.map((d, i) => (
          <Path key={`l${i}`} className={muted(i) ? 'sm-fade' : 'sm-draw'} style={delay(0.8 + i * 0.15)} d={d} stroke={lit(i) ? PRIMARY : BORDER} width={lit(i) ? 3 : 2.2} dash={muted(i) ? '6 7' : undefined} />
        ))}
        {outLines.map((d, i) => (
          <Path key={`r${i}`} className="sm-draw" style={delay(1.1 + i * 0.15)} d={d} stroke={BORDER} width={2.2} />
        ))}
        {down.map((d, i) => (
          <Path key={`d${i}`} className="sm-draw" style={delay(1.4 + i * 0.15)} d={d} stroke={BORDER} width={2.2} />
        ))}
        <g className="sm-fade" style={delay(1.5)}>
          {dots.map(([x, y, m], i) => (
            <circle key={i} cx={x} cy={y} r={5} fill={SURFACE} stroke={m ? BORDER : PRIMARY} strokeWidth={2} />
          ))}
        </g>
        <g className="sm-fade" style={delay(1.8)}>
          {inLines.map((d, i) =>
            muted(i) ? null : (
              <Token key={`ti${i}`} path={d} dur={lit(i) ? 1.6 : 2.4} phase={i * 0.3}>
                <circle r={6} fill={PRIMARY} />
              </Token>
            ),
          )}
          {outLines.map((d, i) => (
            <Token key={`to${i}`} path={d} dur={2.8} phase={0.5 + i * 0.25}>
              <circle r={5} fill={PRIMARY} fillOpacity={0.7} />
            </Token>
          ))}
          {down.map((d, i) => (
            <Token key={`td${i}`} path={d} dur={2.2} phase={0.2 + i * 0.4}>
              <circle r={5} fill={PRIMARY} fillOpacity={0.7} />
            </Token>
          ))}
        </g>
      </svg>

      <span className="sm-fade absolute left-0 top-[-14px] font-mono text-[13px] font-bold tracking-[0.12em] text-fd-muted-foreground" style={delay(0.1)}>
        DEVICES
      </span>
      <span className="sm-fade absolute right-0 top-[-14px] font-mono text-[13px] font-bold tracking-[0.12em] text-fd-muted-foreground" style={delay(0.1)}>
        HOOKS INTO
      </span>

      {HUB_DEVICES.map((n, i) => (
        <HubCard
          key={n.name}
          node={n}
          x={0}
          y={side.ys[i]}
          w={side.w}
          at={0.3 + i * 0.12}
          tone={n.teaser ? (beyond ? 'primary' : 'ghost') : 'default'}
          tag={n.teaser ? (beyond ? 'same actions' : 'later') : undefined}
        />
      ))}
      {HUB_APPS.map((n, i) => (
        <HubCard key={n.name} node={n} x={W - side.w} y={side.ys[i]} w={side.w} at={0.5 + i * 0.12} />
      ))}
      {HUB_BELOW.map((n, i) => (
        <HubCard key={n.name} node={n} x={n.x} y={344} w={216} at={0.9 + i * 0.1} />
      ))}

      {/* the hub */}
      <div className="absolute" style={{ left: hub.x, top: hub.y, width: hub.w, height: hub.h }}>
        <div className="sm-pop flex size-full flex-col items-center justify-center gap-1.5 rounded-[26px] bg-fd-primary text-fd-primary-foreground shadow-xl" style={delay(0.2)}>
          <span className="flex size-[64px] items-center justify-center rounded-2xl bg-white/95 shadow-sm">
            <Logo className="size-[54px]" />
          </span>
          <span className="text-[30px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
          <span className="text-center font-mono text-[12.5px] leading-snug opacity-85">
            typed actions
            <br />
            data · provenance
          </span>
        </div>
      </div>
    </div>
  );
}

/* --- the middleman ---------------------------------------------------------- */

const MIDDLE_APPS: HubNode[] = [
  { name: 'Microscopes', what: 'openUC2 · acquire', icon: Microscope },
  { name: 'Robots', what: 'arm · OT-2 · stain', icon: Bot },
  { name: 'Analysis', what: 'StarDist · GPU', icon: Cpu },
  { name: 'Fiji · napari', what: 'macros · viewers', icon: ScanSearch },
];

/** The actions Orkestrator lists, by the app that offers them. */
const MIDDLE_ACTIONS: [string, string][] = [
  ['acquire_image', 'openuc2'],
  ['run_protocol', 'ot2'],
  ['run_trajectory', 'arm'],
  ['segment_image', 'stardist'],
];

/** Orkestrator in the browser: the hub's actions, and the last result. */
function OrkestratorScreen({ at }: { at: number }) {
  return (
    <div className="sm-pop flex size-full flex-col overflow-hidden rounded-2xl border-2 border-fd-primary/60 bg-fd-card shadow-md" style={delay(at)}>
      <div className="flex h-[28px] shrink-0 items-center gap-1.5 border-b border-fd-border bg-fd-muted px-3">
        {['#f87171', '#fbbf24', '#34d399'].map((c) => (
          <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-2 flex items-center gap-1.5 text-[12px] font-semibold">
          <Logo className="size-[14px]" /> Orkestrator
        </span>
        <span className="ml-auto font-mono text-[11px] text-fd-muted-foreground">lab › actions</span>
      </div>
      <div className="flex flex-1 gap-3 p-3">
        <div className="flex flex-1 flex-col gap-1.5">
          {MIDDLE_ACTIONS.map(([name, app], i) => (
            <span
              key={name}
              className={cn('flex items-center gap-2 rounded-lg border px-2 py-1', i === 0 ? 'border-fd-primary/60 bg-fd-primary/10' : 'border-fd-border')}
            >
              <span className="font-mono text-[12px] font-semibold">{name}</span>
              <span className="ml-auto font-mono text-[10.5px] text-fd-muted-foreground">{app}</span>
            </span>
          ))}
        </div>
        <div className="flex w-[96px] shrink-0 flex-col items-center gap-1">
          <ImageTile size={92} />
          <span className="font-mono text-[10.5px] text-fd-muted-foreground">image · stored</span>
        </div>
      </div>
    </div>
  );
}

/** The Arkitekt app on Kim's phone: the same actions, and the same result. */
function PhoneScreen({ at }: { at: number }) {
  return (
    <div className="sm-pop relative size-full overflow-hidden rounded-[24px] border-[5px] border-zinc-800 bg-gradient-to-b from-slate-700 to-slate-900 shadow-xl dark:border-zinc-600" style={delay(at)}>
      <span className="absolute left-1/2 top-[5px] h-[11px] w-[40px] -translate-x-1/2 rounded-full bg-zinc-900" />
      <div className="absolute inset-x-1.5 top-[22px] flex flex-col gap-1.5 rounded-2xl bg-white/95 p-2 text-zinc-900 shadow-lg">
        <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-zinc-500">
          <Logo className="size-[11px]" /> Arkitekt
        </span>
        <span className="font-mono text-[9.5px] font-semibold tracking-tight">acquire_image</span>
        <span className="flex items-center gap-1">
          <span className="rounded border border-zinc-300 px-1 font-mono text-[9.5px]">10x</span>
          <span className="ml-auto flex h-[20px] items-center rounded-md bg-fd-primary px-2 text-[10px] font-semibold text-fd-primary-foreground">Run</span>
        </span>
      </div>
      <div className="absolute inset-x-1.5 top-[104px] flex items-center gap-1.5 rounded-2xl bg-white/95 p-1.5 text-zinc-900 shadow-lg">
        <ImageTile size={40} />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold">image</span>
          <span className="text-[9px] text-zinc-500">just now</span>
        </span>
      </div>
      <span className="absolute bottom-[6px] left-1/2 h-[4px] w-[44px] -translate-x-1/2 rounded-full bg-white/60" />
    </div>
  );
}

/** A horizontal S-curve from one point to another. */
function sCurve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
}

/* What Kim would like to drive, and the script she would like to write. */
const WISH_MACHINES: HubNode[] = [
  { name: 'Robot arm', what: 'carries the slide', icon: Bot },
  { name: 'OT-2', what: 'stains · washes', icon: Pipette },
  { name: 'Microscope', what: 'openUC2 · images', icon: Microscope },
  { name: 'GPU server', what: 'segments · measures', icon: Cpu },
];
const WISH_SCRIPT: [string, string][] = [
  ['slide', ' = pickUp("rack A");'],
  ['stain', '(slide, "antibody 1");'],
  ['image1', ' = acquire(slide);'],
  ['washUntilGone', '(slide);'],
  ['stain', '(slide, "antibody 2");'],
  ['image2', ' = acquire(slide);'],
  ['overlay', '(image1, image2);'],
];

/** "Can we do better?", drawn like the middleman slide two slides on, with
    the middle still unknown: the machines on the left, Kim and the one script
    she wants to write on the right, and a question mark where the hub will
    be. Same geometry as `MiddlemanFigure`, so the next slide answers it. */
export function BetterMiddleFigure() {
  const W = 1000;
  const left = { w: 236, ys: [0, 104, 208, 312] };
  const hub = { x: 330, y: 100, w: 230, h: 220 };
  const editor = { x: 612, y: 20, w: 370, h: 232 };
  const kim = { x: 620, y: 272, size: 120 };
  const rows = left.ys.map((y) => y + 38);
  const inPorts = [0, 1, 2, 3].map((i) => hub.y + 50 + i * 40);
  const out: [number, number] = [hub.x + hub.w, hub.y + hub.h / 2];
  const front: [number, number] = [editor.x, editor.y + editor.h / 2];
  const dots: [number, number][] = [...rows.map((cy) => [left.w, cy] as [number, number]), ...inPorts.map((py) => [hub.x, py] as [number, number]), out, front];
  return (
    <div
      className="relative mx-auto h-[420px] w-[1000px]"
      role="img"
      aria-label="What Kim wants: on the left her machines, the robot arm, the OT-2, the microscope and the GPU server; on the right Kim and one ImageJ-style script with a Run button; in the middle, where something has to connect the two, a question mark"
    >
      <svg width={W} height={420} viewBox={`0 0 ${W} 420`} className="absolute inset-0" aria-hidden>
        {rows.map((cy, i) => (
          <path key={i} d={sCurve(left.w, cy, hub.x, inPorts[i])} fill="none" stroke={BORDER} strokeWidth={2.2} strokeDasharray="7 6" />
        ))}
        <path d={sCurve(front[0], front[1], out[0], out[1])} fill="none" stroke={BORDER} strokeWidth={2.2} strokeDasharray="7 6" />
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
        ))}
      </svg>

      {WISH_MACHINES.map((n, i) => (
        <HubCard key={n.name} node={n} x={0} y={left.ys[i]} w={left.w} at={0} />
      ))}

      {/* the middle: nobody knows yet */}
      <div className="absolute" style={{ left: hub.x, top: hub.y, width: hub.w, height: hub.h }}>
        <div className="flex size-full flex-col items-center justify-center rounded-[26px] border-[3px] border-dashed border-fd-primary/60 bg-fd-primary/8">
          <span className="text-[130px] font-black leading-none text-fd-primary">?</span>
        </div>
      </div>
      <p className="absolute text-center text-[15px] italic leading-snug text-fd-muted-foreground" style={{ left: hub.x - 30, top: hub.y + hub.h + 16, width: hub.w + 60 }}>
        something has to sit
        <br />
        in the middle
      </p>

      {/* the one script she wants to write */}
      <div className="absolute flex flex-col overflow-hidden rounded-xl border-2 border-[#1f2937] bg-white text-[#1f2937] shadow-md" style={{ left: editor.x, top: editor.y, width: editor.w, height: editor.h }}>
        <div className="flex h-[28px] shrink-0 items-center gap-1.5 border-b-2 border-[#1f2937] bg-[#e5e7eb] px-3">
          {['#f87171', '#fbbf24', '#4ade80'].map((c) => (
            <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
          ))}
          <span className="flex-1 pr-8 text-center font-mono text-[13px] font-semibold">multi_staining.ijm</span>
        </div>
        <div className="flex flex-1 flex-col px-3 py-2 font-mono text-[14px] leading-[22px]">
          {WISH_SCRIPT.map(([name, rest], i) => (
            <span key={i} className="whitespace-pre">
              <span className="mr-3 inline-block w-[14px] text-right text-[#9ca3af]">{i + 1}</span>
              <span className="font-semibold text-[#1d4ed8]">{name}</span>
              {rest}
            </span>
          ))}
        </div>
        <span className="absolute bottom-3 right-3 flex h-[30px] items-center rounded-md bg-[#16a34a] px-3.5 text-[15px] font-bold text-white">▶ Run</span>
      </div>

      {/* Kim, and all she asks */}
      <div className="absolute" style={{ left: kim.x, top: kim.y }}>
        <KimFigure size={kim.size} mood="happy" />
      </div>
      <p className="absolute rounded-3xl rounded-bl-sm border-2 border-fd-border bg-fd-card px-4 py-3 text-[18px] font-semibold leading-snug shadow-sm" style={{ left: kim.x + kim.size, top: kim.y - 6, width: 262 }}>
        <span className="sr-only">Kim: </span>“Could I not have a <span className="text-fd-primary">multi-computer ImageJ</span> that does these tasks for me, and I just write a script for it?”
      </p>
    </div>
  );
}

/** A tiny label image, the kind segmentation returns: one colour per cell. */
function LabelTile({ size = 44 }: { size?: number }) {
  const cells: [number, number, number, string][] = [
    [10, 11, 5, '#f472b6'],
    [24, 9, 4.4, '#60a5fa'],
    [35, 16, 5, '#facc15'],
    [14, 25, 5.4, '#34d399'],
    [28, 24, 4.6, '#fb923c'],
    [10, 37, 4, '#a78bfa'],
    [23, 36, 5, '#22d3ee'],
    [36, 33, 4.6, '#f87171'],
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" className="block shrink-0" aria-hidden>
      <rect x={0.5} y={0.5} width={43} height={43} rx={7} fill="#0b0f19" stroke={BORDER} />
      {cells.map(([cx, cy, r, fill], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={fill} />
      ))}
    </svg>
  );
}

/** Arkitekt as the middleman: the apps on the left offer their actions, Kim
    on the right uses them from Arkitekt's interfaces: Orkestrator in the
    browser, with the phone app overlapping its bottom right corner, on one
    connection to the hub. Neither side talks to the other directly.

    One press of "next": it is the data hub, too. A drawer slides out from
    under the hub, and data starts to move over the same connections: the
    microscope stores an image, the analysis retrieves it and stores its
    labels, and Kim's screen and Fiji retrieve what they need. */
export function MiddlemanFigure() {
  const u = useUid();
  const t0 = 3;
  const hop = 0.75;
  const at = { drawer: t0 + 0.1, image: t0 + 0.7, toAnalysis: t0 + 1.7, labels: t0 + 2.6, out: t0 + 3.5 };
  const end = at.out + hop + 0.3;
  const css = `
.${u}-tok { position: absolute; left: 0; top: 0; opacity: 0; offset-rotate: 0deg; }
section.present .${u}-tok { animation: ${u}-go ${hop}s cubic-bezier(.45,0,.3,1) var(--d) both; }
section.present .${u}-tok.${u}-rev { animation-name: ${u}-back; }
@keyframes ${u}-go { 0% { offset-distance: 0%; opacity: 0; } 12%, 85% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
@keyframes ${u}-back { 0% { offset-distance: 100%; opacity: 0; } 12%, 85% { opacity: 1; } 100% { offset-distance: 0%; opacity: 0; } }
section.present .${u}-drawer { animation: ${u}-drawer 0.5s cubic-bezier(.2,.8,.2,1) ${at.drawer}s both; }
@keyframes ${u}-drawer { from { opacity: 0; transform: translateY(-70px); } to { opacity: 1; transform: none; } }
.${u}-cap { opacity: 0; }
section.present .${u}-cap { animation: ${u}-cap 0.3s ease-out ${t0}s both; }
@keyframes ${u}-cap { from { opacity: 1; } to { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-tok, .${u}-drawer, .${u}-cap) { animation: none; } }
`;
  const W = 1000;
  const left = { w: 236, ys: [0, 104, 208, 312] };
  const hub = { x: 330, y: 100, w: 230, h: 220 };
  // the two interfaces: Orkestrator in the browser, the app on her phone
  const screen = { x: 612, y: 56, w: 340, h: 196 };
  const phone = { x: 878, y: 176, w: 112, h: 184 };
  // a script, tucked behind the browser's top right corner
  const code = { x: 730, y: -34, w: 262, h: 130 };
  const kim = { x: 640, y: 268, size: 130 };

  const appRows = left.ys.map((y) => y + 38);
  const inPorts = [0, 1, 2, 3].map((i) => hub.y + 50 + i * 40);
  // the interfaces share one connection to the hub
  const fronts = [[screen.x, screen.y + screen.h / 2]] as const;
  const outPorts = [hub.y + hub.h / 2];

  const appLinks = appRows.map((cy, i) => ({ toHub: sCurve(left.w, cy, hub.x, inPorts[i]) }));
  const frontLinks = fronts.map(([fx, fy], i) => ({ toHub: sCurve(fx, fy, hub.x + hub.w, outPorts[i]) }));

  const dots: [number, number][] = [
    ...appRows.map((cy) => [left.w, cy] as [number, number]),
    ...inPorts.map((py) => [hub.x, py] as [number, number]),
    ...outPorts.map((py) => [hub.x + hub.w, py] as [number, number]),
    ...fronts.map(([fx, fy]) => [fx, fy] as [number, number]),
  ];

  /* data on the move: along a connection, towards the hub or (`rev`) away from it */
  const token = (d: string, when: number, kind: 'image' | 'labels', rev = false) => (
    <div className={cn(`${u}-tok z-20 drop-shadow-md`, rev && `${u}-rev`)} style={{ offsetPath: `path('${d}')`, ...delay(when) }}>
      {kind === 'image' ? <ImageTile size={30} /> : <LabelTile size={30} />}
    </div>
  );

  return (
    <Steps live cues={[t0, end]} className="relative mx-auto w-fit">
    <div
      className="relative h-[420px] w-[1000px]"
      role="img"
      aria-label="Arkitekt as the middleman: microscopes, robots, analysis and Fiji or napari offer their actions on the left; on the right Kim uses them from Orkestrator in her browser, with the Arkitekt app on her phone overlapping it and a Python script calling the same actions behind it, on one connection to the hub. It is the data hub too: the apps store their images and labels in it and retrieve them from it, over the same connections"
    >
      <LoopStyles css={css} />
      <svg width={W} height={420} viewBox={`0 0 ${W} 420`} className="absolute inset-0" aria-hidden>
        {appLinks.map((l, i) => (
          <Path key={`a${i}`} className="sm-draw" style={delay(0.8 + i * 0.12)} d={l.toHub} stroke={BORDER} width={2.2} />
        ))}
        {frontLinks.map((l, i) => (
          <Path key={`f${i}`} className="sm-draw" style={delay(1.2 + i * 0.12)} d={l.toHub} stroke={BORDER} width={2.2} />
        ))}
        <g className="sm-fade" style={delay(1.5)}>
          {dots.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
          ))}
        </g>
      </svg>

      {MIDDLE_APPS.map((n, i) => (
        <HubCard key={n.name} node={n} x={0} y={left.ys[i]} w={left.w} at={0.3 + i * 0.1} />
      ))}
      {/* Arkitekt's interfaces: a script behind, the browser, and the phone
          overlapping its corner */}
      <div
        className="sm-in absolute overflow-hidden rounded-xl border-2 border-fd-border bg-[#0f172a] shadow-lg"
        style={{ left: code.x, top: code.y, width: code.w, height: code.h, ...delay(0.6) }}
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-2.5 py-1.5">
          <span className="size-[7px] rounded-full bg-[#f87171]" />
          <span className="size-[7px] rounded-full bg-[#fbbf24]" />
          <span className="size-[7px] rounded-full bg-[#34d399]" />
          <span className="ml-1.5 font-mono text-[10.5px] leading-none text-slate-400">stain_loop.py</span>
        </div>
        <pre className="px-3 pt-2 font-mono text-[10.5px] leading-[1.55] text-slate-200">
          <span className="text-slate-500"># the same actions, from Python</span>
          {'\n'}img = <span className="text-[#c4b5fd]">acquire_image</span>(objective=<span className="text-[#86efac]">{'"10x"'}</span>)
          {'\n'}labels = <span className="text-[#c4b5fd]">segment_image</span>(img)
        </pre>
      </div>
      <div className="absolute" style={{ left: screen.x, top: screen.y, width: screen.w, height: screen.h }}>
        <OrkestratorScreen at={0.7} />
      </div>
      <div className="absolute z-10 drop-shadow-xl" style={{ left: phone.x, top: phone.y, width: phone.w, height: phone.h }}>
        <PhoneScreen at={0.85} />
      </div>

      {/* the user */}
      <div className="sm-in absolute flex flex-col items-center" style={{ left: kim.x, top: kim.y, ...delay(1.0) }}>
        <KimFigure size={kim.size} mood="happy" />
      </div>

      {/* and the data hub: a drawer from under the hub */}
      <div
        className={`${u}-drawer absolute rounded-b-[22px] border-2 border-fd-primary/60 bg-fd-card shadow-md`}
        style={{ left: hub.x + 14, top: hub.y + hub.h - 26, width: hub.w - 28, height: 112 }}
      >
        <div className="flex h-full items-end justify-between px-3.5 pb-3">
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-1.5 text-[17px] font-bold leading-none">
              <Database className="size-[16px] text-fd-primary" aria-hidden />
              Datahub
            </span>
            <span className="font-mono text-[11px] leading-tight text-fd-muted-foreground">
              apps store
              <br />
              and retrieve
            </span>
          </div>
          <div className="flex gap-1.5">
            <span className="sm-pop" style={delay(at.image + hop - 0.1)}>
              <ImageTile size={30} />
            </span>
            <span className="sm-pop" style={delay(at.labels + hop - 0.1)}>
              <LabelTile size={30} />
            </span>
          </div>
        </div>
      </div>

      {/* the microscope stores an image; the analysis retrieves it and stores
          its labels; Kim's screen and Fiji retrieve what they need */}
      {token(appLinks[0].toHub, at.image, 'image')}
      {token(appLinks[2].toHub, at.toAnalysis, 'image', true)}
      {token(appLinks[2].toHub, at.labels, 'labels')}
      {token(frontLinks[0].toHub, at.out, 'image', true)}
      {token(appLinks[3].toHub, at.out + 0.15, 'labels', true)}

      {/* the hub */}
      <div className="absolute" style={{ left: hub.x, top: hub.y, width: hub.w, height: hub.h }}>
        <div className="sm-pop flex size-full flex-col items-center justify-center gap-2 rounded-[26px] bg-fd-primary text-fd-primary-foreground shadow-xl" style={delay(0.2)}>
          <span className="flex size-[64px] items-center justify-center rounded-2xl bg-white/95 shadow-sm">
            <Logo className="size-[54px]" />
          </span>
          <span className="text-[30px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
          <span className="text-center font-mono text-[12.5px] leading-snug opacity-85">
            typed actions
            <br />
            data · provenance
          </span>
        </div>
      </div>
      <div className={`${u}-cap absolute`} style={{ left: hub.x - 30, top: hub.y + hub.h + 16, width: hub.w + 60 }}>
        <p className="sm-fade text-center text-[15px] italic leading-snug text-fd-muted-foreground" style={delay(2.2)}>
          neither side knows where
          <br />
          the other one runs
        </p>
      </div>
    </div>
    </Steps>
  );
}

/* --- the app ---------------------------------------------------------------- */

/* The implicit contract, without code: the microscope app offers the
   functions it provides (name, inputs, outputs) to the hub, then opens one
   websocket and listens. From then on the hub assigns and the app answers. */
const OFFERS = [
  { app: 'openuc2', name: 'acquire_image', ins: 'objective', out: 'image' },
  { app: 'openuc2', name: 'move_stage', ins: 'x, y · µm', out: '–' },
];

/** The openUC2's `optics.objectives` state: what the objective dropdown offers. */
const OBJECTIVES = ['4x', '10x', '20x', '40x'];

function TypeLine({ ins, out }: { ins: string; out: string }) {
  return (
    <span className="flex items-center gap-1.5 whitespace-nowrap font-mono text-[12px] text-fd-muted-foreground">
      <span className="rounded bg-fd-muted px-1.5 py-px">{ins}</span>→<span className="rounded bg-fd-primary/12 px-1.5 py-px text-fd-primary">{out}</span>
    </span>
  );
}

/** A tiny stained slide: frosted label end, a counterstain, a few cells that
    took the stain. What a finished `run_protocol` leaves on the deck. */
function MiniSlide({ size = 44 }: { size?: number }) {
  const cells: [number, number, number, boolean][] = [
    [17, 20, 2.6, true],
    [23, 24, 2.2, false],
    [28, 19, 2.4, true],
    [33, 25, 2, true],
    [38, 21, 2.3, false],
    [21, 27, 1.8, true],
    [31, 28, 1.9, false],
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" className="block shrink-0" aria-hidden>
      <rect x={0.5} y={0.5} width={43} height={43} rx={7} fill={SURFACE} stroke={BORDER} />
      <rect x={4} y={13} width={36} height={18} rx={2} fill="#eef6fb" stroke="#9fb6c6" strokeWidth={0.8} />
      <rect x={4.4} y={13.4} width={8} height={17.2} rx={1.6} fill="#c9d4dc" />
      <ellipse cx={27} cy={23} rx={12} ry={6.5} fill="#b9a7d6" fillOpacity={0.55} />
      {cells.map(([cx, cy, r, took], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={took ? '#8a5a2b' : '#5b4b8a'} fillOpacity={took ? 0.9 : 0.75} />
      ))}
    </svg>
  );
}

/** A tiny brightfield tile, the kind `acquire_image` returns: hematoxylin
    nuclei, a few of them brown where the stain took. */
function ImageTile({ size = 44 }: { size?: number }) {
  const cells: [number, number, number, boolean][] = [
    [9, 10, 3, false],
    [19, 7, 2.6, true],
    [31, 11, 3.2, false],
    [37, 24, 2.8, true],
    [13, 22, 3, true],
    [25, 20, 2.4, false],
    [8, 34, 2.6, false],
    [21, 33, 3.1, true],
    [33, 36, 2.5, false],
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" className="block shrink-0" aria-hidden>
      <rect x={0.5} y={0.5} width={43} height={43} rx={7} fill="#f6eef3" stroke={BORDER} />
      <path d="M2 30 C 12 24, 22 34, 42 26 L42 42 L2 42 Z" fill="#e8c9da" fillOpacity={0.6} />
      {cells.map(([cx, cy, r, took], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={took ? '#8a5a2b' : '#6b5aa6'} fillOpacity={took ? 0.9 : 0.75} />
      ))}
    </svg>
  );
}

/** The mouse pointer in Orkestrator. */
function Pointer() {
  return (
    <svg width={22} height={26} viewBox="0 0 22 26" className="drop-shadow" aria-hidden>
      <path d="M2 2 L2 21 L7.2 16.4 L10.6 24 L14 22.5 L10.7 15 L18 15 Z" fill="#111" stroke="#fff" strokeWidth={1.6} strokeLinejoin="round" />
    </svg>
  );
}

/** The FRAME stands on the left with its app next to it. The app offers the
    functions it provides to the hub (a short entrance that plays once on
    arrival, as a two-message chat: here is what I can do; okay, now wait), and at first those two
    are all there is; then, one keypress at a time, the hub moves aside for Orkestrator, Kim picks `10x` for
    `acquire_image` there (the dropdown is fed by the microscope's state) and
    assigns it, the task goes down the openuc2 app's socket, and the image
    flows back to the hub and on to her. Steps are reveal fragments: empty markers
    whose `.visible` class drives the sibling selectors below. */
export function OfferFigure() {
  const u = useUid();
  const W = 1180;
  const pw = 260; // panel width
  const appX = 180; // the app's column; the FRAME itself stands to its left
  const hubFrom = W - pw; // the hub on the right, facing the app
  const hubTo = 545; // after step 1: in the middle
  const fx = W - pw; // Orkestrator takes the right slot
  /* the entrance, played once on arrival: the three offers cross to the hub,
     then the socket opens. About three seconds; everything after is a fragment. */
  // narrow layout: FRAME, its app | hub | Orkestrator
  const gapA = [appX + pw, hubTo] as const; // app ↔ hub, over the socket
  const gapB = [hubTo + pw, fx] as const; // hub ↔ Orkestrator
  const ySocket = 314;
  const yHttp = 132;
  const yMid = 176; // narrow layout: both connections run along the midline
  const form = 158; // top of the form inside the Orkestrator panel

  const on = (n: number, sel: string) => `.${u}-s${n}.visible ~ ${sel}, .${u}-s${n}.visible ~ * ${sel}`;
  const run = (n: number, cls: string, anim: string) => `${on(n, `.${u}-${cls}`)} { animation: ${anim}; }`;
  const k = (name: string, dur: number, d: number, ease = 'ease-out', fill = 'both') => `${u}-${name} ${dur}s ${ease} ${d}s ${fill}`;
  const css = `
@keyframes ${u}-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@keyframes ${u}-fadein { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-fadeout { from { opacity: 1; } to { opacity: 0; } }
@keyframes ${u}-pop { 0% { opacity: 0; transform: scale(0.85); } 70% { opacity: 1; transform: scale(1.03); } 100% { opacity: 1; transform: scale(1); } }
@keyframes ${u}-travel {
  0% { opacity: 0; transform: translateX(0); }
  15% { opacity: 1; }
  85% { opacity: 1; transform: translateX(calc(var(--dx) * 1px)); }
  100% { opacity: 0; transform: translateX(calc(var(--dx) * 1px)); }
}
@keyframes ${u}-acq {
  0%, 100% { transform: none; filter: none; }
  50% { transform: scale(1.02); filter: brightness(1.12) drop-shadow(0 0 6px color-mix(in oklab, var(--color-fd-primary) 60%, transparent)); }
}
/* the connection that stays open: its dashes never stop */
.${u}-flow { animation: ${u}-flow 0.9s linear infinite; }
@keyframes ${u}-flow { to { stroke-dashoffset: -28; } }
@keyframes ${u}-press { 0%, 100% { transform: scale(1); } 45% { transform: scale(0.93); } }
@keyframes ${u}-cur1 {
  0% { opacity: 0; transform: translate(230px, 298px); }
  7% { opacity: 1; transform: translate(230px, 298px); }
  24% { transform: translate(200px, 83px) scale(1); }
  26.5% { transform: translate(200px, 83px) scale(0.8); }
  29% { transform: translate(200px, 83px) scale(1); }
  45% { transform: translate(150px, 205px) scale(1); }
  47.5% { transform: translate(150px, 205px) scale(0.8); }
  50% { transform: translate(150px, 205px) scale(1); }
  66% { transform: translate(120px, 254px) scale(1); }
  68.5% { transform: translate(120px, 254px) scale(0.8); }
  71% { transform: translate(120px, 254px) scale(1); }
  90%, 100% { opacity: 1; transform: translate(180px, 250px); }
}
@keyframes ${u}-cur2 {
  0%, 100% { opacity: 1; transform: translate(180px, 250px) scale(1); }
  45% { opacity: 1; transform: translate(180px, 250px) scale(0.78); }
}

/* step 1: the app says what it can do; step 2: the hub answers, the socket opens */
:is(.${u}-msg1, .${u}-msg2, .${u}-chip, .${u}-chk, .${u}-arr, .${u}-http, .${u}-sock, .${u}-lis) { opacity: 0; }
${run(1, 'msg1', k('in', 0.4, 0))}
${run(1, 'http', k('fadein', 0.4, 0.3))}
${run(1, 'chip', `${u}-pop 0.35s ease-out var(--d) both`)}
${run(1, 'chk', `${u}-pop 0.35s ease-out var(--d) both`)}
${run(1, 'arr', `${u}-in 0.4s ease-out var(--d) both`)}
${run(2, 'msg2', k('in', 0.4, 0))}
${run(2, 'sock', k('fadein', 0.5, 0.5))}
${run(2, 'lis', k('in', 0.4, 0.4))}

/* step 3: the hub moves aside, Orkestrator appears, Kim picks a protocol */
.${u}-hub { transition: transform 1s cubic-bezier(.6,0,.2,1) 0.1s; }
${on(3, `.${u}-hub`)} { transform: translateX(${hubTo - hubFrom}px); }
.${u}-wide { transition: opacity 0.35s; }
${on(3, `.${u}-wide`)} { opacity: 0; }
:is(.${u}-narrow, .${u}-front, .${u}-tok, .${u}-row, .${u}-sel, .${u}-form, .${u}-cur,
  .${u}-asgA, .${u}-asgB, .${u}-task, .${u}-b-asg, .${u}-b-run, .${u}-b-done, .${u}-thumb, .${u}-s-run, .${u}-s-done,
  .${u}-imgA, .${u}-imgB, .${u}-btn2, .${u}-result, .${u}-list, .${u}-hl, .${u}-pick) { opacity: 0; }
${run(3, 'narrow', k('fadein', 0.5, 1))}
${run(3, 'front', k('pop', 0.5, 0.9))}
${run(3, 'tok', `${u}-travel 0.55s ease-in-out var(--d) both`)}
${run(3, 'row', `${u}-in 0.35s ease-out var(--d) both`)}
${run(3, 'sel', k('fadein', 0.2, 2.9))}
${run(3, 'form', k('in', 0.4, 3.05))}
${run(3, 'list', `${k('fadein', 0.15, 3.7)}, ${k('fadeout', 0.15, 4.55, 'ease-out', 'forwards')}`)}
${run(3, 'hl', k('fadein', 0.1, 4.35))}
${run(3, 'ph', k('fadeout', 0.1, 4.55))}
${run(3, 'pick', k('fadein', 0.15, 4.55))}
${run(3, 'cur', k('cur1', 3.8, 1.9, 'ease-in-out'))}

/* step 4: assign → the hub → down the ot2 app's socket */
${run(4, 'cur', k('cur2', 0.4, 0.1, 'ease-in-out'))}
${run(4, 'form', 'none; opacity: 1')}
${run(4, 'sel', 'none; opacity: 1')}
${run(4, 'list', 'none; opacity: 0')}
${run(4, 'ph', 'none; opacity: 0')}
${run(4, 'pick', 'none; opacity: 1')}
${run(4, 'btn', k('press', 0.4, 0.1))}
${run(4, 'btn1', k('fadeout', 0.15, 0.3))}
${run(4, 'btn2', k('fadein', 0.15, 0.3))}
${run(4, 'asgA', `${u}-travel 0.9s ease-in-out 0.5s both`)}
${run(4, 'task', k('in', 0.35, 1.35))}
${run(4, 'b-asg', `${k('fadein', 0.25, 1.35)}, ${k('fadeout', 0.2, 2.45, 'ease-out', 'forwards')}`)}
${run(4, 'asgB', `${u}-travel 0.9s ease-in-out 1.6s both`)}
${run(4, 's-run', k('fadein', 0.25, 2.4))}
${run(4, 'acq', `${u}-acq 1.8s ease-in-out 2.4s infinite`)}
${run(5, 'acq', 'none')}
${run(4, 'b-run', k('fadein', 0.25, 2.5))}

/* step 5: the microscope's "done" flows to the hub, then on to Orkestrator */
${run(5, 'cur', k('fadeout', 0.3, 0))}
${run(5, 'form', 'none; opacity: 1')}
${run(5, 'sel', 'none; opacity: 1')}
${run(5, 'list', 'none; opacity: 0')}
${run(5, 'ph', 'none; opacity: 0')}
${run(5, 'pick', 'none; opacity: 1')}
${run(5, 'btn1', 'none; opacity: 0')}
${run(5, 'btn2', `${k('fadein', 0.01, 0)}, ${k('fadeout', 0.25, 2.6, 'ease-out', 'forwards')}`)}
${run(5, 'task', 'none; opacity: 1')}
${run(5, 's-run', k('fadeout', 0.25, 0.45))}
${run(5, 's-done', k('fadein', 0.25, 0.45))}
${run(5, 'imgA', `${u}-travel 0.9s ease-in-out 0.6s both`)}
${run(5, 'b-run', k('fadeout', 0.2, 1.45))}
${run(5, 'b-done', k('fadein', 0.25, 1.5))}
${run(5, 'thumb', k('pop', 0.4, 1.45))}
${run(5, 'imgB', `${u}-travel 0.9s ease-in-out 1.9s both`)}
${run(5, 'result', k('in', 0.4, 2.75))}
@media (prefers-reduced-motion: reduce) {
  .${u}-hub { transition: none; }
  .${u}-flow { animation: none; }
}
`;
  /* a column, not a card: no border, no fill; the action rows inside are the boxes */
  const card = 'rounded-2xl';
  /* one key press each: empty fragments whose `.visible` drives the selectors above */
  const marker = (n: number) => <Fragment as="span" index={n} className={`${u}-s${n} absolute`} />;
  const travel = (dx: number) => ({ '--dx': dx }) as CSSProperties;
  return (
    <div className="relative mx-auto h-[400px] w-[1180px]" role="img" aria-label="The openUC2 microscope app offers the functions it provides, acquire_image and move_stage, with their inputs and outputs to the Arkitekt hub and opens a socket. Then the hub moves aside for Orkestrator, where Kim opens acquire_image, picks the 10x objective from a dropdown filled by the microscope’s state and assigns it; the task goes through the hub and down the socket to the microscope app, and the image flows back to the hub and on to Orkestrator.">
      <div className="sm-steps sm-animate absolute inset-0" style={STAGGERED}>
        {marker(1)}
        {marker(2)}
        {marker(3)}
        {marker(4)}
        {marker(5)}
        <LoopStyles css={css} />

        {/* wide layout: the offer lane and the socket band */}
        <svg width={W} height={400} viewBox={`0 0 ${W} 400`} className="absolute inset-0" aria-hidden>
          <Arrowheads id={u} />
          <g className={`${u}-wide`}>
            {/* the offer goes over plain http; the socket below stays open */}
            <g className={`${u}-http`}>
              <Path d={`M${appX + pw + 22} ${yHttp} L${hubFrom - 24} ${yHttp}`} stroke={MUTED} width={2.2} head={`${u}-fg`} />
              <text x={(appX + pw + hubFrom) / 2} y={yHttp + 20} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize={13} fill={MUTED}>
                http
              </text>
            </g>
            {/* the socket: one line, open in both directions */}
            <g className={`${u}-sock`}>
            <path className={`${u}-flow`} d={`M${appX + pw + 22} ${ySocket} L${hubFrom - 22} ${ySocket}`} fill="none" stroke={PRIMARY} strokeWidth={2.2} strokeDasharray="8 6" markerStart={`url(#${u}-primary)`} markerEnd={`url(#${u}-primary)`} />
            <text x={(appX + pw + hubFrom) / 2} y={ySocket + 20} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize={13} fill={PRIMARY}>
              websocket
            </text>
            </g>
          </g>
        </svg>

        {/* what the two say to each other, as a chat (wide layout) */}
        <div className={`${u}-wide absolute top-[30px] h-[260px]`} style={{ left: appX + pw + 26, width: hubFrom - appX - pw - 52 }}>
          <div className={`${u}-msg1 absolute left-0 top-0 flex items-end gap-2`}>
            <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-fd-primary/15 text-fd-primary">
              <Microscope className="size-[17px]" strokeWidth={2} />
            </span>
            <div className="flex flex-col gap-2 rounded-2xl rounded-bl-sm border border-fd-border bg-fd-card px-4 py-2.5 shadow-sm">
              <span className="text-[17px] font-medium leading-snug">
                <span className="sr-only">openUC2: </span>Here’s what I can do:
              </span>
              <span className="flex gap-1.5">
                {OFFERS.map((o, i) => (
                  <span key={o.name} className={`${u}-chip rounded-lg bg-fd-primary/12 px-2 py-1 font-mono text-[13px] font-semibold text-fd-primary`} style={delay(0.3 + i * 0.2)}>
                    {o.name}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <div className={`${u}-msg2 absolute bottom-0 right-0 flex max-w-[340px] items-end gap-2`}>
            <div className="rounded-2xl rounded-br-sm bg-fd-primary px-4 py-2.5 text-[17px] font-medium leading-snug text-fd-primary-foreground shadow-sm">
              <span className="sr-only">Arkitekt: </span>Okay. Now wait, I’ll tell you when somebody wants something.
            </div>
            <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-white/95">
              <Logo className="size-[22px]" />
            </span>
          </div>
        </div>

        {/* the instrument itself, standing to the left of its app */}
        <div className="sm-in absolute left-0 top-[70px] size-[180px]" style={delay(0.05)}>
          <div className={`${u}-acq size-full`}>
            <FrameModel3D className="pointer-events-none size-full" />
          </div>
        </div>
        <div className="absolute top-[6px]" style={{ left: appX, width: pw }}>
          <div className="sm-pop relative flex h-[340px] flex-col gap-2.5 rounded-2xl border-2 border-fd-primary/60 bg-fd-card p-3.5 shadow-md" style={delay(0.15)}>
            <div className="flex items-center gap-3">
              <span className="flex size-[44px] items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
                <Microscope className="size-[25px]" strokeWidth={1.8} />
              </span>
              <span className="text-[19px] font-semibold leading-tight">openUC2 FRAME</span>
            </div>
            {OFFERS.map((o, i) => (
              <div key={o.name} className="relative flex items-center justify-between gap-2 rounded-xl border border-fd-border bg-fd-background/60 px-3 py-2">
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[16px] font-semibold">{o.name}</span>
                  <TypeLine ins={o.ins} out={o.out} />
                </span>
                <span className="flex flex-col items-end gap-1">
                  <Check className={`${u}-chk size-[18px] text-fd-primary`} strokeWidth={2.6} style={delay(0.3 + i * 0.2)} />
                </span>
                {i === 0 ? (
                  <>
                    <span className={`${u}-s-run pointer-events-none absolute inset-[-2px] flex items-start justify-end rounded-xl border-2 border-fd-primary bg-fd-primary/10 p-1.5`}>
                      <span className="rounded-full bg-fd-primary px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-fd-primary-foreground">running</span>
                    </span>
                    <span className={`${u}-s-done pointer-events-none absolute inset-[-2px] flex items-start justify-end rounded-xl border-2 border-emerald-500 bg-emerald-500/10 p-1.5`}>
                      <span className="rounded-full bg-emerald-500 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white">done</span>
                    </span>
                  </>
                ) : null}
              </div>
            ))}
            <div className={`${u}-lis mt-auto flex items-center gap-2.5 rounded-xl bg-fd-primary/10 px-3 py-2 text-fd-primary`}>
              <span className="relative flex size-[12px] items-center justify-center">
                <svg width={12} height={12} className="absolute overflow-visible" aria-hidden>
                </svg>
                <span className="size-[10px] rounded-full bg-fd-primary" />
              </span>
              <span className="whitespace-nowrap font-mono text-[14px] font-semibold">openuc2 · listening</span>
              <Radio className="ml-auto size-[18px]" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* the hub: starts on the right, slides to the middle on step 1 */}
        <div className={`${u}-hub absolute top-[6px]`} style={{ left: hubFrom, width: pw }}>
          <div className="sm-pop flex h-[340px] flex-col gap-2.5 rounded-[26px] bg-fd-primary p-3.5 text-fd-primary-foreground shadow-xl" style={delay(0.3)}>
            <div className="flex items-center gap-3">
              <span className="flex size-[44px] items-center justify-center rounded-xl bg-white/95 shadow-sm">
                <Logo className="size-[36px]" />
              </span>
              <span className="text-[24px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
            </div>
            {OFFERS.map((o, i) => (
              <div key={o.name} className={`${u}-arr relative flex items-center justify-between gap-2 rounded-xl bg-fd-card px-3 py-2 text-fd-foreground shadow-sm`} style={delay(0.7 + i * 0.25)}>
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[16px] font-semibold">{o.name}</span>
                  <TypeLine ins={o.ins} out={o.out} />
                </span>
              </div>
            ))}
            <div className="relative mt-auto h-[64px]">
              <div className={`${u}-task absolute inset-0 flex items-center gap-3 rounded-xl bg-fd-card px-3 text-fd-foreground shadow-sm`}>
                <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span className="whitespace-nowrap font-mono text-[13px] font-semibold">task · acquire_image</span>
                  <span className="relative h-[20px]">
                    <span className={`${u}-b-asg absolute left-0 top-0 rounded-full bg-fd-muted px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-fd-muted-foreground`}>assigned</span>
                    <span className={`${u}-b-run absolute left-0 top-0 rounded-full bg-fd-primary px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-fd-primary-foreground`}>running</span>
                    <span className={`${u}-b-done absolute left-0 top-0 whitespace-nowrap rounded-full bg-emerald-500 px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-white`}>done · recorded</span>
                  </span>
                </span>
                <span className={`${u}-thumb`}>
                  <ImageTile size={44} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Orkestrator: Kim's browser */}
        <div className={`${u}-front absolute top-[6px] h-[340px]`} style={{ left: fx, width: pw }}>
          <div className="relative size-full overflow-hidden rounded-2xl border-2 border-fd-primary/60 bg-fd-card shadow-md">
            {/* the browser's title bar */}
            <div className="absolute inset-x-0 top-0 flex h-[30px] items-center gap-1.5 border-b border-fd-border bg-fd-muted px-3">
              {['#f87171', '#fbbf24', '#34d399'].map((c) => (
                <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
              ))}
              <span className="ml-2 flex items-center gap-1.5 text-[13px] font-semibold">
                <Logo className="size-[15px]" /> Orkestrator
              </span>
            </div>
            <span className="absolute left-4 top-[40px] text-[12px] font-medium text-fd-muted-foreground">Actions on the hub</span>
            {OFFERS.map((o, i) => (
              <div
                key={o.name}
                className={`${u}-row absolute inset-x-3.5 flex h-[36px] items-center justify-between rounded-lg border border-fd-border bg-fd-background/60 px-3`}
                style={{ top: 62 + i * 44, ...({ '--d': `${1.55 + i * 0.15}s` } as CSSProperties) }}
              >
                <span className="font-mono text-[15px] font-semibold">{o.name}</span>
                <span className="rounded bg-fd-muted px-1.5 py-px font-mono text-[11.5px] text-fd-muted-foreground">{o.app}</span>
                {i === 0 ? <span className={`${u}-sel pointer-events-none absolute inset-[-2px] rounded-lg border-2 border-fd-primary bg-fd-primary/10`} /> : null}
              </div>
            ))}
            <div className={`${u}-form absolute inset-x-3.5 rounded-xl border border-fd-border bg-fd-background/60`} style={{ top: form, height: 140 }}>
              <span className="absolute left-3 top-2.5 whitespace-nowrap font-mono text-[12px] text-fd-muted-foreground">
                objective ← openuc2 state
              </span>
              <div className="absolute inset-x-3 top-[32px] flex h-[34px] items-center rounded-lg border-2 border-fd-border bg-fd-card px-2.5 font-mono text-[15px]">
                <span className="relative flex-1">
                  <span className={`${u}-ph text-[14px] text-fd-muted-foreground`}>pick an objective</span>
                  <span className={`${u}-pick absolute inset-y-0 left-0`}>10x</span>
                </span>
                <span className="text-[12px] text-fd-muted-foreground">▼</span>
              </div>
              <div className={`${u}-btn absolute inset-x-3 top-[76px] h-[38px]`}>
                <span className={`${u}-btn1 absolute inset-0 flex items-center justify-center gap-2 rounded-lg bg-fd-primary text-[15px] font-semibold text-fd-primary-foreground shadow-sm`}>Assign ▶</span>
                <span className={`${u}-btn2 absolute inset-0 flex items-center justify-center gap-2 rounded-lg border-2 border-fd-primary/50 bg-fd-primary/10 text-[15px] font-semibold text-fd-primary`}>assigned · waiting…</span>
              </div>
              <div className={`${u}-result absolute inset-x-3 top-[72px] flex items-center gap-3`}>
                <ImageTile size={52} />
                <span className="flex flex-col whitespace-nowrap">
                  <span className="font-mono text-[13px] font-semibold">acquire_image · 10x</span>
                  <span className="flex items-center gap-1 text-[13px] font-semibold text-emerald-600">
                    <Check className="size-[15px]" strokeWidth={2.8} /> image, from the hub
                  </span>
                </span>
              </div>
              {/* the dropdown, filled from the microscope's state */}
              <div className={`${u}-list absolute inset-x-3 top-[68px] z-10 rounded-lg border-2 border-fd-border bg-fd-card p-0.5 shadow-lg`}>
                {OBJECTIVES.map((p) => (
                  <div key={p} className="relative flex h-[19px] items-center rounded px-2 font-mono text-[13px]">
                    {p === '10x' ? <span className={`${u}-hl absolute inset-0 rounded bg-fd-primary/15`} /> : null}
                    <span className="relative">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className={`${u}-cur pointer-events-none absolute left-0 top-0 z-20`}>
              <Pointer />
            </span>
          </div>
        </div>

        <svg width={W} height={400} viewBox={`0 0 ${W} 400`} className="pointer-events-none absolute inset-0" aria-hidden>
          {/* narrow layout: socket app ↔ hub, hub ↔ Orkestrator */}
          <g className={`${u}-narrow`}>
            <line className={`${u}-flow`} x1={gapA[0]} y1={yMid} x2={gapA[1]} y2={yMid} stroke={PRIMARY} strokeOpacity={0.85} strokeWidth={2.4} strokeDasharray="8 6" />
            <line x1={gapB[0]} y1={yMid} x2={gapB[1]} y2={yMid} stroke={BORDER} strokeWidth={2.4} />
            {[gapA[0], gapA[1]].map((x) => (
              <circle key={`a${x}`} cx={x} cy={yMid} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
            ))}
            {[gapB[0], gapB[1]].map((x) => (
              <circle key={`b${x}`} cx={x} cy={yMid} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
            ))}
          </g>
        </svg>

        {/* step 1: the hub hands its actions to Orkestrator */}
        {OFFERS.map((_, i) => (
          <span
            key={`tok${i}`}
            className={`${u}-tok absolute size-[12px] rounded-full bg-fd-primary`}
            style={{ left: gapB[0] - 6, top: yMid - 6, ...travel(gapB[1] - gapB[0]), ...({ '--d': `${1.1 + i * 0.15}s` } as CSSProperties) }}
          />
        ))}

        {/* step 2: the assignment, Orkestrator → hub → app */}
        <div className={`${u}-asgA absolute`} style={{ left: gapB[1] - 72, top: yMid - 17, ...travel(gapB[0] - gapB[1]) }}>
          <span className="flex h-[34px] w-[144px] items-center justify-center whitespace-nowrap rounded-full bg-fd-primary font-mono text-[13px] font-bold text-fd-primary-foreground shadow-md">← acquire_image</span>
        </div>
        <div className={`${u}-asgB absolute`} style={{ left: gapA[1] - 62, top: yMid - 17, ...travel(gapA[0] - gapA[1]) }}>
          <span className="flex h-[34px] w-[124px] items-center justify-center whitespace-nowrap rounded-full bg-fd-primary font-mono text-[13px] font-bold text-fd-primary-foreground shadow-md">← 10x</span>
        </div>

        {/* step 3: the image, app → hub → Orkestrator */}
        <div className={`${u}-imgA absolute`} style={{ left: gapA[0] - 30, top: yMid - 58, ...travel(gapA[1] - gapA[0]) }}>
          <span className="flex flex-col items-center gap-0.5 rounded-lg border-2 border-emerald-500/70 bg-fd-card p-1 shadow-md">
            <ImageTile size={48} />
            <span className="font-mono text-[10px] font-bold text-emerald-600">image →</span>
          </span>
        </div>
        <div className={`${u}-imgB absolute`} style={{ left: gapB[0] - 30, top: yMid - 40, ...travel(gapB[1] - gapB[0]) }}>
          <span className="flex flex-col items-center gap-0.5 rounded-lg border-2 border-emerald-500/70 bg-fd-card p-1 shadow-md">
            <ImageTile size={48} />
            <span className="font-mono text-[10px] font-bold text-emerald-600">image →</span>
          </span>
        </div>

      </div>
    </div>
  );
}

/* --- "I made these" ----------------------------------------------------------- */

const MADE = ['run_trajectory', 'run_protocol', 'acquire_image', 'stitch_images', 'segment_image'];

/** The Arkitekt logo as the "I made this" meme: it holds a stack of its
    actions. One click: it shuffles them in its hands, then lays them out in
    a circle around itself, a loop of actions, which is what a workflow is. */
export function IMadeTheseFigure() {
  const u = useUid();
  const W = 520;
  const H = 540;
  const cx = W / 2;
  const cy = 250;
  const R = 200;
  const slot = (i: number) => 372 + i * 34;
  /* where each card sits in the pile at the two shuffle beats */
  const shuffleA = [3, 0, 4, 1, 2];
  const shuffleB = [1, 4, 0, 2, 3];
  const from = 0.8;
  const dur = 2.3;
  const css = `
.${u}-card { transform: translate(var(--sx), var(--sy)); }
section.present .${u}-card { animation: ${u}-mingle ${dur}s cubic-bezier(.5,0,.3,1) ${from}s both; }
@keyframes ${u}-mingle {
  0% { transform: translate(var(--sx), var(--sy)) rotate(0deg); }
  20% { transform: translate(var(--ax), var(--ay)) rotate(var(--ar)); }
  40% { transform: translate(var(--bx), var(--by)) rotate(var(--br)); }
  58% { transform: translate(var(--sx), var(--sy)) rotate(0deg); }
  66% { transform: translate(var(--sx), var(--sy)) rotate(0deg); }
  100% { transform: translate(var(--cx), var(--cy)) rotate(0deg); }
}
.${u}-up, .${u}-ring { opacity: 0; }
section.present .${u}-down { animation: ${u}-out 0.3s ease-out ${from + dur * 0.66}s both; }
section.present .${u}-up { animation: ${u}-in 0.3s ease-out ${from + dur * 0.7}s both; }
section.present .${u}-ring { animation: ${u}-in 0.5s ease-out ${from + dur - 0.2}s both; }
section.present .${u}-hands { animation: ${u}-juggle 0.35s ease-in-out ${from}s 4 both; }
@keyframes ${u}-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-out { from { opacity: 1; } to { opacity: 0; } }
@keyframes ${u}-juggle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
`;
  const hand = (x: number, y: number) => <circle cx={x} cy={y} r={14} fill="#fff" stroke="#111" strokeWidth={3} />;
  return (
    <Steps live cues={[0.5, from + dur + 0.6]} className="relative shrink-0">
      <div className="relative" style={{ width: W, height: H }} role="img" aria-label="The Arkitekt logo, with big proud eyes, holds a stack of its actions, shuffles them in its hands and lays them out in a circle around itself">
        <LoopStyles css={css} />
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full overflow-visible" aria-hidden>
          <Arrowheads id={u} />
          {/* the circle the actions end up on */}
          <g className={`${u}-ring`}>
            <circle cx={cx} cy={cy} r={R} fill="none" stroke={PRIMARY} strokeOpacity={0.55} strokeWidth={2.6} strokeDasharray="9 7" />
            {[-54, 18, 90, 162, 234].map((deg) => {
              const a = (deg * Math.PI) / 180;
              return (
                <path key={deg} d="M-7,-6 L7,0 L-7,6 z" fill={PRIMARY} transform={`translate(${cx + R * Math.cos(a)} ${cy + R * Math.sin(a)}) rotate(${deg + 90})`} />
              );
            })}
          </g>
          {/* arms down, holding the pile */}
          <g className={`${u}-down`}>
            <g className={`${u}-hands`}>
              <path d={`M${cx - 84} 290 C ${cx - 130} 330, ${cx - 128} 400, ${cx - 84} 440`} fill="none" stroke="#111" strokeWidth={7} strokeLinecap="round" />
              <path d={`M${cx + 84} 290 C ${cx + 130} 330, ${cx + 128} 400, ${cx + 84} 440`} fill="none" stroke="#111" strokeWidth={7} strokeLinecap="round" />
            </g>
          </g>
          {/* arms out: ta-da */}
          <g className={`${u}-up`}>
            <path d={`M${cx - 84} 286 C ${cx - 110} 300, ${cx - 126} 318, ${cx - 138} 340`} fill="none" stroke="#111" strokeWidth={7} strokeLinecap="round" />
            <path d={`M${cx + 84} 286 C ${cx + 110} 300, ${cx + 126} 318, ${cx + 138} 340`} fill="none" stroke="#111" strokeWidth={7} strokeLinecap="round" />
            {hand(cx - 138, 340)}
            {hand(cx + 138, 340)}
          </g>
        </svg>
        <div className="absolute size-[190px]" style={{ left: cx - 95, top: cy - 95 }}>
          <Logo className="size-full" />
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" aria-hidden>
          {/* big proud eyes, looking straight at you */}
          {[cx - 20, cx + 20].map((x) => (
            <g key={x}>
              <ellipse cx={x} cy={cy - 56} rx={12} ry={14} fill="#fff" stroke="#111" strokeWidth={2.6} />
              <circle cx={x} cy={cy - 53} r={6.4} fill="#111" />
              <circle cx={x - 2.4} cy={cy - 57} r={2.4} fill="#fff" />
            </g>
          ))}
        </svg>
        {MADE.map((name, i) => {
          const a = ((-90 + i * 72) * Math.PI) / 180;
          const vars = {
            '--sx': `${cx}px`,
            '--sy': `${slot(i)}px`,
            '--ax': `${cx + (i % 2 ? 46 : -46)}px`,
            '--ay': `${slot(shuffleA[i])}px`,
            '--ar': `${i % 2 ? 7 : -7}deg`,
            '--bx': `${cx + (i % 2 ? -40 : 40)}px`,
            '--by': `${slot(shuffleB[i])}px`,
            '--br': `${i % 2 ? -6 : 6}deg`,
            '--cx': `${cx + R * Math.cos(a)}px`,
            '--cy': `${cy + R * Math.sin(a)}px`,
          } as CSSProperties;
          return (
            <span key={name} className={`${u}-card absolute left-0 top-0`} style={vars}>
              <span className="absolute flex h-[30px] w-[156px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-l-4 border-fd-border border-l-fd-primary/70 bg-fd-card font-mono text-[14px] font-semibold shadow-sm">
                {name}
              </span>
            </span>
          );
        })}
        {/* the hands, over the pile's edges */}
        <svg viewBox={`0 0 ${W} ${H}`} className={`${u}-down absolute inset-0 size-full`} aria-hidden>
          <g className={`${u}-hands`}>
            {hand(cx - 84, 440)}
            {hand(cx + 84, 440)}
          </g>
        </svg>
      </div>
    </Steps>
  );
}

/* --- the hub keeps the state of the devices -------------------------------------- */

/** Where the arm's tool is, three times over: at the OT-2, on its way, and
    at the microscope. `tool` and `elbow` are where Orkestrator draws it. */
const ARM_POSES: { value: string; status: string; tool: [number, number]; elbow: [number, number] }[] = [
  { value: 'x 0.12 · y 0.31 · z 0.24 m', status: 'idle · at ot2', tool: [84, 84], elbow: [134, 96] },
  { value: 'x 0.41 · y 0.12 · z 0.23 m', status: 'moving · to_scope', tool: [176, 96], elbow: [118, 104] },
  { value: 'x 0.58 · y 0.09 · z 0.11 m', status: 'idle · at openuc2', tool: [216, 138], elbow: [150, 126] },
];

/** The same three cards as the offer slide, for state instead of actions, and
    read from left to right: one robot arm (arkirino) says where it is,
    Arkitekt keeps that, and Orkestrator draws the arm where it really is.
    It never stops: every five seconds the 3D arm really moves, its pose changes in its
    own card, travels to Arkitekt, changes there, travels on, and the arm in
    Orkestrator's 3D view follows. No key presses. */
export function DeviceStateFigure() {
  const u = useUid();
  /* every time the slide comes up the loop starts over, so the cards, the
     tokens and the 3D arm (which keeps its own clock) stay in step */
  const wrap = useRef<HTMLDivElement>(null);
  const [arrivals, setArrivals] = useState(0);
  useEffect(() => {
    const section = wrap.current?.closest('section');
    if (!section) return;
    let was = false;
    const check = () => {
      const on = section.classList.contains('present');
      if (on && !was) setArrivals((n) => n + 1);
      was = on;
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(section, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  const W = 1180;
  const pw = 260;
  const appX = 180;
  const hubX = 545;
  const fx = W - pw;
  const yMid = 176;
  const gapA = [appX + pw, hubX] as const;
  const gapB = [hubX + pw, fx] as const;
  /* the arm says where it is every `every` seconds, for ever; the three poses
     take turns. Within one update, in seconds: the arm moves, its own card
     changes, the pose travels to Arkitekt, changes there, travels on, and
     Orkestrator's view follows. */
  const every = 5;
  const cycle = every * ARM_POSES.length;
  const at = { arm: 0, a: 1.3, toHub: 1.5, h: 2.3, toFront: 2.5, o: 3.3 };
  const hop = 0.8;
  const pct = (seconds: number, of: number) => `${((seconds / of) * 100).toFixed(2)}%`;
  const css = `
/* one pose of the three: on for its own third of the cycle */
@keyframes ${u}-turn { 0%, ${pct(every - 0.2, cycle)} { opacity: 1; } ${pct(every, cycle)}, ${pct(cycle - 0.2, cycle)} { opacity: 0; } 100% { opacity: 1; } }
:is(.${u}-a, .${u}-h, .${u}-o) { opacity: 0; animation: ${u}-turn ${cycle}s linear infinite; animation-delay: var(--at); }
@keyframes ${u}-travel {
  0% { opacity: 0; transform: translateX(0); }
  ${pct(hop * 0.15, every)} { opacity: 1; }
  ${pct(hop * 0.85, every)} { opacity: 1; transform: translateX(calc(var(--dx) * 1px)); }
  ${pct(hop, every)}, 100% { opacity: 0; transform: translateX(calc(var(--dx) * 1px)); }
}
.${u}-tok { opacity: 0; animation: ${u}-travel ${every}s ease-in-out infinite; animation-delay: var(--at); }
/* in Arkitekt the new value stands out for a moment, and a dot on a little
   track (OT-2 to microscope) slides to where the arm now is */
.${u}-h { animation: ${u}-turn ${cycle}s linear infinite, ${u}-fresh ${cycle}s linear infinite; animation-delay: var(--at); }
@keyframes ${u}-fresh { 0%, ${pct(1.4, cycle)} { color: var(--color-fd-primary); font-weight: 700; } ${pct(2.2, cycle)}, 100% { color: var(--color-fd-muted-foreground); font-weight: 400; } }
.${u}-where { left: 0%; animation: ${u}-where ${cycle}s cubic-bezier(.4,0,.2,1) infinite; animation-delay: ${at.h - cycle}s; }
@keyframes ${u}-where {
  0% { left: 100%; } ${pct(0.7, cycle)}, ${pct(every, cycle)} { left: 0%; }
  ${pct(every + 0.7, cycle)}, ${pct(every * 2, cycle)} { left: 50%; }
  ${pct(every * 2 + 0.7, cycle)}, 100% { left: 100%; }
}
/* the connections stay open: their dashes never stop */
.${u}-flow { animation: ${u}-flow 0.9s linear infinite; }
@keyframes ${u}-flow { to { stroke-dashoffset: -28; } }
@media (prefers-reduced-motion: reduce) {
  :is(.${u}-a, .${u}-h, .${u}-o, .${u}-tok, .${u}-flow, .${u}-where) { animation: none; }
  :is(.${u}-a, .${u}-h, .${u}-o):first-child { opacity: 1; }
}
`;
  /* when pose i comes on at one of the three places: a negative delay, so the loop is already running */
  const turn = (i: number, offset: number) => ({ '--at': `${i * every + offset - cycle}s` }) as CSSProperties;
  const beat = (offset: number) => ({ '--at': `${offset - every}s` }) as CSSProperties;
  const travel = (dx: number) => ({ '--dx': dx }) as CSSProperties;
  /* a value that changes with every update: the three poses, stacked */
  const pose = (where: 'a' | 'h', cls: string) => (
    <span className={cn('relative block h-[19px]', cls)}>
      {ARM_POSES.map((p, i) => (
        <span key={i} className={`${u}-${where} absolute inset-0 whitespace-nowrap`} style={turn(i, at[where])}>
          {p.value}
        </span>
      ))}
    </span>
  );
  const token = (gap: readonly [number, number], offset: number) => (
    <div className={`${u}-tok absolute`} style={{ left: gap[0] - 34, top: yMid - 15, ...travel(gap[1] - gap[0]), ...beat(offset) }}>
      <span className="flex h-[30px] w-[68px] items-center justify-center rounded-full bg-fd-primary font-mono text-[13px] font-bold text-fd-primary-foreground shadow-md">Pose →</span>
    </div>
  );
  /* the arm in Orkestrator's 3D view, at one pose */
  const armAt = ({ tool, elbow, value }: (typeof ARM_POSES)[number]) => {
    const links = `M128 178 L${elbow[0]} ${elbow[1]} L${tool[0]} ${tool[1]}`;
    const lx = Math.min(Math.max(tool[0] - 82, 4), 104);
    const ly = tool[1] - 44;
    return (
      <>
        {tool[1] < 120 ? (
          <>
            <ellipse cx={tool[0]} cy={186} rx={9} ry={3.5} fill={PRIMARY} fillOpacity={0.25} />
            <path d={`M${tool[0]} 186 L${tool[0]} ${tool[1] + 8}`} stroke={PRIMARY} strokeWidth={1.2} strokeDasharray="3 3" />
          </>
        ) : null}
        <path d={links} fill="none" stroke={FG} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
        <path d={links} fill="none" stroke={SURFACE} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={elbow[0]} cy={elbow[1]} r={5} fill={SURFACE} stroke={FG} strokeWidth={1.8} />
        <rect x={tool[0] - 13} y={tool[1] - 4} width={26} height={7} rx={1.5} fill="#f9a8d4" stroke="#be185d" strokeWidth={1.2} />
        <circle cx={tool[0]} cy={tool[1]} r={4} fill={PRIMARY} stroke="#fff" strokeWidth={1.5} />
        {/* where the tool is */}
        <rect x={lx} y={ly} width={164} height={22} rx={6} fill={PRIMARY} />
        <path d={`M${tool[0] - 6} ${ly + 21} L${tool[0]} ${tool[1] - 8} L${tool[0] + 6} ${ly + 21} Z`} fill={PRIMARY} />
        <text x={lx + 82} y={ly + 15} textAnchor="middle" fontSize={11} fontWeight={700} fontFamily="var(--font-mono, monospace)" fill="var(--color-fd-primary-foreground)">
          {value.replace(' m', '')}
        </text>
      </>
    );
  };
  return (
    <div
      ref={wrap}
      className="relative mx-auto h-[400px] w-[1180px]"
      role="img"
      aria-label="One robot arm, arkirino, updates its state, and the update flows from left to right: the arm moves, its pose changes in its own app, travels over the open connection to Arkitekt, which keeps it, and on to Orkestrator, whose 3D view of the lab shows the arm where it really is: first at the OT-2, then on its way, then at the microscope."
    >
      {/* the arm itself, to the left of its app, really moving: OT-2, on its way, microscope, and back */}
      <ArmMoving3D
        className="pointer-events-none absolute left-[-10px] top-[60px] h-[230px] w-[200px]"
        loop={cycle}
        moves={[
          { at: 0, to: 'to_ot2', takes: 1.3 },
          { at: every, to: 'between', takes: 1.3 },
          { at: every * 2, to: 'to_scope', takes: 1.3 },
        ]}
      />
      <div key={arrivals} className="sm-steps sm-animate absolute inset-0" style={STAGGERED}>
        <LoopStyles css={css} />

        {/* the arm, as an app: it says where it is */}
        <div className="absolute top-[6px]" style={{ left: appX, width: pw }}>
          <div className="sm-pop flex h-[340px] flex-col gap-2.5 rounded-2xl border-2 border-fd-primary/60 bg-fd-card p-3.5 shadow-md" style={delay(0.15)}>
            <div className="flex items-center gap-3">
              <span className="flex size-[44px] items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
                <Bot className="size-[25px]" strokeWidth={1.8} />
              </span>
              <span className="text-[19px] font-semibold leading-tight">arkirino</span>
            </div>
            {/* its state: just a dataclass; the numbers are what changes */}
            <pre className="flex-1 overflow-hidden rounded-xl bg-[#0f172a] px-3 py-2.5 font-mono text-[12.5px] leading-[1.7] text-slate-200">
              <span className="text-[#fbbf24]">@app.state</span>
              {'\n'}
              <span className="text-[#fbbf24]">@dataclass</span>
              {'\n'}
              <span className="text-[#c4b5fd]">class</span> <span className="text-[15px] font-bold text-[#7dd3fc]">Pose</span>:{'\n'}
              <span className="relative block h-[5.1em]">
                {ARM_POSES.map((p, i) => {
                  const [px, py, pz] = p.value.replace(' m', '').split(' · ').map((v) => v.slice(2));
                  return (
                    <span key={i} className={`${u}-a absolute inset-0 whitespace-pre`} style={turn(i, at.a)}>
                      {'    '}x: float = <span className="text-[#86efac]">{px}</span>
                      {'\n    '}y: float = <span className="text-[#86efac]">{py}</span>
                      {'\n    '}z: float = <span className="text-[#86efac]">{pz}</span>
                    </span>
                  );
                })}
              </span>
            </pre>
          </div>
        </div>

        {/* Arkitekt: it keeps what the arm said */}
        <div className="absolute top-[6px]" style={{ left: hubX, width: pw }}>
          <div className="sm-pop flex h-[340px] flex-col gap-2.5 rounded-[26px] bg-fd-primary p-3.5 text-fd-primary-foreground shadow-xl" style={delay(0.3)}>
            <div className="flex items-center gap-3">
              <span className="flex size-[44px] items-center justify-center rounded-xl bg-white/95 shadow-sm">
                <Logo className="size-[36px]" />
              </span>
              <span className="text-[24px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
            </div>
            <div className="relative flex flex-col gap-1 rounded-xl bg-fd-card px-3 py-2 text-fd-foreground shadow-sm">
              <span className="flex items-baseline justify-between font-mono text-[15px] font-semibold">
                Pose <span className="text-[11.5px] font-normal text-fd-muted-foreground">arkirino</span>
              </span>
              {pose('h', 'font-mono text-[13px] text-fd-muted-foreground')}
              {/* where that is: a dot between the OT-2 and the microscope */}
              <span className="mt-2 flex items-center gap-2 font-mono text-[10.5px] text-fd-muted-foreground">
                ot2
                <span className="relative h-[14px] flex-1">
                  <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-fd-border" />
                  <span className={`${u}-where absolute top-1/2 size-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fd-primary ring-2 ring-fd-card`} />
                </span>
                scope
              </span>
            </div>
            {/* the other apps' states are kept here too: not this slide's subject */}
            <div className="flex flex-col gap-1 rounded-xl bg-fd-card px-3 py-2 text-fd-foreground opacity-45 shadow-sm">
              <span className="flex items-baseline justify-between font-mono text-[15px] font-semibold">
                Illumination <span className="text-[11.5px] font-normal text-fd-muted-foreground">openuc2</span>
              </span>
              <span className="font-mono text-[13px] text-fd-muted-foreground">laser on</span>
            </div>
          </div>
        </div>

        {/* Orkestrator, a browser window: the lab in one 3D space */}
        <div className="sm-pop absolute top-[6px] h-[340px]" style={{ left: fx, width: pw, ...delay(0.45) }}>
          <div className="relative size-full overflow-hidden rounded-2xl border-2 border-fd-primary/60 bg-fd-card shadow-md">
            <div className="absolute inset-x-0 top-0 flex h-[30px] items-center gap-1.5 border-b border-fd-border bg-fd-muted px-3">
              {['#f87171', '#fbbf24', '#34d399'].map((c) => (
                <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
              ))}
              <span className="ml-2 flex items-center gap-1.5 text-[13px] font-semibold">
                <Logo className="size-[15px]" /> Orkestrator
              </span>
            </div>
            <span className="absolute left-4 top-[40px] text-[12px] font-medium text-fd-muted-foreground">The lab, live</span>
            <svg viewBox="0 0 272 236" className="absolute inset-x-3 top-[66px] rounded-xl border border-fd-border bg-fd-background/60" aria-hidden>
              {/* the floor grid, in perspective */}
              {[0, 1, 2, 3, 4].map((i) => (
                <path key={`h${i}`} d={`M${24 - i * 5} ${96 + i * 30} L${248 + i * 5} ${96 + i * 30}`} stroke={BORDER} strokeWidth={1} />
              ))}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <path key={`v${i}`} d={`M${24 + i * 44.8} 96 L${4 + i * 52.8} 216`} stroke={BORDER} strokeWidth={1} />
              ))}
              {/* the OT-2, and the microscope */}
              <g stroke={FG} strokeWidth={1.8} strokeLinejoin="round" fill={SURFACE}>
                <path d="M30 150 L30 104 L88 104 L88 150 Z M30 104 L44 92 L102 92 L88 104 M88 150 L102 138 L102 92" />
                <path d="M196 196 L196 160 L236 160 L236 196 Z M196 160 L206 150 L246 150 L236 160 M236 196 L246 186 L246 150" />
              </g>
              <text x={59} y={166} textAnchor="middle" fontSize={10.5} fontFamily="var(--font-mono, monospace)" fill={MUTED}>
                ot2
              </text>
              <text x={216} y={212} textAnchor="middle" fontSize={10.5} fontFamily="var(--font-mono, monospace)" fill={MUTED}>
                openuc2
              </text>
              <ellipse cx={128} cy={182} rx={16} ry={6} fill={SURFACE} stroke={FG} strokeWidth={1.8} />
              <text x={128} y={202} textAnchor="middle" fontSize={10.5} fontFamily="var(--font-mono, monospace)" fill={MUTED}>
                arkirino
              </text>
              {/* the arm, once per pose: the update swaps one for the next */}
              {ARM_POSES.map((p, i) => (
                <g key={i} className={`${u}-o`} style={turn(i, at.o)}>
                  {armAt(p)}
                </g>
              ))}
              {/* the axes */}
              <g strokeWidth={2} strokeLinecap="round">
                <path d="M18 30 L44 30" stroke="#ef4444" />
                <path d="M18 30 L18 6" stroke="#22c55e" />
                <path d="M18 30 L6 40" stroke="#3b82f6" />
              </g>
            </svg>
          </div>
        </div>

        {/* the two open connections, on the midline */}
        <svg width={W} height={400} viewBox={`0 0 ${W} 400`} className="sm-fade pointer-events-none absolute inset-0" style={delay(0.6)} aria-hidden>
          {[gapA, gapB].map((g) => (
            <g key={g[0]}>
              <line className={`${u}-flow`} x1={g[0]} y1={yMid} x2={g[1]} y2={yMid} stroke={PRIMARY} strokeOpacity={0.85} strokeWidth={2.4} strokeDasharray="8 6" />
              {g.map((x) => (
                <circle key={x} cx={x} cy={yMid} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
              ))}
            </g>
          ))}
        </svg>

        {/* the update on the move: arm → Arkitekt → Orkestrator */}
        {token(gapA, at.toHub)}
        {token(gapB, at.toFront)}
      </div>
    </div>
  );
}

/* --- the microscope brings its own UI ------------------------------------------ */

const BLOK_TREE: Tok[][] = [
  [['app.blok(', ''], ['"capture_panel"', 's'], [', ', ''], ['"""', 's']],
  [['<Page>', 'f']],
  [['  <Image ', 'f'], ['value=', ''], ['"$state.camera.frame"', 's'], [' />', 'f']],
  [['  <Text ', 'f'], ['value=', ''], ['"$state.stage.position"', 's'], [' />', 'f']],
  [['  <Text ', 'f'], ['value=', ''], ['"$state.optics.objective"', 's'], [' />', 'f']],
  [['  <Button ', 'f'], ['title=', ''], ['"Capture"', 's']],
  [['    onClick=', ''], ['"@openuc2.acquire_image()"', 's'], [' />', 'f']],
  [['</Page>', 'f']],
  [['"""', 's'], [')', '']],
];

/** The same three cards as the offer slide, for a blok: the openUC2 app
    ships its capture panel (a component tree, not code that runs), Arkitekt
    keeps it next to the actions, and Orkestrator renders it. One key press
    per beat, as reveal fragments: the blok goes to Arkitekt; it goes on to
    Orkestrator, which draws it; Kim presses Capture, and the press goes back
    through Arkitekt to the microscope as a typed call. */
export function BlokOfferFigure() {
  const u = useUid();
  const W = 1180;
  const pw = 260;
  const appX = 150;
  const appW = 290; // a little wider than the others: it holds the blok's source
  const hubX = 545;
  const fx = W - pw;
  const yMid = 176;
  const gapA = [appX + appW, hubX] as const;
  const gapB = [hubX + pw, fx] as const;

  const on = (n: number, sel: string) => `.${u}-s${n}.visible ~ ${sel}, .${u}-s${n}.visible ~ * ${sel}`;
  const css = `
:is(.${u}-goA, .${u}-goB, .${u}-call, .${u}-kept, .${u}-panel, .${u}-shot) { opacity: 0; }
/* press 1: the blok goes to Arkitekt, which keeps it */
${on(1, `.${u}-goA`)} { animation: ${u}-travel 0.9s ease-in-out 0s both; --dx: ${gapA[1] - gapA[0]}; }
${on(1, `.${u}-kept`)} { animation: ${u}-pop 0.4s ease-out 0.8s both; }
/* press 2: on to Orkestrator, which draws it */
${on(2, `.${u}-goB`)} { animation: ${u}-travel 0.9s ease-in-out 0s both; --dx: ${gapB[1] - gapB[0]}; }
${on(2, `.${u}-ghost`)} { animation: ${u}-fadeout 0.2s ease-out 0.75s both; }
${on(2, `.${u}-panel`)} { animation: ${u}-pop 0.45s ease-out 0.8s both; }
/* press 3: Capture, back to the microscope as a call */
${on(3, `.${u}-btn`)} { animation: ${u}-press 0.4s ease-out 0s both; }
${on(3, `.${u}-call`)} { animation: ${u}-back 1.5s ease-in-out 0.3s both; }
${on(3, `.${u}-acq`)} { animation: ${u}-acq 0.8s ease-in-out 1.7s 2; }
${on(3, `.${u}-shot`)} { animation: ${u}-fadein 0.4s ease-out 3.2s both; }
@keyframes ${u}-travel {
  0% { opacity: 0; transform: translateX(0); }
  15% { opacity: 1; }
  85% { opacity: 1; transform: translateX(calc(var(--dx) * 1px)); }
  100% { opacity: 0; transform: translateX(calc(var(--dx) * 1px)); }
}
@keyframes ${u}-back {
  0% { opacity: 0; transform: translateX(0); }
  8% { opacity: 1; }
  92% { opacity: 1; transform: translateX(${gapA[0] - gapB[1]}px); }
  100% { opacity: 0; transform: translateX(${gapA[0] - gapB[1]}px); }
}
@keyframes ${u}-acq {
  0%, 100% { transform: none; filter: none; }
  50% { transform: scale(1.06) rotate(-1.5deg); filter: brightness(1.35) drop-shadow(0 0 14px var(--color-fd-primary)); }
}
@keyframes ${u}-press { 0%, 100% { transform: scale(1); } 45% { transform: scale(0.92); } }
@keyframes ${u}-pop { 0% { opacity: 0; transform: scale(0.85); } 70% { opacity: 1; transform: scale(1.03); } 100% { opacity: 1; transform: scale(1); } }
@keyframes ${u}-fadein { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-fadeout { from { opacity: 1; } to { opacity: 0; } }
/* the connections stay open: their dashes never stop */
.${u}-flow { animation: ${u}-flow 0.9s linear infinite; }
@keyframes ${u}-flow { to { stroke-dashoffset: -28; } }
@media (prefers-reduced-motion: reduce) { .${u}-flow { animation: none; } }
`;
  const pill = (
    <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-fd-primary/60 bg-fd-card px-3 py-1 font-mono text-[13px] font-semibold shadow-md">
      <span className="rounded-full bg-fd-primary px-1.5 py-px text-[9.5px] font-bold text-fd-primary-foreground">blok</span>
      capture_panel
    </span>
  );
  return (
    <div
      className="relative mx-auto h-[400px] w-[1180px]"
      role="img"
      aria-label="The openUC2 microscope app ships a blok, capture_panel: a component tree with its live image, its stage position, its objective and a Capture button that calls acquire_image. Arkitekt keeps the blok next to the microscope's actions. Orkestrator renders it in the browser. Kim presses Capture, and the press goes through Arkitekt to the microscope as a typed acquire_image call."
    >
      <div className="sm-steps sm-animate absolute inset-0" style={STAGGERED}>
        {[1, 2, 3].map((n) => (
          <Fragment key={n} as="span" index={n} className={`${u}-s${n} absolute`} />
        ))}
        <LoopStyles css={css} />

        {/* the instrument itself, standing to the left of its app */}
        <div className="sm-in absolute left-0 top-[85px] size-[150px]" style={delay(0.05)}>
          <div className={`${u}-acq size-full`}>
            <FrameModel3D className="pointer-events-none size-full" />
          </div>
        </div>

        {/* the microscope app, and the blok it ships */}
        <div className="absolute top-[6px]" style={{ left: appX, width: appW }}>
          <div className="sm-pop flex h-[340px] flex-col gap-2.5 rounded-2xl border-2 border-fd-primary/60 bg-fd-card p-3 shadow-md" style={delay(0.15)}>
            <div className="flex items-center gap-3">
              <span className="flex size-[44px] items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
                <Microscope className="size-[25px]" strokeWidth={1.8} />
              </span>
              <span className="text-[19px] font-semibold leading-tight">openUC2 FRAME</span>
            </div>
            <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-fd-border bg-fd-background/60">
              <span className="border-b border-fd-border px-3 py-1.5 font-mono text-[12px] font-semibold">app.py</span>
              <pre className="px-2 py-2 font-mono text-[9.5px] leading-[1.7] tracking-[-0.02em]">
                {BLOK_TREE.map((line, i) => (
                  <span key={i} className="block whitespace-pre">
                    {line.map(([text, kind], j) => (
                      <span key={j} className={TOK_CLASS[kind]}>
                        {text}
                      </span>
                    ))}
                  </span>
                ))}
              </pre>
            </div>
          </div>
        </div>

        {/* Arkitekt keeps it next to the actions */}
        <div className="absolute top-[6px]" style={{ left: hubX, width: pw }}>
          <div className="sm-pop flex h-[340px] flex-col gap-2.5 rounded-[26px] bg-fd-primary p-3.5 text-fd-primary-foreground shadow-xl" style={delay(0.3)}>
            <div className="flex items-center gap-3">
              <span className="flex size-[44px] items-center justify-center rounded-xl bg-white/95 shadow-sm">
                <Logo className="size-[36px]" />
              </span>
              <span className="text-[24px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
            </div>
            {OFFERS.map((o) => (
              <div key={o.name} className="flex items-center justify-between rounded-xl bg-fd-card px-3 py-2 text-fd-foreground shadow-sm">
                <span className="font-mono text-[15px] font-semibold">{o.name}</span>
                <span className="font-mono text-[11px] text-fd-muted-foreground">action</span>
              </div>
            ))}
            <div className={`${u}-kept flex flex-col gap-1 rounded-xl bg-fd-card px-3 py-2 text-fd-foreground shadow-sm ring-2 ring-white/70`}>
              <span className="flex items-center gap-2">
                <span className="font-mono text-[15px] font-semibold">capture_panel</span>
                <span className="ml-auto rounded-full bg-fd-primary px-2 py-px font-mono text-[10px] font-bold text-fd-primary-foreground">blok</span>
              </span>
              <span className="font-mono text-[11.5px] text-fd-muted-foreground">calls acquire_image</span>
              <span className="font-mono text-[11.5px] text-fd-muted-foreground">reads camera · stage · optics</span>
            </div>
          </div>
        </div>

        {/* Orkestrator, a browser window: it renders the blok */}
        <div className="sm-pop absolute top-[6px] h-[340px]" style={{ left: fx, width: pw, ...delay(0.45) }}>
          <div className="relative size-full overflow-hidden rounded-2xl border-2 border-fd-primary/60 bg-fd-card shadow-md">
            <div className="absolute inset-x-0 top-0 flex h-[30px] items-center gap-1.5 border-b border-fd-border bg-fd-muted px-3">
              {['#f87171', '#fbbf24', '#34d399'].map((c) => (
                <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
              ))}
              <span className="ml-2 flex items-center gap-1.5 text-[13px] font-semibold">
                <Logo className="size-[15px]" /> Orkestrator
              </span>
            </div>
            <div className={`${u}-ghost absolute inset-x-3 bottom-3 top-[42px] flex items-center justify-center rounded-xl border-2 border-dashed border-fd-border font-mono text-[13px] text-fd-muted-foreground`}>
              no panel yet
            </div>
            <div className={`${u}-panel absolute inset-x-3 bottom-3 top-[42px] flex flex-col gap-2 rounded-xl border-2 border-fd-primary/60 bg-fd-primary/5 p-2.5`}>
              <span className="flex items-center gap-2">
                <span className="text-[14px] font-semibold">Capture</span>
                <span className="font-mono text-[11px] text-fd-muted-foreground">openuc2</span>
                <span className="ml-auto rounded-full bg-fd-primary px-2 py-px font-mono text-[10px] font-bold text-fd-primary-foreground">blok</span>
              </span>
              <div className="relative mx-auto overflow-hidden rounded-lg border border-fd-border">
                <ImageTile size={118} />
                <span className={`${u}-shot absolute inset-0 flex items-end justify-end p-1`}>
                  <span className="rounded bg-emerald-500 px-1.5 py-px font-mono text-[10px] font-bold text-white">new image</span>
                </span>
              </div>
              <span className="font-mono text-[12px]">stage x 12.4 · y 8.1 mm</span>
              <span className="font-mono text-[12px]">objective 10x</span>
              <span className={`${u}-btn mt-auto flex h-[34px] items-center justify-center rounded-lg bg-fd-primary text-[14px] font-semibold text-fd-primary-foreground`}>Capture</span>
            </div>
          </div>
        </div>

        {/* the two open connections, on the midline */}
        <svg width={W} height={400} viewBox={`0 0 ${W} 400`} className="sm-fade pointer-events-none absolute inset-0" style={delay(0.6)} aria-hidden>
          {[gapA, gapB].map((g) => (
            <g key={g[0]}>
              <line className={`${u}-flow`} x1={g[0]} y1={yMid} x2={g[1]} y2={yMid} stroke={PRIMARY} strokeOpacity={0.85} strokeWidth={2.4} strokeDasharray="8 6" />
              {g.map((x) => (
                <circle key={x} cx={x} cy={yMid} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
              ))}
            </g>
          ))}
        </svg>

        {/* the blok travelling: app → Arkitekt → Orkestrator */}
        <div className={`${u}-goA absolute`} style={{ left: gapA[0] - 80, top: yMid - 16 }}>
          {pill}
        </div>
        <div className={`${u}-goB absolute`} style={{ left: gapB[0] - 80, top: yMid - 16 }}>
          {pill}
        </div>
        {/* the press, back to the microscope as a typed call */}
        <div className={`${u}-call absolute`} style={{ left: gapB[1] - 80, top: yMid - 15 }}>
          <span className="flex h-[30px] items-center whitespace-nowrap rounded-full bg-fd-primary px-3 font-mono text-[12.5px] font-bold text-fd-primary-foreground shadow-md ring-2 ring-white/70">← acquire_image()</span>
        </div>
      </div>
    </div>
  );
}

/** Three of the lab's actions registering with the hub. */
export function ActionRegistry() {
  const actions = [
    { name: 'run_protocol', sig: 'protocol → None' },
    { name: 'run_trajectory', sig: 'name → None' },
    { name: 'acquire_image', sig: '() → image' },
  ];
  return (
    <div className="flex flex-col gap-3">
      {actions.map((a, i) => (
        <div key={a.name} className="sm-in flex items-center justify-between gap-3 rounded-xl border border-fd-border bg-fd-card/60 px-4 py-3" style={delay(0.5 + i * 0.45)}>
          <div className="flex min-w-0 flex-col">
            <span className="font-mono text-[17px] font-semibold">{a.name}</span>
            <span className="font-mono text-[13px] text-fd-muted-foreground">{a.sig}</span>
          </div>
          <span className="sm-pop shrink-0 rounded-full bg-fd-primary/15 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-fd-primary" style={delay(0.85 + i * 0.45)}>
            typed
          </span>
        </div>
      ))}
      <p className="sm-in text-[16px] leading-snug text-fd-muted-foreground" style={delay(2.2)}>
        Callable from Orkestrator, a script or a workflow.
      </p>
    </div>
  );
}

/* --- works on one machine: organisations + mesh ----------------------------- */

/** One lab network: every device dials out to the hub, commands go through
    it, image data goes straight to storage. A laptop on a phone hotspot is
    just another peer. */
export function MeshFigure() {
  const u = useUid();
  return (
    <svg width={1100} height={370} viewBox="0 0 1100 370" role="img" aria-label="Devices on one WireGuard mesh dial out to the Arkitekt hub; commands go through the hub, image data goes straight from the microscope to storage" className="mx-auto block">
      <Arrowheads id={u} />
      <rect className="sm-fade" style={delay(0.1)} x={20} y={120} width={1060} height={240} rx={20} fill={PRIMARY} fillOpacity={0.03} stroke={BORDER} strokeWidth={1.6} strokeDasharray="8 7" />
      <T className="sm-fade" style={delay(0.3)} x={44} y={340} anchor="start" size={13} mono weight={700} fill={MUTED}>
        YOUR ORGANISATION · ONE WIREGUARD MESH
      </T>

      <Path className="sm-fade" style={delay(1)} d="M185 206 L496 80" dash="7 7" head={`${u}-fg`} />
      <Path className="sm-fade" style={delay(1.1)} d="M935 206 L604 80" dash="7 7" head={`${u}-fg`} />
      <T className="sm-in" style={delay(1.3)} x={392} y={100} anchor="end" size={14} mono fill={MUTED}>
        outbound only
      </T>
      <T className="sm-in" style={delay(1.3)} x={708} y={100} anchor="start" size={14} mono fill={MUTED}>
        outbound only
      </T>
      <T className="sm-in" style={delay(1.5)} x={550} y={98} size={14} mono fill={MUTED}>
        commands
      </T>

      <Box className="sm-pop" style={delay(0.2)} x={440} y={10} w={220} h={64} title="Arkitekt hub" tone="solid" />
      <Box className="sm-pop" style={delay(0.4)} x={70} y={208} w={230} h={84} title="Acquisition PC" sub="openUC2 · camera" />
      <Box className="sm-pop" style={delay(0.6)} x={440} y={248} w={220} h={84} title="Storage" sub="object store" />
      <Box className="sm-pop" style={delay(0.8)} x={820} y={208} w={230} h={84} title="Laptop" sub="on a phone hotspot" tone="primary" />

      <Path className="sm-draw" style={delay(1.6)} d="M306 262 L434 286" stroke={PRIMARY} width={8} opacity={0.3} />
      <T className="sm-in" style={delay(1.8)} x={370} y={236} size={14} mono weight={700} fill={PRIMARY}>
        image data
      </T>
      <T className="sm-in" style={delay(1.9)} x={370} y={316} size={14} mono weight={700} fill={PRIMARY}>
        straight to storage
      </T>

      <g className="sm-fade" style={delay(2)}>
        {[0, 0.33, 0.66].map((p) => (
          <Token key={p} path="M306 262 L434 286" dur={1.4} phase={p}>
            <rect x={-8} y={-8} width={16} height={16} rx={3} fill={PRIMARY} />
          </Token>
        ))}
        <Token path="M935 206 L604 80 L496 80 L185 206" dur={5} hold={0.35}>
          <circle r={7} fill={FG} />
        </Token>
      </g>
    </svg>
  );
}

/* --- nobody knows what it decided: replay + provenance ---------------------- */

const RUN = [
  { t: '14:15:06', call: 'run_protocol(stain_cd20)', out: '→ done', kind: 'acq', label: 'run_protocol' },
  { t: '14:21:40', call: 'acquire_image() ×3', out: '→ tiles #1–3', kind: 'acq', label: 'acquire_image' },
  { t: '14:21:52', call: 'stitch_images(tiles)', out: '→ mosaic #1', kind: 'ana', label: 'stitch_images' },
  { t: '14:21:55', call: 'segment_image(mosaic)', out: '→ labels #1', kind: 'ana', label: 'segment_image' },
  { t: '14:21:57', call: 'calculate_stain_percentage(…)', out: '→ 0.41', kind: 'ana', label: 'calculate_stain_percentage' },
] as const;

/** One round of HE-07 as a timeline and an append-only record, then a replay
    that re-segments the recorded mosaic with another threshold and measures
    again: analysis only, the slide is not stained or imaged again. */
export function ReplayFigure() {
  const u = useUid();
  const xs = [130, 300, 470, 640, 860];
  const outX = 470;
  return (
    <svg width={1100} height={400} viewBox="0 0 1100 400" role="img" aria-label="One staining round's calls on a timeline and in an append-only record: run_protocol, acquire_image, stitch_images, segment_image, calculate_stain_percentage. A replay re-runs segmentation and the uptake measurement with another threshold on the recorded mosaic, without staining or imaging again" className="mx-auto block">
      <Arrowheads id={u} />
      <Path className="sm-draw" style={delay(0.1)} d="M60 70 L1040 70" stroke={BORDER} width={3} />
      {RUN.map((e, i) => (
        <g key={i} className="sm-pop" style={delay(0.3 + i * 0.3)}>
          {e.kind === 'acq' ? (
            <rect x={xs[i] - 11} y={59} width={22} height={22} rx={4} fill={PRIMARY} />
          ) : (
            <circle cx={xs[i]} cy={70} r={11} fill={SURFACE} stroke={PRIMARY} strokeWidth={3} />
          )}
          <T x={xs[i]} y={38} size={15} mono>
            {e.label}
          </T>
        </g>
      ))}
      <g className="sm-fade" style={delay(1.8)}>
        <rect x={60} y={100} width={14} height={14} rx={3} fill={PRIMARY} />
        <T x={82} y={108} anchor="start" size={14} fill={MUTED}>
          stain, image · recorded
        </T>
        <circle cx={377} cy={107} r={7} fill={SURFACE} stroke={PRIMARY} strokeWidth={2.5} />
        <T x={392} y={108} anchor="start" size={14} fill={MUTED}>
          analysis · can re-run
        </T>
      </g>
      <g className="sm-token">
        <line x1={60} y1={48} x2={60} y2={92} stroke={WARN} strokeWidth={2.5} />
        <path d="M52 44 L68 44 L60 54 Z" fill={WARN} />
        <animateTransform attributeName="transform" type="translate" values="0 0; 980 0" dur="10s" repeatCount="indefinite" />
      </g>

      {/* the record */}
      <g className="sm-fade" style={delay(0.4)}>
        <rect x={60} y={140} width={560} height={250} rx={14} fill={SURFACE} stroke={BORDER} strokeWidth={1.6} />
        <T x={80} y={166} anchor="start" size={13} mono weight={700} fill={MUTED}>
          THE RECORD · APPEND-ONLY
        </T>
      </g>
      {RUN.map((e, i) => (
        <g key={`r${i}`} className="sm-in" style={delay(0.7 + i * 0.35)}>
          <T x={80} y={204 + i * 38} anchor="start" size={15} mono fill={MUTED}>
            {e.t}
          </T>
          <T x={175} y={204 + i * 38} anchor="start" size={15} mono>
            {e.call}
          </T>
          <T x={outX} y={204 + i * 38} anchor="start" size={15} mono weight={700} fill={PRIMARY}>
            {e.out}
          </T>
        </g>
      ))}

      {/* the replay */}
      <Path className="sm-draw" style={delay(2.5)} d={`M${xs[3]} 84 L${xs[3]} 122 L860 122 L860 136`} stroke={PRIMARY} width={2.5} head={`${u}-primary`} />
      <g className="sm-in" style={delay(2.9)}>
        <rect x={660} y={140} width={400} height={250} rx={14} fill={PRIMARY} fillOpacity={0.07} stroke={PRIMARY} strokeOpacity={0.55} strokeWidth={1.6} />
        <T x={680} y={166} anchor="start" size={13} mono weight={700} fill={PRIMARY}>
          REPLAY · ANALYSIS ONLY
        </T>
      </g>
      <T className="sm-in" style={delay(3.2)} x={680} y={206} anchor="start" size={15} mono>
        segment_image(mosaic #1)
      </T>
      <T className="sm-in" style={delay(3.4)} x={680} y={234} anchor="start" size={15} mono>
        <tspan fill={MUTED} textDecoration="line-through">prob_thresh 0.50</tspan>
        <tspan fill={MUTED}> → </tspan>
        <tspan fill={WARN} fontWeight={700}>0.35</tspan>
      </T>
      <T className="sm-in" style={delay(3.7)} x={680} y={278} anchor="start" size={15} mono>
        calculate_stain_percentage(…)
      </T>
      <T className="sm-in" style={delay(3.9)} x={680} y={306} anchor="start" size={15} mono>
        <tspan fill={MUTED} textDecoration="line-through">0.41</tspan>
        <tspan fill={MUTED}> → </tspan>
        <tspan fill={WARN} fontWeight={700}>0.44</tspan>
        <tspan fill={MUTED}> · still stain again</tspan>
      </T>
      <T className="sm-in" style={delay(4.2)} x={680} y={354} anchor="start" size={14} italic fill={MUTED}>
        on the recorded mosaic #1, not re-stained
      </T>
    </svg>
  );
}

/* --- a billion files, no pixel size: coordinate systems --------------------- */

/** Every database needs a schema, and this is where the classic MDA breaks.
    Left: the MDA schema, which is an index (t, c, z, p), and the cube it
    describes. Right: what a smart acquisition actually took, tiles of
    different sizes placed where something was worth a look, one of them
    inside another. Three beats, one per press of "next": both sides; the
    tiles are forced into the index and come out as p = 0…6, all the same
    size, in a row, and where they were, how big, and which one sits inside
    which is gone; then what the schema needs instead. */
export function CoordsFigure() {
  const u = useUid();
  const flyAt = 1.3;
  const askAt = 2.8;
  const fixAt = 4.1;
  const cues = [1, 3.8, 5.4];
  const RED = '#dc2626';
  const cube: ReactNode[] = [];
  for (let z = 0; z < 3; z++) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        cube.push(<rect key={`${z}-${r}-${c}`} x={290 + z * 24 + c * 42} y={104 - z * 24 + r * 42} width={38} height={38} rx={4} fill={MUTED} fillOpacity={0.15 + z * 0.14} stroke={MUTED} strokeOpacity={0.4} />);
      }
    }
  }
  /* x, y, size, why: where the acquisition went, and at what magnification */
  const tiles: [number, number, number, string?][] = [
    [630, 70, 46, 'patchy stain'],
    [790, 55, 30],
    [900, 135, 68, 'rare event · 10x'],
    [928, 164, 20, '40x, inside it'],
    [680, 215, 26],
    [800, 200, 74, 'refocus'],
    [990, 250, 22],
  ];
  const SLOT = { x: 34, y: 246, s: 40, gap: 52 };
  const blobs = Array.from({ length: 26 }, (_, i) => ({
    x: 612 + ((i * 131) % 440),
    y: 52 + ((i * 71 + 23) % 230),
    r: 4 + ((i * 5) % 9),
  }));
  const fields = ['t', 'c', 'z', 'p'];
  /* each tile's copy leaves its place and its size behind for a slot in the index */
  const css = `
${tiles
  .map(([x, y, size], i) => {
    const to = `translate(${SLOT.x + i * SLOT.gap - x}px, ${SLOT.y - y}px) scale(${(SLOT.s / size).toFixed(4)})`;
    return `.${u}-g${i} { transform-box: fill-box; transform-origin: 0 0; transform: ${to}; }
section.present .${u}-g${i} { animation: ${u}-g${i} 1s cubic-bezier(.6,0,.2,1) ${flyAt + i * 0.12}s both; }
@keyframes ${u}-g${i} { from { transform: none; } to { transform: ${to}; } }`;
  })
  .join('\n')}
@media (prefers-reduced-motion: reduce) { section.present [class*="${u}-g"] { animation: none; } }
`;
  return (
    <Steps live cues={cues} className="relative mx-auto w-fit">
      <LoopStyles css={css} />
      <svg width={1100} height={400} viewBox="0 0 1100 400" role="img" aria-label="Left: the schema of a multi-dimensional acquisition is an index, t, c, z and p, a regular cube. Right: what a smart acquisition took: tiles of different sizes placed on the slide where something was worth a look, one of them a 40x tile inside a 10x tile. Forced into the index, the tiles become p = 0 to 6, all the same size, in a row: where each one was, how big it was, and which one sits inside which no longer fits. The schema needs a transform into a shared coordinate system instead of an index." className="block">
        <rect x={10} y={10} width={520} height={310} rx={16} fill={SURFACE} fillOpacity={0.6} stroke={BORDER} strokeWidth={1.6} />
        <T x={30} y={36} anchor="start" size={13} mono weight={700} fill={MUTED}>
          MDA · AN INDEX
        </T>
        {/* the schema: four integers */}
        <rect x={30} y={54} width={196} height={150} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.6} />
        <rect x={30} y={54} width={196} height={30} rx={10} fill={MUTED} fillOpacity={0.14} />
        <T x={44} y={70} anchor="start" size={14} mono weight={700}>
          images
        </T>
        {fields.map((f, i) => (
          <g key={f}>
            {f === 'p' ? <rect x={34} y={84 + i * 29 + 2} width={188} height={26} rx={6} fill={WARN} fillOpacity={0.16} /> : null}
            <T x={48} y={99 + i * 29} anchor="start" size={15} mono weight={700}>
              {f}
            </T>
            <T x={84} y={99 + i * 29} anchor="start" size={13} mono fill={MUTED}>
              {['int · time point', 'int · channel', 'int · z-slice', 'int · position'][i]}
            </T>
          </g>
        ))}
        {cube}

        {/* the index, as slots: every position the same size, in a row */}
        <g className="sm-fade" style={delay(flyAt - 0.1)}>
          {tiles.map((_, i) => (
            <g key={i}>
              <rect x={SLOT.x + i * SLOT.gap} y={SLOT.y} width={SLOT.s} height={SLOT.s} rx={3} fill="none" stroke={MUTED} strokeOpacity={0.6} strokeWidth={1.5} strokeDasharray="4 3" />
              <T x={SLOT.x + i * SLOT.gap + SLOT.s / 2} y={SLOT.y + SLOT.s + 14} size={11.5} mono weight={700} fill={MUTED}>
                {`p = ${i}`}
              </T>
            </g>
          ))}
        </g>
        {/* what no longer fits */}
        {['✕ where on the slide?', '✕ how big, which objective?', '✕ which one is inside which?'].map((q, i) => (
          <T key={q} className="sm-pop" style={delay(askAt + i * 0.18)} x={402} y={SLOT.y + 4 + i * 19} anchor="start" size={10.5} weight={700} fill={RED}>
            {q}
          </T>
        ))}
        <T className="sm-in" style={delay(askAt + 0.5)} x={514} y={36} anchor="end" size={13.5} weight={700} fill={RED}>
          the spatial context doesn’t fit in the index
        </T>

        {/* the acquisition, on the slide */}
        <rect x={570} y={10} width={520} height={310} rx={16} fill={PRIMARY} fillOpacity={0.05} stroke={PRIMARY} strokeOpacity={0.4} strokeWidth={1.6} />
        <T x={590} y={30} anchor="start" size={13} mono weight={700} fill={PRIMARY}>
          THE ACQUISITION · ON THE SLIDE
        </T>
        <rect x={600} y={40} width={460} height={250} rx={8} fill="none" stroke={PRIMARY} strokeOpacity={0.4} strokeWidth={2} strokeDasharray="8 6" />
        {blobs.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={MUTED} fillOpacity={0.16} />
        ))}
        {tiles.map(([x, y, size, why], i) => (
          <g key={i}>
            <rect x={x} y={y} width={size} height={size} rx={3} fill={PRIMARY} fillOpacity={i === 3 ? 0.75 : 0.3 + (i % 3) * 0.15} stroke={PRIMARY} strokeWidth={1.5} />
            {why ? (
              <T x={i === 3 ? 976 : x + size + 8} y={i === 3 ? 166 : y + 10} anchor="start" size={13.5} weight={700} fill={PRIMARY}>
                {why}
              </T>
            ) : null}
          </g>
        ))}
        {/* the same tiles, forced into the index */}
        {tiles.map(([x, y, size], i) => (
          <rect key={i} className={`${u}-g${i}`} x={x} y={y} width={size} height={size} rx={3} fill={PRIMARY} fillOpacity={0.45} stroke={PRIMARY} strokeWidth={1.5} />
        ))}

        <T x={270} y={350} size={22} weight={600}>
          <tspan>MDA asks </tspan>
          <tspan fill={MUTED}>which index?</tspan>
        </T>
        <T x={270} y={382} size={15} fill={MUTED}>
          A cube: t, c, z, position. The schema is the array.
        </T>
        <T x={830} y={350} size={22} weight={600}>
          <tspan>Smart microscopy asks </tspan>
          <tspan fill={PRIMARY}>where, and why?</tspan>
        </T>
        <T className="sm-in" style={delay(fixAt)} x={830} y={382} size={15} weight={600} fill={PRIMARY}>
          So the schema stores a place in a coordinate system, not an index.
        </T>
      </svg>
    </Steps>
  );
}

/* --- where, and what ------------------------------------------------------------ */

/** What a smart acquisition leaves behind, on the slide: tiles of different
    sizes, placed where something was worth a look, one inside another. Each
    carries two things: where it is (spatial data) and what was found there
    (analysis). Nothing moves. */
export function WhereWhatFigure() {
  /* x, y, size, then where it is and what was found there */
  const tiles: [number, number, number, string?, string?][] = [
    [40, 104, 46, 'x 4.1 · y 3.2 mm', 'patchy stain · CD20 41 %'],
    [250, 82, 26],
    [262, 160, 68, 'x 26.2 · y 9.6 mm', 'rare event · 3 mitoses'],
    [290, 188, 20],
    [90, 262, 26],
    [200, 232, 74, 'x 21.3 · y 16.0 mm', '1 812 cells · labels'],
    [462, 300, 22],
  ];
  const blobs = Array.from({ length: 26 }, (_, i) => ({
    x: 34 + ((i * 131) % 470),
    y: 84 + ((i * 71 + 23) % 250),
    r: 4 + ((i * 5) % 9),
  }));
  return (
    <svg width={540} height={440} viewBox="0 0 540 440" role="img" aria-label="Where, and what? A slide with image tiles of different sizes placed on it, one of them inside another. Each tile carries where it is, its position on the slide, which is spatial data, and what was found there, which is analysis: a patchy stain with CD20 at 41 percent, a rare event with three mitoses, 1812 segmented cells." className="shrink-0">
      <T x={20} y={30} anchor="start" size={32} weight={800}>
        <tspan fill={FG}>Where</tspan>
        <tspan fill={MUTED}>, and </tspan>
        <tspan fill={PRIMARY}>what?</tspan>
      </T>
      {/* the slide */}
      <rect x={20} y={64} width={500} height={286} rx={10} fill={PRIMARY} fillOpacity={0.04} stroke={PRIMARY} strokeOpacity={0.4} strokeWidth={2} strokeDasharray="8 6" />
      {blobs.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={MUTED} fillOpacity={0.16} />
      ))}
      {tiles.map(([x, y, size, where, what], i) => (
        <g key={i}>
          <rect x={x} y={y} width={size} height={size} rx={3} fill={PRIMARY} fillOpacity={i === 3 ? 0.75 : 0.3 + (i % 3) * 0.15} stroke={PRIMARY} strokeWidth={1.5} />
          {where ? (
            <>
              <T x={x + size + 9} y={y + size / 2 - 9} anchor="start" size={12} mono weight={700} fill={FG}>
                {where}
              </T>
              <T x={x + size + 9} y={y + size / 2 + 9} anchor="start" size={13.5} weight={700} fill={PRIMARY}>
                {what}
              </T>
            </>
          ) : null}
        </g>
      ))}
      <T x={318} y={150} anchor="start" size={11.5} mono weight={700} fill={MUTED}>
        40x, inside the 10x
      </T>
      {/* the two halves */}
      <T x={20} y={380} anchor="start" size={15} weight={700} fill={FG}>
        Where: spatial data.
      </T>
      <T x={186} y={380} anchor="start" size={15} fill={MUTED}>
        A place and a size on the slide.
      </T>
      <T x={20} y={408} anchor="start" size={15} weight={700} fill={PRIMARY}>
        What: analysis.
      </T>
      <T x={186} y={408} anchor="start" size={15} fill={MUTED}>
        What was found there.
      </T>
    </svg>
  );
}

/* --- the agent, behind Arkitekt ------------------------------------------------ */

/** Three ways to put an agent in a lab, drawn like the app slides: cards,
    the filled Arkitekt card, open connections. One key press swaps each for
    the next, in place (reveal fragments, nothing fades). First, what
    Anthropic wants you to do: the agent talks to every device, and to your
    data, directly. Second, a naive barrier: the agent is a client of
    Arkitekt, so there are rights and a log, but the log says "claude".
    Third, our vision: a person talks through Arkitekt, and the agent is one
    more app behind it, on Claude or on a local LLM, with that person's
    rights. */
export function AgentBarrierFigure() {
  const u = useUid();
  const W = 1200;
  const H = 450;
  const yMid = 160; // the midline every connection leaves from
  const actor = { x: 0, w: 220, h: 150 };
  const hub = { x: 356, w: 250, h: 300 };
  const col = { x: 740, w: 216, h: 52, gap: 14 }; // what is being driven
  const far = { x: 1010, w: 190 }; // what the agent talks to
  const rowY = (i: number, n: number) => yMid - (n * col.h + (n - 1) * col.gap) / 2 + i * (col.h + col.gap);
  const on = (n: number, sel: string) => `.${u}-s${n}.visible ~ ${sel}, .${u}-s${n}.visible ~ * ${sel}`;
  const css = `
.${u}-p0 { display: block; }
.${u}-p1, .${u}-p2 { display: none; }
${on(1, `.${u}-p0`)} { display: none; }
${on(1, `.${u}-p1`)} { display: block; }
${on(2, `.${u}-p1`)} { display: none; }
${on(2, `.${u}-p2`)} { display: block; }
/* the connections stay open: their dashes never stop */
.${u}-flow { animation: ${u}-flow 0.9s linear infinite; }
@keyframes ${u}-flow { to { stroke-dashoffset: -28; } }
@media (prefers-reduced-motion: reduce) { .${u}-flow { animation: none; } }
`;
  const claude = (size: number) => (
    <span aria-hidden className="flex shrink-0 items-center justify-center rounded-xl bg-[#d97757] text-white" style={{ width: size, height: size }}>
      <svg viewBox="-12 -12 24 24" width={size * 0.6} height={size * 0.6}>
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x={-1.6} y={-10} width={3.2} height={9} rx={1.6} fill="currentColor" transform={`rotate(${i * 45})`} />
        ))}
      </svg>
    </span>
  );
  /** A row on the far side: a device, the data, or the agent as one more app. */
  const row = (y: number, Icon: LucideIcon, name: string, opts: { solid?: boolean; x?: number; w?: number } = {}) => (
    <div
      key={name}
      className={cn('absolute flex items-center gap-3 rounded-xl border-2 px-3.5 shadow-sm', opts.solid ? 'border-fd-primary bg-fd-primary text-fd-primary-foreground' : 'border-fd-primary/60 bg-fd-card')}
      style={{ left: opts.x ?? col.x, top: y, width: opts.w ?? col.w, height: col.h }}
    >
      <Icon className={cn('size-[24px] shrink-0', opts.solid ? '' : 'text-fd-primary')} strokeWidth={1.8} />
      <span className="text-[19px] font-semibold leading-none">{name}</span>
    </div>
  );
  /** The agent on its own, on the left. */
  const agent = (
    <div className="absolute flex flex-col items-center justify-center gap-2.5 rounded-2xl border-2 border-fd-primary/60 bg-fd-card shadow-md" style={{ left: actor.x, top: yMid - actor.h / 2, width: actor.w, height: actor.h }}>
      {claude(56)}
      <span className="text-[21px] font-semibold leading-none">AI agent</span>
      <span className="text-[14px] leading-none text-fd-muted-foreground">on its own</span>
    </div>
  );
  /** Arkitekt in the middle: rights, and a log of everything. */
  const arkitekt = (
    <div className="absolute flex flex-col items-center justify-center gap-3 rounded-[26px] bg-fd-primary text-fd-primary-foreground shadow-xl" style={{ left: hub.x, top: yMid - hub.h / 2, width: hub.w, height: hub.h }}>
      <span className="flex size-[64px] items-center justify-center rounded-2xl bg-white/95 shadow-sm">
        <Logo className="size-[54px]" />
      </span>
      <span className="text-[30px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
      <span className="flex gap-2">
        {['rights', 'log'].map((t) => (
          <span key={t} className="rounded-full bg-black/25 px-3 py-1 font-mono text-[13px] font-semibold">
            {t}
          </span>
        ))}
      </span>
    </div>
  );
  /** An open connection, with its two ends. */
  const link = (d: string, key: string) => {
    const pts = d.match(/-?\d+(\.\d+)?/g)!.map(Number);
    const ends: [number, number][] = [
      [pts[0], pts[1]],
      [pts[pts.length - 2], pts[pts.length - 1]],
    ];
    return (
      <g key={key}>
        <path className={`${u}-flow`} d={d} fill="none" stroke={PRIMARY} strokeOpacity={0.85} strokeWidth={2.4} strokeDasharray="8 6" />
        {ends.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
        ))}
      </g>
    );
  };
  const sweep = (x0: number, y0: number, x1: number, y1: number) => `M${x0} ${y0} C ${(x0 + x1) / 2} ${y0}, ${(x0 + x1) / 2} ${y1}, ${x1} ${y1}`;
  const lines = (paths: string[]) => (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="pointer-events-none absolute inset-0" aria-hidden>
      {paths.map((d, i) => link(d, `${i}`))}
    </svg>
  );
  /** The stage's name, top left; its verdict and what the log would say, along the bottom. */
  const frame = (n: number, title: string, verdict: string, more: string, by: string, children: ReactNode) => (
    <div className={`${u}-p${n} absolute inset-0`}>
      {children}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-8">
        <span className="flex flex-col gap-1.5">
          <span className="text-[17px] font-semibold text-fd-muted-foreground">{title}</span>
          <span className="text-[40px] font-bold leading-[1.05] tracking-[-0.025em] text-fd-primary">{verdict}</span>
          <span className="text-[19px] leading-snug text-fd-muted-foreground">{more}</span>
        </span>
        <span className="mb-1 flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl border-2 border-fd-primary/60 bg-fd-card px-4 py-2.5 font-mono text-[16px] shadow-sm">
          <span className="text-fd-muted-foreground">the log says · by:</span>
          <span className="font-bold text-fd-primary">{by}</span>
        </span>
      </div>
    </div>
  );
  const devices: [LucideIcon, string][] = [
    [Bot, 'robot arm'],
    [Pipette, 'OT-2'],
    [Microscope, 'microscope'],
  ];
  const direct: [LucideIcon, string][] = [...devices, [Database, 'your data']];
  const apps: [LucideIcon, string][] = [...devices, [Bot, 'agent']];
  return (
    <div className="relative mx-auto h-[450px] w-[1200px]">
      {[1, 2].map((n) => (
        <Fragment key={n} as="span" index={n} className={`${u}-s${n} absolute`} />
      ))}
      <LoopStyles css={css} />
      <div
        className="sm-animate absolute inset-0"
        role="img"
        aria-label="Three ways to put an agent in a lab. First, what Anthropic wants you to do: the AI agent talks to the robot arm, the OT-2 and the microscope directly, and reads your data directly; nothing limits it and nothing records it. Second, a naive barrier, the agent as a client of Arkitekt: now there are rights and a log, but the log only says claude, and nobody knows who was behind it. Third, our vision: Kim chats through Arkitekt, and the agent is one more app behind it, next to the devices, talking to Claude or to a local LLM. The agent works with Kim's rights, and the log names her."
      >
        {/* 1 · the agent, straight on the devices, and on the data */}
        {frame(
          0,
          'What Anthropic wants you to do',
          'No limits. No record.',
          'The agent talks to every device directly, and reads your data directly.',
          'nothing',
          <>
            {lines(direct.map((_, i) => sweep(actor.x + actor.w, yMid, col.x, rowY(i, 4) + col.h / 2)))}
            {agent}
            {direct.map(([Icon, name], i) => row(rowY(i, 4), Icon, name))}
            <span className="absolute -translate-x-1/2 whitespace-nowrap rounded-full border border-fd-border bg-fd-card px-3 py-1 font-mono text-[14px] text-fd-muted-foreground" style={{ left: (actor.x + actor.w + col.x) / 2, top: yMid - 15 }}>
              ssh · http · scripts
            </span>
          </>,
        )}

        {/* 2 · the agent, driving Arkitekt by itself */}
        {frame(
          1,
          'A naive barrier: an agent as a client',
          'A record. But of whom?',
          'Nobody knows who was behind it.',
          '“claude” ?',
          <>
            {lines([`M${actor.x + actor.w} ${yMid} L${hub.x} ${yMid}`, ...devices.map((_, i) => sweep(hub.x + hub.w, yMid, col.x, rowY(i, 3) + col.h / 2))])}
            {agent}
            {arkitekt}
            {devices.map(([Icon, name], i) => row(rowY(i, 3), Icon, name))}
          </>,
        )}

        {/* 3 · a person, through Arkitekt; the agent is one more app behind it */}
        {frame(
          2,
          'Our vision',
          'Rights, a record, and a name.',
          'We know who did it. And the agent only gets what Kim may do.',
          'Kim · with an agent',
          <>
            {lines([
              `M${actor.x + 170} ${yMid} L${hub.x} ${yMid}`,
              ...apps.map((_, i) => sweep(hub.x + hub.w, yMid, col.x, rowY(i, 4) + col.h / 2)),
              sweep(col.x + col.w, rowY(3, 4) + col.h / 2, far.x, rowY(2, 4) + col.h / 2 - 6),
              sweep(col.x + col.w, rowY(3, 4) + col.h / 2, far.x, rowY(3, 4) + col.h / 2 + 12),
            ])}
            <div className="absolute" style={{ left: actor.x + 20, top: yMid - 84 }}>
              <KimFigure size={150} mood="happy" />
            </div>
            <span className="absolute -translate-x-1/2 whitespace-nowrap rounded-full border border-fd-border bg-fd-card px-3 py-1 font-mono text-[14px] font-semibold text-fd-primary" style={{ left: (actor.x + 170 + hub.x) / 2, top: yMid - 46 }}>
              chat
            </span>
            {arkitekt}
            {apps.map(([Icon, name], i) => row(rowY(i, 4), Icon, name, { solid: i === 3 }))}
            {/* what the agent talks to: somebody's cloud, or a model in the building */}
            <div className="absolute flex items-center gap-3 rounded-xl border-2 border-fd-border bg-fd-card px-3.5 shadow-sm" style={{ left: far.x, top: rowY(2, 4) - 6, width: far.w, height: col.h }}>
              {claude(30)}
              <span className="text-[19px] font-semibold leading-none">Claude</span>
            </div>
            <span className="absolute text-center font-mono text-[13px] text-fd-muted-foreground" style={{ left: far.x, width: far.w, top: rowY(2, 4) + col.h - 3 }}>
              or
            </span>
            {row(rowY(3, 4) + 12, Cpu, 'a local LLM', { x: far.x, w: far.w })}
          </>,
        )}
      </div>
    </div>
  );
}

/* --- can't hand it to anyone: spaces ---------------------------------------- */

function DatasetCard({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={110} rx={12} fill={SURFACE} stroke={BORDER} strokeWidth={1.6} />
      {[2, 1, 0].map((k) => (
        <rect key={k} x={x + 18 + k * 7} y={y + 22 - k * 7} width={62} height={62} rx={5} fill={PRIMARY} fillOpacity={0.15 + (2 - k) * 0.15} stroke={PRIMARY} strokeWidth={1} />
      ))}
      <T x={x + 120} y={y + 44} anchor="start" size={17} weight={600}>
        the run
      </T>
      <T x={x + 120} y={y + 70} anchor="start" size={14} fill={MUTED}>
        images + metadata
      </T>
    </g>
  );
}

function ProvenanceMini({ x, y, w }: { x: number; y: number; w: number }) {
  const pts = [x + 40, x + w / 2, x + w - 40];
  return (
    <g>
      <rect x={x} y={y} width={w} height={96} rx={12} fill={SURFACE} stroke={BORDER} strokeWidth={1.6} />
      <line x1={pts[0]} y1={y + 44} x2={pts[2]} y2={y + 44} stroke={PRIMARY} strokeWidth={2} />
      {pts.map((p, i) => (
        <circle key={i} cx={p} cy={y + 44} r={9} fill={i === 1 ? SURFACE : PRIMARY} stroke={PRIMARY} strokeWidth={2.5} />
      ))}
      <T x={x + w / 2} y={y + 76} size={14} fill={MUTED}>
        provenance
      </T>
    </g>
  );
}

/** Grant access, don't copy: a copy is refused, access is granted, the guest
    sees the run with its history, then access is revoked. Ten-second loop. */
export function ShareFigure() {
  const u = useUid();
  const css = [
    `.${u}-ghost, .${u}-nocopy, .${u}-revoke, .${u}-x { opacity: 0; }`,
    `.${u}-grant { transform-box: fill-box; transform-origin: left center; }`,
    `.${u}-x { transform-box: fill-box; transform-origin: center; }`,
    loop(u, 'ghost', 10, `0% { opacity: 0; transform: none; } 3% { opacity: .8; } 12% { opacity: .8; transform: translateX(150px); } 16%, 100% { opacity: 0; transform: translateX(170px); }`),
    loop(u, 'nocopy', 10, `0%, 10% { opacity: 0; } 13%, 24% { opacity: 1; } 28%, 100% { opacity: 0; }`),
    loop(u, 'grant', 10, `0%, 24% { transform: scaleX(0); opacity: 1; } 32%, 94% { transform: none; opacity: 1; } 100% { transform: none; opacity: 0; }`),
    loop(u, 'key', 10, `0%, 30% { opacity: 0; } 34%, 94% { opacity: 1; } 100% { opacity: 0; }`),
    loop(u, 'guest', 10, `0%, 34% { opacity: 0; } 40%, 62% { opacity: 1; } 70%, 94% { opacity: .12; } 100% { opacity: 0; }`),
    loop(u, 'revoke', 10, `0%, 62% { opacity: 0; } 66%, 94% { opacity: 1; } 100% { opacity: 0; }`),
    loop(u, 'x', 10, `0%, 64% { opacity: 0; transform: scale(.4); } 68%, 94% { opacity: 1; transform: none; } 100% { opacity: 0; }`),
  ].join('\n');
  return (
    <svg width={1100} height={360} viewBox="0 0 1100 360" role="img" aria-label="A copy is refused; access is granted to a guest, who sees the run and its provenance; then access is revoked" className="mx-auto block">
      <LoopStyles css={css} />
      <g className="sm-fade" style={delay(0.1)}>
        <rect x={30} y={20} width={440} height={330} rx={18} fill={PRIMARY} fillOpacity={0.04} stroke={BORDER} strokeWidth={1.6} />
        <T x={52} y={46} anchor="start" size={13} mono weight={700} fill={MUTED}>
          YOUR FACILITY · THE DATA STAYS HERE
        </T>
      </g>
      <g className="sm-in" style={delay(0.3)}>
        <DatasetCard x={60} y={74} w={380} />
      </g>
      <g className="sm-in" style={delay(0.5)}>
        <ProvenanceMini x={60} y={210} w={380} />
      </g>

      <g className={`${u}-ghost`}>
        <rect x={60} y={74} width={380} height={110} rx={12} fill="none" stroke={WARN} strokeWidth={2} strokeDasharray="6 5" />
      </g>
      <T className={`${u}-nocopy`} x={595} y={110} size={16} weight={700} fill={WARN}>
        ✕ no copies
      </T>

      <g className="sm-fade" style={delay(0.2)}>
        <rect x={720} y={20} width={350} height={330} rx={18} fill={SURFACE} fillOpacity={0.5} stroke={BORDER} strokeWidth={1.6} />
        <T x={742} y={46} anchor="start" size={13} mono weight={700} fill={MUTED}>
          GUEST · SECOND ACCOUNT
        </T>
      </g>

      <rect className={`${u}-grant`} x={470} y={186} width={250} height={8} rx={4} fill={PRIMARY} />
      <g className={`${u}-key`}>
        <circle cx={595} cy={190} r={20} fill={SURFACE} stroke={PRIMARY} strokeWidth={3} />
        <circle cx={588} cy={190} r={6} fill="none" stroke={PRIMARY} strokeWidth={2.5} />
        <path d="M594 190 H606 M602 190 V196" stroke={PRIMARY} strokeWidth={2.5} />
        <T x={595} y={154} size={16} weight={700} fill={PRIMARY}>
          grant access
        </T>
        <T x={595} y={232} size={14} fill={MUTED}>
          scoped · revocable
        </T>
      </g>

      <g className={`${u}-guest`}>
        <DatasetCard x={745} y={74} w={300} />
        <ProvenanceMini x={745} y={210} w={300} />
      </g>

      <rect className={`${u}-revoke`} x={470} y={186} width={250} height={8} rx={4} fill={WARN} />
      <g className={`${u}-x`}>
        <circle cx={595} cy={190} r={22} fill={WARN} />
        <path d="M586 181 L604 199 M604 181 L586 199" stroke="#fff" strokeWidth={3.5} strokeLinecap="round" />
        <T x={595} y={272} size={16} weight={700} fill={WARN}>
          revoked
        </T>
      </g>
    </svg>
  );
}

/* --- its own UI: bloks ------------------------------------------------------ */

/** Left: three generated UIs, the front one happily sending 900 % laser power
    to the hardware. Right: a blok, whose fixed components and typed action let
    20 ms through and stop 900 ms at the validator. Eight-second loop. */
export function BloksFigure() {
  const u = useUid();
  const css = [
    `.${u}-v900, .${u}-hot, .${u}-tokA, .${u}-tokB1, .${u}-tokB2, .${u}-ok, .${u}-no { opacity: 0; }`,
    `.${u}-ok, .${u}-no { transform-box: fill-box; transform-origin: center; }`,
    loop(u, 'knob', 8, `0%, 40% { transform: none; } 48%, 92% { transform: translateX(150px); } 100% { transform: none; }`),
    loop(u, 'v20', 8, `0%, 40% { opacity: 1; } 45%, 95% { opacity: 0; } 100% { opacity: 1; }`),
    loop(u, 'v900', 8, `0%, 40% { opacity: 0; } 45%, 95% { opacity: 1; } 100% { opacity: 0; }`),
    loop(u, 'tokA', 8, `0%, 14% { opacity: 0; transform: none; } 16% { opacity: 1; } 28% { opacity: 1; transform: translateX(76px); } 30%, 52% { opacity: 0; transform: none; } 54% { opacity: 1; } 64% { opacity: 1; transform: translateX(76px); } 66%, 100% { opacity: 0; }`),
    loop(u, 'hot', 8, `0%, 64% { opacity: 0; } 66%, 92% { opacity: 1; } 100% { opacity: 0; }`),
    loop(u, 'tokB1', 8, `0%, 14% { opacity: 0; transform: none; } 16% { opacity: 1; } 30% { opacity: 1; transform: translateX(104px); } 32%, 100% { opacity: 0; transform: translateX(104px); }`),
    loop(u, 'ok', 8, `0%, 30% { opacity: 0; transform: scale(.4); } 33%, 42% { opacity: 1; transform: none; } 46%, 100% { opacity: 0; }`),
    loop(u, 'tokB2', 8, `0%, 52% { opacity: 0; transform: none; } 54% { opacity: 1; } 60%, 92% { opacity: 1; transform: translateX(26px); } 95%, 100% { opacity: 0; transform: translateX(26px); }`),
    loop(u, 'no', 8, `0%, 60% { opacity: 0; transform: scale(.4); } 63%, 92% { opacity: 1; transform: none; } 96%, 100% { opacity: 0; }`),
  ].join('\n');
  const win = (x: number, y: number, title: string, front = false) => (
    <g>
      <rect x={x} y={y} width={240} height={160} rx={10} fill={SURFACE} stroke={front ? WARN : BORDER} strokeWidth={1.6} />
      <rect x={x} y={y} width={240} height={26} rx={10} fill={front ? WARN : MUTED} fillOpacity={0.15} />
      <T x={x + 14} y={y + 14} anchor="start" size={13} mono fill={MUTED}>
        {title}
      </T>
    </g>
  );
  return (
    <svg width={1100} height={380} viewBox="0 0 1100 380" role="img" aria-label="Generated UIs pile up and one sends 900 percent laser power to the hardware; a blok lets 20 milliseconds through and rejects 900 milliseconds at its validator" className="mx-auto block">
      <LoopStyles css={css} />

      {/* generated UIs */}
      <T className="sm-fade" style={delay(0.1)} x={30} y={18} anchor="start" size={13} mono weight={700} fill={MUTED}>
        GENERATED UIs · EVERY WORKFLOW BRINGS ITS OWN
      </T>
      <g className="sm-pop" style={delay(0.2)}>{win(30, 44, 'workflow_v1 UI')}</g>
      <g className="sm-pop" style={delay(0.5)}>{win(60, 74, 'agent_ui_2.html')}</g>
      <g className="sm-pop" style={delay(0.8)}>
        {win(90, 104, 'quick_gui.py', true)}
        <T x={110} y={160} anchor="start" size={15}>
          laser power
        </T>
        <line x1={115} y1={210} x2={305} y2={210} stroke={BORDER} strokeWidth={6} strokeLinecap="round" />
        <circle className={`${u}-knob`} cx={140} cy={210} r={11} fill={WARN} />
        <T className={`${u}-v20`} x={305} y={160} anchor="end" size={15} mono weight={700}>
          20 %
        </T>
        <T className={`${u}-v900`} x={305} y={160} anchor="end" size={15} mono weight={700} fill={WARN}>
          900 %
        </T>
      </g>
      <Path className="sm-draw" style={delay(1.1)} d="M330 184 L420 184" width={2.5} />
      <rect className={`${u}-tokA`} x={334} y={177} width={14} height={14} rx={3} fill={WARN} />
      <Box className="sm-pop" style={delay(1.2)} x={424} y={150} w={110} h={68} title="laser" />
      <rect className={`${u}-hot`} x={424} y={150} width={110} height={68} rx={12} fill={WARN} fillOpacity={0.35} stroke={WARN} strokeWidth={2.5} />
      <T className={`${u}-hot`} x={479} y={246} size={15} weight={700} fill={WARN}>
        ⚠ anything goes
      </T>

      <line x1={560} y1={20} x2={560} y2={360} stroke={BORDER} strokeWidth={1.2} />

      {/* blok */}
      <T className="sm-fade" style={delay(0.1)} x={590} y={18} anchor="start" size={13} mono weight={700} fill={PRIMARY}>
        A BLOK · FIXED COMPONENTS, TYPED ACTIONS
      </T>
      <g className="sm-pop" style={delay(0.4)}>
        <rect x={590} y={44} width={260} height={240} rx={12} fill={PRIMARY} fillOpacity={0.06} stroke={PRIMARY} strokeOpacity={0.6} strokeWidth={1.6} />
        <T x={610} y={74} anchor="start" size={16} weight={600}>
          Capture
        </T>
        <T x={610} y={116} anchor="start" size={14} fill={MUTED}>
          exposure
        </T>
        <rect x={610} y={130} width={150} height={40} rx={8} fill={SURFACE} stroke={BORDER} strokeWidth={1.4} />
        <T className={`${u}-v20`} x={624} y={151} anchor="start" size={17} mono weight={700}>
          20
        </T>
        <T className={`${u}-v900`} x={624} y={151} anchor="start" size={17} mono weight={700} fill={WARN}>
          900
        </T>
        <T x={772} y={151} anchor="start" size={16} mono fill={MUTED}>
          ms
        </T>
        <T x={610} y={190} anchor="start" size={13} mono fill={MUTED}>
          range 1–500 ms
        </T>
        <rect x={610} y={216} width={110} height={42} rx={8} fill={PRIMARY} />
        <T x={665} y={238} size={16} weight={600} fill="var(--color-fd-primary-foreground)">
          capture
        </T>
      </g>
      <Path className="sm-draw" style={delay(1)} d="M850 184 L990 184" width={2.5} />
      <g className="sm-pop" style={delay(1.1)}>
        <path d="M900 158 L922 166 V186 C922 200 912 208 900 212 C888 208 878 200 878 186 V166 Z" fill={SURFACE} stroke={PRIMARY} strokeWidth={2.2} />
        <T x={900} y={232} size={12} mono fill={MUTED}>
          validate
        </T>
      </g>
      <Box className="sm-pop" style={delay(1.2)} x={994} y={150} w={96} h={68} title="camera" />
      <rect className={`${u}-tokB1`} x={854} y={177} width={14} height={14} rx={3} fill={PRIMARY} />
      <rect className={`${u}-tokB2`} x={854} y={177} width={14} height={14} rx={3} fill={WARN} />
      <g className={`${u}-ok`}>
        <circle cx={1042} cy={122} r={16} fill={PRIMARY} />
        <path d="M1034 122 L1040 128 L1051 116" stroke="var(--color-fd-primary-foreground)" strokeWidth={3} fill="none" strokeLinecap="round" />
      </g>
      <g className={`${u}-no`}>
        <circle cx={900} cy={130} r={16} fill={WARN} />
        <path d="M893 123 L907 137 M907 123 L893 137" stroke="#fff" strokeWidth={3} strokeLinecap="round" />
        <T x={900} y={262} size={15} weight={700} fill={WARN}>
          out of range · rejected
        </T>
      </g>

      <T className="sm-in" style={delay(1.6)} x={280} y={340} size={15} fill={MUTED}>
        Interface fatigue, and anything reaches the hardware.
      </T>
      <T className="sm-in" style={delay(1.8)} x={830} y={340} size={15} fill={MUTED}>
        Declarative, with validated units.
      </T>
    </svg>
  );
}

/* --- outlook: Optikit -------------------------------------------------------- */

/** A light path that reconfigures itself: the second lens moves and the rays
    re-route, from a focus on the sample to even illumination. */
export function OptikitFigure() {
  const ys = [75, 115, 155];
  const a = (y: number, i: number) => `M120 115 L320 ${y} L420 ${y} L520 ${y} L760 115 L980 ${[145, 115, 85][i]}`;
  const b = (y: number) =>
    `M120 115 L320 ${y} L440 115 L600 ${230 - y} L760 ${230 - y} L980 ${230 - y}`;
  const kt = '0;0.4;0.5;0.9;1';
  return (
    <svg width={1100} height={230} viewBox="0 0 1100 230" role="img" aria-label="A light path from source through two lenses to the sample and a camera; the second lens moves and the rays re-route between two configurations" className="mx-auto block">
      <Box className="sm-pop" style={delay(0.1)} x={30} y={85} w={90} h={60} title="source" titleSize={16} />
      {ys.map((y, i) => (
        <path key={i} className="sm-fade" style={delay(0.6)} d={a(y, i)} fill="none" stroke={PRIMARY} strokeWidth={2.4} strokeOpacity={0.8}>
          <animate attributeName="d" dur="8s" repeatCount="indefinite" keyTimes={kt} values={[a(y, i), a(y, i), b(y), b(y), a(y, i)].join(';')} />
        </path>
      ))}
      <ellipse className="sm-pop" style={delay(0.3)} cx={320} cy={115} rx={12} ry={58} fill={PRIMARY} fillOpacity={0.15} stroke={PRIMARY} strokeWidth={2} />
      <ellipse className="sm-pop" style={delay(0.4)} cx={520} cy={115} rx={12} ry={58} fill={PRIMARY} fillOpacity={0.15} stroke={PRIMARY} strokeWidth={2}>
        <animate attributeName="cx" dur="8s" repeatCount="indefinite" keyTimes={kt} values="520;520;600;600;520" />
      </ellipse>
      <line className="sm-fade" style={delay(0.5)} x1={760} y1={55} x2={760} y2={175} stroke={FG} strokeWidth={3} />
      <Box className="sm-pop" style={delay(0.5)} x={980} y={85} w={90} h={60} title="camera" titleSize={16} />
      <T x={320} y={200} size={14} fill={MUTED}>
        lens
      </T>
      <T x={560} y={200} size={14} fill={MUTED}>
        lens · moves
      </T>
      <T x={760} y={200} size={14} fill={MUTED}>
        sample
      </T>
      <g>
        <T x={550} y={22} size={15} mono weight={700} fill={PRIMARY}>
          <tspan>configuration A · focused on the sample</tspan>
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" keyTimes={kt} values="1;1;0;0;1" />
        </T>
        <T x={550} y={22} size={15} mono weight={700} fill={WARN}>
          <tspan>configuration B · even illumination</tspan>
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" keyTimes={kt} values="0;0;1;1;0" />
        </T>
      </g>
    </svg>
  );
}

/** Decide → simulate → build → run, lighting up in order. */
export function OptikitSteps() {
  const steps: [string, ReactNode][] = [
    ['Decide', 'Which optics does the question need?'],
    ['Simulate', 'Optiland for the ray path, faser for the high-NA focus'],
    ['Build', 'From openUC2 modules'],
    ['Run', 'Through Arkitekt, like any other device'],
  ];
  return (
    <div className="flex items-stretch gap-2">
      {steps.map(([title, body], i) => (
        <div key={title} className="sm-in flex flex-1 items-center gap-2" style={delay(1 + i * 0.4)}>
          <div className={`flex h-full flex-1 flex-col gap-1.5 rounded-xl border p-4 ${i === 3 ? 'border-fd-primary/45 bg-fd-primary/5' : 'border-fd-border bg-fd-card/60'}`}>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">
              {i + 1} · {title}
            </span>
            <span className="text-[17px] leading-snug">{body}</span>
          </div>
          {i < steps.length - 1 ? <span aria-hidden className="text-[22px] text-fd-primary">→</span> : null}
        </div>
      ))}
    </div>
  );
}


/* --- the workflow ------------------------------------------------------------ */

/** One node of the editor: an action, the app (and machine) it runs on, what
    goes in, what comes out. `dir` is the way the row flows: the top row runs
    left to right, the bottom row comes back right to left. */
type FlowNode = { name: string; app: string; machine: string; param: string; out: string; x: number; y: number; dir: 1 | -1 };

/** An action name that may wrap after an underscore, and nowhere else. */
function ActionName({ name }: { name: string }) {
  const parts = name.split('_');
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 ? (
            <>
              _<wbr />
            </>
          ) : null}
        </span>
      ))}
    </>
  );
}

/** Orkestrator's editor: the lab's actions are dragged out of the palette
    and wired by their types into one staining round of `process_slides`:
    arm to the OT-2, stain, image, stitch, segment, measure, with a loop back
    while the uptake is below target. That wiring is the whole slide: a
    three-second entrance that plays each time the slide comes up (the root
    is `sm-steps sm-animate`, so its builds run and nobody stops them). The
    workflow is not run here. One keypress: the red X. */
export function WorkflowFigure() {
  const u = useUid();
  const nw = 216;
  const nh = 116;
  const port = 76;
  const cols = [228, 522, 816];
  const rows = [58, 232];
  const palY = (i: number) => 84 + i * 46;
  const nodes: FlowNode[] = [
    { name: 'run_trajectory', app: 'arkirino', machine: 'bench', param: '"to_ot2"', out: 'done', x: cols[0], y: rows[0], dir: 1 },
    { name: 'run_protocol', app: 'ot2', machine: 'bench', param: 'stain_cd20', out: 'done', x: cols[1], y: rows[0], dir: 1 },
    { name: 'acquire_image', app: 'openuc2', machine: 'acquisition PC', param: '× 3 tiles', out: 'tiles', x: cols[2], y: rows[0], dir: 1 },
    { name: 'stitch_images', app: 'stitcher', machine: 'acquisition PC', param: 'tiles ←', out: 'mosaic', x: cols[2], y: rows[1], dir: -1 },
    { name: 'segment_image', app: 'stardist', machine: 'GPU server', param: 'mosaic ←', out: 'labels', x: cols[1], y: rows[1], dir: -1 },
    { name: 'calculate_stain_percentage', app: 'analyzer', machine: 'GPU server', param: 'labels ←', out: 'uptake', x: cols[0], y: rows[1], dir: -1 },
  ];
  const outPort = (n: FlowNode) => [n.dir === 1 ? n.x + nw : n.x, n.y + port] as const;
  const inPort = (n: FlowNode) => [n.dir === 1 ? n.x : n.x + nw, n.y + port] as const;
  const edges = nodes.slice(1).map((b, i) => {
    const a = nodes[i];
    const [x1, y1] = outPort(a);
    const [x2, y2] = inPort(b);
    if (a.dir === b.dir) {
      const c = 40 * a.dir;
      return { d: `M${x1} ${y1} C ${x1 + c} ${y1}, ${x2 - c} ${y2}, ${x2} ${y2}`, mx: (x1 + x2) / 2, my: y1 - 6, type: a.out };
    }
    // the turn at the right edge, from the top row down into the bottom one
    return { d: `M${x1} ${y1} C ${x1 + 60} ${y1}, ${x2 + 60} ${y2}, ${x2} ${y2}`, mx: x1 + 45, my: (y1 + y2) / 2, type: a.out };
  });
  const last = nodes[5];
  const [lx1, ly1] = outPort(last);
  const [lx2, ly2] = inPort(nodes[0]);
  const loopD = `M${lx1} ${ly1} C ${lx1 - 40} ${ly1}, ${lx2 - 40} ${ly2}, ${lx2} ${ly2}`;
  const outX = last.x + nw / 2;
  const outD = `M${outX} ${last.y + nh} L${outX} ${last.y + nh + 12}`;
  const step = 0.6;
  const runLen = 0.3;
  const pass2 = 4.25;
  const runAt = (pass: number, i: number) => (pass === 0 ? 0.5 : pass2) + i * step;
  const loopAt = runAt(0, 5) + runLen;
  const exitAt = runAt(1, 5) + runLen;
  const doneAt = exitAt + 0.4;
  const t = (s: number) => `${s}s`;
  const css = `
.${u}-drag { transform: none; }
section.present .${u}-drag { animation: ${u}-drag 0.7s cubic-bezier(.5,0,.2,1) var(--d) both; }
@keyframes ${u}-drag {
  0% { opacity: 0; transform: translate(calc(var(--px) * 1px), calc(var(--py) * 1px)) scale(0.75); }
  12% { opacity: 1; }
  100% { opacity: 1; transform: none; }
}
@keyframes ${u}-fadein { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-fadeout { from { opacity: 1; } to { opacity: 0; } }
@keyframes ${u}-pop { 0% { opacity: 0; transform: scale(0.6); } 70% { opacity: 1; transform: scale(1.12); } 100% { opacity: 1; transform: none; } }
@keyframes ${u}-press { 0%, 100% { transform: none; } 45% { transform: scale(0.9); } }
@keyframes ${u}-move { 0% { opacity: 0; offset-distance: 0%; } 10%, 100% { opacity: 1; } 100% { offset-distance: 100%; } }
:is(.${u}-run, .${u}-val, .${u}-ok, .${u}-tok, .${u}-img, .${u}-busy, .${u}-fin) { opacity: 0; }
.${u}-go.visible ~ * :is(.${u}-run, .${u}-val, .${u}-busy) { animation: ${u}-fadein 0.2s ease-out var(--d) both, ${u}-fadeout 0.25s ease-out var(--e) forwards; }
.${u}-go.visible ~ * :is(.${u}-ok, .${u}-fin), .${u}-go.visible ~ :is(.${u}-fin) { animation: ${u}-pop 0.35s ease-out var(--d) both; }
.${u}-go.visible ~ * .${u}-img { animation: ${u}-pop 0.45s ease-out var(--d) both; }
.${u}-go.visible ~ * .${u}-ghost { animation: ${u}-fadeout 0.2s ease-out var(--d) both; }
.${u}-go.visible ~ * .${u}-idle { animation: ${u}-fadeout 0.1s ease-out 0.1s both; }
.${u}-go.visible ~ * .${u}-btn { animation: ${u}-press 0.35s ease-out 0.05s both; }
.${u}-go.visible ~ .${u}-tok { animation: ${u}-move var(--m) ease-in-out var(--d) both, ${u}-fadeout 0.15s ease-out var(--e) forwards; }
/* click 2: so 2023 */
.${u}-dim, .${u}-stamp { opacity: 0; }
.${u}-x { stroke-dasharray: 1; stroke-dashoffset: 1; opacity: 0; }
.${u}-nope.visible ~ .${u}-dim { animation: ${u}-fadein 0.3s ease-out both; }
.${u}-nope.visible ~ * .${u}-x { animation: ${u}-scrawl 0.32s ease-in var(--d) both; }
.${u}-nope.visible ~ * .${u}-stamp { animation: ${u}-stamp 0.45s cubic-bezier(.2,1.4,.4,1) 0.95s both; }
/* hidden until the stroke starts: a round cap would otherwise show as a dot */
@keyframes ${u}-scrawl { 0% { stroke-dashoffset: 1; opacity: 0; } 2% { opacity: 0.92; } 100% { stroke-dashoffset: 0; opacity: 0.92; } }
@keyframes ${u}-stamp { from { opacity: 0; transform: rotate(-7deg) scale(1.9); } to { opacity: 1; transform: rotate(-7deg) scale(1); } }
@media (prefers-reduced-motion: reduce) { section.present .${u}-drag { animation: none; } }
`;
  const vars = (d: number, e?: number) => ({ '--d': t(d), ...(e === undefined ? {} : { '--e': t(e) }) }) as CSSProperties;
  // every token: its path, colour, start and how long it travels
  const tokens = [
    ...[0, 1].flatMap((pass) => edges.map((e, i) => ({ d: e.d, warn: false, at: runAt(pass, i) + runLen, m: 0.3 }))),
    { d: loopD, warn: true, at: loopAt, m: 0.4 },
    { d: outD, warn: false, at: exitAt, m: 0.3 },
  ];
  return (
    <div className="sm-steps sm-animate relative mx-auto h-[430px] w-[1180px]" style={STAGGERED} role="img" aria-label="Orkestrator's workflow editor: run_trajectory on the robot arm, run_protocol on the OT-2, acquire_image on the openUC2, stitch_images, segment_image with StarDist and calculate_stain_percentage are dragged out of the palette and wired by their types, with a loop back to the arm while the uptake is below target. On Run, the hub assigns each node to its own app: round 1 measures 41 percent and goes round again, round 2 reaches 86 percent and the result is stored on the hub.">
      {/* no run: the slide is about the wiring. Only the red X is a keypress. */}
      <Fragment as="span" index={1} className={`${u}-nope absolute`} />
      <LoopStyles css={css} />

      {/* the editor window */}
      <div className="sm-pop absolute inset-0 rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm" style={delay(0.05)}>
        <div className="flex h-[42px] items-center gap-2 border-b border-fd-border px-4">
          <span className="size-3 rounded-full bg-fd-muted-foreground/30" />
          <span className="size-3 rounded-full bg-fd-muted-foreground/30" />
          <span className="size-3 rounded-full bg-fd-muted-foreground/30" />
          <Workflow className="ml-3 size-[18px] text-fd-primary" strokeWidth={2} />
          <span className="text-[15px] font-semibold">Orkestrator</span>
          <span className="font-mono text-[13px] text-fd-muted-foreground">· process_slides</span>
        </div>
        <div
          className="absolute bottom-3 left-[200px] right-3 top-[52px] rounded-xl"
          style={{ backgroundImage: 'radial-gradient(circle, var(--color-fd-border) 1.2px, transparent 1.4px)', backgroundSize: '22px 22px' }}
        />
      </div>

      {/* Run button */}
      <div className="absolute right-[14px] top-[7px] h-[28px] w-[178px]">
        <div className={`${u}-btn sm-pop relative size-full`} style={delay(2.7)}>
          <span className={`${u}-idle absolute inset-0 flex items-center justify-center rounded-lg bg-fd-primary text-[14px] font-semibold text-fd-primary-foreground shadow-sm`}>▶ Run</span>
          <span className={`${u}-busy absolute inset-0 flex items-center justify-center whitespace-nowrap rounded-lg border-2 border-fd-primary/60 bg-fd-primary/10 text-[13px] font-semibold text-fd-primary`} style={vars(0.1, doneAt)}>
            running on the hub…
          </span>
          <span className={`${u}-fin absolute inset-0 flex items-center justify-center gap-1 rounded-lg bg-emerald-500 text-[14px] font-semibold text-white`} style={vars(doneAt)}>
            <Check className="size-[15px]" strokeWidth={3} /> done
          </span>
        </div>
      </div>

      {/* palette: what the hub knows */}
      <span className="sm-fade absolute left-[16px] top-[60px] font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground" style={delay(0.25)}>
        actions on the hub
      </span>
      {nodes.map((n, i) => (
        <div key={n.name} className="sm-in absolute left-[14px] flex min-h-[38px] w-[170px] flex-col justify-center rounded-lg border border-fd-border bg-fd-background/70 px-3 py-1" style={{ top: palY(i), ...delay(0.3 + i * 0.08) }}>
          <span className="font-mono text-[13px] font-semibold leading-[1.25]">
            <ActionName name={n.name} />
          </span>
          <span className="text-[11px] leading-tight text-fd-muted-foreground">{n.app}</span>
        </div>
      ))}
      {/* edges, the loop back, and the output */}
      <svg width={1180} height={430} viewBox="0 0 1180 430" className="pointer-events-none absolute inset-0" aria-hidden>
        <Arrowheads id={u} />
        {edges.map((e, i) => (
          <Path key={i} className="sm-draw" style={delay(1.9 + i * 0.1)} d={e.d} stroke={PRIMARY} width={2.6} />
        ))}
        <Path className="sm-draw" style={delay(2.5)} d={outD} stroke={PRIMARY} width={2.6} dash="5 5" head={`${u}-primary`} />
      </svg>

      {/* the output slot on the hub, filled by the run */}
      <div className="absolute h-[50px] w-[220px] -translate-x-1/2" style={{ left: outX, top: last.y + nh + 14 }}>
        <div className="sm-pop relative size-full" style={delay(2.5)}>
          <div className={`${u}-ghost absolute inset-0 flex items-center justify-center rounded-xl border-2 border-dashed border-fd-border font-mono text-[13px] text-fd-muted-foreground`} style={vars(doneAt - 0.1)}>
            output → hub
          </div>
          <div className={`${u}-img absolute inset-0 flex items-center gap-2.5 rounded-xl border-2 border-emerald-500/60 bg-fd-card px-2 shadow-md`} style={vars(doneAt - 0.1)}>
            <MiniSlide size={38} />
            <span className="flex flex-col">
              <span className="font-mono text-[13px] font-semibold leading-tight">CD20 · 86 % uptake</span>
              <span className="text-[12px] leading-tight text-fd-muted-foreground">on the hub · next stain</span>
            </span>
          </div>
        </div>
      </div>

      {/* the nodes, dragged in from the palette */}
      {nodes.map((n, i) => {
        const inSide = n.dir === 1 ? 'left' : 'right';
        const outSide = n.dir === 1 ? 'right' : 'left';
        return (
          <div key={n.name} className="absolute" style={{ left: n.x, top: n.y, width: nw, height: nh }}>
            <div
              className={`${u}-drag relative size-full rounded-xl border-2 border-fd-border bg-fd-card shadow-md`}
              style={{ ...delay(0.3 + i * 0.2), '--px': 14 - n.x, '--py': palY(i) - n.y } as CSSProperties}
            >
              <span className="absolute left-3 top-2 font-mono text-[11px] font-bold text-fd-primary">{n.app}</span>
              <span className="absolute right-3 top-2.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.12em] text-fd-muted-foreground">{n.machine}</span>
              <span className="absolute inset-x-3 top-[22px] font-mono text-[14px] font-bold leading-[1.15]">
                <ActionName name={n.name} />
              </span>
              <span className="absolute font-mono text-[12px] text-fd-muted-foreground" style={{ [inSide]: 12, top: port - 8 }}>
                {n.param}
              </span>
              <span className="absolute rounded bg-fd-primary/12 px-1.5 py-px font-mono text-[11.5px] text-fd-primary" style={{ [outSide]: 12, top: port - 10 }}>
                {n.dir === 1 ? `${n.out} →` : `← ${n.out}`}
              </span>
              <span className="absolute size-[12px] rounded-full border-2 border-fd-primary bg-fd-card" style={{ [inSide]: -7, top: port - 6 }} />
              <span className="absolute size-[12px] rounded-full border-2 border-fd-primary bg-fd-card" style={{ [outSide]: -7, top: port - 6 }} />
              {[0, 1].map((pass) => (
                <span key={pass} className={`${u}-run pointer-events-none absolute inset-[-3px] rounded-xl border-[3px] border-fd-primary bg-fd-primary/10`} style={vars(runAt(pass, i), runAt(pass, i) + runLen)}>
                  <span className="absolute bottom-2 left-3 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-fd-primary">
                    {pass === 1 ? 'round 2 · ' : ''}on {n.app}
                  </span>
                </span>
              ))}
              {i === 5 ? (
                <>
                  <span className={`${u}-val absolute bottom-2 right-3 rounded-full bg-amber-500/15 px-2 py-0.5 font-mono text-[12px] font-bold text-amber-700 dark:text-amber-400`} style={vars(loopAt, runAt(1, 5))}>
                    41 %
                  </span>
                  <span className={`${u}-ok absolute bottom-2 right-3 rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[12px] font-bold text-emerald-600`} style={vars(exitAt)}>
                    86 % ✓
                  </span>
                </>
              ) : null}
              <span className={`${u}-ok absolute right-[-10px] top-[-10px] flex size-[24px] items-center justify-center rounded-full bg-emerald-500 text-white shadow`} style={vars(runAt(0, i) + runLen)}>
                <Check className="size-[15px]" strokeWidth={3} />
              </span>
            </div>
          </div>
        );
      })}

      {/* tokens running along the edges */}
      {tokens.map((k, i) => (
        <span
          key={`tok${i}`}
          className={cn(
            `${u}-tok absolute left-0 top-0 size-[14px] rounded-full`,
            k.warn ? 'bg-amber-500 shadow-[0_0_0_4px_rgb(245_158_11/0.25)]' : 'bg-fd-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-fd-primary)_25%,transparent)]',
          )}
          style={{ offsetPath: `path('${k.d}')`, '--m': t(k.m), ...vars(k.at, k.at + k.m) } as CSSProperties}
        />
      ))}

      {/* click 2: a big red X, and the verdict */}
      <div className={`${u}-dim pointer-events-none absolute inset-0 rounded-2xl bg-fd-background/60`} />
      <div className="pointer-events-none absolute inset-0">
        <svg width={1180} height={430} viewBox="0 0 1180 430" className="absolute inset-0" aria-hidden>
          <path className={`${u}-x`} style={vars(0.1)} pathLength={1} d="M70 48 C 360 150, 760 290, 1116 398" fill="none" stroke="#dc2626" strokeWidth={24} strokeLinecap="round" opacity={0.92} />
          <path className={`${u}-x`} style={vars(0.45)} pathLength={1} d="M1112 44 C 800 150, 420 290, 64 400" fill="none" stroke="#dc2626" strokeWidth={24} strokeLinecap="round" opacity={0.92} />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className={`${u}-stamp flex flex-col items-center gap-2 rounded-2xl border-[6px] border-[#dc2626] bg-fd-card px-10 py-4 text-[#dc2626] shadow-2xl`}>
          <span className="text-[64px] font-black uppercase leading-none tracking-[-0.01em]">That is so 2023.</span>
          <span className="text-[24px] font-semibold italic leading-tight">and honestly, it doesn’t simplify anything</span>
        </span>
      </div>
    </div>
  );
}

/* --- why this one is different ------------------------------------------------ */

const DIFFERENT: { topic: string; debt: string; kim: string; ark: string }[] = [
  { topic: 'Connecting', debt: 'mesh', kim: 'IP addresses in the code, open ports', ark: 'apps dial out to one hub: no IPs, no open ports' },
  { topic: 'When it fails', debt: 'record', kim: 'a timeout, and nobody knows what ran', ark: 'every assignment recorded, and replayable' },
  { topic: 'Data', debt: 'coordinates', kim: 'metadata in a 260-character filename', ark: 'typed, with coordinates and provenance' },
  { topic: 'Sharing', debt: 'spaces', kim: 'copy 10,000 lines to the next lab', ark: 'grant access to the actions, take it back' },
  { topic: 'Interface', debt: 'bloks', kim: 'a new UI every afternoon', ark: 'UIs built from the same types' },
];

/** Same problem, two systems: what Kim's generated system does, what the hub
    does instead. Each row is one line of the debt list that follows. */
export function DifferentFigure() {
  const rowAt = (i: number) => 0.7 + i * 0.6;
  return (
    <div className="mx-auto flex w-[1180px] flex-col gap-2" role="img" aria-label="Kim's generated system versus Arkitekt, row by row: connecting, failure, data, sharing and interface">
      <div className="grid grid-cols-[170px_1fr_44px_1fr] items-end gap-x-3 pb-1">
        <span />
        <span className="sm-in flex flex-col" style={delay(0.15)}>
          <span className="text-[20px] font-bold">Kim’s system</span>
          <span className="text-[14px] text-fd-muted-foreground">generated per user, every afternoon, maintained by nobody</span>
        </span>
        <span />
        <span className="sm-in flex items-center gap-3" style={delay(0.3)}>
          <span className="flex size-[40px] shrink-0 items-center justify-center rounded-xl bg-fd-primary">
            <span className="flex size-[32px] items-center justify-center rounded-lg bg-white/95">
              <Logo className="size-[28px]" />
            </span>
          </span>
          <span className="flex flex-col">
            <span className="text-[20px] font-bold">Arkitekt</span>
            <span className="text-[14px] text-fd-muted-foreground">written once, tested, shared by every app</span>
          </span>
        </span>
      </div>
      {DIFFERENT.map((r, i) => (
        <div key={r.topic} className="grid h-[62px] grid-cols-[170px_1fr_44px_1fr] items-center gap-x-3">
          <span className="sm-in flex flex-col" style={delay(rowAt(i))}>
            <span className="text-[17px] font-semibold leading-tight">{r.topic}</span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-fd-primary">debt · {r.debt}</span>
          </span>
          <span className="sm-in flex h-full items-center gap-3 rounded-xl border border-amber-600/30 bg-amber-500/8 px-4 text-[17px] text-fd-muted-foreground" style={delay(rowAt(i))}>
            <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-amber-600/15 text-[13px] font-bold text-amber-700">✕</span>
            {r.kim}
          </span>
          <span className="sm-fade text-center text-[22px] text-fd-muted-foreground" style={delay(rowAt(i) + 0.25)}>
            →
          </span>
          <span className="sm-in flex h-full items-center gap-3 rounded-xl border-2 border-fd-primary/40 bg-fd-primary/8 px-4 text-[17px] font-medium" style={delay(rowAt(i) + 0.3)}>
            <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-fd-primary text-fd-primary-foreground">
              <Check className="size-[14px]" strokeWidth={3} />
            </span>
            {r.ark}
          </span>
        </div>
      ))}
    </div>
  );
}

/* --- or: ask for it ------------------------------------------------------------ */

type Tok = [string, 'k' | 's' | 'c' | 'f' | 'd' | ''];
const WF_CODE: Tok[][] = [
  [['from', 'k'], [' arkitekt ', ''], ['import', 'k'], [' App, Task', '']],
  [['from', 'k'], [' lab ', ''], ['import', 'k'], [' Slide  ', ''], ['# lab.py: one typed protocol per app on the hub', 'c']],
  [['from', 'k'], [' lab ', ''], ['import', 'k'], [' ArmLike, OT2Like, ScopeLike, StitcherLike, SegmenterLike, AnalyzerLike', '']],
  [],
  [['app = App(', ''], ['"stainstorm"', 's'], [', ', ''], ['"1.0.2"', 's'], [')', '']],
  [],
  [['@app.workflow', 'd']],
  [['def', 'k'], [' process_slides', 'f'], ['(robot: ArmLike, ot2: OT2Like, scope: ScopeLike, stitcher: StitcherLike,', '']],
  [['                   stardist: SegmenterLike, analyzer: AnalyzerLike,', '']],
  [['                   slide: Slide, panel: list[str], target: float = ', ''], ['0.8', 's'], [', *, task: Task):', '']],
  [['    ', ''], ['for', 'k'], [' stain ', ''], ['in', 'k'], [' panel:', '']],
  [['        ', ''], ['for', 'k'], [' attempt ', ''], ['in', 'k'], [' range(', ''], ['3', 's'], ['):  ', ''], ['# at most three rounds', 'c']],
  [['            robot.run_trajectory(', ''], ['"to_ot2"', 's'], ['); ot2.run_protocol(', ''], ['f"stain_{stain}"', 's'], [')', '']],
  [['            robot.run_trajectory(', ''], ['"to_scope"', 's'], [')', '']],
  [['            tiles = [scope.acquire_image() ', ''], ['for', 'k'], [' _ ', ''], ['in', 'k'], [' slide.tiles]', '']],
  [['            labels = stardist.segment_image(stitcher.stitch_images(tiles))', '']],
  [['            ', ''], ['if', 'k'], [' analyzer.calculate_stain_percentage(labels) >= target: ', ''], ['break', 'k']],
  [['        ', ''], ['else', 'k'], [':', '']],
  [['            task.hold(', ''], ['f"{slide.name}: {stain} still below target. Swap the reagent."', 's'], [')', '']],
];
const TOK_CLASS: Record<Tok[1], string> = {
  k: 'text-fd-primary font-semibold',
  s: 'text-emerald-600',
  c: 'text-fd-muted-foreground italic',
  f: 'text-sky-600',
  d: 'text-amber-600',
  '': '',
};

/** What the run prints, round by round: the stain, the round, the uptake, the verdict. */
const WF_ROUNDS: [string, string, string, boolean][] = [
  ['CD3', 'round 1', '84 %', true],
  ['CD20', 'round 1', '41 %', false],
  ['CD20', 'round 2', '86 %', true],
];

/** Kim asks for the workflow instead of drawing it: the AI writes a short
    Python workflow against the actions the hub already knows on her six apps,
    she runs it, and the hub stains, images and measures round by round,
    sending CD20 round again until it takes. One click on the figure per
    beat: her ask; the answer and its code; the run. */
export function AiWorkflowFigure() {
  const u = useUid();
  /* who answers: an assistant, or a friend who can code. The two take turns. */
  const css = `
.${u}-who { animation: ${u}-who 5s ease-in-out infinite; }
.${u}-who + .${u}-who { opacity: 0; animation-delay: -2.5s; }
@keyframes ${u}-who { 0%, 42% { opacity: 1; } 50%, 92% { opacity: 0; } 100% { opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .${u}-who { animation: none; } }
`;
  /* one beat per click: Kim's ask; the answer and its code; the run */
  const lineAt = (i: number) => 2 + i * 0.08;
  const codeDone = lineAt(WF_CODE.length);
  const termAt = codeDone + 1;
  const runAt = termAt + 0.8;
  /* nothing unfolds: the ask, the answer, its code and the run are all there on arrival */
  const cues = [runAt + 2.2];
  const code = 'font-mono text-[13.5px] text-fd-primary';
  return (
    <Steps cues={cues} className="relative mx-auto grid h-[440px] w-[1180px] grid-cols-[380px_1fr] gap-5">
    <div className="contents" role="img" aria-label="Kim asks an AI for a workflow that stains her slide on the OT-2 for each stain in her panel, images it on the openUC2, segments and measures it per cell, and stains again until it takes. It writes a short Python workflow, process_slides, against the actions of her six apps on the hub; she runs it, and the run reports CD3 at 84 percent, CD20 at 41 percent so stain again, then CD20 at 86 percent.">
      {/* the conversation, and the run */}
      <div className="flex flex-col gap-3">
        <div className="sm-in self-end rounded-2xl rounded-br-md bg-fd-primary px-4 py-2.5 text-[16px] leading-snug text-fd-primary-foreground shadow-sm" style={delay(0.3)}>
          Write me a workflow: for each stain in my panel, stain the slide on the OT-2, image it on the openUC2, segment and measure per cell, and stain again until it takes. Use the actions on my hub.
        </div>
        <div className="sm-in flex items-start gap-2.5" style={delay(1.3)}>
          <span className="sm-animate relative size-[30px] shrink-0">
            <LoopStyles css={css} />
            <span className={`${u}-who absolute inset-0 flex items-center justify-center rounded-lg bg-[#d97757] text-[18px] font-bold text-white`}>✻</span>
            {/* a friend who can code */}
            <svg className={`${u}-who absolute inset-0`} viewBox="0 0 30 30" role="img" aria-label="a friend">
              <rect width={30} height={30} rx={8} fill="#1e3a5f" />
              <path d="M5 30 C 5 22, 10 19.5, 15 19.5 C 20 19.5, 25 22, 25 30 Z" fill="#38bdf8" />
              <circle cx={15} cy={12.5} r={6.6} fill="#e0ac86" />
              <path d="M8.2 12 C 7.6 6.5, 11 4.2, 15 4.2 C 19 4.2, 22.4 6.5, 21.8 12 C 20.4 9.4, 18.6 8.6, 15 8.6 C 11.4 8.6, 9.6 9.4, 8.2 12 Z" fill="#2b2118" />
              <circle cx={12.6} cy={12.8} r={0.9} fill="#1f2937" />
              <circle cx={17.4} cy={12.8} r={0.9} fill="#1f2937" />
              <path d="M12.6 15.6 Q15 17.4 17.4 15.6" fill="none" stroke="#7c2d12" strokeWidth={1} strokeLinecap="round" />
            </svg>
          </span>
          <span className="rounded-2xl rounded-tl-md border border-fd-border bg-fd-card px-4 py-2.5 text-[15.5px] leading-snug shadow-sm">
            Your hub has <code className={code}>run_protocol</code>, <code className={code}>acquire_image</code> and four more, on six apps. Here’s a workflow that uses just those:
          </span>
        </div>
        <div className="sm-in mt-auto flex flex-col gap-1.5 rounded-xl bg-[#0f172a] px-4 py-3 font-mono text-[13px] text-slate-200 shadow-md" style={delay(termAt)}>
          <span>
            <span className="text-emerald-400">$</span> arkitekt run dev
          </span>
          <span className="sm-fade text-slate-400" style={delay(termAt + 0.4)}>
            ✓ process_slides is on the hub
          </span>
          {WF_ROUNDS.map(([stain, round, uptake, took], i) => (
            <span key={`${stain}${round}`} className="sm-in grid grid-cols-[44px_64px_48px_1fr] items-center" style={delay(runAt + i * 0.7)}>
              <span>{stain}</span>
              <span className="text-slate-400">{round}</span>
              <span className={took ? 'text-emerald-400' : 'text-amber-400'}>{uptake}</span>
              <span className={took ? 'text-emerald-400' : 'text-amber-400'}>{took ? '✓ next stain' : '↺ stain again'}</span>
            </span>
          ))}
        </div>
      </div>

      {/* the generated workflow */}
      <div className="sm-pop flex flex-col overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm" style={delay(1.7)}>
        <div className="flex h-[36px] shrink-0 items-center gap-2 border-b border-fd-border px-4">
          <span className="font-mono text-[13.5px] font-semibold">stainstorm.py</span>
          <span className="ml-auto font-mono text-[12px] text-fd-muted-foreground">{WF_CODE.length} lines · no plumbing</span>
        </div>
        <pre className="flex-1 px-4 py-2.5 font-mono text-[13px] leading-[1.48]">
          {WF_CODE.map((line, i) => (
            <span key={i} className="sm-fade block min-h-[1.48em] whitespace-pre" style={delay(lineAt(i))}>
              {line.map(([text, kind], j) => (
                <span key={j} className={TOK_CLASS[kind]}>
                  {text}
                </span>
              ))}
            </span>
          ))}
        </pre>
      </div>
    </div>
    </Steps>
  );
}

/* --- and the UI: remix the bloks ------------------------------------------------- */

/** One `<Blok use=…>` per tile; `tone` ties the code line to its tile. */
type RemixTone = 'sky' | 'primary' | 'emerald' | 'amber';
const REMIX_TONE: Record<RemixTone, { bar: string; dot: string; text: string }> = {
  sky: { bar: 'border-t-sky-500', dot: 'bg-sky-500', text: 'text-sky-600' },
  primary: { bar: 'border-t-fd-primary', dot: 'bg-fd-primary', text: 'text-fd-primary' },
  emerald: { bar: 'border-t-emerald-500', dot: 'bg-emerald-500', text: 'text-emerald-600' },
  amber: { bar: 'border-t-amber-500', dot: 'bg-amber-500', text: 'text-amber-600' },
};

/** The page Claude writes: nothing but layout, and the bloks the apps already ship. */
const REMIX_CODE: { line: Tok[]; tone?: RemixTone }[] = [
  { line: [['app.blok(', ''], ['"run_dashboard"', 's'], [', ', ''], ['"""', 's']] },
  { line: [['<Page>', 'f']] },
  { line: [['  <Stack ', 'f'], ['direction=', ''], ['"row"', 's'], ['>', 'f']] },
  { line: [['    <Blok ', 'f'], ['use=', ''], ['"scope.live_view"', 's'], [' />', 'f']], tone: 'sky' },
  { line: [['    <Stack>', 'f']] },
  { line: [['      <Blok ', 'f'], ['use=', ''], ['"stainstorm.progress"', 's'], [' />', 'f']], tone: 'primary' },
  { line: [['      <Blok ', 'f'], ['use=', ''], ['"ot2.deck_status"', 's'], [' />', 'f']], tone: 'emerald' },
  { line: [['      <Blok ', 'f'], ['use=', ''], ['"robot.pose"', 's'], [' />', 'f']], tone: 'amber' },
  { line: [['    </Stack>', 'f']] },
  { line: [['  </Stack>', 'f']] },
  { line: [['</Page>', 'f']] },
  { line: [['"""', 's'], [', dependencies={', ''], ['"scope"', 's'], [': ScopeLike,', '']] },
  { line: [['    ', ''], ['"ot2"', 's'], [': OT2Like, ', ''], ['"robot"', 's'], [': ArmLike})', '']] },
];

/** One tile of the remixed page: the app's own blok, under its name. */
function RemixTile({ name, app, tone, at, className, children }: { name: string; app: string; tone: RemixTone; at: number; className?: string; children: ReactNode }) {
  return (
    <div className={cn('sm-pop flex flex-col gap-2 rounded-xl border border-t-4 border-fd-border bg-fd-card p-3 shadow-sm', REMIX_TONE[tone].bar, className)} style={delay(at)}>
      <div className="flex items-center gap-2">
        <span className="text-[14.5px] font-semibold">{name}</span>
        <span className={cn('font-mono text-[11.5px]', REMIX_TONE[tone].text)}>{app}</span>
        <span className="ml-auto rounded-full bg-fd-muted px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-fd-muted-foreground">blok</span>
      </div>
      {children}
    </div>
  );
}

/** Kim wants one screen to watch the run. Claude doesn't generate a UI: it
    writes a blok that only lays out the bloks her apps already ship (the
    openUC2's live view, the run's progress, the OT-2's deck, the arm's pose),
    and the page fills in tile by tile as each `<Blok use=…>` line appears.
    Kim's ask stands on arrival; one click on the figure plays the rest. */
export function BlokRemixFigure() {
  /* one click: Kim's ask stands; then the answer, the page and its tiles */
  const lineAt = (i: number) => 2.0 + i * 0.16;
  const tileAt = (tone: RemixTone) => lineAt(REMIX_CODE.findIndex((l) => l.tone === tone)) + 0.15;
  const done = lineAt(REMIX_CODE.length) + 0.3;
  /* nothing unfolds: the ask, the answer, the code and the tiles are all there on arrival */
  const cues = [done + 1.3];
  const code = 'font-mono text-[13.5px] text-fd-primary';
  const progress: [string, string, 'done' | 'now' | 'todo'][] = [
    ['CD3', '84 % ✓', 'done'],
    ['CD20', 'round 2 …', 'now'],
    ['Ki-67', '', 'todo'],
    ['PanCK', '', 'todo'],
  ];
  return (
    <Steps cues={cues} className="relative mx-auto grid h-[440px] w-[1180px] grid-cols-[400px_1fr] gap-5">
    <div
      className="contents"
      role="img"
      aria-label="Kim asks for one screen to watch her run. Claude writes a blok called run_dashboard that contains no new components, only the bloks her apps already ship: the openUC2 live view, the stainstorm run progress, the OT-2 deck status and the robot arm's pose. The dashboard fills in tile by tile as each line appears."
    >
      {/* the ask, and the page Claude writes */}
      <div className="flex flex-col gap-2.5">
        <div className="sm-in self-end rounded-2xl rounded-br-md bg-fd-primary px-4 py-2.5 text-[16px] leading-snug text-fd-primary-foreground shadow-sm" style={delay(0.3)}>
          And give me one screen to watch the run.
        </div>
        <div className="sm-in flex items-start gap-2.5" style={delay(1.0)}>
          <span className="flex size-[30px] shrink-0 items-center justify-center rounded-lg bg-[#d97757] text-[18px] font-bold text-white">✻</span>
          <span className="rounded-2xl rounded-tl-md border border-fd-border bg-fd-card px-4 py-2.5 text-[15.5px] leading-snug shadow-sm">
            Your apps already ship bloks for that. Here’s a page made of <code className={code}>four</code> of them:
          </span>
        </div>
        <div className="sm-pop mt-auto flex flex-col overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm" style={delay(1.7)}>
          <div className="flex h-[32px] shrink-0 items-center gap-2 border-b border-fd-border px-4">
            <span className="font-mono text-[13px] font-semibold">stainstorm.py</span>
            <span className="ml-auto font-mono text-[11.5px] text-fd-muted-foreground">no new components</span>
          </div>
          <pre className="px-4 py-2 font-mono text-[12.5px] leading-[1.42]">
            {REMIX_CODE.map(({ line, tone }, i) => (
              <span key={i} className={cn('sm-fade relative block min-h-[1.42em] whitespace-pre', tone && 'rounded bg-fd-muted/60')} style={delay(lineAt(i))}>
                {tone ? <span className={cn('absolute -left-2.5 top-[5px] size-[7px] rounded-full', REMIX_TONE[tone].dot)} /> : null}
                {line.map(([text, kind], j) => (
                  <span key={j} className={TOK_CLASS[kind]}>
                    {text}
                  </span>
                ))}
              </span>
            ))}
          </pre>
        </div>
      </div>

      {/* the page it becomes, in Orkestrator */}
      <div className="flex flex-col gap-3">
        <div className="sm-pop flex flex-1 flex-col overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-muted/40 shadow-sm" style={delay(1.9)}>
          <div className="flex h-[36px] shrink-0 items-center gap-2 border-b border-fd-border bg-fd-card px-4">
            <span className="size-[10px] rounded-full bg-fd-border" />
            <span className="size-[10px] rounded-full bg-fd-border" />
            <span className="ml-2 font-mono text-[13px] font-semibold">Orkestrator · run_dashboard</span>
            <span className="ml-auto font-mono text-[12px] text-fd-muted-foreground">HE-07 · process_slides</span>
          </div>
          <div className="grid flex-1 grid-cols-[300px_1fr] gap-3 p-3">
            <RemixTile name="Live view" app="openuc2" tone="sky" at={tileAt('sky')}>
              <div className="relative h-[232px] overflow-hidden rounded-lg border border-fd-border">
                <ImageTile size={276} />
              </div>
              <div className="flex items-center gap-2">
                <span className="ml-auto rounded-md bg-fd-primary px-3 py-1 text-[12.5px] font-semibold text-fd-primary-foreground">Capture</span>
              </div>
            </RemixTile>
            <div className="flex flex-col gap-3">
              <RemixTile name="Run progress" app="stainstorm" tone="primary" at={tileAt('primary')}>
                <div className="grid grid-cols-4 gap-2">
                  {progress.map(([stain, note, state]) => (
                    <div
                      key={stain}
                      className={cn(
                        'flex flex-col rounded-md border px-2 py-1',
                        state === 'done' && 'border-emerald-500/50 bg-emerald-500/10',
                        state === 'now' && 'border-amber-500/60 bg-amber-500/10',
                        state === 'todo' && 'border-fd-border text-fd-muted-foreground',
                      )}
                    >
                      <span className="text-[13px] font-semibold">{stain}</span>
                      <span className="min-h-[1.2em] font-mono text-[11px]">{note}</span>
                    </div>
                  ))}
                </div>
              </RemixTile>
              <RemixTile name="Deck" app="ot2" tone="emerald" at={tileAt('emerald')}>
                <div className="flex items-center gap-3">
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 6 }, (_, i) => (
                      <span key={i} className={cn('h-[16px] w-[24px] rounded-sm border', i === 1 ? 'border-emerald-500 bg-emerald-500/40' : 'border-fd-border bg-fd-muted/60')} />
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="font-mono text-[12.5px]">stain_CD20 · step 4 / 9</span>
                    <span className="h-[6px] w-full overflow-hidden rounded-full bg-fd-border">
                      <span className="block h-full w-[44%] rounded-full bg-emerald-500" />
                    </span>
                  </div>
                </div>
              </RemixTile>
              <RemixTile name="Arm" app="robot" tone="amber" at={tileAt('amber')}>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[12.5px]">at scope · holding HE-07</span>
                  <span className="ml-auto rounded-md border border-fd-border px-3 py-1 text-[12.5px] font-semibold">Home</span>
                </div>
              </RemixTile>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Steps>
  );
}

/* --- connect from anywhere, encrypted --------------------------------------------- */

type NetApp = { name: string; sub: string; icon: LucideIcon };

/** What runs inside the lab, next to the hub. */
const LAB_APPS: (NetApp & { link: string })[] = [
  { name: 'openUC2 PC', sub: 'acquire · stage', icon: Microscope, link: 'WireGuard' },
  { name: 'ESP32', sub: 'LED controller · 520 kB', icon: Microchip, link: 'TLS' },
];
/** The networks outside it, each with one app that wants in. */
const OUTSIDE: { title: string; note: string; app: NetApp }[] = [
  { title: 'A cluster', note: 'university HPC', app: { name: 'GPU node', sub: 'SLURM job · StarDist', icon: Server } },
  { title: 'Partner institute', note: 'another campus', app: { name: 'napari', sub: 'a collaborator’s PC', icon: Building2 } },
  { title: 'Mobile', note: 'phone hotspot', app: { name: 'Kim’s laptop', sub: 'on the train', icon: Laptop } },
];

function TunnelBadge({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <span className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-fd-primary/50 bg-fd-card px-2 py-0.5 font-mono text-[11.5px] font-semibold text-fd-primary shadow-sm" style={{ left: x, top: y }}>
      <Lock className="size-[12px]" strokeWidth={2.6} /> {label}
    </span>
  );
}

function NetCard({ app, x, y, w }: { app: NetApp; x: number; y: number; w: number }) {
  return (
    <div className="absolute flex h-[58px] items-center gap-3 rounded-xl border-2 border-fd-border bg-fd-card px-3 shadow-sm" style={{ left: x, top: y, width: w }}>
      <span className="flex size-[38px] shrink-0 items-center justify-center rounded-lg bg-fd-primary/12 text-fd-primary">
        <app.icon className="size-[21px]" strokeWidth={1.8} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[17px] font-semibold leading-tight">{app.name}</span>
        <span className="truncate font-mono text-[12px] text-fd-muted-foreground">{app.sub}</span>
      </span>
    </div>
  );
}

/** "Connect from anywhere": the hub sits inside the lab, behind the lab's one
    firewall, with the microscope PC and the ESP32 next to it. Three other
    networks (a cluster, a partner institute, mobile) are drawn as boundaries
    of their own, and each of their apps reaches the hub through that
    firewall, in an encrypted tunnel, without a port being opened. Anything
    else still bounces off the wall. Nothing moves. */
export function AnywhereFigure() {
  const u = useUid();
  const W = 1180;
  const lab = { x: 0, y: 6, w: 600, h: 412 };
  const wall = { x: lab.x + lab.w, w: 18 };
  const hub = { x: 352, y: 62, w: 216, h: 176 };
  const card = { x: 18, w: 250, ys: [80, 164] };
  const out = { x: 850, w: 330, h: 114, ys: [6, 152, 298] };
  const hubIn = [hub.y + 62, hub.y + 118];
  const hubOut = [hub.y + 48, hub.y + 88, hub.y + 128];
  const local = LAB_APPS.map((a, i) => ({ d: sCurve(card.x + card.w, card.ys[i] + 29, hub.x, hubIn[i]), mid: [(card.x + card.w + hub.x) / 2, (card.ys[i] + 29 + hubIn[i]) / 2] as [number, number], label: a.link }));
  const tunnels = OUTSIDE.map((_, i) => {
    const from: [number, number] = [out.x + 12, out.ys[i] + 40 + 29];
    const to: [number, number] = [hub.x + hub.w, hubOut[i]];
    return { d: sCurve(from[0], from[1], to[0], to[1]), mid: [748, from[1] + (to[1] - from[1]) * 0.22] as [number, number] };
  });
  const blockedY = 398;
  const face = wall.x + wall.w;
  return (
    <div
      className="relative mx-auto h-[430px] w-[1180px]"
      role="img"
      aria-label="The Arkitekt hub sits inside the lab, behind the lab's firewall, next to the openUC2 PC and an ESP32. Three other networks are drawn outside it: a cluster with a GPU node, a partner institute with napari, and mobile, Kim's laptop on a phone hotspot. Each of them reaches the hub through the lab's firewall over a WireGuard tunnel, without an open port or a public IP; any other inbound connection is still blocked at the wall."
    >
      <svg width={W} height={430} viewBox={`0 0 ${W} 430`} className="absolute inset-0" aria-hidden>
        <defs>
          <pattern id={`${u}-brick`} width={18} height={12} patternUnits="userSpaceOnUse">
            <rect width={18} height={12} fill="#c2410c" />
            <path d="M0 0 H18 M0 6 H18 M9 0 V6 M0 6 V12 M18 6 V12" stroke="#fed7aa" strokeWidth={1.4} />
          </pattern>
          <marker id={`${u}-in`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#dc2626" />
          </marker>
        </defs>
        {/* the networks: the lab, and the three outside it */}
        <rect x={lab.x + 1} y={lab.y} width={lab.w - 2} height={lab.h} rx={20} fill={PRIMARY} fillOpacity={0.05} stroke={BORDER} strokeWidth={2} strokeDasharray="8 6" />
        {out.ys.map((y) => (
          <rect key={y} x={out.x + 1} y={y + 1} width={out.w - 2} height={out.h - 2} rx={18} fill={PRIMARY} fillOpacity={0.03} stroke={BORDER} strokeWidth={2} strokeDasharray="8 6" />
        ))}
        {/* inside the lab */}
        {local.map((l, i) => (
          <path key={i} d={l.d} fill="none" stroke={PRIMARY} strokeOpacity={0.55} strokeWidth={2.6} />
        ))}
        {/* the tunnels from outside */}
        {tunnels.map((t, i) => (
          <path key={i} d={t.d} fill="none" stroke={PRIMARY} strokeWidth={3.4} />
        ))}
        {/* the lab's firewall: the tunnels go through it, nothing else does */}
        <rect x={wall.x} y={lab.y - 6} width={wall.w} height={lab.h + 12} rx={4} fill={`url(#${u}-brick)`} stroke="#7c2d12" strokeWidth={1.6} />
        {tunnels.map((t, i) => (
          <path key={i} d={t.d} fill="none" stroke={PRIMARY} strokeWidth={3.4} clipPath={`inset(0 ${W - wall.x - wall.w}px 0 ${wall.x}px)`} style={{ clipPath: `inset(0 ${W - wall.x - wall.w}px 0 ${wall.x}px)` }} />
        ))}
        <path d={`M${face + 74} ${blockedY} L${face + 22} ${blockedY}`} stroke="#dc2626" strokeWidth={2.6} strokeDasharray="5 4" markerEnd={`url(#${u}-in)`} />
        <circle cx={face + 10} cy={blockedY} r={8.5} fill={SURFACE} stroke="#dc2626" strokeWidth={2.2} />
        <path d={`M${face + 6.6} ${blockedY - 3.4} l6.8 6.8 M${face + 13.4} ${blockedY - 3.4} l-6.8 6.8`} stroke="#dc2626" strokeWidth={2.2} strokeLinecap="round" />
      </svg>

      {/* inside the lab */}
      <span className="absolute text-[19px] font-bold leading-none" style={{ left: 20, top: lab.y + 16 }}>
        Inside the lab
      </span>
      <span className="absolute flex items-center gap-1 font-mono text-[12px] font-semibold text-[#c2410c]" style={{ right: W - wall.x + 12, top: lab.y + 18 }}>
        <BrickWall className="size-[14px]" strokeWidth={2.2} /> the lab’s firewall · NAT
      </span>
      {LAB_APPS.map((a, i) => (
        <NetCard key={a.name} app={a} x={card.x} y={card.ys[i]} w={card.w} />
      ))}
      <div className="absolute" style={{ left: hub.x, top: hub.y, width: hub.w, height: hub.h }}>
        <div className="flex size-full flex-col items-center justify-center gap-2 rounded-[26px] bg-fd-primary text-fd-primary-foreground shadow-xl">
          <span className="flex size-[54px] items-center justify-center rounded-2xl bg-white/95 shadow-sm">
            <Logo className="size-[44px]" />
          </span>
          <span className="text-[26px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
          <span className="font-mono text-[12px] opacity-85">the hub · no open port</span>
        </div>
      </div>
      <p className="absolute text-[20px] font-semibold leading-snug" style={{ left: 22, top: 286, width: lab.w - 50 }}>
        Everyone outside dials out, and meets the hub <span className="text-fd-primary">straight through the firewall.</span>
        <span className="mt-1 block text-[16px] font-normal text-fd-muted-foreground">No open ports, no public IP, no VPN, no ticket with IT.</span>
      </p>

      {/* outside */}
      {OUTSIDE.map((z, i) => (
        <div key={z.title}>
          <div className="absolute flex items-baseline justify-between" style={{ left: out.x + 14, top: out.ys[i] + 12, width: out.w - 28 }}>
            <span className="text-[17px] font-bold leading-none">{z.title}</span>
            <span className="font-mono text-[11.5px] text-fd-muted-foreground">{z.note}</span>
          </div>
          <NetCard app={z.app} x={out.x + 12} y={out.ys[i] + 40} w={out.w - 24} />
        </div>
      ))}

      {local.map((l, i) => (
        <TunnelBadge key={i} x={l.mid[0]} y={l.mid[1]} label={l.label} />
      ))}
      {tunnels.map((t, i) => (
        <TunnelBadge key={i} x={t.mid[0]} y={t.mid[1]} label="WireGuard" />
      ))}
      <span className="absolute text-[14px] leading-tight text-[#dc2626]" style={{ left: face + 82, top: blockedY - 17 }}>
        <span className="font-semibold">anything else</span>
        <br />
        stays blocked
      </span>
    </div>
  );
}

/* --- not only image data ---------------------------------------------------------- */

/** A tiny sketch of what each kind of data looks like. */
export function KindSketch({ kind }: { kind: 'image' | 'timeseries' | 'flim' | 'spectral' | 'multichannel' | 'volume' | 'table' | 'mesh' }) {
  const s = { width: 96, height: 60, viewBox: '0 0 96 60', className: 'block shrink-0', 'aria-hidden': true } as const;
  switch (kind) {
    case 'image':
      return (
        <svg {...s}>
          <rect x={18} y={0} width={60} height={60} rx={6} fill="#f6eef3" stroke={BORDER} />
          {[[30, 14, 5, 0], [50, 10, 4, 1], [64, 24, 5, 0], [36, 36, 5, 1], [56, 44, 4, 0], [28, 50, 3, 1]].map(([cx, cy, r, t], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill={t ? '#8a5a2b' : '#6b5aa6'} fillOpacity={0.85} />
          ))}
        </svg>
      );
    case 'timeseries':
      return (
        <svg {...s}>
          {[12, 30, 48].map((y, k) => (
            <path key={y} d={`M2 ${y} ${Array.from({ length: 23 }, (_, i) => `L${6 + i * 4} ${y - ([5, 13, 19][k] === i || [6, 14, 20][k] === i ? 10 : [7, 15, 21][k] === i ? 5 : Math.sin(i + k) * 1.2)}`).join(' ')}`} fill="none" stroke={PRIMARY} strokeWidth={1.6} strokeLinejoin="round" />
          ))}
        </svg>
      );
    case 'flim':
      return (
        <svg {...s}>
          <path d="M8 56 A40 40 0 0 1 88 56" fill="none" stroke={MUTED} strokeWidth={1.4} />
          <line x1={4} y1={56} x2={92} y2={56} stroke={BORDER} strokeWidth={1.4} />
          <ellipse cx={58} cy={32} rx={13} ry={9} fill="#38bdf8" fillOpacity={0.55} />
          <ellipse cx={58} cy={32} rx={6} ry={4} fill="#0ea5e9" />
        </svg>
      );
    case 'spectral':
      return (
        <svg {...s}>
          <defs>
            <linearGradient id="kind-rainbow" x1="0" x2="1">
              {['#7c3aed', '#2563eb', '#10b981', '#eab308', '#f97316', '#dc2626'].map((c, i) => (
                <stop key={c} offset={i / 5} stopColor={c} />
              ))}
            </linearGradient>
          </defs>
          <path d="M4 54 C 22 54, 28 12, 42 12 C 54 12, 58 40, 68 40 C 76 40, 80 28, 92 54 Z" fill="url(#kind-rainbow)" fillOpacity={0.75} />
        </svg>
      );
    case 'multichannel':
      return (
        <svg {...s}>
          {['#2563eb', '#10b981', '#dc2626'].map((c, i) => (
            <rect key={c} x={18 + i * 10} y={4 + i * 6} width={44} height={44} rx={6} fill={c} fillOpacity={0.25} stroke={c} strokeWidth={1.4} />
          ))}
        </svg>
      );
    case 'volume':
      return (
        <svg {...s}>
          <path d="M30 18 L54 6 L78 18 L78 46 L54 58 L30 46 Z" fill={PRIMARY} fillOpacity={0.12} stroke={PRIMARY} strokeWidth={1.4} />
          <path d="M30 18 L54 30 L78 18 M54 30 L54 58" fill="none" stroke={PRIMARY} strokeWidth={1.4} />
        </svg>
      );
    case 'table':
      return (
        <svg {...s}>
          <rect x={10} y={4} width={76} height={52} rx={5} fill={SURFACE} stroke={BORDER} />
          <rect x={10} y={4} width={76} height={11} rx={5} fill={MUTED} fillOpacity={0.2} />
          {[15, 25, 35, 45].map((y) => (
            <line key={y} x1={10} y1={y} x2={86} y2={y} stroke={BORDER} />
          ))}
          {[35, 60].map((x) => (
            <line key={x} x1={x} y1={4} x2={x} y2={56} stroke={BORDER} />
          ))}
        </svg>
      );
    case 'mesh':
      return (
        <svg {...s}>
          <ellipse cx={48} cy={30} rx={30} ry={24} fill={PRIMARY} fillOpacity={0.1} stroke={PRIMARY} strokeWidth={1.4} />
          <path d="M18 30 Q48 44 78 30 M18 30 Q48 16 78 30 M48 6 Q34 30 48 54 M48 6 Q62 30 48 54" fill="none" stroke={PRIMARY} strokeWidth={1} strokeOpacity={0.7} />
        </svg>
      );
  }
}

const DATA_KINDS: { kind: Parameters<typeof KindSketch>[0]['kind']; name: string; what: string }[] = [
  { kind: 'image', name: 'Images', what: 'tiles, mosaics, slides' },
  { kind: 'multichannel', name: 'Multichannel', what: 'one channel per stain' },
  { kind: 'volume', name: 'Volumes', what: 'z-stacks, light sheet' },
  { kind: 'timeseries', name: 'Time series', what: 'calcium imaging · ΔF/F' },
  { kind: 'flim', name: 'FLIM', what: 'lifetimes · phasor' },
  { kind: 'spectral', name: 'Spectral', what: 'a spectrum per pixel' },
  { kind: 'table', name: 'Tables', what: 'measurements per cell' },
  { kind: 'mesh', name: 'Meshes', what: 'segmented 3D surfaces' },
];

/** The kinds of data mikro keeps, each as its own typed dataset. */
export function DataKindsFigure() {
  return (
    <div className="mx-auto grid w-[1180px] grid-cols-4 gap-4" role="img" aria-label="Mikro keeps more than images: multichannel images, volumes, time series such as calcium imaging, FLIM lifetimes with their phasor, spectral data, tables of measurements per cell, and meshes.">
      {DATA_KINDS.map((k, i) => (
        <div key={k.name} className="sm-pop flex flex-col items-center gap-3 rounded-2xl border-2 border-fd-border bg-fd-card px-4 py-5 shadow-sm" style={delay(0.2 + i * 0.1)}>
          <KindSketch kind={k.kind} />
          <span className="flex flex-col items-center gap-0.5">
            <span className="text-[21px] font-semibold leading-tight">{k.name}</span>
            <span className="font-mono text-[13px] text-fd-muted-foreground">{k.what}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* --- reproducibility is remixing --------------------------------------------------- */

type RemixPart = { app: string; name: string; kind: 'action' | 'blok' | 'workflow'; icon: LucideIcon };
const REMIX_ROWS: { kim: RemixPart; theirs: RemixPart & { from: 'kim' | 'own' }; how: 'swap' | 'install' | 'remix' | 'build' }[] = [
  { kim: { app: 'openuc2', name: 'acquire_image', kind: 'action', icon: Microscope }, theirs: { app: 'nikon', name: 'acquire_image', kind: 'action', icon: Microscope, from: 'own' }, how: 'swap' },
  { kim: { app: 'stardist', name: 'segment_image', kind: 'action', icon: Cpu }, theirs: { app: 'stardist', name: 'segment_image', kind: 'action', icon: Cpu, from: 'kim' }, how: 'install' },
  { kim: { app: 'analyzer', name: 'calculate_stain_percentage', kind: 'action', icon: ScanSearch }, theirs: { app: 'analyzer', name: 'calculate_stain_percentage', kind: 'action', icon: ScanSearch, from: 'kim' }, how: 'install' },
  { kim: { app: 'stainstorm', name: 'run_progress', kind: 'blok', icon: LayoutDashboard }, theirs: { app: 'stainstorm', name: 'run_progress', kind: 'blok', icon: LayoutDashboard, from: 'kim' }, how: 'install' },
  { kim: { app: 'stainstorm', name: 'process_slides', kind: 'workflow', icon: Workflow }, theirs: { app: 'spheroids', name: 'screen_spheroids', kind: 'workflow', icon: Workflow, from: 'own' }, how: 'remix' },
  { kim: { app: 'openuc2', name: 'capture_panel', kind: 'blok', icon: LayoutDashboard }, theirs: { app: 'spheroids', name: 'review_panel', kind: 'blok', icon: LayoutDashboard, from: 'own' }, how: 'build' },
];
const REMIX_HOW = {
  swap: 'swap in their scope · same ScopeLike protocol',
  install: 'install',
  remix: 'remix · her steps, their scope, one new step',
  build: 'build their own · a few lines, made for their AI',
} as const;

function RemixChip({ part, tag, tone, at }: { part: RemixPart; tag?: string; tone: 'kim' | 'own'; at: number }) {
  const Icon = part.icon;
  return (
    <div
      className={cn('sm-pop flex h-[52px] items-center gap-3 rounded-xl border-2 bg-fd-card px-3 shadow-sm', tone === 'kim' ? 'border-fd-primary/50' : 'border-fd-border')}
      style={delay(at)}
    >
      <span className={cn('flex size-[34px] shrink-0 items-center justify-center rounded-lg', tone === 'kim' ? 'bg-fd-primary/12 text-fd-primary' : 'bg-fd-muted text-fd-muted-foreground')}>
        <Icon className="size-[20px]" strokeWidth={1.9} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="truncate font-mono text-[14.5px] font-semibold">{part.name}</span>
        <span className="font-mono text-[11.5px] text-fd-muted-foreground">
          {part.app} · {part.kind}
        </span>
      </span>
      {tag ? (
        <span className={cn('ml-auto shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold', tone === 'kim' ? 'bg-fd-primary/12 text-fd-primary' : 'bg-fd-muted text-fd-muted-foreground')}>{tag}</span>
      ) : null}
    </div>
  );
}

/** Reproducing as rebuilding: a partner lab doesn't rerun Kim's frozen
    script, it builds its own experiment from the parts she published. It
    swaps in its own microscope where the protocol fits, installs her
    segmentation, analysis and progress blok, and remixes her workflow. Kim's
    column stands on arrival; one click on the figure per beat: swap, install,
    remix, build, and the closing line. */
export function RemixReproFigure() {
  const colW = 380;
  const rightX = 1180 - colW;
  const rowY = (i: number) => 32 + i * 61;
  const midY = (i: number) => rowY(i) + 26;
  /* one click per beat: swap the scope; install three parts; remix the
     workflow; build their own blok; the closing line */
  const at = (i: number) => [1.2, 2.6, 2.8, 3, 4.6, 6][i] ?? 7.4;
  const cues = [1, 2.4, 4.4, 5.8, 7.2, 8.6];
  return (
    <Steps cues={cues} className="relative mx-auto h-[440px] w-[1180px]">
    <div
      className="absolute inset-0"
      role="img"
      aria-label="Kim's lab published its parts: openuc2 acquire_image, stardist segment_image, the analyzer's calculate_stain_percentage, the stainstorm run_progress blok and the process_slides workflow. A partner lab builds its own experiment from them: it swaps in its own Nikon acquire_image, which fits the same ScopeLike protocol, installs Kim's segmentation, analysis and blok, and remixes her workflow into its own screen_spheroids workflow. Next to Kim's capture_panel blok, it builds its own review_panel blok in a few lines, made for its own AI to hand out."
    >
      <svg width={1180} height={440} viewBox="0 0 1180 440" className="absolute inset-0" aria-hidden>
        {REMIX_ROWS.map((r, i) => (
          <Path
            key={i}
            className="sm-draw"
            style={delay(at(i))}
            d={`M${colW + 8} ${midY(i)} L${rightX - 8} ${midY(i)}`}
            stroke={r.how === 'install' ? PRIMARY : MUTED}
            width={2.4}
            dash={r.how === 'install' ? undefined : '7 6'}
            opacity={r.how === 'install' ? 0.7 : 0.9}
          />
        ))}
      </svg>

      <span className="sm-fade absolute left-0 top-0 text-[16px] font-semibold" style={delay(0.1)}>
        Kim’s lab <span className="font-normal text-fd-muted-foreground">· what she published</span>
      </span>
      <span className="sm-fade absolute top-0 text-[16px] font-semibold" style={{ left: rightX, ...delay(0.3) }}>
        A partner lab <span className="font-normal text-fd-muted-foreground">· their own experiment</span>
      </span>

      {REMIX_ROWS.map((r, i) => (
        <ReactFragment key={i}>
          <div className="absolute" style={{ left: 0, top: rowY(i), width: colW }}>
            <RemixChip part={r.kim} tone="kim" at={0.1 + i * 0.05} />
          </div>
          <span
            className={cn('sm-in absolute -translate-x-1/2 whitespace-nowrap rounded-full border bg-fd-card px-2.5 py-0.5 text-[12.5px] font-semibold', r.how === 'install' ? 'border-fd-primary/50 text-fd-primary' : 'border-fd-border text-fd-muted-foreground')}
            style={{ left: 590, top: midY(i) - 13, ...delay(at(i) + 0.3) }}
          >
            {REMIX_HOW[r.how]} →
          </span>
          <div className="absolute" style={{ left: rightX, top: rowY(i), width: colW }}>
            <RemixChip part={r.theirs} tone={r.theirs.from} tag={r.theirs.from === 'kim' ? 'from Kim' : 'their own'} at={at(i) + 0.45} />
          </div>
        </ReactFragment>
      ))}

      <p className="sm-in absolute inset-x-0 top-[408px] text-center text-[18px] text-fd-muted-foreground" style={delay(at(REMIX_ROWS.length))}>
        Not one frozen script to rerun, but <span className="font-semibold text-fd-foreground">typed parts to build on</span>, each with its version.
      </p>
    </div>
    </Steps>
  );
}
