'use client';

/* "Just tell Claude to run it": Kim's next idea, and the two problems with
   it. An LLM on Arkitekt is just another app, so it has to ask for rights
   like one; and when people chat with it, the answer can be a blok instead
   of text. Times, values and scopes are illustrative. */

import type { CSSProperties, ReactNode } from 'react';
import { Bot, Check, Lock, ScrollText, ShieldCheck, X } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { cn } from '@/lib/cn';
import { LoopStyles, Steps, delay, useUid } from './smart-microscopy-anim';

/* --- the cast ------------------------------------------------------------------ */

function KimAvatar({ size = 44 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="flex shrink-0 items-center justify-center rounded-full bg-fd-primary/15 font-bold text-fd-primary ring-1 ring-fd-primary/40"
      style={{ width: size, height: size, fontSize: size * 0.45 }}
    >
      K
    </span>
  );
}

function ClaudeAvatar({ size = 44 }: { size?: number }) {
  return (
    <span aria-hidden className="flex shrink-0 items-center justify-center rounded-xl bg-[#d97757] text-white" style={{ width: size, height: size }}>
      <svg viewBox="-12 -12 24 24" width={size * 0.6} height={size * 0.6}>
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x={-1.6} y={-10} width={3.2} height={9} rx={1.6} fill="currentColor" transform={`rotate(${i * 45})`} />
        ))}
      </svg>
    </span>
  );
}

function ArkitektAvatar({ size = 44 }: { size?: number }) {
  return (
    <span aria-hidden className="flex shrink-0 items-center justify-center rounded-xl bg-fd-primary" style={{ width: size, height: size }}>
      <span className="flex items-center justify-center rounded-lg bg-white/95 p-[3px]" style={{ width: size - 8, height: size - 8 }}>
        <Logo className="size-full" />
      </span>
    </span>
  );
}

/** One chat line: avatar plus bubble, the user's on the right. */
function Say({ who, at, children, className }: { who: 'kim' | 'claude' | 'arkitekt'; at: number; children: ReactNode; className?: string }) {
  const mine = who === 'kim';
  return (
    <div className={cn('sm-in flex items-start gap-3', mine && 'justify-end')} style={delay(at)}>
      {!mine ? who === 'claude' ? <ClaudeAvatar size={38} /> : <ArkitektAvatar size={38} /> : null}
      <div
        className={cn(
          'rounded-2xl px-4 py-2.5 text-[16px] leading-snug',
          mine ? 'rounded-tr-sm bg-fd-primary/12' : 'rounded-tl-sm border border-fd-border bg-fd-card',
          className,
        )}
      >
        {children}
      </div>
      {mine ? <KimAvatar size={38} /> : null}
    </div>
  );
}

/** Swap a card's content once: `before` until `at`, `after` from then on.
    Off the current slide, the after state. */
function swapCss(u: string, name: string, at: number) {
  return `
.${u}-${name}-b { opacity: 0; }
section.present .${u}-${name}-b { animation: ${u}-off 0.25s ease-out ${at}s both; }
section.present .${u}-${name}-a { animation: ${u}-on 0.3s ease-out ${at + 0.1}s both; }
`;
}

const BASE_CSS = (u: string) => `
@keyframes ${u}-on { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-off { from { opacity: 1; } to { opacity: 0; } }
@keyframes ${u}-press { 0%, 100% { transform: none; } 45% { transform: scale(0.9); } }
`;

/* --- Kim's pitch ---------------------------------------------------------------- */


/* --- the two things an agent touches in a lab ---------------------------------- */

/** Why an LLM in a lab is not like an LLM anywhere else, as two little
    scenes drawn like the rest of the story. Left, fragile hardware: Kim asks
    for a brighter image, Claude happily turns the laser to 500 %, from two
    threads at once, and the slide under the objective burns. Right,
    sensitive data: Kim asks Claude to analyse a table of patients, and the
    rows leave the lab for somebody else's cloud. Nothing builds in; only the
    flames flicker and the rows drift. */
