'use client';

/* Defeating the four horsemen of Kim's nights, one slide each: the
   horseman stands small in the top-right corner, what Arkitekt does about
   him plays in the middle, and one click (a reveal.js fragment) strikes him
   down where he stands.

   Connection → no IPs: a coordination server, briefly, then straight to the hub; Error handling & observability → the
   record, resumable workflows, and task.hold to ask a person; Data management → mikro and its
   coordinate systems, and the lineage graph on them; Reproducibility → sharing
   is caring: publish the code as an app, share the data over a scoped
   WireGuard connection. Values (times, versions, coordinates) are illustrative. */

import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Fragment } from '@revealjs/react';
import { Check, Compass, Database, Download, GitBranch, Heart, Image as ImageIcon, KeyRound, Lock, Microscope, Package, Plus, RotateCcw, ScrollText, Server, Share2, Smartphone, Table2, Workflow, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { cn } from '@/lib/cn';
import { Arrowheads, LoopStyles, PRIMARY, Path, delay, useUid } from './smart-microscopy-anim';
import { HORSEMEN, HorsemanArt, HorsemanBanner, horsemanAmbientCss } from './smart-microscopy-figures';
import type { HorsemanKey, NIGHTS } from './smart-microscopy-figures';

type NightKey = keyof typeof NIGHTS;

/** Reviewer 2's name tag, riding with the horseman. */
function ReviewerTag({ className }: { className?: string }) {
  return (
    <span className={cn('absolute -rotate-6 rounded border border-black/70 bg-white px-1 font-mono font-extrabold leading-[1.5] text-red-700 shadow', className)}>
      REVIEWER 2
    </span>
  );
}

/** What Reviewer 2 says as each horseman arrives. */
const TAUNTS: Record<HorsemanKey, string> = {
  communication: 'You still need to connect to the hub!',
  threads: 'If your connection fails, your workflow fails. lol',
  data: 'lol, on your server you still just have folders. You don’t solve that.',
  repro: 'You still need to run the code somewhere. How should we reproduce these environments?',
  ai: 'LLMs will make all of that obsolete! WHERE IS THE CHAT INTERFACE?',
};

/** A horseman's own slide, at the start of his fight: he strides in from off
    the slide wearing Reviewer 2's face and rears, his banner unfurls, and
    Reviewer 2 has his say. The strike comes later, on the last slide of the
    fight. */
export function HorsemanDuelFigure({ night }: { night: HorsemanKey }) {
  const u = useUid();
  const t = { stride: 0.2, rear: 1.5, banner: 1.1, taunt: 2.1 };
  const css = `
${horsemanAmbientCss(u)}
.${u}-stride { transform-box: border-box; }
section.present .${u}-stride { animation: ${u}-stride 1.4s cubic-bezier(.25,.7,.35,1) ${t.stride}s both; }
section.present .${u}-bob { animation: ${u}-bob 0.26s ease-in-out ${t.stride}s 5 alternate; }
section.present .${u}-leg { animation: ${u}-swing 0.26s ease-in-out ${t.stride}s 5 alternate; }
section.present .${u}-rear { animation: ${u}-rear 1.1s ease-in-out ${t.rear}s both; }
@keyframes ${u}-stride { 0% { opacity: 0; transform: translateX(760px); } 8% { opacity: 1; } 100% { opacity: 1; transform: none; } }
@keyframes ${u}-bob { from { transform: translateY(0); } to { transform: translateY(-12px); } }
@keyframes ${u}-swing { from { transform: rotate(calc(var(--a) * -1deg)); } to { transform: rotate(calc(var(--a) * 1deg)); } }
@keyframes ${u}-rear { 0% { transform: none; } 45% { transform: rotate(-17deg); } 70% { transform: rotate(-12deg); } 100% { transform: rotate(-7deg); } }

@media (prefers-reduced-motion: reduce) {
  section.present :is(.${u}-stride, .${u}-bob, .${u}-leg, .${u}-rear) { animation: none; }
}
`;
  const h = HORSEMEN[night];
  return (
    <div className="relative mx-auto h-[600px] w-[1180px]" role="img" aria-label={`${h.ordinal}, ${h.name}, rides in wearing Reviewer 2's face and says: ${TAUNTS[night]}`}>
      <LoopStyles css={css} />
      <div className="absolute inset-x-0 top-[24px] flex justify-center">
        <div className="sm-pop" style={delay(t.banner)}>
          <HorsemanBanner night={night} />
        </div>
      </div>
      {/* Reviewer 2 has a point */}
      <div className="absolute left-[130px] top-[170px] w-[420px]">
        <div className="sm-pop relative origin-bottom-right rounded-2xl border-2 border-black/70 bg-white px-4 py-2.5 text-[19px] font-semibold italic leading-snug text-zinc-900 shadow-lg" style={delay(t.taunt)}>
          <span className="sr-only">Reviewer 2: </span>“{TAUNTS[night]}”
          <span className="absolute -right-[9px] bottom-[14px] size-[16px] rotate-45 border-r-2 border-t-2 border-black/70 bg-white" />
        </div>
      </div>
      {/* the horseman, as Reviewer 2 */}
      <div className="absolute left-[560px] top-[170px]">
        <div className={`${u}-stride relative`}>
          <HorsemanArt night={night} u={u} width={520} face="reviewer" />
          <ReviewerTag className="left-[170px] top-[-14px] px-2 text-[20px]" />
        </div>
      </div>
    </div>
  );
}

/** The figure in the middle, and the horseman small in the top-right corner
    of the slide (up beside the title). With `kill`, one click (a reveal.js
    fragment) strikes him down there. */
export function DefeatFrame({
  night,
  weapon,
  kill = true,
  killIndex = 1,
  children,
}: {
  night: NightKey;
  weapon: string;
  kill?: boolean;
  /** The fragment index of the strike, when the figure has clicks of its own before it. */
  killIndex?: number;
  children: ReactNode;
}) {
  const u = useUid();
  const css = `
${horsemanAmbientCss(u)}
:is(.${u}-bolt, .${u}-stamp, .${u}-burst) { opacity: 0; }
.${u}-kill.visible ~ * .${u}-hz { animation: ${u}-die 1.5s ease-in 0.35s both; }
.${u}-kill.visible ~ * .${u}-bn { animation: ${u}-dim 0.6s ease-out 1s both; }
.${u}-kill.visible ~ * .${u}-bolt { animation: ${u}-bolt 0.7s ease-out both; }
.${u}-kill.visible ~ * .${u}-burst { animation: ${u}-burst 0.6s ease-out 0.3s both; }
.${u}-kill.visible ~ * .${u}-stamp { animation: ${u}-stamp 0.45s cubic-bezier(.2,1.4,.4,1) 1.3s both; }
@keyframes ${u}-die {
  0% { transform: none; filter: none; opacity: 1; }
  10% { transform: translateX(-5px) rotate(-3deg); }
  20% { transform: translateX(5px) rotate(3deg); filter: grayscale(1) brightness(1.4); }
  30% { transform: translateX(-3px) rotate(-1deg); }
  100% { transform: translateY(26px) rotate(16deg) scale(0.86); filter: grayscale(1) brightness(1.7) blur(2px); opacity: 0.14; }
}
@keyframes ${u}-dim { to { opacity: 0.4; filter: grayscale(0.7); } }
@keyframes ${u}-bolt { 0% { opacity: 0; stroke-dashoffset: 1; } 15% { opacity: 1; } 55% { opacity: 1; stroke-dashoffset: 0; } 100% { opacity: 0; stroke-dashoffset: 0; } }
@keyframes ${u}-burst { 0% { opacity: 0; transform: scale(0.3); } 30% { opacity: 1; } 100% { opacity: 0; transform: scale(1.8); } }
@keyframes ${u}-stamp { from { opacity: 0; transform: rotate(-11deg) scale(2); } to { opacity: 1; transform: rotate(-11deg) scale(1); } }
@media (prefers-reduced-motion: reduce) { .${u}-kill.visible ~ * .${u}-hz { animation: none; opacity: 0.15; } }

`;
  const bolt = 'M930 36 L978 -2 L962 -10 L1018 -46 L1002 -54 L1074 -102';
  return (
    <div className="relative mx-auto h-[440px] w-[1180px]">
      {kill ? <Fragment as="span" index={killIndex} className={`${u}-kill absolute`} /> : null}
      <LoopStyles css={css} />
      <div className="absolute inset-y-0 left-1/2 w-[810px] -translate-x-1/2">{children}</div>
      {/* the horseman, up in the corner */}
      <div className="pointer-events-none absolute right-[-6px] top-[-182px] flex w-[190px] flex-col items-center">
        <div className={`${u}-hz sm-in relative`} style={delay(0.1)}>
          <HorsemanArt night={night} u={u} width={180} face="reviewer" />
          <ReviewerTag className="left-[58px] top-[-8px] text-[9px]" />
        </div>
        <div className={`${u}-bn -mt-1 flex justify-center whitespace-nowrap`}>
          <HorsemanBanner night={night} tiny className="sm-pop" />
        </div>
        <span className={`${u}-stamp absolute top-[58px] flex flex-col items-center rounded-lg border-4 border-emerald-600 bg-fd-card/95 px-3 py-1 text-emerald-600 shadow-xl`}>
          <span className="text-[22px] font-black uppercase leading-none tracking-[0.04em]">Defeated</span>
          <span className="whitespace-nowrap font-mono text-[11px] font-bold">by {weapon}</span>
        </span>
      </div>
      {/* the strike */}
      {kill ? (
        <svg width={1180} height={440} viewBox="0 0 1180 440" className="pointer-events-none absolute inset-0 z-10 overflow-visible" aria-hidden>
          <path className={`${u}-bolt`} pathLength={1} strokeDasharray="1" d={bolt} fill="none" stroke={PRIMARY} strokeWidth={8} strokeLinejoin="round" strokeLinecap="round" />
          <path className={`${u}-bolt`} pathLength={1} strokeDasharray="1" d={bolt} fill="none" stroke="#fff" strokeWidth={2.6} strokeLinejoin="round" strokeLinecap="round" />
          <circle className={`${u}-burst`} cx={1082} cy={-104} r={44} fill="none" stroke={PRIMARY} strokeWidth={5} style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
        </svg>
      ) : null}
    </div>
  );
}

/* --- 1 · connection: no IPs, just coordination ------------------------------------- */

/** No IP addresses: the address Kim used to paste is struck out. The app
    asks a coordination server, briefly, where its hub is; the hub registered
    there too. Then the coordination server steps aside and the app talks to
    the Arkitekt server directly, over WireGuard. */
export function CoordinationWinFigure() {
  const u = useUid();
  const W = 810;
  const coord = { x: 300, y: 122, w: 210, h: 84 };
  const app = { x: 10, y: 300, w: 200, h: 92 };
  const hub = { x: 590, y: 292, w: 215, h: 108 };
  const appCoord = `M${app.x + 140} ${app.y} L${coord.x + 30} ${coord.y + coord.h}`;
  const hubCoord = `M${hub.x + 70} ${hub.y} L${coord.x + coord.w - 30} ${coord.y + coord.h}`;
  const directY = app.y + app.h / 2;
  const direct = `M${app.x + app.w} ${directY} L${hub.x} ${directY}`;
  const midX = (app.x + app.w + hub.x) / 2;
  // the timeline, seconds after arrival
  const at = { ip: 0.2, strike: 0.9, nodes: 1.6, brief: 2.2, ask: 3.1, reply: 4.0, direct: 5.4 };
  const brief = (at.direct + 0.2 - at.brief).toFixed(1);
  const css = `
.${u}-run { position: absolute; left: 0; top: 0; }
.${u}-dot { display: block; width: 11px; height: 11px; border-radius: 9999px; background: var(--color-fd-primary); box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-fd-primary) 25%, transparent); }
section.present .${u}-run { animation: ${u}-along var(--t) linear var(--d) infinite both; }
section.present .${u}-run.${u}-rev { animation-direction: reverse; }
@keyframes ${u}-along { from { offset-distance: 0%; } to { offset-distance: 100%; } }

/* the coordination step: there, then gone. Off the current slide, the end state. */
.${u}-brief { opacity: 0.12; }
.${u}-brief-say { opacity: 0; }
.${u}-step { opacity: 0.5; }
section.present .${u}-brief { animation: ${u}-brief ${brief}s linear ${at.brief}s both; }
section.present .${u}-brief-say { animation: ${u}-brief-say ${brief}s linear ${at.brief}s both; }
section.present .${u}-step { animation: ${u}-step 0.8s ease-out ${at.direct}s both; }
@keyframes ${u}-brief { 0% { opacity: 0; } 6% { opacity: 1; } 85% { opacity: 1; } 100% { opacity: 0.12; } }
@keyframes ${u}-brief-say { 0%, 85% { opacity: 1; } 100% { opacity: 0; } }
@keyframes ${u}-step { from { opacity: 1; } to { opacity: 0.5; } }

/* one question up, one answer back */
.${u}-msg { position: absolute; left: 0; top: 0; opacity: 0; offset-path: path('${appCoord}'); }
section.present .${u}-ask { animation: ${u}-ask 0.8s ease-in-out ${at.ask}s both; }
section.present .${u}-reply { animation: ${u}-reply 0.8s ease-in-out ${at.reply}s both; }
@keyframes ${u}-ask { 0% { offset-distance: 0%; opacity: 0; } 15%, 85% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
@keyframes ${u}-reply { 0% { offset-distance: 100%; opacity: 0; } 15%, 85% { opacity: 1; } 100% { offset-distance: 0%; opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  section.present :is(.${u}-brief, .${u}-brief-say, .${u}-step, .${u}-run) { animation: none; }
  .${u}-msg { display: none; }
}
`;
  return (
    <div
      className="relative size-full"
      role="img"
      aria-label="No IP addresses: the address 192.168.0.42:8000 is crossed out. The app asks a coordination server where its Arkitekt server is and gets back a route and keys; the coordination server then steps aside and the app connects to the Arkitekt server directly, over WireGuard."
    >
      <LoopStyles css={css} />

      {/* the IP address nobody types any more */}
      <div className="absolute left-1/2 top-[4px] -translate-x-1/2">
        <div className="sm-in relative flex items-center gap-4 rounded-2xl border-2 border-fd-border bg-fd-card px-5 py-3 shadow-sm" style={delay(at.ip)}>
          <span className="flex flex-col">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fd-muted-foreground">IP address</span>
            <span className="relative font-mono text-[26px] font-semibold leading-tight text-fd-muted-foreground">
              192.168.0.42:8000
              <svg className="pointer-events-none absolute inset-x-[-6px] top-1/2 h-[14px] w-[calc(100%+12px)] -translate-y-1/2 overflow-visible" viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden>
                <path className="sm-draw" style={delay(at.strike)} pathLength={1} strokeDasharray="1" d="M0 7 L100 7" fill="none" stroke="#dc2626" strokeWidth={4} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </span>
          </span>
          <span className="sm-pop flex size-[34px] items-center justify-center rounded-full border-[3px] border-red-600 bg-fd-card" style={delay(at.strike + 0.5)}>
            <X className="size-[20px] text-red-600" strokeWidth={3.4} />
          </span>
        </div>
      </div>

      {/* the brief coordination step */}
      <svg width={W} height={440} viewBox={`0 0 ${W} 440`} className={`${u}-brief absolute inset-0`} aria-hidden>
        <path className="sm-draw" style={delay(at.brief)} pathLength={1} strokeDasharray="1" d={hubCoord} fill="none" stroke={PRIMARY} strokeWidth={2.4} />
        <path className="sm-draw" style={delay(at.brief + 0.4)} pathLength={1} strokeDasharray="1" d={appCoord} fill="none" stroke={PRIMARY} strokeWidth={2.4} />
      </svg>
      <svg width={W} height={440} viewBox={`0 0 ${W} 440`} className="absolute inset-0" aria-hidden>
        {/* then directly */}
        <path className="sm-draw" style={delay(at.direct)} pathLength={1} strokeDasharray="1" d={direct} fill="none" stroke={PRIMARY} strokeOpacity={0.2} strokeWidth={18} strokeLinecap="round" />
        <path className="sm-draw" style={delay(at.direct + 0.2)} pathLength={1} strokeDasharray="1" d={direct} fill="none" stroke={PRIMARY} strokeWidth={3.2} />
      </svg>

      {/* what the coordination server is asked, and answers */}
      <div className={`${u}-brief-say absolute inset-0`}>
        <span className="sm-pop absolute whitespace-nowrap rounded-full border border-fd-border bg-fd-card px-2.5 py-1 font-mono text-[13px] shadow-sm" style={{ right: W - 228, top: 214, ...delay(at.ask - 0.1) }}>
          where is my hub?
        </span>
        <span className="sm-pop absolute flex items-center gap-1.5 whitespace-nowrap rounded-full border border-fd-primary/50 bg-fd-card px-2.5 py-1 font-mono text-[13px] text-fd-primary shadow-sm" style={{ left: 256, top: 252, ...delay(at.reply - 0.1) }}>
          <KeyRound className="size-[13px]" strokeWidth={2.4} /> route + keys
        </span>
      </div>
      <span className={`${u}-msg ${u}-ask`}>
        <span className={`${u}-dot`} />
      </span>
      <span className={`${u}-msg ${u}-reply`}>
        <span className={`${u}-dot`} />
      </span>

      {/* traffic, both ways, straight to the hub */}
      {[0, 1].map((i) => (
        <span key={i} className="sm-fade absolute left-0 top-0" style={delay(at.direct + 0.9)}>
          <span className={cn(`${u}-run`, i === 1 && `${u}-rev`)} style={{ offsetPath: `path('${direct}')`, '--t': `${1.5 + i * 0.3}s`, '--d': `${at.direct + 0.9 + i * 0.6}s` } as CSSProperties}>
            <span className={`${u}-dot`} />
          </span>
        </span>
      ))}
      <span className="sm-pop absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-fd-primary/50 bg-fd-card px-2.5 py-0.5 text-[13px] font-semibold shadow-sm" style={{ left: midX, top: directY - 34, ...delay(at.direct + 0.8) }}>
        <Lock className="size-[12px] text-fd-primary" strokeWidth={2.6} /> direct · WireGuard
      </span>
      <span className="sm-in absolute -translate-x-1/2 whitespace-nowrap text-[14px] text-fd-muted-foreground" style={{ left: midX, top: directY + 26, ...delay(at.direct + 1.2) }}>
        the coordination server is out of the loop
      </span>

      {/* the coordination server */}
      <div className="absolute" style={{ left: coord.x, top: coord.y, width: coord.w, height: coord.h }}>
        <div className={`${u}-step size-full`}>
          <div className="sm-pop flex size-full flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-dashed border-fd-primary/60 bg-fd-card shadow-sm" style={delay(at.nodes + 0.15)}>
            <Compass className="size-[22px] text-fd-primary" strokeWidth={1.8} />
            <span className="text-[17px] font-semibold leading-tight">coordination server</span>
            <span className="text-[12px] text-fd-muted-foreground">knows who is where</span>
          </div>
        </div>
      </div>

      {/* the app */}
      <div className="absolute" style={{ left: app.x, top: app.y, width: app.w, height: app.h }}>
        <div className="sm-pop flex size-full flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm" style={delay(at.nodes)}>
          <Microscope className="size-[24px] text-fd-primary" strokeWidth={1.8} />
          <span className="text-[17px] font-semibold leading-tight">your app</span>
          <span className="text-[12px] text-fd-muted-foreground">anywhere, any network</span>
        </div>
      </div>

      {/* the Arkitekt server */}
      <div className="absolute" style={{ left: hub.x, top: hub.y, width: hub.w, height: hub.h }}>
        <div className="sm-pop flex size-full flex-col items-center justify-center gap-1 rounded-2xl bg-fd-primary text-fd-primary-foreground shadow-xl" style={delay(at.nodes + 0.3)}>
          <span className="flex items-center gap-2.5">
            <span className="flex size-[44px] items-center justify-center rounded-xl bg-white/95">
              <Logo className="size-[36px]" />
            </span>
            <span className="text-[20px] font-bold leading-tight">Arkitekt server</span>
          </span>
          <span className="whitespace-nowrap font-mono text-[12px] opacity-90">no IPs · no open ports</span>
        </div>
      </div>
    </div>
  );
}

/* --- 2a · errors: a record of everything, and workflows that resume ------------------ */

type RecordRow = { t: string; kind: 'call' | 'log'; text: string; on?: string; out?: string; replay?: boolean };
const RECORD_BEFORE: RecordRow[] = [
  { t: '14:02:11', kind: 'call', text: 'snap(exposure_ms=20)', on: 'uc2-scope', out: '→ image_0042', replay: true },
  { t: '14:02:12', kind: 'log', text: 'log · overview taken, 3 candidates' },
  { t: '14:02:13', kind: 'call', text: 'find_largest(image_0042)', on: 'uc2-scope', out: '→ x 1204 · y 830', replay: true },
  { t: '14:02:14', kind: 'log', text: 'progress 50 % · centring' },
];
const RECORD_AFTER: RecordRow[] = [
  { t: '14:05:41', kind: 'call', text: 'move_to(1204, 830)', on: 'uc2-scope', out: '→ arrived' },
  { t: '14:05:43', kind: 'call', text: 'snap(exposure_ms=100)', on: 'uc2-scope', out: '→ image_0043' },
];

function RecordLine({ r, at, replayAt }: { r: RecordRow; at: number; replayAt?: number }) {
  const grid = 'grid grid-cols-[86px_1fr_100px_150px] items-center gap-x-3 px-4';
  if (r.kind === 'log')
    return (
      <div className={cn(grid, 'sm-in h-[32px] border-b border-fd-border bg-fd-muted/40')} style={delay(at)}>
        <span className="font-mono text-[12px] text-fd-muted-foreground">{r.t}</span>
        <span className="col-span-3 font-mono text-[12.5px] italic text-fd-muted-foreground">{r.text}</span>
      </div>
    );
  return (
    <div className={cn(grid, 'sm-in relative h-[40px] border-b border-fd-border')} style={delay(at)}>
      <span className="font-mono text-[12.5px] text-fd-muted-foreground">{r.t}</span>
      <span className="font-mono text-[14px] font-semibold">{r.text}</span>
      <span className="text-[13px] text-fd-muted-foreground">{r.on}</span>
      <span className="flex items-center justify-end gap-2 font-mono text-[12.5px]">
        {r.out}
        <Check className="size-[15px] text-emerald-600" strokeWidth={3} />
      </span>
      {r.replay && replayAt !== undefined ? (
        <span className="sm-pop absolute left-[340px] top-[10px] flex items-center gap-1 rounded-full bg-fd-primary/12 px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] text-fd-primary" style={delay(replayAt)}>
          <RotateCcw className="size-[11px]" strokeWidth={2.6} /> replayed
        </span>
      ) : null}
    </div>
  );
}

export function RecordWinFigure() {
  const at = (i: number) => 0.6 + i * 0.4;
  const crashAt = at(RECORD_BEFORE.length) + 0.2;
  const resumeAt = crashAt + 1.6;
  return (
    <div className="flex size-full flex-col gap-2 pt-1" role="img" aria-label="The hub's record of run 41: every call with its inputs and outputs, every log line and progress update. The workflow's process dies when Kim closes her laptop; it is resumed in a new process, the finished calls are replayed from the record without running again, and the run carries on.">
      <div className="sm-in flex items-center gap-3" style={delay(0.2)}>
        <span className="flex size-[32px] items-center justify-center rounded-lg bg-fd-primary">
          <span className="flex size-[26px] items-center justify-center rounded-md bg-white/95">
            <Logo className="size-[22px]" />
          </span>
        </span>
        <span className="text-[18px] font-semibold">The record · find_centre_capture · run 41</span>
        <ScrollText className="ml-auto size-[18px] text-fd-muted-foreground" strokeWidth={2} />
        <span className="font-mono text-[12px] text-fd-muted-foreground">every call, input, output, log line</span>
      </div>
      <div className="flex flex-col overflow-hidden rounded-xl border-2 border-fd-border bg-fd-card">
        {RECORD_BEFORE.map((r, i) => (
          <RecordLine key={r.t} r={r} at={at(i)} replayAt={resumeAt + 0.5 + i * 0.1} />
        ))}
        <div className="sm-in flex h-[38px] items-center gap-2 border-b border-fd-border bg-red-500/8 px-4 font-mono text-[13px] font-semibold text-red-700" style={delay(crashAt)}>
          ✕ 14:02:15 · the workflow’s process died: Kim closed her laptop
        </div>
        <div className="sm-in flex h-[38px] items-center gap-2 border-b border-fd-border bg-fd-primary/8 px-4 text-[14px] font-semibold text-fd-primary" style={delay(resumeAt)}>
          <RotateCcw className="size-[16px]" strokeWidth={2.4} /> 14:05:40 · resumed in a new process · finished calls come back from the record
        </div>
        {RECORD_AFTER.map((r, i) => (
          <RecordLine key={r.t} r={r} at={resumeAt + 1.2 + i * 0.45} />
        ))}
      </div>
      <div className="sm-pop self-start rounded-full bg-emerald-500 px-4 py-1.5 text-[15px] font-semibold text-white shadow-md" style={delay(resumeAt + 2.3)}>
        Same run, same answers. Nothing ran twice.
      </div>
    </div>
  );
}

/* --- 2b · errors: ask a person ---------------------------------------------------------- */

type CodeTok = [string, 'k' | 's' | 'f' | 'd' | 'h' | ''];
const HOLD_CODE: CodeTok[][] = [
  [['@app.workflow', 'd']],
  [['def', 'k'], [' find_centre_capture', 'f'], ['(scope: Scope, *, task: Task):', '']],
  [['    overview = scope.snap(exposure_ms=', ''], ['20', 's'], [')', '']],
  [['    spot = scope.find_largest(overview)', '']],
  [['    ', ''], ['while', 'k'], [' spot ', ''], ['is None', 'k'], [':', '']],
  [['        task.hold(', 'h'], ['"Nothing in view: readjust the slide."', 's'], [')', 'h']],
  [['        overview = scope.snap(exposure_ms=', ''], ['20', 's'], [')', '']],
  [['        spot = scope.find_largest(overview)', '']],
  [['    scope.move_to(*spot)', '']],
  [['    ', ''], ['return', 'k'], [' scope.snap(exposure_ms=', ''], ['100', 's'], [')', '']],
];
const HOLD_TOK: Record<CodeTok[1], string> = {
  k: 'text-fd-primary font-semibold',
  s: 'text-emerald-600',
  f: 'text-sky-600',
  d: 'text-amber-600',
  h: 'font-bold text-fd-foreground',
  '': '',
};

export function HoldWinFigure() {
  const u = useUid();
  const holdAt = 1.9;
  const nudgeAt = 3.3;
  const resumeAt = 4.6;
  const css = `
.${u}-hl { opacity: 0; }
section.present .${u}-hl { animation: ${u}-hl 0.5s ease-out ${holdAt - 0.4}s both; }
@keyframes ${u}-hl { from { opacity: 0; } to { opacity: 1; } }
.${u}-slide { transform: translateX(-62px); }
section.present .${u}-slide { animation: ${u}-nudge 1s cubic-bezier(.5,0,.3,1) ${nudgeAt}s both; }
@keyframes ${u}-nudge { from { transform: none; } to { transform: translateX(-62px); } }
section.present .${u}-press { animation: ${u}-press 0.35s ease-out ${resumeAt}s both; }
@keyframes ${u}-press { 0%, 100% { transform: none; } 45% { transform: scale(0.9); } }
.${u}-held, .${u}-go { opacity: 0; }
section.present .${u}-held { animation: ${u}-on 0.3s ease-out ${holdAt}s both, ${u}-off 0.25s ease-out ${resumeAt + 0.3}s forwards; }
section.present .${u}-go { animation: ${u}-on 0.3s ease-out ${resumeAt + 0.3}s both; }
@keyframes ${u}-on { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-off { from { opacity: 1; } to { opacity: 0; } }
/* the phone buzzes when the hold arrives, and Kim taps resume on it */
section.present .${u}-buzz { animation: ${u}-buzz 0.6s ease-in-out ${holdAt + 0.1}s both; }
@keyframes ${u}-buzz { 0%, 100% { transform: none; } 15%, 55% { transform: rotate(-3deg); } 35%, 75% { transform: rotate(3deg); } }
.${u}-tap { opacity: 0; transform-box: fill-box; transform-origin: center; }
section.present .${u}-tap { animation: ${u}-tap 0.7s ease-out ${resumeAt - 0.1}s both; }
@keyframes ${u}-tap { 0% { opacity: 0; transform: scale(0.4); } 1% { opacity: 0.85; transform: scale(0.4); } 100% { opacity: 0; transform: scale(1.9); } }
@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-slide, .${u}-buzz, .${u}-tap) { animation: none; } }
`;
  return (
    <div className="relative size-full" role="img" aria-label="Kim's workflow calls task.hold when no organoid is in view. The run pauses; Orkestrator and the Arkitekt app on Kim's phone both show the message to readjust the slide. She nudges it, taps resume on her phone, Orkestrator shows the run resumed, and it carries on from where it stopped.">
      <LoopStyles css={css} />
      {/* the code */}
      <div className="sm-pop absolute left-0 top-[6px] w-[460px] overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm" style={delay(0.2)}>
        <div className="flex h-[34px] items-center border-b border-fd-border px-4 font-mono text-[13px] font-semibold">find_centre_capture.py</div>
        <pre className="relative px-4 py-2.5 font-mono text-[12px] leading-[1.65]">
          {HOLD_CODE.map((line, i) => (
            <span key={i} className="sm-fade relative block whitespace-pre" style={delay(0.4 + i * 0.1)}>
              {i === 5 ? <span className={`${u}-hl absolute inset-y-0 -left-4 -right-4 bg-amber-400/25`} /> : null}
              <span className="relative">
                {line.map(([text, kind], j) => (
                  <span key={j} className={HOLD_TOK[kind]}>
                    {text}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </pre>
      </div>
      <span className="sm-in absolute left-0 top-[318px] w-[460px] text-[14px] leading-snug text-fd-muted-foreground" style={delay(holdAt + 0.3)}>
        <code className="font-mono font-semibold text-fd-foreground">task.hold</code> pauses the run with your message. Resume and the code carries on after it; the hold is recorded, so a resumed run won’t stop there again.
      </span>

      {/* Orkestrator asks Kim */}
      <div className="absolute right-0 top-[6px] w-[330px]">
        <div className="sm-pop overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-md" style={delay(holdAt)}>
          <div className="flex h-[28px] items-center gap-1.5 border-b border-fd-border bg-fd-muted px-3">
            {['#f87171', '#fbbf24', '#34d399'].map((c) => (
              <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
            ))}
            <span className="ml-2 flex items-center gap-1.5 text-[12px] font-semibold">
              <Logo className="size-[14px]" /> Orkestrator
            </span>
            <span className="ml-auto font-mono text-[11px] text-fd-muted-foreground">runs › 42</span>
          </div>
        <div className="relative h-[150px] p-3.5">
          <div className={`${u}-held absolute inset-3.5 flex flex-col gap-2`}>
            <span className="flex items-center gap-2 text-[14px] font-semibold text-amber-700">
              <span className="flex size-[22px] items-center justify-center rounded-full bg-amber-500/20">⏸</span> run 42 is on hold
            </span>
            <span className="text-[15px] font-semibold leading-snug">Nothing in view: readjust the slide.</span>
            <span className="mt-auto flex gap-2">
              <span className="flex h-[32px] flex-1 items-center justify-center rounded-lg bg-fd-primary text-[14px] font-semibold text-fd-primary-foreground">Resume</span>
              <span className="flex h-[32px] w-[90px] items-center justify-center rounded-lg border border-fd-border text-[14px] text-fd-muted-foreground">Cancel</span>
            </span>
          </div>
          <div className={`${u}-go absolute inset-3.5 flex flex-col gap-1.5`}>
            <span className="flex items-center gap-2 text-[14px] font-semibold text-fd-primary">
              <RotateCcw className="size-[16px]" strokeWidth={2.4} /> resumed by Kim · 14:07:12
            </span>
            <span className="-mt-1 flex items-center gap-1 text-[12px] text-fd-muted-foreground">
              <Smartphone className="size-[12px]" strokeWidth={2.4} /> from her phone
            </span>
            <span className="sm-in whitespace-nowrap font-mono text-[11.5px]" style={delay(resumeAt + 0.8)}>
              snap ✓ · find_largest → x 1204 · y 830 ✓
            </span>
            <span className="sm-in whitespace-nowrap font-mono text-[11.5px]" style={delay(resumeAt + 1.3)}>
              move_to ✓ · snap(100 ms) → image_0043 ✓
            </span>
          </div>
        </div>
        </div>

        {/* the slide on the stage */}
        <div className="sm-in relative mt-4 h-[170px] overflow-hidden rounded-2xl border-2 border-fd-border bg-[#0b1220]" style={delay(holdAt + 0.4)}>
          <div className={`${u}-slide absolute left-[150px] top-[25px] h-[120px] w-[230px] rounded-md border border-white/40 bg-white/10`}>
            <span className="absolute left-[46px] top-[36px] size-[48px] rounded-full" style={{ background: 'radial-gradient(circle, #c6f6ff 0, #4fc3e6 30%, rgba(40,140,190,0.5) 55%, transparent 72%)' }} />
          </div>
          <div className="absolute left-[118px] top-[41px] size-[96px] rounded-sm border-[3px] border-dashed border-amber-400" />
          <span className="absolute left-[118px] top-[141px] font-mono text-[11px] text-amber-300">field of view</span>
          <span className="sm-fade absolute right-3 top-2 text-[13px] font-semibold text-white/85" style={delay(nudgeAt)}>
            Kim nudges the slide ←
          </span>
        </div>
      </div>

      {/* …and on Kim's phone, right beside the microscope */}
      <div className="absolute right-[-182px] top-[34px] flex w-[156px] flex-col items-center gap-2">
        <div className="sm-in" style={delay(holdAt - 0.3)}>
          <div className={`${u}-buzz relative h-[300px] w-[156px] overflow-hidden rounded-[28px] border-[5px] border-zinc-800 bg-gradient-to-b from-slate-700 to-slate-900 shadow-xl dark:border-zinc-600`}>
            <span className="absolute left-1/2 top-[6px] h-[14px] w-[52px] -translate-x-1/2 rounded-full bg-zinc-900" />
            <span className="absolute inset-x-0 top-[26px] text-center text-[30px] font-semibold leading-none text-white/90">14:06</span>
            {/* the push notification */}
            <div className={`${u}-held absolute inset-x-2 top-[72px]`}>
              <div className="sm-pop rounded-2xl bg-white/95 p-2 text-zinc-900 shadow-lg" style={delay(holdAt)}>
                <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-zinc-500">
                  <Logo className="size-[12px]" /> Arkitekt · now
                </span>
                <span className="mt-1 block text-[11px] font-bold leading-tight text-amber-700">⏸ run 42 is on hold</span>
                <span className="mt-0.5 block text-[11px] leading-snug">Nothing in view: readjust the slide.</span>
                <span className="relative mt-2 flex gap-1">
                  <span className={`${u}-press flex h-[24px] flex-1 items-center justify-center rounded-md bg-fd-primary text-[11px] font-semibold text-fd-primary-foreground`}>Resume</span>
                  <span className="flex h-[24px] w-[44px] items-center justify-center rounded-md border border-zinc-300 text-[10px] text-zinc-500">Cancel</span>
                  <span className={`${u}-tap pointer-events-none absolute left-[22px] top-[-2px] size-[28px] rounded-full border-[3px] border-white bg-white/50 shadow`} />
                </span>
              </div>
            </div>
            <div className={`${u}-go absolute inset-x-2 top-[72px]`}>
              <div className="rounded-2xl bg-white/95 p-2 text-zinc-900 shadow-lg">
                <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-zinc-500">
                  <Logo className="size-[12px]" /> Arkitekt · now
                </span>
                <span className="mt-1 flex items-center gap-1 text-[11px] font-bold leading-tight text-emerald-700">
                  <Check className="size-[12px]" strokeWidth={3} /> run 42 resumed
                </span>
                <span className="mt-0.5 block text-[11px] leading-snug text-zinc-600">carrying on after the hold</span>
              </div>
            </div>
            <span className="absolute bottom-[7px] left-1/2 h-[4px] w-[56px] -translate-x-1/2 rounded-full bg-white/60" />
          </div>
        </div>
        <span className="sm-fade text-center text-[12px] leading-tight text-fd-muted-foreground" style={delay(holdAt + 0.3)}>
          the same hold, on Kim’s phone
        </span>
      </div>
    </div>
  );
}

/* --- 3 · data: mikro and coordinates ---------------------------------------------- */

const OVERVIEW_BG =
  'radial-gradient(circle at 62% 38%, #c6f6ff 0, #4fc3e6 6%, rgba(40,140,190,0.6) 13%, transparent 21%), radial-gradient(circle at 26% 64%, #9ee8fb 0, #3aa9d4 4%, transparent 11%), radial-gradient(circle at 74% 76%, #8fe3f7 0, transparent 7%), radial-gradient(circle at 38% 24%, #7fd7f0 0, transparent 5%), radial-gradient(circle at 15% 30%, #6fcbe8 0, transparent 4%), #06101b';
const DETAIL_BG =
  'radial-gradient(circle at 50% 50%, #e9fbff 0, #7ad8f2 14%, rgba(40,150,200,0.85) 30%, rgba(20,80,120,0.5) 46%, transparent 62%), radial-gradient(circle at 34% 40%, #fff 0, transparent 6%), radial-gradient(circle at 60% 58%, #fff 0, transparent 5%), #06101b';

export function DataWinFigure() {
  const stage = 360;
  const meta: [string, string][] = [
    ['pixel size', '0.16 µm'],
    ['stage position', 'x 1204.5 · y 830.0 · z 120 µm'],
    ['coordinates', 'same stage system as image_0042'],
    ['channel · time', 'GFP · 14:02:31'],
    ['made by', 'snap(100 ms) ← move_to ← find_largest'],
    ['dataset', 'organoids / 2025-11-10 / B4'],
  ];
  return (
    <div className="relative size-full" role="img" aria-label="On the stage, the overview image and the detail image sit in one coordinate system. The detail image, image_0043, is stored in mikro with its pixel size, stage position, channel, time and the calls that made it; the 260-character filename is no longer needed.">
      {/* the stage */}
      <div className="absolute left-[30px] top-[18px]" style={{ width: stage, height: stage }}>
        <div
          className="sm-fade absolute inset-0 rounded-md border-2 border-fd-border"
          style={{ ...delay(0.2), backgroundImage: 'linear-gradient(var(--color-fd-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-fd-border) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="sm-in absolute inset-[34px] rounded shadow-md" style={{ ...delay(0.6), background: OVERVIEW_BG }} />
        <span className="sm-fade absolute left-[38px] top-[38px] rounded bg-black/60 px-1.5 py-0.5 font-mono text-[11px] text-white" style={delay(1)}>
          image_0042 · overview · 1.3 µm/px
        </span>
        {/* the detail, flown in to where the organoid is */}
        <div className="sm-fade absolute left-[176px] top-[90px] size-[76px]" style={delay(2.05)}>
          <div className="sm-converge size-full rounded-sm border-[3px] border-fd-primary shadow-xl" style={{ ...delay(2.1), background: DETAIL_BG, '--x': '260px', '--y': '40px' } as CSSProperties} />
        </div>
        <svg width={stage} height={stage} className="pointer-events-none absolute inset-0" aria-hidden>
          <g className="sm-fade" style={delay(2.9)}>
            <path d="M214 60 L214 82 M214 176 L214 198 M146 128 L168 128 M260 128 L282 128" stroke={PRIMARY} strokeWidth={2.4} />
          </g>
        </svg>
        <span className="sm-fade absolute left-[150px] top-[176px] whitespace-nowrap rounded bg-fd-primary px-1.5 py-0.5 font-mono text-[11px] font-semibold text-fd-primary-foreground" style={delay(3)}>
          image_0043 · 0.16 µm/px
        </span>
        <span className="sm-fade absolute bottom-[-24px] left-0 right-0 flex justify-between font-mono text-[11px] text-fd-muted-foreground" style={delay(0.4)}>
          <span>0</span>
          <span>stage x · µm</span>
          <span>2000</span>
        </span>
      </div>

      {/* the record in mikro */}
      <div className="sm-pop absolute right-0 top-[18px] w-[390px] rounded-2xl border-2 border-fd-border bg-fd-card p-4 shadow-sm" style={delay(1.4)}>
        <div className="flex items-center gap-2.5">
          <span className="flex size-[36px] items-center justify-center rounded-lg bg-fd-primary/12 text-fd-primary">
            <Database className="size-[20px]" strokeWidth={2} />
          </span>
          <span className="flex flex-col">
            <span className="font-mono text-[16px] font-semibold leading-tight">image_0043</span>
            <span className="text-[12px] text-fd-muted-foreground">in mikro, on Kim’s hub</span>
          </span>
          <ImageIcon className="ml-auto size-[20px] text-fd-muted-foreground" strokeWidth={1.8} />
        </div>
        <div className="mt-3 flex flex-col">
          {meta.map(([k, val], i) => (
            <div key={k} className="sm-in grid grid-cols-[112px_1fr] gap-2 border-t border-fd-border py-1.5" style={delay(2.2 + i * 0.3)}>
              <span className="text-[12.5px] text-fd-muted-foreground">{k}</span>
              <span className="font-mono text-[12.5px] font-semibold">{val}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sm-in absolute bottom-[14px] right-0 w-[390px]" style={delay(4.3)}>
        <span className="block font-mono text-[11.5px] text-fd-muted-foreground line-through decoration-red-500 decoration-2">org3_B4_z120_dt20_gfA_t41_0.41_final.tif</span>
        <span className="text-[13px] font-semibold text-emerald-600">the filename doesn’t have to carry anything any more</span>
      </div>
    </div>
  );
}

/* --- 3b · data: the lineage graph, on one coordinate system ------------------------- */

type LineageKind = 'call' | 'image' | 'roi' | 'labels' | 'table';
type LineageNode = { name: string; sub: string; kind: LineageKind; col: number; row: number; thumb?: string };

/** The example workflow, then the analysis after it, read in a zigzag:
    row 0 left to right, row 1 back, row 2 left to right, row 3 back. The
    order is also the build order, so each item appears on the stage the
    moment it appears in the graph. */
const LINEAGE: LineageNode[] = [
  { name: 'snap(20 ms)', sub: 'uc2-scope', kind: 'call', col: 0, row: 0 },
  { name: 'image_0042', sub: 'overview · 1.3 µm/px', kind: 'image', col: 1, row: 0, thumb: OVERVIEW_BG },
  { name: 'find_largest', sub: 'uc2-scope', kind: 'call', col: 2, row: 0 },
  { name: 'organoid ROI', sub: 'x 1204 · y 830 µm', kind: 'roi', col: 2, row: 1 },
  { name: 'move_to(ROI)', sub: 'uc2-scope', kind: 'call', col: 1, row: 1 },
  { name: 'snap(100 ms)', sub: 'uc2-scope', kind: 'call', col: 0, row: 1 },
  { name: 'image_0043', sub: 'detail · 0.16 µm/px', kind: 'image', col: 0, row: 2, thumb: DETAIL_BG },
  { name: 'segment', sub: 'stardist 0.9.1 · gpu', kind: 'call', col: 1, row: 2 },
  { name: 'labels_0043', sub: '1 object', kind: 'labels', col: 2, row: 2, thumb: DETAIL_BG },
  { name: 'measure', sub: 'gpu-server', kind: 'call', col: 2, row: 3 },
  { name: 'stats_0043', sub: 'area · ⌀ · GFP', kind: 'table', col: 1, row: 3 },
];
const L_STEP = 0.55;
const lAt = (i: number) => 0.5 + i * L_STEP;
const L_BLOB = 'M50 21 C67 19 80 33 79 51 C78 68 65 80 49 79 C32 78 20 66 22 49 C24 32 35 22 50 21 Z';

function LineageThumb({ node }: { node: LineageNode }) {
  if (node.kind === 'call') return null;
  const base = 'relative size-[40px] shrink-0 overflow-hidden rounded-md border border-fd-border';
  if (node.kind === 'table') {
    return (
      <span className={cn(base, 'flex items-center justify-center bg-fd-primary/10 text-fd-primary')}>
        <Table2 className="size-[22px]" strokeWidth={1.8} />
      </span>
    );
  }
  if (node.kind === 'roi') {
    return (
      <span className={cn(base, 'flex items-center justify-center bg-fd-muted')}>
        <span className="size-[24px] rounded-sm border-2 border-dashed border-fd-primary" />
      </span>
    );
  }
  return (
    <span className={base} style={{ background: node.thumb }}>
      {node.kind === 'labels' ? (
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden>
          <path d={L_BLOB} fill="#34d399" fillOpacity={0.35} stroke="#34d399" strokeWidth={6} />
        </svg>
      ) : null}
    </span>
  );
}

/** Left: the lineage graph of one run of the example workflow plus the
    analysis after it: every image, ROI, label and table knows the call that
    made it. Right: the same items on the stage, in one coordinate system,
    each placed the moment it appears in the graph. */
export function LineageFigure() {
  const colX = [0, 198, 396];
  const rowY = [34, 130, 226, 322];
  const nw = 180;
  const nh = 60;
  const box = (n: LineageNode) => ({ x: colX[n.col], y: rowY[n.row] });
  const edge = (a: LineageNode, b: LineageNode) => {
    const p = box(a);
    const q = box(b);
    if (a.row === b.row) {
      const right = b.col > a.col;
      const y = p.y + nh / 2;
      return `M${right ? p.x + nw : p.x} ${y} L${right ? q.x - 4 : q.x + nw + 4} ${y}`;
    }
    const x = p.x + nw / 2;
    return `M${x} ${p.y + nh} L${x} ${q.y - 4}`;
  };
  // the stage, in figure coordinates
  const st = { x: 608, y: 34, s: 330 };
  const ov = 15; // overview inset from the stage edge
  const roi = { x: 166, y: 94, s: 70 }; // relative to the stage
  const inset = { x: 972, y: 34, s: 208 };
  const at = {
    overview: lAt(1),
    roi: lAt(3),
    detail: lAt(6),
    labels: lAt(8),
    stats: lAt(10),
  };
  const stats: [string, string][] = [
    ['area', '0.21 mm²'],
    ['⌀', '512 µm'],
    ['GFP mean', '1 840'],
    ['centroid', '1204.5, 830.0 µm'],
  ];
  return (
    <div
      className="relative mx-auto h-[440px] w-[1180px]"
      role="img"
      aria-label="Left, the lineage graph of one run: snap makes the overview image_0042, find_largest makes an ROI on it, move_to and snap make the detail image_0043, segmentation makes labels_0043, and measure makes a table of organoid statistics. Right, the same items on the stage in one coordinate system: the overview, the ROI on it, the detail image inside the ROI, its labels, and the measurements at the organoid's position."
    >
      <span className="sm-fade absolute left-0 top-0 text-[12px] font-semibold uppercase tracking-[0.08em] text-fd-muted-foreground" style={delay(0.2)}>
        lineage graph · what made what
      </span>
      <span className="sm-fade absolute top-0 text-[12px] font-semibold uppercase tracking-[0.08em] text-fd-muted-foreground" style={{ left: st.x, ...delay(0.2) }}>
        one coordinate system · stage <span className="normal-case">µm</span>
      </span>

      {/* edges */}
      <svg width={580} height={440} viewBox="0 0 580 440" className="pointer-events-none absolute left-0 top-0 overflow-visible" aria-hidden>
        <Arrowheads id="lin" />
        {LINEAGE.slice(1).map((n, i) => (
          <Path key={n.name} d={edge(LINEAGE[i], n)} stroke={PRIMARY} width={2.2} head="lin-primary" className="sm-draw" style={delay(lAt(i + 1) - 0.3)} />
        ))}
      </svg>

      {/* nodes */}
      {LINEAGE.map((n, i) => {
        const { x, y } = box(n);
        const call = n.kind === 'call';
        return (
          <div key={n.name} className="absolute" style={{ left: x, top: y, width: nw, height: nh }}>
            <div
              className={cn(
                'sm-pop flex size-full items-center gap-2.5 rounded-xl border-2 bg-fd-card px-2.5 shadow-sm',
                call ? 'rounded-full border-dashed border-fd-border' : 'border-fd-primary/60',
              )}
              style={delay(lAt(i))}
            >
              <LineageThumb node={n} />
              <span className={cn('flex min-w-0 flex-col', call && 'w-full items-center')}>
                <span className={cn('truncate font-mono text-[13px] font-semibold leading-tight', call && 'text-fd-muted-foreground')}>{n.name}</span>
                <span className="truncate text-[10.5px] leading-tight text-fd-muted-foreground">{n.sub}</span>
              </span>
            </div>
          </div>
        );
      })}

      {/* legend, in the empty corner of the zigzag */}
      <div className="sm-fade absolute flex flex-col gap-1.5 text-[12px] text-fd-muted-foreground" style={{ left: colX[0], top: rowY[3] + 4, ...delay(lAt(10) + 0.4) }}>
        <span className="flex items-center gap-2">
          <span className="h-[14px] w-[30px] rounded-full border-2 border-dashed border-fd-border" /> a call, on some app
        </span>
        <span className="flex items-center gap-2">
          <span className="h-[14px] w-[30px] rounded-md border-2 border-fd-primary/60" /> data it made, in mikro
        </span>
      </div>

      {/* the stage */}
      <div className="absolute" style={{ left: st.x, top: st.y, width: st.s, height: st.s }}>
        <div
          className="sm-fade absolute inset-0 rounded-md border-2 border-fd-border"
          style={{ ...delay(0.3), backgroundImage: 'linear-gradient(var(--color-fd-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-fd-border) 1px, transparent 1px)', backgroundSize: '33px 33px' }}
        />
        <div className="sm-in absolute rounded shadow-md" style={{ inset: ov, background: OVERVIEW_BG, ...delay(at.overview) }} />
        <span className="sm-fade absolute rounded bg-black/60 px-1.5 py-0.5 font-mono text-[11px] text-white" style={{ left: ov + 4, top: ov + 4, ...delay(at.overview + 0.3) }}>
          image_0042
        </span>
        {/* the ROI find_largest drew on the overview */}
        <div className="sm-pop absolute rounded-sm border-2 border-dashed border-fd-primary" style={{ left: roi.x - 4, top: roi.y - 4, width: roi.s + 8, height: roi.s + 8, ...delay(at.roi) }} />
        {/* the detail, flown in to the ROI */}
        <div className="sm-fade absolute" style={{ left: roi.x, top: roi.y, width: roi.s, height: roi.s, ...delay(at.detail - 0.05) }}>
          <div className="sm-converge relative size-full overflow-hidden rounded-sm border-2 border-fd-primary shadow-xl" style={{ ...delay(at.detail), background: DETAIL_BG, '--x': '-260px', '--y': '140px' } as CSSProperties}>
            <svg viewBox="0 0 100 100" className="sm-fade absolute inset-0 size-full" style={delay(at.labels)} aria-hidden>
              <path d={L_BLOB} fill="#34d399" fillOpacity={0.3} stroke="#34d399" strokeWidth={4} />
            </svg>
          </div>
        </div>
        <span className="sm-fade absolute whitespace-nowrap rounded bg-fd-primary px-1.5 py-0.5 font-mono text-[11px] font-semibold text-fd-primary-foreground" style={{ left: roi.x - 4, top: roi.y + roi.s + 8, ...delay(at.detail + 0.6) }}>
          image_0043
        </span>
        <span className="sm-fade absolute bottom-[-22px] left-0 right-0 flex justify-between font-mono text-[11px] text-fd-muted-foreground" style={delay(0.4)}>
          <span>0</span>
          <span>stage x · µm</span>
          <span>2000</span>
        </span>
      </div>

      {/* the zoom: detail, labels and the measurement, where they belong */}
      <svg width={1180} height={440} viewBox="0 0 1180 440" className="pointer-events-none absolute left-0 top-0" aria-hidden>
        <g className="sm-fade" style={delay(at.detail + 0.5)}>
          <path d={`M${st.x + roi.x + roi.s} ${st.y + roi.y} L${inset.x} ${inset.y}`} stroke={PRIMARY} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
          <path d={`M${st.x + roi.x + roi.s} ${st.y + roi.y + roi.s} L${inset.x} ${inset.y + inset.s}`} stroke={PRIMARY} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
        </g>
      </svg>
      <div className="sm-pop absolute overflow-hidden rounded-lg border-2 border-fd-primary shadow-lg" style={{ left: inset.x, top: inset.y, width: inset.s, height: inset.s, background: DETAIL_BG, ...delay(at.detail + 0.5) }}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden>
          <path className="sm-draw" style={delay(at.labels)} pathLength={1} strokeDasharray="1" d={L_BLOB} fill="none" stroke="#34d399" strokeWidth={1.8} />
          <path className="sm-fade" style={delay(at.labels + 0.6)} d={L_BLOB} fill="#34d399" fillOpacity={0.22} />
          <g className="sm-pop" style={delay(at.stats)}>
            <path d="M50 44 L50 56 M44 50 L56 50" stroke="#fff" strokeWidth={1.6} />
          </g>
        </svg>
        <span className="sm-fade absolute left-1.5 top-1.5 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[10.5px] text-white" style={delay(at.detail + 0.8)}>
          image_0043
        </span>
        <span className="sm-fade absolute bottom-1.5 left-1.5 rounded bg-emerald-600/90 px-1.5 py-0.5 font-mono text-[10.5px] font-semibold text-white" style={delay(at.labels + 0.3)}>
          + labels_0043
        </span>
      </div>
      <div className="sm-pop absolute rounded-xl border-2 border-fd-border bg-fd-card px-3 py-2 shadow-sm" style={{ left: inset.x, top: inset.y + inset.s + 12, width: inset.s, ...delay(at.stats) }}>
        <span className="flex items-center gap-1.5 font-mono text-[12px] font-semibold">
          <Table2 className="size-[14px] text-fd-primary" strokeWidth={2} /> stats_0043 · row 1
        </span>
        {stats.map(([k, v], i) => (
          <span key={k} className="sm-in mt-1 flex justify-between gap-2 border-t border-fd-border pt-1 text-[11.5px]" style={delay(at.stats + 0.2 + i * 0.15)}>
            <span className="text-fd-muted-foreground">{k}</span>
            <span className="font-mono font-semibold">{v}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* --- 4 · reproducibility: sharing is caring, code and data ------------------------ */

/** Sharing is caring: a result someone else can check needs both halves,
    the code that made it and the data it ran on. */
export function SharingFigure() {
  const u = useUid();
  const css = `
section.present .${u}-beat { animation: ${u}-beat 1.4s ease-in-out 3.2s infinite; transform-origin: center; }
@keyframes ${u}-beat { 0%, 100% { transform: none; } 15% { transform: scale(1.14); } 30% { transform: none; } 45% { transform: scale(1.08); } }
@media (prefers-reduced-motion: reduce) { section.present .${u}-beat { animation: none; } }
`;
  const half = (
    side: 'left' | 'right',
    icon: LucideIcon,
    title: string,
    rows: string[],
    without: string,
    at: number,
  ) => {
    const Icon = icon;
    return (
      <div className={cn('absolute top-[24px] w-[300px]', side === 'left' ? 'left-[10px]' : 'right-[10px]')}>
        <div className="sm-pop rounded-2xl border-2 border-fd-primary/60 bg-fd-card p-4 shadow-sm" style={delay(at)}>
          <div className="mb-3 flex items-center gap-3">
            <span className="flex size-[44px] items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
              <Icon className="size-[24px]" strokeWidth={1.9} />
            </span>
            <span className="text-[26px] font-bold">{title}</span>
          </div>
          {rows.map((r, i) => (
            <div key={r} className="sm-in border-t border-fd-border py-1.5 font-mono text-[13px]" style={delay(at + 0.3 + i * 0.2)}>
              {r}
            </div>
          ))}
        </div>
        <span className="sm-in mt-3 block text-center text-[14px] text-amber-700 dark:text-amber-500" style={delay(2.4 + (side === 'left' ? 0 : 0.3))}>
          {without}
        </span>
      </div>
    );
  };
  return (
    <div className="relative size-full" role="img" aria-label="Code plus data makes a result someone else can check. Code alone has nothing to run on; data alone doesn't say how it was made.">
      <LoopStyles css={css} />
      {half('left', Workflow, 'Code', ['find_centre_capture.py', 'segment · measure', 'stardist 0.9.1 · seed 42'], 'without the data: nothing to run it on', 0.2)}
      {half('right', Database, 'Data', ['image_0042 · image_0043', 'labels_0043 · stats_0043', 'coordinates + lineage'], 'without the code: no idea how it was made', 0.8)}
      <span className="sm-pop absolute left-1/2 top-[110px] flex size-[64px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-fd-border bg-fd-card shadow-sm" style={delay(1.5)}>
        <Plus className="size-[34px] text-fd-primary" strokeWidth={2.6} />
      </span>
      <div className="absolute inset-x-0 top-[318px] flex flex-col items-center gap-2">
        <span className="sm-pop" style={delay(2.9)}>
          <Heart className={`${u}-beat size-[56px] fill-rose-500 text-rose-500`} strokeWidth={1.6} />
        </span>
        <span className="sm-in text-[20px] font-semibold" style={delay(3.1)}>
          a result someone else can check
        </span>
      </div>
    </div>
  );
}

/** Share code: the script becomes an app, the app goes to GitHub, and from
    there any hub can install it, with the versions it ran with. */
export function ShareCodeFigure() {
  const u = useUid();
  const cw = 183;
  const gap = 26;
  const top = 40;
  const ch = 236;
  const at = (i: number) => 0.3 + i * 1.1;
  const installAt = at(3) + 0.9;
  const css = `
section.present .${u}-press { animation: ${u}-press 0.35s ease-out ${installAt}s both; }
@keyframes ${u}-press { 0%, 100% { transform: none; } 45% { transform: scale(0.9); } }
.${u}-before { opacity: 0; }
section.present .${u}-before { animation: ${u}-on 0.3s ease-out ${at(3) + 0.3}s both, ${u}-off 0.25s ease-out ${installAt + 0.35}s forwards; }
section.present .${u}-after { animation: ${u}-on 0.3s ease-out ${installAt + 0.35}s both; }
.${u}-after { opacity: 1; }
@keyframes ${u}-on { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-off { from { opacity: 1; } to { opacity: 0; } }
`;
  const term = 'rounded-lg bg-[#0b1220] px-2.5 py-2 font-mono text-[11px] leading-[1.6] text-slate-200';
  const steps: { title: string; body: ReactNode }[] = [
    {
      title: 'your script',
      body: (
        <div className="flex flex-col gap-1.5 font-mono text-[12px]">
          <span className="font-semibold">organoid-tools/</span>
          <span className="flex items-center gap-1.5 pl-3">
            <ScrollText className="size-[13px] text-fd-primary" strokeWidth={2} /> app.py
          </span>
          <span className="pl-7 text-[11px] text-fd-muted-foreground">find_centre_capture</span>
          <span className="pl-7 text-[11px] text-fd-muted-foreground">segment · measure</span>
          <span className="flex items-center gap-1.5 pl-3">
            <ScrollText className="size-[13px] text-fd-primary" strokeWidth={2} /> pyproject.toml
          </span>
          <span className="pl-7 text-[11px] text-fd-muted-foreground">stardist==0.9.1</span>
        </div>
      ),
    },
    {
      title: 'bundle it as an app',
      body: (
        <div className={term}>
          <span className="block text-emerald-400">$ arkitekt plugin build</span>
          <span className="block">✓ image</span>
          <span className="block pl-3 text-slate-400">organoid-tools:1.0.2</span>
          <span className="block">✓ 3 actions declared</span>
          <span className="block">✓ flavours</span>
          <span className="block pl-3 text-slate-400">cpu · cuda</span>
        </div>
      ),
    },
    {
      title: 'publish to GitHub',
      body: (
        <div className="flex flex-col gap-2.5">
          <div className={term}>
            <span className="block text-emerald-400">$ arkitekt plugin publish</span>
            <span className="block">✓ pushed release v1.0.2</span>
          </div>
          <div className="rounded-lg border border-fd-border px-2.5 py-2">
            <span className="flex items-center gap-1.5 text-[12px] font-semibold">
              <GitBranch className="size-[14px]" strokeWidth={2.2} /> kim-lab/organoid-tools
            </span>
            <span className="mt-1 block font-mono text-[11px] text-fd-muted-foreground">github.com · release v1.0.2</span>
          </div>
        </div>
      ),
    },
    {
      title: 'installable anywhere',
      body: (
        <div className="relative h-[150px]">
          <div className={`${u}-before absolute inset-0 flex flex-col gap-1.5`}>
            <span className="flex items-center gap-1.5 text-[13px] font-semibold">
              <Package className="size-[15px] text-fd-primary" strokeWidth={2} /> organoid-tools
            </span>
            <span className="font-mono text-[11px] text-fd-muted-foreground">v1.0.2 · by kim-lab</span>
            <span className="text-[11.5px] leading-snug text-fd-muted-foreground">find, centre and capture organoids; segment and measure them</span>
            <span className={`${u}-press mt-auto flex h-[30px] items-center justify-center gap-1.5 rounded-lg bg-fd-primary text-[13px] font-semibold text-fd-primary-foreground`}>
              <Download className="size-[14px]" strokeWidth={2.4} /> Install
            </span>
          </div>
          <div className={`${u}-after absolute inset-0 flex flex-col gap-1.5`}>
            <span className="flex items-center gap-1.5 text-[13px] font-semibold text-emerald-600">
              <Check className="size-[15px]" strokeWidth={3} /> installed · cuda
            </span>
            {['find_centre_capture', 'segment', 'measure'].map((a) => (
              <span key={a} className="rounded-md border border-fd-border px-2 py-1 font-mono text-[11.5px]">
                {a}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative size-full" role="img" aria-label="Kim's script becomes an app with arkitekt plugin build, is published to GitHub with arkitekt plugin publish, and from there another lab's hub installs it with one click, with its three actions and pinned versions.">
      <LoopStyles css={css} />
      {steps.map((s, i) => (
        <div key={s.title} className="absolute" style={{ left: i * (cw + gap), top: 0, width: cw }}>
          <span className="sm-in flex items-center gap-2 text-[14px] font-semibold" style={delay(at(i))}>
            <span className="flex size-[22px] items-center justify-center rounded-full bg-fd-primary text-[12px] text-fd-primary-foreground">{i + 1}</span>
            {s.title}
          </span>
          <div
            className={cn('sm-pop absolute left-0 rounded-2xl border-2 bg-fd-card p-3 shadow-sm', i === 3 ? 'border-fd-primary/60' : 'border-fd-border')}
            style={{ top: top - 6, width: cw, height: ch, ...delay(at(i) + 0.1) }}
          >
            {i === 3 ? (
              <span className="mb-2 flex items-center gap-1.5 border-b border-fd-border pb-2 text-[11.5px] text-fd-muted-foreground">
                <Server className="size-[13px]" strokeWidth={2} /> another lab’s hub
              </span>
            ) : null}
            {s.body}
          </div>
        </div>
      ))}
      <svg width={810} height={440} viewBox="0 0 810 440" className="pointer-events-none absolute inset-0" aria-hidden>
        <Arrowheads id="code" />
        {[0, 1, 2].map((i) => {
          const x1 = (i + 1) * cw + i * gap + 3;
          return <Path key={i} d={`M${x1} ${top + ch / 2} L${x1 + gap - 6} ${top + ch / 2}`} stroke={PRIMARY} width={2.4} head="code-primary" className="sm-draw" style={delay(at(i + 1) - 0.2)} />;
        })}
      </svg>
      <span className="sm-in absolute inset-x-0 top-[300px] text-center text-[16px] text-fd-muted-foreground" style={delay(installAt + 0.8)}>
        The versions travel with the app: it runs the same on their hub as on Kim’s.
      </span>
    </div>
  );
}

/** Share data: a recording of pressing share on the left; on the right, once
    the other lab accepts (one click, a reveal.js fragment), a WireGuard
    connection opens between the two hubs that reaches that one dataset and
    nothing else. */
export function ShareDataFigure({ src }: { src: string }) {
  const u = useUid();
  const [ready, setReady] = useState(false);
  const acc = `.${u}-acc.visible ~ *`;
  const css = `
.${u}-tunnel { transform: scaleY(0); transform-origin: top; }
.${u}-after, .${u}-badge, .${u}-flow { opacity: 0; }
${acc} .${u}-press { animation: ${u}-press 0.35s ease-out both; }
${acc} .${u}-before { animation: ${u}-off 0.25s ease-out 0.35s both; }
${acc} .${u}-after { animation: ${u}-on 0.3s ease-out 0.4s both; }
${acc} .${u}-tunnel { animation: ${u}-grow 0.8s cubic-bezier(.4,0,.2,1) 0.5s both; }
${acc} .${u}-badge { animation: ${u}-pop 0.45s cubic-bezier(.3,1.5,.5,1) 1.2s both; }
${acc} .${u}-flow { animation: ${u}-flow 1.6s linear 1.4s infinite; }
${acc} .${u}-flow.${u}-late { animation-delay: 2.2s; }
${acc} .${u}-row { animation: ${u}-glow 0.6s ease-out 0.6s both; }
@keyframes ${u}-press { 0%, 100% { transform: none; } 45% { transform: scale(0.9); } }
@keyframes ${u}-on { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-off { from { opacity: 1; } to { opacity: 0; } }
@keyframes ${u}-grow { to { transform: none; } }
@keyframes ${u}-pop { from { opacity: 0; transform: translate(-50%, -50%) scale(0.4); } to { opacity: 1; transform: translate(-50%, -50%); } }
@keyframes ${u}-flow { 0% { opacity: 0; transform: translateY(0); } 15%, 85% { opacity: 1; } 100% { opacity: 0; transform: translateY(96px); } }
@keyframes ${u}-glow { from { box-shadow: 0 0 0 0 color-mix(in oklab, var(--color-fd-primary) 60%, transparent); } to { box-shadow: 0 0 0 6px transparent; } }
@media (prefers-reduced-motion: reduce) {
  ${acc} :is(.${u}-tunnel, .${u}-badge, .${u}-after, .${u}-before) { animation-duration: 0.01s; animation-delay: 0s; }
  .${u}-flow { display: none; }
}
`;
  const datasets: { name: string; shared: boolean }[] = [
    { name: 'organoids / B4', shared: true },
    { name: 'organoids / B5', shared: false },
    { name: 'drafts / 2026-11', shared: false },
  ];
  const px = 490; // the right panel
  const pw = 320;
  return (
    <div className="relative size-full" role="img" aria-label="Left, a recording of Kim pressing share on the dataset organoids / B4 and picking another lab. Right, the other lab accepts; a WireGuard connection opens between the two hubs that reaches organoids / B4 and nothing else on Kim's hub.">
      <Fragment as="span" index={1} className={`${u}-acc absolute`} />
      <LoopStyles css={css} />

      {/* the recording, left-aligned */}
      <div className="absolute left-0 top-[8px] w-[460px]">
        <div className="sm-in relative aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-fd-border bg-fd-card/40" style={delay(0.2)}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-8 text-center">
            <span className="flex items-center gap-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-fd-primary">
              <Share2 className="size-[14px]" strokeWidth={2.4} /> Video · press share
            </span>
            <span className="text-[18px] font-semibold leading-snug">Kim presses share on organoids / B4 and picks the other lab.</span>
            <span className="font-mono text-[11px] text-fd-muted-foreground">{src}</span>
          </div>
          <video autoPlay muted loop playsInline onLoadedData={() => setReady(true)} className={cn('absolute inset-0 size-full bg-black object-contain', !ready && 'invisible')}>
            <source src={src} />
          </video>
        </div>
        <span className="sm-in mt-3 block text-[14px] leading-snug text-fd-muted-foreground" style={delay(0.6)}>
          Pick the dataset, pick who gets it, press share. No export, no upload, no copy to keep in sync.
        </span>
      </div>

      {/* Kim's hub, and what is on it */}
      <div className="absolute" style={{ left: px, top: 8, width: pw }}>
        <div className="sm-pop rounded-2xl border-2 border-fd-border bg-fd-card p-3 shadow-sm" style={delay(0.5)}>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex size-[30px] items-center justify-center rounded-lg bg-fd-primary">
              <span className="flex size-[24px] items-center justify-center rounded-md bg-white/95">
                <Logo className="size-[20px]" />
              </span>
            </span>
            <span className="text-[15px] font-semibold">Kim’s hub</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {datasets.map((d) => (
              <div
                key={d.name}
                className={cn(
                  'flex h-[30px] items-center gap-2 rounded-lg border px-2.5 font-mono text-[12px]',
                  d.shared ? `${u}-row border-fd-primary/70 bg-fd-primary/8 font-semibold` : 'border-fd-border text-fd-muted-foreground',
                )}
              >
                <Database className="size-[13px] shrink-0" strokeWidth={2} />
                {d.name}
                {d.shared ? (
                  <span className="ml-auto flex items-center gap-1 font-sans text-[11px] text-fd-primary">
                    <Share2 className="size-[12px]" strokeWidth={2.4} /> shared
                  </span>
                ) : (
                  <Lock className="ml-auto size-[12px]" strokeWidth={2.4} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* the tunnel, only once they accept: from the shared row down to the other lab */}
      <div className="absolute" style={{ left: px + 80, top: 158, width: 0, height: 112 }}>
        <div className={`${u}-tunnel absolute left-[-9px] top-0 h-full w-[18px] rounded-full bg-fd-primary/20`} />
        <div className={`${u}-tunnel absolute left-[-1.5px] top-0 h-full w-[3px]`} style={{ backgroundImage: `repeating-linear-gradient(${PRIMARY} 0 7px, transparent 7px 12px)` }} />
        <span className={`${u}-flow absolute left-[-5.5px] top-0 size-[11px] rounded-full bg-fd-primary`} />
        <span className={`${u}-flow ${u}-late absolute left-[-5.5px] top-0 size-[11px] rounded-full bg-fd-primary`} />
        <span className={`${u}-badge absolute left-[118px] top-1/2 flex flex-col whitespace-nowrap rounded-xl border-2 border-fd-primary/50 bg-fd-card px-2.5 py-1 shadow-sm`}>
          <span className="flex items-center gap-1.5 text-[12.5px] font-semibold">
            <Lock className="size-[12px] text-fd-primary" strokeWidth={2.6} /> WireGuard
          </span>
          <span className="font-mono text-[11px] text-fd-muted-foreground">organoids / B4 · nothing else</span>
        </span>
      </div>

      {/* the other lab */}
      <div className="absolute" style={{ left: px, top: 270, width: pw }}>
        <div className="sm-pop rounded-2xl border-2 border-fd-border bg-fd-card p-3 shadow-sm" style={delay(1.2)}>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex size-[30px] items-center justify-center rounded-lg bg-fd-muted text-fd-muted-foreground">
              <Server className="size-[16px]" strokeWidth={2} />
            </span>
            <span className="text-[15px] font-semibold">another lab’s hub</span>
          </div>
          <div className="relative h-[92px]">
            <div className={`${u}-before absolute inset-0 flex flex-col gap-1.5`}>
              <span className="text-[13px] leading-snug">
                <span className="font-semibold">Kim</span> shared <span className="font-mono font-semibold">organoids / B4</span> with you
              </span>
              <span className="mt-auto flex gap-2">
                <span className={`${u}-press flex h-[30px] flex-1 items-center justify-center rounded-lg bg-fd-primary text-[13px] font-semibold text-fd-primary-foreground`}>Accept</span>
                <span className="flex h-[30px] w-[80px] items-center justify-center rounded-lg border border-fd-border text-[13px] text-fd-muted-foreground">Decline</span>
              </span>
            </div>
            <div className={`${u}-after absolute inset-0 flex flex-col gap-1.5`}>
              <span className="flex items-center gap-1.5 text-[13px] font-semibold text-emerald-600">
                <Check className="size-[14px]" strokeWidth={3} /> accepted · connected to Kim’s hub
              </span>
              <div className="flex h-[30px] items-center gap-2 rounded-lg border border-fd-primary/70 bg-fd-primary/8 px-2.5 font-mono text-[12px] font-semibold">
                <Database className="size-[13px]" strokeWidth={2} /> organoids / B4
                <span className="ml-auto font-sans text-[11px] font-normal text-fd-muted-foreground">read-only</span>
              </div>
              <span className="text-[11.5px] text-fd-muted-foreground">B5 and drafts: not even visible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
