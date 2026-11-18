'use client';

/* "Orchestrating open source hardware, open source" — the remote
   talk for the RTmfm SMILE Journées thématiques SMART MICROSCOPY (Aussois,
   15–20 Nov 2026). About 38 minutes plus Q&A.

   The arc: an AI-built workflow works, and still leaves the same debt behind.
   The debt list (Kim’s nights, named) is the agenda; each part of
   "Paying down the debt" ticks one line, shows one clip and ends on one
   sentence. The talk has to work with zero videos, so every clip slot says
   what it shows until the file is dropped into
   `public/presentations/smart-microscopy/`. */

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Fragment, Slide, useReveal } from '@revealjs/react';
import { cn } from '@/lib/cn';
import { Logo } from '@/components/site/logo';
import { DeckFrame } from '../deck-frame';
import { DeckSlide, Eyebrow } from '../slide';
import { AnimStyles, Steps, delay } from './smart-microscopy-anim';
import {
  CoordinationWinFigure,
  DataWinFigure,
  DefeatFrame,
  HoldWinFigure,
  HorsemanDuelFigure,
  LongLogFigure,
  RecordTableFigure,
  LineageFigure,
  RecordWinFigure,
  ResumeFigure,
  PublishFlowFigure,
  ShareSubspaceFigure,
} from './smart-microscopy-defeat-figures';
import {
  ClaudeChatFigure,
  CHROMOGENIC_ROUND_CUES,
  CHROMOGENIC_ROUND_PERIOD,
  ChromogenicRoundFigure,
  CyclingIdeaFigure,
  AllBrownFigure,
  KimAtWork,
  CollapseFigure,
  DistributedMemeFigure,
  CoverFigure,
  DreamWorkflowFigure,
  ItWorkedFigure,
  KimFigure,
  HORSEMEN,
  ImageJIcon,
  PandoraBoxFigure,
  RightNowFigure,
  HorsemanArt,
  MacroChainFigure,
  NightmareFigure,
  OverworkedKimFigure,
  PaperCard,
  SERIAL_SECTIONS_CUES,
  SerialSectionsFigure,
  YearsFigure,
} from './smart-microscopy-figures';
import { DreamLab3D } from './smart-microscopy-dream-3d';
import { ThanksFigure } from './smart-microscopy-thanks-figures';
import { OptikitCubes3D } from './smart-microscopy-cubes-3d';

/** The parts of the 3D build, in the order they snap in (`CUBE_ORDER`). */
const CUBE_PARTS = ['fiber holder', 'blue laser', 'mirror', 'dichroic', 'objective', 'mirror', 'sample stage', 'camera', 'controller'];
import {
  WhereWhatFigure,
  AgentBarrierFigure,
  MiddlemanFigure,
  OfferFigure,
  WorkflowFigure,
  AiWorkflowFigure,
  AnywhereFigure,
  BlokOfferFigure,
  DeviceStateFigure,
  BetterMiddleFigure,
  IMadeTheseFigure,
  DataKindsFigure,
  KindSketch,
  BlokRemixFigure,
} from './smart-microscopy-arkitekt-figures';
import { AgentRightsFigure, BlokChatFigure, LlmRisksFigure } from './smart-microscopy-llm-figures';
import { OptikitBenchFigure, QuestionScopesFigure, QuirksFigure, SensorSpacesFigure, SimulateFigure } from './smart-microscopy-optics-figures';

const MEDIA = '/presentations/smart-microscopy';

/* --- clips ------------------------------------------------------------------ */

/** Tailscale's mark (from Simple Icons), in the text colour. */
function TailscaleMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Tailscale" className="inline-block shrink-0 text-fd-foreground" fill="currentColor">
      <path d="M24 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-9 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm0-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm18 .5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM6 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm9-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM3 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    </svg>
  );
}

/** Temporal's mark (from Simple Icons), in the text colour. */
function TemporalMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Temporal" className="inline-block shrink-0 text-fd-foreground" fill="currentColor">
      <path d="M16.206 7.794C15.64 3.546 14.204 0 12 0 9.796 0 8.361 3.546 7.794 7.794 3.546 8.36 0 9.796 0 12c0 2.204 3.546 3.639 7.794 4.206C8.36 20.453 9.796 24 12 24c2.204 0 3.639-3.546 4.206-7.794C20.454 15.64 24 14.204 24 12c0-2.204-3.547-3.64-7.794-4.206Zm-8.55 7.174c-4.069-.587-6.44-1.932-6.44-2.969 0-1.036 2.372-2.381 6.44-2.969-.09.98-.137 1.98-.137 2.97 0 .99.047 1.99.137 2.968zM12 1.215c1.036 0 2.381 2.372 2.969 6.44a32.718 32.718 0 0 0-5.938 0c.587-4.068 1.932-6.44 2.969-6.44Zm4.344 13.753c-.2.03-1.022.126-1.23.146-.02.209-.117 1.03-.145 1.23-.588 4.068-1.933 6.44-2.97 6.44-1.036 0-2.38-2.372-2.968-6.44-.03-.2-.126-1.022-.147-1.23a31.833 31.833 0 0 1 0-6.23 31.813 31.813 0 0 1 7.46.146c4.068.587 6.442 1.933 6.442 2.969-.001 1.036-2.374 2.382-6.442 2.97z" />
    </svg>
  );
}


/** A recorded demo. Until the file exists, the placeholder behind the player
    says which clip goes here and what it shows, so the slide still carries the
    point when there is no video at all. */
