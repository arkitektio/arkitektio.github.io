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
  OrganoidFigure,
  PaperCard,
  ResultsChart,
  SadOrganoidFigure,
  YearsFigure,
} from './smart-microscopy-figures';
import {
  BloksFigure,
  CoordsFigure,
  HubFigure,
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

      <Slide notes="Kim is a persona (from the Lisbon hackathon talk), not a real person: say so. She images organoids on a lightsheet, and they keep dying before she can even add the drugs. Let both organoids play out before you say the rule: same signal, two fates; the only difference is whether growth factor arrives in time. Opening total is about 8 minutes; if short on time, drop “The lab’s reality” first.">
        <div className="flex h-[600px] w-full items-center gap-8">
          <div className="flex flex-1 flex-col gap-7">
            <div className="sm-in flex flex-col gap-2" style={delay(0.2)}>
              <h2 className="text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">Meet Kim</h2>
              <span className="text-[22px] leading-snug text-fd-muted-foreground">
                organoid biologist · lightsheet
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 pt-10">
                <KimFigure size={150} />
              </div>
              <div className="relative flex-1">
                {/* thought trail: small to large, rising from her head */}
                <span className="sm-pop absolute left-[-6px] top-[86px] size-3 rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.8)} />
                <span className="sm-pop absolute left-[8px] top-[58px] size-5 rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.95)} />
                <div
                  className="sm-pop ml-8 rounded-[40px] border-2 border-fd-border bg-fd-card px-8 py-6 text-[28px] font-bold leading-[1.22] tracking-[-0.015em] shadow-sm"
                  style={delay(1.1)}
                >
                  My organoids keep on dying…{' '}
                  <span className="sm-in inline" style={delay(2)}>
                    <Hl>but if I add growth factor A, this seems reversible?</Hl>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <OrganoidFigure />
        </div>
      </Slide>

      <DeckSlide
        eyebrow="Meet Kim"
        title="The knowledge exists"
        lead="It lives in an ImageJ macro, and a DOI: “just install it and run it. Do you see the same results?”"
        notes="Opens on the organoid from the previous slide and pulls back: it is one image in a z stack. Then the macro runs: max projection, Otsu threshold, analyse particles, verdict. Everyone in the room has written this macro."
      >
        <div className="flex flex-1 items-center justify-center">
          <MacroChainFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Meet Kim"
        title="She publishes"
        lead="Macro on a DOI, numbers in a figure. It works, and every run is still done by hand."
        notes="Kim’s first paper: the macro goes into the methods and onto a DOI, and the statistics hold up. Let her enjoy it. Persona numbers (18 % vs 83 %, n = 48, p < 0.01) are illustrative, not from a real study; say so if asked. Then: the catch is that it’s all manual."
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

      <Slide notes="The paper is out, and the organoids in her incubator keep dying: the macro tells her what happened afterwards, never in time to act. Pause on the question; the next slide is her answer.">
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
                  But how can I save my <Hl>poor organoids?</Hl>
                </p>
                <span className="sm-pop absolute -left-[22px] bottom-[-14px] size-[22px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.85)} />
                <span className="sm-pop absolute -left-[44px] bottom-[-38px] size-[13px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(0.7)} />
              </div>
            </div>
          </div>
          <SadOrganoidFigure />
        </div>
      </Slide>

      <DeckSlide
        eyebrow="Automation to the rescue"
        title="Her dream workflow"
        lead="Image, segment, decide, pump, and round again, without her: no thresholds by eye, no liquids by hand."
        notes="Her answer to “how can I save them?”: close the loop. The microscope acquires, StarDist segments, the rule checks the core, and an ESP32 runs a peristaltic pump that sends growth factor into the well; a second sensor reads the temperature. Point at the pump: that is the part no macro can do."
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Meet Kim"
        title="The lab’s reality"
        lead="The same loop, in the building she actually works in: the microscope and the pump in the imaging room, the GPU and her laptop down the hall."
        notes="Arrives as the dream, unchanged and still running. One press and it rearranges into the real building: the pump moves next to the plate, segmentation and the decision move to the office down the hall, and every step shows the computer it runs on. The acquisition PC has no GPU, so segmentation runs on the GPU server. “Can we buy another GPU for the acquisition computer?” “No.” Every connection now crosses between rooms and machines. That is the problem she takes to Claude next. First slide to drop if the opening runs long."
      >
        <div className="flex flex-1 items-center">
          <DreamWorkflowFigure variant="lab" />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="So she asks"
        title="Kim asks for help"
        notes="Let it build: Kim’s prompt, a beat of typing, then the answer streams in without a single doubt. Read the confidence out: “Absolutely!”, “just use HTTP APIs”, “that’s it, really”, “your organoids are safe now”, and the badges. No code yet; nobody asked what happens when an address changes, a call hangs, or a run has to be explained. That is the next part of the talk."
      >
        <div className="flex flex-1 items-center">
          <ClaudeChatFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Night 1 · Connection"
        title="The nightmare begins"
        notes="Let it play, it tells itself. Kim falls asleep dreaming of her macro. Claude’s tip: give every device an HTTP API and send JSON. Line by line the macro becomes requests to hard-coded IP addresses, a 2 GB json.dumps, a pump call with a 3-second timeout. On her laptop you pass a numpy array to StarDist; over a network, memory pointers don’t exist, and everything becomes a message to serialise. Her worries are from Lisbon: numpy as JSON? gRPC, SiLA2, ROS? I didn’t secure my server. And in the morning: this is okay, everybody does this. Click: the first horseman of the lab apocalypse, Connection."
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
        notes="The fourth night. Her macro had a version and a DOI; anyone could rerun it. The pipeline has neither: which commit made run 41, which StarDist model, a threshold tuned by eye at 3 am, an unseeded random number, a config file on her desktop. Claude’s tip: just pin everything in a requirements.txt. Then the errors: a missing module, a CUDA mismatch, the config is gone, and two runs on the same data disagree. Docker, Conda, Nix, Pixi? Did my PI’s rerun use the old model? Her line: it worked once, that counts, right? Click: the fourth horseman, Reproducibility. Then the next slide is that one run."
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

      <StatementSlide notes="Short beat, then into Arkitekt. About 8 minutes in." figure={<BetterFigure />} sub="“I want my ImageJ back.”">
        Can we do better?
      </StatementSlide>

      {/* 2. What is Arkitekt (about 6 min) --------------------------------- */}

      <DeckSlide
        eyebrow="What is Arkitekt"
        title="Every step is a typed action on a shared lab hub"
        notes="One mental model is enough to start. Lab infrastructure for microscopy workflows that span more than one device. Point at robots and clusters: we come back to them at the end. Section total: about 6 minutes."
      >
        <div className="flex flex-1 items-center">
          <HubFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Microscope as an app"
        title="Find, centre, capture: three actions"
        lead="Kim’s loop at UC2 scale: image, decide, act. Each step becomes an action the hub knows by its types."
        notes="Same shape as Kim’s loop; the demo uses the UC2 because nobody has a microfluidics pump on stage. No code, just the contract. On arrival: the app offers its actions, with names, inputs and outputs, and the hub registers them; then it opens one websocket to the hub and listens. It never needs an open port or a known IP. Click: the hub moves aside and Orkestrator appears; the form for snap is built from its types, Kim types 20 ms. Click: assign. The task goes to the hub, and the hub sends it down the app’s socket; the scope runs it. Click: the image goes to the hub first (stored, with provenance), and only then on to Kim’s browser. Those types are what Orkestrator shows and what can be wired together."
      >
        <div className="flex flex-1 items-center">
          <OfferFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Microscope as an app"
        title="And now: a workflow"
        lead="The three actions, wired by their types in Orkestrator. Press Run, and the hub does the rest."
        notes="On arrival: the actions on the hub sit in the palette; snap, find_largest, move_to and snap again are dragged out and wired. Point at the edge chips: an edge only connects if the output type fits the input (image into image, x, y into x, y). This is Kim’s loop at UC2 scale: overview, decide, centre, capture. Click: Run. The hub assigns each node to uc2-scope in turn (the same assign/done from the last slide, four times) and the final image lands on the hub. Click: the big red X. “That is so 2023.” Nobody wants to drag boxes any more; next slide."
      >
        <div className="flex flex-1 items-center">
          <WorkflowFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Microscope as an app"
        title="Or just ask for it"
        lead="Kim describes the workflow; the AI writes it as a short Python script against the actions her hub already knows."
        notes="Same workflow as the editor, but generated. The point is what the AI writes against: not sockets, IP addresses and retry loops, but four typed calls on a declared protocol (uc2-scope’s snap, find_largest, move_to). The hub checks the declaration when the app starts, assigns each call to the scope, and records every one of them. Nineteen lines, all of them about the experiment. This is the same AI that wrote Kim’s 10,000 lines of plumbing; the difference is what it had to build on."
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
        notes="The second horseman, Error handling & Observability, part one. On arrival: the record of run 41 fills in, calls and log lines and progress alike; this is what Kim never had, a log of everything that happened, on every machine, in one place. Then the workflow’s process dies (Kim closes her laptop). Instead of starting over, it is resumed in a new process: the calls that already finished are replayed from the record (the stage does not snap again), and the run carries on with move_to and the final snap. Same run, same answers, nothing ran twice. The horseman is still standing: next slide."
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
        notes="Part two. Not every error is a crash: sometimes the slide has drifted and there is simply nothing in view. Kim’s workflow checks for that and calls task.hold with a message. The run pauses, Orkestrator shows Kim the message (readjust the slide, then resume), she nudges the slide, presses resume, and the code carries on after the hold: snap, find the organoid, centre it, capture. The hold is recorded, so if the workflow is ever resumed after a crash, it won’t stop there again. Click: strike him down."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="threads" weapon="the record, and Kim">
            <HoldWinFigure />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="mikro coordinate systems"
        title="Smart microscopy isn’t an MDA"
        notes="The tiles on the right are the ones from the demo, on top of the overview. Link to the Mikro coordinate system deck for anyone who wants the details."
      >
        <div className="flex flex-1 items-center">
          <CoordsFigure />
        </div>
      </DeckSlide>

      <Slide notes="The third horseman: Data Management, Reviewer 2 once more: “lol, on your server you still just have folders. You don’t solve that.” One blow this time.">
        <HorsemanDuelFigure night="data" />
      </Slide>

      <DeckSlide
        eyebrow="Defeating the third horseman"
        title="Data with coordinates, not filenames"
        lead="Every image goes into mikro with its pixel size, its place on the stage and the calls that made it. Overview and detail share one coordinate system."
        notes="The third horseman, Data Management. On arrival: the overview image sits on the stage; the detail image flies into exactly the place where the organoid is, because both live in the same stage coordinate system in mikro. On the right, everything the 260-character filename used to carry, as data: pixel size, stage position, channel and time, the calls that made it, the dataset. Click: strike him down."
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
        lead="Every item of the run knows what made it and where it sits: the overview, the organoid it found, the detail image, its labels and the measurements, all on the same stage."
        notes="Stay on the third horseman for one more slide. Left, the lineage graph, read in a zigzag: snap made the overview; find_largest made an ROI on it; move_to and snap made the detail image; segmentation (on the GPU server) made the labels; measure made the table. Right, the same items on the stage, each one placed the moment it appears in the graph: the overview, the ROI on it, the detail inside the ROI, the labels on the detail, and the measurements at the organoid’s centroid. Two questions Kim could never answer from a folder, now one click each: where did this number come from, and where on the slide is it?"
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
        notes="Half one, the code. Kim’s script is a folder: app.py with her three actions, and pyproject.toml pinning stardist. arkitekt plugin build bundles it as an app: a container image, the declared actions, CPU and CUDA flavours. arkitekt plugin publish puts the release on GitHub. From there it is installable: another lab’s hub finds organoid-tools, presses install, and gets the same three actions, picking the CUDA flavour because it has a GPU. No README with twelve setup steps."
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
        notes="Half two, the data. The clip on the left autoplays: Kim presses share on organoids / B4 and picks the other lab. Nothing is exported or uploaded. Click: the other lab accepts. A WireGuard connection opens between the two hubs, the same kind of tunnel as on the connection slide, but scoped: it reaches organoids / B4, read-only, and nothing else. B5 and her drafts aren’t even visible. Click again: strike him down. That’s all four."
      >
        <div className="flex flex-1 items-center">
          <DefeatFrame night="repro" weapon="sharing" killIndex={2}>
            <ShareDataFigure src={`${MEDIA}/share-data.mp4`} />
          </DefeatFrame>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Video 2"
        title="The workflow running on the UC2"
        notes="Record this one first; videos 3 to 7 reuse the same run. Narrate the four steps as they happen: overview, threshold and label, largest object, stage moves, better image."
      >
        <div className="flex flex-1 items-center justify-center">
          <Clip
            n={2}
            file="02-workflow-run.mp4"
            length="60 s"
            shows="Find, centre, capture on the UC2: Orkestrator plus a phone camera on the stage."
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
        notes="Problem one: what is it allowed to do? On Arkitekt, Claude is just another app. It can’t touch the microscope until it asks: call find_centre_capture on the scope, read B4. Not laser power above 50 %, not deleting data. Kim approves those scopes, until six. Then it needs the GPU server for segmentation, which it wasn’t granted, so it asks again and Kim allows it once. The record shows both calls, and who allowed each of them."
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
        notes="Kim asks to tune the exposure herself. Claude doesn’t write a UI and doesn’t ask her to type numbers: it hands over the capture blok that ships with the uc2-scope app. She turns the exposure to 35 ms and captures; the preview brightens, and that press is a recorded call like any other. Then she types 900: outside the action’s range, so the blok says no before anything reaches the laser. More on bloks later in the talk."
      >
        <div className="flex flex-1 items-center">
          <BlokChatFigure />
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
          <KimSays>The pump didn’t fire. The microscope says timeout, the GPU says nothing.</KimSays>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Replay + provenance"
        title="Every call is recorded"
        notes="Expect: does replay re-image the sample? Physical actions are not idempotent. Be precise about what replay does with acquisition steps versus analysis steps."
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
            shows="Open the run, walk its decisions, re-run the analysis with another threshold."
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

      <DeckSlide eyebrow="Video 5" title="From the overview to the detail">
        <div className="flex flex-1 items-center justify-center">
          <Clip
            n={5}
            file="05-coordinates.mp4"
            length="30 s"
            shows="The overview: click an object, jump to its high-res image."
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
        title="Beyond microscopes"
        lead="The same actions and workflows drive robots and clusters."
        notes="Pay off the teaser from the hub slide. Section total: about 6 minutes."
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
        notes="Pay off the story: nothing about Kim’s science changed. The plumbing moved out of her script and into the lab."
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
