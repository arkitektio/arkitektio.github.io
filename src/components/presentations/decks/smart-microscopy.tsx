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
import { Check, Square } from 'lucide-react';
import { Fragment, Slide } from '@revealjs/react';
import { cn } from '@/lib/cn';
import { DeckFrame } from '../deck-frame';
import { Caption, DeckSlide, Eyebrow, Panel } from '../slide';
import { AnimStyles, delay } from './smart-microscopy-anim';
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
  KimLoopFigure,
  KimSays,
  MacroChainFigure,
  NightmareFigure,
  OverworkedKimFigure,
  PaperCard,
  ResultsChart,
  SerialSectionsFigure,
  YearsFigure,
} from './smart-microscopy-figures';
import { DreamLab3D } from './smart-microscopy-dream-3d';
import { OptikitCubes3D, landsAt } from './smart-microscopy-cubes-3d';

/** The parts of the 3D build, in the order they snap in (`CUBE_ORDER`). */
const CUBE_PARTS = ['fiber holder', 'blue laser', 'mirror', 'dichroic', 'objective', 'mirror', 'sample stage', 'camera', 'controller'];
import {
  BloksFigure,
  CoordsFigure,
  HubFigure,
  MiddlemanFigure,
  OfferFigure,
  WorkflowFigure,
  AiWorkflowFigure,
  DifferentFigure,
  MeshFigure,
  OptikitFigure,
  OptikitSteps,
  ReplayFigure,
  ShareFigure,
} from './smart-microscopy-arkitekt-figures';
import { AgentRightsFigure, BlokChatFigure, PitchFigure } from './smart-microscopy-llm-figures';
import { OptikitBenchFigure, QuestionScopesFigure, QuirksFigure, SensorSpacesFigure, SimulateFigure } from './smart-microscopy-optics-figures';

const MEDIA = '/presentations/smart-microscopy';

/* --- the debt list --------------------------------------------------------- */

const DEBT = [
  'a billion files',
  'a weird metadata.json',
  'no pixel size, no info',
  'works on one machine',
  'nobody knows what the microscope decided',
  'can’t hand it to anyone',
  'its own UI',
] as const;

/** Indices into `DEBT`, in the order the talk pays them off. */
const MESH = [3];
const REPLAY = [4];
const COORDS = [0, 1, 2];
const SHARE = [5];
const BLOKS = [6];

/** The debt list. Same rows in the same places on every slide it appears on,
    so only the ticks move: `paid` rows are struck through, `now` rows glow and
    carry the Arkitekt answer that pays them. Animated per visit: `build` brings
    the rows in one by one, `justPaid` rows get their tick and strike drawn. */