export function LlmRisksFigure() {
  const u = useUid();
  const css = `
.${u}-flame { transform-box: fill-box; transform-origin: 50% 100%; animation: ${u}-flame 0.7s ease-in-out infinite alternate; }
.${u}-flame:nth-child(2) { animation-duration: 0.55s; }
.${u}-flame:nth-child(3) { animation-duration: 0.85s; }
@keyframes ${u}-flame { from { transform: scale(1, 0.86) skewX(-4deg); } to { transform: scale(1.06, 1.12) skewX(5deg); } }
.${u}-beam { animation: ${u}-beam 0.5s ease-in-out infinite alternate; }
@keyframes ${u}-beam { from { opacity: 0.55; } to { opacity: 1; } }
.${u}-row { animation: ${u}-row 2.4s linear infinite; }
@keyframes ${u}-row { 0% { opacity: 0; transform: translate(0, 0); } 12% { opacity: 1; } 85% { opacity: 1; } 100% { opacity: 0; transform: translate(196px, -52px); } }
@media (prefers-reduced-motion: reduce) { :is(.${u}-flame, .${u}-beam, .${u}-row) { animation: none; } }
`;
  const ink = 'var(--color-fd-foreground)';
  const paper = 'var(--color-fd-card)';
  const line = 'var(--color-fd-border)';
  const mute = 'var(--color-fd-muted-foreground)';
  const say = 'rounded-2xl px-5 py-2.5 text-[19px] leading-snug';
  const flame = 'M0 0 C -11 -12, 5 -17, -1 -34 C 13 -23, 16 -9, 8 0 Z';
  const scene = (title: string, ask: ReactNode, reply: ReactNode, art: ReactNode) => (
    <div className="flex w-[560px] flex-col gap-3.5">
      <h3 className="text-[32px] font-bold leading-none tracking-[-0.025em]">{title}</h3>
      <div className="flex items-start justify-end gap-3">
        <p className={cn(say, 'rounded-tr-sm bg-fd-primary/12')}>
          <span className="sr-only">Kim: </span>
          {ask}
        </p>
        <KimAvatar size={40} />
      </div>
      <div className="flex items-start gap-3">
        <ClaudeAvatar size={40} />
        <p className={cn(say, 'rounded-tl-sm border border-fd-border bg-fd-card font-semibold')}>
          <span className="sr-only">Claude: </span>
          {reply}
        </p>
      </div>
      {art}
    </div>
  );
  return (
    <div
      className="sm-animate relative mx-auto flex w-[1200px] justify-between"
      role="img"
      aria-label="Two things an agent touches in a lab. Fragile hardware: Kim asks for a brighter image, Claude answers that it is increasing the laser to 500 percent, from two threads at the same time, and the slide under the microscope's objective is on fire. Sensitive data: Kim asks Claude to analyse a table of patients and their diagnoses, and its rows leave the lab for somebody else's cloud."
    >
      <LoopStyles css={css} />
      {scene(
        'Fragile hardware',
        <>Can you make the image a bit brighter?</>,
        <>
          Sure! Increasing the laser to <span className="text-[#dc2626]">500 %</span>, from two threads at the same time.
        </>,
        <svg width={560} height={190} viewBox="0 0 560 190" aria-hidden>
          <path d="M40 176 H520" stroke={line} strokeWidth={4} strokeLinecap="round" />
          {/* the microscope */}
          <g stroke={ink} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" fill={paper}>
            <rect x={196} y={160} width={140} height={14} rx={7} />
            <path d="M318 160 V70 Q318 44 290 44 H276" fill="none" strokeWidth={12} />
            <path d="M318 160 V70 Q318 44 290 44 H276" fill="none" stroke={paper} strokeWidth={6} />
            <rect x={246} y={14} width={34} height={64} rx={6} />
            <rect x={254} y={4} width={18} height={12} rx={3} />
            <rect x={255} y={78} width={16} height={20} rx={3} />
            <rect x={214} y={134} width={100} height={9} rx={3} />
          </g>
          <rect x={236} y={127} width={56} height={7} rx={2} fill="#bfdbfe" stroke={ink} strokeWidth={2} />
          {/* the laser, far too bright */}
          <g className={`${u}-beam`}>
            <path d="M263 98 V128" stroke="#ef4444" strokeOpacity={0.3} strokeWidth={20} strokeLinecap="round" />
            <path d="M263 98 V128" stroke="#ef4444" strokeWidth={6} strokeLinecap="round" />
          </g>
          {/* and what it does to the slide */}
          <g transform="translate(246 128)">
            <path className={`${u}-flame`} d={flame} fill="#f97316" transform="scale(1.1)" />
            <path className={`${u}-flame`} d={flame} fill="#f97316" transform="translate(22 0) scale(1.4)" />
            <path className={`${u}-flame`} d={flame} fill="#f97316" transform="translate(44 0) scale(0.95)" />
            <path d={flame} fill="#fde047" transform="translate(24 0) scale(0.75)" />
          </g>
          <g fill={mute} fillOpacity={0.45}>
            <circle cx={286} cy={62} r={7} />
            <circle cx={298} cy={40} r={10} />
            <circle cx={284} cy={16} r={13} />
          </g>
          {/* the dial, and the two threads turning it */}
          <g transform="translate(446 96)">
            <circle r={46} fill={paper} stroke={ink} strokeWidth={3} />
            <path d="M-32 18 A 36 36 0 0 1 12 -34" fill="none" stroke={line} strokeWidth={7} strokeLinecap="round" />
            <path d="M12 -34 A 36 36 0 0 1 32 18" fill="none" stroke="#ef4444" strokeWidth={7} strokeLinecap="round" />
            <path d="M0 0 L27 12" stroke={ink} strokeWidth={4} strokeLinecap="round" />
            <circle r={5} fill={ink} />
            <text y={66} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize={15} fontWeight={700} fill="#ef4444">
              laser · 500 %
            </text>
          </g>
          {[
            [34, 'thread-1'],
            [78, 'thread-2'],
          ].map(([y, name]) => (
            <g key={name} transform={`translate(34 ${y})`}>
              <rect width={92} height={28} rx={14} fill={paper} stroke={ink} strokeWidth={2} />
              <text x={46} y={19} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize={13} fontWeight={700} fill={ink}>
                {name}
              </text>
              <path d={`M96 14 H176`} stroke={ink} strokeWidth={2} strokeDasharray="5 5" fill="none" />
              <path d="M170 8 L180 14 L170 20" stroke={ink} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          ))}
          <text x={126} y={132} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize={12.5} fill={mute}>
            set_laser_power(500)
          </text>
        </svg>,
      )}
      {scene(
        'Sensitive data',
        <>
          Can you analyze this, Claude?{' '}
          <span className="ml-1 inline-block rounded-md bg-fd-background/70 px-2 py-0.5 align-middle font-mono text-[14px] font-semibold">patients.csv</span>
        </>,
        <>Of course! Uploading 4 812 patients and their diagnoses…</>,
        <svg width={560} height={190} viewBox="0 0 560 190" aria-hidden>
          {/* the lab, and the table that should stay in it */}
          <rect x={20} y={14} width={236} height={164} rx={18} fill="none" stroke={ink} strokeWidth={2.5} strokeDasharray="9 7" />
          <text x={36} y={38} fontFamily="var(--font-mono, monospace)" fontSize={13} fontWeight={700} fill={mute}>
            the lab
          </text>
          <g transform="translate(48 52)">
            <rect width={180} height={112} rx={8} fill={paper} stroke={ink} strokeWidth={3} />
            <path d="M0 26 H180" stroke={ink} strokeWidth={2} />
            <text x={12} y={18} fontFamily="var(--font-mono, monospace)" fontSize={12} fontWeight={700} fill={ink}>
              name · diagnosis
            </text>
            {[0, 1, 2, 3].map((r) => (
              <g key={r} transform={`translate(12 ${38 + r * 19})`}>
                <circle cx={6} cy={5} r={5} fill={mute} fillOpacity={0.6} />
                <rect x={18} y={1} width={56 - r * 6} height={8} rx={4} fill={mute} fillOpacity={0.45} />
                <rect x={92} y={1} width={64 - (r % 2) * 18} height={8} rx={4} fill="#ef4444" fillOpacity={0.6} />
              </g>
            ))}
          </g>
          {/* out it goes */}
          <path d="M236 108 C 300 96, 330 70, 392 60" fill="none" stroke={ink} strokeWidth={2.5} strokeDasharray="7 7" />
          <path d="M382 52 L396 59 L384 69" fill="none" stroke={ink} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
          {[0, 0.8, 1.6].map((d) => (
            <g key={d} className={`${u}-row`} style={{ animationDelay: `${d}s` }}>
              <g transform="translate(214 100)">
                <rect width={44} height={16} rx={4} fill={paper} stroke={ink} strokeWidth={2} />
                <circle cx={9} cy={8} r={3.5} fill={mute} />
                <rect x={17} y={5} width={20} height={6} rx={3} fill="#ef4444" fillOpacity={0.7} />
              </g>
            </g>
          ))}
          {/* somebody else's cloud */}
          <g transform="translate(452 62)">
            <path d="M-62 28 C -86 28, -90 -6, -62 -8 C -62 -40, -16 -48, -4 -24 C 14 -44, 52 -32, 46 -6 C 74 -6, 74 28, 48 28 Z" fill={paper} stroke={ink} strokeWidth={3} strokeLinejoin="round" />
            <g transform="translate(-8 0)">
              <rect x={-17} y={-17} width={34} height={34} rx={9} fill="#d97757" />
              {Array.from({ length: 8 }, (_, k) => (
                <rect key={k} x={-1.3} y={-11} width={2.6} height={8} rx={1.3} fill="#fff" transform={`rotate(${k * 45})`} />
              ))}
            </g>
            <text y={54} x={-8} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize={14} fontWeight={700} fill={ink}>
              somebody else’s cloud
            </text>
          </g>
        </svg>,
      )}
    </div>
  );
}

