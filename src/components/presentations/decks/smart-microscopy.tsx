'use client';

/* "Infrastructure for smart microscopy, from workflows to optics" — the remote
   talk for the RTmfm SMILE Journées thématiques SMART MICROSCOPY (Aussois,
   15–20 Nov 2026). About 38 minutes plus Q&A.

   The arc: an AI-built workflow works, and still leaves the same debt behind.
   The debt list (Kim’s nights, named) is the agenda; each part of
   "Paying down the debt" ticks one line, shows one clip and ends on one
   sentence. The talk has to work with zero videos, so every clip slot says
   what it shows until the file is dropped into
   `public/presentations/smart-microscopy/`. */

import { useState } from 'react';
import type { ReactNode } from 'react';
import { Brain, Microscope, Users } from 'lucide-react';
import { Fragment, Slide } from '@revealjs/react';
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
  LineageFigure,
  RecordWinFigure,
  ShareCodeFigure,
  ShareDataFigure,
  SharingFigure,
} from './smart-microscopy-defeat-figures';
import {
  BetterFigure,
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
  MacroChainFigure,
  NightmareFigure,
  OverworkedKimFigure,
  PaperCard,
  ResultsChart,
  SERIAL_SECTIONS_CUES,
  SerialSectionsFigure,
  YearsFigure,
} from './smart-microscopy-figures';
import { DreamLab3D } from './smart-microscopy-dream-3d';
import { OptikitCubes3D } from './smart-microscopy-cubes-3d';

/** The parts of the 3D build, in the order they snap in (`CUBE_ORDER`). */
const CUBE_PARTS = ['fiber holder', 'blue laser', 'mirror', 'dichroic', 'objective', 'mirror', 'sample stage', 'camera', 'controller'];
import {
  CoordsFigure,
  MiddlemanFigure,
  OfferFigure,
  WorkflowFigure,
  AiWorkflowFigure,
  AnywhereFigure,
  BlokOfferFigure,
  IMadeTheseFigure,
  RemixReproFigure,
  DataKindsFigure,
  BlokRemixFigure,
} from './smart-microscopy-arkitekt-figures';
import { AgentRightsFigure, BlokChatFigure, PitchFigure } from './smart-microscopy-llm-figures';
import { OptikitBenchFigure, QuestionScopesFigure, QuirksFigure, SensorSpacesFigure, SimulateFigure } from './smart-microscopy-optics-figures';

const MEDIA = '/presentations/smart-microscopy';

