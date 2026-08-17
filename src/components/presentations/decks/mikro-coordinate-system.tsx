'use client';

/* "The Mikro coordinate system" — how Mikro answers "where is this pixel?" and
   "what cell is this?".

   Spaces are nodes, transformations are directed edges, and every spatial fact
   is stored exactly once. This deck tracks
   content/docs/design/services/mikro/coordinate-systems.mdx; keep the two in
   step when either moves. */

import type { ReactNode } from 'react';
import { DeckFrame } from '../deck-frame';
import {
  Caption,
  Columns,
  DeckSlide,
  Figure,
  Panel,
  SectionSlide,
  Term,
  TitleSlide,
} from '../slide';
import {
  AisQuestionFigure,
  AttributePlanFigure,
  ComposeFigure,
  GraphFigure,
  HoverAnswerFigure,
  SpreadsheetFigure,
  TransformIntroFigure,
} from './mikro-coordinate-figures';

/** GraphQL / SQL block sized for the slide canvas. */
function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="overflow-hidden rounded-xl border border-fd-border bg-fd-muted/60 p-4 font-mono text-[15px] leading-[1.55] text-fd-foreground">
      {children}
    </pre>
  );
}

/** A demo recording. Until the file is dropped into `public/`, the dashed
    placeholder behind the player is what shows — so the deck stays presentable
    while the video is still being cut. */
function DemoVideo({ src }: { src: string }) {
  return (
    <div className="relative mx-auto aspect-video max-h-[380px] w-full max-w-[680px] overflow-hidden rounded-xl border border-dashed border-fd-border">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-fd-muted-foreground">
        <span className="text-[19px] font-semibold">demo recording</span>
        <span className="font-mono text-[13px]">{src}</span>
      </div>
      <video
        autoPlay
        muted
        loop
        controls
        playsInline
        className="absolute inset-0 size-full object-contain"
      >
        <source src={src} />
      </video>
    </div>
  );
}

/** One array shape, written as the axes it actually has. */
function Signature({
  name,
  axes,
  note,
  tone = 'default',
}: {
  name: string;
  /** `[type, name]` per axis. Deliberately no units: the array's own axes never
      carry any — a unit is what an edge into another space adds. */
  axes: [string, string][];
  note?: string;
  tone?: 'default' | 'primary';
}) {
  return (
    <div
      className={
        tone === 'primary'
          ? 'flex items-center gap-5 rounded-xl border border-fd-primary/40 bg-fd-primary/5 px-5 py-3'
          : 'flex items-center gap-5 rounded-xl border border-fd-border bg-fd-card/60 px-5 py-3'
      }
    >
      <span className="w-[180px] shrink-0 text-[19px] font-semibold leading-tight tracking-tight">
        {name}
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {axes.map(([type, axisName], i) => (
          <span key={`${type}-${axisName}-${i}`} className="flex items-center gap-2">
            {i > 0 ? (
              <span className="text-[15px] text-fd-muted-foreground" aria-hidden>
                ×
              </span>
            ) : null}
            <span className="flex flex-col rounded-lg border border-fd-border bg-fd-background/60 px-2.5 py-1">
              <span className="font-mono text-[13px] font-bold text-fd-primary">
                {type}
              </span>
              <span className="font-mono text-[11px] text-fd-muted-foreground">
                {axisName}
              </span>
            </span>
          </span>
        ))}
      </div>
      {note ? (
        <span className="ml-auto text-right text-[15px] leading-snug text-fd-muted-foreground">
          {note}
        </span>
      ) : null}
    </div>
  );
}