/** Kim, bored again, with a plan; one click, and Arkitekt answers with two
    problems. */
export function PitchFigure() {
  return (
    <div className="mx-auto w-[1000px]" role="img" aria-label="Kim: still boring, I think I can just tell Claude to run my experiment and the user will chat with it. Arkitekt: two problems with that. One, what is it allowed to do? Two, what does the user chat with?">
      <Steps cues={[1, 3.9]} className="relative flex flex-col gap-6">
      <div className="sm-in flex items-start justify-end gap-4" style={delay(0.3)}>
        <p className="max-w-[760px] rounded-2xl rounded-tr-sm bg-fd-primary/12 px-6 py-4 text-[26px] leading-snug">
          <span className="sr-only">Kim: </span>Still boring. I think I can just tell <span className="font-semibold">Claude</span> to run my experiment, and the user will <span className="font-semibold">chat</span> with it.
        </p>
        <KimAvatar size={56} />
      </div>
      <div className="flex items-start gap-4">
        <span className="sm-pop" style={delay(1.6)}>
          <ArkitektAvatar size={56} />
        </span>
        <div className="flex flex-col gap-3">
          <p className="sm-in rounded-2xl rounded-tl-sm border border-fd-border bg-fd-card px-6 py-4 text-[30px] font-bold leading-snug" style={delay(1.8)}>
            <span className="sr-only">Arkitekt: </span>Two problems with that.
          </p>
          {[
            ['1', 'What is it allowed to do?'],
            ['2', 'What does the user chat with?'],
          ].map(([n, text], i) => (
            <span key={n} className="sm-in flex items-center gap-3 text-[22px] text-fd-muted-foreground" style={delay(2.6 + i * 0.5)}>
              <span className="flex size-[32px] items-center justify-center rounded-full bg-fd-primary text-[16px] font-bold text-fd-primary-foreground">{n}</span>
              {text}
            </span>
          ))}
        </div>
      </div>
      </Steps>
    </div>
  );
}