function Clip({
  n,
  label,
  file,
  shows,
  length,
  height = 440,
  aspect = 16 / 9,
}: {
  /** The clip's number in the running order, or a `label` instead. */
  n?: number;
  label?: string;
  file: string;
  shows: string;
  length?: string;
  /** Height in slide pixels. */
  height?: number;
  /** The recording's own shape, width over height: the player takes exactly
      that shape, so nothing is letterboxed, and its rounded corners clip the
      recorded window's. */
  aspect?: number;
}) {
  const src = `${MEDIA}/${file}`;
  // A missing file still paints a black player over the placeholder, so the
  // player only shows once it has a frame to show.
  const [ready, setReady] = useState(false);
  // The player's own controls only show while the mouse is over it: a paused
  // video would otherwise sit there with its control bar across the picture.
  const [hover, setHover] = useState(false);
  // The clip waits on its first frame, and plays from the start on the first
  // press of "next" on its slide: the press shows an empty reveal.js fragment,
  // and the video follows it. Stepping back, or leaving the slide, rewinds it.
  // Every clip on a slide shares the fragment index, so one press starts all.
  const deck = useReveal();
  const video = useRef<HTMLVideoElement | null>(null);
  const mark = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!deck || !ready) return;
    let playing = false;
    const sync = () => {
      const v = video.current;
      const m = mark.current;
      if (!v || !m) return;
      const on = Boolean(m.closest('section')?.classList.contains('present')) && m.classList.contains('visible');
      if (on === playing) return;
      playing = on;
      v.currentTime = 0;
      if (on) void v.play().catch(() => {});
      else v.pause();
    };
    const events = ['ready', 'slidechanged', 'fragmentshown', 'fragmenthidden'] as const;
    for (const e of events) deck.on(e, sync);
    sync();
    return () => {
      for (const e of events) deck.off(e, sync);
    };
  }, [deck, ready]);
  return (
    <div
      className={cn(
        'relative mx-auto shrink-0 overflow-hidden rounded-2xl',
        ready ? 'shadow-xl ring-1 ring-fd-border' : 'border border-dashed border-fd-border bg-fd-card/40',
      )}
      style={{ height, aspectRatio: aspect }}
    >
      <div className={cn('absolute inset-0 flex flex-col items-center justify-center gap-2 px-16 text-center', ready && 'invisible')}>
        <span className="font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-fd-primary">
          {[label ?? `Video ${n}`, length].filter(Boolean).join(' · ')}
        </span>
        <span className="text-[24px] font-semibold leading-snug">{shows}</span>
        <span className="font-mono text-[13px] text-fd-muted-foreground">{src}</span>
      </div>
      {/* nothing to start while the file is missing, so no press to spend on it */}
      {ready ? <span ref={mark} className="fragment" data-fragment-index={0} aria-hidden /> : null}
      <video
        // a new file means a new element: changing a <source> does not make a video reload on its own
        key={src}
        muted
        loop
        controls={hover}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        playsInline
        preload="auto"
        // a video in the server's HTML can have its first frame before React attaches onLoadedData
        ref={(el) => {
          video.current = el;
          if (el && el.readyState >= 2) setReady(true);
        }}
        onLoadedData={() => setReady(true)}
        className={cn(
          'absolute inset-0 size-full object-cover',
          !ready && 'invisible',
        )}
      >
        <source src={src} />
      </video>
    </div>
  );
}

/** A screenshot. Until the file exists, the placeholder says which one goes
    here and what it shows, like a clip slot. */
function Shot({ src, alt, label = 'Screenshot', height = 440 }: { src: string; alt: string; label?: string; height?: number }) {
  const [ready, setReady] = useState(false);
  return (
    <div className="relative mx-auto aspect-video overflow-hidden rounded-2xl border border-dashed border-fd-border bg-fd-card/40" style={{ height }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-16 text-center">
        <span className="font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-fd-primary">{label}</span>
        <span className="text-[24px] font-semibold leading-snug">{alt}</span>
        <span className="font-mono text-[13px] text-fd-muted-foreground">{src}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        // a cached image can finish loading before React attaches onLoad
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setReady(true);
        }}
        onLoad={() => setReady(true)}
        className={cn('absolute inset-0 size-full bg-black object-contain', !ready && 'invisible')}
      />
    </div>
  );
}

/** A photo. Until the file exists, a quiet placeholder names the file. */
function Photo({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [ready, setReady] = useState(false);
  return (
    <div className={cn('relative overflow-hidden rounded-2xl border border-dashed border-fd-border bg-fd-card/40', className)}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 px-6 text-center">
        <span className="text-[15px] font-semibold">{alt}</span>
        <span className="font-mono text-[12px] text-fd-muted-foreground">{src}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setReady(true);
        }}
        onLoad={() => setReady(true)}
        className={cn('absolute inset-0 size-full object-cover', !ready && 'invisible')}
      />
    </div>
  );
}

/** A YouTube segment. reveal.js loads it when its slide comes up
    (`data-src`), starts it there (`data-autoplay`) and pauses it on the way
    out; `start`/`end` cut the segment. Needs the venue's network. */
