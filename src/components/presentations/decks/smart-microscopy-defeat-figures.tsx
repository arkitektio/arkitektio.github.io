'use client';

/* Answering the four horsemen of Kim's nights. Each one gets a slide of his
   own first: he stands there wearing Reviewer 2's face and makes his claim,
   and on a keypress Arkitekt answers: "well, we thought about that". The
   slides after it are the explanation, plain: no horseman on them.

   Connection → no IPs: a coordination server, briefly, then straight to the hub; Error handling & observability → the
   record, resumable workflows, and task.hold to ask a person; Data management → mikro and its
   coordinate systems, and the lineage graph on them; Reproducibility → sharing
   is caring: publish the code as an app, share the data over a scoped
   WireGuard connection. Values (times, versions, coordinates) are illustrative. */

import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Fragment } from '@revealjs/react';
import { Check, Compass, Database, Download, Eye, Filter, GitBranch, Heart, Image as ImageIcon, KeyRound, Layers, LayoutGrid, Lock, Microscope, Package, Plus, RotateCcw, ScrollText, Server, Share2, Smartphone, Table2, Workflow, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { ArmMoving3D, FrameModel3D } from './smart-microscopy-frame-3d';
import { cn } from '@/lib/cn';
import { Arrowheads, LoopStyles, PRIMARY, Path, Steps, delay, useUid } from './smart-microscopy-anim';
import { DistributedFixDiagram, HORSEMEN, HorsemanArt, HorsemanBanner, KimFigure, ReviewerFace, horsemanAmbientCss } from './smart-microscopy-figures';
import type { HorsemanKey, NIGHTS } from './smart-microscopy-figures';

type NightKey = keyof typeof NIGHTS;

/** The Arkitekt logo with its googly eyes, as it talks back to the reviewer:
    the same eyes as on the "use all these actions" slide, and nothing behind
    it, no card. */
function GooglyLogo({ size }: { size: number }) {
  return (
    <span className="relative block shrink-0" style={{ width: size, height: size }}>
      <Logo className="size-full" />
      <svg viewBox="0 0 190 190" className="absolute inset-0 size-full" aria-hidden>
        {[75, 115].map((x) => (
          <g key={x}>
            <ellipse cx={x} cy={39} rx={12} ry={14} fill="#fff" stroke="#111" strokeWidth={2.6} />
            <circle cx={x} cy={42} r={6.4} fill="#111" />
            <circle cx={x - 2.4} cy={38} r={2.4} fill="#fff" />
          </g>
        ))}
      </svg>
    </span>
  );
}

/** Reviewer 2's name tag, riding with the horseman. */
function ReviewerTag({ className, label = 'REVIEWER 2' }: { className?: string; label?: string }) {
  return (
    <span className={cn('absolute -rotate-6 whitespace-nowrap rounded border border-black/70 bg-white px-1 font-mono font-extrabold leading-[1.5] text-red-700 shadow', className)}>
      {label}
    </span>
  );
}

/** What Reviewer 2 says as each horseman arrives. */
const TAUNTS: Record<HorsemanKey, string> = {
  communication: 'Okay, I give you that: not five IP addresses, just the hub. But that’s not the only problem. How are you planning to handle firewalls, eduroam and all the other networks?',
  threads: 'Distributed systems are still error-prone. You cannot change physics. You should have read some more computer science books…',
  data: 'lol, on your server you still just have folders. You don’t solve that. And how do you plan to stream big images over the network?',
  repro: 'You still need to run the code somewhere. How should we reproduce these environments? And who packages it into a usable desktop application? Mac? Windows? HTML?',
  ai: 'LLMs will make all of that obsolete! WHERE IS THE CHAT INTERFACE?',
};

/** What Arkitekt says back, where it is not the stock answer: to the second
    horseman it agrees, and says what it can do instead; the third has his facts wrong. */
const ANSWERS: Partial<Record<HorsemanKey, string>> = {
  threads: 'Yes, you are right. But we can let users observe, debug and recover.',
  data: 'Well, actually, we don’t. Everything we store is in a relational database.',
  repro: 'It’s not that complicated.',
};
const ANSWER = 'Well, we thought about that.';
/** To the fifth horseman, AI Hype, Arkitekt disagrees, and says why, in two points. */
const AI_REPLY = 'Siiigh…';

/** A horseman's own slide, before the explanation: he strides in from off
    the slide wearing Reviewer 2's face and rears, then his banner and his
    claim appear (`sm-animate`: this entrance is allowed to move). One
    keypress (a reveal.js fragment): the Arkitekt logo turns up with its
    answer. Nothing is struck down. */
export function HorsemanDuelFigure({ night }: { night: HorsemanKey }) {
  const u = useUid();
  const h = HORSEMEN[night];
  /* The fifth rider arrives in disguise. Reviewer 2, still on the fourth
     horse, gives up for now: he has a million more questions, but will save them for the discussion. Arkitekt thanks him. On the
     next keypress he rides off and another reviewer steps in, Reviewer III,
     on a perfectly normal horse. Arkitekt: "Yeees?" And on the keypress
     after that the normal horse glitches, changes colour, flashes and comes
     out as the fifth horseman, AI Hype. Marked `sm-animate`, so this one is
     allowed to move. Two more keypresses: Arkitekt disagrees, with its first
     reason, then its second. */
  const mutates = night === 'ai';
  const late = mutates ? `${u}-late sm-animate` : `${u}-after sm-animate`;
  /* Everyone else strides in from off the slide when it comes up, rears, and
     only then gets his banner and his say. */
  const t = { stride: 0.2, rear: 1.5, banner: 1.3, claim: 2 };
  const css = `
${horsemanAmbientCss(u)}
.${u}-after { opacity: 0; }
section.present .${u}-after { animation: ${u}-late 0.45s ease-out var(--d) both; }
section.present .${u}-stride { animation: ${u}-stride 1.4s cubic-bezier(.25,.7,.35,1) ${t.stride}s both; }
section.present .${u}-stride .${u}-bob { animation: ${u}-bob 0.26s ease-in-out ${t.stride}s 5 alternate; }
section.present .${u}-stride .${u}-leg { animation: ${u}-swing 0.26s ease-in-out ${t.stride}s 5 alternate; }
section.present .${u}-stride .${u}-rear { animation: ${u}-rear 1.1s ease-in-out ${t.rear}s both; }
@keyframes ${u}-stride { 0% { opacity: 0; transform: translateX(760px); } 8% { opacity: 1; } 100% { opacity: 1; transform: none; } }
@keyframes ${u}-bob { from { transform: translateY(0); } to { transform: translateY(-12px); } }
@keyframes ${u}-swing { from { transform: rotate(calc(var(--a) * -1deg)); } to { transform: rotate(calc(var(--a) * 1deg)); } }
@keyframes ${u}-rear { 0% { transform: none; } 45% { transform: rotate(-17deg); } 70% { transform: rotate(-12deg); } 100% { transform: rotate(-7deg); } }
:is(.${u}-new, .${u}-late, .${u}-flash, .${u}-r3) { opacity: 0; }
/* Reviewer 2 rides off, and Reviewer III walks in on an ordinary horse */
.${u}-swap.visible ~ .${u}-pre1 { animation: ${u}-gone 0.35s ease-out both; }
.${u}-swap.visible ~ * .${u}-r2 { animation: ${u}-leave 1s cubic-bezier(.6,0,.9,.5) both; }
.${u}-swap.visible ~ * .${u}-r3 { animation: ${u}-stride 1.4s cubic-bezier(.25,.7,.35,1) 0.7s both; }
@keyframes ${u}-leave { from { opacity: 1; transform: none; } to { opacity: 0; transform: translateX(760px); } }
.${u}-mut.visible ~ .${u}-pre { animation: ${u}-gone 0.35s ease-out both; }
.${u}-mut.visible ~ .${u}-flash { animation: ${u}-flash 0.9s ease-out 1.55s both; }
@keyframes ${u}-gone { to { opacity: 0; } }
@keyframes ${u}-flash { 0% { opacity: 0; } 18% { opacity: 0.95; } 40% { opacity: 0.2; } 55% { opacity: 0.7; } 100% { opacity: 0; } }
.${u}-old, .${u}-new { transform-origin: 50% 70%; }
.${u}-mut.visible ~ * .${u}-old { animation: ${u}-mutate 2.1s linear both; }
.${u}-mut.visible ~ * .${u}-new { animation: ${u}-emerge 0.8s cubic-bezier(.2,1.5,.4,1) 1.75s both; }
.${u}-mut.visible ~ * .${u}-late { animation: ${u}-late 0.5s ease-out 2.5s both; }
@keyframes ${u}-mutate {
  0% { transform: none; filter: none; opacity: 1; }
  6% { transform: translate(-10px, 3px) skewX(9deg); filter: hue-rotate(40deg); }
  12% { transform: translate(12px, -4px) skewX(-12deg); filter: hue-rotate(120deg) saturate(2); }
  20% { transform: scale(1.12, 0.9); filter: hue-rotate(200deg) saturate(2.5); }
  28% { transform: translate(-14px, 0) skewX(16deg) scale(0.9, 1.14); filter: hue-rotate(260deg) saturate(3) invert(0.2); }
  38% { transform: translate(10px, 5px) skewX(-18deg) scale(1.18, 0.86); filter: hue-rotate(320deg) saturate(3.5) contrast(1.5); }
  48% { transform: scale(0.82, 1.24) rotate(-4deg); filter: hue-rotate(60deg) saturate(3.5) invert(0.35); }
  58% { transform: scale(1.26, 0.8) skewX(12deg) rotate(5deg); filter: hue-rotate(180deg) saturate(4) blur(1px); }
  68% { transform: scale(0.86, 1.2) skewX(-14deg) rotate(-6deg); filter: hue-rotate(250deg) saturate(4) blur(2px) brightness(1.4); opacity: 1; }
  78% { transform: scale(1.3) rotate(4deg); filter: hue-rotate(250deg) saturate(4) blur(4px) brightness(1.8); opacity: 0.9; }
  90% { transform: scale(1.45); filter: hue-rotate(250deg) blur(9px) brightness(2.4); opacity: 0.6; }
  100% { transform: scale(1.6); filter: hue-rotate(250deg) blur(16px) brightness(3); opacity: 0; }
}
@keyframes ${u}-emerge { from { opacity: 0; transform: scale(0.6); filter: blur(12px) brightness(3); } to { opacity: 1; transform: none; filter: none; } }
@keyframes ${u}-late { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  section.present :is(.${u}-stride, .${u}-stride .${u}-bob, .${u}-stride .${u}-leg, .${u}-stride .${u}-rear) { animation: none; }
  section.present .${u}-after { animation: none; opacity: 1; }
  .${u}-mut.visible ~ * .${u}-old, .${u}-mut.visible ~ .${u}-pre { animation: none; opacity: 0; }
  .${u}-mut.visible ~ .${u}-flash { animation: none; }
  .${u}-mut.visible ~ * :is(.${u}-new, .${u}-late) { animation: none; opacity: 1; }
  .${u}-swap.visible ~ * .${u}-r2, .${u}-swap.visible ~ .${u}-pre1 { animation: none; opacity: 0; }
  .${u}-swap.visible ~ * .${u}-r3 { animation: none; opacity: 1; }
}
`;
  return (
    <div
      className="relative mx-auto h-[600px] w-[1180px]"
      role="img"
      aria-label={mutates ? `Reviewer 2 is still on the fourth horse and says: okay, I have a million more questions, but I will save them for the discussion. Arkitekt answers: all good points, I appreciate the questions. Reviewer 2 rides off, and another reviewer steps in, Reviewer III, on a perfectly normal horse. Arkitekt: yes? Then the normal horse mutates into a new rider. ${h.ordinal}, ${h.name}, says: ${TAUNTS[night]} Arkitekt answers: ${AI_REPLY}` : `${h.ordinal}, ${h.name}, wearing Reviewer 2's face, says: ${TAUNTS[night]} Arkitekt answers: ${ANSWERS[night] ?? ANSWER}`}
    >
      <LoopStyles css={css} />
      {mutates ? <Fragment as="span" index={2} className={`${u}-swap absolute`} /> : null}
      {mutates ? <Fragment as="span" index={4} className={`${u}-mut absolute`} /> : null}
      <div className="absolute inset-x-0 top-[24px] flex justify-center">
        <div className={late} style={{ '--d': `${t.banner}s` } as CSSProperties}>
          <HorsemanBanner night={night} />
        </div>
      </div>
      {/* Reviewer 2's claim */}
      <div className="absolute left-[90px] top-[160px] w-[470px]">
        <div className={cn('relative rounded-2xl border-2 border-black/70 bg-white px-5 py-3 font-semibold italic leading-snug text-zinc-900 shadow-lg', TAUNTS[night].length > 120 ? 'text-[19px]' : 'text-[21px]', late)} style={{ '--d': `${t.claim}s` } as CSSProperties}>
          <span className="sr-only">Reviewer 2: </span>“{TAUNTS[night]}”
          {/* what the first horseman is pointing at, inside his bubble: Kim's tangle, and "the fix" */}
          {night === 'communication' ? (
            <div className={`${u}-after sm-animate mt-3 flex justify-center not-italic`} style={{ '--d': `${t.claim + 0.3}s` } as CSSProperties}>
              <DistributedFixDiagram width={316} />
            </div>
          ) : null}
          <span className={cn('absolute -right-[9px] size-[16px] rotate-45 border-r-2 border-t-2 border-black/70 bg-white', night === 'communication' ? 'top-[92px]' : 'bottom-[16px]')} />
        </div>
      </div>
      {/* the horseman, as Reviewer 2 */}
      <div className="absolute left-[560px] top-[170px]">
        <div className="relative">
          {mutates ? (
            <>
              {/* Reviewer 2, on the fourth horse: he rides off */}
              <div className={`${u}-r2 sm-animate relative`}>
                <HorsemanArt night="repro" u={u} width={520} face="reviewer" />
                <ReviewerTag className="left-[170px] top-[-14px] px-2 text-[20px]" />
              </div>
              {/* Reviewer III, on a normal horse: he is the one who turns */}
              <div className={`${u}-r3 sm-animate absolute inset-0`}>
                <div className={`${u}-old sm-animate relative`}>
                  <HorsemanArt night="repro" u={u} width={520} face="reviewer" plain />
                  <ReviewerTag label="REVIEWER III" className="left-[158px] top-[-14px] px-2 text-[20px]" />
                </div>
              </div>
              <div className={`${u}-new sm-animate absolute inset-0`}>
                <HorsemanArt night={night} u={u} width={520} face="reviewer" />
              </div>
            </>
          ) : (
            <div className={`${u}-stride sm-animate`}>
              <HorsemanArt night={night} u={u} width={520} face="reviewer" />
              <ReviewerTag className="left-[170px] top-[-14px] px-2 text-[20px]" />
            </div>
          )}
          {mutates ? (
            <>
              <div className={`${u}-new sm-animate absolute inset-0`}>
                <span className="absolute left-[150px] top-[-16px] -rotate-6 whitespace-nowrap rounded border border-black/70 bg-[#312e81] px-2 font-mono text-[20px] font-extrabold leading-[1.5] text-[#67e8f9] shadow">AI HYPE ✦</span>
              </div>
            </>
          ) : null}
        </div>
      </div>
      {/* on arrival: Reviewer 2 has run out of arguments */}
      {mutates ? (
        <div className={`${u}-pre1 sm-animate absolute left-[110px] top-[180px] w-[450px]`}>
          <div className="relative rounded-2xl border-2 border-black/70 bg-white px-5 py-3 text-[23px] font-semibold italic leading-snug text-zinc-900 shadow-lg">
            <span className="sr-only">Reviewer 2: </span>“Okay. I have a million more questions, but I will save them for the discussion…”
            <span className="absolute -right-[9px] bottom-[16px] size-[16px] rotate-45 border-r-2 border-t-2 border-black/70 bg-white" />
          </div>
        </div>
      ) : null}
      {mutates ? <div className={`${u}-flash sm-animate pointer-events-none absolute -inset-[60px]`} style={{ background: 'radial-gradient(ellipse 45% 50% at 70% 55%, #fff 0%, rgba(196,181,253,0.85) 35%, transparent 70%)' }} /> : null}
      {/* Arkitekt: its answer, or, to the reviewer who has run out, its question */}
      <Fragment as="div" index={1} className={cn('absolute bottom-[-8px] left-[110px] flex items-center gap-4', mutates && `${u}-pre1 sm-animate`)}>
        <GooglyLogo size={104} />
        <span className="relative max-w-[470px] rounded-2xl bg-fd-primary px-6 py-3.5 text-[28px] font-bold leading-tight tracking-[-0.02em] text-fd-primary-foreground shadow-lg">
          <span className="sr-only">Arkitekt: </span>“{mutates ? 'All good points. I appreciate the questions.' : (ANSWERS[night] ?? ANSWER)}”
          <span className="absolute -left-[8px] top-1/2 size-[16px] -translate-y-1/2 rotate-45 bg-fd-primary" />
        </span>
      </Fragment>
      {/* to the newcomer on the normal horse, before he turns */}
      {mutates ? (
        <Fragment as="div" index={3} className={`${u}-pre sm-animate absolute bottom-[-8px] left-[110px] flex items-center gap-4`}>
          <GooglyLogo size={104} />
          <span className="relative rounded-2xl bg-fd-primary px-6 py-3.5 text-[34px] font-bold leading-tight tracking-[-0.02em] text-fd-primary-foreground shadow-lg">
            <span className="sr-only">Arkitekt: </span>“Yeees?”
            <span className="absolute -left-[8px] top-1/2 size-[16px] -translate-y-1/2 rotate-45 bg-fd-primary" />
          </span>
        </Fragment>
      ) : null}
      {/* …and to AI Hype, it only sighs */}
      {mutates ? (
        <Fragment as="div" index={5} className="absolute bottom-[-8px] left-[70px] flex items-center gap-4">
          <GooglyLogo size={104} />
          <span className="relative rounded-2xl bg-fd-primary px-7 py-4 text-[34px] font-bold italic leading-tight tracking-[-0.01em] text-fd-primary-foreground shadow-lg">
            <span className="sr-only">Arkitekt: </span>“{AI_REPLY}”
            <span className="absolute -left-[8px] top-1/2 size-[16px] -translate-y-1/2 rotate-45 bg-fd-primary" />
          </span>
        </Fragment>
      ) : null}
    </div>
  );
}

/** Frames an explanation figure in the middle of its slide. */
export function DefeatFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto h-[440px] w-[1180px]">
      <div className="absolute inset-y-0 left-1/2 w-[810px] -translate-x-1/2">{children}</div>
    </div>
  );
}

/* --- 1 · connection: no IPs, just coordination ------------------------------------- */

/* A real app, as it is written today: declared with App(...), one action on
   it. Shown on the coordination slide and again on the publishing slide. */