/* --- problem one: the agent asks for rights ---------------------------------- */

/** The agent on Arkitekt is just another app, and this is what talking to
    it looks like: a chat window in Arkitekt. Kim is signed in, the model
    behind the agent is a setting, and the things an agent normally does
    silently happen in the conversation: it asks Kim for the rights it needs,
    scope by scope, as a card she answers; every action it calls shows up as
    a line; and the pane on the right is the record, with who was behind
    each call. Five beats, one per press of "next": Kim asks; the agent asks
    for rights; Kim approves and it runs; it asks for one more; allowed once,
    and done. */
export function AgentRightsFigure() {
  const u = useUid();
  const t = { ask: 1.3, consent: 1.7, approve: 3.4, run: 4.0, more: 5.2, once: 6.5, done: 7.2 };
  const cues = [1.1, 3.3, 5, 6.3, 8];
  const css = [
    BASE_CSS(u),
    swapCss(u, 'consent', t.approve + 0.35),
    swapCss(u, 'once', t.once + 0.35),
    `section.present .${u}-p1 { animation: ${u}-press 0.35s ease-out ${t.approve}s both; }`,
    `section.present .${u}-p2 { animation: ${u}-press 0.35s ease-out ${t.once}s both; }`,
  ].join('\n');
  const scopes: { text: string; ok: boolean }[] = [
    { text: 'call process_slides', ok: true },
    { text: 'read slides / HE-07', ok: true },
    { text: 'move the arm by hand', ok: false },
    { text: 'delete data', ok: false },
  ];
  const btn = 'flex h-[26px] items-center justify-center rounded-md px-3 text-[12.5px] font-semibold';
  const agent = (
    <span aria-hidden className="flex size-[28px] shrink-0 items-center justify-center rounded-lg bg-fd-foreground text-fd-background">
      <Bot className="size-[18px]" strokeWidth={2.2} />
    </span>
  );
  /** A line the agent says. */
  const says = (at: number, children: ReactNode) => (
    <div className="sm-in flex items-start gap-2.5" style={delay(at)}>
      {agent}
      <div className="rounded-2xl rounded-tl-sm bg-fd-muted px-3.5 py-1.5 text-[14.5px] leading-snug">{children}</div>
    </div>
  );
  /** An action the agent called, as it shows in the conversation. */
  const ran = (at: number, call: string, on: string) => (
    <div className="sm-in ml-[38px] flex w-fit items-center gap-2 rounded-md border border-fd-border px-2.5 py-0.5 font-mono text-[12px]" style={delay(at)}>
      <Check className="size-[13px] text-emerald-600" strokeWidth={3} />
      <span>
        ran <span className="font-semibold">{call}</span> · {on}
      </span>
    </div>
  );
  return (
    <div
      className="relative mx-auto h-[500px] w-[1100px]"
      role="img"
      aria-label="A chat window in Arkitekt. Kim is signed in and asks the agent to run the four-stain panel on slide HE-07. In the conversation, the agent asks for rights on Kim's hub: to call process_slides on the stainstorm app and read the slides HE-07 dataset, but not to move the arm by hand or delete data. Kim approves in the chat; the agent runs the workflow. To segment CD20 again it asks once more, to use the GPU server, and Kim allows it once. A pane beside the chat shows the record: both calls, each by Kim, with an agent."
    >
      <LoopStyles css={css} />
      <Steps live cues={cues} className="relative size-full">
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-md">
          {/* the window's title bar */}
          <div className="flex h-[40px] shrink-0 items-center gap-2.5 border-b-2 border-fd-border bg-fd-muted px-4">
            <Logo className="size-[20px]" />
            <span className="text-[15px] font-semibold">Arkitekt · chat</span>
            <span className="ml-3 flex items-center gap-1.5 rounded-full border border-fd-border bg-fd-card px-2.5 py-0.5 font-mono text-[11.5px] text-fd-muted-foreground">
              agent: <span className="font-semibold text-fd-foreground">local LLM</span> ▾
            </span>
            <span className="ml-auto flex items-center gap-2 text-[13px] text-fd-muted-foreground">
              signed in as <span className="font-semibold text-fd-foreground">Kim</span>
              <KimAvatar size={24} />
            </span>
          </div>
          <div className="flex min-h-0 flex-1">
            {/* the conversation */}
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex min-h-0 flex-1 flex-col gap-[5px] overflow-hidden px-5 py-2.5">
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm bg-fd-primary px-3.5 py-1.5 text-[14.5px] leading-snug text-fd-primary-foreground">Run the four-stain panel on slide HE-07.</div>
                </div>
                {says(t.ask, 'I need a few rights on your hub first.')}
                {/* the request, in the conversation */}
                <div className="sm-pop ml-[38px] w-[560px] rounded-xl border-2 border-fd-primary/60 bg-fd-card p-2.5" style={delay(t.consent)}>
                  <div className="mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="size-[15px] text-fd-primary" strokeWidth={2.2} />
                    <span className="text-[14px] font-semibold">The agent is asking for</span>
                    <span className="ml-auto text-[12px] text-fd-muted-foreground">on Kim’s hub</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {scopes.map((sc, i) => (
                      <span key={sc.text} className={cn('sm-in flex items-center gap-1.5 rounded-md px-2 py-0.5 font-mono text-[12px]', sc.ok ? 'bg-fd-primary/8' : 'text-fd-muted-foreground line-through')} style={delay(t.consent + 0.3 + i * 0.2)}>
                        {sc.ok ? <Check className="size-[13px] shrink-0 text-emerald-600" strokeWidth={3} /> : <X className="size-[13px] shrink-0 text-red-600" strokeWidth={3} />}
                        {sc.text}
                      </span>
                    ))}
                  </div>
                  <div className="relative mt-2 h-[26px]">
                    <span className={`${u}-consent-b absolute inset-0 flex gap-2`}>
                      <span className={cn(`${u}-p1 bg-fd-primary text-fd-primary-foreground`, btn)}>Approve</span>
                      <span className={cn('border border-fd-border text-fd-muted-foreground', btn)}>Deny</span>
                    </span>
                    <span className={`${u}-consent-a absolute inset-0 flex items-center gap-1.5 text-[13px] font-semibold text-emerald-600`}>
                      <Check className="size-[15px]" strokeWidth={3} /> granted by Kim · these scopes only · until 18:00
                    </span>
                  </div>
                </div>
                {ran(t.run, 'process_slides', 'stainstorm')}
                {says(t.more, 'CD20 looks patchy. To segment it again I need the GPU server. That’s new, so I’m asking.')}
                <div className="sm-pop ml-[38px] flex w-[560px] items-center gap-2.5 rounded-xl border-2 border-amber-500/60 bg-fd-card px-2.5 py-1.5" style={delay(t.more + 0.3)}>
                  <Lock className="size-[15px] shrink-0 text-amber-600" strokeWidth={2.4} />
                  <span className="text-[13.5px] font-semibold">One more:</span>
                  <span className="font-mono text-[12px] text-fd-muted-foreground">call segment_image · gpu-server</span>
                  <div className="relative ml-auto h-[26px] w-[130px]">
                    <span className={cn(`${u}-once-b ${u}-p2 absolute inset-0 bg-fd-primary text-fd-primary-foreground`, btn)}>Allow once</span>
                    <span className={`${u}-once-a absolute inset-0 flex items-center justify-end gap-1.5 text-[13px] font-semibold text-emerald-600`}>
                      <Check className="size-[15px]" strokeWidth={3} /> allowed once
                    </span>
                  </div>
                </div>
                {ran(t.once + 0.6, 'segment_image', 'gpu-server')}
                {says(t.done, 'Done: four stains, CD20 took two rounds.')}
              </div>
              {/* the composer */}
              <div className="flex h-[46px] shrink-0 items-center gap-2 border-t border-fd-border px-4">
                <span className="flex h-[30px] flex-1 items-center rounded-full border border-fd-border bg-fd-background px-4 text-[13.5px] text-fd-muted-foreground">Message the agent…</span>
                <span className="flex size-[30px] items-center justify-center rounded-full bg-fd-primary text-[15px] font-bold text-fd-primary-foreground">↑</span>
              </div>
            </div>
            {/* the record, beside the conversation */}
            <div className="flex w-[300px] shrink-0 flex-col gap-2 border-l-2 border-fd-border bg-fd-muted/40 p-3.5">
              <span className="flex items-center gap-1.5 text-[13.5px] font-semibold">
                <ScrollText className="size-[15px] text-fd-primary" strokeWidth={2} /> the record
              </span>
              {[
                { at: t.run + 0.3, time: '14:21', call: 'process_slides', on: 'stainstorm', who: 'granted until 18:00' },
                { at: t.once + 0.9, time: '15:02', call: 'segment_image', on: 'gpu-server', who: 'allowed once' },
              ].map((r) => (
                <div key={r.call} className="sm-in flex flex-col gap-0.5 border-t border-fd-border pt-2 font-mono text-[12px]" style={delay(r.at)}>
                  <span className="flex justify-between">
                    <span className="font-semibold">{r.call}</span>
                    <span className="text-fd-muted-foreground">{r.time}</span>
                  </span>
                  <span className="text-fd-muted-foreground">on {r.on}</span>
                  <span className="font-sans text-[12.5px]">
                    by <span className="font-semibold text-fd-primary">Kim · with an agent</span>
                  </span>
                  <span className="font-sans text-[11.5px] text-fd-muted-foreground">{r.who}</span>
                </div>
              ))}
              <span className="mt-auto text-[12px] leading-snug text-fd-muted-foreground">Every call the agent makes lands here, under the name of whoever was chatting.</span>
            </div>
          </div>
        </div>
      </Steps>
    </div>
  );
}

