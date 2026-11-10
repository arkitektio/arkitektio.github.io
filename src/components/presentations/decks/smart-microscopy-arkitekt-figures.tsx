'use client';

/* Animated figures for the Arkitekt half of the smart microscopy deck: the
   hub, the app, and one figure per line of the debt list it pays down (mesh,
   replay, coordinate systems, spaces, bloks), then Optikit.

   Built on `smart-microscopy-anim.tsx`. Loops that tell a short story (share,
   bloks) carry their own keyframes, scoped under a figure uid and only
   running on the current slide. Example values (timestamps, coordinates,
   thresholds) are illustrative, not from a real run. */

import type { CSSProperties, ReactNode } from 'react';
import { Fragment } from '@revealjs/react';
import { Bot, Check, Layers, Microscope, Network, NotebookPen, Radio, ScanSearch, Server, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Logo } from '@/components/site/logo';
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
  T,
  Token,
  WARN,
  delay,
  useUid,
} from './smart-microscopy-anim';

/** `section.present`-scoped looping animation for one element class. */
function loop(u: string, name: string, seconds: number, keyframes: string, start = 0.6) {
  return `section.present .${u}-${name} { animation: ${u}-${name} ${seconds}s linear ${start}s infinite both; }
  @keyframes ${u}-${name} { ${keyframes} }`;
}

/* --- the hub ---------------------------------------------------------------- */

type HubNode = { name: string; what: string; icon: LucideIcon; teaser?: boolean };

