'use client';

/* Defeating the four horsemen of Kim's nights, one slide each: the
   horseman stands small in the top-right corner, what Arkitekt does about
   him plays in the middle, and one click (a reveal.js fragment) strikes him
   down where he stands.

   Connection → the hub, directly or over WireGuard, and reconnects; Error handling & observability → the
   record, resumable workflows, and task.hold to ask a person; Data management → mikro and its
   coordinate systems; Reproducibility → share the script and the data with
   a link. Values (times, versions, coordinates) are illustrative. */

import type { CSSProperties, ReactNode } from 'react';
import { Fragment } from '@revealjs/react';
import { Check, Cpu, Database, Image as ImageIcon, Laptop, Link2, Lock, Microscope, RotateCcw, ScrollText, Server, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { cn } from '@/lib/cn';
import { LoopStyles, PRIMARY, delay, useUid } from './smart-microscopy-anim';
import { HorsemanArt, HorsemanBanner, horsemanAmbientCss } from './smart-microscopy-figures';
import type { NIGHTS } from './smart-microscopy-figures';

type NightKey = keyof typeof NIGHTS;

/** The figure in the middle, and the horseman small in the top-right corner
    of the slide (up beside the title). With `kill`, one click (a reveal.js
    fragment) strikes him down there. */
export function DefeatFrame({ night, weapon, kill = true, children }: { night: NightKey; weapon: string; kill?: boolean; children: ReactNode }) {
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
      {kill ? <Fragment as="span" index={1} className={`${u}-kill absolute`} /> : null}
      <LoopStyles css={css} />
      <div className="absolute inset-y-0 left-1/2 w-[810px] -translate-x-1/2">{children}</div>
      {/* the horseman, up in the corner */}
      <div className="pointer-events-none absolute right-[-6px] top-[-182px] flex w-[190px] flex-col items-center">
        <div className={`${u}-hz sm-in`} style={delay(0.1)}>
          <HorsemanArt night={night} u={u} width={180} />
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

/* --- 1 · connection: everything to the hub, direct or WireGuard ------------------------------------- */

const MACHINES: { name: string; where: string; icon: LucideIcon; tunnel: boolean; x: number; y: number }[] = [
  { name: 'microscope PC', where: 'institute network', icon: Microscope, tunnel: false, x: 20, y: 70 },
  { name: 'GPU server', where: 'institute network', icon: Server, tunnel: false, x: 20, y: 296 },
  { name: 'laptop', where: 'at home tonight', icon: Laptop, tunnel: true, x: 620, y: 70 },
  { name: 'ESP32 pump', where: 'its own Wi-Fi', icon: Cpu, tunnel: true, x: 620, y: 296 },
];

/** The Tailscale mark: a 3 × 3 grid of dots, the middle row and the bottom
    centre solid. */
function TailscaleMark({ size = 18, className }: { size?: number; className?: string }) {
  const solid = [3, 4, 5, 7];
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" className={className} aria-label="Tailscale">
      {Array.from({ length: 9 }, (_, i) => (
        <circle key={i} cx={5 + (i % 3) * 10} cy={5 + Math.floor(i / 3) * 10} r={3.6} fill="currentColor" opacity={solid.includes(i) ? 1 : 0.28} />
      ))}
    </svg>
  );
}

/** Star, not mesh: every app connects to the hub, either directly (same
    network) or through a WireGuard tunnel Arkitekt sets up with Tailscale.
    Then the pump's Wi-Fi drops, and the link comes back on its own. */
export function ConnectionWinFigure() {
  const u = useUid();
  const W = 810;
  const hub = { x: 295, y: 172, w: 220, h: 96 };
  const cw = 170;
  const ch = 80;
  const link = (m: (typeof MACHINES)[number]) => {
    const left = m.x < hub.x;
    const mx = left ? m.x + cw : m.x;
    const my = m.y + ch / 2;
    const hx = left ? hub.x : hub.x + hub.w;
    const hy = m.y < hub.y ? hub.y + 26 : hub.y + hub.h - 26;
    return { d: `M${mx} ${my} L${hx} ${hy}`, mid: [(mx + hx) / 2, (my + hy) / 2] as const };
  };
  const links = MACHINES.map(link);
  const pump = 3;
  const period = 9;
  const cut = 5.2; // first drop, seconds after arrival
  const cyc = (name: string) => `section.present .${u}-${name} { animation: ${u}-${name} ${period}s linear ${cut - 0.4 * period}s infinite both; }`;
  // one cycle: 0–40% connected · 40–62% dropped, retrying · 62–92% back
  const css = `
.${u}-run { position: absolute; left: 0; top: 0; }
.${u}-dot { display: block; width: 11px; height: 11px; border-radius: 9999px; background: var(--color-fd-primary); box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-fd-primary) 25%, transparent); }
section.present .${u}-run { animation: ${u}-along var(--t) linear var(--d) infinite both; }
@keyframes ${u}-along { from { offset-distance: 0%; } to { offset-distance: 100%; } }
:is(.${u}-cut, .${u}-retry, .${u}-back) { opacity: 0; }
${cyc('ok')}
${cyc('cut')}
${cyc('retry')}
${cyc('back')}
@keyframes ${u}-ok { 0%, 39.5% { opacity: 1; } 40%, 61.5% { opacity: 0.15; } 62%, 100% { opacity: 1; } }
@keyframes ${u}-cut { 0%, 39.5% { opacity: 0; } 40%, 61.5% { opacity: 1; } 62%, 100% { opacity: 0; } }
@keyframes ${u}-retry { 0%, 39.5% { opacity: 0; } 40%, 61.5% { opacity: 1; } 62%, 100% { opacity: 0; } }
@keyframes ${u}-back { 0%, 61.5% { opacity: 0; transform: scale(0.8); } 63% { opacity: 1; transform: scale(1.08); } 66%, 90% { opacity: 1; transform: none; } 93%, 100% { opacity: 0; } }
.${u}-spin { animation: ${u}-spin 0.9s linear infinite; transform-box: fill-box; transform-origin: center; display: inline-block; }
@keyframes ${u}-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-ok, .${u}-cut, .${u}-retry, .${u}-back, .${u}-run) { animation: none; } }
`;
  return (
    <div className="relative size-full" role="img" aria-label="Every app connects to the Arkitekt hub: the microscope PC and GPU server directly on the institute network, the laptop at home and the ESP32 pump on its own Wi-Fi through WireGuard tunnels set up with Tailscale. The pump's Wi-Fi drops; Arkitekt retries, reconnects, and delivers the call that was waiting.">
      <LoopStyles css={css} />

      {/* legend */}
      <div className="sm-in absolute left-1/2 top-[0px] flex -translate-x-1/2 items-center gap-6 whitespace-nowrap text-[14px]" style={delay(0.2)}>
        <span className="flex items-center gap-2">
          <svg width={36} height={10} aria-hidden>
            <path d="M2 5 L34 5" stroke={PRIMARY} strokeWidth={3} />
          </svg>
          <span className="font-semibold">direct</span>
          <span className="text-fd-muted-foreground">same network</span>
        </span>
        <span className="flex items-center gap-2">
          <svg width={36} height={14} aria-hidden>
            <path d="M2 7 L34 7" stroke={PRIMARY} strokeOpacity={0.2} strokeWidth={12} strokeLinecap="round" />
            <path d="M2 7 L34 7" stroke={PRIMARY} strokeWidth={2} strokeDasharray="4 3" />
          </svg>
          <span className="font-semibold">WireGuard</span>
          <span className="flex items-center gap-1 text-fd-muted-foreground">
            via <TailscaleMark size={15} className="text-fd-foreground" /> Tailscale, from anywhere
          </span>
        </span>
      </div>

      <svg width={W} height={440} viewBox={`0 0 ${W} 440`} className="absolute inset-0" aria-hidden>
        {MACHINES.map((m, i) => {
          const d = links[i].d;
          const body = m.tunnel ? (
            <>
              <path className="sm-draw" style={delay(0.9 + i * 0.3)} pathLength={1} strokeDasharray="1" d={d} fill="none" stroke={PRIMARY} strokeOpacity={0.2} strokeWidth={18} strokeLinecap="round" />
              <path className="sm-fade" style={delay(1.4 + i * 0.3)} d={d} fill="none" stroke={PRIMARY} strokeWidth={2.4} strokeDasharray="7 5" />
            </>
          ) : (
            <path className="sm-draw" style={delay(0.9 + i * 0.3)} pathLength={1} strokeDasharray="1" d={d} fill="none" stroke={PRIMARY} strokeWidth={3.2} />
          );
          return (
            <g key={m.name} className={i === pump ? `${u}-ok` : undefined}>
              {body}
            </g>
          );
        })}
        {/* the drop */}
        <g className={`${u}-cut`}>
          <path d={links[pump].d} fill="none" stroke="#dc2626" strokeWidth={3} strokeDasharray="3 8" />
          <g transform={`translate(${links[pump].mid[0]} ${links[pump].mid[1]})`}>
            <circle r={15} fill="#fff" stroke="#dc2626" strokeWidth={3} />
            <path d="M-6 -6 L6 6 M6 -6 L-6 6" stroke="#dc2626" strokeWidth={3.4} strokeLinecap="round" />
          </g>
        </g>
      </svg>

      {/* tunnel badges */}
      {MACHINES.map((m, i) =>
        m.tunnel ? (
          <span
            key={`b${m.name}`}
            className={cn('sm-pop absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border-2 border-fd-primary/50 bg-fd-card px-2 py-0.5 shadow-sm', i === pump && `${u}-ok`)}
            style={{ left: links[i].mid[0], top: links[i].mid[1] - (i === pump ? 0 : 0), ...delay(1.6 + i * 0.3) }}
          >
            <Lock className="size-[12px] text-fd-primary" strokeWidth={2.6} />
            <TailscaleMark size={14} className="text-fd-foreground" />
          </span>
        ) : null,
      )}

      {/* traffic, both ways */}
      {MACHINES.map((m, i) => (
        <span key={`f${m.name}`} className={cn('sm-fade absolute left-0 top-0', i === pump && `${u}-ok`)} style={delay(2.4 + i * 0.2)}>
          <span className={`${u}-run`} style={{ offsetPath: `path('${links[i].d}')`, '--t': `${1.5 + (i % 2) * 0.3}s`, '--d': `${2.4 + i * 0.35}s` } as CSSProperties}>
            <span className={`${u}-dot`} />
          </span>
        </span>
      ))}

      {/* the hub */}
      <div className="absolute" style={{ left: hub.x, top: hub.y, width: hub.w, height: hub.h }}>
        <div className="sm-pop flex size-full flex-col items-center justify-center gap-1 rounded-2xl bg-fd-primary text-fd-primary-foreground shadow-xl" style={delay(0.2)}>
          <span className="flex items-center gap-2.5">
            <span className="flex size-[44px] items-center justify-center rounded-xl bg-white/95">
              <Logo className="size-[36px]" />
            </span>
            <span className="text-[21px] font-bold leading-tight">Arkitekt hub</span>
          </span>
          <span className="whitespace-nowrap font-mono text-[12px] opacity-90">no IPs · no open ports</span>
        </div>
      </div>

      {/* the machines */}
      {MACHINES.map((m, i) => {
        const Icon = m.icon;
        return (
          <div key={m.name} className="absolute" style={{ left: m.x, top: m.y, width: cw }}>
            <div className={cn('sm-pop relative flex flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm')} style={{ height: ch, ...delay(0.35 + i * 0.12) }}>
              <Icon className="size-[24px] text-fd-primary" strokeWidth={1.8} />
              <span className="text-[16px] font-semibold leading-tight">{m.name}</span>
              <span className="text-[12px] text-fd-muted-foreground">{m.where}</span>
            </div>
          </div>
        );
      })}

      {/* the pump drops off, and comes back */}
      <div className="absolute" style={{ left: MACHINES[pump].x, top: MACHINES[pump].y + ch + 10, width: cw + 20 }}>
        <span className={`${u}-retry absolute left-0 top-0 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-amber-500/15 px-2.5 py-1 font-mono text-[12px] font-semibold text-amber-700`}>
          <RotateCcw className={`${u}-spin size-[13px]`} strokeWidth={2.6} /> Wi-Fi gone · reconnecting…
        </span>
        <span className={`${u}-back absolute left-0 top-0 flex flex-col whitespace-nowrap rounded-xl bg-emerald-500/15 px-2.5 py-1 font-mono text-[12px] font-semibold text-emerald-700`}>
          <span className="flex items-center gap-1.5">
            <Check className="size-[13px]" strokeWidth={3} /> reconnected after 2.1 s
          </span>
          <span className="font-normal">waiting pump call delivered</span>
        </span>
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
@media (prefers-reduced-motion: reduce) { section.present .${u}-slide { animation: none; } }
`;
  return (
    <div className="relative size-full" role="img" aria-label="Kim's workflow calls task.hold when no organoid is in view. The run pauses and Orkestrator asks her to readjust the slide; she nudges it, presses resume, and the run carries on from where it stopped.">
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
        <div className="sm-pop relative h-[150px] rounded-2xl border-2 border-fd-border bg-fd-card p-3.5 shadow-md" style={delay(holdAt)}>
          <div className={`${u}-held absolute inset-3.5 flex flex-col gap-2`}>
            <span className="flex items-center gap-2 text-[14px] font-semibold text-amber-700">
              <span className="flex size-[22px] items-center justify-center rounded-full bg-amber-500/20">⏸</span> run 42 is on hold
            </span>
            <span className="text-[15px] font-semibold leading-snug">Nothing in view: readjust the slide.</span>
            <span className="mt-auto flex gap-2">
              <span className={`${u}-press flex h-[32px] flex-1 items-center justify-center rounded-lg bg-fd-primary text-[14px] font-semibold text-fd-primary-foreground`}>Resume</span>
              <span className="flex h-[32px] w-[90px] items-center justify-center rounded-lg border border-fd-border text-[14px] text-fd-muted-foreground">Cancel</span>
            </span>
          </div>
          <div className={`${u}-go absolute inset-3.5 flex flex-col gap-1.5`}>
            <span className="flex items-center gap-2 text-[14px] font-semibold text-fd-primary">
              <RotateCcw className="size-[16px]" strokeWidth={2.4} /> resumed by Kim · 14:07:12
            </span>
            <span className="sm-in font-mono text-[13px]" style={delay(resumeAt + 0.8)}>
              snap ✓ · find_largest → x 1204 · y 830 ✓
            </span>
            <span className="sm-in font-mono text-[13px]" style={delay(resumeAt + 1.3)}>
              move_to ✓ · snap(100 ms) → image_0043 ✓
            </span>
          </div>
        </div>

        {/* the slide on the stage */}
        <div className="sm-in relative mt-4 h-[200px] overflow-hidden rounded-2xl border-2 border-fd-border bg-[#0b1220]" style={delay(holdAt + 0.4)}>
          <div className={`${u}-slide absolute left-[150px] top-[40px] h-[120px] w-[230px] rounded-md border border-white/40 bg-white/10`}>
            <span className="absolute left-[46px] top-[36px] size-[48px] rounded-full" style={{ background: 'radial-gradient(circle, #c6f6ff 0, #4fc3e6 30%, rgba(40,140,190,0.5) 55%, transparent 72%)' }} />
          </div>
          <div className="absolute left-[118px] top-[56px] size-[96px] rounded-sm border-[3px] border-dashed border-amber-400" />
          <span className="absolute left-[118px] top-[156px] font-mono text-[11px] text-amber-300">field of view</span>
          <span className="sm-fade absolute bottom-2 right-3 text-[13px] font-semibold text-white/85" style={delay(nudgeAt)}>
            Kim nudges the slide ←
          </span>
        </div>
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

/* --- 4 · reproducibility: share it with a link ------------------------------------ */

const BUNDLE: { icon: LucideIcon; name: string; detail: string }[] = [
  { icon: Workflow, name: 'find_centre_capture.py', detail: 'v1.0.2 · the exact script' },
  { icon: ImageIcon, name: 'image_0042, image_0043', detail: 'with coordinates' },
  { icon: ScrollText, name: 'record of run 41', detail: 'stardist 0.9.1 · thresh 0.47 · seed 42' },
];

function BundleRows({ start, step, tick }: { start: number; step: number; tick?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {BUNDLE.map((b, i) => {
        const Icon = b.icon;
        return (
          <div key={b.name} className="sm-in flex items-center gap-3 rounded-xl border border-fd-border bg-fd-background/60 px-3 py-2" style={delay(start + i * step)}>
            <Icon className="size-[20px] shrink-0 text-fd-primary" strokeWidth={1.9} />
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-mono text-[13.5px] font-semibold">{b.name}</span>
              <span className="truncate text-[12px] text-fd-muted-foreground">{b.detail}</span>
            </span>
            {tick !== undefined ? <Check className="sm-pop ml-auto size-[16px] shrink-0 text-emerald-600" strokeWidth={3} style={delay(tick + i * step)} /> : null}
          </div>
        );
      })}
    </div>
  );
}

export function ShareWinFigure() {
  const u = useUid();
  const linkAt = 2.2;
  const flyAt = 2.9;
  const landAt = flyAt + 1.1;
  const runAt = landAt + 1.4;
  const css = `
.${u}-fly { opacity: 0; }
section.present .${u}-fly { animation: ${u}-fly 1.1s cubic-bezier(.5,0,.3,1) ${flyAt}s both; }
@keyframes ${u}-fly { 0% { opacity: 0; transform: none; } 10% { opacity: 1; } 85% { opacity: 1; transform: translateX(412px); } 100% { opacity: 0; transform: translateX(412px); } }
section.present .${u}-press { animation: ${u}-press 0.35s ease-out var(--d) both; }
@keyframes ${u}-press { 0%, 100% { transform: none; } 45% { transform: scale(0.92); } }
`;
  const card = 'rounded-2xl border-2 border-fd-border bg-fd-card p-3.5 shadow-sm';
  return (
    <div className="relative size-full" role="img" aria-label="Kim publishes the workflow script, the images with their coordinates and the record of run 41 as one link. Reviewer 2 opens it on their own hub, presses run again, and gets the same result.">
      <LoopStyles css={css} />
      {/* Kim's side */}
      <div className={cn('sm-pop absolute left-0 top-[8px] w-[330px]', card)} style={delay(0.2)}>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="flex size-[34px] items-center justify-center rounded-lg bg-fd-primary">
            <span className="flex size-[28px] items-center justify-center rounded-md bg-white/95">
              <Logo className="size-[24px]" />
            </span>
          </span>
          <span className="text-[17px] font-semibold">Kim’s hub</span>
        </div>
        <BundleRows start={0.5} step={0.3} />
        <div className={`${u}-press sm-pop mt-3 flex h-[36px] items-center justify-center rounded-lg bg-fd-primary text-[15px] font-semibold text-fd-primary-foreground`} style={delay(1.6)}>
          Publish
        </div>
      </div>
      {/* the link */}
      <div className="absolute left-0 top-[312px] w-[330px]">
        <div className="sm-pop flex items-center gap-2 rounded-full border-2 border-fd-primary/60 bg-fd-card px-3.5 py-2 shadow-md" style={delay(linkAt)}>
          <Link2 className="size-[18px] text-fd-primary" strokeWidth={2.2} />
          <span className="font-mono text-[13.5px] font-semibold">hub.kim-lab.org/s/run-41</span>
        </div>
      </div>
      <div className={`${u}-fly absolute left-[60px] top-[180px]`}>
        <div className="flex items-center gap-2 rounded-full bg-fd-primary px-3 py-1.5 text-fd-primary-foreground shadow-lg">
          <Link2 className="size-[16px]" strokeWidth={2.4} />
          <span className="font-mono text-[12.5px] font-semibold">/s/run-41</span>
        </div>
      </div>
      <svg width={810} height={440} viewBox="0 0 810 440" className="pointer-events-none absolute inset-0" aria-hidden>
        <path className="sm-draw" style={delay(flyAt - 0.2)} pathLength={1} strokeDasharray="1" d="M340 196 L462 196" fill="none" stroke={PRIMARY} strokeWidth={2.6} />
        <path className="sm-fade" style={delay(flyAt + 0.2)} d="M456 189 L466 196 L456 203" fill="none" stroke={PRIMARY} strokeWidth={2.6} strokeLinejoin="round" />
      </svg>

      {/* Reviewer 2's side */}
      <div className={cn('sm-pop absolute right-0 top-[8px] w-[330px]', card)} style={delay(landAt - 0.3)}>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="flex size-[34px] items-center justify-center rounded-lg bg-fd-muted text-fd-muted-foreground">
            <Server className="size-[18px]" strokeWidth={2} />
          </span>
          <span className="text-[17px] font-semibold">another lab’s hub</span>
          <span className="ml-auto -rotate-3 rounded border border-black/70 bg-white px-1.5 py-0.5 font-mono text-[10px] font-extrabold text-red-700">REVIEWER 2</span>
        </div>
        <BundleRows start={landAt} step={0.2} tick={landAt + 0.3} />
        <div className={`${u}-press sm-pop mt-3 flex h-[36px] items-center justify-center rounded-lg bg-fd-primary text-[15px] font-semibold text-fd-primary-foreground`} style={delay(runAt)}>
          ▶ Run it again
        </div>
      </div>
      <div className="absolute right-0 top-[312px] w-[330px]">
        <div className="sm-pop flex items-center gap-2 rounded-xl border-2 border-emerald-500/60 bg-emerald-500/8 px-3.5 py-2" style={delay(runAt + 1.1)}>
          <Check className="size-[18px] text-emerald-600" strokeWidth={3} />
          <span className="text-[14.5px] font-semibold">sphericity 0.41 · same as run 41</span>
        </div>
        <span className="sm-fade mt-2 block text-right font-serif text-[16px] italic text-fd-muted-foreground" style={delay(runAt + 2)}>
          Reviewer 2: “…fine.”
        </span>
      </div>
    </div>
  );
}