const OTSU_K = 'text-[#c4b5fd]'; // keyword
const OTSU_F = 'text-[#7dd3fc]'; // the function
const OTSU_S = 'text-[#86efac]'; // string
const OTSU_D = 'text-[#fbbf24]'; // decorator
const OTSU_LINES: [string, string?][][] = [
  [['from', OTSU_K], [' skimage.filters '], ['import', OTSU_K], [' threshold_otsu']],
  [['from', OTSU_K], [' arkitekt '], ['import', OTSU_K], [' App, run']],
  [['from', OTSU_K], [' mikro '], ['import', OTSU_K], [' Mikro, mikro_service']],
  [['from', OTSU_K], [' mikro.arkitekt.specs '], ['import', OTSU_K], [' LabelMask, SingleChannelImage, ensure']],
  [],
  [['app = App('], ['"otsu"', OTSU_S], [', '], ['"0.1.0"', OTSU_S], [', services=[mikro_service])']],
  [],
  [['@app.action', OTSU_D]],
  [['def', OTSU_K], [' '], ['otsu_threshold', OTSU_F], ['(image: SingleChannelImage, *, mikro: Mikro) -> LabelMask:']],
  [['    '], ['"""Otsu Threshold"""', OTSU_S]],
  [['    mask = image.data > threshold_otsu(image.data.values)']],
  [['    result = mikro.create_array_dataset(']],
  [['        data=mask, scales=[], name='], ['"otsu mask"', OTSU_S], [',']],
  [['        axes=image.carried_axes(mask.dims),']],
  [['        derived_from=[image.derive_identity(value_relation='], ['"TRANSFORMED"', OTSU_S], [')],']],
  [['    )']],
  [['    '], ['return', OTSU_K], [' ensure(result.lens(), LabelMask)']],
  [],
  [['run(app)']],
];

/** The app's source in a code window, with what it never mentions ticked off
    in the footer. Must sit inside a `.sm-steps` container. */