export function MikroCoordinateSystemDeck() {
  return (
    <DeckFrame>
      <TitleSlide
        eyebrow="Mikro"
        title={
          <>
            How long is <span className="text-fd-primary">this AIS</span>?
          </>
        }
        subtitle="A question you can answer by pointing at the screen, and one that no single data product can answer. Mikro's coordinate system is what closes the gap."
        meta={
          <>
            <span>Arkitekt</span>
            <span aria-hidden>·</span>
            <span>22 slides</span>
            <span aria-hidden>·</span>
            <span>~18 min</span>
          </>
        }
      />

      <DeckSlide
        eyebrow="The question"
        title="You point at it and ask"
        lead="An axon initial segment, on screen, in front of you. The only thing you want is a number."
        notes="Stay on the biology. Do not mention a single schema type yet."
      >
        <div className="flex flex-1 items-center">
          <Figure>
            <AisQuestionFigure />
          </Figure>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The problem"
        title="The number is three analysis steps away"
        lead="It is not in the pixels. Nothing you are looking at knows it. It has to be produced, and by the usual route it ends up somewhere else entirely."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Figure>
            <SpreadsheetFigure />
          </Figure>
          <Caption>
            Segment the image, measure the mask, export the measurements. The
            answer now lives in a spreadsheet in a folder, and the only thing
            connecting row 42 back to the pixels on your screen is you
            remembering which run this was.
          </Caption>
        </div>
      </DeckSlide>

      <SectionSlide title="Can we do better?" />

      <DeckSlide
        eyebrow="The wish"
        title="Wouldn't it be nice if we could just get the information like that?"
        lead="Same gesture as before. You point, and the number is simply there — no export, no folder, no remembering which run this was."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Figure>
            <HoverAnswerFigure />
          </Figure>
          <Caption>
            Point at a segment, read its length. That is the entire interaction
            we want: the question answered where it was asked, while you are
            still looking at the thing you asked about.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Introducing"
        title={
          <>
            Spatial <span className="text-fd-primary">Query</span>
          </>
        }
        lead="Asking the data a question through a place, rather than through a filename. You hand it a point in some space; it hands back everything that lives there."
      >
        <div className="grid flex-1 grid-cols-3 content-center gap-4">
          <Panel title="you give it a place">
            <span className="text-[18px] leading-snug">
              A coordinate in whatever space you happen to be looking at — a
              pixel in a tile, a point on the slide, a spot in the atlas.
            </span>
          </Panel>
          <Panel title="it walks the graph" tone="primary">
            <span className="text-[18px] leading-snug">
              Mikro knows how those places relate, so it can carry your point
              from where you clicked to wherever the answer is kept.
            </span>
          </Panel>
          <Panel title="you get what is there">
            <span className="text-[18px] leading-snug">
              The mask label, the row of measurements, the annotation — whatever
              has been recorded at that place, in that instant.
            </span>
          </Panel>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Live demo"
        title="Spatial Query, in the viewer"
        lead="The same neuron, the same gesture — this time against real data."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <DemoVideo src="/presentations/mikro/spatial-query-demo.webm" />
          <Caption>
            Every hover is answered locally. Nothing in this recording is a
            round-trip to the server.
          </Caption>
        </div>
      </DeckSlide>

      <SectionSlide
        title="How does that work?"
        lead="The rest of this is the background."
      />

      <DeckSlide
        eyebrow="Background"
        title="A coordinate system is a name and some axes"
        lead="Nothing more: a named frame of reference, whose axes have a type and — sometimes — a unit. A transformation is how you get from one of them into another."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Figure>
            <TransformIntroFigure />
          </Figure>
          <Caption>
            The same point, expressed twice. The pixel grid is left exactly as
            acquired; the transformation carries the point into a space whose
            axes mean micrometers. Neither frame owns the other, and neither
            stores the other&rsquo;s numbers.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Background"
        title="Why that is worth the trouble"
        lead="Because transformations compose. Translate a point once and you can keep translating it — stepping from where you are to wherever the answer happens to live."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Figure>
            <ComposeFigure />
          </Figure>
          <Caption>
            A pixel in a mask reaches the tile it was segmented from, the slide
            that tile was placed on, and the atlas the slide was registered
            into. Every hop is one recorded fact; the walk is what makes a
            spatial query possible at all.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Background"
        title="Why this is hard to keep in a database"
        lead="The naive schema — a position column, a world matrix on each image — works right up until the day something changes."
      >
        <div className="grid flex-1 grid-cols-3 content-center gap-4">
          <Panel title="updates">
            <span className="text-[18px] leading-snug">
              Recalibrate the objective and every precomputed position is wrong.
              You now have to find them all, and you will not.
            </span>
          </Panel>
          <Panel title="conflicting information">
            <span className="text-[18px] leading-snug">
              The stage says one thing, the registration says another. Both are
              real measurements. A single position column has to pick a winner.
            </span>
          </Panel>
          <Panel title="no one answer">
            <span className="text-[18px] leading-snug">
              The same tile is somewhere on the slide and somewhere in the
              atlas. &ldquo;Where is it?&rdquo; has no answer until you say
              relative to what.
            </span>
          </Panel>
        </div>
        <Caption className="mt-4">
          Every one of these is the same mistake: a derived number stored as if
          it were a fact.
        </Caption>
      </DeckSlide>

      <DeckSlide
        eyebrow="Background"
        title="So model it as a graph"
        lead="Keep the facts, drop the answers. Places become nodes, the relations between them become edges, and every question is a walk."
      >
        <div className="grid flex-1 grid-cols-2 content-center gap-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card/60 p-7">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">
              nodes
            </span>
            <span className="text-[21px] leading-snug">
              Coordinate systems. A camera grid, a slide, a scene, a table&rsquo;s
              row index — anything you can express a position in.
            </span>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-fd-primary/35 bg-fd-primary/5 p-7">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-fd-primary">
              edges
            </span>
            <span className="text-[21px] leading-snug">
              Transformations. Directed, versioned, and each one recorded
              exactly once — so correcting a fact is editing one row.
            </span>
          </div>
        </div>
        <Caption className="mt-4">
          Conflicting registrations stop being a conflict: they are two edges,
          and the client picks the path it trusts.
        </Caption>
      </DeckSlide>

      <DeckSlide
        eyebrow="Background"
        title="The graph, in Mikro"
        lead="Reduced to almost nothing — this is the whole model, and the AIS question is a walk across it."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Figure className="max-w-[720px]">
            <GraphFigure />
          </Figure>
          <Caption>
            Nothing here is a copy of anything else. The pixel size is on one
            edge. The registration is on another. Neither is duplicated into the
            image metadata, so neither can drift out of sync with it.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Why it helps"
        title="An array stops having to be a picture"
        lead="Once a space is just typed axes, nothing forces an array to be spatial. An image is a space × a space. A volume is one more of those. Say what the axes are and the model follows."
      >
        <div className="flex flex-1 flex-col justify-center gap-2.5">
          <Signature
            name="image"
            axes={[
              ['SPACE', 'y'],
              ['SPACE', 'x'],
            ]}
          />
          <Signature
            name="volume"
            axes={[
              ['SPACE', 'z'],
              ['SPACE', 'y'],
              ['SPACE', 'x'],
            ]}
          />
          <Signature
            name="timelapse"
            axes={[
              ['TIME', 't'],
              ['SPACE', 'y'],
              ['SPACE', 'x'],
            ]}
          />
          <Signature
            name="spectral stack"
            axes={[
              ['CHANNEL', 'c'],
              ['SPACE', 'y'],
              ['SPACE', 'x'],
            ]}
            note="a channel axis is not a spatial one, and never pretended to be"
          />
          <Caption className="mt-1">
            Still no units anywhere — these are the array&rsquo;s own axes. What
            they mean in micrometers or seconds is what an edge adds.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Why it helps"
        title="And FLIM comes out for free"
        lead="A photon arrival histogram is not a special data product. It is a second time axis — microtime — measured in nanoseconds instead of seconds."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Signature
            tone="primary"
            name="FLIM stack"
            axes={[
              ['TIME', 't'],
              ['TIME', 'τ'],
              ['SPACE', 'y'],
              ['SPACE', 'x'],
            ]}
            note="macrotime and microtime, side by side"
          />
          <Columns
            left={
              <Panel title="no new model">
                Two TIME axes on one array is already legal. Nothing in the
                schema had to learn what fluorescence lifetime is.
              </Panel>
            }
            right={
              <Panel title="and it calibrates the same way" tone="primary">
                The bin index <Term>τ</Term> becomes nanoseconds through a{' '}
                <Term>SCALE</Term> edge — the same kind of edge that turns
                pixels into micrometers.
              </Panel>
            }
          />
          <Caption>
            The general case keeps paying out: anything you can name as an axis
            — angle, illumination, phase, k — arrives with transformations and
            spatial queries already working on it.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The objection"
        title="Hold on — that sounds like a lot of work"
        lead="If every step needs an edge, am I the one who has to write them? Do I have to put an affine into this every time I crop something?"
      >
        <div className="grid flex-1 grid-cols-2 content-center gap-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card/60 p-7">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">
              what it looks like you signed up for
            </span>
            <div className="flex flex-col gap-1.5 font-mono text-[17px] text-fd-muted-foreground">
              <span>affine matrices, by hand</span>
              <span>a version bump, remembered</span>
              <span>a validity, chosen honestly</span>
              <span>an axis map, per crop</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[26px] font-semibold leading-tight tracking-tight">
              Nobody is going to do that. A model that depends on people
              volunteering bookkeeping is a model that is wrong by Tuesday.
            </span>
          </div>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The answer"
        title="No — the app tells us what it did"
        lead="You do not describe the transformation. The code that performed it does, because it is the only thing that actually knows."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <div className="grid grid-cols-3 items-stretch gap-4">
            {[
              ['You call an app', 'crop this, downsample it, segment it'],
              [
                'It reports what it did',
                'the algorithm knows it halved the grid',
              ],
              ['Mikro records the edge', 'SCALE v1, INFERRED, and it is done'],
            ].map(([step, detail], i) => (
              <div
                key={step}
                className={
                  i === 2
                    ? 'flex flex-col gap-2 rounded-xl border border-fd-primary/40 bg-fd-primary/5 p-5'
                    : 'flex flex-col gap-2 rounded-xl border border-fd-border bg-fd-card/60 p-5'
                }
              >
                <span className="font-mono text-[13px] font-bold text-fd-primary">
                  {`0${i + 1}`}
                </span>
                <span className="text-[21px] font-semibold leading-tight tracking-tight">
                  {step}
                </span>
                <span className="text-[16px] leading-snug text-fd-muted-foreground">
                  {detail}
                </span>
              </div>
            ))}
          </div>
          <Panel tone="primary">
            The graph is a by-product of running your analysis, not a second job
            beside it. The affines you were dreading are the ones the code
            already computed.
          </Panel>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Live demo"
        title="Demo time"
        lead="Run a step, watch the edge appear."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <DemoVideo src="/presentations/mikro/provenance-demo.webm" />
          <Caption>
            Nothing in this recording was annotated by hand. The chain is what
            the app reported on its way out.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Records"
        title="How long is that AIS?"
        lead="One last edge does the crossing: FIELD says a mask pixel's value is a row number. Everything after that is a recipe the graph hands your viewer."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Figure>
            <AttributePlanFigure />
          </Figure>
          <Caption>
            <Term>attributePlans(system)</Term> returns one plan per measurement
            table reachable from your space. Each plan is a{' '}
            <Term>SampleStep</Term> — read the mask pixel, get a label and carry
            the timepoint through — followed by a <Term>LookupStep</Term>. It
            takes no coordinate, so it is fetched once and then run locally on
            every mouse move. That is the hover from slide five, closed.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Recap"
        title="The whole model in four lines"
        lead="If you remember nothing else."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          {[
            'A coordinate system is a name and some axes. Units are optional and meaningful when absent.',
            'A transformation is a directed edge between two of them, stored once, versioned, and honest about its provenance.',
            'Data lives in exactly one space. Paths between spaces are walked by the client, never pre-composed by the server.',
            'One FIELD edge crosses from geometry into measurements, so "how long is this AIS?" is a walk along the graph rather than a matter of trusting a filename.',
          ].map((line, i) => (
            <div
              key={line}
              className="flex items-start gap-4 rounded-xl border border-fd-primary/25 bg-fd-primary/5 px-5 py-4"
            >
              <span className="font-mono text-[15px] font-bold text-fd-primary">
                {`0${i + 1}`}
              </span>
              <span className="text-[19px] leading-snug">{line}</span>
            </div>
          ))}
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Limitations"
        title="Where this does not reach — yet"
        lead="The model is honest about what it cannot express, which is the only reason it is worth trusting about the rest."
      >
        <div className="grid flex-1 grid-cols-2 content-center gap-4">
          <Panel title="only what reports back">
            <span className="text-[18px] leading-snug">
              A step run outside the platform leaves no edge. The honest record
              is a gap — and a gap is still a gap, not a bridge.
            </span>
          </Panel>
          <Panel title="linear maps only">
            <span className="text-[18px] leading-snug">
              Scale, translation, rotation, affine. A non-rigid warp — tissue
              that deformed between rounds — has no kind of its own yet.
            </span>
          </Panel>
          <Panel title="nothing arbitrates">
            <span className="text-[18px] leading-snug">
              Two paths to the same space can disagree. Validity and version
              help you choose; the choosing is still yours.
            </span>
          </Panel>
          <Panel title="the world outside flattens it">
            <span className="text-[18px] leading-snug">
              Export to a standard format and the graph collapses back into one
              baked-in matrix. Outside Mikro, you are back to one answer.
            </span>
          </Panel>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Next"
        title="Let's go explore"
        lead="The graph is queryable, and so are the plans."
      >
        <Columns
          left={
            <CodeBlock>{`query {
  coordinateSystem(id: $id) {
    name
    axes { name type unit }
    epoch
    outgoing {
      kind validity version
      target { name }
    }
  }
}`}</CodeBlock>
          }
          right={
            <>
              <Panel title="then">
                <span className="text-[18px] leading-snug">
                  Ask a space for its <Term>attributePlans</Term> and you have
                  everything a viewer needs to answer &ldquo;what is this, and
                  how big?&rdquo; without touching the server again.
                </span>
              </Panel>
              <Caption>
                The full write-up, including the axis types and every edge kind,
                lives in the Coordinate Systems docs.
              </Caption>
            </>
          }
        />
      </DeckSlide>
    </DeckFrame>
  );
}