const HUB_DEVICES: HubNode[] = [
  { name: 'Microscopes', what: 'acquire · move stage', icon: Microscope },
  { name: 'Robots', what: 'pipette · pump', icon: Bot, teaser: true },
  { name: 'Clusters', what: 'segment · train', icon: Server, teaser: true },
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

/** Hub in the middle, apps around it, calls flowing through. `beyond` turns
    the robot and cluster teasers into first-class devices for the outlook. */
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
    <div className="relative mx-auto h-[420px] w-[1000px]" role="img" aria-label="Arkitekt in the middle; microscopes, robots and clusters on one side, Fiji, napari and notebooks on the other, Orkestrator and the mesh below">
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

/* --- the app ---------------------------------------------------------------- */

/* The implicit contract, without code: an app offers its actions (name,
   inputs, outputs) to the hub, then opens one websocket and listens. From
   then on the hub assigns and the app answers. */
const OFFERS = [
  { name: 'snap', ins: 'exposure · float', out: 'image', assign: 'exposure 20 ms', done: 'image' },
  { name: 'find_largest', ins: 'image', out: 'x, y', assign: 'that image', done: 'x 120 · y 48' },
  { name: 'move_to', ins: 'x, y · µm', out: '–', assign: 'x 120 · y 48', done: 'arrived' },
];

function TypeLine({ ins, out }: { ins: string; out: string }) {
  return (
    <span className="flex items-center gap-1.5 whitespace-nowrap font-mono text-[12px] text-fd-muted-foreground">
      <span className="rounded bg-fd-muted px-1.5 py-px">{ins}</span>→<span className="rounded bg-fd-primary/12 px-1.5 py-px text-fd-primary">{out}</span>
    </span>
  );
}

/** A tiny fluorescence snapshot: a few soft cells on black. */
function MiniShot({ size = 44 }: { size?: number }) {
  return (
    <span
      className="block shrink-0 rounded-md shadow-inner"
      style={{
        width: size,
        height: size,
        background:
          'radial-gradient(circle at 30% 34%, #c6f6ff 0, #5fd3f0 9%, transparent 20%), radial-gradient(circle at 68% 58%, #b4f0ff 0, #3fb8e0 11%, transparent 24%), radial-gradient(circle at 42% 78%, #8fe3f7 0, transparent 13%), radial-gradient(circle at 80% 22%, #6fcbe8 0, transparent 10%), #07111d',
      }}
    />
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

/** An app offers its actions to the hub; then, one click at a time, the hub
    moves aside for Orkestrator, Kim assigns `snap` there, the task goes down
    the app's socket, and the image flows back to the hub and on to her.
    Steps are reveal fragments: empty markers whose `.visible` class drives
    the sibling selectors below. */
export function OfferFigure() {
  const u = useUid();
  const W = 1180;
  const pw = 300; // panel width
  const hubFrom = W - pw; // 880: the hub on the right, facing the app
  const hubTo = 440; // after step 1: in the middle
  const fx = W - pw; // Orkestrator takes the right slot
  const offerAt = (i: number) => 0.9 + i * 0.6;
  const arriveAt = (i: number) => offerAt(i) + 0.85;
  const socketAt = 3;
  const pill = 220;
  const laneX = pw + 18;
  const lane = hubFrom - 18 - pill - laneX;
  // narrow layout: app | hub | Orkestrator, with 140 px gaps
  const gapA = [pw, hubTo] as const; // app ↔ hub, over the socket
  const gapB = [hubTo + pw, fx] as const; // hub ↔ Orkestrator
  const ySocket = 362;
  const yFront = 330;
  const form = 232; // top of the form inside the Orkestrator panel

  const on = (n: number, sel: string) => `.${u}-s${n}.visible ~ ${sel}, .${u}-s${n}.visible ~ * ${sel}`;
  const run = (n: number, cls: string, anim: string) => `${on(n, `.${u}-${cls}`)} { animation: ${anim}; }`;
  const k = (name: string, dur: number, d: number, ease = 'ease-out', fill = 'both') => `${u}-${name} ${dur}s ${ease} ${d}s ${fill}`;
  const css = `
.${u}-offer { opacity: 0; }
section.present .${u}-offer { animation: ${u}-offer 1s ease-in-out var(--d) both; }
@keyframes ${u}-offer {
  0% { opacity: 0; transform: translateX(0); }
  12% { opacity: 1; }
  85% { opacity: 1; transform: translateX(${lane}px); }
  100% { opacity: 0; transform: translateX(${lane}px); }
}
.${u}-ring { transform-box: fill-box; transform-origin: center; }
section.present .${u}-ring { animation: ${u}-ring 1.8s ease-out ${socketAt + 0.4}s infinite both; }
@keyframes ${u}-ring { 0% { opacity: 0.7; transform: scale(1); } 100% { opacity: 0; transform: scale(2.6); } }

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
@keyframes ${u}-type { from { width: 0; } to { width: 6ch; } }
@keyframes ${u}-press { 0%, 100% { transform: scale(1); } 45% { transform: scale(0.93); } }
@keyframes ${u}-cur1 {
  0% { opacity: 0; transform: translate(250px, 372px); }
  8% { opacity: 1; transform: translate(250px, 372px); }
  30% { transform: translate(200px, 113px) scale(1); }
  33% { transform: translate(200px, 113px) scale(0.8); }
  36% { transform: translate(200px, 113px) scale(1); }
  56% { transform: translate(150px, 279px) scale(1); }
  59% { transform: translate(150px, 279px) scale(0.8); }
  62% { transform: translate(150px, 279px) scale(1); }
  88%, 100% { opacity: 1; transform: translate(180px, 324px); }
}
@keyframes ${u}-cur2 {
  0%, 100% { opacity: 1; transform: translate(180px, 324px) scale(1); }
  45% { opacity: 1; transform: translate(180px, 324px) scale(0.78); }
}

/* step 1: the hub moves aside, Orkestrator appears, Kim fills in snap */
.${u}-hub { transition: transform 1s cubic-bezier(.6,0,.2,1) 0.1s; }
${on(1, `.${u}-hub`)} { transform: translateX(${hubTo - hubFrom}px); }
.${u}-wide { transition: opacity 0.35s; }
${on(1, `.${u}-wide`)} { opacity: 0; }
${on(1, `.${u}-offer`)} { visibility: hidden; }
:is(.${u}-narrow, .${u}-front, .${u}-tok, .${u}-row, .${u}-sel, .${u}-form, .${u}-cur, .${u}-cap1, .${u}-cap2, .${u}-cap3,
  .${u}-asgA, .${u}-asgB, .${u}-task, .${u}-b-asg, .${u}-b-run, .${u}-b-done, .${u}-thumb, .${u}-s-run, .${u}-s-done,
  .${u}-imgA, .${u}-imgB, .${u}-btn2, .${u}-result) { opacity: 0; }
.${u}-typed { width: 0; }
${run(1, 'narrow', k('fadein', 0.5, 1))}
${run(1, 'front', k('pop', 0.5, 0.9))}
${run(1, 'tok', `${u}-travel 0.55s ease-in-out var(--d) both`)}
${run(1, 'row', `${u}-in 0.35s ease-out var(--d) both`)}
${run(1, 'sel', k('fadein', 0.2, 2.75))}
${run(1, 'form', k('in', 0.4, 3.05))}
${run(1, 'typed', `${u}-type 0.6s steps(6) 3.75s both`)}
${run(1, 'cur', k('cur1', 3.2, 1.9, 'ease-in-out'))}
${run(1, 'cap1', k('in', 0.4, 0.4))}

/* step 2: assign → the hub → down the socket to the app */
${run(2, 'cap1', k('fadeout', 0.2, 0))}
${run(2, 'cap2', k('in', 0.4, 0.2))}
${run(2, 'cur', k('cur2', 0.4, 0.1, 'ease-in-out'))}
${run(2, 'form', 'none; opacity: 1')}
${run(2, 'sel', 'none; opacity: 1')}
${run(2, 'typed', 'none; width: 6ch')}
${run(2, 'btn', k('press', 0.4, 0.1))}
${run(2, 'btn1', k('fadeout', 0.15, 0.3))}
${run(2, 'btn2', k('fadein', 0.15, 0.3))}
${run(2, 'asgA', `${u}-travel 0.9s ease-in-out 0.5s both`)}
${run(2, 'chips', k('fadeout', 0.25, 1.2))}
${run(2, 'task', k('in', 0.35, 1.35))}
${run(2, 'b-asg', `${k('fadein', 0.25, 1.35)}, ${k('fadeout', 0.2, 2.45, 'ease-out', 'forwards')}`)}
${run(2, 'asgB', `${u}-travel 0.9s ease-in-out 1.6s both`)}
${run(2, 's-run', k('fadein', 0.25, 2.4))}
${run(2, 'b-run', k('fadein', 0.25, 2.5))}

/* step 3: the image flows to the hub, then on to Orkestrator */
${run(3, 'cap2', k('fadeout', 0.2, 0))}
${run(3, 'cap3', k('in', 0.4, 0.2))}
${run(3, 'cur', k('fadeout', 0.3, 0))}
${run(3, 'form', 'none; opacity: 1')}
${run(3, 'sel', 'none; opacity: 1')}
${run(3, 'typed', 'none; width: 6ch')}
${run(3, 'btn1', 'none; opacity: 0')}
${run(3, 'btn2', `${k('fadein', 0.01, 0)}, ${k('fadeout', 0.25, 2.6, 'ease-out', 'forwards')}`)}
${run(3, 'chips', 'none; opacity: 0')}
${run(3, 'task', 'none; opacity: 1')}
${run(3, 's-run', k('fadeout', 0.25, 0.45))}
${run(3, 's-done', k('fadein', 0.25, 0.45))}
${run(3, 'imgA', `${u}-travel 0.9s ease-in-out 0.6s both`)}
${run(3, 'b-run', k('fadeout', 0.2, 1.45))}
${run(3, 'b-done', k('fadein', 0.25, 1.5))}
${run(3, 'thumb', k('pop', 0.4, 1.45))}
${run(3, 'imgB', `${u}-travel 0.9s ease-in-out 1.9s both`)}
${run(3, 'result', k('in', 0.4, 2.75))}
@media (prefers-reduced-motion: reduce) {
  section.present :is(.${u}-offer, .${u}-ring) { animation: none; }
  .${u}-hub { transition: none; }
}
`;
  const card = 'rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm';
  const marker = (n: number) => <Fragment as="span" index={n} className={`${u}-s${n} absolute`} />;
  const travel = (dx: number) => ({ '--dx': dx }) as CSSProperties;
  const caption = (n: number, step: string, text: string) => (
    <div className={`${u}-cap${n} absolute inset-x-0 top-[408px] text-center text-[17px] font-semibold`}>
      <span className="text-fd-primary">{step}</span>
      <span className="ml-2 font-normal text-fd-muted-foreground">{text}</span>
    </div>
  );
  return (
    <div className="relative mx-auto h-[440px] w-[1180px]" role="img" aria-label="An app offers its three actions, with their inputs and outputs, to the Arkitekt hub and opens a socket. Then the hub moves aside for Orkestrator, where Kim fills in snap and assigns it; the task goes through the hub and down the socket to the app, and the image flows back to the hub and on to Orkestrator.">
      {marker(1)}
      {marker(2)}
      {marker(3)}
      <LoopStyles css={css} />

      {/* wide layout: the offer lane and the socket band */}
      <svg width={W} height={440} viewBox={`0 0 ${W} 440`} className="absolute inset-0" aria-hidden>
        <Arrowheads id={u} />
        <g className={`${u}-wide`}>
          <Path className="sm-draw" style={delay(0.6)} d={`M${pw + 10} 118 L${hubFrom - 12} 118`} stroke={BORDER} width={2.2} head={`${u}-fg`} />
          <g className="sm-fade" style={delay(socketAt)}>
            <rect x={pw + 6} y={196} width={hubFrom - pw - 12} height={112} rx={56} fill={PRIMARY} fillOpacity={0.05} stroke={PRIMARY} strokeOpacity={0.55} strokeWidth={2.2} strokeDasharray="10 7" />
          </g>
        </g>
        {/* narrow layout: socket app ↔ hub, hub ↔ Orkestrator */}
        <g className={`${u}-narrow`}>
          <line x1={gapA[0]} y1={ySocket} x2={gapA[1]} y2={ySocket} stroke={PRIMARY} strokeOpacity={0.7} strokeWidth={2.4} strokeDasharray="8 6" />
          <text x={(gapA[0] + gapA[1]) / 2} y={ySocket + 22} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize={12} fill={MUTED}>
            socket
          </text>
          <line x1={gapB[0]} y1={yFront} x2={gapB[1]} y2={yFront} stroke={BORDER} strokeWidth={2.4} />
          {[gapA[0], gapA[1]].map((x) => (
            <circle key={`a${x}`} cx={x} cy={ySocket} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
          ))}
          {[gapB[0], gapB[1]].map((x) => (
            <circle key={`b${x}`} cx={x} cy={yFront} r={5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
          ))}
        </g>
      </svg>

      {/* lane labels (wide layout) */}
      <div className={`${u}-wide absolute left-[338px] top-[70px]`}>
        <span className="sm-in block text-[16px] font-semibold" style={delay(0.6)}>
          <span className="text-fd-primary">① offer</span>
          <span className="ml-2 font-normal text-fd-muted-foreground">name, inputs, outputs</span>
        </span>
      </div>
      <div className={`${u}-wide absolute left-[338px] top-[160px]`}>
        <span className="sm-in block text-[16px] font-semibold" style={delay(socketAt)}>
          <span className="text-fd-primary">② listen</span>
          <span className="ml-2 font-normal text-fd-muted-foreground">one websocket, kept open</span>
        </span>
      </div>
      <div className={`${u}-wide absolute left-[338px] top-[318px]`}>
        <span className="sm-in block text-[16px] text-fd-muted-foreground" style={delay(socketAt + 0.8)}>
          then it waits for work
        </span>
      </div>

      {/* the app */}
      <div className="absolute left-0 top-[6px]" style={{ width: pw }}>
        <div className={cn('sm-pop flex h-[388px] flex-col gap-2.5 p-3.5', card)} style={delay(0.15)}>
          <div className="flex items-center gap-3">
            <span className="flex size-[44px] items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
              <Microscope className="size-[25px]" strokeWidth={1.8} />
            </span>
            <span className="flex flex-col">
              <span className="font-mono text-[19px] font-semibold leading-tight">uc2-scope</span>
              <span className="text-[13px] text-fd-muted-foreground">an app on the microscope PC</span>
            </span>
          </div>
          {OFFERS.map((o, i) => (
            <div key={o.name} className="relative flex items-center justify-between rounded-xl border border-fd-border bg-fd-background/60 px-3 py-2">
              <span className="flex flex-col gap-1">
                <span className="font-mono text-[16px] font-semibold">{o.name}</span>
                <TypeLine ins={o.ins} out={o.out} />
              </span>
              <Check className="sm-pop size-[18px] text-fd-primary" strokeWidth={2.6} style={delay(offerAt(i))} />
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
          <div className="sm-in mt-auto flex items-center gap-2.5 rounded-xl bg-fd-primary/10 px-3 py-2 text-fd-primary" style={delay(socketAt + 0.3)}>
            <span className="relative flex size-[12px] items-center justify-center">
              <svg width={12} height={12} className="absolute overflow-visible" aria-hidden>
                <circle className={`${u}-ring`} cx={6} cy={6} r={5} fill="none" stroke={PRIMARY} strokeWidth={1.5} />
              </svg>
              <span className="size-[10px] rounded-full bg-fd-primary" />
            </span>
            <span className="font-mono text-[14px] font-semibold">listening</span>
            <Radio className="ml-auto size-[18px]" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* the hub: starts on the right, slides to the middle on step 1 */}
      <div className={`${u}-hub absolute top-[6px]`} style={{ left: hubFrom, width: pw }}>
        <div className={cn('sm-pop flex h-[388px] flex-col gap-2.5 p-3.5', card)} style={delay(0.3)}>
          <div className="flex items-center gap-3">
            <span className="flex size-[44px] items-center justify-center rounded-xl bg-fd-primary">
              <span className="flex size-[36px] items-center justify-center rounded-lg bg-white/95">
                <Logo className="size-[32px]" />
              </span>
            </span>
            <span className="flex flex-col">
              <span className="text-[19px] font-semibold leading-tight">Arkitekt hub</span>
              <span className="text-[13px] text-fd-muted-foreground">registered from uc2-scope</span>
            </span>
          </div>
          {OFFERS.map((o, i) => (
            <div key={o.name} className="sm-in relative flex items-center justify-between rounded-xl border border-l-4 border-fd-border border-l-fd-primary/70 bg-fd-background/60 px-3 py-2" style={delay(arriveAt(i))}>
              <span className="flex flex-col gap-1">
                <span className="font-mono text-[16px] font-semibold">{o.name}</span>
                <TypeLine ins={o.ins} out={o.out} />
              </span>
            </div>
          ))}
          <div className="relative mt-auto h-[64px]">
            <div className={`${u}-chips absolute inset-0 flex items-center`}>
              <div className="sm-in flex flex-wrap items-center gap-1.5" style={delay(socketAt + 0.6)}>
                <span className="mr-1 text-[13px] text-fd-muted-foreground">callable from</span>
                {['Orkestrator', 'a script', 'a workflow'].map((c) => (
                  <span key={c} className="rounded-full border border-fd-border px-2 py-0.5 text-[12px] font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className={`${u}-task absolute inset-0 flex items-center gap-3 rounded-xl border-2 border-fd-primary/40 bg-fd-primary/5 px-3`}>
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="font-mono text-[14px] font-semibold">task · snap(20 ms)</span>
                <span className="relative h-[20px]">
                  <span className={`${u}-b-asg absolute left-0 top-0 rounded-full bg-fd-muted px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-fd-muted-foreground`}>assigned</span>
                  <span className={`${u}-b-run absolute left-0 top-0 rounded-full bg-fd-primary px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-fd-primary-foreground`}>running</span>
                  <span className={`${u}-b-done absolute left-0 top-0 whitespace-nowrap rounded-full bg-emerald-500 px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-white`}>done · image stored</span>
                </span>
              </span>
              <span className={`${u}-thumb`}>
                <MiniShot size={44} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Orkestrator: Kim's browser */}
      <div className={`${u}-front absolute top-[6px] h-[388px]`} style={{ left: fx, width: pw }}>
        <div className={cn('relative size-full', card)}>
          <div className="absolute left-3.5 top-3.5 flex items-center gap-3">
            <span className="flex size-[44px] items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
              <Workflow className="size-[25px]" strokeWidth={1.8} />
            </span>
            <span className="flex flex-col">
              <span className="text-[19px] font-semibold leading-tight">Orkestrator</span>
              <span className="text-[13px] text-fd-muted-foreground">in Kim’s browser</span>
            </span>
          </div>
          <span className="absolute left-4 top-[72px] font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">actions on the hub</span>
          {OFFERS.map((o, i) => (
            <div
              key={o.name}
              className={`${u}-row absolute inset-x-3.5 flex h-[36px] items-center justify-between rounded-lg border border-fd-border bg-fd-background/60 px-3`}
              style={{ top: 92 + i * 44, ...({ '--d': `${1.55 + i * 0.15}s` } as CSSProperties) }}
            >
              <span className="font-mono text-[15px] font-semibold">{o.name}</span>
              <span className="rounded bg-fd-primary/12 px-1.5 py-px font-mono text-[11.5px] text-fd-primary">→ {o.out}</span>
              {i === 0 ? <span className={`${u}-sel pointer-events-none absolute inset-[-2px] rounded-lg border-2 border-fd-primary bg-fd-primary/10`} /> : null}
            </div>
          ))}
          <div className={`${u}-form absolute inset-x-3.5 rounded-xl border border-fd-border bg-fd-background/60`} style={{ top: form, height: 140 }}>
            <span className="absolute left-3 top-2.5 font-mono text-[12px] text-fd-muted-foreground">
              snap · exposure <span className="rounded bg-fd-muted px-1">float</span>
            </span>
            <div className="absolute inset-x-3 top-[32px] flex h-[34px] items-center rounded-lg border-2 border-fd-border bg-fd-card px-2.5 font-mono text-[15px]">
              <span className={`${u}-typed inline-block overflow-hidden whitespace-nowrap`}>20 ms</span>
              <span className="ml-px h-[18px] w-[2px] bg-fd-primary/70" />
            </div>
            <div className={`${u}-btn absolute inset-x-3 top-[76px] h-[38px]`}>
              <span className={`${u}-btn1 absolute inset-0 flex items-center justify-center gap-2 rounded-lg bg-fd-primary text-[15px] font-semibold text-fd-primary-foreground shadow-sm`}>Assign ▶</span>
              <span className={`${u}-btn2 absolute inset-0 flex items-center justify-center gap-2 rounded-lg border-2 border-fd-primary/50 bg-fd-primary/10 text-[15px] font-semibold text-fd-primary`}>assigned · waiting…</span>
            </div>
            <div className={`${u}-result absolute inset-x-3 top-[72px] flex items-center gap-3`}>
              <MiniShot size={56} />
              <span className="flex flex-col">
                <span className="font-mono text-[14px] font-semibold">image_0042</span>
                <span className="flex items-center gap-1 text-[13px] font-semibold text-emerald-600">
                  <Check className="size-[15px]" strokeWidth={2.8} /> done, from the hub
                </span>
              </span>
            </div>
          </div>
          <span className={`${u}-cur pointer-events-none absolute left-0 top-0 z-10`}>
            <Pointer />
          </span>
        </div>
      </div>

      {/* the offers, travelling (wide layout, on arrival) */}
      {OFFERS.map((o, i) => (
        <div key={o.name} className={`${u}-offer absolute top-[98px]`} style={{ ...delay(offerAt(i)), left: laneX, width: pill }}>
          <div className="flex flex-col gap-1 rounded-xl border-2 border-fd-primary/60 bg-fd-card px-3 py-1.5 shadow-md">
            <span className="font-mono text-[15px] font-semibold">{o.name}</span>
            <TypeLine ins={o.ins} out={o.out} />
          </div>
        </div>
      ))}

      {/* step 1: the hub hands its actions to Orkestrator */}
      {[0, 1, 2].map((i) => (
        <span
          key={`tok${i}`}
          className={`${u}-tok absolute size-[12px] rounded-full bg-fd-primary`}
          style={{ left: gapB[0] - 6, top: yFront - 6, ...travel(gapB[1] - gapB[0]), ...({ '--d': `${1.1 + i * 0.15}s` } as CSSProperties) }}
        />
      ))}

      {/* step 2: the assignment, Orkestrator → hub → app */}
      <div className={`${u}-asgA absolute`} style={{ left: gapB[1] - 62, top: yFront - 17, ...travel(gapB[0] - gapB[1]) }}>
        <span className="flex h-[34px] w-[124px] items-center justify-center whitespace-nowrap rounded-full bg-fd-primary font-mono text-[13px] font-bold text-fd-primary-foreground shadow-md">← assign snap</span>
      </div>
      <div className={`${u}-asgB absolute`} style={{ left: gapA[1] - 62, top: ySocket - 17, ...travel(gapA[0] - gapA[1]) }}>
        <span className="flex h-[34px] w-[124px] items-center justify-center whitespace-nowrap rounded-full bg-fd-primary font-mono text-[13px] font-bold text-fd-primary-foreground shadow-md">← snap 20 ms</span>
      </div>

      {/* step 3: the image, app → hub → Orkestrator */}
      <div className={`${u}-imgA absolute`} style={{ left: gapA[0] - 30, top: ySocket - 58, ...travel(gapA[1] - gapA[0]) }}>
        <span className="flex flex-col items-center gap-0.5 rounded-lg border-2 border-emerald-500/70 bg-fd-card p-1 shadow-md">
          <MiniShot size={48} />
          <span className="font-mono text-[10px] font-bold text-emerald-600">image →</span>
        </span>
      </div>
      <div className={`${u}-imgB absolute`} style={{ left: gapB[0] - 30, top: yFront - 40, ...travel(gapB[1] - gapB[0]) }}>
        <span className="flex flex-col items-center gap-0.5 rounded-lg border-2 border-emerald-500/70 bg-fd-card p-1 shadow-md">
          <MiniShot size={48} />
          <span className="font-mono text-[10px] font-bold text-emerald-600">image →</span>
        </span>
      </div>

      {caption(1, '③ pick', 'Orkestrator builds the form from the action’s types')}
      {caption(2, '④ assign', 'through the hub, down the app’s socket: no open port, no IP')}
      {caption(3, '⑤ result', 'the image goes to the hub first, then on to Kim')}
    </div>
  );
}

/** The three actions from the code slide registering with the hub. */
export function ActionRegistry() {
  const actions = [
    { name: 'snap', sig: 'exposure_ms → image' },
    { name: 'find_largest', sig: 'image → (x, y)' },
    { name: 'move_to', sig: 'x_um, y_um → None' },
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
      <Box className="sm-pop" style={delay(0.4)} x={70} y={208} w={230} h={84} title="Microscope PC" sub="UC2 · camera" />
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
  { t: '14:15:06', call: 'snap()', out: '→ image #1', kind: 'acq', label: 'snap' },
  { t: '14:15:07', call: 'threshold(image #1)', out: '→ otsu 0.42', kind: 'ana', label: 'threshold' },
  { t: '14:15:07', call: 'find_largest(mask)', out: '→ object #3', kind: 'ana', label: 'find_largest' },
  { t: '14:15:08', call: 'move_to(812, 344)', out: '→ done', kind: 'acq', label: 'move_to' },
  { t: '14:15:10', call: 'snap()', out: '→ image #2', kind: 'acq', label: 'snap' },
] as const;

/** The run as a timeline and an append-only record, then a replay that re-runs
    the analysis with another threshold on the image that was recorded. */
export function ReplayFigure() {
  const u = useUid();
  const xs = [150, 330, 510, 690, 870];
  return (
    <svg width={1100} height={400} viewBox="0 0 1100 400" role="img" aria-label="A run's calls on a timeline and in an append-only record; a replay re-runs the threshold and object finding with a fixed threshold on the recorded image" className="mx-auto block">
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
          acquisition · recorded
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
          <T x={440} y={204 + i * 38} anchor="start" size={15} mono weight={700} fill={PRIMARY}>
            {e.out}
          </T>
        </g>
      ))}

      {/* the replay */}
      <Path className="sm-draw" style={delay(2.5)} d="M330 84 L330 122 L860 122 L860 136" stroke={PRIMARY} width={2.5} head={`${u}-primary`} />
      <g className="sm-in" style={delay(2.9)}>
        <rect x={660} y={140} width={400} height={250} rx={14} fill={PRIMARY} fillOpacity={0.07} stroke={PRIMARY} strokeOpacity={0.55} strokeWidth={1.6} />
        <T x={680} y={166} anchor="start" size={13} mono weight={700} fill={PRIMARY}>
          REPLAY · ANALYSIS ONLY
        </T>
      </g>
      <T className="sm-in" style={delay(3.2)} x={680} y={206} anchor="start" size={15} mono>
        threshold(image #1)
      </T>
      <T className="sm-in" style={delay(3.4)} x={680} y={234} anchor="start" size={15} mono>
        <tspan fill={MUTED} textDecoration="line-through">otsu 0.42</tspan>
        <tspan fill={MUTED}> → </tspan>
        <tspan fill={WARN} fontWeight={700}>fixed 0.30</tspan>
      </T>
      <T className="sm-in" style={delay(3.7)} x={680} y={278} anchor="start" size={15} mono>
        find_largest(mask)
      </T>
      <T className="sm-in" style={delay(3.9)} x={680} y={306} anchor="start" size={15} mono>
        <tspan fill={MUTED} textDecoration="line-through">object #3</tspan>
        <tspan fill={MUTED}> → </tspan>
        <tspan fill={WARN} fontWeight={700}>object #5</tspan>
      </T>
      <T className="sm-in" style={delay(4.2)} x={680} y={354} anchor="start" size={14} italic fill={MUTED}>
        on the recorded image #1, not re-imaged
      </T>
    </svg>
  );
}

/* --- a billion files, no pixel size: coordinate systems --------------------- */

/** "MDA asks which index? Smart microscopy asks where, and why?" — the cube
    fills in index order; on the right, tiles land on the overview where
    something was worth a look, each with its reason. */
export function CoordsFigure() {
  const cube: ReactNode[] = [];
  let k = 0;
  for (let z = 0; z < 4; z++) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        cube.push(
          <rect
            key={`${z}-${r}-${c}`}
            className="sm-pop"
            style={delay(0.2 + k * 0.05)}
            x={150 + z * 34 + c * 58}
            y={130 - z * 34 + r * 58}
            width={52}
            height={52}
            rx={4}
            fill={MUTED}
            fillOpacity={0.15 + z * 0.12}
            stroke={MUTED}
            strokeOpacity={0.4}
          />,
        );
        k++;
      }
    }
  }
  const tiles: [number, number, number, string?][] = [
    [630, 70, 46, 'largest object'],
    [790, 55, 30],
    [900, 135, 68, 'rare event'],
    [680, 215, 26],
    [800, 200, 74, 'refocus'],
    [990, 250, 22],
    [615, 250, 30],
  ];
  const blobs = Array.from({ length: 26 }, (_, i) => ({
    x: 612 + ((i * 131) % 440),
    y: 52 + ((i * 71 + 23) % 230),
    r: 4 + ((i * 5) % 9),
  }));
  return (
    <svg width={1100} height={400} viewBox="0 0 1100 400" role="img" aria-label="Left: a multi-dimensional acquisition filling a regular cube, index by index. Right: tiles landing on an overview where something was worth a look, each tagged with why." className="mx-auto block">
      <rect x={10} y={10} width={520} height={310} rx={16} fill={SURFACE} fillOpacity={0.6} stroke={BORDER} strokeWidth={1.6} />
      {cube}
      <rect className="sm-fade" style={delay(0.1)} x={570} y={10} width={520} height={310} rx={16} fill={PRIMARY} fillOpacity={0.05} stroke={PRIMARY} strokeOpacity={0.4} strokeWidth={1.6} />
      <rect className="sm-fade" style={delay(0.6)} x={600} y={40} width={460} height={250} rx={8} fill="none" stroke={PRIMARY} strokeOpacity={0.4} strokeWidth={2} strokeDasharray="8 6" />
      <g className="sm-fade" style={delay(0.8)}>
        {blobs.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={MUTED} fillOpacity={0.16} />
        ))}
      </g>
      {tiles.map(([x, y, s, why], i) => (
        <g key={i}>
          <circle className="sm-ping" style={delay(1.4 + i * 0.4)} cx={x + s / 2} cy={y + s / 2} r={s / 2} fill="none" stroke={PRIMARY} strokeWidth={2} />
          <rect className="sm-pop" style={delay(1.4 + i * 0.4)} x={x} y={y} width={s} height={s} rx={3} fill={PRIMARY} fillOpacity={0.3 + (i % 3) * 0.2} stroke={PRIMARY} strokeWidth={1.5} />
          {why ? (
            <T className="sm-in" style={delay(1.7 + i * 0.4)} x={x + s + 8} y={y + 10} anchor="start" size={14} weight={700} fill={PRIMARY}>
              {why}
            </T>
          ) : null}
        </g>
      ))}

      <T x={270} y={350} size={22} weight={600}>
        <tspan>MDA asks </tspan>
        <tspan fill={MUTED}>which index?</tspan>
      </T>
      <T x={270} y={382} size={15} fill={MUTED}>
        A cube: t, c, z, position. The structure is the array.
      </T>
      <T x={830} y={350} size={22} weight={600}>
        <tspan>Smart microscopy asks </tspan>
        <tspan fill={PRIMARY}>where, and why?</tspan>
      </T>
      <T x={830} y={382} size={15} fill={MUTED}>
        No cube. Every image placed in shared coordinate systems.
      </T>
    </svg>
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

type FlowNode = { name: string; tag: string; param: string; out: string; x: number; y: number; from: number };

/** Orkestrator's editor: the three offered actions are dragged out of the
    palette and wired by their types into find, centre, capture. One click on
    Run, and the hub executes it node by node; the image ends up on the hub. */
export function WorkflowFigure() {
  const u = useUid();
  const nw = 190;
  const nh = 100;
  const port = 64;
  const palette = ['snap', 'find_largest', 'move_to'];
  const palY = (i: number) => 92 + i * 50;
  const nodes: FlowNode[] = [
    { name: 'snap', tag: 'overview', param: 'exposure 20 ms', out: 'image', x: 222, y: 100, from: 0 },
    { name: 'find_largest', tag: 'decide', param: '← image', out: 'x, y', x: 462, y: 250, from: 1 },
    { name: 'move_to', tag: 'centre', param: '← x, y', out: 'done', x: 702, y: 100, from: 2 },
    { name: 'snap', tag: 'capture', param: 'exposure 100 ms', out: 'image', x: 942, y: 250, from: 0 },
  ];
  const edges = nodes.slice(1).map((b, i) => {
    const a = nodes[i];
    const [x1, y1, x2, y2] = [a.x + nw, a.y + port, b.x, b.y + port];
    return { d: `M${x1} ${y1} C ${x1 + 60} ${y1}, ${x2 - 60} ${y2}, ${x2} ${y2}`, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 - 6, type: a.out };
  });
  const last = nodes[3];
  const outX = last.x + nw / 2;
  const outD = `M${outX} ${last.y} L${outX} ${last.y - 38}`;
  const runAt = (i: number) => 0.5 + i * 1.1;
  const runLen = 0.7;
  const doneAt = runAt(3) + runLen + 0.45;
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
:is(.${u}-run, .${u}-ok, .${u}-tok, .${u}-img, .${u}-busy, .${u}-fin) { opacity: 0; }
.${u}-go.visible ~ * :is(.${u}-run, .${u}-busy) { animation: ${u}-fadein 0.2s ease-out var(--d) both, ${u}-fadeout 0.25s ease-out var(--e) forwards; }
.${u}-go.visible ~ * :is(.${u}-ok, .${u}-fin), .${u}-go.visible ~ :is(.${u}-fin) { animation: ${u}-pop 0.35s ease-out var(--d) both; }
.${u}-go.visible ~ * .${u}-img { animation: ${u}-pop 0.45s ease-out var(--d) both; }
.${u}-go.visible ~ * .${u}-ghost { animation: ${u}-fadeout 0.2s ease-out var(--d) both; }
.${u}-go.visible ~ * .${u}-idle { animation: ${u}-fadeout 0.1s ease-out 0.1s both; }
.${u}-go.visible ~ * .${u}-btn { animation: ${u}-press 0.35s ease-out 0.05s both; }
.${u}-go.visible ~ .${u}-tok { animation: ${u}-move 0.4s ease-in-out var(--d) both, ${u}-fadeout 0.15s ease-out var(--e) forwards; }
/* click 2: so 2023 */
.${u}-dim, .${u}-stamp { opacity: 0; }
.${u}-x { stroke-dasharray: 1; stroke-dashoffset: 1; }
.${u}-nope.visible ~ .${u}-dim { animation: ${u}-fadein 0.3s ease-out both; }
.${u}-nope.visible ~ * .${u}-x { animation: ${u}-scrawl 0.32s ease-in var(--d) both; }
.${u}-nope.visible ~ * .${u}-stamp { animation: ${u}-stamp 0.45s cubic-bezier(.2,1.4,.4,1) 0.95s both; }
@keyframes ${u}-scrawl { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes ${u}-stamp { from { opacity: 0; transform: rotate(-7deg) scale(1.9); } to { opacity: 1; transform: rotate(-7deg) scale(1); } }
@media (prefers-reduced-motion: reduce) { section.present .${u}-drag { animation: none; } }
`;
  const vars = (d: number, e?: number) => ({ '--d': t(d), ...(e === undefined ? {} : { '--e': t(e) }) }) as CSSProperties;
  return (
    <div className="relative mx-auto h-[430px] w-[1180px]" role="img" aria-label="Orkestrator's workflow editor: snap, find_largest, move_to and snap are dragged out of the palette of actions on the hub and wired by their types. On Run, the hub executes them in turn and the final image is stored on the hub.">
      <Fragment as="span" index={1} className={`${u}-go absolute`} />
      <Fragment as="span" index={2} className={`${u}-nope absolute`} />
      <LoopStyles css={css} />

      {/* the editor window */}
      <div className="sm-pop absolute inset-0 rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm" style={delay(0.05)}>
        <div className="flex h-[42px] items-center gap-2 border-b border-fd-border px-4">
          <span className="size-3 rounded-full bg-fd-muted-foreground/30" />
          <span className="size-3 rounded-full bg-fd-muted-foreground/30" />
          <span className="size-3 rounded-full bg-fd-muted-foreground/30" />
          <Workflow className="ml-3 size-[18px] text-fd-primary" strokeWidth={2} />
          <span className="text-[15px] font-semibold">Orkestrator</span>
          <span className="font-mono text-[13px] text-fd-muted-foreground">· find-centre-capture</span>
        </div>
        <div
          className="absolute bottom-3 left-[200px] right-3 top-[52px] rounded-xl"
          style={{ backgroundImage: 'radial-gradient(circle, var(--color-fd-border) 1.2px, transparent 1.4px)', backgroundSize: '22px 22px' }}
        />
      </div>

      {/* Run button */}
      <div className="absolute right-[14px] top-[7px] h-[28px] w-[178px]">
        <div className={`${u}-btn sm-pop relative size-full`} style={delay(3.9)}>
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
      <span className="sm-fade absolute left-[16px] top-[64px] font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground" style={delay(0.25)}>
        actions on the hub
      </span>
      {palette.map((p, i) => (
        <div key={p} className="sm-in absolute left-[14px] flex h-[40px] w-[170px] flex-col justify-center rounded-lg border border-fd-border bg-fd-background/70 px-3" style={{ top: palY(i), ...delay(0.3 + i * 0.1) }}>
          <span className="font-mono text-[14px] font-semibold leading-tight">{p}</span>
          <span className="text-[11px] leading-tight text-fd-muted-foreground">uc2-scope</span>
        </div>
      ))}
      <span className="sm-fade absolute left-[16px] top-[252px] w-[170px] text-[13px] leading-snug text-fd-muted-foreground" style={delay(0.6)}>
        Drag them in. An edge only snaps if the types fit.
      </span>

      {/* edges, their types, and the output */}
      <svg width={1180} height={430} viewBox="0 0 1180 430" className="pointer-events-none absolute inset-0" aria-hidden>
        <Arrowheads id={u} />
        {edges.map((e, i) => (
          <Path key={i} className="sm-draw" style={delay(2.9 + i * 0.2)} d={e.d} stroke={PRIMARY} width={2.6} />
        ))}
        <Path className="sm-draw" style={delay(3.6)} d={outD} stroke={PRIMARY} width={2.6} dash="5 5" head={`${u}-primary`} />
      </svg>
      {edges.map((e, i) => (
        <span
          key={`c${i}`}
          className="sm-pop absolute flex h-[24px] -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-emerald-500/60 bg-fd-card px-2 font-mono text-[11.5px] font-semibold text-emerald-600 shadow-sm"
          style={{ left: e.mx, top: e.my, ...delay(3.2 + i * 0.2) }}
        >
          {e.type} <Check className="size-[12px]" strokeWidth={3} />
        </span>
      ))}

      {/* the output slot on the hub, filled by the run */}
      <div className="absolute flex h-[76px] w-[220px] -translate-x-1/2 items-center" style={{ left: outX, top: last.y - 38 - 80 }}>
        <div className="sm-pop relative size-full" style={delay(3.7)}>
          <div className={`${u}-ghost absolute inset-0 flex items-center justify-center rounded-xl border-2 border-dashed border-fd-border font-mono text-[13px] text-fd-muted-foreground`} style={vars(doneAt - 0.2)}>
            output → hub
          </div>
          <div className={`${u}-img absolute inset-0 flex items-center gap-3 rounded-xl border-2 border-emerald-500/60 bg-fd-card px-2.5 shadow-md`} style={vars(doneAt - 0.2)}>
            <MiniShot size={56} />
            <span className="flex flex-col">
              <span className="font-mono text-[14px] font-semibold">image_0043</span>
              <span className="text-[12.5px] text-fd-muted-foreground">on the hub, centred</span>
            </span>
          </div>
        </div>
      </div>

      {/* the nodes, dragged in from the palette */}
      {nodes.map((n, i) => (
        <div key={`${n.name}${i}`} className="absolute" style={{ left: n.x, top: n.y, width: nw, height: nh }}>
          <div
            className={`${u}-drag relative size-full rounded-xl border-2 border-fd-border bg-fd-card shadow-md`}
            style={{ ...delay(0.8 + i * 0.45), '--px': 14 - n.x, '--py': palY(n.from) - n.y } as CSSProperties}
          >
            <span className="absolute left-3 top-2.5 font-mono text-[14px] font-bold">{n.name}</span>
            <span className="absolute right-3 top-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-fd-muted-foreground">{n.tag}</span>
            <span className="absolute left-3 top-[36px] font-mono text-[12px] text-fd-muted-foreground">{n.param}</span>
            <span className="absolute right-3 rounded bg-fd-primary/12 px-1.5 py-px font-mono text-[11.5px] text-fd-primary" style={{ top: port - 10 }}>
              {n.out} →
            </span>
            {i > 0 ? <span className="absolute left-[-7px] size-[12px] rounded-full border-2 border-fd-primary bg-fd-card" style={{ top: port - 6 }} /> : null}
            <span className="absolute right-[-7px] size-[12px] rounded-full border-2 border-fd-primary bg-fd-card" style={{ top: port - 6 }} />
            <span className={`${u}-run pointer-events-none absolute inset-[-3px] rounded-xl border-[3px] border-fd-primary bg-fd-primary/10`} style={vars(runAt(i), runAt(i) + runLen)}>
              <span className="absolute bottom-2 left-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-fd-primary">running on uc2-scope</span>
            </span>
            <span className={`${u}-ok absolute right-[-10px] top-[-10px] flex size-[24px] items-center justify-center rounded-full bg-emerald-500 text-white shadow`} style={vars(runAt(i) + runLen)}>
              <Check className="size-[15px]" strokeWidth={3} />
            </span>
          </div>
        </div>
      ))}

      {/* tokens running along the edges */}
      {[...edges.map((e) => e.d), outD].map((d, i) => {
        const at = runAt(i) + runLen;
        return (
          <span
            key={`tok${i}`}
            className={`${u}-tok absolute left-0 top-0 size-[14px] rounded-full bg-fd-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-fd-primary)_25%,transparent)]`}
            style={{ offsetPath: `path('${d}')`, ...vars(at, at + 0.4) }}
          />
        );
      })}

      {/* click 2: a big red X, and the verdict */}
      <div className={`${u}-dim pointer-events-none absolute inset-0 rounded-2xl bg-fd-background/60`} />
      <div className="pointer-events-none absolute inset-0">
        <svg width={1180} height={430} viewBox="0 0 1180 430" className="absolute inset-0" aria-hidden>
          <path className={`${u}-x`} style={vars(0.1)} pathLength={1} d="M70 48 C 360 150, 760 290, 1116 398" fill="none" stroke="#dc2626" strokeWidth={24} strokeLinecap="round" opacity={0.92} />
          <path className={`${u}-x`} style={vars(0.45)} pathLength={1} d="M1112 44 C 800 150, 420 290, 64 400" fill="none" stroke="#dc2626" strokeWidth={24} strokeLinecap="round" opacity={0.92} />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className={`${u}-stamp rounded-2xl border-[6px] border-[#dc2626] bg-fd-card px-10 py-4 text-[64px] font-black uppercase leading-none tracking-[-0.01em] text-[#dc2626] shadow-2xl`}>
          That is so 2023.
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
  [['from', 'k'], [' typing ', ''], ['import', 'k'], [' Protocol', '']],
  [['from', 'k'], [' arkitekt ', ''], ['import', 'k'], [' App', '']],
  [['from', 'k'], [' mikro.arkitekt.specs ', ''], ['import', 'k'], [' SingleChannelImage ', ''], ['as', 'k'], [' Image', '']],
  [],
  [['app = App(', ''], ['"find-centre-capture"', 's'], [', ', ''], ['"0.1.0"', 's'], [')', '']],
  [],
  [['@app.declare', 'd'], ['(app=', ''], ['"uc2-scope"', 's'], [', auto_resolvable=', ''], ['True', 'k'], [')', '']],
  [['class', 'k'], [' Scope', 'f'], ['(Protocol):', '']],
  [['    def', 'k'], [' snap', 'f'], ['(self, exposure_ms: float) -> Image: ...', '']],
  [['    def', 'k'], [' find_largest', 'f'], ['(self, image: Image) -> tuple[float, float]: ...', '']],
  [['    def', 'k'], [' move_to', 'f'], ['(self, x_um: float, y_um: float) -> None: ...', '']],
  [],
  [['@app.workflow', 'd']],
  [['def', 'k'], [' find_centre_capture', 'f'], ['(scope: Scope) -> Image:', '']],
  [['    """Find the biggest organoid, centre it, capture it."""', 'c']],
  [['    overview = scope.snap(exposure_ms=', ''], ['20', 's'], [')', '']],
  [['    x, y = scope.find_largest(overview)', '']],
  [['    scope.move_to(x, y)', '']],
  [['    ', ''], ['return', 'k'], [' scope.snap(exposure_ms=', ''], ['100', 's'], [')', '']],
];
const TOK_CLASS: Record<Tok[1], string> = {
  k: 'text-fd-primary font-semibold',
  s: 'text-emerald-600',
  c: 'text-fd-muted-foreground italic',
  f: 'text-sky-600',
  d: 'text-amber-600',
  '': '',
};

/** Kim asks for the workflow instead of drawing it: the AI writes a short
    Python workflow against the actions the hub already knows, she runs it,
    and the hub executes the same four calls as the editor did. */
export function AiWorkflowFigure() {
  const lineAt = (i: number) => 2.4 + i * 0.13;
  const codeDone = lineAt(WF_CODE.length);
  const calls = ['snap', 'find_largest', 'move_to', 'snap'];
  const runAt = codeDone + 0.6;
  return (
    <div className="relative mx-auto grid h-[440px] w-[1180px] grid-cols-[380px_1fr] gap-5" role="img" aria-label="Kim asks an AI for a workflow that finds the biggest organoid, centres it and captures it. It writes a short Python workflow against the uc2-scope actions on the hub; she runs it, and the hub executes snap, find_largest, move_to and snap.">
      {/* the conversation, and the run */}
      <div className="flex flex-col gap-3">
        <div className="sm-in self-end rounded-2xl rounded-br-md bg-fd-primary px-4 py-2.5 text-[16px] leading-snug text-fd-primary-foreground shadow-sm" style={delay(0.3)}>
          Write me a workflow: find the biggest organoid, centre it, take a detailed image. Use the actions on my hub.
        </div>
        <div className="sm-in flex items-start gap-2.5" style={delay(1.3)}>
          <span className="flex size-[30px] shrink-0 items-center justify-center rounded-lg bg-[#d97757] text-[18px] font-bold text-white">✻</span>
          <span className="rounded-2xl rounded-tl-md border border-fd-border bg-fd-card px-4 py-2.5 text-[15.5px] leading-snug shadow-sm">
            Your hub already has <code className="font-mono text-[13.5px] text-fd-primary">snap</code>, <code className="font-mono text-[13.5px] text-fd-primary">find_largest</code> and{' '}
            <code className="font-mono text-[13.5px] text-fd-primary">move_to</code> on uc2-scope. Here’s a workflow that uses just those:
          </span>
        </div>
        <div className="sm-in mt-auto flex flex-col gap-1.5 rounded-xl bg-[#0f172a] px-4 py-3 font-mono text-[13px] text-slate-200 shadow-md" style={delay(codeDone + 0.1)}>
          <span>
            <span className="text-emerald-400">$</span> arkitekt run dev
          </span>
          <span className="sm-fade text-slate-400" style={delay(codeDone + 0.4)}>
            ✓ find_centre_capture is on the hub
          </span>
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {calls.map((c, i) => (
              <span key={`${c}${i}`} className="sm-pop inline-flex items-center gap-1 rounded bg-white/10 px-1.5 py-0.5" style={delay(runAt + i * 0.45)}>
                {c} <span className="text-emerald-400">✓</span>
              </span>
            ))}
          </span>
          <span className="sm-in flex items-center gap-2.5 pt-1" style={delay(runAt + calls.length * 0.45 + 0.2)}>
            <MiniShot size={34} />
            <span className="text-slate-300">
              image_0043 <span className="text-slate-500">· on the hub, recorded</span>
            </span>
          </span>
        </div>
      </div>

      {/* the generated workflow */}
      <div className="sm-pop flex flex-col overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm" style={delay(2.1)}>
        <div className="flex h-[36px] shrink-0 items-center gap-2 border-b border-fd-border px-4">
          <span className="font-mono text-[13.5px] font-semibold">find_centre_capture.py</span>
          <span className="ml-auto font-mono text-[12px] text-fd-muted-foreground">{WF_CODE.length} lines · no plumbing</span>
        </div>
        <pre className="flex-1 px-4 py-2.5 font-mono text-[13.5px] leading-[1.48]">
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
  );
}