/* --- problem two: the chat answers with a blok ------------------------------------ */

const PREVIEW = (bright: number) =>
  `radial-gradient(circle at 50% 50%, rgba(233,251,255,${bright}) 0, rgba(122,216,242,${bright * 0.9}) 16%, rgba(40,150,200,${bright * 0.7}) 34%, transparent 62%), #06101b`;

/** People do want to chat; the chat just shouldn't answer with text or a
    generated UI. Claude hands over the capture blok the openuc2 app ships:
    Kim turns the exposure up and captures, then tries 900 ms, which the
    action's own range stops before anything reaches the laser. Four beats,
    one per click: Kim asks; the blok; 35 ms and capture; 900 ms refused. */
export function BlokChatFigure() {
  const u = useUid();
  const t = { blok: 1.5, turn: 2.9, capture: 3.8, typo: 5.4 };
  const cues = [0.95, 2.75, 5.2, 6.5];
  const css = [
    BASE_CSS(u),
    `.${u}-knob { transform: translateX(28px); }`,
    `section.present .${u}-knob { animation: ${u}-knob 0.8s cubic-bezier(.5,0,.3,1) ${t.turn}s both; }`,
    `@keyframes ${u}-knob { from { transform: none; } to { transform: translateX(28px); } }`,
    // value: 20 → 35 → 900
    `.${u}-v20, .${u}-v35 { opacity: 0; }`,
    `section.present .${u}-v20 { animation: ${u}-off 0.1s linear ${t.turn + 0.4}s both; }`,
    `section.present .${u}-v35 { animation: ${u}-on 0.1s linear ${t.turn + 0.4}s both, ${u}-off 0.1s linear ${t.typo}s forwards; }`,
    `.${u}-v900, .${u}-bad { opacity: 1; }`,
    `section.present :is(.${u}-v900, .${u}-bad) { animation: ${u}-on 0.15s linear ${t.typo}s both; }`,
    `section.present .${u}-press { animation: ${u}-press 0.35s ease-out ${t.capture}s both; }`,
    `.${u}-shot { opacity: 1; }`,
    `section.present .${u}-shot { animation: ${u}-on 0.5s ease-out ${t.capture + 0.3}s both; }`,
    `.${u}-field { border-color: #dc2626; }`,
    `section.present .${u}-field { animation: ${u}-red 0.2s linear ${t.typo}s both; }`,
    `@keyframes ${u}-red { from { border-color: var(--color-fd-border); } to { border-color: #dc2626; } }`,
    `@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-knob) { animation: none; } }`,
  ].join('\n');
  const points: { title: string; text: string; at: number }[] = [
    { title: 'Shipped with the action', text: 'The openuc2 app brings its capture blok. The agent hands it over; nobody generates a UI.', at: t.blok + 0.6 },
    { title: 'Every press is a call', text: 'capture(35 ms), by Kim, through the blok: on the record like any other call.', at: t.capture + 0.6 },
    { title: 'Typed, so it says no', text: '900 ms is outside the action’s range, so it stops in the blok and never reaches the laser.', at: t.typo + 0.4 },
  ];
  return (
    <div
      className="relative mx-auto h-[440px] w-[1180px]"
      role="img"
      aria-label="Kim asks to tune the exposure herself. Claude answers with the capture blok that ships with the openuc2 app. She turns the exposure from 20 to 35 milliseconds and captures; the preview gets brighter and the call is recorded. Then she types 900 milliseconds, which is outside the action's range of 1 to 500, and the blok refuses it."
    >
      <LoopStyles css={css} />
      <Steps cues={cues} className="relative size-full">

      {/* the chat, answering with a blok */}
      <div className="sm-fade absolute left-0 top-0 flex h-[430px] w-[640px] flex-col gap-3 p-4" style={delay(0.1)}>
        <Say who="kim" at={0.3}>Let me tune the exposure on HE-07 myself.</Say>
        <Say who="claude" at={1.0} className="w-[520px]">
          Here’s the capture blok for openuc2:
          <div className="sm-pop mt-2.5 rounded-xl border-2 border-fd-primary/60 bg-fd-primary/5 p-3" style={delay(t.blok)}>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[15px] font-semibold">Capture</span>
              <span className="font-mono text-[11.5px] text-fd-muted-foreground">openuc2</span>
              <span className="ml-auto rounded-full bg-fd-primary px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wide text-fd-primary-foreground">blok</span>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-1 flex-col gap-1.5">
                <span className="text-[12.5px] text-fd-muted-foreground">exposure</span>
                <div className="flex items-center gap-2">
                  <span className={`${u}-field relative flex h-[34px] w-[100px] items-center rounded-lg border-2 border-fd-border bg-fd-card px-2.5 font-mono text-[16px] font-bold`}>
                    <span className={`${u}-v20 absolute left-2.5`}>20</span>
                    <span className={`${u}-v35 absolute left-2.5`}>35</span>
                    <span className={`${u}-v900 absolute left-2.5 text-red-600`}>900</span>
                  </span>
                  <span className="font-mono text-[14px] text-fd-muted-foreground">ms</span>
                </div>
                <div className="relative mt-1 h-[14px] w-[200px]">
                  <span className="absolute inset-x-0 top-[5px] h-[4px] rounded-full bg-fd-border" />
                  <span className={`${u}-knob absolute left-[6px] top-0 size-[14px] rounded-full bg-fd-primary shadow`} />
                </div>
                <span className="font-mono text-[11px] text-fd-muted-foreground">range 1–500 ms</span>
                <span className={`${u}-bad flex items-center gap-1 text-[12px] font-semibold text-red-600`}>
                  <X className="size-[13px]" strokeWidth={3} /> 900 ms is outside 1–500 ms
                </span>
                <span className={cn(`${u}-press mt-auto flex h-[32px] w-[120px] items-center justify-center rounded-lg bg-fd-primary text-[14px] font-semibold text-fd-primary-foreground`)}>Capture</span>
              </div>
              <div className="relative size-[150px] shrink-0 overflow-hidden rounded-lg border border-fd-border" style={{ background: PREVIEW(0.45) }}>
                <div className={`${u}-shot absolute inset-0`} style={{ background: PREVIEW(1) } as CSSProperties} />
                <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1 font-mono text-[10px] text-white">live preview</span>
              </div>
            </div>
          </div>
        </Say>
      </div>

      {/* why this is different */}
      <div className="absolute left-[680px] top-[6px] flex w-[500px] flex-col gap-4">
        {points.map((p) => (
          <div key={p.title} className="sm-in flex gap-3" style={delay(p.at)}>
            <Check className="mt-1 size-[20px] shrink-0 text-emerald-600" strokeWidth={3} />
            <span className="flex flex-col gap-1">
              <span className="text-[20px] font-semibold">{p.title}</span>
              <span className="text-[16px] leading-snug text-fd-muted-foreground">{p.text}</span>
            </span>
          </div>
        ))}
      </div>
      </Steps>
    </div>
  );
}
