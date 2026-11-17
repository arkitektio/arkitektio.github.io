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
  LongLogFigure,
  RecordTableFigure,
  LineageFigure,
  RecordWinFigure,
  ResumeFigure,
  ShareCodeFigure,
  ShareDataFigure,
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
  RemixReproFigure,
  DataKindsFigure,
  BlokRemixFigure,
} from './smart-microscopy-arkitekt-figures';
import { AgentRightsFigure, BlokChatFigure } from './smart-microscopy-llm-figures';
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

      <Slide notes="Remote talk, 45-minute slot. As the deck stands it runs longer than that, roughly: Kim’s story 13, Arkitekt 8, the horsemen answered 17, AI hype 5, closing 2. That is tight but possible. The Optikit outlook and five more slides are left out of this talk (WITH_OPTIKIT and FULL_LENGTH in the deck file bring them back). All demos are recorded clips, narrated live; every clip slot says what it shows, so the talk works without them.">
        <AnimStyles />
        <div className="flex h-[600px] w-full items-center gap-10">
          <div className="flex flex-1 flex-col gap-6">
            <Eyebrow>Journées thématiques SMART MICROSCOPY · RTmfm SMILE · Aussois 2026</Eyebrow>
            <h1 className="sm-in text-[60px] font-bold leading-[1.04] tracking-[-0.03em]" style={delay(0.1)}>
              Orchestrating open source hardware,{' '}
              <span className="text-fd-primary">open source</span>
            </h1>
            <p className="sm-in text-[24px] leading-snug text-fd-muted-foreground" style={delay(0.3)}>
              Arkitekt and openUC2
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

      <Slide notes="Kim is a persona, not a real person: say so. She is a pathologist, and she wants several antibodies on the same tumor: CD3, CD20, Ki-67, PanCK. The classic way is one antibody per section: cut the block into serial sections and stain each one with its own antibody. One press of next per beat (cuts, sections, antibodies, the miss): the cuts go through the block, each section gets its antibody, and the tumor shrinks from section to section. The fourth cut falls outside the tumor, and that is the PanCK section, the one that was meant to find it. Even where the tumor is there, every section has different cells, so you can never ask what one cell carries. Next slide is her way out.">
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

      <Slide notes="Then Kim hears about chromogenic cycling, at a talk. The idea fits on one slide: keep the tissue on one slide and cycle. Stain with an antibody and its chromogen, image the slide, wash until the colour is completely gone, then the next antibody. Eight presses of next. The first four take round one station by station (stain, image, wash, next antibody) with CD3. Then one press per antibody: CD20, Ki-67, PanCK, each marking its own cells and filing its image. The last press overlays the four, and every marker sits on the same cells. That is exactly what the four serial sections on the last slide could not give her. Next slide: she tries it, by hand.">
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

      <Slide notes="The only problem. On the last slide every antibody had its own colour; in practice nearly every chromogen is brown, DAB. So after round 2, a brown cell is either the new antibody, or the old one that never washed off. Round 1 marks the CD3 cells, the wash leaves a few of them faintly brown, and in round 2 those leftovers look exactly like CD20. Then Kim’s thought, bottom left: well, if we know which cells stained in the first round, let’s just look whether they are still stained after the wash. That is the whole trick: look after every wash, and wash again until it is really gone. It is what she does on the next slide, by hand.">
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

      <Slide notes="Her way out: Kim tries chromogenic cycling out, by hand. Keep every antibody on the same slide: stain, look, wash the chromogen off, stain the next one. The tumor can’t wander off, and every cell carries the whole panel. One press of next per trip; narrate the four trips. One: stain 1 goes on, she carries the slide to the microscope and takes image 1. Two: wash 1, back to the microscope, and the stain is not completely gone; she writes that down: “Still too much. Let’s wash again.” Three: wash 2, and now it is completely gone: “It’s done, let’s go!” Four: stain 2, a different antibody from its own bottle, in its own colour, on other cells of the same tissue; she takes image 2, and on the computer the two images are overlaid. That overlay is the multi-staining: two antibodies, one slide, the same cells. What she discovers: if she does it exactly right, and the cells come out of the wash unstained (the cells, not the artifacts: a fold or a speck of debris keeps the chromogen forever and means nothing), she can reliably stain again.">
        <Steps live cues={CHROMOGENIC_ROUND_CUES} period={CHROMOGENIC_ROUND_PERIOD} className="relative flex h-[600px] w-full items-center gap-8">
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
        title="And she even automated that"
        notes="Say the title: and she even automated that. Opens on the tissue from the previous slide and waits. Five presses of next, each one quick (under a second): it pulls back (it is one tile of a tiled slide), then the macro runs, one step per press: stitch the tiles, segment the cells, measure the stain in every cell, verdict: this round didn’t take, stain again. Everyone in the room has written this macro."
      >
        <div className="flex flex-1 items-center justify-center">
          <MacroChainFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="She publishes"
        notes="Kim’s first paper, big on the slide: the protocol and the macro go into the methods, and the macro and the data go onto a DOI, with a gold star for it. With the per-cell check after every round, most panels make it to the fifth stain. Let her enjoy it. It is a persona’s paper, not a real study; say so if asked. Then: the catch is that it’s all manual."
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

      <Slide notes="The paper is out, and now everyone wants their slides done this way. Every slide is five rounds, and every round is Kim: carry it to the stainer, wait, carry it to the microscope, tile it, run the macro, decide, carry it back. She runs between the bench and the scope all day, and the timer never stops ringing. Pause on the line; the next slide is her answer.">
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

      <Slide notes="A beat between “I can’t run any faster” and the workflow: Kim dreams. The dream starts empty; three presses of next, one device per press (microscope, OT-2, arm), each popping in with its name. Name them as they arrive, because they are real devices and come back all talk: the robot arm (a Fairino FR5) carries the slide, the Opentrons OT-2 stains and washes it, the openUC2 FRAME images it. Once all three are there the round starts by itself: the arm takes the slide to the OT-2, whose head moves over the deck, then on to the microscope, whose stage scans under its light, and comes home. It sparkles because it is a dream; the next slide is what it would take.">
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
        notes="The subtitle is the point of the whole talk: every device here is open source. The robot arm stands in the middle of the hardware because everything goes through its hand: rack to OT-2, OT-2 to openUC2, and back. Four presses of next, one per pass through the OT-2: stain CD20 and image it, then wash; washed, 44 % of the cells still carry stain, so wash again; washed, gone, so the next stain; Ki-67 goes on, is imaged, and the panel is done. Her answer to “I can’t run any faster”: close the loop, and let a robot do the running. The arm carries the slide to the OT-2, which stains or washes it; the arm carries it on to the openUC2, which images it in tiles; Cellpose segments the cells and the per-cell rule decides whether the last stain is really gone: stain left, back to the OT-2 for another wash; gone, on to the next stain; panel done, back to the rack. Point at the arm and the OT-2: that is the part no macro can do."
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure />
        </div>
      </DeckSlide>

      {FULL_LENGTH ? (
      <DeckSlide
        title="The lab’s reality"
        notes="Arrives as the dream, standing still. One press and it rearranges into the real building: the arm and the OT-2 share a bench with the openUC2 and its acquisition PC in the imaging room, segmentation and the decision move to the office down the hall, and every step shows the computer it runs on. The acquisition PC has no GPU, so segmentation runs on the GPU server. “Can we buy another GPU for the acquisition computer?” “No.” Five machines, two rooms, and every connection crosses between them. That is the problem she takes to Claude next. First slide to drop if the opening runs long."
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure variant="lab" />
        </div>
      </DeckSlide>
      ) : null}

      <DeckSlide
        title="Kim asks for help"
        notes="Kim’s prompt stands; two presses of next: the answer streams in without a single doubt, then her thank-you. Read the confidence out: “Absolutely!”, “just use HTTP APIs”, “that’s it, really”, “your slides will stain themselves now”, and the badges. No code yet; nobody asked what happens when an address changes, a call hangs, or a run has to be explained. That is the next part of the talk."
      >
        <div className="flex flex-1 items-center">
          <ClaudeChatFigure />
        </div>
      </DeckSlide>

      <StatementSlide notes="A beat between Claude’s cheerful answer and the four nights. Say it like a narrator, slowly: she has no idea what she just opened. Then the nights, one horseman each: The Network (connection), The Silent Crash (error handling and observability), The Folder (data management), Works On My Machine (reproducibility).">
        Little does she know that she has opened Pandora’s box, and will soon be visited by <Hl>the four horsemen of smart microscopy and lab automation.</Hl>
      </StatementSlide>

      <DeckSlide
        title="The nightmare begins"
        notes="Night one. Seven presses of next, the last one for the horseman. This is the only night played beat by beat; the next three are the same beats in three presses each, and Kim looks a little more worn each time. Kim starts out cheerful: “Okay, let’s connect the robot to my script.” Press: Claude, cheerfully: easy, you can use HTTP APIs, or gRPC, or SiLA2, or ROS, or MQTT, or raw sockets; just hardcode the IPs. Her question marks. Press: she picks the first one, Claude is delighted and rewrites her script. Then, in one run, the four errors: each pops up, Claude cheerfully has a fix for it, and three more lines land on the script, which gets longer and longer while Kim gets more and more stressed. On her laptop you pass a numpy array to StarDist; over a network memory pointers don’t exist, and everything becomes a message to serialise. Last press: the first horseman of the lab apocalypse, The Network, rides in. She has just met him. The errors are already on the slide (connection refused, a 2 GB json.dumps, the OT-2 not found), and he tips his cart of doubts over her, one after the other: numpy as JSON over the wire? What if the IPs change? I didn’t secure my server. Kim panics."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="communication" />
        </div>
      </DeckSlide>

      <DeckSlide
        title="A week later"
        notes="Say the title like a time card: a week later. Night two: threads, joins and a sleep(1). Three presses, played faster than night one: her question and Claude’s answer through to the rewritten script; the four errors and fixes in one run; then the horseman. Her original script was synchronous; talking to another machine is inherently asynchronous. She comes in confused: “Wait, why did my robot just stop? It’s frozen!” Press: Claude: ah, that was a deadlock, easy to fix; do you want to use threads, or asyncio, or multiprocessing, or Celery, or a job queue, or time.sleep(1)? And a join at the end. Her question marks. Press: she picks the first one, Claude is delighted and rewrites her script. Then, in one run, the four errors: each pops up, Claude cheerfully has a fix for it, and three more lines land on the script, which gets longer and longer while Kim gets more and more stressed. Last press: the second horseman, The Silent Crash. She has just met him. The errors are already there (an exception in Thread-2, a thread still alive after 120 s, a segfault) and he tips his cart of doubts over her, one after the other: what even is a join? If the GPU server dies, does the thread? Which machine failed, and where are the logs? When it breaks, nobody can see where."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="threads" compact />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Three weeks later"
        notes="Time card: three weeks later. Night three: where did the data go? Three presses, played faster than night one: her question and Claude’s answer through to the rewritten script; the four errors and fixes in one run; then the horseman. In her local script she saved the image to C:\\data and that was it. Now it runs, and she asks: “Okay, now my images are on five computers. How do I get them?” Press: Claude: no worries, just use this script; it can collect them with a shared drive, or OME-TIFF, or OME-Zarr, or OMERO, or S3, or the filename. Her question marks. Press: she picks the first one, Claude is delighted and rewrites her script. Then, in one run, the four errors: each pops up, Claude cheerfully has a fix for it, and three more lines land on the script, which gets longer and longer while Kim gets more and more stressed. Last press: the third horseman, The Folder. She has just met him. The errors are already there (no space left on device, experiment_one not found, a path longer than 260 characters, IT telling her to stop writing to the GPU server) and he tips his cart of doubts over her, one after the other: metadata in the filename, really? Which of five machines has run 41? I should have used OMERO."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="data" compact />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Three months later"
        notes="Time card: three months later. The fourth night: can you run that again? Three presses, played faster than night one: her question and Claude’s answer through to the rewritten script; the four errors and fixes in one run; then the horseman. Her macro had a version and a DOI; anyone could rerun it. Nothing was touched, and it stopped working: “Madonna! The last weeks it worked. What happened?” Press: Claude: ah, a version changed for CUDA, no worries, I’ll update; we can pin it with requirements.txt, or Conda, or Docker, or Nix, or Pixi, or a Streamlit GUI; just pip freeze it later. Her question marks. Press: she picks the first one, Claude is delighted and rewrites her script. Then one press, and this night it is a cascade: every fix is an update, and every update breaks the next thing. The CUDA update broke torch; “ah, let me fix that”; the new torch broke numpy; “ah, let me fix that”; that broke the GUI; and in the end the numbers themselves have changed. Three more lines land on the script each time, and Kim gets more and more stressed. Last press: the fourth horseman, Works On My Machine. She has just met him. The errors are already there (torch against the new CUDA, numpy 2, the GUI on a newer Streamlit, two runs on the same data that disagree) and he tips his cart of doubts over her, one after the other: which version made run 41? Did my PI’s rerun use the old model? Will my vibe-coded GUI even run next year? Then the next slide is the one run that worked."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="repro" compact />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Five months later"
        notes="The last time card: five months later. Only her face, gone a little crazy: wide bloodshot eyes, twitching pupils, a manic grin. Let her stare for a moment. Press: “It worked.” is stamped across her chin, once: the one try out of 76 where everything actually ran and she could analyse the data. The point is not that the AI was bad. It worked, and that is exactly why it matters. Press again: her PI creeps in, delighted. “Great! Can you write this up?” … “by Friday?”"
      >
        <div className="flex flex-1 items-center">
          <ItWorkedFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Kim has had enough"
        notes="Eight presses of next. Kim stands there alone, and this is what the nights left her with. Press: five scripts on five computers, her laptop, the acquisition PC, the arm controller, the OT-2, the GPU server, and she maintains every one of them. Press: she tries to read them. Her eyes dart from one to the next and she no longer understands her own code: what does line 4,812 do, why is there a sleep(7), who wrote this, me? Press: the data, in a folder on each machine, and she no longer knows which is which. Press: and how would she even package this for someone else, a zip, Docker, an exe, a README? Press: she says it out loud: “I don’t understand anything anymore. This is not my code anymore. I don’t know its shortcomings.” That last one is the serious point: she can no longer say where her own method fails. Press: she wobbles, and keels over. From the floor, the one thing she actually wants: her Fiji script back. One file, one machine, and it ran every time. Press: Claude, helpful as ever: “I can also write that paper for you?” Press: “STOPPP!” Hold the laugh, then turn to the room: what did those three nights actually leave behind?"
      >
        <div className="flex flex-1 items-center">
          <CollapseFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Interlude: the agents aren’t the problem"
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

      <DeckSlide
        title="What Kim wishes for"
        notes="Short beat, then into Arkitekt. About 8 minutes in. Nothing moves. This is what Kim actually wishes for, in her words: could I not have a multi-computer ImageJ that does these tasks for me, and I just write a script for it? It is the bar for the rest of the talk. On the right: she writes the protocol once, the way she would write an ImageJ macro for one machine (pick up the slide, stain 1, image, wash until gone, stain 2, image, overlay) and presses Run. On the left: the machines it has to run on, the arm, the OT-2, the microscope, the GPU server. The question mark is whatever has to sit in the middle to make that true. The slide is drawn exactly like the middleman slide two slides on, so the answer drops into the same place. Next: Arkitekt."
      >
        <div className="flex flex-1 items-center">
          <BetterMiddleFigure />
        </div>
      </DeckSlide>

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
        notes="One mental model is enough to start: Arkitekt sits in the middle. On the left, the apps in Kim’s lab: the openUC2 microscope, the robot arm and the OT-2, the analysis on the GPU server, Fiji and napari. Each one offers its steps to the hub as typed actions. On the right, Kim, with her two interfaces: Orkestrator in the browser, and the Arkitekt app on her phone. Same actions on both, and the image she just took shows up on both. She never talks to a machine directly. Nothing moves here; trace it with your words: calls go left, from Kim’s interfaces over their one connection through the hub to whichever app offers the action; results come back right, through the hub, where they are stored with their provenance. Neither side needs to know where the other one runs. The next three slides zoom in: one action through Orkestrator, a whole workflow, then the chat. Section total: about 6 minutes."
      >
        <div className="flex flex-1 items-center">
          <MiddlemanFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The microscope offers what it can do"
        notes="No code yet, just the contract, and just one device: the microscope. On arrival: the openUC2 app offers the functions it provides, with names, inputs and outputs (acquire_image, move_stage, autofocus), and the hub registers them. Then it opens one websocket to the hub and listens. It needs no open port and no known IP. The arm, the OT-2 and the GPU server do exactly the same. Press: the hub moves aside and Orkestrator appears; the form for acquire_image is built from its types, and the objective list comes straight from the microscope’s own state; Kim picks 10x. Press: assign. The task goes to the hub, and the hub sends it down the microscope’s socket. Press: the image goes to the hub first (stored, with provenance), and only then on to Kim’s browser. Those types are what Orkestrator shows and what can be wired together."
      >
        <div className="flex flex-1 items-center">
          <OfferFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="And it knows where your devices are"
        notes="Same three columns as the last slide, for state instead of actions, and this time it is the robot arm, arkirino. An app does not only offer what it can do; it also publishes what state it is in. The arm publishes its pose (where its tool is in 3D space, from its six joints), what its gripper is holding, and whether it is moving. The hub accumulates that: it holds the latest state of every device, the arm’s pose next to the microscope’s stage position and the OT-2’s deck, and it keeps the history, so it also knows where the arm was at 14:08. And because the positions are real coordinates, Orkestrator can place everything in one 3D space: the arm’s tool where it really is, between the OT-2 and the microscope. Nothing to step through."
      >
        <div className="flex flex-1 items-center">
          <DeviceStateFigure />
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
        notes="Same three columns as the last slide, now for a UI. Everything is there on arrival (the blok offered, kept by the hub, rendered in Orkestrator); one press of next: Kim presses Capture. Say it out loud: this is not HTML, so it is safe. On the left, the openUC2 app ships a blok, capture_panel: a tree of fixed components (an image bound to the camera’s frame, the stage position, the objective, a Capture button that calls acquire_image). Nothing in it runs code. It travels to the hub, which keeps it next to the microscope’s actions and knows exactly what it needs. Then on to Orkestrator, which renders it. Kim presses Capture: the press goes back through the hub as a typed acquire_image call, and the new image shows up in the panel. Kim did not build this UI and the hub does not care what is in it; the app brought it. Next: the real thing, on video."
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
        notes="Arkitekt answers Kim, played as the “I made this” meme: the logo proudly holding a stack of its actions like a kid with a drawing. Say it a little too pleased: well… you can actually use all these actions in workflows. One press of next: it shuffles the actions in its hands and lays them out in a circle around itself. Then the next slide: what a workflow is."
        figure={<IMadeTheseFigure />}
      >
        “Well… you can actually use all these actions <Hl>in workflows.</Hl>”
      </StatementSlide>

      <DeckSlide
        title="Just create a workflow visually?"
        notes="Ask the title as a question: so, just create a workflow visually? A workflow is nothing new to the hub, it is just one more action, one that depends on other actions. On arrival the wiring plays, about three seconds: the six actions are dragged out of the palette on the left into the editor, one after the other (the arm’s run_trajectory, the OT-2’s run_protocol, the openUC2’s acquire_image, then stitch, segment and measure), and the edges connect them, with one edge looping back: below target, stain again. Point at the edge chips: an edge only connects if the output type fits the input (image into image, labels into labels). This is Kim’s loop, for real: six apps on five machines in two rooms. We do not run it here; the wiring is the point. Keypress: the big red X. “That is so 2023.” And under it: and honestly, it doesn’t simplify anything. Nobody wants to drag boxes any more; next slide."
      >
        <div className="flex flex-1 items-center">
          <WorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Or just ask for it"
        notes="Same workflow as the editor, but generated. Everything is on the slide on arrival, no steps: the ask, the answer, its code, and the run. The point is what the AI writes against: not sockets, IP addresses and retry loops, but typed calls on declared protocols: the arm’s run_trajectory, the OT-2’s run_protocol, the openUC2’s acquire_image, stitch, segment, measure. The hub checks the declarations when the app starts, assigns each call to the app that offers it, and records every one of them. About twenty lines, all of them about the experiment: for each stain, stain until it takes. This is the same AI that wrote Kim’s 10,000 lines of plumbing; the difference is what it had to build on."
      >
        <div className="flex flex-1 items-center">
          <AiWorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="And the UI? Remix the bloks"
        notes="Same move as the workflow, for the interface. Everything is on the slide on arrival, no steps: the ask, the answer, the code and the tiles. Kim wants one screen to watch the run. Claude doesn’t generate a UI from scratch: it writes a blok that only nests other bloks, the ones the apps brought with them, like the microscope’s blok two slides ago. Point at the colours: each Blok line becomes one tile. The openUC2’s live view with its capture button, the run’s progress from stainstorm, the OT-2’s deck, the arm’s pose. Every button on that page is still the app’s own typed action, with its own ranges, so nothing new has to be trusted. The syntax is illustrative."
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

      <Slide notes="Meme beat, right after the demos: just the sceptical Reviewer 2, peering over his glasses. Cool little UI plays, but how does this solve Kim’s problem? Nothing to step through. It is the right question, and the rest of the talk answers it, one horseman at a time, starting on the next slide.">
        <div className="flex h-[640px] w-full items-center justify-center">
          <DistributedMemeFigure />
        </div>
      </Slide>

      <Slide notes="The first horseman rides in: The Network, wearing Reviewer 2’s face. He concedes the first point and moves the goalposts: “Okay, I give you that: not five IP addresses, just the hub. But that’s not the only problem. How are you planning to handle firewalls, eduroam and all the other networks?” Under it is the picture he is conceding: Kim’s lab as a tangle of addresses, and the same machines round one hub. Then press: the Arkitekt logo turns up with “Well, we thought about that.” The next slides are the explanation; the horseman is not on them.">
        <HorsemanDuelFigure night="communication" />
      </Slide>

      <DeckSlide
        title="No IPs, just coordination"
        notes="The first horseman, The Network, from night 1. Three presses of next (strike the IP, ask and answer, the direct line). First the IP address Kim used to paste into every script: struck out, nobody types one any more, and nobody opens a port. Say the line at the bottom: apps never write an IP address, the framework handles that completely. Instead the app asks a coordination server (the hub registered there too) where its hub is, and gets back a route and keys. That is the only thing the coordination server does: it steps aside, and the app talks to the Arkitekt server directly, over a WireGuard tunnel, wherever either of them is."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame>
            <CoordinationWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Connect from anywhere, encrypted"
        notes="Still the first horseman, one more blow: “connect to the hub” is not only a lab problem. The hub sits inside the lab, behind the lab’s one firewall, next to the openUC2 PC and the ESP32. Outside it are three other networks, each drawn as its own boundary. A cluster: the GPU node is a SLURM job on the university HPC; it starts, asks the coordinator, and offers segment_image like any other app. A partner institute: a collaborator runs napari on another campus. Mobile: Kim’s laptop on her phone’s hotspot on the train. Point at the wall: all three reach the hub straight through the lab’s firewall, and nobody opened it. Every app dials out and they meet over WireGuard on the organisation’s mesh, so we get round the firewall without a port, a public IP, a VPN or a ticket with IT, and the coordinator never sees the data. The red arrow is anything else trying to get in: still blocked. The odd one out is the ESP32 on the bench: arkitekt-esp32 turns it into an agent that offers actions and publishes live state, provisioned over Bluetooth with the Pokket app, and it talks to the hub over a TLS WebSocket, not WireGuard. Be honest if asked: the ESP32 client is a prototype and does not verify certificates yet."
      >
        <div className="flex flex-1 items-center">
          <AnywhereFigure />
        </div>
      </DeckSlide>

      <Slide notes="Straight after the networks, the second horseman rides up: The Silent Crash (error handling and observability), wearing Reviewer 2’s face again. His line: “Distributed systems are still error-prone. You cannot change physics. You should have read some more computer science books…” Press: this time Arkitekt does not argue. “Yes, you are right. But we can let users observe, debug and recover.” Say it plainly: failures always happen, and Arkitekt is no silver bullet. Things still fail: a stage hangs, a bottle runs dry, a laptop lid gets closed, a GPU job gets killed. What changes is what happens next: you can see what happened, and react to it, so the run can be saved. The next slides show how, starting with the log.">
        <HorsemanDuelFigure night="threads" />
      </Slide>

      <StatementSlide
        notes="The one to remember from this part: observe. Arkitekt puts everything that happens on a log, so we know exactly what happened, and when. Point at the two windows, the robot arm on the left and the microscope popping up on the bottom right: two devices, two machines, and each shows the timestamp of the line it is on. Every device logs on one clock, universal timestamps, so the order across machines is real. On the right the log of run 41 writes itself as the slide comes up, line by line, about seven seconds, and it goes on and on: every call (run_protocol, move_stage, acquire_image) with each change of its status, every state update the apps publish (the stage position, the exposure, the pipette), and every log line, from every machine, in one place, in order, to the millisecond. This is the measurement Kim never had, instead of a print statement on each of five computers. In its corner is the robot arm, in 3D, and it moves exactly when the log says so: to the microscope when the run_trajectory to_scope line appears, back towards the OT-2 on the last line. The log and the lab are the same thing. You can’t react to what you can’t see; next slide is the reacting. Because everything is on the log, three things become possible, one slide each: observe a run, inform a person when the code cannot go on, and resume a run that failed."
        figure={<LongLogFigure />}
      >
        Arkitekt puts everything that happens on a log, <Hl>so we know exactly what happened, when.</Hl>
      </StatementSlide>

      <DeckSlide
        title="Observe: replay the run"
        notes="First of the three: observe. Video slot: drop the recording in as public/presentations/smart-microscopy/replay-demo.mp4 and it plays here; until then the slot says what goes in it. Show a replay of our workflow in Orkestrator: scrub back through run 41 after the fact and watch every step again as it happened, the calls lighting up in order, the states and the images arriving. Nobody had to be there, and nobody had to add logging: it is the same log as on the last slide, played back."
      >
        <div className="flex flex-1 items-center justify-center">
          <Clip
            label="Video · replay of the workflow"
            file="replay-demo.mp4"
            length="30 s"
            shows="Run 41 of process_slides, replayed in Orkestrator after the fact: every call, state update and image, in the order it happened."
          />
        </div>
      </DeckSlide>

      <DeckSlide
        title="Inform: when code can’t fix it, ask a person"
        notes="Second of the three: inform. Four presses of next. Not every error is a crash: sometimes the stain just won’t take. Three rounds of CD20 and the uptake is still at 52 %: no code can fix an old reagent bottle. Kim’s workflow checks for that and calls task.hold with a message. Press: the two lines light up and the hold travels over to the Arkitekt server: the run waits there, and the server has control now. Press: the server asks Kim, and it pops up on her phone (swap the CD20 bottle, then resume). Press: she swaps the bottle. Press: she taps resume, and the code carries on after the hold: the next stain, Ki-67. The hold is recorded, so if the workflow is ever resumed after a crash, it won’t stop there again. And say this out loud: next to resume there is always abort. You can abort any task, at any time, immediately; the server has the run, so nothing has to finish first."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame>
            <HoldWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Resume: the workflow picks up where it failed"
        notes="Third of the three: resume. Three presses of next. Left, Kim’s laptop: process_slides has been running for ten hours, slide 14 of 20. Right, the Arkitekt server, with every call of those ten hours on its log. Press: Reviewer 2 walks past. “Someone left their laptop open. I’ll just close that.” The lid goes down, and ten hours in, the workflow’s process is dead. Let that hurt for a second. Note what is still alive: the server never stopped, and neither did its log. Press: Kim opens the laptop again and opts in to a replay. Read the caveat out, it matters: replay is opt-in, and it needs attention. Nothing reruns by itself, a robot does not start moving again just because a machine came back. And it only works if your workflow is deterministic: replay hands the recorded answers back in the order the code asks for them, so the code has to ask the same questions in the same order. A random choice or a clock read in the workflow itself breaks that. Then the server streams the log back to a new process, call by call, 1 482 of them: every call that already finished returns its recorded answer instead of running again, so no slide is stained twice, and in a few seconds the workflow is exactly where it was. Press: and the next call, the arm to the scope, runs for real. Ten hours, not lost. Nothing ran twice. The horseman is still standing: next slide."
      >
        <div className="flex flex-1 items-center">
          <ResumeFigure />
        </div>
      </DeckSlide>

      <Slide notes="The third horseman: The Folder (data management), Reviewer 2 once more: “lol, on your server you still just have folders. You don’t solve that. And how do you plan to stream big images over the network?” Press: Arkitekt corrects him: “Well, actually, we don’t. Everything we store is in a relational database.” Then the explanation.">
        <HorsemanDuelFigure night="data" />
      </Slide>

      <DeckSlide
        title="Everything is stored in a relational database"
        notes="The answer to the horseman’s “you still just have folders”, and a bridge back from the error handling: the log on the earlier slides is not a text file either. Two presses of next. On the left an app, the microscope’s: it has just run acquire_image and holds the image. And Arkitekt already knows three things about it: what made it (acquire_image), who caused it (Kim, through her process_slides workflow: the app did the work, but she is the one who asked), and where it was taken (this stage position on the openUC2). Press: the app uploads the image, together with its what, who and where, and it lands as a new row in the images table. It is a plain Postgres database on your hub, nothing exotic. Press: and because it is a table, every column is a filter: what = acquire_image, where = openuc2, stain = CD20, and two of five images are left. So you can ask it questions instead of grepping folders. Keep it brief: forty seconds."
      >
        <div className="flex flex-1 items-center">
          <RecordTableFigure />
        </div>
      </DeckSlide>

      <StatementSlide
        figure={<WhereWhatFigure />}
        sub="So we need relations in our data, and these relations are spatial."
        notes="A beat between the table and the coordinate system. The table on the last slide is fine for a database, but it is not how anyone looks at a sample. Say it plainly: we don’t look at a table of folders, we want to look at samples in a spatial context. On the right is what a smart acquisition actually leaves behind: tiles of different sizes, placed where something was worth a look, a 40x tile inside a 10x one. And of every one of them we ask two questions. Where? That is spatial data: a place and a size on the slide. And what? That is analysis: the patchy stain at 41 %, the three mitoses, the 1 812 cells. The two only mean something together. So the data needs relations, and the relations that matter here are spatial ones. Next slide: how we store that."
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
        notes="Introduce it by its neighbours first. The idea is not ours alone: SpatialData and OME-NGFF both describe images by coordinate systems and the transformations between them, and what we do is similar to both and compatible with both. The difference is where it lives: not in the metadata of a file, but as relations in the database, next to who made what and when. Then the example. The third horseman, The Folder. Five presses of next, and the example is Kim’s own workflow. We take the very mathematical view: an image is pixels plus a place in a coordinate system, and everything else is related to it. On the right a tree grows, starting from the original image, the slide on the stage, and every node names the workflow call that made it. Press: the tiling. Three tiles land on the stage, each placed by an affine transform (pixel size and stage position): scope.acquire_image. Press: stitching. The tiles become one mosaic: stitcher.stitch_images. Press: segmentation. The labels sit on the same coordinates as the mosaic: stardist.segment_image. Press: the table. One row per cell, the stain measured in each: analyzer.calculate_stain_percentage. Four lines of our workflow, four nodes in the tree. Press: and of course nobody does this by hand. With a little metadata, Arkitekt creates this tree for you: a lineage graph."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame>
            <DataWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      {FULL_LENGTH ? (
      <DeckSlide
        title="A lineage graph, on one coordinate system"
        lead="Arkitekt builds it from a little metadata, so you can relate the end of the analysis back to its start."
        notes="Stay on the third horseman for one more slide. Nobody draws this graph by hand: Arkitekt creates it from the little metadata every call already carries, and it lets you relate things from the very end of the analysis all the way back to the start: from a number to the labels, the mosaic, the tiles and the slide. Six presses of next, one per call. Left, the lineage graph, read in a zigzag: acquire_image made the tiles; stitch_images made the mosaic; segmentation (on the GPU server) made the labels; the analyzer measured the uptake, 41 %, below target; so run_protocol stained CD20 again, and round two measured 86 %. Right, the same items on the stage, each one placed the moment it appears in the graph: the tiles, the mosaic, the labels on it, the uptake on its cells, and round two on top. Two questions Kim could never answer from a folder, now one click each: where did this number come from, and why was this slide stained twice?"
      >
        <div className="flex flex-1 items-center">
          <LineageFigure />
        </div>
      </DeckSlide>
      ) : null}

      <DeckSlide
        title="What that looks like"
        notes="Live demo slot: drop the recording in as public/presentations/smart-microscopy/live-arkitekt.mp4 and it plays here; until then the slot says what goes in it. Straight after the coordinate system slide, so show the real thing: a run of the workflow, then its lineage graph and the images on the stage in Orkestrator."
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
        title="There is more"
        notes="After the demo, widen it in one slide. Everything so far was brightfield tiles, but it does not only work with images. On the right, two recordings (drop them in as public/presentations/smart-microscopy/flim-data.mp4 and calcium-traces.mp4; until then the slots say what goes in them). Top: a FLIM dataset in mikro with its phasor plot; select a cloud in the phasor and the image is coloured by lifetime. Bottom: calcium imaging as a time series, the ΔF/F traces of a few cells next to the movie. On the left, the rest of the list: tables of per-cell measurements, volumes, spectral stacks, the meshes that come out of segmentation. Each is a typed dataset, not a folder of files, and each sits in the same coordinate systems, with the same lineage, as Kim’s tiles."
      >
        <div className="flex flex-1 items-center gap-10">
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-[34px] font-bold leading-[1.12] tracking-[-0.025em]">
              It doesn’t only work with images. <Hl>It works with what comes out of them, too.</Hl>
            </p>
            <ul className="flex flex-col text-[21px] leading-snug">
              {(
                [
                  ['Lifetimes', 'FLIM, with its phasor'],
                  ['Time series', 'calcium traces, cell by cell'],
                  ['Tables', 'one row per cell, per measurement'],
                  ['Volumes and spectra', 'z-stacks, spectral stacks'],
                  ['Meshes', 'what segmentation leaves behind'],
                ] as const
              ).map(([kind, what]) => (
                <li key={kind} className="flex items-baseline gap-3 border-t border-fd-border py-2 first:border-t-0">
                  <span className="w-[210px] shrink-0 font-semibold">{kind}</span>
                  <span className="text-fd-muted-foreground">{what}</span>
                </li>
              ))}
            </ul>
            <p className="text-[18px] leading-snug text-fd-muted-foreground">Same coordinate systems, same lineage, same database.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-4">
            <Clip label="Video · FLIM" file="flim-data.mp4" shows="FLIM, with its phasor" height={214} />
            <Clip label="Video · calcium" file="calcium-traces.mp4" shows="Calcium traces, cell by cell" height={214} />
          </div>
        </div>
      </DeckSlide>

      {FULL_LENGTH ? (
      <DeckSlide
        title="Not only image data"
        notes="After the demo, widen it: everything so far was brightfield tiles, but the same data management holds for what other labs actually record. Time series from calcium imaging, FLIM lifetimes with their phasor, spectral stacks, multichannel, volumes, the tables of per-cell measurements and the meshes that come out of segmentation. Each is a typed dataset, not a folder of files, and each knows where it sits and what made it. Two examples next: FLIM, then calcium imaging."
      >
        <div className="flex flex-1 items-center">
          <DataKindsFigure />
        </div>
      </DeckSlide>
      ) : null}

      {FULL_LENGTH ? (
      <DeckSlide
        title="FLIM, with its phasor"
        notes="Screenshot from mikro: hMSC control, a FLIM dataset, opened like any other dataset. On the right, the phasor plot; select a cloud in it and the image is coloured by lifetime. The dataset lives on the same coordinate systems, with the same lineage, as Kim’s tiles."
      >
        <div className="flex flex-1 items-center justify-center">
          <Shot src="/clips/flim-data.jpg" alt="hMSC control, a FLIM dataset in mikro, with its phasor plot." />
        </div>
      </DeckSlide>
      ) : null}

      {FULL_LENGTH ? (
      <DeckSlide
        title="Calcium imaging, as a time series"
        notes="Screenshot slot: drop the screenshot in as public/presentations/smart-microscopy/calcium-imaging.png and it shows here; until then the slot says what goes in it. Show a calcium imaging time series in mikro, ideally with the ΔF/F traces of a few cells next to the movie."
      >
        <div className="flex flex-1 items-center justify-center">
          <Shot src="/presentations/smart-microscopy/calcium-imaging.png" alt="A calcium imaging time series in mikro, with the traces per cell." />
        </div>
      </DeckSlide>
      ) : null}

      <DeckSlide
        title="Sharing is caring"
        notes="Close the data part by giving it away. The clip on the left autoplays: Kim presses share on slides / HE-07 and picks the other lab. Nothing is exported or uploaded. Press: the other lab accepts. A WireGuard connection opens between the two hubs, the same kind of tunnel as on the connection slide, but scoped: it reaches HE-07, every round of it, read-only, and nothing else. HE-08 and her drafts aren’t even visible. The same goes for the FLIM and calcium datasets: share a dataset, not a folder."
      >
        <div className="flex flex-1 items-center">
          <ShareDataFigure src={`${MEDIA}/share-data.mp4`} />
        </div>
      </DeckSlide>

      <Slide notes="The last horseman: Works On My Machine (reproducibility). Reviewer 2’s favourite: “You still need to run the code somewhere. How should we reproduce these environments? And who packages it into a usable desktop application? Mac? Windows? HTML?” The second half is the vibe-coded GUI from night 4: nobody ships a Streamlit script to a pathologist as an app. Press: Arkitekt shrugs, “It’s not that complicated.” The next slide shows why: publishing an app.">
        <HorsemanDuelFigure night="repro" />
      </Slide>

      <DeckSlide
        title="Publishing Arkitekt apps is easy"
        notes="Straight after “It’s not that complicated”: this is how. Nothing to step through. Say it plainly: we use Docker for that. The app is bundled as one Docker image, and the Arkitekt plugin engine installs it on any Arkitekt hub with one click. Kim’s script is a folder: app.py with her process_slides workflow, and pyproject.toml pinning stardist. arkitekt plugin build bundles it as an app: a container image, the declared actions and what it needs from other apps, CPU and CUDA flavours. arkitekt plugin publish puts the release on GitHub. From there it is installable: another lab’s hub finds stainstorm, presses install, and gets the same workflow, picking the CUDA flavour because it has a GPU. It runs against their own arm, liquid handler and microscope, as long as those offer the same actions. No README with twelve setup steps. That’s all four."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame>
            <ShareCodeFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Reproducibility is remixing"
        notes="The point of sharing code and data, said plainly: reproducibility in smart microscopy is not one more lab running Kim’s exact script on Kim’s exact microscope. Nobody has her microscope. One press of next per beat: swap, the three installs, remix, build, then the closing line. Their scope is a Nikon, not an openUC2, but it offers acquire_image on the same ScopeLike protocol, so it slots in. Segmentation, the analysis and the progress blok they install as they are, with the versions Kim ran. And her workflow they remix: her steps, their scope, one new step of their own, spheroid classification. Last row, the interface: they don’t have to live with Kim’s UI either. Writing their own blok is a few lines of BSX, here a review panel for their spheroids, and because it is declared and typed like any blok, their own AI can hand it out in the chat, exactly like the capture blok earlier. What gets reproduced is the parts, typed and versioned, and they compose into new experiments; that is how the method spreads."
      >
        <div className="flex flex-1 items-center">
          <RemixReproFigure />
        </div>
      </DeckSlide>

      {/* “just tell Claude to run it”: two problems ------------------------- */}

      <Slide notes="Six keypresses. On arrival it is still Reviewer 2 on the fourth horse, Works On My Machine, and he has run out: “Okay. All good.” Press: Arkitekt, gracious: “All good points. I appreciate the questions.” Let the room think it is over. Press: Reviewer 2 rides off, and another reviewer steps in. Reviewer III, on a perfectly normal horse. Press: Arkitekt, wary: “Yeees?” Press: crazy horse mode. The normal horse MUTATES, glitching, changing colour, a flash, and comes out as the fifth horseman nobody ordered: AI Hype, shouting “LLMs will make all of that obsolete! WHERE IS THE CHAT INTERFACE?” Press: this time Arkitekt does not give in. “Oh my god. I don’t agree, because: a) AI shouldn’t just go rogue.” Press: “b) I don’t think people like chat that much.” Those are the two things the next slides work through. First, why “just let the AI do it” is a real problem in a lab.">
        <HorsemanDuelFigure night="ai" />
      </Slide>

      <DeckSlide
        title="The problem with using LLMs in science"
        notes="Take the hype seriously for one slide, and say where it actually hurts in a lab. It is not only the two things we have already seen: reproducibility (the run nobody can repeat) and dead UIs (the vibe-coded GUI that ran once, the graveyard from the interlude). Those are real, but every field has them. What is special about science is on the right, twice. We deal with sensitive hardware: a robot arm, a laser, a microscope that costs more than a house; one wrong call moves an arm into an objective or burns a sample. And we deal with sensitive data: patient tissue, clinical records, results nobody has published yet. Then the line, said plainly and without drama: this is something we should not give Anthropic access to. Not them, and not anyone else’s cloud either; it is not about one company. Next slide: what we do instead."
      >
        <div className="flex flex-1 flex-col justify-center gap-7">
          <p className="flex flex-wrap items-baseline gap-x-3 text-[26px] leading-snug text-fd-muted-foreground">
            It is not only
            <span className="font-semibold text-fd-foreground">reproducibility</span>
            and
            <span className="font-semibold text-fd-foreground">dead UIs</span>.
          </p>
          <div className="grid grid-cols-2 gap-10">
            {(
              [
                [Microscope, 'Sensitive hardware', 'A robot arm, a laser, an instrument that took a year to get. One wrong call moves, burns or breaks something.'],
                [Brain, 'Sensitive data', 'Patient tissue, clinical records, results nobody has published yet.'],
              ] as const
            ).map(([Icon, what, why], i) => (
              <div key={what} className={cn('flex gap-5', i > 0 && 'border-l-2 border-fd-border pl-10')}>
                <Icon className="mt-1 size-[54px] shrink-0 text-fd-primary" strokeWidth={1.6} />
                <div className="flex flex-col gap-2">
                  <span className="text-[38px] font-bold leading-[1.05] tracking-[-0.025em]">{what}</span>
                  <span className="text-[20px] leading-snug text-fd-muted-foreground">{why}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[34px] font-bold leading-tight tracking-[-0.02em]">
            That is something we <span className="text-[#d97706]">should not</span> give Anthropic access to.
          </p>
        </div>
      </DeckSlide>

      {FULL_LENGTH ? (
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
      ) : null}

      <DeckSlide
        title="Arkitekt as the barrier, with local LLMs to chat with"
        notes="What we do instead, in one picture, three options left to right. Three presses of next. First, what we don’t want, and it is Kim’s scenario from the first half of the talk: the agent talks to every device directly, with ssh, http, whatever script works. Nothing limits what it may do, and nothing records what it did. Press: the second option, and this is the one people think is the answer. Put Arkitekt in between, and let Claude drive Arkitekt on its own. Now there are rights and a log. But look at the log: it says “claude”. Who started it, who is responsible for that stain, who do you ask on Monday? Nobody knows. We don’t want that either. Press: what we want. A person talks through Arkitekt. Kim is logged in, she chats, and the agent is just one more app on the far side of Arkitekt, next to the arm, the OT-2 and the microscope. Behind it is either Claude or a local LLM on your own GPU server; that is a choice per lab, and for sensitive data it is the local one. Either way the agent works with her rights and on her behalf. Every call is in the log under her name, with the note that an agent made it. Rights, a record, and a name: we know who did it. Press: the reason in two words, control and provenance. And the consequence, for the fifth horseman, AI Hype: so yes, Arkitekt has a chat interface, and with a local LLM nothing leaves the building. What comes from that is the next slide."
      >
        <div className="flex flex-1 items-center">
          <AgentBarrierFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        title="The agent asks for rights, like any app"
        notes="What comes from the last slide: this is the chat interface. Four presses of next. It is a chat window in Arkitekt: Kim is signed in, top right, and the model behind the agent is a setting, top left, here a local LLM. Kim asks it to run the four-stain panel on HE-07. Press: the agent can’t touch the lab until it asks, and it asks in the conversation: call process_slides on stainstorm, read slides / HE-07. Not moving the arm by hand, not deleting data. Press: Kim approves those scopes, until six, and the call shows up as a line in the chat. Press: then it needs the GPU server for segmentation, which it wasn’t granted, so it asks again. Press: Kim allows it once, and it finishes. Point at the pane on the right: the record shows both calls, each under Kim’s name, with an agent, and with what allowed it. Control and provenance, in a chat."
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
        notes="Three presses of next. Kim asks to tune the exposure herself. Claude doesn’t write a UI and doesn’t ask her to type numbers: it hands over the capture blok that ships with the openuc2 app. She turns the exposure to 35 ms and captures; the preview brightens, and that press is a recorded call like any other. Then she types 900: outside the action’s range, so the blok says no before anything reaches the laser."
      >
        <div className="flex flex-1 items-center">
          <BlokChatFigure />
        </div>
      </DeckSlide>

      {/* the instrument itself: openUC2's cubes, Optikit, newswitch. Left out of
          this talk (set WITH_OPTIKIT to bring the eight slides back). */}
      {WITH_OPTIKIT ? (
        <>

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
        notes="openUC2’s main idea in one line: modularity is king. Instead of buying one closed microscope, you get cubes, each holding one thing (an LED, a sample holder, an objective, a lens, a mirror, a camera), and you snap them onto a baseplate in whatever order the experiment needs. It arrives assembled: a real fluorescence microscope as Optikit exports it, in the order the light goes through it: the fiber holder and the blue laser, a mirror, the dichroic, the objective, a mirror up to the sample stage, the camera, and the controller. The cubes are black, as they look on the bench; press next and the housings fade away to show the optics inside: the mirrors, the amber dichroic, the green emission filter, the lenses. It turns slowly: swap any cube and it is a different microscope. Cheap, open, and rebuilt over lunch."
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
        notes="The answer to the last slide: describe the microscope instead of assuming it. Optikit is the openUC2 platform for designing an instrument, think KiCad for optics. Every part, an LED, an objective, a tube lens, a splitter, a camera, is authored once in a library with its real geometry, and reused in every design. Place them on the bench, and (one press of next) Optikit traces the light: one path per camera, here A straight through and B folded by the splitter. Out of the trace come the facts nobody should type by hand: µm per pixel (the 3.45 µm pitch over 10×, 0.345), the light path per detector, and a priced parts list to order from. Credit the Optikit team by name here."
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
        notes="Back to coordinate systems, one level down. Two presses of next: camera A lands, then camera B. Each detector is a coordinate system of its own: its sensor, in pixels. Camera B sits behind the splitter, so it sees the sample mirrored. Because newswitch knows the optics from the trace, it knows how each sensor maps onto the stage (0.345 µm per pixel, and a mirror for B), and the stage onto the sample. So both images land on the same cells without anyone registering them by hand. It is the same coordinate graph the hub stores the data in, which is why the images from Kim’s run were already placed."
      >
        <div className="flex flex-1 items-center">
          <SensorSpacesFigure />
        </div>
      </DeckSlide>

        </>
      ) : null}

      {/* bringing it home (about 2 min) ------------------------------------- */}

      <DeckSlide
        title="Five horsemen, five answers"
        notes="The recap, thirty seconds, top to bottom. Do not explain anything again; just name each horseman and the one line that answered him. The Network: no IP addresses, every app finds the hub. The Silent Crash: one log of everything, so you can observe, inform and resume. The Folder: a database that keeps the spatial relations. Works On My Machine: apps you publish once and remix. And AI Hype: agents, yes, but behind Arkitekt, for control and provenance. None of them is gone; they just don’t stop the run any more."
      >
        <div className="flex flex-1 flex-col justify-center">
          {CLOSING.map(({ night, answer }) => (
            <div key={night} className="flex items-center gap-6 border-t border-fd-border py-2 first:border-t-0">
              <HorsemanArt night={night} u={`close-${night}`} width={104} face="reviewer" className="shrink-0" />
              <span className="flex w-[330px] shrink-0 flex-col leading-tight">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">{HORSEMEN[night].ordinal}</span>
                <span className="text-[26px] font-bold tracking-[-0.02em]">{HORSEMEN[night].name}</span>
              </span>
              <span className="text-[24px] font-semibold leading-snug text-fd-primary">{answer}</span>
            </div>
          ))}
        </div>
      </DeckSlide>

      <StatementSlide
        figure={<KimFigure size={300} mood="happy" />}
        sub={
          <>
            <span className="block">Workflows call actions, not scripts. That’s why they survive the author leaving.</span>
            <span className="mt-5 block text-[20px] not-italic">Thank you. Everything you saw is open source: arkitekt.live</span>
          </>
        }
        notes="Bring it home with Kim, on the last slide. Remember what she asked for from the floor: “I want my Fiji script back.” One file, one machine, and it ran every time. That is what she has again: process_slides is one workflow, a page of Python, and it runs every time. Pause, look at the crossed-out word, and correct yourself: most of the time. Failures still happen; the difference is that she can see them and recover. And it does that across five machines in two rooms, with a robot doing the running, on open source hardware and software. Then the last line, said slowly: workflows call actions, not scripts, and that is why they survive the author leaving. Kim’s nights happened because her scripts held the whole lab together, and scripts leave with their author. A workflow that calls actions does not care who wrote it, which machine it runs on, or whether its process died last night. Then: thank you, and questions. Everything shown is open source, at arkitekt.live."
      >
        Kim wanted her Fiji script back.{' '}
        <Hl>
          She has it again: one workflow, and it runs <s className="opacity-60 decoration-[3px]">every</s> most of the time.
        </Hl>
      </StatementSlide>
    </DeckFrame>
  );
}