function OtsuAppWindow({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <div className="sm-pop absolute flex flex-col overflow-hidden rounded-2xl border-2 border-fd-primary/60 bg-[#0f172a] shadow-md" style={{ left: x, top: y, width: w, height: h, ...delay(0.1) }}>
      <div className="flex h-[32px] shrink-0 items-center gap-1.5 border-b border-white/10 px-3">
        {['#f87171', '#fbbf24', '#34d399'].map((c) => (
          <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-2 font-mono text-[13px] font-semibold text-slate-200">your app · otsu.py</span>
      </div>
      <pre className="flex-1 px-4 py-3 font-mono text-[11px] leading-[1.7] text-slate-200">
        {OTSU_LINES.map((line, i) => (
          <span key={i} className="block min-h-[1.7em] whitespace-pre">
            {line.map(([text, cls], j) => (
              <span key={j} className={cls}>
                {text}
              </span>
            ))}
          </span>
        ))}
      </pre>
      <div className="flex h-[46px] shrink-0 items-center gap-4 border-t border-white/10 px-4">
        {['No IP addresses', 'No storage addresses', 'No file paths'].map((t, i) => (
          <span key={t} className="sm-in flex items-center gap-2 whitespace-nowrap text-[14.5px] font-semibold text-slate-100" style={delay(0.7 + i * 0.2)}>
            <span className="flex size-[20px] items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="size-[13px]" strokeWidth={3.4} />
            </span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** No addresses in the code. On the left a small, real app with one action,
    `otsu_threshold`, and what it never mentions: no IP addresses, no storage
    addresses, no file paths. On the right, how it finds its hub anyway. A
    dashed midline splits the public internet (above: the coordination server)
    from the local network (below: the Arkitekt hub, and Kim). One key press
    per beat (reveal fragments): the app connects to the coordination server;
    a browser window pops up for Kim, far right, asking where that app should
    go; she says yes, the app gets its route and keys, and the coordination
    server greys out; the app then finds the hub on the local network and
    talks to it directly. */
export function CoordinationWinFigure() {
  const u = useUid();
  const W = 1230;
  const H = 450;
  const code = { x: 0, y: 0, w: 540, h: 450 }; // the whole left panel
  const coord = { x: 596, y: 6, w: 220, h: 92 };
  const hub = { x: 596, y: 338, w: 220, h: 96 };
  const win = { x: 856, y: 0, w: 250, h: 196 }; // Kim's browser, next to her
  const widget = { x: win.x + 50, y: 300, w: 170 }; // the app's controls, on the local side
  const kim = 112; // Kim, all the way to the right, where the public/local line ends: she uses both sides
  const yDirect = hub.y + hub.h / 2;
  const ySplit = 225; // the midline: public internet above, local network below
  const toCoord = `M${code.x + code.w} 60 L${coord.x} 52`;
  const toUser = `M${coord.x + coord.w} 52 L${win.x} 52`;
  const direct = `M${code.x + code.w} ${yDirect} L${hub.x} ${yDirect}`;
  const on = (n: number, sel: string) => `.${u}-s${n}.visible ~ ${sel}, .${u}-s${n}.visible ~ * ${sel}`;
  const css = `
:is(.${u}-ask, .${u}-user, .${u}-pick, .${u}-tok, .${u}-direct, .${u}-lock, .${u}-widget, .${u}-wline) { opacity: 0; }
:is(.${u}-lineA, .${u}-lineC, .${u}-glow) { stroke-dasharray: 1; stroke-dashoffset: 1; }
/* press 1: the app connects to the coordination server, out on the internet */
${on(1, `.${u}-lineA`)} { animation: ${u}-draw 0.6s ease-in-out 0s both; }
${on(1, `.${u}-ask`)} { animation: ${u}-pop 0.4s ease-out 0.4s both; }
/* press 2: a browser window pops up for Kim */
${on(2, `.${u}-lineC`)} { animation: ${u}-draw 0.4s ease-in-out 0s both; }
${on(2, `.${u}-user`)} { animation: ${u}-pop 0.45s ease-out 0.3s both; }
/* press 3: she says yes; the app gets its route and keys, and the server is done */
${on(3, `.${u}-pick`)} { animation: ${u}-fadein 0.25s ease-out 0s both; }
${on(3, `.${u}-ask`)} { animation: ${u}-fadeout 0.3s ease-out 0.3s both; }
${on(3, `.${u}-tok`)} { animation: ${u}-along 0.9s ease-in-out 0.6s both; }
${on(3, `.${u}-aside`)} { animation: ${u}-aside 0.6s ease-out 1.6s both; }
/* press 4: the app finds the hub on the local network, and they talk directly */
${on(4, `.${u}-glow`)} { animation: ${u}-draw 0.7s ease-in-out 0s both; }
${on(4, `.${u}-direct`)} { animation: ${u}-fadein 0.4s ease-out 0.5s both; }
${on(4, `.${u}-lock`)} { animation: ${u}-pop 0.4s ease-out 0.6s both; }
${on(4, `.${u}-widget`)} { animation: ${u}-pop 0.45s ease-out 1.3s both; }
${on(4, `.${u}-wline`)} { animation: ${u}-fadein 0.4s ease-out 1.7s both; }
@keyframes ${u}-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@keyframes ${u}-pop { 0% { opacity: 0; transform: scale(0.85); } 70% { opacity: 1; transform: scale(1.03); } 100% { opacity: 1; transform: scale(1); } }
@keyframes ${u}-fadein { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-fadeout { from { opacity: 1; } to { opacity: 0; } }
@keyframes ${u}-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes ${u}-along { 0% { offset-distance: 0%; opacity: 0; } 15%, 85% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
@keyframes ${u}-aside { from { opacity: 1; } to { opacity: 0.35; } }
.${u}-tok { position: absolute; left: 0; top: 0; offset-rotate: 0deg; }
/* the direct connection stays open: its dashes never stop */
.${u}-flow { animation: ${u}-flow 0.9s linear infinite; }
@keyframes ${u}-flow { to { stroke-dashoffset: -28; } }
@media (prefers-reduced-motion: reduce) { .${u}-flow { animation: none; } }
`;
  const bubble = 'rounded-2xl border border-fd-border bg-fd-card px-4 py-2.5 text-[16px] font-medium leading-snug shadow-sm';
  const pill = 'flex h-[30px] items-center gap-1.5 whitespace-nowrap rounded-full bg-fd-primary px-3 font-mono text-[12.5px] font-bold text-fd-primary-foreground shadow-md';
  return (
    <div
      className="relative mx-auto h-[450px] w-[1230px]"
      role="img"
      aria-label="On the left a small, real app, declared with App and with one action on it, otsu_threshold, with no IP addresses, no storage addresses and no file paths in it. On the right, how it connects: the app asks the coordination server where to go; a dashed midline separates the public internet above from the local network below. The coordination server, on the public internet, opens a browser window for Kim, on the right, asking where she wants to connect that app, and she picks her lab; the app gets a route and keys, and the coordination server greys out; the app then finds the Arkitekt hub on the local network and talks to it directly."
    >
      <div className="sm-steps sm-animate absolute inset-0" style={{ '--sm-stagger': 1 } as CSSProperties}>
        {[1, 2, 3, 4].map((n) => (
          <Fragment key={n} as="span" index={n} className={`${u}-s${n} absolute`} />
        ))}
        <LoopStyles css={css} />

        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="pointer-events-none absolute inset-0" aria-hidden>
          {/* the public internet above, the local network below */}
          <line x1={code.x + code.w + 14} y1={ySplit} x2={W - kim - 10} y2={ySplit} stroke="var(--color-fd-muted-foreground)" strokeOpacity={0.55} strokeWidth={1.6} strokeDasharray="5 6" />
          <text x={W - kim - 10} y={ySplit - 9} textAnchor="end" fontFamily="var(--font-mono, monospace)" fontSize={13} fill="var(--color-fd-muted-foreground)">
            <tspan fill="#ef4444" fontWeight={800} fontSize={14}>
              NO DATA EVER
            </tspan>
            {'  ·  public internet'}
          </text>
          <text x={W - kim - 10} y={ySplit + 20} textAnchor="end" fontFamily="var(--font-mono, monospace)" fontSize={13} fill="var(--color-fd-muted-foreground)">
            <tspan fill="#10b981" fontWeight={800} fontSize={14}>
              ALL YOUR DATA
            </tspan>
            {'  ·  local network'}
          </text>
          {/* the coordination step: there, then out of the way */}
          <g className={`${u}-aside`}>
            <path className={`${u}-lineA`} pathLength={1} d={toCoord} fill="none" stroke={PRIMARY} strokeWidth={2.4} />
            <path className={`${u}-lineC`} pathLength={1} d={toUser} fill="none" stroke={PRIMARY} strokeWidth={2.4} />
          </g>
          {/* then directly */}
          <path className={`${u}-glow`} pathLength={1} d={direct} fill="none" stroke={PRIMARY} strokeOpacity={0.22} strokeWidth={18} strokeLinecap="round" />
          <g className={`${u}-direct`}>
            <path className={`${u}-flow`} d={direct} fill="none" stroke={PRIMARY} strokeWidth={3} strokeDasharray="8 6" />
          </g>
          {/* and the widget that controls the app talks to the hub, too */}
          <g className={`${u}-wline`}>
            <path className={`${u}-flow`} d={`M${hub.x + hub.w} ${yDirect} L${widget.x} ${yDirect}`} fill="none" stroke={PRIMARY} strokeWidth={3} strokeDasharray="8 6" />
            <circle cx={hub.x + hub.w} cy={yDirect} r={5} fill="var(--color-fd-card)" stroke={PRIMARY} strokeWidth={2} />
            <circle cx={widget.x} cy={yDirect} r={5} fill="var(--color-fd-card)" stroke={PRIMARY} strokeWidth={2} />
          </g>
        </svg>

        {/* the app: a primitive piece of image code, and what it never mentions */}
        <OtsuAppWindow x={code.x} y={code.y} w={code.w} h={code.h} />

        {/* the coordination server, top right */}
        <div className="absolute" style={{ left: coord.x, top: coord.y, width: coord.w, height: coord.h }}>
          <div className={`${u}-aside size-full`}>
            <div className="sm-pop flex size-full items-center gap-3.5 rounded-2xl border-2 border-dashed border-fd-primary/60 bg-fd-card px-5 shadow-sm" style={delay(0.25)}>
              <span className="flex size-[44px] shrink-0 items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
                <Compass className="size-[25px]" strokeWidth={1.8} />
              </span>
              <span className="text-[18px] font-semibold leading-tight">Coordination server</span>
            </div>
          </div>
        </div>

        {/* the Arkitekt hub, bottom right */}
        <div className="absolute" style={{ left: hub.x, top: hub.y, width: hub.w, height: hub.h }}>
          <div className="sm-pop flex size-full items-center gap-3.5 rounded-[26px] bg-fd-primary px-5 text-fd-primary-foreground shadow-xl" style={delay(0.4)}>
            <span className="flex size-[48px] shrink-0 items-center justify-center rounded-xl bg-white/95 shadow-sm">
              <Logo className="size-[40px]" />
            </span>
            <span className="flex flex-col">
              <span className="text-[24px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
              <span className="mt-1.5 font-mono text-[13px] opacity-85">Kim’s lab</span>
            </span>
          </div>
        </div>

        {/* press 1: the app asks */}
        <div className={`${u}-ask absolute`} style={{ left: code.x + code.w + 14, top: 108, width: 150 }}>
          <span className={cn(bubble, 'block rounded-tl-sm px-3 py-2 text-[15px]')}>
            <span className="sr-only">The app: </span>I’m new here. Where do I connect?
          </span>
        </div>

        {/* the user, on the right; press 2: a browser window pops up for her; press 3: she says yes */}
        <div className="sm-in absolute" style={{ left: W - kim, top: ySplit - kim / 2, ...delay(0.5) }}>
          <KimFigure size={kim} mood="happy" />
        </div>
        {/* press 4, once the hub is found: a small widget to control the app, on the local side */}
        <div className={`${u}-widget absolute flex flex-col gap-2 overflow-hidden rounded-2xl border-2 border-fd-primary/60 bg-fd-card p-3 shadow-xl`} style={{ left: widget.x, top: widget.y, width: widget.w }}>
          <span className="flex items-center gap-1.5 text-[13px] font-semibold">
            <span className="size-[8px] rounded-full bg-emerald-500" /> otsu
            <span className="ml-auto font-mono text-[10.5px] font-normal text-fd-muted-foreground">connected</span>
          </span>
          <span className="font-mono text-[12.5px] font-semibold">otsu_threshold</span>
          <span className="flex h-[30px] items-center justify-between rounded-lg border border-fd-border bg-fd-background/60 px-2 font-mono text-[12px]">
            image #0116 <span className="text-[10px] text-fd-muted-foreground">▼</span>
          </span>
          <span className="flex h-[32px] items-center justify-center rounded-lg bg-fd-primary text-[14px] font-semibold text-fd-primary-foreground">Run ▶</span>
        </div>
        <div className={`${u}-aside absolute`} style={{ left: win.x, top: win.y, width: win.w, height: win.h }}>
        <div className={`${u}-user size-full overflow-hidden rounded-2xl border-2 border-fd-primary/60 bg-fd-card shadow-xl`}>
          <div className="flex h-[30px] items-center gap-1.5 border-b border-fd-border bg-fd-muted px-3">
            {['#f87171', '#fbbf24', '#34d399'].map((c) => (
              <span key={c} className="size-[9px] rounded-full" style={{ background: c }} />
            ))}
            <span className="ml-2 flex items-center gap-1.5 text-[13px] font-semibold">
              <Logo className="size-[15px]" /> Connect an app
            </span>
          </div>
          <div className="flex flex-col gap-2.5 p-3.5">
            <span className="text-[17px] font-semibold leading-snug">
              <span className="sr-only">Coordination server: </span>Where do you want to connect that app?
            </span>
            <span className="relative flex h-[36px] items-center rounded-lg border border-fd-border bg-fd-background/60 px-3 text-[15px] font-semibold">
              Kim’s lab
              <span className={`${u}-pick pointer-events-none absolute inset-[-2px] flex items-center justify-end rounded-lg border-2 border-emerald-500 bg-emerald-500/15 pr-2.5`}>
                <span className="flex size-[20px] items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="size-[13px]" strokeWidth={3.4} />
                </span>
              </span>
            </span>
            <span className="flex h-[36px] items-center rounded-lg border border-fd-border bg-fd-background/60 px-3 text-[15px] text-fd-muted-foreground">The core facility</span>
          </div>
        </div>
        </div>

        {/* press 3: the app gets its route and keys; press 4: it finds the hub locally */}
        <span className={`${u}-tok`} style={{ offsetPath: `path('M${coord.x + 40} 52 L${code.x + code.w - 70} 60')` }}>
          <span className={pill}>
            <KeyRound className="size-[13px]" strokeWidth={2.6} /> route + keys
          </span>
        </span>
        <span className={`${u}-lock absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-fd-primary/50 bg-fd-card px-3 py-1 text-[14px] font-semibold shadow-sm`} style={{ left: hub.x + hub.w / 2, top: hub.y - 20 }}>
          <Lock className="size-[13px] text-fd-primary" strokeWidth={2.6} /> found locally
        </span>
      </div>
    </div>
  );
}


/** Publishing an app. The same app as on the coordination slide stands on the
    left, still with no address in it. To its right the steps run straight
    down, one key press per beat (reveal fragments): bundle with Docker, as a
    plugin; publish to GitHub, which gives a link; a user installs it from
    that link on their hub; and the hub deploys it on a plugin engine, which
    is just another app and can run anywhere. */
export function PublishFlowFigure() {
  const u = useUid();
  const W = 1230;
  const H = 450;
  const code = { x: 0, y: 0, w: 540, h: 450 };
  const col = { x: 592, w: 318 }; // the steps, straight down
  const bundle = { y: 0, h: 96 };
  const publish = { y: 134, h: 96 };
  const link = { y: 268, h: 44 };
  const hub = { y: 354, h: 96 };
  const engine = { x: 966, y: 0, w: 264, h: 450 }; // the whole right panel
  const mid = col.x + col.w / 2;
  const on = (n: number, sel: string) => `.${u}-s${n}.visible ~ ${sel}, .${u}-s${n}.visible ~ * ${sel}`;
  const css = `
:is(.${u}-c1, .${u}-c2, .${u}-c3, .${u}-c4, .${u}-c5, .${u}-done, .${u}-run) { opacity: 0; }
:is(.${u}-a1, .${u}-a2, .${u}-a3, .${u}-a4, .${u}-a5) { stroke-dasharray: 1; stroke-dashoffset: 1; opacity: 0; }
/* press 1: bundle */
${on(1, `.${u}-a1`)} { animation: ${u}-draw 0.3s ease-in-out 0s both; }
${on(1, `.${u}-c1`)} { animation: ${u}-pop 0.45s ease-out 0.2s both; }
/* press 2: publish, and the link that gives */
${on(2, `.${u}-a2`)} { animation: ${u}-draw 0.3s ease-in-out 0s both; }
${on(2, `.${u}-c2`)} { animation: ${u}-pop 0.45s ease-out 0.2s both; }
${on(2, `.${u}-a3`)} { animation: ${u}-draw 0.3s ease-in-out 0.9s both; }
${on(2, `.${u}-c3`)} { animation: ${u}-pop 0.45s ease-out 1.1s both; }
/* press 3: a user installs it on their hub */
${on(3, `.${u}-a4`)} { animation: ${u}-draw 0.3s ease-in-out 0s both; }
${on(3, `.${u}-c4`)} { animation: ${u}-pop 0.45s ease-out 0.2s both; }
${on(3, `.${u}-btn`)} { animation: ${u}-press 0.4s ease-out 1s both; }
${on(3, `.${u}-done`)} { animation: ${u}-fadein 0.4s ease-out 1.3s both; }
/* press 4: the hub deploys it on a plugin engine */
${on(4, `.${u}-a5`)} { animation: ${u}-draw 0.3s ease-in-out 0s both; }
${on(4, `.${u}-c5`)} { animation: ${u}-pop 0.45s ease-out 0.2s both; }
${on(4, `.${u}-run`)} { animation: ${u}-pop 0.4s ease-out 1s both; }
/* hidden until drawn: an arrowhead shows even on an undrawn path */
@keyframes ${u}-draw { from { stroke-dashoffset: 1; opacity: 1; } to { stroke-dashoffset: 0; opacity: 1; } }
@keyframes ${u}-pop { 0% { opacity: 0; transform: scale(0.85); } 70% { opacity: 1; transform: scale(1.03); } 100% { opacity: 1; transform: scale(1); } }
@keyframes ${u}-fadein { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-press { 0%, 100% { transform: none; } 45% { transform: scale(0.9); } }
`;
  const brand = (d: string, label: string, size = 38) => (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={label} className="shrink-0" fill="currentColor">
      <path d={d} />
    </svg>
  );
  const arrow = (cls: string, d: string) => <path className={cls} pathLength={1} d={d} fill="none" stroke={PRIMARY} strokeWidth={2.6} markerEnd={`url(#${u}-head)`} />;
  const down = (cls: string, from: number, to: number) => arrow(cls, `M${mid} ${from} L${mid} ${to - 8}`);
  const step = (cls: string, at: { y: number; h: number }, icon: ReactNode, title: string, cmd: string) => (
    <div className={`${cls} absolute flex items-center gap-4 rounded-2xl border-2 border-fd-primary/60 bg-fd-card px-4 shadow-md`} style={{ left: col.x, top: at.y, width: col.w, height: at.h }}>
      {icon}
      <span className="flex min-w-0 flex-col gap-1.5">
        <span className="text-[17px] font-semibold leading-tight">{title}</span>
        <span className="self-start whitespace-nowrap rounded-md bg-[#0f172a] px-2 py-0.5 font-mono text-[12.5px] text-slate-100">
          <span className="text-emerald-400">$</span> {cmd}
        </span>
      </span>
    </div>
  );
  return (
    <div
      className="relative mx-auto h-[450px] w-[1230px]"
      role="img"
      aria-label="The same app as before, otsu.py, with no IP addresses, no storage addresses and no file paths in it. It is bundled with Docker as a plugin, with arkitekt plugin build; published to GitHub, with arkitekt plugin publish, which gives a link; a user installs it from that link on their own hub; and the hub deploys it on a plugin engine, which is just another app, can run anywhere, and already runs several other plugins next to it."
    >
      <div className="sm-steps sm-animate absolute inset-0" style={{ '--sm-stagger': 1 } as CSSProperties}>
        {[1, 2, 3, 4].map((n) => (
          <Fragment key={n} as="span" index={n} className={`${u}-s${n} absolute`} />
        ))}
        <LoopStyles css={css} />
        <OtsuAppWindow x={code.x} y={code.y} w={code.w} h={code.h} />

        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="pointer-events-none absolute inset-0" aria-hidden>
          <defs>
            <marker id={`${u}-head`} viewBox="0 0 10 10" refX={8} refY={5} markerWidth={7} markerHeight={7} orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill={PRIMARY} />
            </marker>
          </defs>
          {arrow(`${u}-a1`, `M${code.x + code.w} ${bundle.y + bundle.h / 2} L${col.x - 8} ${bundle.y + bundle.h / 2}`)}
          {down(`${u}-a2`, bundle.y + bundle.h, publish.y)}
          {down(`${u}-a3`, publish.y + publish.h, link.y)}
          {down(`${u}-a4`, link.y + link.h, hub.y)}
          {arrow(`${u}-a5`, `M${col.x + col.w} ${hub.y + hub.h / 2} L${engine.x - 8} ${hub.y + hub.h / 2}`)}
        </svg>

        {step(`${u}-c1`, bundle, brand(DOCKER_MARK, 'Docker'), 'Bundle with Docker, as a plugin', 'arkitekt plugin build')}
        {step(`${u}-c2`, publish, brand(GITHUB_MARK, 'GitHub'), 'Publish to GitHub', 'arkitekt plugin publish')}

        {/* that gives a link */}
        <div className={`${u}-c3 absolute flex items-center justify-center gap-2.5 rounded-full border-2 border-fd-primary bg-fd-card px-4 shadow-md`} style={{ left: col.x + 14, top: link.y, width: col.w - 28, height: link.h }}>
          <Share2 className="size-[17px] shrink-0 text-fd-primary" strokeWidth={2.2} />
          <span className="whitespace-nowrap font-mono text-[14px] font-semibold">github.com/kim-lab/otsu</span>
        </div>

        {/* a user installs it, on their own hub */}
        <div className={`${u}-c4 absolute flex items-center gap-3.5 rounded-[26px] bg-fd-primary px-4 text-fd-primary-foreground shadow-xl`} style={{ left: col.x, top: hub.y, width: col.w, height: hub.h }}>
          <span className="flex size-[46px] shrink-0 items-center justify-center rounded-xl bg-white/95 shadow-sm">
            <Logo className="size-[38px]" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="whitespace-nowrap text-[17px] font-semibold leading-tight">A user installs it on their hub</span>
            <span className="flex items-center gap-2">
              <span className="whitespace-nowrap rounded-md bg-fd-card px-2 py-1 font-mono text-[12.5px] text-fd-foreground">otsu</span>
              <span className={`${u}-btn flex h-[26px] items-center gap-1 rounded-md bg-fd-card px-2.5 text-[13px] font-semibold text-fd-foreground`}>
                <Download className="size-[13px]" strokeWidth={2.6} /> Install
              </span>
              <Check className={`${u}-done size-[16px]`} strokeWidth={3.2} />
            </span>
          </span>
        </div>

        {/* and the hub deploys it on a plugin engine: just another app, anywhere */}
        <div className={`${u}-c5 absolute flex flex-col gap-2.5 rounded-2xl border-2 border-fd-primary/60 bg-fd-card p-3.5 shadow-md`} style={{ left: engine.x, top: engine.y, width: engine.w, height: engine.h }}>
          <span className="flex items-center gap-3">
            <span className="flex size-[40px] shrink-0 items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
              <Package className="size-[23px]" strokeWidth={1.8} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[18px] font-semibold">Plugin engine</span>
              <span className="text-[12.5px] text-fd-muted-foreground">just an app · runs anywhere</span>
            </span>
          </span>
          <span className="flex flex-wrap gap-1.5">
            {['a GPU server', 'a cluster', 'a laptop'].map((m) => (
              <span key={m} className="rounded-full border border-fd-border px-2 py-0.5 text-[11.5px] text-fd-muted-foreground">
                {m}
              </span>
            ))}
          </span>
          {/* what it already runs, and the new one */}
          <span className="mt-1 flex flex-1 flex-col gap-2">
            {['stardist', 'cellpose', 'stitcher', 'analyzer'].map((name) => (
              <span key={name} className="flex h-[38px] items-center gap-2.5 rounded-lg bg-[#0f172a] px-3 font-mono text-[13px] text-slate-100">
                <span className="text-[#38bdf8]">{brand(DOCKER_MARK, 'Docker', 18)}</span> {name}
                <span className="ml-auto flex items-center gap-1.5 text-[12px] text-emerald-400">
                  <span className="size-[7px] rounded-full bg-emerald-400" /> running
                </span>
              </span>
            ))}
            <span className={`${u}-run mt-auto flex h-[42px] items-center gap-2.5 rounded-lg bg-[#0f172a] px-3 font-mono text-[13.5px] font-semibold text-slate-100 ring-2 ring-fd-primary`}>
              <span className="text-[#38bdf8]">{brand(DOCKER_MARK, 'Docker', 18)}</span> otsu
              <span className="ml-auto flex items-center gap-1.5 text-[12px] text-emerald-400">
                <span className="size-[7px] rounded-full bg-emerald-400" /> running
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* Docker's and GitHub's marks, from Simple Icons. */
const DOCKER_MARK =
  'M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z';
const GITHUB_MARK =
  'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';

/* --- 2a · errors: one log of everything, and workflows that recover from it --------- */

type RecordRow = { t: string; kind: 'call' | 'log'; text: string; on?: string; out?: string; replay?: boolean };
/* Run 41 of process_slides on HE-07: CD20, round 1 comes back at 0.41, so
   the arm carries the slide back and the OT-2 stains it again. Then the
   process dies; on resume the round-2 stain comes back from the record. */
const RECORD_BEFORE: RecordRow[] = [
  { t: '14:02:11', kind: 'call', text: 'run_protocol("stain_cd20")', on: 'ot2', out: '→ round 1', replay: true },
  { t: '14:08:40', kind: 'call', text: 'acquire_image() ×3', on: 'openuc2', out: '→ 3 tiles', replay: true },
  { t: '14:09:02', kind: 'call', text: 'stitch_images(tiles)', on: 'stitcher', out: '→ mosaic', replay: true },
  { t: '14:09:05', kind: 'call', text: 'segment_image(mosaic)', on: 'stardist', out: '→ 1 812 cells', replay: true },
  { t: '14:09:08', kind: 'call', text: 'calculate_stain_percentage(labels)', on: 'analyzer', out: '→ 0.41', replay: true },
  { t: '14:09:09', kind: 'log', text: 'log · HE-07 · CD20 at 41 %, below 0.8 · stain again' },
  { t: '14:09:12', kind: 'call', text: 'grip() · run_trajectory("to_ot2")', on: 'arkirino', out: '→ at the OT-2', replay: true },
  { t: '14:09:31', kind: 'call', text: 'run_protocol("stain_cd20")', on: 'ot2', out: '→ round 2', replay: true },
];
const RECORD_AFTER: RecordRow[] = [
  { t: '14:17:41', kind: 'call', text: 'run_trajectory("to_scope")', on: 'arkirino', out: '→ on the stage' },
  { t: '14:17:58', kind: 'call', text: 'acquire_image() ×3', on: 'openuc2', out: '→ 3 tiles' },
  { t: '14:18:12', kind: 'log', text: 'progress 50 % · HE-07 · CD20 at 86 % · next stain: Ki-67' },
];

function RecordLine({ r, at, replayAt }: { r: RecordRow; at: number; replayAt?: number }) {
  const grid = 'grid grid-cols-[76px_1fr_80px_150px] items-center gap-x-3 px-4';
  if (r.kind === 'log')
    return (
      <div className={cn(grid, 'sm-in h-[24px] border-b border-fd-border bg-fd-muted/40')} style={delay(at)}>
        <span className="font-mono text-[12px] text-fd-muted-foreground">{r.t}</span>
        <span className="col-span-3 font-mono text-[12.5px] italic text-fd-muted-foreground">{r.text}</span>
      </div>
    );
  return (
    <div className={cn(grid, 'sm-in relative h-[26px] border-b border-fd-border')} style={delay(at)}>
      <span className="font-mono text-[12.5px] text-fd-muted-foreground">{r.t}</span>
      <span className="whitespace-nowrap font-mono text-[14px] font-semibold">{r.text}</span>
      <span className="text-[13px] text-fd-muted-foreground">{r.on}</span>
      <span className="flex items-center justify-end gap-2 whitespace-nowrap font-mono text-[12.5px]">
        {r.out}
        <Check className="size-[15px] text-emerald-600" strokeWidth={3} />
      </span>
      {r.replay && replayAt !== undefined ? (
        <span className="sm-pop absolute left-[420px] top-[4px] flex items-center gap-1 rounded-full bg-fd-primary/12 px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] text-fd-primary" style={delay(replayAt)}>
          <RotateCcw className="size-[11px]" strokeWidth={2.6} /> replayed
        </span>
      ) : null}
    </div>
  );
}

/** The hub's log of run 41, in two acts. `observe`: the whole log, every
    call and log line from every machine, there on arrival: the measurement
    you watch a run with. `recover`: the same log (two rows shorter, to make
    room), and four presses of "next": the workflow's process dies; then the
    Arkitekt server goes down as well; the server comes back and nothing
    reruns by itself, it offers a replay, which is opt-in; Kim opts in, the
    finished calls come back from the log, and the run carries on without
    staining the slide twice. */
export function RecordWinFigure({ mode }: { mode: 'observe' | 'recover' }) {
  const u = useUid();
  const observe = mode === 'observe';
  const at = (i: number) => 0.2 + i * 0.03;
  const crashAt = 1.4; // the workflow's process dies
  const serverAt = 2.5; // and the server goes down too
  const askAt = 3.6; // the server is back, and offers a replay
  const replayAt = 4.8; // Kim opts in
  const resumeAt = replayAt + 0.3;
  const doneAt = observe ? 0.4 : 8.1;
  /* recover, on the figure's clock: the log, the two failures, the offer,
     the replay and the rest of the run */
  const cues = observe ? [1.2] : [1.2, 2.2, 3.3, 4.5, 9];
  /* stitch and segment are left out of the recover log: the two failures and the offer need the room */
  const before = observe ? RECORD_BEFORE : RECORD_BEFORE.filter((r) => !/^(stitch|segment)_/.test(r.text));
  const css = `
/* the offer stands until Kim takes it; then the row says what she did */
.${u}-ask { opacity: 0; }
section.present .${u}-ask { animation: ${u}-on 0.3s ease-out ${askAt}s both, ${u}-off 0.25s ease-out ${replayAt + 0.25}s forwards; }
section.present .${u}-did { animation: ${u}-on 0.3s ease-out ${replayAt + 0.3}s both; }
section.present .${u}-btn { animation: ${u}-btn 0.35s ease-out ${replayAt}s both; }
@keyframes ${u}-on { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-off { from { opacity: 1; } to { opacity: 0; } }
@keyframes ${u}-btn { 0%, 100% { transform: none; } 45% { transform: scale(0.88); } }
@media (prefers-reduced-motion: reduce) { section.present .${u}-btn { animation: none; } }
`;
  const head = 'grid grid-cols-[76px_1fr_80px_150px] items-center gap-x-3 px-4';
  return (
    <div
      className="size-full"
      role="img"
      aria-label={
        observe
          ? "The hub's log of run 41 of process_slides on slide HE-07 fills in: every call on the OT-2, the microscope, the stitcher, StarDist, the analyzer and the robot arm, with when it ran, where, and what it returned, and every log line. CD20 comes back at 0.41, so the slide is stained again. One log, for every machine, in one place."
          : "The same log of run 41. The workflow's process dies when Kim closes her laptop, and then the Arkitekt server goes down as well. When the server is back, run 41 is marked interrupted and nothing reruns by itself: replay is opt-in. Kim opts in; the run is replayed in a new process, the finished calls come back from the log without running again, so the slide is not stained twice, and the run carries on: CD20 reaches 0.86 and the next stain is Ki-67."
      }
    >
      {observe ? null : <LoopStyles css={css} />}
      <Steps live={!observe} cues={cues} className="relative flex size-full flex-col gap-2 pt-1">
      <div className="sm-in flex items-center gap-3" style={delay(0.2)}>
        <span className="flex size-[32px] items-center justify-center rounded-lg bg-fd-primary">
          <span className="flex size-[26px] items-center justify-center rounded-md bg-white/95">
            <Logo className="size-[22px]" />
          </span>
        </span>
        <span className="text-[18px] font-semibold">The log · process_slides · run 41</span>
        <ScrollText className="ml-auto size-[18px] text-fd-muted-foreground" strokeWidth={2} />
        <span className="font-mono text-[12px] text-fd-muted-foreground">{observe ? 'every call, input, output, log line' : 'replay is opt-in: nothing reruns by itself'}</span>
      </div>
      <div className="flex flex-col overflow-hidden rounded-xl border-2 border-fd-border bg-fd-card">
        {observe ? (
          <div className={cn(head, 'sm-fade h-[24px] border-b border-fd-border bg-fd-muted/60 text-[12px] font-semibold text-fd-muted-foreground')} style={delay(0.4)}>
            <span>when</span>
            <span>what was called</span>
            <span>on which app</span>
            <span className="text-right">what came back</span>
          </div>
        ) : null}
        {before.map((r, i) => (
          <RecordLine key={r.t} r={r} at={at(i)} replayAt={observe ? undefined : resumeAt + 0.5 + i * 0.1} />
        ))}
        {observe ? null : (
          <>
            <div className="sm-in flex h-[30px] items-center gap-2 border-b border-fd-border bg-red-500/8 px-4 font-mono text-[13px] font-semibold text-red-700" style={delay(crashAt)}>
              ✕ 14:15:02 · the workflow’s process died: Kim closed her laptop
            </div>
            <div className="sm-in flex h-[30px] items-center gap-2 border-b border-fd-border bg-red-500/14 px-4 font-mono text-[13px] font-semibold text-red-700" style={delay(serverAt)}>
              ✕ 14:15:31 · and then the Arkitekt server went down too: the hub rebooted
            </div>
            {/* the server is back: it offers a replay, and Kim opts in */}
            <div className="sm-in relative h-[30px] border-b border-fd-border" style={delay(askAt)}>
              <div className={`${u}-ask absolute inset-0 flex items-center gap-2 bg-amber-500/10 px-4 text-[13px] font-semibold text-amber-800 dark:text-amber-500`}>
                <span className="whitespace-nowrap">⏸ 14:17:10 · the server is back · run 41 was interrupted · nothing reruns by itself</span>
                <span className="ml-auto rounded-full border border-amber-600/60 px-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em]">opt in</span>
                <span className={`${u}-btn flex items-center gap-1 whitespace-nowrap rounded-md bg-fd-primary px-2.5 py-0.5 text-[12px] font-semibold text-fd-primary-foreground shadow-sm`}>
                  <RotateCcw className="size-[12px]" strokeWidth={2.6} /> Replay run 41
                </span>
              </div>
              <div className={`${u}-did absolute inset-0 flex items-center gap-2 bg-fd-primary/8 px-4 text-[14px] font-semibold text-fd-primary`}>
                <RotateCcw className="size-[16px]" strokeWidth={2.4} />
                <span className="whitespace-nowrap">14:17:40 · Kim opted in: replayed in a new process · finished calls come back from the log</span>
              </div>
            </div>
            {RECORD_AFTER.map((r, i) => (
              <RecordLine key={r.t} r={r} at={replayAt + 1.6 + i * 0.45} />
            ))}
          </>
        )}
      </div>
      <div className="sm-pop self-start rounded-full bg-emerald-500 px-4 py-1.5 text-[15px] font-semibold text-white shadow-md" style={delay(doneAt)}>
        {observe ? 'One log, for every machine, in one place.' : 'Same run, same answers. The slide is not stained twice.'}
      </div>
      </Steps>
    </div>
  );
}

/* --- 2a′ · errors: ten hours in, somebody closes the lid ---------------------------- */

/** The log of run 41 on the server, at the moment it matters: the first calls
    of the night, ten hours of them, and the last two before the lid closed. */
const RESUME_LOG: [string, string, string][] = [
  ['04:13:07', 'run_protocol("stain_cd3")', 'ot2'],
  ['04:19:40', 'acquire_image() ×3', 'openuc2'],
  ['04:20:05', 'segment_image(mosaic)', 'stardist'],
  ['· · ·', '1 476 more calls, over ten hours', ''],
  ['14:14:12', 'run_trajectory("to_ot2")', 'arkirino'],
  ['14:14:31', 'run_protocol("stain_cd20")', 'ot2'],
];

/** Resume, as a story. Left, Kim's laptop: `process_slides` has been running
    for ten hours. Right, the Arkitekt server, which has every call of those
    ten hours on its log. Three presses of "next": Reviewer 2 walks past and
    closes the lid, and the workflow's process dies; Kim opens it again and
    opts in to a replay, and the server streams the log back, call by call,
    until the workflow is where it was, without running anything again; then
    the next call runs for real. Under the server stands the caveat: replay
    is opt-in, and only works for a deterministic workflow. */
export function ResumeFigure() {
  const u = useUid();
  const failAt = 1.4; // Reviewer 2 turns up
  const lidAt = failAt + 0.7; // …and closes the lid
  const replayAt = 3.7; // Kim opens it again
  const streamAt = replayAt + 1; // the log comes back
  const liveAt = 7.5; // and it carries on
  const cues = [1, 3.3, 7.2, 9];
  const css = `
@keyframes ${u}-on { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-off { from { opacity: 1; } to { opacity: 0; } }
/* the screen: running, then (after the lid) replaying, then live again */
.${u}-run { opacity: 0; }
section.present .${u}-run { animation: ${u}-off 0.2s ease-out ${lidAt}s both; }
.${u}-rep { opacity: 0; }
section.present .${u}-rep { animation: ${u}-on 0.3s ease-out ${replayAt}s both, ${u}-off 0.25s ease-out ${liveAt}s forwards; }
section.present .${u}-live { animation: ${u}-on 0.3s ease-out ${liveAt}s both; }
/* the lid goes down, and comes up again */
.${u}-lid { transform-origin: 50% 100%; }
section.present .${u}-lid { animation: ${u}-close 0.45s cubic-bezier(.6,0,.9,.4) ${lidAt}s both, ${u}-open 0.45s ease-out ${replayAt - 0.4}s forwards; }
@keyframes ${u}-close { from { transform: none; } to { transform: scaleY(0.05); } }
@keyframes ${u}-open { from { transform: scaleY(0.05); } to { transform: none; } }
/* Reviewer 2, the failure, the offer */
.${u}-rev { opacity: 0; }
section.present .${u}-rev { animation: ${u}-on 0.3s ease-out ${failAt}s both, ${u}-off 0.3s ease-out ${replayAt - 0.5}s forwards; }
.${u}-dead { opacity: 0; }
section.present .${u}-dead { animation: ${u}-on 0.3s ease-out ${lidAt + 0.5}s both, ${u}-off 0.25s ease-out ${replayAt}s forwards; }
.${u}-ask { opacity: 0; }
section.present .${u}-ask { animation: ${u}-on 0.3s ease-out ${replayAt + 0.2}s both, ${u}-off 0.25s ease-out ${liveAt}s forwards; }
section.present .${u}-btn { animation: ${u}-btn 0.35s ease-out ${replayAt + 0.7}s both; }
@keyframes ${u}-btn { 0%, 100% { transform: none; } 45% { transform: scale(0.88); } }
/* the log, streamed back: the calls fly over, and the workflow catches up */
.${u}-fly { opacity: 0; }
section.present .${u}-fly { animation: ${u}-fly 0.75s cubic-bezier(.5,0,.6,1) var(--d) both; }
@keyframes ${u}-fly { 0% { opacity: 0; transform: none; } 15%, 80% { opacity: 1; } 100% { opacity: 0; transform: translate(-330px, var(--dy)) scale(0.8); } }
.${u}-fill { transform-origin: 0 50%; }
section.present .${u}-fill { animation: ${u}-fill 2.4s cubic-bezier(.3,0,.4,1) ${streamAt}s both; }
@keyframes ${u}-fill { from { transform: scaleX(0); } to { transform: none; } }
@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-lid, .${u}-fly, .${u}-fill, .${u}-btn) { animation: none; } }
`;
  const bar = (pct: number, cls?: string) => (
    <span className="relative block h-[10px] w-full overflow-hidden rounded-full bg-white/15">
      <span className={cn('absolute inset-y-0 left-0 rounded-full bg-emerald-400', cls)} style={{ width: `${pct}%` }} />
    </span>
  );
  return (
    <div className="relative mx-auto h-[446px] w-[1100px]" role="img" aria-label="Kim's process_slides workflow has been running on her laptop for ten hours. Reviewer 2 walks past and closes the lid; the workflow's process dies. The Arkitekt server has every call of those ten hours on its log. Kim opens the laptop and opts in to a replay: the server streams the log back, 1482 calls, and the workflow is where it was without running anything again. Then the next call runs for real. Ten hours, not lost. Caveat: replay is opt-in, and it only works if the workflow is deterministic.">
      <LoopStyles css={css} />
      <Steps live cues={cues} className="relative size-full">
        {/* Kim's laptop */}
        <div className="absolute left-[30px] top-[70px] w-[400px]">
          <div className={`${u}-lid relative mx-auto h-[236px] w-[364px] overflow-hidden rounded-t-2xl border-[7px] border-b-0 border-zinc-800 bg-[#0b1220] font-mono text-slate-200 dark:border-zinc-600`}>
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[12px]">
              <span className="font-semibold text-white">process_slides · run 41</span>
              <span className="text-slate-400">Kim’s laptop</span>
            </div>
            <div className={`${u}-run absolute inset-x-0 bottom-0 top-[36px] flex flex-col justify-center gap-3 px-5`}>
              <span className="text-[13px] text-emerald-300">▶ running</span>
              <span className="font-sans text-[44px] font-bold leading-none tracking-[-0.02em] text-white">10 h 02 min</span>
              <span className="text-[13px] text-slate-300">slide 14 of 20 · CD20 · round 2</span>
              {bar(70)}
            </div>
            <div className={`${u}-rep absolute inset-x-0 bottom-0 top-[36px] flex flex-col justify-center gap-3 px-5`}>
              <span className="flex items-center gap-1.5 text-[13px] text-sky-300">
                <RotateCcw className="size-[14px]" strokeWidth={2.6} /> replaying from the log
              </span>
              <span className="font-sans text-[30px] font-bold leading-none tracking-[-0.02em] text-white">1 482 calls</span>
              <span className="text-[13px] text-slate-300">streamed back by the Arkitekt server · nothing runs again</span>
              {bar(70, `${u}-fill`)}
            </div>
            <div className={`${u}-live absolute inset-x-0 bottom-0 top-[36px] flex flex-col justify-center gap-3 px-5`}>
              <span className="text-[13px] text-emerald-300">▶ back where it was</span>
              <span className="font-sans text-[44px] font-bold leading-none tracking-[-0.02em] text-white">10 h 03 min</span>
              <span className="text-[13px] text-slate-300">slide 14 of 20 · CD20 · round 2 · live again</span>
              {bar(71)}
            </div>
          </div>
          <div className="h-[16px] w-full rounded-b-2xl rounded-t-sm bg-zinc-300 shadow-md dark:bg-zinc-500" />
          {/* what just happened, under the laptop */}
          <div className="relative mt-3 h-[58px]">
            <span className={`${u}-dead absolute inset-0 text-[17px] font-bold leading-snug text-red-600`}>
              ✕ Ten hours in, the lid is closed. The workflow’s process is dead.
            </span>
            <span className={`${u}-ask absolute inset-0 flex items-center gap-3`}>
              <span className={`${u}-btn flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-fd-primary px-3.5 py-1.5 text-[16px] font-semibold text-fd-primary-foreground shadow-md`}>
                <RotateCcw className="size-[15px]" strokeWidth={2.6} /> Replay run 41
              </span>
              <span className="rounded-full border border-amber-600/60 px-2 py-px font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-amber-700 dark:text-amber-500">opt in</span>
            </span>
            <span className="sm-pop absolute left-0 top-1 whitespace-nowrap rounded-full bg-emerald-500 px-4 py-1.5 text-[16px] font-semibold text-white shadow-md" style={delay(liveAt + 0.5)}>
              Ten hours, not lost. Nothing ran twice.
            </span>
          </div>
        </div>

        {/* Reviewer 2 walks past */}
        <div className={`${u}-rev absolute left-[150px] top-[-34px] z-30 flex items-start gap-2`}>
          <div className="relative">
            <svg width={92} height={98} viewBox="252 72 64 68" aria-hidden>
              <ReviewerFace />
            </svg>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 -rotate-3 whitespace-nowrap rounded border border-black/70 bg-white px-1.5 font-mono text-[11px] font-extrabold leading-[1.5] text-red-700 shadow">REVIEWER 2</span>
          </div>
          <p className="relative mt-3 w-[168px] rounded-2xl rounded-bl-sm border-2 border-black/70 bg-white px-3 py-2 text-[14.5px] font-semibold italic leading-snug text-zinc-900 shadow-lg">“Someone left their laptop open. I’ll just close that.”</p>
        </div>

        {/* the Arkitekt server: it has all ten hours on its log */}
        <div className="absolute right-0 top-[30px] w-[600px] overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm">
          <div className="flex h-[36px] items-center gap-2 border-b-2 border-fd-border bg-fd-muted px-4">
            <Logo className="size-[18px]" />
            <span className="text-[15px] font-semibold">Arkitekt server · the log of run 41</span>
            <span className="ml-auto font-mono text-[12px] text-fd-muted-foreground">it never stopped</span>
          </div>
          {RESUME_LOG.map(([t, text, on], i) => (
            <div key={t + text} className={cn('relative grid h-[30px] grid-cols-[78px_1fr_86px_84px] items-center gap-x-3 border-b border-fd-border px-4', on ? '' : 'bg-fd-muted/40')}>
              <span className="font-mono text-[12.5px] text-fd-muted-foreground">{t}</span>
              <span className={cn('whitespace-nowrap font-mono', on ? 'text-[14px] font-semibold' : 'text-[13px] italic text-fd-muted-foreground')}>{text}</span>
              <span className="text-[13px] text-fd-muted-foreground">{on}</span>
              <span className="flex justify-end">
                <span className="sm-pop flex items-center gap-1 rounded-full bg-fd-primary/12 px-2 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.08em] text-fd-primary" style={delay(streamAt + i * 0.3)}>
                  <RotateCcw className="size-[11px]" strokeWidth={2.6} /> replayed
                </span>
              </span>
            </div>
          ))}
          <div className="sm-in flex h-[32px] items-center gap-2 border-b border-fd-border bg-red-500/10 px-4 font-mono text-[13px] font-semibold text-red-700" style={delay(lidAt + 0.5)}>
            ✕ 14:15:02 · the workflow’s process died · the lid was closed
          </div>
          <div className="sm-in flex h-[32px] items-center gap-2 border-b border-fd-border bg-fd-primary/8 px-4 text-[14px] font-semibold text-fd-primary" style={delay(replayAt + 0.9)}>
            <RotateCcw className="size-[16px]" strokeWidth={2.4} /> 14:17:40 · Kim opted in · streaming the log back to a new process
          </div>
          <div className="sm-in grid h-[32px] grid-cols-[78px_1fr_86px_84px] items-center gap-x-3 px-4" style={delay(liveAt + 0.1)}>
            <span className="font-mono text-[12.5px] text-fd-muted-foreground">14:17:41</span>
            <span className="whitespace-nowrap font-mono text-[14px] font-semibold">run_trajectory(&quot;to_scope&quot;)</span>
            <span className="text-[13px] text-fd-muted-foreground">arkirino</span>
            <span className="text-right font-mono text-[11.5px] font-bold uppercase tracking-[0.08em] text-emerald-600">▶ live</span>
          </div>
        </div>
        {/* the caveat: replay is a choice, and it has a condition */}
        <div className="sm-in absolute inset-x-0 top-[398px] flex items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[#d97706]/60 bg-[#d97706]/5 px-4 py-2.5" style={delay(replayAt + 0.4)}>
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#d97706]">Caveat</span>
          <span className="text-[16px] leading-snug">
            Great for large <b>deterministic</b> analysis pipelines, not always great for <b>“random”</b> robot automation.
          </span>
        </div>
        {/* the calls, on their way back to the laptop */}
        {RESUME_LOG.map(([t, text], i) => (
          <span key={t + text} aria-hidden className={`${u}-fly sm-animate absolute left-[520px] z-20 flex items-center gap-1 whitespace-nowrap rounded-full border-2 border-fd-primary bg-fd-card px-2.5 py-0.5 font-mono text-[11.5px] font-bold text-fd-primary shadow-lg`} style={{ top: 68 + i * 30, '--d': `${streamAt + i * 0.3}s`, '--dy': `${110 - i * 30}px` } as CSSProperties}>
            <RotateCcw className="size-[11px]" strokeWidth={2.6} /> {text.split('(')[0].slice(0, 22)}
          </span>
        ))}
      </Steps>
    </div>
  );
}

/* --- 2b · errors: ask a person ---------------------------------------------------------- */

type CodeTok = [string, 'k' | 's' | 'f' | 'd' | 'h' | ''];
const HOLD_CODE: CodeTok[][] = [
  [['@app.workflow', 'd']],
  [['def', 'k'], [' process_slides', 'f'], ['(robot, ot2, scope, stitcher, stardist,', '']],
  [['                   analyzer, slide, panel, *, task):', '']],
  [['    ', ''], ['for', 'k'], [' stain ', ''], ['in', 'k'], [' panel:', '']],
  [['        ', ''], ['for', 'k'], [' round ', ''], ['in', 'k'], [' range(MAX_ROUNDS):', '']],
  [['            robot.run_trajectory(', ''], ['"to_ot2"', 's'], [')', '']],
  [['            ot2.run_protocol(PROTOCOL[stain])', '']],
  [['            robot.run_trajectory(', ''], ['"to_scope"', 's'], [')', '']],
  [['            tiles = [scope.acquire_image() ', ''], ['for', 'k'], [' _ ', ''], ['in', 'k'], [' TILES]', '']],
  [['            mosaic = stitcher.stitch_images(tiles)', '']],
  [['            mask = stardist.segment_image(mosaic)', '']],
  [['            pct = analyzer.calculate_stain_percentage(mask)', '']],
  [['            ', ''], ['if', 'k'], [' pct >= TARGET: ', ''], ['break', 'k']],
  [['        ', ''], ['else', 'k'], [':', '']],
  [['            task.hold(', 'h'], ['f"{slide}: {stain} at {pct:.0%}. "', 's']],
  [['                      ', ''], ['"Swap the bottle, then resume."', 's'], [')', 'h']],
];
/** The two lines of HOLD_CODE that ask Kim. */
const HOLD_LINES = [14, 15];
/** The OT-2's stain bottles; CD20 has run low. */
const BOTTLES = [
  { name: 'CD3', fill: 70 },
  { name: 'CD20', fill: 10 },
  { name: 'Ki-67', fill: 80 },
  { name: 'PanCK', fill: 75 },
];
const HOLD_TOK: Record<CodeTok[1], string> = {
  k: 'text-fd-primary font-semibold',
  s: 'text-emerald-600',
  f: 'text-sky-600',
  d: 'text-amber-600',
  h: 'font-bold text-fd-foreground',
  '': '',
};

/** One of the OT-2's stain bottles: a cap, a glass body, the stain in it. */
function StainBottle({ fill, low = false }: { fill: number; low?: boolean }) {
  return (
    <span className="relative block h-[84px] w-[44px]">
      <span className="absolute left-1/2 top-0 h-[10px] w-[22px] -translate-x-1/2 rounded-sm bg-zinc-500" />
      <span className={cn('absolute inset-x-0 bottom-0 top-[8px] overflow-hidden rounded-b-lg rounded-t-md border-2 bg-fd-card', low ? 'border-amber-500' : 'border-fd-border')}>
        <span className="absolute inset-x-0 bottom-0 bg-[#8a5a2b]/80" style={{ height: `${fill}%` }} />
      </span>
    </span>
  );
}

/** When code can't fix it: the workflow calls `task.hold`. Five beats, one
    per press of "next": the code, running; the hold (the two lines light up
    and the run is handed over to the Arkitekt server, which now has
    control); the server asks Kim, and the hold pops up on her phone; Kim
    swaps the bottle; she taps resume and the run carries on. Next to resume
    there is always abort: any task can be aborted, immediately. */
export function HoldWinFigure() {
  const u = useUid();
  const hlAt = 1.2; // the hold lines light up
  const holdAt = 2.5; // the server has the run
  const pushAt = 3.4; // the server asks Kim
  const noteAt = 4.1; // it is on her phone
  const swapAt = 5.2;
  const resumeAt = 7.3;
  const cues = [1, 3.2, 5, 6.9, 9.4];
  const css = `
.${u}-hl { opacity: 0; }
section.present .${u}-hl { animation: ${u}-hl 0.5s ease-out ${hlAt}s both; }
@keyframes ${u}-hl { from { opacity: 0; } to { opacity: 1; } }
/* the run waits at the hold, from the call until Kim resumes */
.${u}-wait { opacity: 0; }
section.present .${u}-wait { animation: ${u}-on 0.3s ease-out ${hlAt + 0.3}s both, ${u}-off 0.25s ease-out ${resumeAt + 0.3}s forwards; }
/* control goes over to the server, and the server's question on to the phone */
.${u}-t1, .${u}-t2 { opacity: 0; }
section.present .${u}-t1 { animation: ${u}-t1 0.9s cubic-bezier(.5,0,.3,1) ${hlAt + 0.4}s both; }
@keyframes ${u}-t1 { 0% { opacity: 0; transform: none; } 12%, 85% { opacity: 1; } 100% { opacity: 0; transform: translate(250px, -236px) scale(0.85); } }
section.present .${u}-t2 { animation: ${u}-t2 0.7s cubic-bezier(.5,0,.3,1) ${pushAt}s both; }
@keyframes ${u}-t2 { 0% { opacity: 0; transform: none; } 15%, 85% { opacity: 1; } 100% { opacity: 0; transform: translate(236px, 6px) scale(0.85); } }
/* the server: running, until it holds the run */
.${u}-run { opacity: 0; }
section.present .${u}-run { animation: ${u}-off 0.25s ease-out ${holdAt}s both; }
section.present .${u}-took { animation: ${u}-took 0.5s ease-out ${holdAt}s both; }
@keyframes ${u}-took { 0% { box-shadow: 0 0 0 0 rgba(245,158,11,0.7); } 100% { box-shadow: 0 0 0 16px rgba(245,158,11,0); } }
.${u}-note { opacity: 0; }
section.present .${u}-note { animation: ${u}-on 0.3s ease-out ${noteAt}s both, ${u}-off 0.25s ease-out ${resumeAt + 0.3}s forwards; }
/* the empty CD20 bottle goes up and out, a full one comes down in its place */
.${u}-out { opacity: 0; }
section.present .${u}-out { animation: ${u}-out 0.8s ease-in ${swapAt}s both; }
@keyframes ${u}-out { from { opacity: 1; transform: none; } to { opacity: 0; transform: translateY(-110px); } }
section.present .${u}-in { animation: ${u}-in 0.8s cubic-bezier(.2,.7,.3,1) ${swapAt + 0.6}s both; }
@keyframes ${u}-in { from { opacity: 0; transform: translateY(-110px); } to { opacity: 1; transform: none; } }
section.present .${u}-press { animation: ${u}-press 0.35s ease-out ${resumeAt}s both; }
@keyframes ${u}-press { 0%, 100% { transform: none; } 45% { transform: scale(0.9); } }
/* off the current slide: the end state, resumed */
.${u}-held { opacity: 0; }
section.present .${u}-held { animation: ${u}-on 0.3s ease-out ${holdAt}s both, ${u}-off 0.25s ease-out ${resumeAt + 0.3}s forwards; }
section.present .${u}-go { animation: ${u}-on 0.3s ease-out ${resumeAt + 0.3}s both; }
@keyframes ${u}-on { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-off { from { opacity: 1; } to { opacity: 0; } }
/* the phone buzzes when the hold arrives, and Kim taps resume on it */
section.present .${u}-buzz { animation: ${u}-buzz 0.6s ease-in-out ${noteAt + 0.1}s both; }
@keyframes ${u}-buzz { 0%, 100% { transform: none; } 15%, 55% { transform: rotate(-3deg); } 35%, 75% { transform: rotate(3deg); } }
.${u}-tap { opacity: 0; transform-box: fill-box; transform-origin: center; }
section.present .${u}-tap { animation: ${u}-tap 0.7s ease-out ${resumeAt - 0.1}s both; }
@keyframes ${u}-tap { 0% { opacity: 0; transform: scale(0.4); } 1% { opacity: 0.85; transform: scale(0.4); } 100% { opacity: 0; transform: scale(1.9); } }
@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-out, .${u}-in, .${u}-buzz, .${u}-tap, .${u}-t1, .${u}-t2, .${u}-took) { animation: none; } }
`;
  const message = 'HE-07: CD20 at 52%. Swap the bottle, then resume.';
  return (
    <div className="relative size-full" role="img" aria-label="Kim's process_slides workflow calls task.hold when a stain is still below target after the last round. The run pauses and is handed to the Arkitekt server, which now has control; the Arkitekt app on Kim's phone pops up with the message: HE-07, CD20 at 52%, swap the bottle, then resume. She swaps the nearly empty CD20 bottle on the OT-2 for a full one and taps resume on her phone. The server shows the run resumed by Kim, and it carries on with the next stain, Ki-67. Any task can also be aborted, immediately.">
      <LoopStyles css={css} />
      <Steps live cues={cues} className="relative size-full">
      {/* the code */}
      <div className="absolute left-0 top-[6px] w-[466px] overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-sm">
        <div className="flex h-[34px] items-center border-b border-fd-border px-4 font-mono text-[13px] font-semibold">process_slides.py</div>
        <pre className="relative px-4 py-2.5 font-mono text-[12px] leading-[1.5]">
          {HOLD_CODE.map((line, i) => (
            <span key={i} className="relative block whitespace-pre">
              {HOLD_LINES.includes(i) ? <span className={`${u}-hl absolute inset-y-0 -left-4 -right-4 bg-amber-400/25`} /> : null}
              {i === HOLD_LINES[0] ? (
                <span className={`${u}-wait absolute right-[-6px] top-[1px] z-10 rounded-md bg-amber-500 px-1.5 font-sans text-[10.5px] font-bold leading-[16px] text-white`}>⏸ waits here</span>
              ) : null}
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
      {/* control, on its way to the server */}
      <span aria-hidden className={`${u}-t1 absolute left-[330px] top-[316px] z-20 flex items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-amber-500 bg-fd-card px-2.5 py-0.5 font-mono text-[12px] font-bold text-amber-700 shadow-lg`}>
        ⏸ hold · run 42
      </span>
      {/* …and the server's question, on its way to Kim's phone */}
      <span aria-hidden className={`${u}-t2 absolute left-[650px] top-[112px] z-20 flex items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-fd-primary bg-fd-card px-2.5 py-0.5 font-mono text-[12px] font-bold text-fd-primary shadow-lg`}>
        <Smartphone className="size-[13px]" strokeWidth={2.6} /> ask Kim
      </span>

      {/* the Arkitekt server: it takes the run over, and holds it */}
      <div className="absolute right-0 top-[6px] w-[330px]">
        <div className={`${u}-took overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-card shadow-md`}>
          <div className="flex h-[28px] items-center gap-1.5 border-b border-fd-border bg-fd-muted px-3">
            <span className="flex items-center gap-1.5 text-[12px] font-semibold">
              <Logo className="size-[14px]" /> Arkitekt server
            </span>
            <span className="ml-auto font-mono text-[11px] text-fd-muted-foreground">runs › 42</span>
          </div>
        <div className="relative h-[150px] p-3.5">
          <div className={`${u}-run absolute inset-3.5 flex flex-col gap-2`}>
            <span className="flex items-center gap-2 text-[14px] font-semibold text-fd-primary">
              <span className="flex size-[22px] items-center justify-center rounded-full bg-fd-primary/15 text-[11px]">▶</span> run 42 is running
            </span>
            <span className="font-mono text-[12px] leading-snug text-fd-muted-foreground">process_slides · HE-07</span>
            <span className="font-mono text-[12px] leading-snug text-fd-muted-foreground">CD20 · round 3 of 3 · 52 %</span>
          </div>
          <div className={`${u}-held absolute inset-3.5 flex flex-col gap-2`}>
            <span className="flex items-center gap-2 text-[14px] font-semibold text-amber-700">
              <span className="flex size-[22px] items-center justify-center rounded-full bg-amber-500/20">⏸</span> run 42 is on hold
            </span>
            <span className="text-[15px] font-semibold leading-snug">{message}</span>
            <span className="mt-auto text-[12.5px] leading-snug text-fd-muted-foreground">The server has control now: the workflow waits, and Kim can resume it, or abort it immediately.</span>
          </div>
          <div className={`${u}-go absolute inset-3.5 flex flex-col gap-1.5`}>
            <span className="flex items-center gap-2 text-[14px] font-semibold text-fd-primary">
              <RotateCcw className="size-[16px]" strokeWidth={2.4} /> resumed by Kim · 14:07:12
            </span>
            <span className="-mt-1 flex items-center gap-1 text-[12px] text-fd-muted-foreground">
              <Smartphone className="size-[12px]" strokeWidth={2.4} /> from her phone, after the swap
            </span>
            <span className="sm-in whitespace-nowrap font-mono text-[11.5px]" style={delay(resumeAt + 0.8)}>
              next stain: Ki-67 · round 1
            </span>
            <span className="sm-in whitespace-nowrap font-mono text-[11.5px]" style={delay(resumeAt + 1.3)}>
              run_protocol(&quot;stain_ki67&quot;) ✓
            </span>
          </div>
        </div>
        </div>

        {/* the stain bottles on the OT-2 */}
        <div className="relative mt-4 h-[160px] overflow-hidden rounded-2xl border-2 border-fd-border bg-fd-muted/50">
          <span className="absolute left-3 top-2 font-mono text-[11px] font-semibold text-fd-muted-foreground">OT-2 deck</span>
          <span className="sm-fade absolute right-3 top-2 text-[13px] font-semibold text-amber-700 dark:text-amber-500" style={delay(swapAt)}>
            Kim swaps the CD20 bottle
          </span>
          {BOTTLES.map((b, i) => (
            <div key={b.name} className="absolute top-[36px] flex w-[44px] flex-col items-center gap-1.5" style={{ left: 34 + i * 74 }}>
              {b.name === 'CD20' ? (
                <span className="relative block h-[84px] w-[44px]">
                  <span className={`${u}-out absolute inset-0`}>
                    <StainBottle fill={b.fill} low />
                  </span>
                  <span className={`${u}-in absolute inset-0`}>
                    <StainBottle fill={90} />
                  </span>
                </span>
              ) : (
                <StainBottle fill={b.fill} />
              )}
              <span className={cn('whitespace-nowrap font-mono text-[11px]', b.name === 'CD20' ? 'font-semibold text-fd-foreground' : 'text-fd-muted-foreground')}>{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* …and on Kim's phone, in her pocket at the OT-2 */}
      <div className="absolute right-[-182px] top-[34px] flex w-[156px] flex-col items-center gap-2">
        <div>
          <div className={`${u}-buzz relative h-[300px] w-[156px] overflow-hidden rounded-[28px] border-[5px] border-zinc-800 bg-gradient-to-b from-slate-700 to-slate-900 shadow-xl dark:border-zinc-600`}>
            <span className="absolute left-1/2 top-[6px] h-[14px] w-[52px] -translate-x-1/2 rounded-full bg-zinc-900" />
            <span className="absolute inset-x-0 top-[26px] text-center text-[30px] font-semibold leading-none text-white/90">14:06</span>
            {/* the push notification */}
            <div className={`${u}-note absolute inset-x-2 top-[72px]`}>
              <div className="sm-pop rounded-2xl bg-white/95 p-2 text-zinc-900 shadow-lg" style={delay(noteAt)}>
                <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-zinc-500">
                  <Logo className="size-[12px]" /> Arkitekt · now
                </span>
                <span className="mt-1 block text-[11px] font-bold leading-tight text-amber-700">⏸ run 42 is on hold</span>
                <span className="mt-0.5 block text-[11px] leading-snug">{message}</span>
                <span className="relative mt-2 flex gap-1">
                  <span className={`${u}-press flex h-[24px] flex-1 items-center justify-center rounded-md bg-fd-primary text-[11px] font-semibold text-fd-primary-foreground`}>Resume</span>
                  <span className="flex h-[24px] w-[44px] items-center justify-center rounded-md border border-red-300 text-[10px] font-semibold text-red-600">Abort</span>
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
                <span className="mt-0.5 block text-[11px] leading-snug text-zinc-600">carrying on with Ki-67</span>
              </div>
            </div>
            <span className="absolute bottom-[7px] left-1/2 h-[4px] w-[56px] -translate-x-1/2 rounded-full bg-white/60" />
          </div>
        </div>
      </div>
      </Steps>
    </div>
  );
}

/* --- 3 · data: mikro and coordinates ---------------------------------------------- */

/* H&E tissue as CSS backgrounds: eosin pink, with haematoxylin nuclei on two
   offset grids. Every pattern takes the same (dx, dy) shift, so tiles cut
   from one slide line up into one mosaic, and a later round's stain or
   labels sit on exactly the same cells. The first nuclei grid (17 × 15 px,
   centre at 8.5, 7.5) is the one the stain and the labels ring. */
const HE_BG = (dx = 0, dy = 0) =>
  [
    `radial-gradient(circle, #4c2a7a 0 2.3px, rgba(76,42,122,0.5) 2.9px, transparent 3.4px) ${dx}px ${dy}px / 17px 15px`,
    `radial-gradient(circle, #6b4596 0 1.6px, transparent 2.3px) ${dx + 5}px ${dy + 9}px / 23px 19px`,
    `radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.35), transparent 60%) ${dx}px ${dy}px / 90px 70px`,
    'linear-gradient(135deg, #f2b8cf, #e595b6)',
  ].join(', ');
const RING = (color: string, r: number) => `radial-gradient(circle, transparent 0 ${r - 1.5}px, ${color} ${r - 1}px ${r + 0.5}px, transparent ${r + 1}px)`;
/** CD20 (DAB brown) on the membranes of some cells: every second cell of the
    first grid, and every third one more. */
const CD20_BG = (dx = 0, dy = 0) =>
  [`${RING('rgba(122,72,24,0.92)', 4.9)} ${dx - 8.5}px ${dy - 7.5}px / 34px 30px`, `${RING('rgba(122,72,24,0.92)', 4.9)} ${dx}px ${dy}px / 51px 45px`].join(', ');
/** StarDist's labels: a ring round every cell of the first grid. */
const LABELS_BG = (dx = 0, dy = 0) => `${RING('rgba(52,211,153,0.95)', 5.6)} ${dx}px ${dy}px / 17px 15px`;

/** Introducing the coordinate system: each image gets a place in a
    coordinate system, and everything made from it is related to it. The
    example is Kim's own workflow. On the left the stage; on the right its
    lineage graph, growing to the right one step per press of "next": the
    nodes are the images (the slide, the three tiles, the mosaic, the labels)
    and finally the table, and every edge is a step of the workflow from
    before: acquire, stitch, segment, analyse. */
export function DataWinFigure() {
  const stage = 360;
  // the three tiles of HE-07, in stage pixels; they overlap by 8 px
  const tile = 92;
  const tiles = [76, 160, 244];
  const mo = { x: 76, y: 134, w: 244 + tile - 76, h: tile };
  const tileAt = (i: number) => 1.1 + i * 0.45;
  const stitchAt = 4.2; // the tiles become one mosaic
  const segAt = 5.4; // the labels, on the same coordinates
  const tabAt = 6.6; // the table, one row per cell
  const cues = [0.9, 3.9, 5.1, 6.3, 7.9];
  /* the lineage graph, growing to the right: the images are its nodes, the
     steps of the workflow from before are its edges */
  const G = { w: 780, h: 400, y: 178 };
  const node = { slide: 74, tiles: 236, mosaic: 404, labels: 582, table: 734 };
  const tileYs = [G.y - 62, G.y, G.y + 62];
  const acqAt = tileAt(0) + 0.9;
  const steps: { name: string; call: string; x: number; at: number }[] = [
    { name: 'acquire', call: 'acquire_image()', x: (node.slide + node.tiles) / 2 + 8, at: acqAt },
    { name: 'stitch', call: 'stitch_images()', x: (node.tiles + node.mosaic) / 2 - 16, at: stitchAt + 0.1 },
    { name: 'segment', call: 'segment_image()', x: (node.mosaic + node.labels) / 2, at: segAt + 0.1 },
    { name: 'analyse', call: 'calculate_stain_percentage()', x: (node.labels + node.table) / 2 + 12, at: tabAt + 0.1 },
  ];
  const fan = (x0: number, y0: number, x1: number, y1: number) => `M${x0} ${y0} C ${(x0 + x1) / 2} ${y0}, ${(x0 + x1) / 2} ${y1}, ${x1} ${y1}`;
  const edge = (d: string, at: number, key: string) => <path key={key} className="sm-draw" style={delay(at)} pathLength={1} strokeDasharray="1" d={d} fill="none" stroke={PRIMARY} strokeWidth={2.4} />;
  const caption = (x: number, y: number, name: string, rel: string, at: number) => (
    <span className={at > 0 ? 'sm-in absolute flex -translate-x-1/2 flex-col items-center gap-1' : 'absolute flex -translate-x-1/2 flex-col items-center gap-1'} style={{ left: x, top: y, ...(at > 0 ? delay(at + 0.3) : {}) }}>
      <span className="whitespace-nowrap font-mono text-[14px] font-semibold">{name}</span>
      <span className="whitespace-nowrap rounded-full bg-fd-primary/12 px-2 py-px font-mono text-[11px] font-bold text-fd-primary">{rel}</span>
    </span>
  );
  return (
    <div className="relative size-full" role="img" aria-label="Each image is placed in a coordinate system, and the workflow's results form a lineage graph that grows to the right, its edges the steps of the workflow, acquire, stitch, segment and analyse: the original image of slide HE-07; three tiles, each placed on the stage by an affine transform, from acquire_image; the mosaic, stitched from them by stitch_images; the labels, on the same coordinates, from segment_image; and a table with one row per cell, from calculate_stain_percentage.">
      <Steps live cues={cues} className="relative size-full">
      {/* the stage: one coordinate system */}
      <div className="absolute left-[30px] top-[18px]" style={{ width: stage, height: stage }}>
        <div
          className="absolute inset-0 rounded-md border-2 border-fd-border"
          style={{ backgroundImage: 'linear-gradient(var(--color-fd-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-fd-border) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <span className="absolute left-2 top-1.5 font-mono text-[11px] font-semibold text-fd-muted-foreground">stage · one coordinate system</span>
        {/* the slide, its label end on the left */}
        <div className="absolute left-[14px] top-[100px] h-[162px] w-[332px] overflow-hidden rounded-md border-2 border-fd-border bg-fd-card/70 shadow-sm">
          <span className="absolute inset-y-0 left-0 flex w-[46px] items-center justify-center bg-fd-muted font-mono text-[11px] font-semibold">HE-07</span>
        </div>
        {/* the tiles, each landing on its own stage coordinates */}
        {tiles.map((x, i) => (
          <div key={x} className="sm-fade absolute" style={{ left: x, top: mo.y, width: tile, height: tile, ...delay(tileAt(i) - 0.05) }}>
            <div className="sm-converge size-full shadow-md ring-1 ring-white/70" style={{ ...delay(tileAt(i)), background: HE_BG(mo.x - x, 0), '--x': '300px', '--y': '-90px' } as CSSProperties} />
          </div>
        ))}
        <span className="sm-fade absolute whitespace-nowrap rounded bg-black/60 px-1.5 py-0.5 font-mono text-[11px] text-white" style={{ left: mo.x, top: mo.y - 24, ...delay(tileAt(2) + 1.4) }}>
          round 1 · 3 tiles, placed
        </span>
        {/* stitched: one mosaic */}
        <div className="sm-fade pointer-events-none absolute ring-2 ring-fd-foreground/80" style={{ left: mo.x, top: mo.y, width: mo.w, height: mo.h, ...delay(stitchAt) }} />
        <span className="sm-fade absolute whitespace-nowrap rounded bg-fd-foreground px-1.5 py-0.5 font-mono text-[11px] font-semibold text-fd-background" style={{ left: mo.x + 176, top: mo.y - 24, ...delay(stitchAt + 0.2) }}>
          → mosaic
        </span>
        {/* segmented: the labels, on the same coordinates */}
        <div className="sm-fade pointer-events-none absolute" style={{ left: mo.x, top: mo.y, width: mo.w, height: mo.h, background: LABELS_BG(), ...delay(segAt) }} />
        {/* measured: a table, one row per cell */}
        <div className="sm-pop absolute left-[14px] top-[272px] w-[178px] overflow-hidden rounded-lg border-2 border-fd-border bg-fd-card font-mono text-[10.5px] shadow-md" style={delay(tabAt)}>
          <span className="flex items-center gap-1.5 bg-fd-muted px-2 py-0.5 font-semibold">
            <Table2 className="size-[11px] text-fd-primary" strokeWidth={2.4} /> table · stain per cell
          </span>
          {[
            ['cell 0001', '0.91'],
            ['cell 0002', '0.12'],
            ['… 1 812 rows', '→ 41 %'],
          ].map(([k, val]) => (
            <span key={k} className="flex justify-between border-t border-fd-border px-2 py-px">
              <span className="text-fd-muted-foreground">{k}</span>
              <span className="font-semibold">{val}</span>
            </span>
          ))}
        </div>
        <span className="absolute bottom-[-24px] left-0 right-0 flex justify-between font-mono text-[11px] text-fd-muted-foreground">
          <span>0</span>
          <span>stage x · mm</span>
          <span>80</span>
        </span>
      </div>

      {/* the same thing, as a lineage graph: images are the nodes, the workflow's steps the edges */}
      <div className="absolute top-0" style={{ left: 440, width: G.w, height: G.h }}>
        <span className="absolute left-0 top-0 flex items-center gap-2 text-[17px] font-semibold">
          <Workflow className="size-[18px] text-fd-primary" strokeWidth={2.2} />
          The lineage graph: every step of the workflow from before is an edge.
        </span>
        <svg width={G.w} height={G.h} viewBox={`0 0 ${G.w} ${G.h}`} className="absolute inset-0" aria-hidden>
          {tileYs.map((ty, i) => edge(fan(node.slide + 44, G.y, node.tiles - 26, ty), acqAt + i * 0.1, `a${i}`))}
          {tileYs.map((ty, i) => edge(fan(node.tiles + 26, ty, node.mosaic - 62, G.y), stitchAt + 0.1 + i * 0.1, `s${i}`))}
          {edge(`M${node.mosaic + 62} ${G.y} L${node.labels - 62} ${G.y}`, segAt + 0.1, 'seg')}
          {edge(`M${node.labels + 62} ${G.y} L${node.table - 34} ${G.y}`, tabAt + 0.1, 'ana')}
        </svg>

        {/* the nodes: the images, and at the end what was measured on them */}
        {/* the root: the empty slide. No image, only the coordinate system everything else is placed in */}
        <span className="absolute h-[46px] w-[88px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border-2 border-fd-border bg-fd-card/70 shadow-md" style={{ left: node.slide, top: G.y }}>
          <span className="absolute inset-y-0 left-0 w-[18px] bg-fd-muted" />
        </span>
        {caption(node.slide, G.y + 32, 'slide HE-07', 'root coordinate system', 0)}
        {tileYs.map((ty, i) => (
          <span key={ty} className="sm-pop absolute size-[50px] -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md ring-2 ring-fd-border" style={{ left: node.tiles, top: ty, background: HE_BG(mo.x - tiles[i], 0), ...delay(acqAt + 0.4 + i * 0.1) }} />
        ))}
        {caption(node.tiles, tileYs[2] + 34, 'tiles ×3', 'affine → stage', acqAt + 0.4)}
        <span className="sm-pop absolute h-[50px] w-[124px] -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md ring-2 ring-fd-border" style={{ left: node.mosaic, top: G.y, background: HE_BG(), ...delay(stitchAt + 0.6) }} />
        {caption(node.mosaic, G.y + 34, 'mosaic', 'one image', stitchAt + 0.6)}
        <span className="sm-pop absolute h-[50px] w-[124px] -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md ring-2 ring-fd-border" style={{ left: node.labels, top: G.y, background: `${LABELS_BG()}, ${HE_BG()}`, ...delay(segAt + 0.6) }} />
        {caption(node.labels, G.y + 34, 'labels', 'same coordinates', segAt + 0.6)}
        <span className="sm-pop absolute flex size-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-fd-card shadow-md ring-2 ring-fd-border" style={{ left: node.table, top: G.y, ...delay(tabAt + 0.6) }}>
          <Table2 className="size-[36px] text-fd-primary" strokeWidth={1.8} />
        </span>
        {caption(node.table, G.y + 44, 'table', 'one row per cell', tabAt + 0.6)}

        {/* the edges' names: the steps of the acquisition pipeline */}
        {steps.map((st) => (
          <span key={st.name} className="sm-pop absolute flex -translate-x-1/2 flex-col items-center gap-1" style={{ left: st.x, top: 46, ...delay(st.at + 0.2) }}>
            <span className="rounded-full bg-fd-primary px-3 py-1 text-[15px] font-bold leading-none text-fd-primary-foreground shadow-sm">{st.name}</span>
            <span className="whitespace-nowrap font-mono text-[10.5px] text-fd-muted-foreground">{st.call}</span>
          </span>
        ))}
      </div>
      </Steps>
    </div>
  );
}

/* --- the log: everything that happens, in order ------------------------------------ */

type LogKind = 'call' | 'state' | 'log';
/** One stretch of run 41, as the hub saw it: every call with each change of
    its status, every state update the apps published, every log line. */
const LONG_LOG: [string, LogKind, string, string, string][] = [
  ['14:02:11.204', 'call', 'run_protocol', 'ot2', 'ASSIGNED · stain_cd20'],
  ['14:02:11.310', 'call', 'run_protocol', 'ot2', 'RUNNING'],
  ['14:02:14.902', 'state', 'deck.pipette', 'ot2', 'A3 · 120 µl'],
  ['14:08:39.870', 'call', 'run_protocol', 'ot2', 'DONE'],
  ['14:08:39.911', 'call', 'run_trajectory', 'arkirino', 'RUNNING · to_scope'],
  ['14:08:39.950', 'state', 'pose', 'arkirino', 'x 0.41 · y 0.12 · z 0.23 m'],
  ['14:08:39.998', 'call', 'run_trajectory', 'arkirino', 'DONE'],
  ['14:08:40.012', 'call', 'move_stage', 'openuc2', 'ASSIGNED'],
  ['14:08:40.540', 'state', 'stage.position', 'openuc2', 'x 16.9 · y 29.8 mm'],
  ['14:08:40.551', 'call', 'move_stage', 'openuc2', 'DONE'],
  ['14:08:40.560', 'call', 'acquire_image', 'openuc2', 'ASSIGNED · 10x'],
  ['14:08:41.930', 'call', 'acquire_image', 'openuc2', 'DONE · image #0116'],
  ['14:09:02.118', 'call', 'stitch_images', 'stitcher', 'DONE · mosaic #0119'],
  ['14:09:05.040', 'call', 'segment_image', 'stardist', 'RUNNING'],
  ['14:09:07.316', 'log', 'segment_image', 'stardist', '“1 812 cells”'],
  ['14:09:07.320', 'call', 'segment_image', 'stardist', 'DONE · labels #0120'],
  ['14:09:08.001', 'call', 'calculate_stain_percentage', 'analyzer', 'DONE · 0.41'],
  ['14:09:08.014', 'log', 'process_slides', 'stainstorm', '“41 %: stain again”'],
  ['14:09:12.330', 'call', 'run_trajectory', 'arkirino', 'RUNNING · to_ot2'],
];

/* The log writes itself: one line every `LOG_EVERY` seconds from `LOG_FROM`. */
const LOG_FROM = 0.5;
const LOG_EVERY = 0.38;
const logAt = (i: number) => LOG_FROM + i * LOG_EVERY;
const LOG_ARM = {
  toScope: LONG_LOG.findIndex((r) => r[4] === 'RUNNING · to_scope'),
  toOt2: LONG_LOG.findIndex((r) => r[4] === 'RUNNING · to_ot2'),
};
/* …and the lines the microscope's window follows: its stage arriving, its image done */
const LOG_SCOPE = {
  stage: LONG_LOG.findIndex((r) => r[2] === 'stage.position'),
  image: LONG_LOG.findIndex((r) => r[4].startsWith('DONE · image')),
};

/** The log, long and writing itself: calls, state updates and log lines of
    every app arrive one after the other, in the order they happened. Over
    its bottom corners, two devices, each in its own window: the robot arm in 3D,
    moving exactly when the log says it does (to the microscope on its
    `run_trajectory · to_scope` line, back to the OT-2 on `to_ot2`), and the
    microscope, a popover on the bottom right that turns up with its first
    line and shows its stage and its image as their lines arrive. Each window carries the timestamp of the line it is showing: two
    devices, one clock. Plays once, each time the slide comes up
    (`sm-animate`). */
export function LongLogFigure() {
  const u = useUid();
  const chip: Record<LogKind, string> = {
    call: 'bg-sky-400/15 text-sky-300',
    state: 'bg-emerald-400/15 text-emerald-300',
    log: 'bg-amber-400/15 text-amber-300',
  };
  const css = `
.${u}-row, .${u}-to { opacity: 0; }
section.present .${u}-row { animation: ${u}-row 0.3s ease-out var(--d) both; }
@keyframes ${u}-row { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
section.present .${u}-to { animation: ${u}-to var(--len) linear var(--d) both; }
@keyframes ${u}-to { 0% { opacity: 0; } 8%, 100% { opacity: 1; } }
section.present .${u}-to-1 { animation: ${u}-to1 var(--len) linear var(--d) both; }
@keyframes ${u}-to1 { 0% { opacity: 0; } 8%, 92% { opacity: 1; } 100% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-row, .${u}-to) { animation: none; opacity: 1; } }
`;
  const scopeAt = logAt(LOG_ARM.toScope);
  const ot2At = logAt(LOG_ARM.toOt2);
  const stageAt = logAt(LOG_SCOPE.stage);
  const imageAt = logAt(LOG_SCOPE.image);
  const stamp = (i: number) => LONG_LOG[i][0];
  return (
    <div className="relative h-[600px] w-[690px] shrink-0 font-mono text-[13px] text-slate-200">
    <div
      className="absolute inset-0 overflow-hidden rounded-2xl bg-[#0b1220] shadow-xl"
      role="img"
      aria-label={`The log of run 41 writing itself: ${LONG_LOG.length} entries in the order they happened, each with its time to the millisecond, whether it is a call, a state update or a log line, the action or state, the app, and what happened. For example: ${LONG_LOG.slice(4, 10)
        .map(([t, kind, what, app, detail]) => `${t} ${kind} ${what} on ${app}: ${detail}`)
        .join('; ')}. Beside the log, two windows: the robot arm in 3D moves to the microscope as its run_trajectory line appears, and later back towards the OT-2; the openUC2 microscope shows its stage position and its image as their lines appear. Each window shows the timestamp of its line: every device logs on one universal clock.`}
    >
      <LoopStyles css={css} />
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[13px]">
        <span className="font-semibold text-white">the log · process_slides · run 41</span>
        <span className="rounded bg-white/10 px-2 py-px text-[11px] font-semibold text-white">one clock · universal timestamps</span>
        <span className="flex gap-1.5 text-[11px]">
          {(['call', 'state', 'log'] as const).map((k) => (
            <span key={k} className={cn('rounded px-1.5 py-px font-semibold', chip[k])}>
              {k}
            </span>
          ))}
        </span>
      </div>
      <div className="flex flex-col px-4 py-2">
        {LONG_LOG.map(([time, kind, what, app, detail], i) => (
          <div key={i} className={cn(`${u}-row sm-animate grid h-[27px] grid-cols-[100px_44px_1.45fr_74px_1fr] items-center gap-2 whitespace-nowrap`, (app === 'arkirino' || app === 'openuc2') && 'rounded bg-white/[0.06]')} style={{ '--d': `${logAt(i)}s` } as CSSProperties}>
            <span className={app === 'arkirino' || app === 'openuc2' ? 'font-semibold text-white' : 'text-slate-500'}>{time}</span>
            <span className={cn('rounded px-1 text-center text-[11px] font-semibold leading-[18px]', chip[kind])}>{kind}</span>
            <span className={cn('truncate', kind === 'call' ? 'font-semibold text-white' : 'text-slate-300')}>{what}</span>
            <span className="truncate text-slate-400">{app}</span>
            <span className={cn('truncate', detail.startsWith('DONE') ? 'text-emerald-300' : detail.startsWith('“') ? 'italic text-amber-200' : 'text-slate-300')}>{detail}</span>
          </div>
        ))}
      </div>

    </div>
      {/* the microscope, a popover on the log's bottom right corner: it turns up
          with its first line, and shows its lines with the log's timestamps */}
      <div className={`${u}-to sm-animate absolute bottom-[26px] right-[-14px] h-[206px] w-[226px] overflow-hidden rounded-2xl border border-white/20 bg-[#111a2e] shadow-2xl`} style={{ '--d': `${stageAt - 0.7}s`, '--len': '1s' } as CSSProperties}>
        <FrameModel3D className="absolute inset-0" />
        <span className="absolute left-3 top-2 text-[12px] font-semibold text-white">openuc2 · live</span>
        <span className="absolute inset-x-1.5 bottom-1.5 grid rounded-lg bg-[#0b1220]/85 px-1.5 py-1 text-[11.5px] font-semibold leading-tight">
          <span className={`${u}-to ${u}-to-1 sm-animate [grid-area:1/1] flex flex-col text-emerald-300`} style={{ '--d': `${stageAt}s`, '--len': `${imageAt - stageAt}s` } as CSSProperties}>
            <span className="text-white">{stamp(LOG_SCOPE.stage)}</span>
            stage → x 16.9 · y 29.8 mm
          </span>
          <span className={`${u}-to sm-animate [grid-area:1/1] flex flex-col text-sky-300`} style={{ '--d': `${imageAt}s`, '--len': '1s' } as CSSProperties}>
            <span className="text-white">{stamp(LOG_SCOPE.image)}</span>
            acquire_image → #0116
          </span>
        </span>
      </div>
      {/* the arm, doing what the log says, when it says it */}
      <div className="absolute bottom-[-14px] left-[-176px] h-[206px] w-[226px] overflow-hidden rounded-2xl border border-white/20 bg-[#111a2e] shadow-2xl">
        <ArmMoving3D
          className="absolute inset-0"
          moves={[
            { at: scopeAt, to: 'to_scope', takes: 1.5 },
            { at: ot2At, to: 'to_ot2', takes: 1.5 },
          ]}
        />
        <span className="absolute left-3 top-2 text-[12px] font-semibold text-white">arkirino · live</span>
        <span className="absolute inset-x-1.5 bottom-1.5 grid rounded-lg bg-[#0b1220]/85 px-1.5 py-1 text-[11.5px] font-semibold leading-tight">
          <span className={`${u}-to ${u}-to-1 sm-animate [grid-area:1/1] flex flex-col text-sky-300`} style={{ '--d': `${scopeAt}s`, '--len': `${ot2At - scopeAt}s` } as CSSProperties}>
            <span className="text-white">{stamp(LOG_ARM.toScope)}</span>
            run_trajectory → to_scope
          </span>
          <span className={`${u}-to sm-animate [grid-area:1/1] flex flex-col text-sky-300`} style={{ '--d': `${ot2At}s`, '--len': '1s' } as CSSProperties}>
            <span className="text-white">{stamp(LOG_ARM.toOt2)}</span>
            run_trajectory → to_ot2
          </span>
        </span>
      </div>
    </div>
  );
}

/* --- the record: everything is a row ---------------------------------------------- */

/** The `images` table: one row per image, with what made it, who asked,
    where it was taken, when, and its structured (OME) metadata. `hit` rows survive the filter. */
const IMAGE_COLUMNS = ['image', 'what', 'who', 'where', 'when', 'OME metadata'];
const IMAGE_ROWS: { cells: string[]; hit: boolean; fresh?: boolean }[] = [
  { cells: ['#0116 · tile', 'acquire_image', 'process_slides', 'openuc2 · 10x', '14:08:40', '0.65 µm · RGB'], hit: true },
  { cells: ['#0119 · mosaic', 'stitch_images', 'process_slides', 'stitcher', '14:09:02', '0.65 µm · RGB'], hit: false },
  { cells: ['#0120 · labels', 'segment_image', 'process_slides', 'stardist', '14:09:05', '0.65 µm · mask'], hit: false },
  { cells: ['#0098 · tile', 'acquire_image', 'Anna', 'openuc2 · 20x', '11:42:10', '0.33 µm · RGB'], hit: false },
  { cells: ['#0131 · tile', 'acquire_image', 'Kim', 'openuc2 · 10x', '14:17:58', '0.65 µm · RGB'], hit: true, fresh: true },
];
const IMAGE_FILTERS = ['what = acquire_image', 'where = openuc2', 'pixel size = 0.65 µm'];

/** Everything Arkitekt stores is a row in a relational database. Three
    beats, one per press of "next": on the left an app, the microscope's,
    which has just run `acquire_image` and holds the image, with who caused
    the call (Kim, through her workflow) and where it was taken; on the right
    the `images` table. Press: the app uploads the image, together with its
    what, who and where, and it lands as a new row. Press: the table is
    filtered by three of its columns at once, and the rows that don't match
    fade. */
export function RecordTableFigure() {
  const u = useUid();
  const flyAt = 1.3;
  const rowAt = 2.1;
  const filterAt = 3.4;
  const dimAt = filterAt + 0.9;
  const cues = [1, 3, 5.4];
  const css = `
/* the file, with its what, who and where, on its way into the table */
.${u}-fly { opacity: 0; }
section.present .${u}-fly { animation: ${u}-fly 0.9s cubic-bezier(.5,0,.3,1) ${flyAt}s both; }
@keyframes ${u}-fly { 0% { opacity: 0; transform: none; } 12%, 82% { opacity: 1; } 100% { opacity: 0; transform: translate(400px, 120px) scale(0.85); } }
section.present .${u}-sent { animation: ${u}-sent 0.4s ease-out ${flyAt}s both; }
@keyframes ${u}-sent { 0%, 100% { transform: none; } 40% { transform: scale(0.96); } }
section.present .${u}-fresh { animation: ${u}-fresh 1.2s ease-out ${rowAt}s both; }
@keyframes ${u}-fresh { 0% { opacity: 0; background-color: color-mix(in oklch, var(--color-fd-primary) 45%, transparent); } 30% { opacity: 1; } 100% { opacity: 1; background-color: color-mix(in oklch, var(--color-fd-primary) 10%, transparent); } }
/* filtered: what doesn't match fades (off the slide: the filtered table) */
.${u}-dim { opacity: 0.22; }
section.present .${u}-dim { animation: ${u}-dim 0.4s ease-out ${dimAt}s both; }
@keyframes ${u}-dim { from { opacity: 1; } to { opacity: 0.22; } }
@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-fly, .${u}-sent) { animation: none; } }
`;
  const facts: [string, string, string][] = [
    ['what', 'acquire_image', '10x · tile 2 of 3'],
    ['who', 'Kim', 'caused it, through process_slides'],
    ['where', 'stage 12.4 · 8.1 mm', 'on the openUC2'],
  ];
  return (
    <div className="mx-auto w-[1230px]" role="img" aria-label="An app, the openUC2 microscope, has run acquire_image and uploads the image to the database together with what made it (acquire_image), who caused it (Kim, through her process_slides workflow) and where it was taken (its stage position). It lands as a new row in the images table, which has a column for the image, what, who, where, when and the stain. Every column can be filtered: with what = acquire_image, where = openuc2 and stain = CD20, two of the five images are left.">
      <LoopStyles css={css} />
      <Steps live cues={cues} className="relative flex w-full flex-col gap-4">
        <div className="relative flex items-stretch gap-7">
          {/* the app that made the image, and what is known about it */}
          <div className={`${u}-sent flex w-[300px] shrink-0 flex-col gap-3.5 rounded-2xl border-2 border-fd-primary/60 bg-fd-card p-3.5 shadow-md`}>
            <div className="flex items-center gap-3">
              <span className="flex size-[44px] items-center justify-center rounded-xl bg-fd-primary/12 text-fd-primary">
                <Microscope className="size-[25px]" strokeWidth={1.8} />
              </span>
              <span className="text-[19px] font-semibold leading-tight">openUC2 FRAME</span>
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-fd-border bg-fd-background/60 p-3">
              <span className="flex items-center gap-2.5">
                <span className="size-[52px] shrink-0 rounded-md shadow-sm ring-1 ring-fd-border" style={{ background: `${CD20_BG()}, ${HE_BG()}` }} />
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="truncate font-mono text-[13.5px] font-semibold">acquire_image()</span>
                  <span className="text-[12px] text-fd-muted-foreground">→ image + structured metadata (OME)</span>
                </span>
              </span>
            </div>
            {facts.map(([key, value, more]) => (
              <div key={key} className="flex items-baseline gap-2.5 pl-1">
                <span className="w-[50px] shrink-0 font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-fd-primary">{key}</span>
                <span className="flex flex-col leading-tight">
                  <span className="font-mono text-[15px] font-semibold">{value}</span>
                  <span className="whitespace-nowrap text-[12.5px] text-fd-muted-foreground">{more}</span>
                </span>
              </div>
            ))}
          </div>
          {/* …on its way in */}
          <span aria-hidden className={`${u}-fly absolute left-[40px] top-[112px] z-20 flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-fd-primary bg-fd-card px-3 py-1 font-mono text-[12.5px] font-bold text-fd-primary shadow-lg`}>
            <span className="size-[18px] rounded-sm ring-1 ring-fd-primary/50" style={{ background: `${CD20_BG()}, ${HE_BG()}` }} /> image + structured metadata (OME)
          </span>

          {/* the database */}
          <div className="relative flex min-w-0 flex-1 flex-col gap-2.5 rounded-[26px] bg-fd-primary p-3.5 shadow-xl">
            <div className="flex items-center gap-3 text-fd-primary-foreground">
              <span className="flex size-[44px] items-center justify-center rounded-xl bg-white/95 shadow-sm">
                <Logo className="size-[36px]" />
              </span>
              <span className="text-[24px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-fd-card shadow-sm">
              <div className="flex items-center gap-2 border-b-2 border-fd-border bg-fd-muted/80 px-4 py-2 font-mono text-[14px] font-semibold">
                <Database className="size-[17px] text-fd-primary" strokeWidth={2} /> images <span className="font-normal text-fd-muted-foreground">· a Postgres table</span>
              </div>
              {/* the filter bar: any column, all at once */}
              <div className="flex h-[38px] items-center gap-2 border-b border-fd-border px-4">
                <Filter className="size-[15px] shrink-0 text-fd-muted-foreground" strokeWidth={2.2} />
                <span className="text-[13px] text-fd-muted-foreground">filter by any column</span>
                {IMAGE_FILTERS.map((f, i) => (
                  <span key={f} className="sm-pop whitespace-nowrap rounded-full bg-fd-primary px-2.5 py-0.5 font-mono text-[12px] font-semibold text-fd-primary-foreground" style={delay(filterAt + i * 0.25)}>
                    {f}
                  </span>
                ))}
                <span className="sm-fade ml-auto whitespace-nowrap font-mono text-[12.5px] font-semibold text-fd-primary" style={delay(dimAt + 0.2)}>
                  2 of 5 images
                </span>
              </div>
              <div className="grid grid-cols-[1.2fr_1.1fr_1.15fr_1.1fr_0.75fr_1.15fr] font-mono text-[14.5px]">
                {IMAGE_COLUMNS.map((c) => (
                  <span key={c} className="flex items-center gap-1.5 whitespace-nowrap border-b-2 border-fd-border px-3 py-1.5 font-sans text-[12.5px] font-bold uppercase tracking-[0.06em] text-fd-primary">
                    {c}
                    <Filter className="size-[11px] opacity-60" strokeWidth={2.6} />
                  </span>
                ))}
                {IMAGE_ROWS.map((row, r) => (
                  <div key={row.cells[0]} className={cn('col-span-6 grid grid-cols-subgrid', r > 0 && 'border-t border-fd-border', row.fresh && `${u}-fresh bg-fd-primary/10`, !row.hit && `${u}-dim`)}>
                    {row.cells.map((cell, c) => (
                      <span key={c} className={cn('truncate px-3 py-[11px]', c === 0 ? 'font-semibold' : 'text-fd-muted-foreground')}>
                        {cell}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="sm-in self-end whitespace-nowrap text-[16px] font-semibold" style={delay(dimAt + 0.4)}>
          So you can ask it, not grep it.
        </span>
      </Steps>
    </div>
  );
}

/* --- 3b · data: the lineage graph, on one coordinate system ------------------------- */

type LineageKind = 'slide' | 'image' | 'labels' | 'value';
type LineageNode = { name: string; by: string; kind: LineageKind; thumb?: string; badge?: string };

/** The lineage of HE-07 as a tree that grows to the right: the slide is the
    root, each staining round is a branch, and along a branch every item is
    what the call named under it made out of the item to its left. */
const LINEAGE_ROUNDS: { label: string; via: string; nodes: LineageNode[] }[] = [
  {
    label: 'round 1',
    via: 'run_protocol · stain_cd20',
    nodes: [
      { name: 'tiles ×3', by: 'acquire_image', kind: 'image', thumb: HE_BG(-4, -3) },
      { name: 'mosaic', by: 'stitch_images', kind: 'image', thumb: HE_BG() },
      { name: 'labels', by: 'segment_image', kind: 'labels', thumb: `${LABELS_BG()}, ${HE_BG()}` },
      { name: '0.41', by: 'calculate_stain_\npercentage', kind: 'value', badge: '41%' },
    ],
  },
  {
    label: 'round 2',
    via: '0.41 < 0.8 · stain again',
    nodes: [
      { name: 'tiles ×3', by: 'acquire_image', kind: 'image', thumb: `${CD20_BG()}, ${HE_BG(-4, -3)}` },
      { name: 'mosaic', by: 'stitch_images', kind: 'image', thumb: `${CD20_BG()}, ${HE_BG()}` },
      { name: 'labels', by: 'segment_image', kind: 'labels', thumb: `${LABELS_BG()}, ${HE_BG()}` },
      { name: '0.86', by: 'calculate_stain_\npercentage', kind: 'value', badge: '86%' },
    ],
  },
];
/* Six beats, one per click, each a call and what it made: acquire → tiles,
   stitch → mosaic, segment → labels, measure → 0.41, stain again, round 2 →
   0.86. `L_BEAT[i]` is the beat node `i` belongs to; a beat starts with the
   edge into its first node. */
const L_BEAT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 5];
const L_START = [1, 3.2, 5.4, 7.6, 9.8, 11.4];
const lAt = (i: number) => L_START[L_BEAT[i]] + (i > 0 && L_BEAT[i - 1] === L_BEAT[i] ? 0.6 : 0.3);
const L_CUES = [0.9, 3.05, 5.25, 7.45, 9.65, 11.25, 13.5];
const L_TARGET = 0.8;

function LineageThumb({ node }: { node: LineageNode }) {
  const base = 'relative size-[40px] shrink-0 overflow-hidden rounded-md border border-fd-border';
  if (node.kind === 'value') {
    const ok = Number(node.name) >= L_TARGET;
    return (
      <span className={cn(base, 'flex items-center justify-center font-mono text-[12px] font-bold', ok ? 'bg-emerald-500/15 text-emerald-700' : 'bg-amber-500/15 text-amber-700')}>
        {node.badge}
      </span>
    );
  }
  return <span className={base} style={{ background: node.thumb }} />;
}

/** The zoom on the mosaic: six cells, StarDist's outline round each, and the
    CD20 uptake the analyzer measured per cell, round 1 and then round 2. */
const L_CELLS = [
  { x: 22, y: 28, r1: 0.91, r2: 0.91 },
  { x: 62, y: 24, r1: 0.18, r2: 0.84 },
  { x: 42, y: 52, r1: 0.22, r2: 0.88 },
  { x: 84, y: 48, r1: 0.88, r2: 0.88 },
  { x: 20, y: 76, r1: 0.12, r2: 0.8 },
  { x: 64, y: 78, r1: 0.15, r2: 0.85 },
];
const DAB = '#7a4818';

function UptakeTag({ x, y, v }: { x: number; y: number; v: number }) {
  return (
    <g>
      <rect x={x - 9} y={y - 4.5} width={18} height={9} rx={2} fill={v >= L_TARGET ? '#059669' : '#b45309'} />
      <text x={x} y={y + 0.3} textAnchor="middle" dominantBaseline="middle" fontSize={6.2} fontWeight={700} fill="#fff" fontFamily="ui-monospace, monospace">
        {v.toFixed(2)}
      </text>
    </g>
  );
}

/** Left: the lineage graph of one staining round and the next: every image,
    label mask and value knows the call that made it. Right: the same items on
    the stage, in one coordinate system, each placed the moment it appears in
    the graph. One click per call (`L_CUES`). */
export function LineageFigure() {
  // the tree: the slide on the left, one row per round, growing to the right
  const root = { x: 0, y: 160, w: 84, h: 92 };
  const nw = 98;
  const nh = 104;
  const colX = [122, 244, 366, 488];
  const rowY = [48, 234];
  const mid = (r: number) => rowY[r] + 30; // the height the edges run at: through the thumbnails
  // the stage, in figure coordinates
  const st = { x: 608, y: 34, s: 330 };
  // HE-07's three tiles on it, overlapping by 8 px, and the mosaic they make
  const tile = 84;
  const tiles = [58, 134, 210];
  const mo = { x: 58, y: 116, w: 210 + tile - 58, h: tile };
  const roi = { x: 146, y: 136, s: 44 }; // the zoomed patch, relative to the stage
  const inset = { x: 972, y: 34, s: 208 };
  const at = {
    tiles: lAt(1),
    mosaic: lAt(3),
    labels: lAt(5),
    value: lAt(7),
    restain: lAt(8),
    final: lAt(10),
  };
  const rows: [string, string, number][] = [
    ['cells', '1 812', at.value + 0.2],
    ['round 1', '0.41 · again', at.value + 0.35],
    ['round 2', '0.86 · reached', at.final],
    ['next stain', 'Ki-67', at.final + 0.2],
  ];
  return (
    <div
      className="relative mx-auto h-[440px] w-[1180px]"
      role="img"
      aria-label="Left, the lineage of slide HE-07 as a tree growing to the right: the slide is the root and each staining round is a branch. Along round 1, acquire_image makes three tiles, stitch_images makes the mosaic, segment_image makes the labels, and calculate_stain_percentage gives a CD20 uptake of 0.41, below target. So CD20 is stained again, and along the round 2 branch the same calls give 0.86; the next stain is Ki-67. Right, the same items on the stage in one coordinate system: the tiles, the mosaic they form, the labels on it, the uptake of each cell, and round 2 landing on the same cells."
    >
      <Steps cues={L_CUES} className="relative size-full">
      <span className="sm-fade absolute left-0 top-0 text-[12px] font-semibold uppercase tracking-[0.08em] text-fd-muted-foreground" style={delay(0.1)}>
        lineage · what made what
      </span>
      <span className="sm-fade absolute top-0 text-[12px] font-semibold uppercase tracking-[0.08em] text-fd-muted-foreground" style={{ left: st.x, ...delay(0.1) }}>
        one coordinate system · stage <span className="normal-case">mm</span>
      </span>

      {/* the branches */}
      <svg width={600} height={440} viewBox="0 0 600 440" className="pointer-events-none absolute left-0 top-0 overflow-visible" aria-hidden>
        <Arrowheads id="lin" />
        {LINEAGE_ROUNDS.map((round, r) => (
          <g key={round.label}>
            <Path d={`M${root.x + root.w} ${root.y + root.h / 2} C ${root.x + root.w + 24} ${root.y + root.h / 2}, ${colX[0] - 30} ${mid(r)}, ${colX[0] - 5} ${mid(r)}`} stroke={PRIMARY} width={2.2} head="lin-primary" />
            {round.nodes.slice(1).map((n, i) => (
              <Path key={n.name} d={`M${colX[i] + nw} ${mid(r)} L${colX[i + 1] - 5} ${mid(r)}`} stroke={PRIMARY} width={2.2} head="lin-primary" />
            ))}
          </g>
        ))}
      </svg>

      {/* the root: the slide itself */}
      <div className="absolute flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-fd-foreground/60 bg-fd-card shadow-sm" style={{ left: root.x, top: root.y, width: root.w, height: root.h }}>
        <span className="flex h-[30px] w-[62px] overflow-hidden rounded-[3px] border border-fd-border bg-white">
          <span className="w-[16px] bg-fd-muted" />
          <span className="flex-1" style={{ background: HE_BG() }} />
        </span>
        <span className="font-mono text-[13px] font-bold leading-none">HE-07</span>
        <span className="text-[10px] leading-none text-fd-muted-foreground">the slide</span>
      </div>

      {/* each round is a branch */}
      {LINEAGE_ROUNDS.map((round, r) => (
        <div key={round.label}>
          <span className="absolute flex items-baseline gap-2 whitespace-nowrap" style={{ left: colX[0], top: rowY[r] - 22 }}>
            <span className="text-[13px] font-bold">{round.label}</span>
            <span className="font-mono text-[10.5px] text-fd-muted-foreground">{round.via}</span>
          </span>
          {round.nodes.map((n, i) => (
            <div key={n.name} className="absolute flex flex-col items-center gap-1 rounded-xl border-2 border-fd-primary/60 bg-fd-card px-1 pt-2 shadow-sm" style={{ left: colX[i], top: rowY[r], width: nw, height: nh }}>
              <LineageThumb node={n} />
              <span className="font-mono text-[13px] font-semibold leading-none">{n.name}</span>
              <span className="whitespace-pre-line text-center font-mono text-[9.5px] leading-[1.15] text-fd-muted-foreground">{n.by}</span>
            </div>
          ))}
        </div>
      ))}

      {/* how to read it */}
      <p className="absolute text-[12.5px] leading-snug text-fd-muted-foreground" style={{ left: 0, top: rowY[1] + nh + 22, width: 580 }}>
        Read it left to right: every item was made from the one before it, by the call named under it. <span className="font-semibold text-fd-foreground">Nothing in mikro is without a parent.</span>
      </p>

      {/* the stage */}
      <div className="absolute" style={{ left: st.x, top: st.y, width: st.s, height: st.s }}>
        <div
          className="sm-fade absolute inset-0 rounded-md border-2 border-fd-border"
          style={{ ...delay(0.1), backgroundImage: 'linear-gradient(var(--color-fd-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-fd-border) 1px, transparent 1px)', backgroundSize: '33px 33px' }}
        />
        {/* the slide, its label end on the left */}
        <div className="sm-in absolute left-[8px] top-[100px] h-[132px] w-[314px] overflow-hidden rounded-md border-2 border-fd-border bg-fd-card/70 shadow-sm" style={delay(0.2)}>
          <span className="absolute inset-y-0 left-0 flex w-[38px] items-center justify-center bg-fd-muted font-mono text-[10px] font-semibold">HE-07</span>
        </div>
        {/* the tiles, each on its own coordinates; together, the mosaic */}
        {tiles.map((x, i) => (
          <div key={x} className="sm-in absolute ring-1 ring-white/70 shadow-md" style={{ left: x, top: mo.y, width: tile, height: tile, background: HE_BG(mo.x - x, 0), ...delay(at.tiles + i * 0.12) }} />
        ))}
        <div className="sm-fade absolute ring-2 ring-fd-primary" style={{ left: mo.x, top: mo.y, width: mo.w, height: mo.h, ...delay(at.mosaic) }} />
        <span className="sm-fade absolute whitespace-nowrap rounded bg-black/60 px-1.5 py-0.5 font-mono text-[11px] text-white" style={{ left: mo.x, top: mo.y - 24, ...delay(at.mosaic + 0.3) }}>
          mosaic
        </span>
        {/* StarDist's labels, then round 2's CD20, on exactly the same cells */}
        <div className="sm-fade absolute" style={{ left: mo.x, top: mo.y, width: mo.w, height: mo.h, background: LABELS_BG(), ...delay(at.labels) }} />
        <div className="sm-fade absolute" style={{ left: mo.x, top: mo.y, width: mo.w, height: mo.h, background: CD20_BG(), ...delay(at.restain + 0.2) }} />
        {/* the zoomed patch */}
        <div className="sm-pop absolute rounded-sm border-2 border-dashed border-white" style={{ left: roi.x, top: roi.y, width: roi.s, height: roi.s, ...delay(at.mosaic + 0.3) }} />
        {/* the mosaic's uptake: round 1, then round 2 on top of it */}
        <span className="sm-pop absolute whitespace-nowrap rounded bg-amber-700 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-white" style={{ left: mo.x, top: mo.y + mo.h + 8, ...delay(at.value) }}>
          CD20 · 0.41 · round 1
        </span>
        <span className="sm-pop absolute whitespace-nowrap rounded bg-emerald-600 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-white" style={{ left: mo.x, top: mo.y + mo.h + 8, ...delay(at.final) }}>
          CD20 · 0.86 · round 2
        </span>
        <span className="sm-fade absolute bottom-[-22px] left-0 right-0 flex justify-between font-mono text-[11px] text-fd-muted-foreground" style={delay(0.1)}>
          <span>0</span>
          <span>stage x · mm</span>
          <span>80</span>
        </span>
      </div>

      {/* the zoom: cells, labels and the uptake of each, where they belong */}
      <svg width={1180} height={440} viewBox="0 0 1180 440" className="pointer-events-none absolute left-0 top-0" aria-hidden>
        <g className="sm-fade" style={delay(at.mosaic + 0.4)}>
          <path d={`M${st.x + roi.x + roi.s} ${st.y + roi.y} L${inset.x} ${inset.y}`} stroke={PRIMARY} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
          <path d={`M${st.x + roi.x + roi.s} ${st.y + roi.y + roi.s} L${inset.x} ${inset.y + inset.s}`} stroke={PRIMARY} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
        </g>
      </svg>
      <div className="sm-pop absolute overflow-hidden rounded-lg border-2 border-fd-primary shadow-lg" style={{ left: inset.x, top: inset.y, width: inset.s, height: inset.s, background: 'linear-gradient(135deg, #f2b8cf, #e595b6)', ...delay(at.mosaic + 0.4) }}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden>
          {L_CELLS.map((c) => (
            <g key={`${c.x}-${c.y}`}>
              <circle cx={c.x} cy={c.y} r={9.5} fill="#f9dbe7" />
              {c.r1 >= L_TARGET ? <circle cx={c.x} cy={c.y} r={8.6} fill="none" stroke={DAB} strokeWidth={2.4} /> : null}
              <circle cx={c.x} cy={c.y} r={4.2} fill="#4c2a7a" />
            </g>
          ))}
          {/* StarDist draws a label round every cell */}
          {L_CELLS.map((c, i) => (
            <circle key={`l${c.x}`} className="sm-draw" style={delay(at.labels + i * 0.06)} pathLength={1} strokeDasharray="1" cx={c.x} cy={c.y} r={11.2} fill="none" stroke="#34d399" strokeWidth={1.6} />
          ))}
          {/* round 2: the CD20 takes on the cells round 1 missed */}
          <g className="sm-fade" style={delay(at.restain + 0.2)}>
            {L_CELLS.filter((c) => c.r1 < L_TARGET).map((c) => (
              <circle key={`r${c.x}`} cx={c.x} cy={c.y} r={8.6} fill="none" stroke={DAB} strokeWidth={2.4} />
            ))}
          </g>
          {/* the uptake of each cell, round 1 */}
          <g className="sm-fade" style={delay(at.value)}>
            {L_CELLS.map((c) => (
              <UptakeTag key={`v${c.x}`} x={c.x} y={c.y + 16} v={c.r1} />
            ))}
          </g>
          {/* …and round 2, over it */}
          <g className="sm-fade" style={delay(at.final)}>
            {L_CELLS.filter((c) => c.r2 !== c.r1).map((c) => (
              <UptakeTag key={`w${c.x}`} x={c.x} y={c.y + 16} v={c.r2} />
            ))}
          </g>
        </svg>
        <span className="sm-fade absolute left-1.5 top-1.5 rounded bg-emerald-600/90 px-1.5 py-0.5 font-mono text-[10.5px] font-semibold text-white" style={delay(at.labels + 0.3)}>
          + labels
        </span>
      </div>
      <div className="sm-pop absolute rounded-xl border-2 border-fd-border bg-fd-card px-3 py-2 shadow-sm" style={{ left: inset.x, top: inset.y + inset.s + 12, width: inset.s, ...delay(at.value) }}>
        <span className="flex items-center gap-1.5 font-mono text-[12px] font-semibold">
          <Table2 className="size-[14px] text-fd-primary" strokeWidth={2} /> uptake · CD20 · HE-07
        </span>
        {rows.map(([k, v, d]) => (
          <span key={k} className="sm-in mt-1 flex justify-between gap-2 border-t border-fd-border pt-1 text-[11.5px]" style={delay(d)}>
            <span className="text-fd-muted-foreground">{k}</span>
            <span className="font-mono font-semibold">{v}</span>
          </span>
        ))}
      </div>
      </Steps>
    </div>
  );
}

/* --- 4 · reproducibility: sharing is caring, code and data ------------------------ */

/** Sharing is caring: a result someone else can check needs both halves,
    the code that made it and the data it ran on. It arrives whole; only the
    heart beats. */
export function SharingFigure() {
  const u = useUid();
  const css = `
section.present .${u}-beat { animation: ${u}-beat 1.4s ease-in-out 0.8s infinite; transform-origin: center; }
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
      {half('left', Workflow, 'Code', ['process_slides.py', 'stitch · segment · measure', 'stardist 0.9.1 · seed 42'], 'without the data: nothing to run it on', 0.2)}
      {half('right', Database, 'Data', ['HE-07 · tiles · mosaics', 'labels · uptake per round', 'coordinates + lineage'], 'without the code: no idea how it was made', 0.8)}
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
    there any hub can install it, with the versions it ran with. One click per
    card (script, bundle, publish, the other hub), and one more presses
    Install. */
export function ShareCodeFigure() {
  const u = useUid();
  const cw = 183;
  const gap = 26;
  const top = 40;
  const ch = 236;
  const at = (i: number) => 0.2 + i * 1.6;
  const installAt = 6.6;
  const cues = [1.2, 3, 4.6, 6.2, 8.3];
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
          <span className="font-semibold">stainstorm/</span>
          <span className="flex items-center gap-1.5 pl-3">
            <ScrollText className="size-[13px] text-fd-primary" strokeWidth={2} /> app.py
          </span>
          <span className="pl-7 text-[11px] text-fd-muted-foreground">process_slides</span>
          <span className="pl-7 text-[11px] text-fd-muted-foreground">calls six apps</span>
          <span className="flex items-center gap-1.5 pl-3">
            <ScrollText className="size-[13px] text-fd-primary" strokeWidth={2} /> pyproject.toml
          </span>
          <span className="pl-7 text-[11px] text-fd-muted-foreground">stardist==0.9.1</span>
        </div>
      ),
    },
    {
      title: 'bundle it with Docker',
      body: (
        <div className={term}>
          <span className="block text-emerald-400">$ arkitekt plugin build</span>
          <span className="block">✓ Docker image</span>
          <span className="block pl-3 text-slate-400">stainstorm:1.0.2</span>
          <span className="block">✓ process_slides</span>
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
              <GitBranch className="size-[14px]" strokeWidth={2.2} /> kim-lab/stainstorm
            </span>
            <span className="mt-1 block font-mono text-[11px] text-fd-muted-foreground">github.com · release v1.0.2</span>
          </div>
        </div>
      ),
    },
    {
      title: 'install on any hub',
      body: (
        <div className="relative h-[150px]">
          <div className={`${u}-before absolute inset-0 flex flex-col gap-1.5`}>
            <span className="flex items-center gap-1.5 text-[13px] font-semibold">
              <Package className="size-[15px] text-fd-primary" strokeWidth={2} /> stainstorm
            </span>
            <span className="font-mono text-[11px] text-fd-muted-foreground">v1.0.2 · by kim-lab</span>
            <span className="text-[11.5px] leading-snug text-fd-muted-foreground">stains, images and measures slides until each stain takes</span>
            <span className={`${u}-press mt-auto flex h-[30px] items-center justify-center gap-1.5 rounded-lg bg-fd-primary text-[13px] font-semibold text-fd-primary-foreground`}>
              <Download className="size-[14px]" strokeWidth={2.4} /> Install
            </span>
          </div>
          <div className={`${u}-after absolute inset-0 flex flex-col gap-1.5`}>
            <span className="flex items-center gap-1.5 text-[13px] font-semibold text-emerald-600">
              <Check className="size-[15px]" strokeWidth={3} /> installed · cuda
            </span>
            <span className="rounded-md border border-fd-border px-2 py-1 font-mono text-[11.5px]">process_slides</span>
            <span className="text-[11.5px] leading-snug text-fd-muted-foreground">runs on this lab’s own arm, OT-2, microscope, stitcher, StarDist and analyzer</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative size-full" role="img" aria-label="Kim's script, stainstorm, becomes an app with arkitekt plugin build, is published to GitHub as kim-lab/stainstorm with arkitekt plugin publish, and from there another lab's hub installs it with one click: the process_slides workflow with its pinned versions, running on that lab's own arm, OT-2, microscope and analysis apps.">
      <LoopStyles css={css} />
      <Steps cues={cues} className="relative size-full">
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
                <Server className="size-[13px]" strokeWidth={2} /> plugin engine · any hub
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
          return <Path key={i} d={`M${x1} ${top + ch / 2} L${x1 + gap - 6} ${top + ch / 2}`} stroke={PRIMARY} width={2.4} head="code-primary" className="sm-draw" style={delay(at(i + 1) - 0.3)} />;
        })}
      </svg>
      <span className="sm-in absolute inset-x-0 top-[300px] text-center text-[18px] text-fd-muted-foreground" style={delay(installAt + 0.8)}>
        <span className="font-semibold text-fd-foreground">We use Docker for that:</span> the app is one image, and the <span className="font-semibold text-fd-primary">Arkitekt plugin engine</span> installs it on any Arkitekt hub.
      </span>
      </Steps>
    </div>
  );
}

/** What happens with the link Kim just made: somebody else opens it, and
    their browser connects directly to one subspace of her hub, the
    collaboration, and streams the data from there. Nothing else on the hub
    is even visible to them. Two key presses (reveal fragments 1 and 2; the
    video next to it takes fragment 0): the guest opens the link; the direct
    connection to the subspace opens and the image streams in. */
export function ShareSubspaceFigure() {
  const u = useUid();
  const W = 330;
  const H = 556;
  const hub = { h: 214 };
  const sub = { x: 12, y: 108, w: W - 24, h: 96 }; // the collaboration, inside the hub
  const win = { y: 384, h: H - 384 }; // the guest's browser
  const lineX = 34;
  const on = (n: number, sel: string) => `.${u}-s${n}.visible ~ ${sel}, .${u}-s${n}.visible ~ * ${sel}`;
  const css = `
:is(.${u}-guest, .${u}-click, .${u}-line, .${u}-how, .${u}-dot, .${u}-img, .${u}-ok) { opacity: 0; }
/* press 1: somebody else opens the link */
${on(1, `.${u}-guest`)} { animation: ${u}-pop 0.45s ease-out 0s both; }
${on(1, `.${u}-click`)} { animation: ${u}-click 0.9s ease-out 0.8s both; }
/* press 2: straight into the collaboration, and the data streams from there */
${on(2, `.${u}-line`)} { animation: ${u}-fadein 0.4s ease-out 0s both; }
${on(2, `.${u}-sub`)} { animation: ${u}-glow 0.9s ease-out 0.2s both; }
${on(2, `.${u}-how`)} { animation: ${u}-pop 0.4s ease-out var(--d) both; }
${on(2, `.${u}-dot`)} { animation: ${u}-stream 1.5s linear var(--d) infinite; }
${on(2, `.${u}-wait`)} { animation: ${u}-fadeout 0.3s ease-out 1.5s both; }
${on(2, `.${u}-img`)} { animation: ${u}-fadein 0.6s ease-out 1.6s both; }
${on(2, `.${u}-ok`)} { animation: ${u}-fadein 0.4s ease-out 2s both; }
@keyframes ${u}-pop { 0% { opacity: 0; transform: scale(0.85); } 70% { opacity: 1; transform: scale(1.03); } 100% { opacity: 1; transform: scale(1); } }
@keyframes ${u}-fadein { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-fadeout { from { opacity: 1; } to { opacity: 0; } }
@keyframes ${u}-click { 0% { opacity: 0; transform: scale(0.6); } 30% { opacity: 1; } 100% { opacity: 0; transform: scale(1.8); } }
@keyframes ${u}-glow { 0% { box-shadow: 0 0 0 0 rgb(255 255 255 / 0.9); } 100% { box-shadow: 0 0 0 12px rgb(255 255 255 / 0); } }
@keyframes ${u}-stream { 0% { opacity: 0; transform: translateY(0); } 15%, 85% { opacity: 1; } 100% { opacity: 0; transform: translateY(${win.y - sub.y - sub.h - 12}px); } }
.${u}-flow { animation: ${u}-flow 0.9s linear infinite; }
@keyframes ${u}-flow { to { stroke-dashoffset: -28; } }
@media (prefers-reduced-motion: reduce) { .${u}-flow { animation: none; } .${u}-dot { display: none; } }
`;
  const shared: [string, string][] = [
    ['tile', HE_BG(-4, -3)],
    ['stitched', HE_BG()],
    ['labels', `${LABELS_BG()}, ${HE_BG()}`],
  ];
  /* how the data travels: what is said on the connection */
  const how: [LucideIcon, string, string][] = [
    [Lock, 'direct · encrypted', 'no upload, no copy'],
    [Layers, 'pyramidal', 'the zoom level needed'],
    [LayoutGrid, 'zarr', 'chunk by chunk'],
    [Eye, 'lazy', 'only what is looked at'],
  ];
  return (
    <div
      className="relative shrink-0"
      style={{ width: W, height: H }}
      role="img"
      aria-label="Kim's hub holds top secret data, locked, and one collaboration: a subspace with the tile, the stitched image and the labels she shared. Somebody else opens the link in their browser. Their browser connects directly to that one subspace of the hub, encrypted, and the image streams from there: pyramidal, as zarr chunks, and lazily, only what is looked at. The rest of the hub is not even visible to them."
    >
      <div className="sm-steps sm-animate absolute inset-0" style={{ '--sm-stagger': 1 } as CSSProperties}>
        {[1, 2].map((n) => (
          <Fragment key={n} as="span" index={n} className={`${u}-s${n} absolute`} />
        ))}
        <LoopStyles css={css} />

        {/* Kim's hub: top secret, apart from the one subspace that is shared */}
        <div className="absolute inset-x-0 top-0 rounded-[22px] bg-fd-primary p-3 text-fd-primary-foreground shadow-xl" style={{ height: hub.h }}>
          <div className="flex items-center gap-2.5">
            <span className="flex size-[32px] items-center justify-center rounded-lg bg-white/95 shadow-sm">
              <Logo className="size-[26px]" />
            </span>
            <span className="text-[19px] font-bold leading-none tracking-[-0.02em]">Arkitekt</span>
            <span className="font-mono text-[12px] opacity-85">Kim’s lab</span>
          </div>
          <div className="mt-3 flex h-[36px] items-center justify-center gap-2 rounded-lg bg-black/30 text-[14px] font-extrabold tracking-[0.06em]">
            <Lock className="size-[16px]" strokeWidth={2.8} /> TOP SECRET DATA
          </div>
        </div>
        <div className={`${u}-sub absolute rounded-xl border-2 border-dashed border-white bg-fd-card px-2.5 py-2 text-fd-foreground`} style={{ left: sub.x, top: sub.y, width: sub.w, height: sub.h }}>
          <span className="flex items-center gap-1.5 whitespace-nowrap text-[12.5px] font-semibold">
            <Share2 className="size-[13px] text-fd-primary" strokeWidth={2.4} /> collaboration “Test”
            <span className="ml-auto font-mono text-[10px] font-normal text-fd-muted-foreground">a subspace</span>
          </span>
          <span className="mt-1.5 flex justify-between">
            {shared.map(([name, bg]) => (
              <span key={name} className="flex flex-col items-center gap-0.5">
                <span className="h-[36px] w-[88px] rounded-md ring-1 ring-fd-border" style={{ background: bg }} />
                <span className="font-mono text-[10.5px] text-fd-muted-foreground">{name}</span>
              </span>
            ))}
          </span>
        </div>

        {/* the direct connection: into the subspace, not the hub */}
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className={`${u}-line pointer-events-none absolute inset-0`} aria-hidden>
          <path className={`${u}-flow`} d={`M${lineX} ${sub.y + sub.h} L${lineX} ${win.y}`} fill="none" stroke={PRIMARY} strokeWidth={3} strokeDasharray="8 6" />
          <circle cx={lineX} cy={sub.y + sub.h} r={5} fill="var(--color-fd-card)" stroke={PRIMARY} strokeWidth={2} />
          <circle cx={lineX} cy={win.y} r={5} fill="var(--color-fd-card)" stroke={PRIMARY} strokeWidth={2} />
        </svg>
        {[0, 0.5, 1].map((d) => (
          <span key={d} className={`${u}-dot absolute size-[12px] rounded-sm ring-1 ring-white/70`} style={{ left: lineX - 6, top: sub.y + sub.h, background: HE_BG(), '--d': `${0.5 + d}s` } as CSSProperties} />
        ))}
        {how.map(([Icon, name, what], i) => (
          <span key={name} className={`${u}-how absolute flex items-center gap-2 whitespace-nowrap`} style={{ left: lineX + 22, top: sub.y + sub.h + 22 + i * 37, '--d': `${0.4 + i * 0.25}s` } as CSSProperties}>
            <span className="flex h-[28px] items-center gap-1.5 rounded-full border-2 border-fd-primary/50 bg-fd-card px-2.5 text-[13px] font-semibold shadow-sm">
              <Icon className="size-[13px] text-fd-primary" strokeWidth={2.6} /> {name}
            </span>
            <span className="text-[11.5px] text-fd-muted-foreground">{what}</span>
          </span>
        ))}

        {/* somebody else, and their browser */}
        <div className={`${u}-guest absolute inset-x-0 overflow-hidden rounded-2xl border-2 border-fd-primary/60 bg-fd-card shadow-xl`} style={{ top: win.y, height: win.h }}>
          <div className="flex h-[30px] items-center gap-1.5 border-b border-fd-border bg-fd-muted px-3">
            {['#f87171', '#fbbf24', '#34d399'].map((c) => (
              <span key={c} className="size-[8px] rounded-full" style={{ background: c }} />
            ))}
            <span className="relative ml-1.5 flex h-[20px] flex-1 items-center gap-1.5 rounded-full bg-fd-background/70 px-2.5 font-mono text-[11px]">
              <Lock className="size-[10px] text-fd-muted-foreground" strokeWidth={2.6} /> the link Kim copied
              <span className={`${u}-click pointer-events-none absolute left-[56px] top-1/2 size-[24px] -translate-y-1/2 rounded-full border-2 border-fd-primary`} />
            </span>
          </div>
          <div className="flex gap-3 p-2.5">
            <span className="relative h-[118px] w-[150px] shrink-0 overflow-hidden rounded-lg border border-fd-border bg-fd-background/60">
              <span className={`${u}-wait absolute inset-0 flex items-center justify-center px-2 text-center font-mono text-[11px] text-fd-muted-foreground`}>signing in as guest…</span>
              <span className={`${u}-img absolute inset-0`} style={{ background: HE_BG() }} />
            </span>
            <span className="flex min-w-0 flex-col gap-1.5">
              <span className="flex items-center gap-2">
                <svg width={30} height={30} viewBox="0 0 30 30" role="img" aria-label="somebody else" className="shrink-0">
                  <rect width={30} height={30} rx={15} fill="#1e3a5f" />
                  <path d="M5 30 C 5 22, 10 19.5, 15 19.5 C 20 19.5, 25 22, 25 30 Z" fill="#38bdf8" />
                  <circle cx={15} cy={12.5} r={6.6} fill="#e0ac86" />
                  <path d="M8.2 12 C 7.6 6.5, 11 4.2, 15 4.2 C 19 4.2, 22.4 6.5, 21.8 12 C 20.4 9.4, 18.6 8.6, 15 8.6 C 11.4 8.6, 9.6 9.4, 8.2 12 Z" fill="#2b2118" />
                  <circle cx={12.6} cy={12.8} r={0.9} fill="#1f2937" />
                  <circle cx={17.4} cy={12.8} r={0.9} fill="#1f2937" />
                  <path d="M12.6 15.6 Q15 17.4 17.4 15.6" fill="none" stroke="#7c2d12" strokeWidth={1} strokeLinecap="round" />
                </svg>
                <span className="text-[13px] font-semibold leading-tight">somebody else</span>
              </span>
              <span className="text-[12px] leading-snug text-fd-muted-foreground">A guest: sees this collaboration, and nothing else.</span>
              <span className={`${u}-ok flex items-center gap-1 text-[12px] font-semibold leading-tight text-emerald-600`}>
                <Check className="size-[13px] shrink-0" strokeWidth={3} /> streaming from Kim’s hub
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Share data: a recording of pressing share on the left; on the right, once
    the other lab accepts (one keypress, a reveal.js fragment), a WireGuard
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
    { name: 'slides / HE-07', shared: true },
    { name: 'slides / HE-08', shared: false },
    { name: 'drafts / 2026-11', shared: false },
  ];
  const px = 490; // the right panel
  const pw = 320;
  return (
    <div className="relative size-full" role="img" aria-label="Left, a recording of Kim pressing share on the dataset slides / 2026-11-10 / HE-07 and picking another lab. Right, the other lab accepts; a WireGuard connection opens between the two hubs that reaches slide HE-07 and nothing else on Kim's hub. Slide HE-08 and her drafts stay private.">
      <span className={`${u}-acc visible absolute`} />
      <LoopStyles css={css} />

      {/* the recording, left-aligned */}
      <div className="absolute left-0 top-[8px] w-[460px]">
        <div className="sm-in relative aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-fd-border bg-fd-card/40" style={delay(0.2)}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-8 text-center">
            <span className="flex items-center gap-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-fd-primary">
              <Share2 className="size-[14px]" strokeWidth={2.4} /> Video · press share
            </span>
            <span className="text-[18px] font-semibold leading-snug">Kim presses share on slides / 2026-11-10 / HE-07 and picks the other lab.</span>
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
          <span className="font-mono text-[11px] text-fd-muted-foreground">slides / HE-07 · nothing else</span>
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
                <span className="font-semibold">Kim</span> shared <span className="font-mono font-semibold">slides / 2026-11-10 / HE-07</span> with you
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
                <Database className="size-[13px]" strokeWidth={2} /> slides / HE-07
                <span className="ml-auto font-sans text-[11px] font-normal text-fd-muted-foreground">read-only</span>
              </div>
              <span className="text-[11.5px] text-fd-muted-foreground">HE-08 and drafts: not even visible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
