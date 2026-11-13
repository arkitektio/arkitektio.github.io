'use client';

/* "Just tell Claude to run it": Kim's next idea, and the two problems with
   it. An LLM on Arkitekt is just another app, so it has to ask for rights
   like one; and when people chat with it, the answer can be a blok instead
   of text. Times, values and scopes are illustrative. */

import type { CSSProperties, ReactNode } from 'react';
import { Check, Lock, ScrollText, ShieldCheck, X } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { cn } from '@/lib/cn';
import { LoopStyles, delay, useUid } from './smart-microscopy-anim';

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

/** Kim, bored again, with a plan; Arkitekt, with two problems. */
export function PitchFigure() {
  return (
    <div className="mx-auto flex w-[1000px] flex-col gap-6" role="img" aria-label="Kim: still boring, I think I can just tell Claude to run my experiment and the user will chat with it. Arkitekt: two problems with that. One, what is it allowed to do? Two, what does the user chat with?">
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
    </div>
  );
}

/* --- problem one: the agent asks for rights ---------------------------------- */

/** Claude on Arkitekt is just another app: it asks Kim for the rights it
    needs, scope by scope, calls typed actions with them, asks again for
    anything more, and every call lands on the record with who allowed it. */
export function AgentRightsFigure() {
  const u = useUid();
  const t = { ask: 1.3, consent: 1.7, approve: 3.4, run: 4.0, more: 5.2, once: 6.5, done: 7.2 };
  const css = [
    BASE_CSS(u),
    swapCss(u, 'consent', t.approve + 0.35),
    swapCss(u, 'once', t.once + 0.35),
    `section.present .${u}-p1 { animation: ${u}-press 0.35s ease-out ${t.approve}s both; }`,
    `section.present .${u}-p2 { animation: ${u}-press 0.35s ease-out ${t.once}s both; }`,
  ].join('\n');
  const scopes: { text: string; ok: boolean }[] = [
    { text: 'call process_slides · stainstorm', ok: true },
    { text: 'read slides / HE-07', ok: true },
    { text: 'move the arm by hand', ok: false },
    { text: 'delete data', ok: false },
  ];
  const card = 'rounded-2xl border-2 bg-fd-card shadow-sm';
  const btn = 'flex h-[30px] items-center justify-center rounded-lg text-[13px] font-semibold';
  return (
    <div
      className="relative mx-auto h-[440px] w-[1180px]"
      role="img"
      aria-label="Kim asks Claude to run the four-stain panel on slide HE-07. Claude asks Kim's hub for rights: to call process_slides on the stainstorm app and read the slides HE-07 dataset, but not to move the arm by hand or delete data. Kim approves; Claude runs the workflow. To segment CD20 again it asks once more, to use the GPU server once, and Kim allows it. Both calls are on the record with who allowed them."
    >
      <LoopStyles css={css} />

      {/* the chat */}
      <div className="sm-fade absolute left-0 top-0 flex h-[430px] w-[560px] flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card/70 p-4" style={delay(0.1)}>
        <Say who="kim" at={0.4}>Run the four-stain panel on slide HE-07.</Say>
        <Say who="claude" at={t.ask}>I need a few rights on Kim’s hub first. Asking.</Say>
        <Say who="claude" at={t.run}>
          Thanks. Running <code className="font-mono text-[14px] font-semibold">process_slides</code> on stainstorm…
        </Say>
        <Say who="claude" at={t.more}>CD20 looks patchy. To segment it again I need the GPU server. That’s new, so I’m asking again.</Say>
        <Say who="claude" at={t.done}>
          Done: four stains, CD20 took two rounds. It’s all on the record.
        </Say>
      </div>

      {/* the consent */}
      <div className="absolute left-[600px] top-0 w-[580px]">
        <div className={cn('sm-pop p-4', card, 'border-fd-primary/60')} style={delay(t.consent)}>
          <div className="mb-2 flex items-center gap-2.5">
            <ClaudeAvatar size={30} />
            <span className="text-[16px] font-semibold">Claude is asking for</span>
            <span className="ml-auto flex items-center gap-1.5 text-[12px] text-fd-muted-foreground">
              <ShieldCheck className="size-[14px] text-fd-primary" strokeWidth={2.2} /> Kim’s hub
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            {scopes.map((s, i) => (
              <span key={s.text} className={cn('sm-in flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[12px]', s.ok ? 'bg-fd-primary/8' : 'text-fd-muted-foreground line-through')} style={delay(t.consent + 0.3 + i * 0.2)}>
                {s.ok ? <Check className="size-[13px] shrink-0 text-emerald-600" strokeWidth={3} /> : <X className="size-[13px] shrink-0 text-red-600" strokeWidth={3} />}
                {s.text}
              </span>
            ))}
          </div>
          <div className="relative mt-3 h-[30px]">
            <span className={`${u}-consent-b absolute inset-0 flex gap-2`}>
              <span className={cn(`${u}-p1 flex-1 bg-fd-primary text-fd-primary-foreground`, btn)}>Approve</span>
              <span className={cn('w-[100px] border border-fd-border text-fd-muted-foreground', btn)}>Deny</span>
            </span>
            <span className={`${u}-consent-a absolute inset-0 flex items-center gap-1.5 text-[14px] font-semibold text-emerald-600`}>
              <Check className="size-[16px]" strokeWidth={3} /> granted by Kim · these scopes only · until 18:00
            </span>
          </div>
        </div>

        <div className={cn('sm-pop mt-3 flex items-center gap-3 p-3', card, 'border-amber-500/60')} style={delay(t.more + 0.3)}>
          <Lock className="size-[18px] shrink-0 text-amber-600" strokeWidth={2.4} />
          <span className="flex flex-col">
            <span className="text-[14px] font-semibold">Claude asks for one more</span>
            <span className="font-mono text-[12px] text-fd-muted-foreground">call segment_image · gpu-server</span>
          </span>
          <div className="relative ml-auto h-[30px] w-[170px]">
            <span className={cn(`${u}-once-b ${u}-p2 absolute inset-0 bg-fd-primary text-fd-primary-foreground`, btn)}>Allow once</span>
            <span className={`${u}-once-a absolute inset-0 flex items-center justify-end gap-1.5 text-[13px] font-semibold text-emerald-600`}>
              <Check className="size-[15px]" strokeWidth={3} /> allowed once
            </span>
          </div>
        </div>

        {/* the record */}
        <div className={cn('sm-pop mt-3 p-3', card, 'border-fd-border')} style={delay(t.run)}>
          <span className="mb-1.5 flex items-center gap-1.5 text-[13px] font-semibold">
            <ScrollText className="size-[15px] text-fd-primary" strokeWidth={2} /> the record
          </span>
          {[
            { at: t.run + 0.3, time: '14:21', call: 'process_slides', on: 'stainstorm', who: 'Claude, granted by Kim' },
            { at: t.once + 0.6, time: '15:02', call: 'segment_image', on: 'gpu-server', who: 'Claude, allowed once by Kim' },
          ].map((r) => (
            <span key={r.call} className="sm-in grid grid-cols-[44px_1fr_auto] items-center gap-2 border-t border-fd-border py-1.5 font-mono text-[12px]" style={delay(r.at)}>
              <span className="text-fd-muted-foreground">{r.time}</span>
              <span>
                <span className="font-semibold">{r.call}</span> · {r.on}
              </span>
              <span className="font-sans text-[11.5px] text-fd-muted-foreground">{r.who}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- problem two: the chat answers with a blok ------------------------------------ */

const PREVIEW = (bright: number) =>
  `radial-gradient(circle at 50% 50%, rgba(233,251,255,${bright}) 0, rgba(122,216,242,${bright * 0.9}) 16%, rgba(40,150,200,${bright * 0.7}) 34%, transparent 62%), #06101b`;

/** People do want to chat; the chat just shouldn't answer with text or a
    generated UI. Claude hands over the capture blok the openuc2 app ships:
    Kim turns the exposure up and captures, then tries 900 ms, which the
    action's own range stops before anything reaches the laser. */
export function BlokChatFigure() {
  const u = useUid();
  const t = { blok: 1.5, turn: 2.8, capture: 3.8, typo: 5.4 };
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

      {/* the chat, answering with a blok */}
      <div className="sm-fade absolute left-0 top-0 flex h-[430px] w-[640px] flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card/70 p-4" style={delay(0.1)}>
        <Say who="kim" at={0.4}>Let me tune the exposure on HE-07 myself.</Say>
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
    </div>
  );
}
