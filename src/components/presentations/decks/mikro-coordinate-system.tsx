'use client';

/* "The Mikro coordinate system" — how Mikro answers "where is this pixel?" and
   "what cell is this?".

   Spaces are nodes, transformations are directed edges, and every spatial fact
   is stored exactly once. This deck tracks
   content/docs/design/services/mikro/coordinate-systems.mdx; keep the two in
   step when either moves. */

import type { ReactNode } from 'react';
import Link from 'next/link';
import { DeckFrame } from '../deck-frame';
import {
  Bullets,
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
  ArrayFigure,
  AttributePlanFigure,
  EpochFigure,
  GraphFigure,
  HoverAnswerFigure,
  LineageFigure,
  PathFigure,
  PixelToPhysicalFigure,
  SpreadsheetFigure,
} from './mikro-coordinate-figures';

/** GraphQL / SQL block sized for the slide canvas. */
function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="overflow-hidden rounded-xl border border-fd-border bg-fd-muted/60 p-4 font-mono text-[15px] leading-[1.55] text-fd-foreground">
      {children}
    </pre>
  );
}

/** The axis table used on the "what is a coordinate system" slide. */
function AxisTable({
  name,
  rows,
  tone = 'default',
}: {
  name: string;
  rows: [string, string, string][];
  tone?: 'default' | 'primary';
}) {
  return (
    <div
      className={
        tone === 'primary'
          ? 'flex flex-col gap-2 rounded-xl border border-fd-primary/40 bg-fd-primary/5 p-4'
          : 'flex flex-col gap-2 rounded-xl border border-fd-border bg-fd-card/60 p-4'
      }
    >
      <span className="font-mono text-[15px] font-bold">{name}</span>
      <table className="w-full border-separate border-spacing-y-1 text-left font-mono text-[15px]">
        <thead>
          <tr className="text-[12px] uppercase tracking-[0.12em] text-fd-muted-foreground">
            <th className="font-medium">axis</th>
            <th className="font-medium">type</th>
            <th className="font-medium">unit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([axis, type, unit]) => (
            <tr key={axis}>
              <td className="text-fd-foreground">{axis}</td>
              <td className="text-fd-muted-foreground">{type}</td>
              <td className={unit === '—' ? 'text-fd-muted-foreground' : 'text-fd-primary'}>
                {unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const EDGE_KINDS: [string, string][] = [
  ['IDENTITY', 'the same grid, renamed'],
  ['SCALE', 'pyramid levels, pixel size'],
  ['TRANSLATION', 'an offset, nothing else'],
  ['AFFINE', 'registration and calibration'],
  ['ROTATION', 'a sample mounted askew'],
  ['MAP_AXIS', 'reorder or rename axes'],
  ['SEQUENCE', 'several edges, applied in order'],
  ['BY_DIMENSION', 'a different rule per axis'],
  ['FIELD', 'a label mask into a table index'],
  ['BIJECTION', 'one-to-one, both directions'],
  ['UNMAPPABLE', 'no correspondence exists, and that is recorded'],
];

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
            <span>25 slides</span>
            <span aria-hidden>·</span>
            <span>~15 min</span>
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
        eyebrow="The Mikro way"
        title="Ask by hovering"
        lead="Same gesture. The answer arrives in place, because the connection between the pixels and the number was never allowed to go missing."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Figure>
            <HoverAnswerFigure />
          </Figure>
          <Caption>
            Nothing was recomputed and nothing was looked up by filename. The
            viewer already had everything it needed to go from the pixel under
            your cursor to the row that describes it.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="How it works"
        title="Keep the transform from every step"
        lead="Each processing step records how it relates to what it came from — as its own edge, with a kind and a version. The chain is what the viewer walks."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Figure>
            <LineageFigure />
          </Figure>
          <Caption>
            Even a step that destroyed the geometry is recorded, as{' '}
            <Term>UNMAPPABLE</Term> — the alternative is lying with an identity.
            Placement and the crossing into records hang off the chain rather
            than sitting in it; a <Term>FIELD</Term> edge is pointedly not a
            derivation.{' '}
            <Link
              href="/docs/design/services/mikro/coordinate-systems#transformations-maps-between-places"
              className="text-fd-primary underline underline-offset-2"
            >
              Transformations, in the docs
            </Link>
          </Caption>
        </div>
      </DeckSlide>

      <SectionSlide
        index="01"
        title="Spaces"
        lead="The nodes: places where data lives."
      />

      <DeckSlide
        eyebrow="Spaces"
        title="A pixel index is not a location"
        lead="An array knows its own indices. That is genuinely all it knows."
      >
        <Columns
          ratio="narrow-left"
          left={
            <Bullets
              items={[
                <>Indices are structural: they address memory, not the world.</>,
                <>
                  Two tiles of the same slide have no idea whether they overlap.
                </>,
                <>
                  Bake micrometers into the pixels and you have destroyed the
                  original and still cannot re-register it later.
                </>,
              ]}
            />
          }
          right={<ArrayFigure />}
        />
      </DeckSlide>

      <DeckSlide
        eyebrow="Spaces"
        title="Units are an interpretation, not a property"
        lead="Mikro leaves the grid alone and stores the interpretation next to it, as one thing you can point at."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Figure>
            <PixelToPhysicalFigure />
          </Figure>
          <Caption>
            The pixel grid stays exactly as acquired, with unitless axes. A single
            transformation says what those pixels mean in a space whose axes carry
            micrometers. Change your mind about the calibration and you edit the
            edge, not the image.
          </Caption>
        </div>
      </DeckSlide>



      <DeckSlide
        eyebrow="Spaces"
        title="A coordinate system is a name and its axes"
        lead="No matrices, no parent, no special cases. An axis has a name, a type and — sometimes — a unit."
      >
        <Columns
          left={
            <AxisTable
              name="camera pixels"
              rows={[
                ['t', 'TIME', '—'],
                ['z', 'SPACE', '—'],
                ['y', 'SPACE', '—'],
                ['x', 'SPACE', '—'],
              ]}
            />
          }
          right={
            <AxisTable
              tone="primary"
              name="slide"
              rows={[
                ['t', 'TIME', 's'],
                ['z', 'SPACE', 'um'],
                ['y', 'SPACE', 'um'],
                ['x', 'SPACE', 'um'],
              ]}
            />
          }
        />
        <Caption className="mt-4">
          Same shape, different claims. A missing unit is the honest state of a
          raw pixel grid — not a gap to be filled in with a guess.
        </Caption>
      </DeckSlide>

      <DeckSlide
        eyebrow="Spaces"
        title="Data lives in exactly one space"
        lead="Residence, not hierarchy. Every resident carries a single reference to the space it is expressed in."
      >
        <Columns
          ratio="narrow-right"
          left={
            <div className="grid grid-cols-2 gap-3">
              {[
                'datasets',
                'pyramid levels',
                'lenses and crops',
                'measurement tables',
                'meshes',
                'annotation collections',
              ].map((resident) => (
                <div
                  key={resident}
                  className="rounded-xl border border-fd-border bg-fd-card/60 px-4 py-3 text-[18px]"
                >
                  {resident}
                </div>
              ))}
            </div>
          }
          right={
            <>
              <Panel title="the useful consequence" tone="primary">
                A space with no residents at all is still a perfectly good space —
                a slide, a scene, an atlas. A pure frame of reference that things
                point into.
              </Panel>
              <Caption>
                This is why there is no longer a <Term>kind</Term> enum telling you
                what a space is &ldquo;for&rdquo;. What lives in it says that.
              </Caption>
            </>
          }
        />
      </DeckSlide>

      <SectionSlide
        index="02"
        title="Transformations"
        lead="The edges: maps between places."
      />

      <DeckSlide
        eyebrow="Transformations"
        title="Every spatial fact is one node or one edge"
        lead="Coordinate systems are nodes, transformations are directed edges, and each fact is stored exactly once."
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
        eyebrow="Transformations"
        title="Eleven kinds of edge"
        lead="Enough to describe real acquisitions — including the case where no mapping exists."
      >
        <div className="grid flex-1 grid-cols-3 content-center gap-2.5 text-[17px]">
          {EDGE_KINDS.map(([kind, what]) => (
            <div
              key={kind}
              className={
                kind === 'UNMAPPABLE'
                  ? 'flex flex-col gap-1 rounded-xl border border-fd-primary/40 bg-fd-primary/5 px-4 py-2.5'
                  : 'flex flex-col gap-1 rounded-xl border border-fd-border bg-fd-card/60 px-4 py-2.5'
              }
            >
              <span className="font-mono text-[13px] font-bold text-fd-primary">
                {kind}
              </span>
              <span className="text-[15px] leading-snug text-fd-muted-foreground">
                {what}
              </span>
            </div>
          ))}
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Transformations"
        title="An edge says how much to trust it"
        lead="A registration you eyeballed and one you validated against fiducials are not the same claim, and the schema refuses to pretend otherwise."
      >
        <div className="grid flex-1 grid-cols-3 content-center gap-4">
          <Panel title="validity">
            <div className="flex flex-col gap-1.5 font-mono text-[17px]">
              <span>MANUAL</span>
              <span>INFERRED</span>
              <span className="text-fd-primary">VALIDATED</span>
            </div>
          </Panel>
          <Panel title="version">
            <span className="text-[18px] leading-snug">
              Bumped every time the edge is refined. Consumers can tell whether
              what they cached still holds.
            </span>
          </Panel>
          <Panel title="value relation">
            <div className="flex flex-col gap-1.5 font-mono text-[17px]">
              <span>IDENTICAL</span>
              <span>TRANSFORMED</span>
              <span>CATEGORIZED</span>
            </div>
          </Panel>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Transformations"
        title="Edges are facts, paths are queries"
        lead="The server never composes matrices down to a single world answer. It stores the edges; the client walks the ones it needs."
      >
        <Columns
          ratio="narrow-right"
          left={<PathFigure />}
          right={
            <Bullets
              stagger
              items={[
                <>
                  The same dataset can sit in two scenes under two different
                  registrations, with neither one privileged.
                </>,
                <>
                  A viewer asks for the path it wants — <Term>pathToWorld</Term>{' '}
                  on a layer — and composes it locally.
                </>,
                <>
                  There is no cached &ldquo;global position&rdquo; field to
                  invalidate, because there is no global position field.
                </>,
              ]}
            />
          }
        />
      </DeckSlide>

      <DeckSlide
        eyebrow="Transformations"
        title="Refine the calibration, not the data"
        lead="This is the payoff for keeping the grid unitless."
      >
        <div className="flex flex-1 flex-col justify-center gap-5">
          <div className="grid grid-cols-3 items-center gap-4">
            {[
              ['You improve one edge', 'a better affine from a fiducial slide'],
              ['Its version bumps', 'MANUAL v1 becomes VALIDATED v2'],
              ['The tile moves', 'every path through the edge is corrected'],
            ].map(([step, detail], i) => (
              <div
                key={step}
                className="flex flex-col gap-2 rounded-xl border border-fd-border bg-fd-card/60 p-5"
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
            The tile moves; the pixels do not. Your annotations, masks and crops
            were never expressed in micrometers, so there is nothing for them to
            re-derive.
          </Panel>
        </div>
      </DeckSlide>

      <SectionSlide
        index="03"
        title="From pixels to records"
        lead="Back to the AIS: crossing from the mask into the measurements."
      />

      <DeckSlide
        eyebrow="Records"
        title="FIELD is the one crossing"
        lead="Geometry and record-land meet in exactly one place: the edge from a label mask into a table's index space."
      >
        <Columns
          left={
            <>
              <Panel title="the FIELD edge" tone="primary">
                A label mask is a lookup. Pixel value 42 means &ldquo;row 42 of
                that table&rdquo;. That is a transformation like any other — it
                just lands somewhere without micrometers.
              </Panel>
              <Caption>
                Which is why it is an edge, and why <Term>CATEGORIZED</Term>{' '}
                exists as a value relation.
              </Caption>
            </>
          }
          right={
            <>
              <Panel title="what is not an edge">
                Table-to-table links. A column that references another table is a
                foreign key on the column —{' '}
                <Term>TableColumn.references</Term> — not a coordinate
                transformation.
              </Panel>
              <Caption>
                One crossing from geometry into records keeps the graph a graph
                about space.
              </Caption>
            </>
          }
        />
      </DeckSlide>

      <DeckSlide
        eyebrow="Records"
        title="How long is that AIS?"
        lead="An attribute plan is the recipe for answering it, computed at query time from the graph."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Figure>
            <AttributePlanFigure />
          </Figure>
          <Caption>
            <Term>attributePlans(system)</Term> returns one plan per measurement
            table reachable from your space. Each plan is a{' '}
            <Term>SampleStep</Term> — read the mask pixel, get a label and carry
            the timepoint through — followed by a <Term>LookupStep</Term>.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Records"
        title="The plan takes no coordinate"
        lead="That is the whole trick: fetch it once when the layer loads, then run it locally on every mouse move."
      >
        <Columns
          ratio="narrow-right"
          left={
            <CodeBlock>{`-- the LookupStep, parameterised
SELECT "length_um", "mean_intensity"
FROM   read_parquet('ais.parquet')
WHERE  "t" = ?
  AND  "i" = ?`}</CodeBlock>
          }
          right={
            <Bullets
              stagger
              items={[
                <>Zero round-trips per hover. DuckDB runs it against parquet.</>,
                <>
                  Two tables measured from one mask means two plans, not two
                  queries you have to write.
                </>,
                <>
                  A plan goes stale when the <Term>FIELD</Term> edge or any step
                  on the path is version-bumped — and it can tell you so.
                </>,
              ]}
            />
          }
        />
      </DeckSlide>

      <DeckSlide
        eyebrow="Time"
        title="Time is just another axis"
        lead="A TIME axis with no unit is a frame counter. Give the space an epoch and the same axis becomes wall-clock time."
      >
        <div className="flex flex-1 flex-col justify-center gap-4">
          <Figure className="max-w-[700px]">
            <EpochFigure />
          </Figure>
          <Caption>
            No separate era model, no timestamp duplicated onto every frame. The
            anchor lives on the coordinate system, next to the axes it anchors.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="One fact, stored once"
        title="Why the placement is not on the image"
        lead="The obvious design is to hang an affine matrix off every image. It is also the one that quietly goes wrong."
      >
        <div className="grid flex-1 grid-cols-2 content-center gap-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card/60 p-7">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">
              placement copied onto each image
            </span>
            <span className="text-[21px] leading-snug">
              Crop it, downsample it, hand it to a colleague, and now several
              copies of the same fact exist. They can disagree, and eventually
              they do.
            </span>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-fd-primary/35 bg-fd-primary/5 p-7">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-fd-primary">
              placement stored once, as an edge
            </span>
            <span className="text-[21px] leading-snug">
              One edge, one version, one place to correct it. Everything that
              reaches the slide through that edge is corrected with it.
            </span>
          </div>
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
        eyebrow="Next"
        title="Go and poke at it"
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