function DebtList({
  paid = [],
  now = [],
  justPaid = [],
  answer,
  build = false,
}: {
  paid?: number[];
  now?: number[];
  justPaid?: number[];
  answer?: string;
  build?: boolean;
}) {
  return (
    <ul className="flex list-none flex-col gap-1.5">
      {DEBT.map((line, i) => {
        const isPaid = paid.includes(i);
        const isNow = now.includes(i);
        const fresh = justPaid.indexOf(i);
        const tickAt = fresh >= 0 ? 0.3 + fresh * 0.3 : -1;
        return (
          <li
            key={line}
            className={cn(
              'flex items-center gap-4 rounded-xl border px-4 py-2',
              isNow ? 'sm-glow border-fd-primary/50 bg-fd-primary/10' : 'border-transparent',
              build && 'sm-in',
            )}
            style={build ? delay(0.2 + i * 0.22) : delay(0.6)}
          >
            {isPaid ? (
              <span className={cn('flex shrink-0', tickAt >= 0 && 'sm-pop')} style={delay(tickAt)}>
                <Check className="size-6 text-fd-primary" strokeWidth={2.5} aria-hidden />
              </span>
            ) : (
              <Square
                className={cn('size-6 shrink-0', isNow ? 'text-fd-primary' : 'text-fd-muted-foreground/60')}
                strokeWidth={2}
                aria-hidden
              />
            )}
            <span className={cn('relative flex-1 font-mono text-[22px]', isPaid && 'text-fd-muted-foreground')}>
              <span className={cn(isPaid && 'sr-only')}>{isPaid ? `${line} (paid)` : line}</span>
              {isPaid ? (
                <span aria-hidden className="relative inline-block">
                  {line}
                  <span
                    className={cn('absolute inset-x-0 top-1/2 h-[2px] bg-current', tickAt >= 0 && 'sm-grow')}
                    style={delay(tickAt + 0.1)}
                  />
                </span>
              ) : null}
            </span>
            {isPaid ? (
              <span
                className={cn('font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-fd-primary', tickAt >= 0 && 'sm-in')}
                style={delay(tickAt + 0.3)}
              >
                paid
              </span>
            ) : null}
            {isNow && answer ? (
              <span className="sm-in font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-fd-primary" style={delay(0.7)}>
                → {answer}
              </span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

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
  eyebrow,
  children,
  notes,
  figure,
  sub,
}: {
  eyebrow?: string;
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
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
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

/** A labelled key point: the deck's card row. */
function Point({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Panel title={title}>
      <span className="text-[20px] leading-snug">{children}</span>
    </Panel>
  );
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

      <Slide notes="Kim is a persona, not a real person: say so. She is a pathologist, and she wants several antibodies on the same tumor: CD3, CD20, Ki-67, PanCK. The classic way is one antibody per section: cut the block into serial sections and stain each one with its own antibody. Let it play: the cuts go through the block, each section gets its antibody, and the tumor shrinks from section to section. The fourth cut falls outside the tumor, and that is the PanCK section, the one that was meant to find it. Even where the tumor is there, every section has different cells, so you can never ask what one cell carries. Next slide is her way out.">
        <div className="flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <h2 className="text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">Meet Kim</h2>
              <span className="text-[22px] leading-snug text-fd-muted-foreground">
                pathologist · one antibody per section
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 pt-10">
                <KimFigure size={150} mood="worried" />
              </div>
              <div className="relative flex-1">
                {/* thought trail: small to large, rising from her head */}
                <span className="sm-pop absolute left-[-6px] top-[86px] size-3 rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.8)} />
                <span className="sm-pop absolute left-[8px] top-[58px] size-5 rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.95)} />
                <div
                  className="sm-pop ml-8 rounded-[40px] border-2 border-fd-border bg-fd-card px-8 py-6 text-[28px] font-bold leading-[1.22] tracking-[-0.015em] shadow-sm"
                  style={delay(1.1)}
                >
                  Four antibodies, four sections…{' '}
                  <span className="sm-in inline" style={delay(5.6)}>
                    <Hl>and on the last one, the tumor is gone.</Hl>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SerialSectionsFigure />
        </div>
      </Slide>

      <Slide notes="Then Kim hears about chromogenic cycling, at a talk. The idea fits on one slide: keep the tissue on one slide and cycle. Stain with an antibody and its chromogen, image the slide, wash until the colour is completely gone, then the next antibody. Let the dot go round once per antibody: CD3, CD20, Ki-67, PanCK, each marking its own cells, one image per round. At the end the four images overlay, and every marker sits on the same cells. That is exactly what the four serial sections on the last slide could not give her. Next slide: she tries it, by hand.">
        <div className="flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <Eyebrow>Meet Kim</Eyebrow>
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
        eyebrow="Meet Kim"
        notes="The only problem. On the last slide every antibody had its own colour; in practice nearly every chromogen is brown, DAB. So after round 2, a brown cell is either the new antibody, or the old one that never washed off. Round 1 marks the CD3 cells, the wash leaves a few of them faintly brown, and in round 2 those leftovers look exactly like CD20. The only way to know is to look after every wash, and wash again until it is really gone. That is what she does on the next slide, by hand."
        sub="Everything is brown. How do I know the stain from the last round is gone?"
        figure={<AllBrownFigure />}
      >
        The only problem?
      </StatementSlide>

      <Slide notes="Her way out: Kim tries chromogenic cycling out, by hand. Keep every antibody on the same slide: stain, look, wash the chromogen off, stain the next one. The tumor can’t wander off, and every cell carries the whole panel. Let the loop play once and narrate the four trips. One: stain 1 goes on, she carries the slide to the microscope and takes image 1. Two: wash 1, back to the microscope, and the stain is not completely gone; she writes that down: “Still too much. Let’s wash again.” Three: wash 2, and now it is completely gone: “It’s done, let’s go!” Four: stain 2, a different antibody from its own bottle, in its own colour, on other cells of the same tissue; she takes image 2, and on the computer the two images are overlaid. That overlay is the multi-staining: two antibodies, one slide, the same cells. What she discovers: if she does it exactly right, and the cells come out of the wash unstained (the cells, not the artifacts: a fold or a speck of debris keeps the chromogen forever and means nothing), she can reliably stain again. Opening total is about 9 minutes; if short on time, drop “The lab’s reality” first.">
        <div className="flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <Eyebrow>Meet Kim</Eyebrow>
              <h2 className="text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">Kim, to work</h2>
              <span className="text-[22px] leading-snug text-fd-muted-foreground">
                stain 1 · wash until it is gone · stain 2, on one slide
              </span>
            </div>
            <KimAtWork />
          </div>
          <ChromogenicRoundFigure />
        </div>
      </Slide>

      <DeckSlide
        eyebrow="Meet Kim"
        title="The knowledge exists"
        lead="It lives in a Fiji macro, and a DOI: “just install it and run it. Do you see the same results?”"
        notes="Opens on the tissue from the previous slide and pulls back: it is one tile of a tiled slide. Then the macro runs: stitch the tiles, segment the cells, measure the stain in every cell, verdict: this round didn’t take, stain again. Everyone in the room has written this macro."
      >
        <div className="flex flex-1 items-center justify-center">
          <MacroChainFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Meet Kim"
        title="She publishes"
        lead="Macro on a DOI, numbers in a figure. It works, and every run is still done by hand."
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
            <Eyebrow>Meet Kim</Eyebrow>
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

      <Slide notes="A beat between “I can’t run any faster” and the workflow: Kim dreams. Let it turn for a moment and name the three things in the dream, because they are real devices and come back all talk: the robot arm (a Fairino FR5) carries the slide, the Opentrons OT-2 stains and washes it, the openUC2 FRAME images it. In the dream the arm takes the slide to the OT-2, whose head moves over the deck, then on to the microscope, whose stage scans under its light, and comes home. It sparkles because it is a dream; the next slide is what it would take.">
        <div className="relative flex h-[600px] w-full items-stretch gap-2">
          <div className="flex w-[330px] shrink-0 flex-col justify-between">
            <div className="sm-in flex flex-col gap-3" style={delay(0.2)}>
              <Eyebrow>Automation to the rescue</Eyebrow>
              <h2 className="text-[46px] font-bold leading-[1.05] tracking-[-0.025em]">
                What if a robot <Hl>did the running?</Hl>
              </h2>
              <span className="text-[20px] leading-snug text-fd-muted-foreground">
                an arm to carry the slide, an OT-2 to stain it, a microscope that images it on its own
              </span>
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
            ).map(([x, y, size, d], i) => (
              <span
                key={i}
                aria-hidden
                className="sm-pulse pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 leading-none text-amber-400"
                style={{ ...delay(d), left: `${x}%`, top: `${y}%`, fontSize: size, textShadow: '0 0 12px rgba(251,191,36,0.9)' }}
              >
                ✦
              </span>
            ))}
          </div>
        </div>
      </Slide>

      <DeckSlide
        eyebrow="Automation to the rescue"
        title="Her dream workflow"
        lead="Stain, image, segment, measure, decide, and round again, without her: no running between the bench and the scope."
        notes="Her answer to “I can’t run any faster”: close the loop, and let a robot do the running. The arm carries the slide to the OT-2, which runs the staining protocol; the arm carries it on to the openUC2, which images it in tiles; StarDist segments the cells and the per-cell rule decides: below target, back to the OT-2 for the same stain; reached, on to the next stain; panel done, back to the rack. Point at the arm and the OT-2: that is the part no macro can do."
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Meet Kim"
        title="The lab’s reality"
        lead="The same loop, in the building she actually works in: the arm, the OT-2 and the microscope in the imaging room, the GPU and her laptop down the hall."
        notes="Arrives as the dream, unchanged and still running. One press and it rearranges into the real building: the arm and the OT-2 share a bench with the openUC2 and its acquisition PC in the imaging room, segmentation and the decision move to the office down the hall, and every step shows the computer it runs on. The acquisition PC has no GPU, so segmentation runs on the GPU server. “Can we buy another GPU for the acquisition computer?” “No.” Five machines, two rooms, and every connection crosses between them. That is the problem she takes to Claude next. First slide to drop if the opening runs long."
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure variant="lab" />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="So she asks"
        title="Kim asks for help"
        notes="Let it build: Kim’s prompt, a beat of typing, then the answer streams in without a single doubt. Read the confidence out: “Absolutely!”, “just use HTTP APIs”, “that’s it, really”, “your slides will stain themselves now”, and the badges. No code yet; nobody asked what happens when an address changes, a call hangs, or a run has to be explained. That is the next part of the talk."
      >
        <div className="flex flex-1 items-center">
          <ClaudeChatFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Night 1 · Connection"
        title="The nightmare begins"
        notes="Let it play, it tells itself. Kim falls asleep dreaming of her macro. Claude’s tip: give every device an HTTP API and send JSON. Line by line the macro becomes requests to hard-coded IP addresses, a 2 GB json.dumps, an OT-2 protocol call with a 3-second timeout (the protocol takes twenty minutes). On her laptop you pass a numpy array to StarDist; over a network, memory pointers don’t exist, and everything becomes a message to serialise. Her worries are from Lisbon: numpy as JSON? gRPC, SiLA2, ROS? I didn’t secure my server. And in the morning: this is okay, everybody does this. Click: the first horseman of the lab apocalypse, Connection."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="communication" />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Night 2 · Error handling & observability"
        title="Threads, joins and a sleep(1)"
        notes="Her original script was synchronous; talking to another machine is inherently asynchronous, especially once you parallelise over two GPUs. Claude’s tip: use threads and a join at the end, it’s easy. The tidy four-line loop becomes threads, joins that hang, a time.sleep(1) to wait for the web server, and a race condition on the results list. What even is a join? If the GPU server dies, does the thread? Maybe I should learn asyncio. Morning: two nights, no sleep, that’s fine. It does work. Click: the second horseman, Error handling & Observability: when it breaks, nobody can see where."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="threads" />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Night 3 · Data management"
        title="Where did the data go?"
        notes="In her local script she saved the image to C:\data and tracking progress was easy. Now the files are scattered over five machines and the metadata was discarded in the serialisation. Claude’s tip: here’s another script that collects the data. Then: npy files on the GPU server’s disk (IT said not to), scp to a backup drive, metadata in a 260-character filename, logs timestamped by clocks nobody synchronised. OME-TIFF or OME-NGFF? I should have used OMERO. Her line: I’ll just redo the experiment. Next time it’ll work. Click: the third horseman, Data Management."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="data" />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Night 4 · Reproducibility"
        title="Can you run that again?"
        notes="The fourth night. Her macro had a version and a DOI; anyone could rerun it. The pipeline has neither: which commit made run 41, which StarDist model, a threshold tuned by eye at 3 am on a slider in the Streamlit GUI she vibe-coded, an unseeded random number, a config file on her desktop. Claude’s tip: just pin everything in a requirements.txt. Then the errors: the GUI already breaks on a newer Streamlit, a CUDA mismatch, the config is gone, and two runs on the same data disagree. Docker, Conda, Nix, Pixi? Did my PI’s rerun use the old model? And the GUI: there is no way to publish or package it, and it most likely won’t run next year. Her line: it worked once, that counts, right? Click: the fourth horseman, Reproducibility. Then the next slide is that one run."
      >
        <div className="flex flex-1 items-center">
          <NightmareFigure night="repro" />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="A few months later"
        title="The one run in 76"
        notes="Let her stare for a moment. This is the day it finally worked: the one try out of 76 where everything actually ran and she could analyse the data. The point is not that the AI was bad. It worked, and that is exactly why it matters. Then press: her PI creeps in, delighted. “Great! Can you write this up?” … “by Friday?”"
      >
        <div className="flex flex-1 items-center">
          <ItWorkedFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="And then"
        title="Kim has had enough"
        notes="It all comes back at once: the ten-thousand-line script, the folders inside folders, the race on mask_0042, the IP addresses she can never remember. She wobbles, and keels over. From the floor, the one thing she actually wants: her Fiji script back. One file, one machine, and it ran every time. Hold the laugh, then turn to the room: what did those three nights actually leave behind?"
      >
        <div className="flex flex-1 items-center">
          <CollapseFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Nothing new"
        title="The agents aren’t the problem."
        lead="Distributed systems and data management are hard, and we haven’t been doing them right for quite some time."
        notes="Take the heat off the agents. Kim’s three nights are the two oldest hard problems in computing, and labs have been getting them wrong long before anyone asked Claude: every facility has these three things. Click: the popover. Pause. One person, one afternoon: fine. A whole facility where every user generates their own workflow, file layout and UI: Kim’s three nights times a hundred."
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

      <Slide notes="Short beat, then into Arkitekt. About 8 minutes in. This is what Kim actually wants, and it is the bar for the rest of the talk: she writes the protocol once, the way she would write an ImageJ macro for one machine (pick up the slide, stain 1, image, wash until gone, stain 2, image, overlay), presses Run, and it runs on the machines: the arm, the OT-2, the microscope. And the answer is not a folder of files on three computers; it is “yes, here’s your data”. The question mark is whatever has to sit in the middle to make that true. Next: Arkitekt.">
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

      <DeckSlide
        eyebrow="What is Arkitekt"
        title="Arkitekt is the middleman"
        lead="The apps offer their steps as typed actions; Kim uses them from Orkestrator, or just asks a chat. Every call and every result goes through the hub."
        notes="One mental model is enough to start: Arkitekt sits in the middle. On the left, the apps in Kim’s lab: the openUC2 microscope, the robot arm and the OT-2, the analysis on the GPU server, Fiji and napari. Each one offers its steps to the hub as typed actions. On the right, Kim. She never talks to a machine directly: she uses those actions from Orkestrator, or she just asks a chat. Point at the dots: calls go left, from Kim through the hub to whichever app offers the action; results come back right, through the hub, where they are stored with their provenance. Neither side needs to know where the other one runs. The next three slides zoom in: one action through Orkestrator, a whole workflow, then the chat. Section total: about 6 minutes."
      >
        <div className="flex flex-1 items-center">
          <MiddlemanFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Microscope as an app"
        title="The microscope offers what it can do"
        lead="The openUC2 tells the hub which functions it provides, with their types. Orkestrator turns them into something Kim can click."
        notes="No code yet, just the contract, and just one device: the microscope. On arrival: the openUC2 app offers the functions it provides, with names, inputs and outputs (acquire_image, move_stage, autofocus), and the hub registers them. Then it opens one websocket to the hub and listens. It needs no open port and no known IP. The arm, the OT-2 and the GPU server do exactly the same. Click: the hub moves aside and Orkestrator appears; the form for acquire_image is built from its types, and the objective list comes straight from the microscope’s own state; Kim picks 10x. Click: assign. The task goes to the hub, and the hub sends it down the microscope’s socket. Click: the image goes to the hub first (stored, with provenance), and only then on to Kim’s browser. Those types are what Orkestrator shows and what can be wired together."
      >
        <div className="flex flex-1 items-center">
          <OfferFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Microscope as an app"
        title="It can bring its own UI, too"
        lead="Next to its functions, the microscope offers a blok to the hub: its own little UI. Orkestrator shows it, right next to the forms."
        notes="Video slot: drop the recording in as public/presentations/smart-microscopy/microscope-blok.mp4 and it plays here. Narrate it as the second half of the last slide: functions are not everything a device wants to say. The openUC2 app registers a blok with the hub, a small UI it ships itself (live view, stage position, objective, the light), and Orkestrator renders it like any other page. Kim did not build it and the hub does not know what is in it; the app brought it. Keep it short: bloks come back in full when we pay down “its own UI”."
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
        eyebrow="Fair point"
        notes="Say it in Kim’s voice, a bit deflated. Everything so far is real, but it is remote control: Kim is still the one clicking every step, just from a browser instead of three PCs. Automation means the steps run without her. That is the next slide: wire the actions together."
        figure={<KimFigure size={200} mood="worried" />}
        sub="Kim, unimpressed"
      >
        “Okay, so now I control everything with clicks in a UI. <Hl>That’s not automation.</Hl>”
      </StatementSlide>

      <DeckSlide
        eyebrow="Microscope as an app"
        title="And now: a workflow"
        lead="The actions of six apps, wired by their types in Orkestrator. Press Run, and the hub does the rest."
        notes="On arrival: the actions on the hub sit in the palette; the arm’s move, the OT-2’s run_protocol, the openUC2’s acquire, stitch, segment and measure are dragged out and wired, with one edge looping back: below target, stain again. Point at the edge chips: an edge only connects if the output type fits the input (image into image, labels into labels). This is Kim’s loop, for real: six apps on five machines in two rooms. Click: Run. The hub assigns each node to the app that offers it (the same assign and result as the microscope slide, once per step) and every image lands on the hub. Click: the big red X. “That is so 2023.” Nobody wants to drag boxes any more; next slide."
      >
        <div className="flex flex-1 items-center">
          <WorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Microscope as an app"
        title="Or just ask for it"
        lead="Kim describes the workflow; the AI writes it as a short Python script against the actions her hub already knows."
        notes="Same workflow as the editor, but generated. The point is what the AI writes against: not sockets, IP addresses and retry loops, but typed calls on declared protocols: the arm’s run_trajectory, the OT-2’s run_protocol, the openUC2’s acquire_image, stitch, segment, measure. The hub checks the declarations when the app starts, assigns each call to the app that offers it, and records every one of them. About twenty lines, all of them about the experiment: for each stain, stain until it takes. This is the same AI that wrote Kim’s 10,000 lines of plumbing; the difference is what it had to build on."
      >
        <div className="flex flex-1 items-center">
          <AiWorkflowFigure />
        </div>
      </DeckSlide>

      <Slide notes="Meme beat, right after the offer/assign/result walkthrough. Let it land: yes, Arkitekt is itself a distributed system, and we just put one more server in the middle of Kim’s lab. Own it, then turn it: the difference is not that the system is less distributed, it’s who carries it. Kim’s version is generated new every afternoon, per user, and nobody maintains it; this one is written once, by people whose job it is, and every app gets the hard parts (connection, retries, types, storage, provenance, access) for free. That’s the next part of the talk.">
        <div className="flex h-[640px] w-full items-center justify-center">
          <DistributedMemeFigure />
        </div>
      </Slide>

      <DeckSlide
        eyebrow="Fair point"
        title="Why this one is different"
        lead="It is still a distributed system. The difference is where the hard parts live: once, in the hub, instead of in every afternoon’s script."
        notes="Own the meme first: yes, it is distributed. Then row by row: Kim’s system re-solves connecting, failures, data, sharing and the UI every time someone prompts for it, and nobody maintains the result. Arkitekt solves each of them once, for every app that connects. Each row is one line of the debt list; the rest of the talk pays them down one at a time, so don’t go deep here."
      >
        <div className="flex flex-1 items-center">
          <DifferentFigure />
        </div>
      </DeckSlide>

      <Slide notes="The first horseman rides in: Connection, wearing Reviewer 2’s face. He rears and has his say: “You still need to connect to the hub!” Don’t explain anything here: the next slide is the first blow.">
        <HorsemanDuelFigure night="communication" />
      </Slide>

      <DeckSlide
        eyebrow="Defeating the first horseman"
        title="No IPs, just coordination"
        lead="Nobody types an IP address. An app asks a coordination server where its hub is, once, and from then on talks to the Arkitekt server directly."
        notes="The first horseman, Connection, from night 1. First the IP address Kim used to paste into every script: struck out, nobody types one any more, and nobody opens a port. Instead the app asks a coordination server (the hub registered there too) where its hub is, and gets back a route and keys. That is the only thing the coordination server does: it steps aside, and the app talks to the Arkitekt server directly, over a WireGuard tunnel, wherever either of them is. Click: strike him down."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="communication" weapon="coordination">
            <CoordinationWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <Slide notes="The second horseman: Error handling & Observability, wearing Reviewer 2’s face again. His line: “If your connection fails, your workflow fails. lol”. This fight takes two slides.">
        <HorsemanDuelFigure night="threads" />
      </Slide>

      <DeckSlide
        eyebrow="Defeating the second horseman · 1 of 2"
        title="Everything is recorded, and workflows resume"
        lead="The hub keeps a log of every call, input, output and log line. If a workflow’s process dies, it resumes: finished calls come back from the record instead of running again."
        notes="The second horseman, Error handling & Observability, part one. On arrival: the record of run 41 fills in, calls and log lines and progress alike; this is what Kim never had, a log of everything that happened, on every machine, in one place. Then the workflow’s process dies (Kim closes her laptop). Instead of starting over, it is resumed in a new process: the calls that already finished are replayed from the record, so a slide that was stained is not stained twice, and the run carries on where it was. Same run, same answers, nothing ran twice. The horseman is still standing: next slide."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="threads" weapon="the record" kill={false}>
            <RecordWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Defeating the second horseman · 2 of 2"
        title="When it goes wrong, ask a person"
        lead="Some errors aren’t for code to fix. A workflow can stop and ask: someone fixes the real world, and the run carries on where it stopped."
        notes="Part two. Not every error is a crash: sometimes the stain just won’t take. Three rounds of CD20 and the uptake is still at 52 %: no code can fix an old reagent bottle. Kim’s workflow checks for that and calls task.hold with a message. The run pauses, Orkestrator shows Kim the message (swap the CD20 bottle, then resume), she swaps it, presses resume, and the code carries on after the hold: the next stain, Ki-67. The hold is recorded, so if the workflow is ever resumed after a crash, it won’t stop there again. Click: strike him down."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="threads" weapon="the record, and Kim">
            <HoldWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <Slide notes="The third horseman: Data Management, Reviewer 2 once more: “lol, on your server you still just have folders. You don’t solve that.” One blow this time.">
        <HorsemanDuelFigure night="data" />
      </Slide>

      <DeckSlide
        eyebrow="mikro coordinate systems"
        title="Smart microscopy isn’t an MDA"
        notes="The tiles on the right are the ones from the demo, placed on the stage they were taken on. For sequential staining this is the whole game: every round of the same slide has to land on the same coordinates, or the stains don’t overlay cell by cell. Link to the Mikro coordinate system deck for anyone who wants the details."
      >
        <div className="flex flex-1 items-center">
          <CoordsFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Defeating the third horseman"
        title="Data with coordinates, not filenames"
        lead="Every image goes into mikro with its pixel size, its place on the stage and the calls that made it. Tiles, mosaic and every staining round share one coordinate system."
        notes="The third horseman, Data Management. On arrival: the tiles land on the stage and form the mosaic of slide HE-07; then the next staining round lands on exactly the same place, because every round lives in the same stage coordinate system in mikro, so the stains overlay cell by cell. On the right, everything the 260-character filename used to carry, as data: pixel size, stage position, channel and time, the calls that made it, the dataset. Click: strike him down."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="data" weapon="mikro">
            <DataWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Data management, up close"
        title="A lineage graph, on one coordinate system"
        lead="Every item of the run knows what made it and where it sits: the tiles, the mosaic, its cells, the uptake per cell and the next round, all on the same stage."
        notes="Stay on the third horseman for one more slide. Left, the lineage graph, read in a zigzag: acquire_image made the tiles; stitch_images made the mosaic; segmentation (on the GPU server) made the labels; the analyzer measured the uptake, 41 %, below target; so run_protocol stained CD20 again, and round two measured 86 %. Right, the same items on the stage, each one placed the moment it appears in the graph: the tiles, the mosaic, the labels on it, the uptake on its cells, and round two on top. Two questions Kim could never answer from a folder, now one click each: where did this number come from, and why was this slide stained twice?"
      >
        <div className="flex flex-1 items-center">
          <LineageFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Live demo"
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

      <Slide notes="The last horseman: Reproducibility. Reviewer 2’s favourite: “You still need to run the code somewhere. How should we reproduce these environments?” This fight takes three slides: sharing is caring, then code, then data.">
        <HorsemanDuelFigure night="repro" />
      </Slide>

      <DeckSlide
        eyebrow="Defeating the fourth horseman"
        title="Sharing is caring"
        lead="To check a result, someone else needs both halves: the code that made it and the data it ran on."
        notes="The fourth horseman, Reproducibility. Sharing is caring, and it takes both: code without the data has nothing to run on, data without the code doesn’t say how it was made. Two slides, one for each half; the strike comes at the end of the second."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="repro" weapon="sharing" kill={false}>
            <SharingFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Defeating the fourth horseman · 1 of 2"
        title="Share code: publish it as an app"
        lead="Bundle the script as an app, publish it to GitHub, and every other hub can install it, with the versions it ran with."
        notes="Half one, the code. Kim’s script is a folder: app.py with her process_slides workflow, and pyproject.toml pinning stardist. arkitekt plugin build bundles it as an app: a container image, the declared actions and what it needs from other apps, CPU and CUDA flavours. arkitekt plugin publish puts the release on GitHub. From there it is installable: another lab’s hub finds stainstorm, presses install, and gets the same workflow, picking the CUDA flavour because it has a GPU. It runs against their own arm, liquid handler and microscope, as long as those offer the same actions. No README with twelve setup steps."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="repro" weapon="sharing" kill={false}>
            <ShareCodeFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Defeating the fourth horseman · 2 of 2"
        title="Share data: press share"
        lead="Pick the dataset and who gets it. When they accept, their hub gets a WireGuard connection to yours, with access to that data and nothing else."
        notes="Half two, the data. The clip on the left autoplays: Kim presses share on slides / HE-07 and picks the other lab. Nothing is exported or uploaded. Click: the other lab accepts. A WireGuard connection opens between the two hubs, the same kind of tunnel as on the connection slide, but scoped: it reaches HE-07, every round of it, read-only, and nothing else. HE-08 and her drafts aren’t even visible. Click again: strike him down. That’s all four."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="repro" weapon="sharing" killIndex={2}>
            <ShareDataFigure src={`${MEDIA}/share-data.mp4`} />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Video 2"
        title="The workflow running in the lab"
        notes="Record this one first; videos 3 to 7 reuse the same run. Narrate the steps as they happen: the arm picks up the slide, the OT-2 stains, the arm carries it to the openUC2, tiles, stitch, segment, measure; one round comes out below target and goes back for another."
      >
        <div className="flex flex-1 items-center justify-center">
          <Clip
            n={2}
            file="02-workflow-run.mp4"
            length="60 s"
            shows="process_slides in the lab: Orkestrator next to a camera on the arm, the OT-2 and the openUC2."
          />
        </div>
      </DeckSlide>

      {/* “just tell Claude to run it”: two problems ------------------------- */}

      <Slide notes="One more rider, and he’s new: the AI Horse, Reviewer 2 in the saddle again, shouting “LLMs will make all of that obsolete! WHERE IS THE CHAT INTERFACE?” No strike here; the next slides are the answer, starting with Kim, who has had the same idea.">
        <HorsemanDuelFigure night="ai" />
      </Slide>

      <DeckSlide
        eyebrow="Kim, the week after"
        title="Just tell Claude to run it?"
        notes="Kim is bored again, and she has a plan: skip the workflow, tell Claude to run the experiment, and let the user chat with it. Let Arkitekt answer: two problems with that. One, what is it allowed to do? Two, what does the user actually chat with? The clip comes first, then one slide per problem."
      >
        <div className="flex flex-1 items-center">
          <PitchFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Clip · Bloomberg Originals, The Circuit with Emily Chang"
        title="The Rise and Reckoning of Jensen Huang"
        notes="YouTube, 23:13 to 24:15; it starts when the slide comes up and stops at 24:15. Needs the venue’s network: if YouTube is blocked, say what the clip shows and move on."
      >
        <div className="flex flex-1 items-center justify-center">
          <YouTubeClip id="JW5s9Md4U2U" start={1393} end={1455} label="Clip" shows="The Circuit with Emily Chang: Jensen Huang, 23:13 to 24:15." />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Problem one · Arkitekt and LLMs"
        title="The agent asks for rights, like any app"
        lead="An LLM on Arkitekt is just another app: it asks for the scopes it needs, calls typed actions with them, asks again for anything more, and every call is on the record."
        notes="Problem one: what is it allowed to do? On Arkitekt, Claude is just another app. It can’t touch the lab until it asks: call process_slides on stainstorm, read slides / HE-07. Not moving the arm by hand, not deleting data. Kim approves those scopes, until six. Then it needs the GPU server for segmentation, which it wasn’t granted, so it asks again and Kim allows it once. The record shows both calls, and who allowed each of them."
      >
        <div className="flex flex-1 items-center">
          <AgentRightsFigure />
        </div>
      </DeckSlide>

      <StatementSlide
        eyebrow="Problem two"
        sub="So let the chat answer with something better than text."
        notes="Problem two: what does the user chat with? People would like to chat with that, and that’s fine. But typing “a bit more exposure… no, less” to a microscope forty times a day is not an interface."
      >
        People would like to chat with that.
      </StatementSlide>

      <DeckSlide
        eyebrow="Problem two · Bloks as interfaces"
        title="The chat answers with a blok"
        lead="People do want to chat. But for an instrument the answer should be an interface: the blok the app ships, typed and recorded, not text and not a generated UI."
        notes="Kim asks to tune the exposure herself. Claude doesn’t write a UI and doesn’t ask her to type numbers: it hands over the capture blok that ships with the openuc2 app. She turns the exposure to 35 ms and captures; the preview brightens, and that press is a recorded call like any other. Then she types 900: outside the action’s range, so the blok says no before anything reaches the laser. More on bloks later in the talk."
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
        eyebrow="openUC2"
        title="Modularity is king"
        lead="A handful of cube kinds, snapped onto a baseplate and wired together: a different microscope every time."
        notes="openUC2’s main idea in one line: modularity is king. Instead of buying one closed microscope, you get cubes, each holding one thing (an LED, a sample holder, an objective, a lens, a mirror, a camera), and you snap them onto a baseplate in whatever order the experiment needs. Let the build snap together: this is a real fluorescence microscope as Optikit exports it, cube by cube, in the order the light goes through it: the fiber holder and the blue laser, a mirror, the dichroic, the objective, a mirror up to the sample stage, the camera, and the controller. They come in black, as they look on the bench; then the housings fade away and the optics inside show: the mirrors, the amber dichroic, the green emission filter, the lenses. Then it turns slowly: swap any cube and it is a different microscope. Cheap, open, and rebuilt over lunch."
      >
        <div className="flex flex-1 items-stretch gap-8">
          <div className="relative min-h-[400px] flex-[1.5] overflow-hidden rounded-2xl border border-fd-border bg-fd-card/40">
            <OptikitCubes3D className="absolute inset-0" />
            <span className="absolute left-4 top-3 font-mono text-[12px] text-fd-muted-foreground">a fluorescence microscope, from cubes · exported by Optikit</span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-5">
            <p className="sm-in text-[30px] font-bold leading-tight tracking-[-0.02em]" style={delay(0.2)}>
              Snap cubes onto a plate, <Hl>get a microscope.</Hl>
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {CUBE_PARTS.map((name, i) => (
                <li key={`${name}-${i}`} className="sm-in flex items-center gap-2 text-[17px]" style={delay(landsAt(i) + 0.35)}>
                  <span className="size-[10px] shrink-0 rounded-[3px] border-2 border-fd-primary" />
                  {name}
                </li>
              ))}
            </ul>
            <p className="sm-in text-[18px] leading-snug text-fd-muted-foreground" style={delay(3.8)}>
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

      <DeckSlide
        eyebrow="Optikit"
        title="Design the microscope like a circuit board"
        lead="Parts from a library go onto a bench, the light is traced through them, and out come the numbers the instrument needs."
        notes="The answer to the last slide: describe the microscope instead of assuming it. Optikit is the openUC2 platform for designing an instrument, think KiCad for optics. Every part, an LED, an objective, a tube lens, a splitter, a camera, is authored once in a library with its real geometry, and reused in every design. Place them on the bench and Optikit traces the light: one path per camera, here A straight through and B folded by the splitter. Out of the trace come the facts nobody should type by hand: µm per pixel (the 3.45 µm pitch over 10×, 0.345), the light path per detector, and a priced parts list to order from. Credit the Optikit team by name here."
      >
        <div className="flex flex-1 items-center">
          <OptikitBenchFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="newswitch"
        title="The design runs before the hardware does"
        lead="newswitch, the next ImSwitch, builds the instrument from the Optikit design, and can simulate any part of it."
        notes="My side of it. newswitch is a rewrite of ImSwitch, the openUC2 microscope software, and it reads the Optikit design instead of a hand-written config. Because it knows the optics, it can simulate them: with simulate set to everything, every part is simulated and the camera draws a simulated sample, here beads, through the traced optics. Set it to unwired, and whatever is plugged in is real, the stage and camera A here, while the rest stays simulated. Set it to nothing, and it is the real instrument. The actions, states and bloks are the same in every mode, so Arkitekt and Orkestrator can’t tell the difference: routines and workflows run before the hardware is built, and a simulated bench even carries hidden errors for calibration to find."
      >
        <div className="flex flex-1 items-center">
          <SimulateFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="newswitch · bloks"
        title="A microscope for one question"
        lead="Built from modules, an instrument can be assembled for one question, and it ships the bloks for that question with it."
        notes="The payoff of the last two slides plus bloks. If you can design, simulate and build an instrument cheaply, you can build it for one question instead of buying one for every question. The instrument’s description carries its bloks, its own little UIs, so the UI comes with the question: Kim’s brightfield scope asks “did the stain take?” and ships a stain check; a FLIM scope ships a lifetime fit; a light-sheet ships a sheet alignment. Orkestrator renders whichever bloks the instrument brings, on the same hub, with the same actions underneath. The three instruments are configurations in newswitch; the numbers in the bloks are illustrative."
      >
        <div className="flex flex-1 items-center">
          <QuestionScopesFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Coordinate systems, again"
        title="Every detector is a sensor in a coordinate system"
        lead="The trace says how each sensor reaches the sample, so every image lands where it was taken, from every camera."
        notes="Back to coordinate systems, one level down. Each detector is a coordinate system of its own: its sensor, in pixels. Camera B sits behind the splitter, so it sees the sample mirrored. Because newswitch knows the optics from the trace, it knows how each sensor maps onto the stage (0.345 µm per pixel, and a mirror for B), and the stage onto the sample. So both images land on the same cells without anyone registering them by hand. It is the same coordinate graph the hub stores the data in, which is why the images from Kim’s run were already placed."
      >
        <div className="flex flex-1 items-center">
          <SensorSpacesFigure />
        </div>
      </DeckSlide>

      <StatementSlide eyebrow="Takeaway">
        Workflows call actions, not scripts.{' '}
        <Hl>That’s why they survive the author leaving.</Hl>
      </StatementSlide>

      {/* 3. Paying down the debt (about 20 min) ---------------------------- */}

      {/* works on one machine → organisations + mesh (4 min) */}

      <DeckSlide
        eyebrow="Paying down the debt · 1 of 5"
        title="Works on one machine"
        notes="Section total about 20 minutes. If time runs short: cut share to a screenshot first, then shorten replay. Keep Q&A."
      >
        <div className="flex flex-1 flex-col justify-center gap-5">
          <DebtList now={MESH} answer="organisations + mesh" />
          <KimSays>Now I have IP addresses everywhere. What if they change?</KimSays>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Organisations + mesh"
        title="Your own lab network"
        notes="Have the IT-security answer ready: ports, what leaves the building, who runs the coordination server."
      >
        <div className="flex flex-1 items-center">
          <MeshFigure />
        </div>
      </DeckSlide>

      <DeckSlide eyebrow="Video 3" title="The same run, from somewhere else">
        <div className="flex flex-1 items-center justify-center">
          <Clip
            n={3}
            file="03-mesh.mp4"
            length="30–45 s"
            shows="The same run, started from a laptop on a phone hotspot."
          />
        </div>
      </DeckSlide>

      <StatementSlide
        eyebrow="Takeaway"
        notes="DRAFT takeaway line, not from the outline: check the wording."
      >
        Start the run from anywhere.{' '}
        <Hl>The data still goes straight to storage.</Hl>
      </StatementSlide>

      {/* nobody knows what it decided → replay + provenance (4 min) */}

      <DeckSlide eyebrow="Paying down the debt · 2 of 5" title="Nobody knows what the microscope decided">
        <div className="flex flex-1 flex-col justify-center gap-5">
          <DebtList paid={MESH} justPaid={MESH} now={REPLAY} answer="replay + provenance" />
          <KimSays>Why was HE-07 stained twice? The OT-2 says timeout, the GPU says nothing.</KimSays>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Replay + provenance"
        title="Every call is recorded"
        notes="Expect: does replay re-stain or re-image the slide? Physical actions are not idempotent, and a slide that was stained is not stained twice. Be precise about what replay does with staining and acquisition steps versus analysis steps."
      >
        <div className="flex flex-1 items-center">
          <ReplayFigure />
        </div>
      </DeckSlide>

      <DeckSlide eyebrow="Video 4" title="Walking the run’s decisions">
        <div className="flex flex-1 items-center justify-center">
          <Clip
            n={4}
            file="04-replay.mp4"
            length="60–90 s"
            shows="Open the run, walk its decisions (why CD20 went round twice), re-run the analysis with another target."
          />
        </div>
      </DeckSlide>

      <StatementSlide eyebrow="Takeaway" notes="DRAFT takeaway line, not from the outline: check the wording.">
        Every decision is on record, <Hl>so you can ask the run why.</Hl>
      </StatementSlide>

      {/* a billion files, weird JSON, no pixel size → coordinate systems (4 min) */}

      <DeckSlide eyebrow="Paying down the debt · 3 of 5" title="A billion files, and no pixel size">
        <div className="flex flex-1 flex-col justify-center gap-5">
          <DebtList paid={[...MESH, ...REPLAY]} justPaid={REPLAY} now={COORDS} answer="coordinate systems" />
          <KimSays>Should I really write all the metadata in the filename? It’s 260 characters now.</KimSays>
        </div>
      </DeckSlide>

      <DeckSlide eyebrow="Video 5" title="Every round on the same slide">
        <div className="flex flex-1 items-center justify-center">
          <Clip
            n={5}
            file="05-coordinates.mp4"
            length="30 s"
            shows="The mosaic of HE-07: flip through the staining rounds, click a cell, see its uptake in every stain."
          />
        </div>
      </DeckSlide>

      <StatementSlide eyebrow="Takeaway" notes="DRAFT takeaway line, not from the outline: check the wording.">
        Every image knows where it is,{' '}
        <Hl>so the structure survives without a folder tree.</Hl>
      </StatementSlide>

      {/* can't hand it to anyone → share via spaces (3 min) */}

      <DeckSlide
        eyebrow="Paying down the debt · 4 of 5"
        title="Can’t hand it to anyone"
        notes="Kim’s codebase is now 10,000 lines on five computers, and 9,950 of them are plumbing: hard-coded IP addresses, debug sleeps. The next person has to rebuild her whole lab. First cut if time runs short: replace video 6 with a screenshot."
      >
        <div className="flex flex-1 flex-col justify-center gap-5">
          <DebtList paid={[...MESH, ...REPLAY, ...COORDS]} justPaid={COORDS} now={SHARE} answer="spaces" />
          <KimSays>Could you help me set this up in my team?</KimSays>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Share via spaces"
        title="Grant access, don’t copy"
        notes="Expect: does shared data leave our facility, where does it physically stay, what can a guest see or do, can I revoke it. Cross-institution currently means joining that organisation."
      >
        <div className="flex flex-1 items-center">
          <ShareFigure />
        </div>
      </DeckSlide>

      <DeckSlide eyebrow="Video 6" title="Sharing, and taking it back">
        <div className="flex flex-1 items-center justify-center">
          <Clip
            n={6}
            file="06-share.mp4"
            length="45 s"
            shows="Share with a second account, open it in another browser, revoke."
          />
        </div>
      </DeckSlide>

      <StatementSlide eyebrow="Takeaway" notes="DRAFT takeaway line, not from the outline: check the wording.">
        Share access, not copies. <Hl>The history comes along.</Hl>
      </StatementSlide>

      {/* its own UI → bloks (5 min) */}

      <DeckSlide eyebrow="Paying down the debt · 5 of 5" title="Its own UI">
        <div className="flex flex-1 flex-col justify-center gap-5">
          <DebtList paid={[...MESH, ...REPLAY, ...COORDS, ...SHARE]} justPaid={SHARE} now={BLOKS} answer="bloks" />
          <KimSays>I want my macro back.</KimSays>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Bloks"
        title="Interfaces people can trust"
        notes="Expect: who writes and approves bloks, can a user break something with one, why not a napari plugin or a Micro-Manager UI."
      >
        <div className="flex flex-1 items-center">
          <BloksFigure />
        </div>
      </DeckSlide>

      <DeckSlide eyebrow="Video 7" title="The UI from video 2 was a blok">
        <div className="flex flex-1 items-center justify-center">
          <Clip
            n={7}
            file="07-bloks.mp4"
            length="45 s"
            shows="The UI from video 2 is a blok: edit it, the UI updates."
          />
        </div>
      </DeckSlide>

      <StatementSlide eyebrow="Takeaway">
        The answer isn’t fewer agents.{' '}
        <Hl>It’s giving them something solid to build on.</Hl>
      </StatementSlide>

      {/* 4. Outlook and close (about 6 min) -------------------------------- */}

      <DeckSlide
        eyebrow="Outlook"
        title="Beyond one lab"
        lead="The arm and the OT-2 were already apps. The same actions and workflows reach clusters and other labs."
        notes="Kim’s lab already ran a robot arm and a liquid handler next to the microscope: to the hub they are just more apps. The same goes for a cluster, or another lab’s hub. Section total: about 6 minutes."
      >
        <div className="flex flex-1 items-center">
          <HubFigure beyond />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Outlook · Optikit"
        title="Next: adapting the instrument"
        lead="Smart microscopy so far adapts where and how to image. The instrument stays fixed."
        notes="Credit openUC2 and the Optikit team out loud as well."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <OptikitFigure />
          <OptikitSteps />
          <Caption>
            Optikit is built with openUC2 and the Optikit team: [names].
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide eyebrow="Video 8" title="Reconfiguring a light path">
        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <Clip
            n={8}
            file="08-optikit.mp4"
            length="30 s"
            height={420}
            shows="The Optikit renderer reconfiguring a light path."
          />
          <Caption>Clip: the Optikit team.</Caption>
        </div>
      </DeckSlide>

      <DeckSlide eyebrow="Paying down the debt · done" title="The debt list, paid">
        <div className="flex flex-1 flex-col justify-center">
          <DebtList paid={[0, 1, 2, 3, 4, 5, 6]} justPaid={[0, 1, 2, 3, 4, 5, 6]} />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Kim’s loop, again"
        title="Same loop, on infrastructure"
        lead="Each step is an action where it belongs. The run is recorded, the images are placed, the result can be shared, and the UI is a blok."
        notes="Pay off the story: nothing about Kim’s science changed. Same protocol, same per-cell rule, five stains on one slide. The plumbing moved out of her script and into the lab, and Kim stopped running between the bench and the scope."
      >
        <div className="flex flex-1 items-center">
          <KimLoopFigure variant="arkitekt" />
        </div>
      </DeckSlide>

      <StatementSlide>
        Tailor the experiment, <Hl>not the infrastructure.</Hl>
      </StatementSlide>

      <DeckSlide eyebrow="Thank you" title="Questions?">
        <div className="grid flex-1 grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-center gap-8">
          <div className="flex flex-col gap-3">
            <Point title="arkitekt">
              <a href="https://arkitekt.live">arkitekt.live</a>
            </Point>
            <Point title="openUC2">
              <a href="https://openuc2.com">openuc2.com</a>
            </Point>
            <Point title="Optikit">[Optikit repo URL]</Point>
            <Caption>Contributors: [names]</Caption>
          </div>
          <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-dashed border-fd-border font-mono text-[15px] text-fd-muted-foreground">
            [QR code → arkitekt.live]
          </div>
        </div>
      </DeckSlide>
    </DeckFrame>
  );
}