function YouTubeClip({ id, start, end, label, shows, height = 440 }: { id: string; start: number; end: number; label: string; shows: string; height?: number }) {
  const ts = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const src = `https://www.youtube.com/embed/${id}?start=${start}&end=${end}&rel=0&enablejsapi=1`;
  return (
    <div className="relative mx-auto aspect-video overflow-hidden rounded-2xl border border-dashed border-fd-border bg-fd-card/40" style={{ height }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-16 text-center">
        <span className="font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-fd-primary">
          {label} · {ts(start)}–{ts(end)}
        </span>
        <span className="text-[24px] font-semibold leading-snug">{shows}</span>
        <span className="font-mono text-[13px] text-fd-muted-foreground">youtube.com/watch?v={id}&amp;t={start}</span>
      </div>
      <iframe
        data-src={src}
        data-autoplay=""
        title={shows}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    </div>
  );
}

/* --- slide shells ----------------------------------------------------------- */

/** One big line and nothing else: the opening beats and every takeaway. */
function StatementSlide({
  children,
  figure,
  sub,
}: {
  children: ReactNode;
  /** A quieter line under the statement. */
  sub?: ReactNode;
  /** An animated figure beside the statement. */
  figure?: ReactNode;
}) {
  return (
    <Slide>
      <div className="flex h-[600px] w-full items-center gap-10">
        <div className="flex flex-1 flex-col justify-center gap-6">
          <p
            className={cn(
              'sm-in font-bold tracking-[-0.025em]',
              figure ? 'text-[44px] leading-[1.12]' : 'max-w-[1000px] text-[52px] leading-[1.1]',
            )}
            style={delay(0.1)}
          >
            {children}
          </p>
          {sub ? (
            <p className="sm-in text-[28px] italic leading-snug text-fd-muted-foreground" style={delay(0.6)}>
              {sub}
            </p>
          ) : null}
        </div>
        {figure}
      </div>
    </Slide>
  );
}

/** A recording and nothing else: the player as big as the slide allows. The
    title is not shown, only kept for screen readers. */
function ClipSlide({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <Slide>
      <div className="flex h-[680px] w-full items-center justify-center">
        <h2 className="sr-only">{title}</h2>
        {children}
      </div>
    </Slide>
  );
}

/** The shape of the Orkestrator window recordings, cropped to the window. */
const WINDOW = 1722 / 1080;

/** Accent for the half of a statement that carries the punch. */
function Hl({ children }: { children: ReactNode }) {
  return <span className="text-fd-primary">{children}</span>;
}

/* --- figures ---------------------------------------------------------------- */

/* --- the deck --------------------------------------------------------------- */

/** The outlook on the instrument itself (openUC2's cubes, Optikit,
    newswitch): eight slides, about six minutes. Left out of this talk. */
const WITH_OPTIKIT = false as boolean;

/** Slides left out to fit the 45-minute slot: the lab's reality, the lineage
    graph (the tree on the slide before it covers it), and the three "not only
    image data" slides. Set to true for a longer talk. */
const FULL_LENGTH = false as boolean;

/** The closing recap: each horseman, and the one line that answered him. */
const CLOSING: { night: keyof typeof HORSEMEN; answer: string }[] = [
  { night: 'communication', answer: 'No IP addresses: every app finds the hub.' },
  { night: 'threads', answer: 'One log of everything: observe, inform, resume.' },
  { night: 'data', answer: 'A database that keeps the spatial relations.' },
  { night: 'repro', answer: 'Apps you publish once, and remix.' },
  { night: 'ai', answer: 'Agents, behind Arkitekt: control and provenance.' },
];

export function SmartMicroscopyDeck() {
  return (
    <DeckFrame>
      {/* 1. Opening (about 6 min) ------------------------------------------ */}

      <Slide>
        <AnimStyles />
        <div className="flex h-[600px] w-full items-center gap-10">
          <div className="flex flex-1 flex-col gap-6">
            <Eyebrow>Journées thématiques SMART MICROSCOPY · RTmfm SMILE · Aussois 2026</Eyebrow>
            <h1 className="sm-in text-[60px] font-bold leading-[1.04] tracking-[-0.03em]" style={delay(0.1)}>
              Orchestrating open source hardware,{' '}
              <span className="text-fd-primary">open source</span>
            </h1>
            <p className="sm-in text-[24px] leading-snug text-fd-muted-foreground" style={delay(0.3)}>
              Arkitekt as a smart microscopy infrastructure
            </p>
            <p className="sm-in text-[17px] text-fd-muted-foreground" style={delay(0.5)}>
              Johannes Roos
            </p>
          </div>
          <CoverFigure />
        </div>
      </Slide>

      <DeckSlide
        title="Hi, I’m Johannes"
      >
        <div className="grid flex-1 grid-cols-[minmax(0,1fr)_420px] items-center gap-12">
          <div className="flex flex-col gap-9">
            {/* how I got here: three stops, top to bottom, each with where it was */}
            <div className="relative flex flex-col gap-4">
              {/* the line the three stops hang on, behind the logos */}
              <span aria-hidden className="absolute bottom-[29px] left-[65px] top-[29px] w-[3px] rounded-full bg-fd-primary/50" />
              {(
                [
                  ['PhD', 'IINS, Bordeaux', false, 'u-bordeaux.png', 'Université de Bordeaux', '2023'],
                  ['Clinician scientist', 'in pathology', false, 'kuk.png', 'Kepler Universitätsklinikum', '2024 – 2026'],
                  ['Junior group leader', 'Clinical Institute of Neuroscience, newly founded', true, 'jku.svg', 'Johannes Kepler University Linz', 'now · 2026'],
                ] as const
              ).map(([what, where, now, logo, org, when], i) => (
                <div key={what} className="sm-in flex items-center gap-5" style={delay(0.2 + i * 0.2)}>
                  {/* the logo, on white so it reads on any theme */}
                  <span className="relative flex h-[58px] w-[132px] shrink-0 items-center justify-center rounded-xl border-2 border-fd-primary/50 bg-white px-3 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${MEDIA}/logos/${logo}`} alt={org} className="max-h-[40px] w-auto max-w-full" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className={cn('flex items-baseline gap-3 text-[26px] font-semibold leading-tight', now && 'text-fd-primary')}>
                      {what}
                      <span className="font-mono text-[16px] font-medium text-fd-muted-foreground">{when}</span>
                    </span>
                    <span className="text-[18px] leading-snug text-fd-muted-foreground">{where}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* and what for */}
            <div className="sm-in flex flex-col gap-3" style={delay(0.9)}>
              <span className="text-[17px] font-semibold text-fd-muted-foreground">Goal</span>
              <p className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em]">
                Data-driven acquisition paradigms <span className="text-[26px] font-semibold tracking-normal text-fd-muted-foreground">a bit</span> <Hl>closer to the clinic.</Hl>
              </p>
              <p className="text-[21px] leading-snug text-fd-muted-foreground">
                In <span className="font-semibold text-fd-foreground">pathology</span>, but also in <span className="font-semibold text-fd-foreground">MRI</span>.
              </p>
            </div>
          </div>

          {/* the group */}
          <div className="sm-in flex flex-col gap-2" style={delay(0.45)}>
            <Photo src={`${MEDIA}/group.jpg`} alt="The group at the Institute of Anatomy and Cell Biology" className="h-[226px] w-[420px]" />
            <Photo src={`${MEDIA}/building.jpg`} alt="The building" className="h-[200px] w-[420px]" />
            <span className="text-[15px] text-fd-muted-foreground">Institute of Anatomy and Cell Biology</span>
          </div>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Who am I right now?"
      >
        <div className="flex flex-1 items-center">
          <RightNowFigure photo={`${MEDIA}/johannes.jpg`} />
        </div>
      </DeckSlide>

      <Slide>
        <Steps cues={SERIAL_SECTIONS_CUES} className="relative flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <h2 className="text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">Meet Kim</h2>
              <h1 className="text-[20px] font-light ">A pathologist, and a PhD student</h1>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 pt-10">
                <KimFigure size={150} mood="worried" />
              </div>
              <div className="relative flex-1">
                {/* thought trail: small to large, rising from her head */}
                <span className="sm-pop absolute left-[-6px] top-[86px] size-3 rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.3)} />
                <span className="sm-pop absolute left-[8px] top-[58px] size-5 rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.4)} />
                <div
                  className="sm-pop ml-8 rounded-[40px] border-2 border-fd-border bg-fd-card px-8 py-6 text-[28px] font-bold leading-[1.22] tracking-[-0.015em] shadow-sm"
                  style={delay(0.5)}
                >
                  Complicated Tumor.. I need some IHC
                  <span className="sm-in inline ml-2" style={delay(7.4)}>
                    <Hl>But it is so small and I can only stain one marker per slide.</Hl>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SerialSectionsFigure />
        </Steps>
      </Slide>

      <Slide>
        <div className="flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <h2 className="text-[48px] font-bold leading-[1.05] tracking-[-0.025em]">What about chromogenic cycling?</h2>
            </div>
            <div className="flex items-end gap-3">
              <div className="shrink-0">
                <KimFigure size={130} />
              </div>
              <div className="sm-pop relative mb-14 flex-1 rounded-3xl rounded-bl-sm border-2 border-fd-border bg-fd-card px-6 py-4 shadow-sm" style={delay(0.9)}>
                <p className="mt-1 text-[24px] font-semibold leading-snug">
                  “Stain, image, wash the colour off, stain the next one. <Hl>It could be a game-changer!</Hl>”
                </p>
              </div>
            </div>
          </div>
          <CyclingIdeaFigure />
        </div>
      </Slide>

      <Slide>
        <div className="flex h-[600px] w-full items-center gap-10">
          <div className="flex flex-1 flex-col justify-center gap-5">
            <p className="text-[44px] font-bold leading-[1.12] tracking-[-0.025em]">The only problem?</p>
            <p className="text-[26px] italic leading-snug text-fd-muted-foreground">Everything is brown. How do I know the stain from the last round is gone?</p>
            {/* Kim has an idea */}
            <div className="mt-4 flex items-end gap-1">
              <KimFigure size={120} mood="neutral" />
              <div className="relative mb-12 ml-5">
                <p className="rounded-[34px] border-2 border-fd-border bg-fd-card px-6 py-4 text-[21px] font-semibold leading-snug shadow-sm">
                  <span className="sr-only">Kim thinks: </span>Well… if we know which cells stained in the first round, <Hl>let’s just look if they are still stained after washing?</Hl>
                </p>
                <span className="absolute bottom-[-6px] left-[-18px] size-[18px] rounded-full border-2 border-fd-border bg-fd-card" />
                <span className="absolute bottom-[-24px] left-[-36px] size-[11px] rounded-full border-2 border-fd-border bg-fd-card" />
              </div>
            </div>
          </div>
          <AllBrownFigure />
        </div>
      </Slide>

      <Slide>
        <Steps live cues={CHROMOGENIC_ROUND_CUES} period={CHROMOGENIC_ROUND_PERIOD} className="relative flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <h2 className="text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">Kim, gets to work</h2>
            </div>
            <KimAtWork />
          </div>
          <ChromogenicRoundFigure />
        </Steps>
      </Slide>

      <DeckSlide
        title="There even is a macro for it!"
        lead={
          <span className="inline-flex items-center gap-2.5">
            <ImageJIcon size={30} />
            Using her trusted ImageJ.
          </span>
        }
      >
        <div className="flex flex-1 items-center justify-center">
          <MacroChainFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="She publishes"
      >
        <div className="flex flex-1 items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <KimFigure size={170} mood="happy" />
            <p className="max-w-[220px] rounded-2xl border border-fd-border bg-fd-card px-4 py-2.5 text-[18px] italic leading-snug">
              “You can find my macro at this DOI. Just run it!”
            </p>
          </div>
          <PaperCard />
        </div>
      </DeckSlide>

      <Slide>
        <div className="flex h-[600px] w-full items-center gap-10">
          <div className="flex flex-1 flex-col gap-6">
            <h2 className="sm-in text-[46px] font-bold leading-[1.05] tracking-[-0.025em]" style={delay(0.2)}>
              The only problem
            </h2>
            <div className="flex items-start gap-8">
              <KimFigure size={190} mood="worried" />
              <div className="relative mt-2 flex-1">
                <p
                  className="sm-in rounded-[40px] border-2 border-fd-border bg-fd-card px-8 py-6 text-[34px] font-bold italic leading-[1.15] tracking-[-0.02em]"
                  style={delay(1)}
                >
                  If I do this for all of my samples, <Hl>I will never leave the lab.</Hl>
                </p>
                <span className="sm-pop absolute -left-[22px] bottom-[-14px] size-[22px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.85)} />
                <span className="sm-pop absolute -left-[44px] bottom-[-38px] size-[13px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.7)} />
              </div>
            </div>
          </div>
          <OverworkedKimFigure />
        </div>
      </Slide>

      <Slide>
        <div className="relative flex h-[600px] w-full items-stretch gap-2">
          <div className="flex w-[330px] shrink-0 flex-col justify-between">
            <div className="sm-in flex flex-col gap-3" style={delay(0.2)}>
              <h2 className="text-[46px] font-bold leading-[1.05] tracking-[-0.025em]">
                What if we <Hl>automate this?</Hl>
              </h2>
            </div>
            <div className="relative self-start">
              <KimFigure size={170} mood="happy" />
              {/* thought trail: small to large, rising towards the dream */}
              <span className="sm-pop absolute left-[150px] top-[24px] size-4 rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.7)} />
              <span className="sm-pop absolute left-[184px] top-[-10px] size-6 rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.85)} />
              <span className="sm-pop absolute left-[228px] top-[-52px] size-9 rounded-full border-2 border-fd-border bg-fd-card" style={delay(1)} />
            </div>
          </div>
          <div
            className="sm-pop relative flex-1 overflow-hidden rounded-[130px] border-2 border-fd-border bg-fd-card shadow-sm"
            style={{
              ...delay(1.1),
              backgroundImage:
                'radial-gradient(circle at 28% 22%, rgba(253,230,138,0.4), transparent 55%), radial-gradient(circle at 78% 82%, rgba(244,114,182,0.3), transparent 55%), radial-gradient(circle at 64% 28%, rgba(167,139,250,0.32), transparent 60%)',
            }}
          >
            <DreamLab3D className="absolute inset-0" />
            {/* a few stars on the cloud itself */}
            {(
              [
                [9, 20, 30, 0],
                [86, 14, 38, 0.7],
                [92, 62, 26, 1.3],
                [14, 78, 34, 0.4],
                [50, 7, 22, 1.8],
                [70, 90, 24, 1],
                [30, 92, 20, 2.1],
                [5, 48, 22, 1.5],
              ] as const
            ).map(([x, y, size], i) => (
              <span
                key={i}
                aria-hidden
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 leading-none text-amber-400"
                style={{ left: `${x}%`, top: `${y}%`, fontSize: size, textShadow: '0 0 12px rgba(251,191,36,0.9)' }}
              >
                ✦
              </span>
            ))}
          </div>
        </div>
      </Slide>

      <DeckSlide
        title="Her dream workflow"
        lead="Using only open source microscopy"
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure />
        </div>
      </DeckSlide>

      {FULL_LENGTH ? (
      <DeckSlide
        title="The lab’s reality"
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure variant="lab" />
        </div>
      </DeckSlide>
      ) : null}

      <DeckSlide
        title="Kim asks for help"
      >
        <div className="flex flex-1 items-center">
          <ClaudeChatFigure />
        </div>
      </DeckSlide>

      <StatementSlide
        figure={<PandoraBoxFigure />}
       >
        Little does she know that she has opened Pandora’s box, and will soon be visited by <Hl>the four horsemen of smart microscopy and lab automation.</Hl>
      </StatementSlide>

      <DeckSlide
        title="The nightmare begins"
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="communication" />
        </div>
      </DeckSlide>

      <DeckSlide
        title="A week later"
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="threads" compact />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Three weeks later"
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="data" compact />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Three months later"
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="repro" compact />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Five months later"
      >
        <div className="flex flex-1 items-center">
          <ItWorkedFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Kim has had enough"
      >
        <div className="flex flex-1 items-center">
          <CollapseFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Interlude: the agents aren’t the problem"
        lead="We have been there for a while."
      >
        <div className="relative flex flex-1 flex-col justify-center">
          <YearsFigure />
          <Fragment
            as="div"
            animation="zoom-in"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="-rotate-2 rounded-3xl border-2 border-fd-primary/40 bg-fd-card px-12 py-9 text-center text-[46px] font-bold leading-[1.1] tracking-[-0.025em] shadow-2xl">
              Agents don’t create the debt.
              <br />
              <Hl>They multiply it.</Hl>
            </div>
          </Fragment>
        </div>
      </DeckSlide>

      <DeckSlide
        title="What Kim wishes for"
      >
        <div className="flex flex-1 items-center">
          <BetterMiddleFigure />
        </div>
      </DeckSlide>

      {/* 2. What is Arkitekt (about 6 min) --------------------------------- */}

      <Slide>
        <div className="flex h-[600px] w-full flex-col items-center justify-center gap-6">
          <span className="text-[30px] font-medium text-fd-muted-foreground">Introducing</span>
          <div className="relative flex items-center gap-6">
            <Logo className="size-[110px]" />
            <h2 className="text-[120px] font-bold leading-none tracking-[-0.04em]">
              <Hl>Arkitekt</Hl>
            </h2>
            {/* the sticker: the one thing on this slide that moves */}
            <span className="absolute -right-[150px] -top-[70px] block rotate-12">
              <span
                className="flex size-[150px] items-center justify-center bg-[#facc15] text-center font-mono text-[22px] font-extrabold uppercase leading-[1.05] text-[#1f2937] shadow-lg"
                style={delay(0.7, {
                  clipPath:
                    'polygon(50% 0%, 59% 11%, 71% 4%, 75% 18%, 89% 16%, 87% 30%, 100% 35%, 92% 47%, 100% 59%, 88% 65%, 91% 79%, 77% 80%, 74% 94%, 61% 89%, 50% 100%, 39% 89%, 26% 94%, 23% 80%, 9% 79%, 12% 65%, 0% 59%, 8% 47%, 0% 35%, 13% 30%, 11% 16%, 25% 18%, 29% 4%, 41% 11%)',
                })}
              >
                all-
                <br />
                fresh!
              </span>
            </span>
          </div>
        </div>
      </Slide>

      <DeckSlide
        title="Arkitekt is the middleman"
      >
        <div className="flex flex-1 items-center">
          <MiddlemanFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Actions tell what connected apps can do"
      >
        <div className="flex flex-1 items-center">
          <OfferFigure />
        </div>
      </DeckSlide>

      <ClipSlide
        title="Here is how that works"
      >
        <Clip
          label="Video · the microscope’s actions"
          file="microscope-actions.mp4"
          length="20 s"
          shows="The openUC2 app offers its actions to the hub; in Orkestrator Kim assigns acquire_image, and the image comes back."
          aspect={WINDOW}
          height={680}
        />
      </ClipSlide>

      <DeckSlide
        title="States tell where they are right now"
      >
        <div className="flex flex-1 items-center">
          <DeviceStateFigure />
        </div>
      </DeckSlide>

      <ClipSlide
        title="The arm, live"
      >
        <Clip
          label="Video · the robot arm"
          file="robot-trajectory.mp4"
          length="20 s"
          shows="Run Trajectory is assigned on the arkirino agent’s page, and the arm moves in its 3D view."
          aspect={1742 / 1080}
          height={680}
        />
      </ClipSlide>

      <DeckSlide
        title="And Bloks tell us what that should look like"
      >
        <div className="flex flex-1 items-center">
          <BlokOfferFigure />
        </div>
      </DeckSlide>

      <ClipSlide
        title="And it can get quite complex itself"
      >
        <Clip
          label="Video · the microscope’s blok"
          file="microscope-blok.mp4"
          length="25 s"
          shows="The openUC2 app’s own panel in Orkestrator: live view, stage, focus, and a snap that opens in mikro."
          aspect={1696 / 1080}
          height={680}
        />
      </ClipSlide>

      <StatementSlide
        figure={<KimFigure size={200} mood="worried" />}
        sub="Kim, unimpressed"
      >
        “Okay: actions, states and bloks. I still just control everything with clicks in a UI. <Hl>That doesn’t help a thing.</Hl>”
      </StatementSlide>

      <StatementSlide
        figure={<IMadeTheseFigure />}
      >
        “Well… you can actually use all these actions <Hl>in workflows.</Hl>”
      </StatementSlide>

      <DeckSlide
        title="Design workflows visually"
      >
        <div className="flex flex-1 items-center">
          <WorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Or just ask for it"
        lead="A friend, or an assistant."
      >
        <div className="flex flex-1 items-center">
          <AiWorkflowFigure />
        </div>
      </DeckSlide>

      <ClipSlide
        title="And then it runs, in the lab"
      >
        <Clip
          label="Video · the real workflow"
          file="real-world-workflow.mp4"
          length="15 s"
          shows="The arm carries the slide between the OT-2 and the openUC2 microscope: process_slides, running in the lab."
          height={610}
        />
      </ClipSlide>

      <DeckSlide
        title="And the UI? Remix the bloks"
      >
        <div className="flex flex-1 items-center">
          <BlokRemixFigure />
        </div>
      </DeckSlide>

      <ClipSlide
        title="Live: the remixed page, running"
      >
        <Clip
          label="Video · the workflow, running"
          file="blok-remix-live.mp4"
          length="3 min"
          shows="process_slides running in Orkestrator, on its own page: the arm, the OT-2 and the microscope in 3D, every step ticking off, the mosaic and the labels arriving."
          aspect={WINDOW}
          height={680}
        />
      </ClipSlide>

      <Slide>
        <div className="flex h-[640px] w-full items-center justify-center">
          <DistributedMemeFigure />
        </div>
      </Slide>

      <Slide>
        <HorsemanDuelFigure night="communication" />
      </Slide>

      <DeckSlide
        title="A protocol to find your apps"
      >
        <div className="flex flex-1 items-center">
          <CoordinationWinFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Connect from anywhere, encrypted"
        lead={
          <span className="inline-flex items-center gap-2">
            Powered by open-source
            <TailscaleMark />
            <span className="font-semibold text-fd-foreground">Tailscale</span>
          </span>
        }
      >
        <div className="flex flex-1 items-center">
          <AnywhereFigure />
        </div>
      </DeckSlide>

      <Slide>
        <HorsemanDuelFigure night="threads" />
      </Slide>

      <StatementSlide
        figure={<LongLogFigure />}
      >
        Arkitekt puts everything that happens on a log, <Hl>so we know exactly what happened, when.</Hl>
      </StatementSlide>

      <ClipSlide
        title="Observe: replay the run"
      >
        <Clip
          label="Video · replay of the workflow"
          file="replay-demo.mp4"
          length="20 s"
          shows="A run of process_slides, replayed in Orkestrator after the fact: every call, state update and image, in the order it happened."
          aspect={WINDOW}
          height={680}
        />
      </ClipSlide>

      <DeckSlide
        title="Inform: when code can’t fix it, ask a person"
      >
        <div className="flex flex-1 items-center">
          {/* the figure is drawn 810 wide with the phone hanging off its right edge: scaled up to the slide's width */}
          <div className="relative mx-auto h-[440px] w-[1230px]">
            <div className="absolute left-0 top-0 h-[355px] w-[810px] origin-top-left scale-[1.24]">
              <HoldWinFigure />
            </div>
          </div>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Resume: the workflow picks up where it failed"
        lead={
          <span className="inline-flex items-center gap-2">
            Inspired by
            <TemporalMark />
            <span className="font-semibold text-fd-foreground">Temporal.io</span>
          </span>
        }
      >
        <div className="flex flex-1 items-center">
          <ResumeFigure />
        </div>
      </DeckSlide>

      <Slide>
        <HorsemanDuelFigure night="data" />
      </Slide>

      <DeckSlide
        title="Everything is stored in a relational database"
      >
        <div className="flex flex-1 items-center">
          <RecordTableFigure />
        </div>
      </DeckSlide>

      <StatementSlide
        figure={<WhereWhatFigure />}
      >
        But we don’t look at a table of folders. <Hl>We want to look at samples in a spatial context.</Hl>
      </StatementSlide>

      <DeckSlide
        title="Introducing the coordinate system"
        lead={
          <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            Similar to, and compatible with
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${MEDIA}/logos/spatialdata.png`} alt="SpatialData" className="h-[30px] w-auto rounded bg-white/90 px-1" />
            and
            <span className="flex items-center gap-1.5 font-semibold text-fd-foreground">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${MEDIA}/logos/ome.svg`} alt="" className="h-[26px] w-auto" />
              OME-NGFF,
            </span>
            but different: the relations live in the database, not in a file.
          </span>
        }
      >
        <div className="flex flex-1 items-center">
          <div className="relative mx-auto h-[410px] w-[1230px]">
            <DataWinFigure />
          </div>
        </div>
      </DeckSlide>

      {FULL_LENGTH ? (
      <DeckSlide
        title="A lineage graph, on one coordinate system"
        lead="Arkitekt builds it from a little metadata, so you can relate the end of the analysis back to its start."
      >
        <div className="flex flex-1 items-center">
          <LineageFigure />
        </div>
      </DeckSlide>
      ) : null}

      <ClipSlide
        title="What that looks like"
      >
        <Clip
          label="Video · exploring the mosaic"
          file="live-arkitekt.mp4"
          length="1 min"
          shows="The stitched mosaic in mikro: the labels on the same coordinates, coloured and filtered by what was measured in each cell."
          aspect={WINDOW}
          height={680}
        />
      </ClipSlide>

      <DeckSlide
        title="Science is more than images"
      >
        <div className="flex flex-1 items-center gap-9">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <ul className="flex flex-col">
              {(
                [
                  ['flim', 'Lifetimes', 'FLIM, with its phasor'],
                  ['timeseries', 'Time series', 'calcium traces, cell by cell'],
                  ['table', 'Tables', 'one row per cell, per measurement'],
                  ['volume', 'Volumes and spectra', 'z-stacks, spectral stacks'],
                  ['mesh', 'Meshes', 'what segmentation leaves behind'],
                ] as const
              ).map(([sketch, kind, what]) => (
                <li key={kind} className="flex items-center gap-4 border-t border-fd-border py-1.5 first:border-t-0">
                  <span className="flex h-[50px] w-[78px] shrink-0 items-center justify-center [&>svg]:h-[50px] [&>svg]:w-auto">
                    <KindSketch kind={sketch} />
                  </span>
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="text-[20px] font-semibold">{kind}</span>
                    <span className="text-[16px] text-fd-muted-foreground">{what}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] leading-snug text-fd-muted-foreground">Same coordinate systems, same lineage, same database.</p>
          </div>
          <div className="shrink-0">
            <Clip label="Video · calcium" file="calcium-traces.mp4" length="30 s" shows="Calcium traces, cell by cell" height={436} aspect={WINDOW} />
          </div>
        </div>
      </DeckSlide>

      {FULL_LENGTH ? (
      <DeckSlide
        title="Not only image data"
      >
        <div className="flex flex-1 items-center">
          <DataKindsFigure />
        </div>
      </DeckSlide>
      ) : null}

      {FULL_LENGTH ? (
      <DeckSlide
        title="FLIM, with its phasor"
      >
        <div className="flex flex-1 items-center justify-center">
          <Shot src="/clips/flim-data.jpg" alt="hMSC control, a FLIM dataset in mikro, with its phasor plot." />
        </div>
      </DeckSlide>
      ) : null}

      {FULL_LENGTH ? (
      <DeckSlide
        title="Calcium imaging, as a time series"
      >
        <div className="flex flex-1 items-center justify-center">
          <Shot src="/presentations/smart-microscopy/calcium-imaging.png" alt="A calcium imaging time series in mikro, with the traces per cell." />
        </div>
      </DeckSlide>
      ) : null}

      <DeckSlide
        title="Sharing is caring"
      >
        <div className="flex flex-1 items-center justify-between gap-5">
          <Clip
            label="Video · sharing"
            file="share-data.mp4"
            length="25 s"
            shows="Kim adds an image and what was derived from it to a collaboration, and creates a link for a guest."
            aspect={1696 / 1080}
            height={556}
          />
          <ShareSubspaceFigure />
        </div>
      </DeckSlide>

      <Slide>
        <HorsemanDuelFigure night="repro" />
      </Slide>

      <DeckSlide
        title="Publishing Arkitekt apps is easy"
      >
        <div className="flex flex-1 items-center">
          <PublishFlowFigure />
        </div>
      </DeckSlide>

      <ClipSlide
        title="And installing one, on your own hub"
      >
        <Clip
          label="Video · installing an app"
          file="install-plugin.mp4"
          length="16 s"
          shows="Installing a published app, the LIF converter, on a hub."
          aspect={1696 / 1080}
          height={680}
        />
      </ClipSlide>

      {/* “just tell Claude to run it”: two problems ------------------------- */}

      <Slide>
        <HorsemanDuelFigure night="ai" />
      </Slide>

      <DeckSlide
        title="The problem with using LLMs in science"
        lead="In a lab, an agent touches two things."
      >
        <div className="flex flex-1 items-center">
          <LlmRisksFigure />
        </div>
      </DeckSlide>

      {FULL_LENGTH ? (
      <DeckSlide
        title="The Rise and Reckoning of Jensen Huang"
      >
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <YouTubeClip id="JW5s9Md4U2U" start={1393} end={1455} label="Clip" shows="The Circuit with Emily Chang: Jensen Huang, 23:13 to 24:15." height={410} />
            <span className="text-[15px] text-fd-muted-foreground">Bloomberg Originals · The Circuit with Emily Chang</span>
          </div>
        </div>
      </DeckSlide>
      ) : null}

      <DeckSlide
        title="Finding a nice strategy with LLMs"
      >
        <div className="flex flex-1 items-center">
          <AgentBarrierFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Yes, we have a chat interface"
      >
        <div className="flex flex-1 items-center">
          <AgentRightsFigure />
        </div>
      </DeckSlide>

      {/* the instrument itself: openUC2's cubes, Optikit, newswitch. Left out of
          this talk (set WITH_OPTIKIT to bring the eight slides back). */}
      {WITH_OPTIKIT ? (
        <>

      <Slide>
        <div className="flex h-[600px] w-full flex-col justify-center gap-10">
          <div className="flex flex-col gap-5">
            <p className="sm-in max-w-[1000px] text-[52px] font-bold leading-[1.1] tracking-[-0.025em]" style={delay(0.1)}>
              And now for something <Hl>completely different.</Hl>
            </p>
            <p className="sm-in text-[28px] italic leading-snug text-fd-muted-foreground" style={delay(0.5)}>
              The microscope itself.
            </p>
          </div>
          <div className="sm-in flex max-w-[860px] flex-col gap-2 rounded-2xl border-2 border-dashed border-[#d97706]/60 bg-[#d97706]/5 px-6 py-4" style={delay(1.1)}>
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-[#d97706]">Disclaimer</span>
            <ul className="flex flex-col gap-1 text-[21px] leading-snug">
              <li>This part is an <b>industry collaboration</b> with openUC2: take it with a grain of salt.</li>
              <li>I have <b>no financial interest</b> in openUC2.</li>
              <li className="text-fd-muted-foreground">Bene had no say in these slides. :D</li>
            </ul>
          </div>
        </div>
      </Slide>

      <DeckSlide
        title="Modularity is king"
      >
        <div className="flex flex-1 items-stretch gap-8">
          <div className="relative min-h-[400px] flex-[1.5] overflow-hidden">
            <OptikitCubes3D className="absolute inset-0" />
            <span className="absolute left-4 top-3 font-mono text-[12px] text-fd-muted-foreground">a fluorescence microscope, from cubes · exported by Optikit</span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-5">
            <p className="sm-in text-[30px] font-bold leading-tight tracking-[-0.02em]" style={delay(0.2)}>
              Snap cubes onto a plate, <Hl>get a microscope.</Hl>
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {CUBE_PARTS.map((name, i) => (
                <li key={`${name}-${i}`} className="sm-in flex items-center gap-2 text-[17px]" >
                  <span className="size-[10px] shrink-0 rounded-[3px] border-2 border-fd-primary" />
                  {name}
                </li>
              ))}
            </ul>
            <p className="sm-in text-[18px] leading-snug text-fd-muted-foreground">
              Swap a cube, and it’s a different microscope: transmission, two cameras, a light-sheet.
            </p>
          </div>
        </div>
      </DeckSlide>

      <Slide>
        <div className="flex h-[600px] w-full flex-col justify-center gap-8">
          <div className="flex flex-col gap-4">
            <p className="sm-in max-w-[1080px] text-[46px] font-bold leading-[1.1] tracking-[-0.025em]" style={delay(0.1)}>
              Modularity is <Hl>the worst thing</Hl> for microscope software.
            </p>
            <p className="sm-in text-[26px] italic leading-snug text-fd-muted-foreground" style={delay(0.5)}>
              No two microscopes behave alike.
            </p>
          </div>
          <QuirksFigure />
        </div>
      </Slide>

      <StatementSlide>
        So we have cubes, and we know their optics. <Hl>What if we just simulate what the image is supposed to look like?</Hl>
      </StatementSlide>

      <DeckSlide
        title="Design the microscope like a circuit board"
      >
        <div className="flex flex-1 items-center">
          <OptikitBenchFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The design runs before the hardware does"
      >
        <div className="flex flex-1 items-center">
          <SimulateFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="A microscope for one question"
      >
        <div className="flex flex-1 items-center">
          <QuestionScopesFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Every detector is a sensor in a coordinate system"
      >
        <div className="flex flex-1 items-center">
          <SensorSpacesFigure />
        </div>
      </DeckSlide>

        </>
      ) : null}

      {/* bringing it home (about 2 min) ------------------------------------- */}

      <DeckSlide
        title="Arkitekt trying to beat the horsemen"
      >
        <div className="relative flex flex-1 flex-col justify-center">
          {/* the last word: Kim looks in from the bottom right */}
          <Fragment as="div" animation="fade-up" className="pointer-events-none absolute bottom-0 right-0 z-20">
            <div className="relative ml-auto h-[150px] w-[190px] overflow-hidden">
              <KimFigure size={190} mood="happy" />
            </div>
            <p className="absolute bottom-[156px] right-0 w-[236px] rounded-2xl rounded-br-sm border-2 border-fd-border bg-fd-card px-4 py-2.5 text-[20px] font-semibold italic leading-snug shadow-xl">
              <span className="sr-only">Kim: </span>“Ah, I have my Fiji back. And it works, most of the time.”
            </p>
          </Fragment>
          {CLOSING.map(({ night, answer }) => (
            <div key={night} className="flex items-center gap-6 border-t border-fd-border py-2 first:border-t-0">
              <HorsemanArt night={night} u={`close-${night}`} width={104} face="reviewer" className="shrink-0" />
              <span className="flex w-[330px] shrink-0 flex-col leading-tight">
                <span className="text-[15px] text-fd-muted-foreground">{HORSEMEN[night].ordinal}</span>
                <span className="text-[26px] font-bold tracking-[-0.02em]">{HORSEMEN[night].name}</span>
              </span>
              <span className="text-[24px] font-semibold leading-snug text-fd-primary">{answer}</span>
            </div>
          ))}
        </div>
      </DeckSlide>

      <DeckSlide
        title="Acknowledgements"
      >
        <div className="flex flex-1 items-center">
          <ThanksFigure />
        </div>
      </DeckSlide>

      {/* after the last word: slides kept for the discussion */}
      <StatementSlide>
        <Hl>Supplementary slides</Hl>
      </StatementSlide>

      <DeckSlide
        title="The chat answers with a blok"
      >
        <div className="flex flex-1 items-center">
          <BlokChatFigure />
        </div>
      </DeckSlide>
    </DeckFrame>
  );
}