/* --- clips ------------------------------------------------------------------ */

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
}: {
  /** The clip's number in the running order, or a `label` instead. */
  n?: number;
  label?: string;
  file: string;
  shows: string;
  length?: string;
  /** Height in slide pixels. */
  height?: number;
}) {
  const src = `${MEDIA}/${file}`;
  // A missing file still paints a black player over the placeholder, so the
  // player only shows once it has a frame to show.
  const [ready, setReady] = useState(false);
  return (
    <div
      className="relative mx-auto aspect-video overflow-hidden rounded-2xl border border-dashed border-fd-border bg-fd-card/40"
      style={{ height }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-16 text-center">
        <span className="font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-fd-primary">
          {[label ?? `Video ${n}`, length].filter(Boolean).join(' · ')}
        </span>
        <span className="text-[24px] font-semibold leading-snug">{shows}</span>
        <span className="font-mono text-[13px] text-fd-muted-foreground">{src}</span>
      </div>
      <video
        autoPlay
        muted
        loop
        controls
        playsInline
        onLoadedData={() => setReady(true)}
        className={cn(
          'absolute inset-0 size-full bg-black object-contain',
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
  notes,
  figure,
  sub,
}: {
  children: ReactNode;
  notes?: string;
  /** A quieter line under the statement. */
  sub?: ReactNode;
  /** An animated figure beside the statement. */
  figure?: ReactNode;
}) {
  return (
    <Slide notes={notes}>
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

/** Accent for the half of a statement that carries the punch. */
function Hl({ children }: { children: ReactNode }) {
  return <span className="text-fd-primary">{children}</span>;
}

/* --- figures ---------------------------------------------------------------- */

/* --- the deck --------------------------------------------------------------- */

export function SmartMicroscopyDeck() {
  return (
    <DeckFrame>
      {/* 1. Opening (about 6 min) ------------------------------------------ */}

      <Slide notes="Remote talk, about 45 minutes: opening 8, Arkitekt 6, paying down the debt 20, outlook 6, leaving a few minutes for questions. All demos are recorded clips, narrated live; every clip slot says what it shows, so the talk works without them.">
        <AnimStyles />
        <div className="flex h-[600px] w-full items-center gap-10">
          <div className="flex flex-1 flex-col gap-6">
            <Eyebrow>Journées thématiques SMART MICROSCOPY · RTmfm SMILE · Aussois 2026</Eyebrow>
            <h1 className="sm-in text-[60px] font-bold leading-[1.04] tracking-[-0.03em]" style={delay(0.1)}>
              Infrastructure for smart microscopy,{' '}
              <span className="text-fd-primary">from workflows to optics</span>
            </h1>
            <p className="sm-in text-[24px] leading-snug text-fd-muted-foreground" style={delay(0.3)}>
              Arkitekt, openUC2 and Optikit
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
        notes="Thirty seconds, no more. I lead a small but growing team at the Clinical Institute of Neuroscience. What we try to do is bring smart microscopy into the clinic, in pathology first, which is where Kim comes from. And, more recently, we have started on smart MRI paradigms: the same idea of an acquisition that adapts to what it sees, on a scanner instead of a microscope. Everything in this talk comes from building that infrastructure."
      >
        <div className="grid flex-1 grid-cols-[minmax(0,1fr)_420px] items-center gap-10">
          <div className="flex flex-col gap-8">
            {(
              [
                { icon: Microscope, title: 'Smart microscopy, in the clinic', text: 'In pathology: acquisition that adapts to the tissue, on the instruments the clinic already runs.', at: 0.3, tag: undefined },
                { icon: Brain, title: 'Smart MRI paradigms', text: 'The same idea on a scanner: acquisition that reacts to what it sees.', at: 0.55, tag: 'recent' },
              ] as const
            ).map(({ icon: Icon, title, text, at, tag }) => (
              <div key={title} className="sm-in flex gap-5" style={delay(at)}>
                <Icon className="mt-0.5 size-[36px] shrink-0 text-fd-primary" strokeWidth={1.8} />
                <span className="flex flex-col gap-1.5">
                  <span className="flex items-baseline gap-2.5 text-[26px] font-semibold leading-tight">
                    {title}
                    {tag ? <span className="text-[16px] font-medium text-fd-muted-foreground">({tag})</span> : null}
                  </span>
                  <span className="text-[18px] leading-snug text-fd-muted-foreground">{text}</span>
                </span>
              </div>
            ))}
            <p className="sm-in flex items-center gap-5 text-[20px] text-fd-muted-foreground" style={delay(0.8)}>
              <Users className="size-[36px] shrink-0 text-fd-primary" strokeWidth={1.8} />A small but growing team.
            </p>
          </div>

          {/* me, and the group */}
          <div className="flex flex-col gap-4">
            <div className="sm-pop flex items-end gap-4" style={delay(0.15)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${MEDIA}/johannes.jpg`} alt="Johannes Roos" className="h-[180px] w-[146px] rounded-2xl object-cover shadow-md" />
              <span className="mb-1 flex flex-col">
                <span className="text-[22px] font-semibold leading-tight">Johannes Roos</span>
                <span className="text-[15px] text-fd-muted-foreground">group leader</span>
              </span>
            </div>
            <div className="sm-in flex flex-col gap-1.5" style={delay(0.45)}>
              <Photo src={`${MEDIA}/group.jpg`} alt="The group at the Institute of Anatomy and Cell Biology" className="h-[236px] w-[420px]" />
              <span className="text-[14px] text-fd-muted-foreground">The group · Institute of Anatomy and Cell Biology</span>
            </div>
          </div>
        </div>
      </DeckSlide>

      <Slide notes="Kim is a persona, not a real person: say so. She is a pathologist, and she wants several antibodies on the same tumor: CD3, CD20, Ki-67, PanCK. The classic way is one antibody per section: cut the block into serial sections and stain each one with its own antibody. One click per beat (cuts, sections, antibodies, the miss): the cuts go through the block, each section gets its antibody, and the tumor shrinks from section to section. The fourth cut falls outside the tumor, and that is the PanCK section, the one that was meant to find it. Even where the tumor is there, every section has different cells, so you can never ask what one cell carries. Next slide is her way out.">
        <Steps cues={SERIAL_SECTIONS_CUES} className="relative flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <h2 className="text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">Meet Kim</h2>
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
                  Four antibodies, four sections…{' '}
                  <span className="sm-in inline" style={delay(7.4)}>
                    <Hl>and on the last one, the tumor is gone.</Hl>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SerialSectionsFigure />
        </Steps>
      </Slide>

      <Slide notes="Then Kim hears about chromogenic cycling, at a talk. The idea fits on one slide: keep the tissue on one slide and cycle. Stain with an antibody and its chromogen, image the slide, wash until the colour is completely gone, then the next antibody. Press the stations in turn (stain, image, wash, next antibody), once round per antibody: CD3, CD20, Ki-67, PanCK, each marking its own cells, one image per round. After PanCK, “next antibody” overlays the four, and every marker sits on the same cells. That is exactly what the four serial sections on the last slide could not give her. Next slide: she tries it, by hand.">
        <div className="flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <h2 className="text-[48px] font-bold leading-[1.05] tracking-[-0.025em]">Then she hears about chromogenic cycling</h2>
            </div>
            <div className="flex items-end gap-3">
              <div className="shrink-0">
                <KimFigure size={130} />
              </div>
              <div className="sm-pop relative mb-14 flex-1 rounded-3xl rounded-bl-sm border-2 border-fd-border bg-fd-card px-6 py-4 shadow-sm" style={delay(0.9)}>
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-fd-muted-foreground">at a talk</span>
                <p className="mt-1 text-[24px] font-semibold leading-snug">
                  “Stain, image, wash the colour off, stain the next one. <Hl>All on the same slide.</Hl>”
                </p>
              </div>
            </div>
          </div>
          <CyclingIdeaFigure />
        </div>
      </Slide>

      <StatementSlide
        notes="The only problem. Three clicks on the figure: the wash, round 2, the question. On the last slide every antibody had its own colour; in practice nearly every chromogen is brown, DAB. So after round 2, a brown cell is either the new antibody, or the old one that never washed off. Round 1 marks the CD3 cells, the wash leaves a few of them faintly brown, and in round 2 those leftovers look exactly like CD20. The only way to know is to look after every wash, and wash again until it is really gone. That is what she does on the next slide, by hand."
        sub="Everything is brown. How do I know the stain from the last round is gone?"
        figure={<AllBrownFigure />}
      >
        The only problem?
      </StatementSlide>

      <Slide notes="Her way out: Kim tries chromogenic cycling out, by hand. Keep every antibody on the same slide: stain, look, wash the chromogen off, stain the next one. The tumor can’t wander off, and every cell carries the whole panel. One click on the slide per trip; narrate the four trips. One: stain 1 goes on, she carries the slide to the microscope and takes image 1. Two: wash 1, back to the microscope, and the stain is not completely gone; she writes that down: “Still too much. Let’s wash again.” Three: wash 2, and now it is completely gone: “It’s done, let’s go!” Four: stain 2, a different antibody from its own bottle, in its own colour, on other cells of the same tissue; she takes image 2, and on the computer the two images are overlaid. That overlay is the multi-staining: two antibodies, one slide, the same cells. What she discovers: if she does it exactly right, and the cells come out of the wash unstained (the cells, not the artifacts: a fold or a speck of debris keeps the chromogen forever and means nothing), she can reliably stain again. Opening total is about 9 minutes; if short on time, drop “The lab’s reality” first.">
        <Steps cues={CHROMOGENIC_ROUND_CUES} period={CHROMOGENIC_ROUND_PERIOD} className="relative flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <h2 className="text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">Kim, to work</h2>
            </div>
            <KimAtWork />
          </div>
          <ChromogenicRoundFigure />
        </Steps>
      </Slide>

      <DeckSlide
        title="The knowledge exists"
        notes="Opens on the tissue from the previous slide and waits. Five clicks on the figure: it pulls back (it is one tile of a tiled slide), then the macro runs, one step per click: stitch the tiles, segment the cells, measure the stain in every cell, verdict: this round didn’t take, stain again. Everyone in the room has written this macro."
      >
        <div className="flex flex-1 items-center justify-center">
          <MacroChainFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="She publishes"
        notes="Kim’s first paper: the protocol and the macro go into the methods and onto a DOI, and the statistics hold up: with the per-cell check after every round, most panels make it to the fifth stain. Let her enjoy it. Persona numbers (31 % vs 88 %, n = 48 slides) are illustrative, not from a real study; say so if asked. Then: the catch is that it’s all manual."
      >
        <div className="grid flex-1 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <KimFigure size={150} mood="happy" />
            <p className="sm-in max-w-[190px] rounded-2xl border border-fd-border bg-fd-card px-4 py-2.5 text-[16px] italic leading-snug" style={delay(0.8)}>
              “You can find my macro at this DOI. Just run it!”
            </p>
          </div>
          <PaperCard />
          <ResultsChart />
        </div>
      </DeckSlide>

      <Slide notes="The paper is out, and now everyone wants their slides done this way. Every slide is five rounds, and every round is Kim: carry it to the stainer, wait, carry it to the microscope, tile it, run the macro, decide, carry it back. She runs between the bench and the scope all day, and the timer never stops ringing. Pause on the line; the next slide is her answer.">
        <div className="flex h-[600px] w-full items-center gap-10">
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex items-start gap-8">
              <KimFigure size={190} mood="worried" />
              <div className="relative mt-2 flex-1">
                <p
                  className="sm-in rounded-[40px] border-2 border-fd-border bg-fd-card px-8 py-6 text-[34px] font-bold italic leading-[1.15] tracking-[-0.02em]"
                  style={delay(1)}
                >
                  Round three of five, slide nine of twenty. <Hl>I can’t run any faster.</Hl>
                </p>
                <span className="sm-pop absolute -left-[22px] bottom-[-14px] size-[22px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.85)} />
                <span className="sm-pop absolute -left-[44px] bottom-[-38px] size-[13px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.7)} />
              </div>
            </div>
          </div>
          <OverworkedKimFigure />
        </div>
      </Slide>

      <Slide notes="A beat between “I can’t run any faster” and the workflow: Kim dreams. The dream starts empty; three clicks on it, one device per click (microscope, OT-2, arm), each popping in with its name. Name them as they arrive, because they are real devices and come back all talk: the robot arm (a Fairino FR5) carries the slide, the Opentrons OT-2 stains and washes it, the openUC2 FRAME images it. Once all three are there the round starts by itself: the arm takes the slide to the OT-2, whose head moves over the deck, then on to the microscope, whose stage scans under its light, and comes home. It sparkles because it is a dream; the next slide is what it would take.">
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
        notes="Four clicks on the figure, one per pass through the OT-2: stain CD20 and image it, then wash; washed, 44 % of the cells still carry stain, so wash again; washed, gone, so the next stain; Ki-67 goes on, is imaged, and the panel is done. Her answer to “I can’t run any faster”: close the loop, and let a robot do the running. The arm carries the slide to the OT-2, which stains or washes it; the arm carries it on to the openUC2, which images it in tiles; StarDist segments the cells and the per-cell rule decides whether the last stain is really gone: stain left, back to the OT-2 for another wash; gone, on to the next stain; panel done, back to the rack. Point at the arm and the OT-2: that is the part no macro can do."
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The lab’s reality"
        notes="Arrives as the dream, standing still. One press and it rearranges into the real building: the arm and the OT-2 share a bench with the openUC2 and its acquisition PC in the imaging room, segmentation and the decision move to the office down the hall, and every step shows the computer it runs on. The acquisition PC has no GPU, so segmentation runs on the GPU server. “Can we buy another GPU for the acquisition computer?” “No.” Five machines, two rooms, and every connection crosses between them. That is the problem she takes to Claude next. First slide to drop if the opening runs long."
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure variant="lab" />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Kim asks for help"
        notes="Kim’s prompt stands; two clicks on the figure: the answer streams in without a single doubt, then her thank-you. Read the confidence out: “Absolutely!”, “just use HTTP APIs”, “that’s it, really”, “your slides will stain themselves now”, and the badges. No code yet; nobody asked what happens when an address changes, a call hangs, or a run has to be explained. That is the next part of the talk."
      >
        <div className="flex flex-1 items-center">
          <ClaudeChatFigure />
        </div>
      </DeckSlide>

      <StatementSlide notes="A beat between Claude’s cheerful answer and the four nights. Say it like a narrator, slowly: she has no idea what she just opened. Then the nights, one horseman each: Connection, Error handling & Observability, Data Management, Reproducibility.">
        Little does she know that she has opened Pandora’s box, and will soon be visited by <Hl>the four horsemen of smart microscopy and lab automation.</Hl>
      </StatementSlide>

      <DeckSlide
        title="The nightmare begins"
        notes="Night one. Three clicks on the figure, then a keypress for the horseman; the next three nights work the same, and Kim looks a little more worn each night. All Kim wants: “I just need to connect the devices.” Click: Claude, cheerfully: easy, you can use HTTP APIs, or gRPC, or SiLA2, or ROS, or MQTT, or raw sockets; just hardcode the IPs. Her question marks. Click: she picks the first one, and Claude is delighted. Click: Claude rewrites her script in the background, line by line, the errors pile up, and she gets more and more stressed. On her laptop you pass a numpy array to StarDist; over a network memory pointers don’t exist, and everything becomes a message to serialise. Keypress: the first horseman of the lab apocalypse, Connection, rides in. She has just met him. The errors are already on the slide (connection refused, a 2 GB json.dumps, the OT-2 not found), and behind him a cart of her doubts: numpy as JSON over the wire? What if the IPs change? I didn’t secure my server. Kim panics."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="communication" />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Threads, joins and a sleep(1)"
        notes="Night two. Three clicks, then a keypress. Her original script was synchronous; talking to another machine is inherently asynchronous. All she wants: “I just need it to wait until the robot is done.” Click: Claude: easy, threads, or asyncio, or multiprocessing, or Celery, or a job queue, or time.sleep(1); and a join at the end. Her question marks. Click: she picks the first one, and Claude is delighted. Click: Claude rewrites her script in the background, line by line, the errors pile up, and she gets more and more stressed. Keypress: the second horseman, Error handling & Observability. She has just met him. The errors are already there (an exception in Thread-2, a thread still alive after 120 s, a segfault) and his cart of doubts: what even is a join? If the GPU server dies, does the thread? Which machine failed, and where are the logs? When it breaks, nobody can see where."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="threads" />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Where did the data go?"
        notes="Night three. Three clicks, then a keypress. In her local script she saved the image to C:\\data and that was it. All she wants: “I just need to save the images.” Click: Claude: easy, a shared drive, or OME-TIFF, or OME-Zarr, or OMERO, or S3, or the filename; here’s a script that collects it all. Her question marks. Click: she picks the first one, and Claude is delighted. Click: Claude rewrites her script in the background, line by line, the errors pile up, and she gets more and more stressed. Keypress: the third horseman, Data Management. She has just met him. The errors are already there (no space left on device, experiment_one not found, a path longer than 260 characters, IT telling her to stop writing to the GPU server) and his cart of doubts: metadata in the filename, really? Which of five machines has run 41? I should have used OMERO."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="data" />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Can you run that again?"
        notes="The fourth night. Three clicks, then a keypress. Her macro had a version and a DOI; anyone could rerun it. All she wants: “I just need to run it again.” Click: Claude: easy, requirements.txt, or Conda, or Docker, or Nix, or Pixi, or a Streamlit GUI; just pip freeze it later. Her question marks. Click: she picks the first one, and Claude is delighted. Click: Claude rewrites her script in the background, line by line, the errors pile up, and she gets more and more stressed. Keypress: the fourth horseman, Reproducibility. She has just met him. The errors are already there (the GUI already breaks on a newer Streamlit, a CUDA mismatch, the config is gone, two runs on the same data disagree) and his cart of doubts: which version made run 41? Did my PI’s rerun use the old model? Will my vibe-coded GUI even run next year? Then the next slide is the one run that worked."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="repro" />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The one run in 76"
        notes="Let her stare for a moment. This is the day it finally worked: the one try out of 76 where everything actually ran and she could analyse the data. The point is not that the AI was bad. It worked, and that is exactly why it matters. Then press: her PI creeps in, delighted. “Great! Can you write this up?” … “by Friday?”"
      >
        <div className="flex flex-1 items-center">
          <ItWorkedFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Kim has had enough"
        notes="Two clicks on the figure: she falls, then her line. It all comes back at once: the ten-thousand-line script, the folders inside folders, the race on mask_0042, the IP addresses she can never remember. She wobbles, and keels over. From the floor, the one thing she actually wants: her Fiji script back. One file, one machine, and it ran every time. Hold the laugh, then turn to the room: what did those three nights actually leave behind?"
      >
        <div className="flex flex-1 items-center">
          <CollapseFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The agents aren’t the problem."
        notes="Take the heat off the agents, and have some fun with it. Kim’s nights are the two oldest hard problems in computing, and labs have been getting them wrong long before anyone asked Claude. Go left to right. The shared drive: final, final_v2, final_v3_REALLY_final, Copy of Copy of data, somebody’s USB stick, a folder called DO_NOT_DELETE. Reproducibility, one year later: the conda environment is gone, the pinned version doesn’t exist for this Python, the Matlab script misses a function, and “latest” means nothing; works on my machine, code available upon reasonable request. And the newest corner: the graveyard of unused AI. The lab chatbot, the classifier trained on twelve cells, the pilot project whose PhD left, the vibe-coded GUI that ran once, the agentic pipeline that only ever did the demo. Everyone in the room has a headstone here. Press: the popover. Pause. One person, one afternoon: fine. A whole facility where every user generates their own workflow, file layout and UI: Kim’s nights times a hundred."
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

      <Slide notes="Short beat, then into Arkitekt. About 8 minutes in. Two clicks on the figure: Run, then the answer. This is what Kim actually wants, and it is the bar for the rest of the talk: she writes the protocol once, the way she would write an ImageJ macro for one machine (pick up the slide, stain 1, image, wash until gone, stain 2, image, overlay), presses Run, and it runs on the machines: the arm, the OT-2, the microscope. And the answer is not a folder of files on three computers; it is “yes, here’s your data”. The question mark is whatever has to sit in the middle to make that true. Next: Arkitekt.">
        <div className="flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col justify-center gap-5">
            <p className="sm-in text-[44px] font-bold leading-[1.1] tracking-[-0.025em]" style={delay(0.1)}>
              Can we do better?
            </p>
            <div className="sm-in flex items-end gap-2" style={delay(0.35)}>
              <KimFigure size={150} mood="happy" />
              <p className="relative mb-16 rounded-3xl rounded-bl-sm border-2 border-fd-border bg-fd-card px-5 py-4 text-[24px] font-medium leading-snug shadow-sm">
                <span className="sr-only">Kim: </span>“Can you do this for me, and <Hl>run it on the machines?</Hl>”
              </p>
            </div>
            <p className="sm-in text-[21px] italic leading-snug text-fd-muted-foreground" style={delay(0.7)}>
              like an ImageJ script: write it once, press Run
            </p>
          </div>
          <BetterFigure />
        </div>
      </Slide>

      {/* 2. What is Arkitekt (about 6 min) --------------------------------- */}

      <Slide notes="The turn of the talk, played as a product launch. Say “Introducing Arkitekt”, let the all-fresh sticker pop, enjoy it for a second. Then straight into what it is: the middleman.">
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
                className="sm-entrance-pop flex size-[150px] items-center justify-center bg-[#facc15] text-center font-mono text-[22px] font-extrabold uppercase leading-[1.05] text-[#1f2937] shadow-lg"
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
        notes="One mental model is enough to start: Arkitekt sits in the middle. On the left, the apps in Kim’s lab: the openUC2 microscope, the robot arm and the OT-2, the analysis on the GPU server, Fiji and napari. Each one offers its steps to the hub as typed actions. On the right, Kim, with her two interfaces: Orkestrator in the browser, and the Arkitekt app on her phone. Same actions on both, and the image she just took shows up on both. She never talks to a machine directly. Nothing moves here; trace it with your words: calls go left, from Kim’s interfaces over their one connection through the hub to whichever app offers the action; results come back right, through the hub, where they are stored with their provenance. Neither side needs to know where the other one runs. The next three slides zoom in: one action through Orkestrator, a whole workflow, then the chat. Section total: about 6 minutes."
      >
        <div className="flex flex-1 items-center">
          <MiddlemanFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The microscope offers what it can do"
        notes="No code yet, just the contract, and just one device: the microscope. On arrival: the openUC2 app offers the functions it provides, with names, inputs and outputs (acquire_image, move_stage, autofocus), and the hub registers them. Then it opens one websocket to the hub and listens. It needs no open port and no known IP. The arm, the OT-2 and the GPU server do exactly the same. Click: the hub moves aside and Orkestrator appears; the form for acquire_image is built from its types, and the objective list comes straight from the microscope’s own state; Kim picks 10x. Click: assign. The task goes to the hub, and the hub sends it down the microscope’s socket. Click: the image goes to the hub first (stored, with provenance), and only then on to Kim’s browser. Those types are what Orkestrator shows and what can be wired together."
      >
        <div className="flex flex-1 items-center">
          <OfferFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Here is how that works"
        notes="Video slot: drop the recording in as public/presentations/smart-microscopy/microscope-actions.mp4 and it plays here. It is the last slide for real: the openUC2 app starts and its actions show up on the hub; in Orkestrator Kim opens acquire_image, picks the 10x objective from the dropdown, assigns it, and the image comes back. Next: the app can bring its own UI, too."
      >
        <div className="flex flex-1 items-center justify-center">
          <Clip
            label="Video · the microscope’s actions"
            file="microscope-actions.mp4"
            length="30 s"
            shows="The openUC2 app offers its actions to the hub; in Orkestrator Kim picks 10x, assigns acquire_image, and the image comes back."
          />
        </div>
      </DeckSlide>

      <DeckSlide
        title="It can bring its own UI, too"
        notes="Same three columns as the last slide, now for a UI. Everything is there on arrival (the blok offered, kept by the hub, rendered in Orkestrator); one click on the figure: Kim presses Capture. Say it out loud: this is not HTML, so it is safe. On the left, the openUC2 app ships a blok, capture_panel: a tree of fixed components (an image bound to the camera’s frame, the stage position, the objective, a Capture button that calls acquire_image). Nothing in it runs code. It travels to the hub, which keeps it next to the microscope’s actions and knows exactly what it needs. Then on to Orkestrator, which renders it. Kim presses Capture: the press goes back through the hub as a typed acquire_image call, and the new image shows up in the panel. Kim did not build this UI and the hub does not care what is in it; the app brought it. Next: the real thing, on video."
      >
        <div className="flex flex-1 items-center">
          <BlokOfferFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="And it can get quite complex itself"
        notes="Video slot: drop the recording in as public/presentations/smart-microscopy/microscope-blok.mp4 and it plays here. Narrate it as the second half of the last slide, and the point of the title: a blok can get quite complex itself, this one is a whole microscope panel. Functions are not everything a device wants to say. The openUC2 app registers a blok with the hub, a small UI it ships itself (live view, stage position, objective, the light), and Orkestrator renders it like any other page. Kim did not build it and the hub does not know what is in it; the app brought it. Keep it short: it comes back as a building block in a moment."
      >
        <div className="flex flex-1 items-center justify-center">
          <Clip
            label="Video · the microscope’s blok"
            file="microscope-blok.mp4"
            length="30 s"
            shows="The openUC2 app offers its blok to the hub; Orkestrator shows it: live view, stage, objective, light."
          />
        </div>
      </DeckSlide>

      <StatementSlide
        notes="Say it in Kim’s voice, a bit deflated. Everything so far is real, but it is remote control: Kim is still the one clicking every step, just from a browser instead of three PCs. Automation means the steps run without her. That is the next slide: wire the actions together."
        figure={<KimFigure size={200} mood="worried" />}
        sub="Kim, unimpressed"
      >
        “Okay, so now I control everything with clicks in a UI. <Hl>That’s not automation.</Hl>”
      </StatementSlide>

      <StatementSlide
        notes="Arkitekt answers Kim, played as the “I made this” meme: the logo proudly holding a stack of its actions like a kid with a drawing. Say it a little too pleased: well… you can actually use all these actions in workflows. One click on the logo: it shuffles the actions in its hands and lays them out in a circle around itself. Then the next slide: what a workflow is."
        figure={<IMadeTheseFigure />}
      >
        “Well… you can actually use all these actions <Hl>in workflows.</Hl>”
      </StatementSlide>

      <DeckSlide
        title="A workflow is just an action with dependencies"
        notes="Say the title first: a workflow is nothing new to the hub, it is just one more action, one that depends on other actions. On arrival: the actions on the hub sit in the palette; the arm’s move, the OT-2’s run_protocol, the openUC2’s acquire, stitch, segment and measure are dragged out and wired, with one edge looping back: below target, stain again. Point at the edge chips: an edge only connects if the output type fits the input (image into image, labels into labels). This is Kim’s loop, for real: six apps on five machines in two rooms. Click: Run. The hub assigns each node to the app that offers it (the same assign and result as the microscope slide, once per step) and every image lands on the hub. Click: the big red X. “That is so 2023.” Nobody wants to drag boxes any more; next slide."
      >
        <div className="flex flex-1 items-center">
          <WorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Or just ask for it"
        notes="Same workflow as the editor, but generated. Everything is on the slide on arrival, no clicks: the ask, the answer, its code, and the run. The point is what the AI writes against: not sockets, IP addresses and retry loops, but typed calls on declared protocols: the arm’s run_trajectory, the OT-2’s run_protocol, the openUC2’s acquire_image, stitch, segment, measure. The hub checks the declarations when the app starts, assigns each call to the app that offers it, and records every one of them. About twenty lines, all of them about the experiment: for each stain, stain until it takes. This is the same AI that wrote Kim’s 10,000 lines of plumbing; the difference is what it had to build on."
      >
        <div className="flex flex-1 items-center">
          <AiWorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="And the UI? Remix the bloks"
        notes="Same move as the workflow, for the interface. Everything is on the slide on arrival, no clicks: the ask, the answer, the code and the tiles. Kim wants one screen to watch the run. Claude doesn’t generate a UI from scratch: it writes a blok that only nests other bloks, the ones the apps brought with them, like the microscope’s blok two slides ago. Point at the colours: each Blok line becomes one tile. The openUC2’s live view with its capture button, the run’s progress from stainstorm, the OT-2’s deck, the arm’s pose. Every button on that page is still the app’s own typed action, with its own ranges, so nothing new has to be trusted. The syntax is illustrative."
      >
        <div className="flex flex-1 items-center">
          <BlokRemixFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Live: the remixed page, running"
        notes="Video slot: drop the recording in as public/presentations/smart-microscopy/blok-remix-live.mp4 and it plays here; until then the slot says what goes in it. Show the real thing from the last slide: ask the chat for one screen to watch the run, the blok appears, Orkestrator renders it, and the tiles are live while process_slides runs (the openUC2 view updating, the stain progress ticking, the OT-2 and the arm changing state). Press one button on the page, so they see it is still the app’s own typed action."
      >
        <div className="flex flex-1 items-center justify-center">
          <Clip
            label="Live demo"
            file="blok-remix-live.mp4"
            shows="The remixed run_dashboard in Orkestrator, live during a run: the openUC2 view, stain progress, the OT-2 deck and the arm, all updating."
          />
        </div>
      </DeckSlide>

      <Slide notes="Meme beat, right after the offer/assign/result walkthrough. One click on the picture for the punchline. Yes, Arkitekt is itself a distributed system, and we just put one more server in the middle of Kim’s lab. Own it, then turn it: the difference is not that the system is less distributed, it’s who carries it. Kim’s version is generated new every afternoon, per user, and nobody maintains it; this one is written once, by people whose job it is, and every app gets the hard parts (connection, retries, types, storage, provenance, access) for free. That’s the next part of the talk.">
        <div className="flex h-[640px] w-full items-center justify-center">
          <DistributedMemeFigure />
        </div>
      </Slide>

      <Slide notes="The first horseman rides in: Connection, wearing Reviewer 2’s face. He rears and has his say: “You still need to connect to the hub!” Don’t explain anything here: the next slide is the first blow.">
        <HorsemanDuelFigure night="communication" />
      </Slide>

      <DeckSlide
        title="No IPs, just coordination"
        notes="The first horseman, Connection, from night 1. Three clicks on the figure (strike the IP, ask and answer, the direct line), then a keypress strikes him down. First the IP address Kim used to paste into every script: struck out, nobody types one any more, and nobody opens a port. Instead the app asks a coordination server (the hub registered there too) where its hub is, and gets back a route and keys. That is the only thing the coordination server does: it steps aside, and the app talks to the Arkitekt server directly, over a WireGuard tunnel, wherever either of them is. Click: strike him down."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="communication" weapon="coordination">
            <CoordinationWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Connect from anywhere, encrypted"
        notes="Still the first horseman, one more blow: “connect to the hub” is not only a lab problem. Go round the picture. The openUC2 PC sits behind the lab’s NAT. The GPU node is a SLURM job inside the university’s HPC firewall; it starts, asks the coordinator, and offers segment_image like any other app. Kim’s laptop is on her phone’s hotspot on the train. A collaborator runs napari at a partner institute. All of them dial out and meet the hub over WireGuard, on the organisation’s mesh: no open ports, no public IP, and the coordinator never sees the data. The odd one out is the ESP32 on the bench: arkitekt-esp32 turns it into an agent that offers actions and publishes live state, provisioned over Bluetooth with the Pokket app, and it talks to the hub over a TLS WebSocket, not WireGuard. Be honest if asked: the ESP32 client is a prototype and does not verify certificates yet."
      >
        <div className="flex flex-1 items-center">
          <AnywhereFigure />
        </div>
      </DeckSlide>

      <StatementSlide notes="Before the second horseman, say it plainly: Arkitekt is no silver bullet. Things still fail: a stage hangs, a bottle runs dry, a laptop lid gets closed, a GPU job gets killed. What changes is what happens next: you can see what happened, and react to it, so the run can be saved. The next three slides: observe, react, alert.">
        Arkitekt is no silver bullet. Stuff still fails. <Hl>But it helps you react and observe.</Hl>
      </StatementSlide>

      <Slide notes="The second horseman: Error handling & Observability, wearing Reviewer 2’s face again. His line: “If your connection fails, your workflow fails. lol”. This fight takes three slides: observe, react, alert.">
        <HorsemanDuelFigure night="threads" />
      </Slide>

      <DeckSlide
        title="Observe: everything goes into one log"
        notes="The second horseman, Error handling & Observability, part one: observe. The log of run 41 is all there on arrival: when each call ran, what was called, on which app, and what came back, with the log lines in between. This is the measurement Kim never had: one log of everything that happened, on every machine, in one place, instead of a print statement on each of three computers. You can’t react to what you can’t see; next slide is the reacting."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="threads" weapon="the log" kill={false}>
            <RecordWinFigure mode="observe" />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="React: the workflow recovers"
        notes="Part two: react. Three clicks on the figure: the crash, the resume with its replays, the run carrying on. The same log of run 41 is already there. Then the workflow’s process dies (Kim closes her laptop). Instead of starting over, it is resumed in a new process: the calls that already finished are replayed from the log, so a slide that was stained is not stained twice, and the run carries on where it was. Same run, same answers, nothing ran twice. The horseman is still standing: next slide."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="threads" weapon="the log" kill={false}>
            <RecordWinFigure mode="recover" />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Live: a workflow recovering"
        notes="Demo slot: drop the recording in as public/presentations/smart-microscopy/replay-demo.mp4 and it plays here; until then the slot says what goes in it. Show the last slide for real: process_slides runs a few steps, kill the workflow’s process (close the laptop, or Ctrl-C), start it again, and watch Orkestrator: the finished calls come back from the log as replayed, nothing is stained or imaged twice, and the run carries on from where it stopped."
      >
        <div className="flex flex-1 items-center justify-center">
          <Clip
            label="Live demo"
            file="replay-demo.mp4"
            shows="process_slides is killed mid-run and started again: the finished calls come back from the log, and the run carries on where it stopped."
          />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Alert: when code can’t fix it, ask a person"
        notes="Part three: alert. Three clicks on the figure (hold, swap, resume), then a keypress for the strike. Not every error is a crash: sometimes the stain just won’t take. Three rounds of CD20 and the uptake is still at 52 %: no code can fix an old reagent bottle. Kim’s workflow checks for that and calls task.hold with a message. The run pauses, Orkestrator shows Kim the message (swap the CD20 bottle, then resume), she swaps it, presses resume, and the code carries on after the hold: the next stain, Ki-67. The hold is recorded, so if the workflow is ever resumed after a crash, it won’t stop there again. Click: strike him down."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="threads" weapon="the log, and Kim">
            <HoldWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <Slide notes="The third horseman: Data Management, Reviewer 2 once more: “lol, on your server you still just have folders. You don’t solve that.” One blow this time.">
        <HorsemanDuelFigure night="data" />
      </Slide>

      <DeckSlide
        title="Classic microscopy paradigms as a multidimensional time series break"
        notes="The tiles on the right are the ones from the demo, placed on the stage they were taken on. For sequential staining this is the whole game: every round of the same slide has to land on the same coordinates, or the stains don’t overlay cell by cell. Link to the Mikro coordinate system deck for anyone who wants the details."
      >
        <div className="flex flex-1 items-center">
          <CoordsFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Data with coordinates, not filenames"
        notes="The third horseman, Data Management. Three clicks on the figure (tiles, round two and the record, the filename), then a keypress for the strike. The tiles land on the stage and form the mosaic of slide HE-07; then the next staining round lands on exactly the same place, because every round lives in the same stage coordinate system in mikro, so the stains overlay cell by cell. On the right, everything the 260-character filename used to carry, as data: pixel size, stage position, channel and time, the calls that made it, the dataset. Click: strike him down."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="data" weapon="mikro">
            <DataWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="A lineage graph, on one coordinate system"
        notes="Stay on the third horseman for one more slide. Six clicks on the figure, one per call. Left, the lineage graph, read in a zigzag: acquire_image made the tiles; stitch_images made the mosaic; segmentation (on the GPU server) made the labels; the analyzer measured the uptake, 41 %, below target; so run_protocol stained CD20 again, and round two measured 86 %. Right, the same items on the stage, each one placed the moment it appears in the graph: the tiles, the mosaic, the labels on it, the uptake on its cells, and round two on top. Two questions Kim could never answer from a folder, now one click each: where did this number come from, and why was this slide stained twice?"
      >
        <div className="flex flex-1 items-center">
          <LineageFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Arkitekt, live"
        notes="Live demo slot: drop the recording in as public/presentations/smart-microscopy/live-arkitekt.mp4 and it plays here; until then the slot says what goes in it. Straight after the lineage slide, so show the real thing: a run of the workflow, then its lineage graph and the images on the stage in Orkestrator."
      >
        <div className="flex flex-1 items-center justify-center">
          <Clip
            label="Live demo"
            file="live-arkitekt.mp4"
            shows="Arkitekt live: the workflow runs, then its lineage graph and the images on the stage in Orkestrator."
          />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Not only image data"
        notes="After the demo, widen it: everything so far was brightfield tiles, but the same data management holds for what other labs actually record. Time series from calcium imaging, FLIM lifetimes with their phasor, spectral stacks, multichannel, volumes, the tables of per-cell measurements and the meshes that come out of segmentation. Each is a typed dataset, not a folder of files, and each knows where it sits and what made it. Two examples next: FLIM, then calcium imaging."
      >
        <div className="flex flex-1 items-center">
          <DataKindsFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="FLIM, with its phasor"
        notes="Screenshot from mikro: hMSC control, a FLIM dataset, opened like any other dataset. On the right, the phasor plot; select a cloud in it and the image is coloured by lifetime. The dataset lives on the same coordinate systems, with the same lineage, as Kim’s tiles."
      >
        <div className="flex flex-1 items-center justify-center">
          <Shot src="/clips/flim-data.jpg" alt="hMSC control, a FLIM dataset in mikro, with its phasor plot." />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Calcium imaging, as a time series"
        notes="Screenshot slot: drop the screenshot in as public/presentations/smart-microscopy/calcium-imaging.png and it shows here; until then the slot says what goes in it. Show a calcium imaging time series in mikro, ideally with the ΔF/F traces of a few cells next to the movie."
      >
        <div className="flex flex-1 items-center justify-center">
          <Shot src="/presentations/smart-microscopy/calcium-imaging.png" alt="A calcium imaging time series in mikro, with the traces per cell." />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Sharing is caring"
        notes="Close the data part by giving it away. The clip on the left autoplays: Kim presses share on slides / HE-07 and picks the other lab. Nothing is exported or uploaded. Click: the other lab accepts. A WireGuard connection opens between the two hubs, the same kind of tunnel as on the connection slide, but scoped: it reaches HE-07, every round of it, read-only, and nothing else. HE-08 and her drafts aren’t even visible. The same goes for the FLIM and calcium datasets: share a dataset, not a folder."
      >
        <div className="flex flex-1 items-center">
          <ShareDataFigure src={`${MEDIA}/share-data.mp4`} />
        </div>
      </DeckSlide>

      <Slide notes="The last horseman: Reproducibility. Reviewer 2’s favourite: “You still need to run the code somewhere. How should we reproduce these environments? And who packages it into a usable desktop application? Mac? Windows? HTML?” The second half is the vibe-coded GUI from night 4: nobody ships a Streamlit script to a pathologist as an app. This fight takes three slides: sharing is caring, then code, then data.">
        <HorsemanDuelFigure night="repro" />
      </Slide>

      <DeckSlide
        title="Reproducing takes code and data"
        notes="The fourth horseman, Reproducibility. It takes both halves: code without the data has nothing to run on, data without the code doesn’t say how it was made. The data half they have already seen: press share. So one slide for the other half, the code; the strike comes at the end of it."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="repro" weapon="sharing" kill={false}>
            <SharingFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Share code: publish it as an app"
        notes="The other half, the code. Four clicks on the figure (bundle, publish, the other hub, Install), then a keypress for the strike. Kim’s script is a folder: app.py with her process_slides workflow, and pyproject.toml pinning stardist. arkitekt plugin build bundles it as an app: a container image, the declared actions and what it needs from other apps, CPU and CUDA flavours. arkitekt plugin publish puts the release on GitHub. From there it is installable: another lab’s hub finds stainstorm, presses install, and gets the same workflow, picking the CUDA flavour because it has a GPU. It runs against their own arm, liquid handler and microscope, as long as those offer the same actions. No README with twelve setup steps. Click: strike him down. That’s all four."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="repro" weapon="sharing">
            <ShareCodeFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Reproducibility is remixing"
        notes="The point of sharing code and data, said plainly: reproducibility in smart microscopy is not one more lab running Kim’s exact script on Kim’s exact microscope. Nobody has her microscope. One click on the figure per beat: swap, the three installs, remix, build, then the closing line. Their scope is a Nikon, not an openUC2, but it offers acquire_image on the same ScopeLike protocol, so it slots in. Segmentation, the analysis and the progress blok they install as they are, with the versions Kim ran. And her workflow they remix: her steps, their scope, one new step of their own, spheroid classification. Last row, the interface: they don’t have to live with Kim’s UI either. Writing their own blok is a few lines of BSX, here a review panel for their spheroids, and because it is declared and typed like any blok, their own AI can hand it out in the chat, exactly like the capture blok earlier. What gets reproduced is the parts, typed and versioned, and they compose into new experiments; that is how the method spreads."
      >
        <div className="flex flex-1 items-center">
          <RemixReproFigure />
        </div>
      </DeckSlide>

      {/* “just tell Claude to run it”: two problems ------------------------- */}

      <Slide notes="One more rider, and he’s new: the AI Horse, Reviewer 2 in the saddle again, shouting “LLMs will make all of that obsolete! WHERE IS THE CHAT INTERFACE?” No strike here; the next slides are the answer, starting with Kim, who has had the same idea.">
        <HorsemanDuelFigure night="ai" />
      </Slide>

      <DeckSlide
        title="Just tell Claude to run it?"
        notes="Kim is bored again, and she has a plan: skip the workflow, tell Claude to run the experiment, and let the user chat with it. One click on the figure and Arkitekt answers: two problems with that. One, what is it allowed to do? Two, what does the user actually chat with? The clip comes first, then one slide per problem."
      >
        <div className="flex flex-1 items-center">
          <PitchFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The Rise and Reckoning of Jensen Huang"
        notes="YouTube, 23:13 to 24:15; it starts when the slide comes up and stops at 24:15. Needs the venue’s network: if YouTube is blocked, say what the clip shows and move on."
      >
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <YouTubeClip id="JW5s9Md4U2U" start={1393} end={1455} label="Clip" shows="The Circuit with Emily Chang: Jensen Huang, 23:13 to 24:15." height={410} />
            <span className="text-[15px] text-fd-muted-foreground">Bloomberg Originals · The Circuit with Emily Chang</span>
          </div>
        </div>
      </DeckSlide>

      <DeckSlide
        title="The agent asks for rights, like any app"
        notes="Problem one: what is it allowed to do? Four clicks on the figure. On Arkitekt, Claude is just another app. It can’t touch the lab until it asks: call process_slides on stainstorm, read slides / HE-07. Not moving the arm by hand, not deleting data. Kim approves those scopes, until six. Then it needs the GPU server for segmentation, which it wasn’t granted, so it asks again and Kim allows it once. The record shows both calls, and who allowed each of them."
      >
        <div className="flex flex-1 items-center">
          <AgentRightsFigure />
        </div>
      </DeckSlide>

      <StatementSlide
        sub="So let the chat answer with something better than text."
        notes="Problem two: what does the user chat with? People would like to chat with that, and that’s fine. But typing “a bit more exposure… no, less” to a microscope forty times a day is not an interface."
      >
        People would like to chat with that.
      </StatementSlide>

      <DeckSlide
        title="The chat answers with a blok"
        notes="Three clicks on the figure. Kim asks to tune the exposure herself. Claude doesn’t write a UI and doesn’t ask her to type numbers: it hands over the capture blok that ships with the openuc2 app. She turns the exposure to 35 ms and captures; the preview brightens, and that press is a recorded call like any other. Then she types 900: outside the action’s range, so the blok says no before anything reaches the laser."
      >
        <div className="flex flex-1 items-center">
          <BlokChatFigure />
        </div>
      </DeckSlide>

      {/* something completely different: the instrument itself (about 4 min) */}

      <Slide notes="A deliberate gear change, Monty Python timing. Then the disclaimer, said plainly and with a smile: this part is an industry collaboration with openUC2, so take everything in it with a grain of salt. I have no financial interest in openUC2. And Bene had no say in these slides. So far the instrument was a given: Arkitekt adapted where and how to image, and what ran next. The next slides are about the instrument itself: openUC2’s idea, the problem it makes for software, then Optikit, newswitch, microscopes built for one question, and coordinate systems one more time. About 5 minutes.">
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
        notes="openUC2’s main idea in one line: modularity is king. Instead of buying one closed microscope, you get cubes, each holding one thing (an LED, a sample holder, an objective, a lens, a mirror, a camera), and you snap them onto a baseplate in whatever order the experiment needs. It arrives assembled: a real fluorescence microscope as Optikit exports it, in the order the light goes through it: the fiber holder and the blue laser, a mirror, the dichroic, the objective, a mirror up to the sample stage, the camera, and the controller. The cubes are black, as they look on the bench; click the scene and the housings fade away to show the optics inside: the mirrors, the amber dichroic, the green emission filter, the lenses (click again to bring them back). It turns slowly: swap any cube and it is a different microscope. Cheap, open, and rebuilt over lunch."
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

      <Slide notes="And here is the catch, from the software side: modularity is the worst thing that can happen to microscope software. Every program quietly assumes a microscope: one camera the right way up, focus on the stage, an LED you switch on, and the same build tomorrow. With cubes, no two microscopes behave alike, and the next build breaks whatever you hard-coded. So the software can’t assume the microscope; it has to be told what it is. That is where Optikit and newswitch come in.">
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

      <StatementSlide notes="A beat between the problem and the answer. We have the cubes, and every cube is a known piece of optics: a lens with a focal length, an LED with a spectrum, a camera with a pixel size. So instead of guessing, why not compute it: simulate what the image is supposed to look like, before anything is built, and compare it to what the camera actually sees. The next two slides are how: Optikit describes the microscope, newswitch simulates it.">
        So we have cubes, and we know their optics. <Hl>What if we just simulate what the image is supposed to look like?</Hl>
      </StatementSlide>

      <DeckSlide
        title="Design the microscope like a circuit board"
        notes="The answer to the last slide: describe the microscope instead of assuming it. Optikit is the openUC2 platform for designing an instrument, think KiCad for optics. Every part, an LED, an objective, a tube lens, a splitter, a camera, is authored once in a library with its real geometry, and reused in every design. Place them on the bench, and (one click on the figure) Optikit traces the light: one path per camera, here A straight through and B folded by the splitter. Out of the trace come the facts nobody should type by hand: µm per pixel (the 3.45 µm pitch over 10×, 0.345), the light path per detector, and a priced parts list to order from. Credit the Optikit team by name here."
      >
        <div className="flex flex-1 items-center">
          <OptikitBenchFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The design runs before the hardware does"
        notes="My side of it. newswitch is a rewrite of ImSwitch, the openUC2 microscope software, and it reads the Optikit design instead of a hand-written config. Because it knows the optics, it can simulate them (press the three settings on the switch in the figure; it no longer cycles): with simulate set to everything, every part is simulated and the camera draws a simulated sample, here beads, through the traced optics. Set it to unwired, and whatever is plugged in is real, the stage and camera A here, while the rest stays simulated. Set it to nothing, and it is the real instrument. The actions, states and bloks are the same in every mode, so Arkitekt and Orkestrator can’t tell the difference: routines and workflows run before the hardware is built, and a simulated bench even carries hidden errors for calibration to find."
      >
        <div className="flex flex-1 items-center">
          <SimulateFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="A microscope for one question"
        notes="The payoff of the last two slides plus bloks. If you can design, simulate and build an instrument cheaply, you can build it for one question instead of buying one for every question. The instrument’s description carries its bloks, its own little UIs, so the UI comes with the question: Kim’s brightfield scope asks “did the stain take?” and ships a stain check; a FLIM scope ships a lifetime fit; a light-sheet ships a sheet alignment. Orkestrator renders whichever bloks the instrument brings, on the same hub, with the same actions underneath. The three instruments are configurations in newswitch; the numbers in the bloks are illustrative."
      >
        <div className="flex flex-1 items-center">
          <QuestionScopesFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Every detector is a sensor in a coordinate system"
        notes="Back to coordinate systems, one level down. Two clicks on the figure: camera A lands, then camera B. Each detector is a coordinate system of its own: its sensor, in pixels. Camera B sits behind the splitter, so it sees the sample mirrored. Because newswitch knows the optics from the trace, it knows how each sensor maps onto the stage (0.345 µm per pixel, and a mirror for B), and the stage onto the sample. So both images land on the same cells without anyone registering them by hand. It is the same coordinate graph the hub stores the data in, which is why the images from Kim’s run were already placed."
      >
        <div className="flex flex-1 items-center">
          <SensorSpacesFigure />
        </div>
      </DeckSlide>

      <StatementSlide>
        Workflows call actions, not scripts.{' '}
        <Hl>That’s why they survive the author leaving.</Hl>
      </StatementSlide>
    </DeckFrame>
  );
}
