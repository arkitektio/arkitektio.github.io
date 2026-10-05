'use client';

import { useState, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';
import { Check, SlidersHorizontal, X } from 'lucide-react';
import { flow } from '@/components/diagram';

/* The figures of the Mikro lineage page. Three of them, one story:

   • MikroLineage: a tile, the crop cut from it, its deconvolution, the mask,
     a projection and a measurement table, wired by the edges each result
     wrote back to its source. Selecting a dataset lights its chain back to
     the slide (left) and shows where it lands in a scene (right). "Refine
     registration" bumps the single tile → slide edge and everything derived
     moves with it.

   • MikroSpaceValues: one card per operation, answering the two questions an
     edge answers separately: what happened to space, what happened to values.

   • MikroPlacementTrust: a placement is as well known as its weakest
     registration, and which measurements survive depends on the kind of map.

   Edges are coloured by their *spatial* kind only; the value relation is a
   separate label, because the two are independent. Cells are the ones the
   coordinate-system figure uses, so both pages read as one dataset. Drawn
   against the fd-* / --orbit-* theme tokens. */

// ── edge palette (one hue per spatial kind, all relative to the brand hue so
//    they stay 70° apart whatever the site is tinted to) ──────────────────────────────────
const AFFINE = flow('var(--brand-hue)');
const TRANSLATION = flow('calc(var(--brand-hue) + 290)');
const IDENTITY = flow('calc(var(--brand-hue) + 150)');
const BYDIM = flow('calc(var(--brand-hue) + 80)');
const FIELD = flow('calc(var(--brand-hue) + 220)');

const MONO = 'var(--font-mono, monospace)';
const MUTED = 'var(--color-fd-muted-foreground)';
const FG = 'var(--color-fd-foreground)';
const BORDER = 'var(--color-fd-border)';
const HOT = 'var(--color-fd-primary)';
const INK = '#0b0b14';

// ── the cells (shared with the coordinate-system figure) ─────────────────────
// Paths live in the tile's local 120×104 pixel grid.
type Cell = { i: number; hue: number; d: string; cx: number; cy: number; area: number; mean: string };
const CELLS: Cell[] = [
  { i: 3, hue: 150, d: 'M 20 34 C 20 22, 44 20, 46 32 C 48 44, 36 50, 28 47 C 21 44, 19 40, 20 34 Z', cx: 32, cy: 35, area: 152, mean: '0.41' },
  { i: 7, hue: 55, d: 'M 58 46 C 56 28, 82 22, 92 36 C 100 48, 90 62, 74 62 C 63 62, 59 56, 58 46 Z', cx: 76, cy: 44, area: 214, mean: '0.83' },
  { i: 12, hue: 305, d: 'M 34 78 C 34 68, 52 66, 56 74 C 60 82, 50 90, 42 88 C 36 86, 34 84, 34 78 Z', cx: 45, cy: 78, area: 98, mean: '0.57' },
];
const cellFill = (hue: number) => `oklch(0.75 0.16 ${hue})`;

// The crop, in tile pixels: every derived dataset below lives on this window.
const CROP = { x: 24, y: 18, w: 80, h: 76 };
const CROP_VB = `${CROP.x} ${CROP.y} ${CROP.w} ${CROP.h}`;

type Look = 'raw' | 'sharp' | 'label';

/** The cells, drawn as the raw image shows them, as a deconvolution does, or as a label mask. */
function CellsArt({ look }: { look: Look }) {
  if (look === 'label') {
    return (
      <>
        {CELLS.map((c) => (
          <g key={c.i}>
            <path d={c.d} fill={cellFill(c.hue)} fillOpacity="0.9" />
            <text x={c.cx} y={c.cy + 3} fontFamily={MONO} fontSize="9" fontWeight="700" textAnchor="middle" fill={INK}>
              {c.i}
            </text>
          </g>
        ))}
      </>
    );
  }
  const sharp = look === 'sharp';
  return (
    <g style={sharp ? undefined : { filter: 'blur(1.3px)' }}>
      {CELLS.map((c) => (
        <path key={c.i} d={c.d} fill={cellFill(c.hue)} fillOpacity={sharp ? 0.5 : 0.3} stroke={cellFill(c.hue)} strokeWidth={sharp ? 1.5 : 1.2} />
      ))}
      {CELLS.map((c) => (
        <circle key={c.i} cx={c.cx} cy={c.cy} r={sharp ? 3.2 : 3.8} fill={cellFill(c.hue)} opacity={sharp ? 1 : 0.75} />
      ))}
    </g>
  );
}

// ── shared chrome ────────────────────────────────────────────────────────────
function Frame({ children, caption }: { children: ReactNode; caption: ReactNode }) {
  return (
    <figure className="not-prose my-8">
      <div className="relative isolate overflow-hidden rounded-3xl border border-fd-border bg-[var(--orbit-surface)] px-3 py-5 text-fd-foreground sm:px-5">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[10%] h-[22rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--orbit-grid)_1px,transparent_0)] [background-size:36px_36px]" />
        </div>
        {children}
      </div>
      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function Panel({ label, aside, className, children }: { label: ReactNode; aside?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <div className={`flex flex-col rounded-2xl border border-fd-border bg-fd-background/40 p-3 backdrop-blur ${className ?? ''}`}>
      <div className="mb-2 flex min-h-6 flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-[10px] font-bold leading-tight tracking-[0.16em] text-primary/80">{label}</span>
        {aside}
      </div>
      {children}
    </div>
  );
}

function Legend({ items }: { items: { c: string; t: string; dashed?: boolean }[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-fd-muted-foreground">
      {items.map((l) => (
        <span key={l.t} className="flex items-center gap-2">
          <span className="h-1.5 w-5 rounded-full" style={l.dashed ? { backgroundImage: `repeating-linear-gradient(90deg, ${l.c} 0 4px, transparent 4px 7px)` } : { background: l.c }} /> {l.t}
        </span>
      ))}
    </div>
  );
}

const glow = (on: boolean, c: string) => (on ? { filter: `drop-shadow(0 0 6px ${c})` } : undefined);

function Markers({ defs }: { defs: [string, string][] }) {
  return (
    <defs>
      {defs.map(([id, c]) => (
        <marker key={id} id={id} markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
          <path d="M1.5 1.5 L6.5 4.5 L1.5 7.5" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: c }} />
        </marker>
      ))}
    </defs>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 1 · MikroLineage
// ═════════════════════════════════════════════════════════════════════════════

type NodeId = 'slide' | 'tile' | 'crop' | 'decon' | 'mask' | 'proj' | 'table';
type EdgeId = 'e-affine' | 'e-crop' | 'e-decon' | 'e-seg' | 'e-proj' | 'e-table' | 'e-field';
type SelId = NodeId | EdgeId;

/** The edges a dataset's placement walks, from itself back to the slide. */
const CHAIN: Record<NodeId, EdgeId[]> = {
  slide: [],
  tile: ['e-affine'],
  crop: ['e-crop', 'e-affine'],
  decon: ['e-decon', 'e-crop', 'e-affine'],
  mask: ['e-seg', 'e-decon', 'e-crop', 'e-affine'],
  proj: ['e-proj', 'e-decon', 'e-crop', 'e-affine'],
  table: [],
};

/** Which dataset the scene shows for a selection (an edge shows its result). */
const SHOWN: Record<SelId, NodeId> = {
  slide: 'slide',
  tile: 'tile',
  crop: 'crop',
  decon: 'decon',
  mask: 'mask',
  proj: 'proj',
  table: 'table',
  'e-affine': 'tile',
  'e-crop': 'crop',
  'e-decon': 'decon',
  'e-seg': 'mask',
  'e-proj': 'proj',
  'e-table': 'table',
  'e-field': 'table',
};

const ROUTE: Record<NodeId, { route: string; note: string }> = {
  slide: { route: 'the slide', note: 'the world this scene is drawn in' },
  tile: { route: 'tile → slide', note: '1 registration' },
  crop: { route: 'crop → tile → slide', note: '1 derivation + the tile’s registration' },
  decon: { route: 'deconvolved → crop → tile → slide', note: '2 derivations + the tile’s registration' },
  mask: { route: 'mask → deconvolved → crop → tile → slide', note: '3 derivations + the tile’s registration' },
  proj: { route: 'projection → deconvolved → crop → tile → slide', note: 'placed in y and x, silent about z' },
  table: { route: 'table ⇢ mask · no route', note: 'lineage only: rows show up on hover instead' },
};

type Detail = { title: string; badge: string; badgeColor?: string; body: string };

function lineageDetail(sel: SelId, refined: boolean): Detail {
  switch (sel) {
    case 'slide':
      return { title: 'The slide', badge: 'space · mm', body: 'The shared physical space of this scene. Only the tile was ever registered into it. Select any result to see how it gets here anyway.' };
    case 'tile':
      return { title: '60× tile', badge: 'acquired', body: 'The one dataset in this picture that came from the microscope. It has no source, and it is the only one that carries a registration: its pixel size and stage position.' };
    case 'crop':
      return { title: 'Crop', badge: 'derived', body: 'A new dataset with its own pixel grid, plus one edge saying where in the tile it was cut. It sits on the slide where it was cut from, without a calibration of its own.' };
    case 'decon':
      return { title: 'Deconvolved', badge: 'derived', body: 'Computed on the crop’s grid. Its history is two steps long, and so is its route: through the crop, through the tile, onto the slide.' };
    case 'mask':
      return { title: 'Segmentation mask', badge: 'derived', body: 'Nobody registered this mask. It reaches the slide through the data it was made from, three steps back, and it overlays the raw tile exactly.' };
    case 'proj':
      return { title: 'Maximum projection', badge: 'derived', body: 'Keeps y and x, drops z. It still lines up with the stack from above, and it makes no claim about depth.' };
    case 'table':
      return { title: 'Cell measurements', badge: 'derived · table', body: 'One row per cell. It was made from the mask, so the lineage is recorded, but a row is a cell and a cell is not a point: there is nothing to draw in a scene.' };
    case 'e-affine':
      return refined
        ? { title: 'tile → slide', badge: 'affine · v2 · registration', badgeColor: AFFINE, body: 'Refined and checked. This is the only edge that changed, and the crop, the deconvolution, the mask and the projection all moved with the tile. None of them had a copy to go stale.' }
        : { title: 'tile → slide', badge: 'affine · v1 · registration', badgeColor: AFFINE, body: 'Pixel size and stage position, stored exactly once. This is a registration: a statement about where the tile sits, which can be refined. Try the button above.' };
    case 'e-crop':
      return { title: 'crop → tile', badge: 'translation · values identical', badgeColor: TRANSLATION, body: 'Space: shifted by the crop origin. Values: the same numbers, so histograms and contrast limits from the tile still hold for the crop.' };
    case 'e-decon':
      return { title: 'deconvolved → crop', badge: 'identity · values transformed', badgeColor: IDENTITY, body: 'Space: the same grid, no pixel moved. Values: still intensities, but new numbers, so the contrast you set on the raw crop no longer applies.' };
    case 'e-seg':
      return { title: 'mask → deconvolved', badge: 'identity · values categorized', badgeColor: IDENTITY, body: 'Space: the same grid again. Values: they became labels. Pixel value 7 now means cell number 7, which is why a scene for the mask is set up as a label map.' };
    case 'e-proj':
      return { title: 'projection → deconvolved', badge: 'by-dimension · keeps y, x', badgeColor: BYDIM, body: 'Space: two axes correspond, the third is gone. The edge says exactly that, and nothing about where along z the result sits.' };
    case 'e-table':
      return { title: 'table ⇢ mask', badge: 'unmappable · values transformed', body: 'Lineage without geometry: related, with no point of one mapping to a point of the other. Recording "same place" would be a lie, recording nothing would lose the history.' };
    case 'e-field':
      return { title: 'mask → table', badge: 'field · id → row', badgeColor: FIELD, body: 'The other direction, and a different statement: a mask pixel’s value is a row of this table. This is the edge a viewer follows when you hover a cell. It never places anything.' };
  }
}

export function MikroLineage() {
  const [sel, setSel] = useState<SelId>('mask');
  const [refined, setRefined] = useState(false);

  const pick = (id: SelId) => ({
    role: 'button' as const,
    tabIndex: 0,
    onClick: (e: MouseEvent) => {
      e.stopPropagation();
      setSel(id);
    },
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        setSel(id);
      }
    },
    style: { cursor: 'pointer', outline: 'none' },
  });

  const shown = SHOWN[sel];
  const chain = sel in CHAIN ? CHAIN[sel as NodeId] : [];
  const hot = (id: SelId) => sel === id;
  const lit = (id: EdgeId) => sel === id || chain.includes(id);
  const detail = lineageDetail(sel, refined);
  const route = ROUTE[shown];

  return (
    <Frame
      caption={
        <>
          <strong>One edge, two jobs.</strong>{' '}
          Every arrow points from a result to what it was made
          from. Select a dataset to light up its history, which is also its route onto the slide, and
          refine the tile&apos;s registration to watch everything derived from it follow.
        </>
      }
    >
      <Panel label="THE LINEAGE · WHAT WAS MADE FROM WHAT">
        {/* on a phone the graph keeps a readable size and scrolls sideways */}
        <div className="overflow-x-auto">
          <div className="min-w-[32rem]">
            <LineageGraph pick={pick} hot={hot} lit={lit} refined={refined} />
          </div>
        </div>
      </Panel>

      <div className="mt-4 grid gap-4 md:grid-cols-5">
        <Panel
          className="md:col-span-2"
          label="THE SCENE"
          aside={
            <button
              type="button"
              onClick={() => {
                setRefined((r) => !r);
                setSel((s) => (s === 'slide' || s === 'table' || s === 'e-table' || s === 'e-field' ? 'mask' : s));
              }}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 font-mono text-[10px] leading-none transition-colors ${
                refined ? 'border-primary/50 bg-primary/15 text-primary' : 'border-fd-border bg-fd-muted/40 text-fd-muted-foreground hover:text-fd-foreground'
              }`}
            >
              <SlidersHorizontal className="size-3" />
              {refined ? 'registration v2' : 'refine registration'}
            </button>
          }
        >
          <LineageScene shown={shown} refined={refined} />
        </Panel>

        <div className="flex flex-col gap-4 md:col-span-3">
          <div key={shown} className="animate-pop-in rounded-2xl border border-fd-border bg-fd-muted/30 px-4 py-3 font-mono text-[11.5px] leading-snug backdrop-blur">
            <div className="mb-1 text-[9.5px] tracking-[0.14em] text-primary/80">WHERE IT LANDS · ROUTE TO THE SLIDE</div>
            <div className="text-fd-foreground">{route.route}</div>
            <div className="mt-1 text-fd-muted-foreground">{route.note}</div>
          </div>

          <div key={`${sel}-${refined}`} className="animate-pop-in flex flex-1 flex-col items-start gap-2 rounded-2xl border border-fd-border bg-fd-muted/30 px-4 py-3 backdrop-blur">
            <span
              className="rounded-full border px-2 py-1 font-mono text-[10px] uppercase leading-none tracking-wide"
              style={{ borderColor: detail.badgeColor ?? BORDER, color: detail.badgeColor ?? MUTED }}
            >
              {detail.badge}
            </span>
            <p className="text-[13px] leading-relaxed text-fd-foreground/90">
              <strong className="font-semibold text-fd-foreground">{detail.title}.</strong> {detail.body}
            </p>
          </div>
        </div>
      </div>

      <Legend
        items={[
          { c: AFFINE, t: 'affine · a registration' },
          { c: TRANSLATION, t: 'translation · a crop' },
          { c: IDENTITY, t: 'identity · same grid' },
          { c: BYDIM, t: 'by-dimension · axes dropped' },
          { c: MUTED, t: 'unmappable · lineage only', dashed: true },
          { c: FIELD, t: 'field · pixel value into a row' },
        ]}
      />
    </Frame>
  );
}

type PickFn = (id: SelId) => Record<string, unknown>;

function LineageGraph({ pick, hot, lit, refined }: { pick: PickFn; hot: (id: SelId) => boolean; lit: (id: EdgeId) => boolean; refined: boolean }) {
  const W = 92, H = 84;
  const R1 = 110, R2 = 252;
  const X = { tile: 14, crop: 142, decon: 270, mask: 398 };
  const SL = { x: 14, y: 16, w: 492, h: 34 };
  const midY = R1 + H / 2 + 6;

  const chip = (id: NodeId, x: number, y: number, title: string, thumb: ReactNode) => (
    <g {...pick(id)} aria-label={title}>
      <rect x={x} y={y} width={W} height={H} rx={9} fill="var(--color-fd-muted)" fillOpacity={0.45} stroke={hot(id) ? HOT : BORDER} strokeWidth={hot(id) ? 2 : 1} style={glow(hot(id), HOT)} />
      <text x={x + 7} y={y + 13} fontFamily={MONO} fontSize="9" fontWeight="700" fill={hot(id) ? HOT : FG}>
        {title}
      </text>
      <rect x={x + 6} y={y + 19} width={W - 12} height={H - 25} rx={5} fill={INK} />
      {thumb}
    </g>
  );
  const thumbBox = (x: number, y: number) => ({ x: x + 6, y: y + 19, width: W - 12, height: H - 25 });

  /** A horizontal derivation edge between two chips of the first row, pointing at the source. */
  const hEdge = (id: EdgeId, child: number, source: number, color: string, marker: string, kind: string, values: string) => {
    const cx = (child + source + W) / 2;
    const on = lit(id);
    return (
      <g {...pick(id)} aria-label={`${kind} edge, values ${values}`}>
        <rect x={source + W} y={R1 - 24} width={child - source - W} height={H + 24} fill="transparent" />
        <line x1={child - 3} y1={midY} x2={source + W + 7} y2={midY} strokeWidth={on ? 2.8 : 2.2} markerEnd={`url(#${marker})`} style={{ stroke: color, opacity: on ? 1 : 0.6, ...glow(on, color) }} />
        <text x={cx} y={R1 - 16} fontFamily={MONO} fontSize="9.5" textAnchor="middle" style={{ fill: color }}>
          {kind}
        </text>
        <text x={cx} y={R1 - 5} fontFamily={MONO} fontSize="8.5" textAnchor="middle" fill={MUTED}>
          values {values}
        </text>
      </g>
    );
  };

  return (
    <svg viewBox="0 0 520 346" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      <Markers
        defs={[
          ['lnAffine', AFFINE],
          ['lnTranslation', TRANSLATION],
          ['lnIdentity', IDENTITY],
          ['lnBydim', BYDIM],
          ['lnField', FIELD],
          ['lnMuted', MUTED],
        ]}
      />

      {/* the slide: the one shared physical space */}
      <g {...pick('slide')} aria-label="The slide, a shared space in millimetres">
        <rect x={SL.x} y={SL.y} width={SL.w} height={SL.h} rx={12} fill="var(--color-fd-muted)" fillOpacity={0.25} stroke={hot('slide') ? HOT : BORDER} strokeWidth={hot('slide') ? 2 : 1.5} style={glow(hot('slide'), HOT)} />
        <text x={SL.x + 12} y={SL.y + 21} fontFamily={MONO} fontSize="10" fontWeight="700" letterSpacing="1.5" fill={hot('slide') ? HOT : MUTED}>
          THE SLIDE · SHARED SPACE (mm)
        </text>
      </g>

      {/* the registration: the only edge anyone authored */}
      <g {...pick('e-affine')} aria-label="Affine registration placing the tile on the slide">
        <rect x={X.tile + W / 2 - 14} y={SL.y + SL.h} width={160} height={R1 - SL.y - SL.h - 26} fill="transparent" />
        <line x1={X.tile + W / 2} y1={R1 - 3} x2={X.tile + W / 2} y2={SL.y + SL.h + 7} strokeWidth={lit('e-affine') ? 2.8 : 2.2} markerEnd="url(#lnAffine)" style={{ stroke: AFFINE, opacity: lit('e-affine') ? 1 : 0.6, ...glow(lit('e-affine'), AFFINE) }} />
        <text x={X.tile + W / 2 + 9} y={SL.y + SL.h + 22} fontFamily={MONO} fontSize="9.5" style={{ fill: AFFINE }}>
          affine · registration · {refined ? 'v2' : 'v1'}
        </text>
      </g>

      {/* first row: tile ← crop ← deconvolved ← mask */}
      {hEdge('e-crop', X.crop, X.tile, TRANSLATION, 'lnTranslation', 'translation', 'identical')}
      {hEdge('e-decon', X.decon, X.crop, IDENTITY, 'lnIdentity', 'identity', 'transformed')}
      {hEdge('e-seg', X.mask, X.decon, IDENTITY, 'lnIdentity', 'identity', 'categorized')}

      {chip(
        'tile',
        X.tile,
        R1,
        '60× tile',
        <svg {...thumbBox(X.tile, R1)} viewBox="0 0 120 104">
          <CellsArt look="raw" />
          <rect x={CROP.x} y={CROP.y} width={CROP.w} height={CROP.h} fill="none" stroke="white" strokeOpacity="0.7" strokeWidth="1.6" strokeDasharray="4 3" />
        </svg>,
      )}
      {chip(
        'crop',
        X.crop,
        R1,
        'crop',
        <svg {...thumbBox(X.crop, R1)} viewBox={CROP_VB}>
          <CellsArt look="raw" />
        </svg>,
      )}
      {chip(
        'decon',
        X.decon,
        R1,
        'deconvolved',
        <svg {...thumbBox(X.decon, R1)} viewBox={CROP_VB}>
          <CellsArt look="sharp" />
        </svg>,
      )}
      {chip(
        'mask',
        X.mask,
        R1,
        'mask',
        <svg {...thumbBox(X.mask, R1)} viewBox={CROP_VB}>
          <CellsArt look="label" />
        </svg>,
      )}

      {/* projection → deconvolved */}
      <g {...pick('e-proj')} aria-label="By-dimension edge from the projection to the deconvolved stack">
        <rect x={X.decon - 30} y={R1 + H} width={W / 2 + 40} height={R2 - R1 - H} fill="transparent" />
        <line x1={X.decon + W / 2} y1={R2 - 3} x2={X.decon + W / 2} y2={R1 + H + 7} strokeWidth={lit('e-proj') ? 2.8 : 2.2} markerEnd="url(#lnBydim)" style={{ stroke: BYDIM, opacity: lit('e-proj') ? 1 : 0.6, ...glow(lit('e-proj'), BYDIM) }} />
        <text x={X.decon + W / 2 - 9} y={R1 + H + 26} fontFamily={MONO} fontSize="9.5" textAnchor="end" style={{ fill: BYDIM }}>
          by-dimension
        </text>
        <text x={X.decon + W / 2 - 9} y={R1 + H + 37} fontFamily={MONO} fontSize="8.5" textAnchor="end" fill={MUTED}>
          keeps y, x
        </text>
      </g>

      {/* table ⇢ mask: lineage with no geometry */}
      <g {...pick('e-table')} aria-label="Unmappable lineage edge from the table to the mask">
        <rect x={X.mask - 34} y={R1 + H} width={W / 2 + 28} height={R2 - R1 - H} fill="transparent" />
        <line x1={X.mask + W / 2 - 14} y1={R2 - 3} x2={X.mask + W / 2 - 14} y2={R1 + H + 7} strokeWidth={hot('e-table') ? 2.6 : 2} strokeDasharray="3 5" markerEnd="url(#lnMuted)" style={{ stroke: MUTED, opacity: hot('e-table') ? 1 : 0.75, ...glow(hot('e-table'), MUTED) }} />
        <text x={X.mask + W / 2 - 23} y={R1 + H + 26} fontFamily={MONO} fontSize="9.5" textAnchor="end" fill={MUTED}>
          unmappable
        </text>
        <text x={X.mask + W / 2 - 23} y={R1 + H + 37} fontFamily={MONO} fontSize="8.5" textAnchor="end" fill={MUTED}>
          no geometry
        </text>
      </g>

      {/* mask → table: the dereference a hover follows */}
      <g {...pick('e-field')} aria-label="Field edge from the mask into the table">
        <rect x={X.mask + W / 2 + 4} y={R1 + H} width={W / 2 + 10} height={R2 - R1 - H} fill="transparent" />
        <line x1={X.mask + W / 2 + 14} y1={R1 + H + 3} x2={X.mask + W / 2 + 14} y2={R2 - 7} strokeWidth={hot('e-field') ? 2.8 : 2.2} markerEnd="url(#lnField)" style={{ stroke: FIELD, opacity: hot('e-field') ? 1 : 0.6, ...glow(hot('e-field'), FIELD) }} />
        <text x={X.mask + W / 2 + 22} y={R1 + H + 26} fontFamily={MONO} fontSize="9.5" style={{ fill: FIELD }}>
          field
        </text>
        <text x={X.mask + W / 2 + 22} y={R1 + H + 37} fontFamily={MONO} fontSize="8.5" fill={MUTED}>
          id → row
        </text>
      </g>

      {/* second row */}
      {chip(
        'proj',
        X.decon,
        R2,
        'max projection',
        <svg {...thumbBox(X.decon, R2)} viewBox={CROP_VB}>
          <CellsArt look="sharp" />
        </svg>,
      )}
      <g {...pick('table')} aria-label="Measurement table">
        <rect x={X.mask} y={R2} width={W} height={H} rx={9} fill="var(--color-fd-muted)" fillOpacity={0.45} stroke={hot('table') ? HOT : BORDER} strokeWidth={hot('table') ? 2 : 1} style={glow(hot('table'), HOT)} />
        <text x={X.mask + 7} y={R2 + 13} fontFamily={MONO} fontSize="9" fontWeight="700" fill={hot('table') ? HOT : FG}>
          measurements
        </text>
        <line x1={X.mask + 6} y1={R2 + 20} x2={X.mask + W - 6} y2={R2 + 20} stroke={BORDER} />
        <text x={X.mask + 8} y={R2 + 32} fontFamily={MONO} fontSize="8.5" fill={MUTED}>
          i · area · mean
        </text>
        {CELLS.map((c, k) => (
          <g key={c.i}>
            <circle cx={X.mask + 12} cy={R2 + 43 + k * 13} r={3} fill={cellFill(c.hue)} />
            <text x={X.mask + 20} y={R2 + 46 + k * 13} fontFamily={MONO} fontSize="8.5" fill={MUTED}>
              {c.i} · {c.area} · {c.mean}
            </text>
          </g>
        ))}
      </g>

      {/* how to read the arrows */}
      <text fontFamily={MONO} fontSize="9" fill={MUTED} opacity="0.85">
        <tspan x={14} y={R2 + 34}>
          every arrow points from a result
        </tspan>
        <tspan x={14} y={R2 + 47}>
          to what it was made from
        </tspan>
      </text>
    </svg>
  );
}

function LineageScene({ shown, refined }: { shown: NodeId; refined: boolean }) {
  const S = 1.4; // tile-local 120×104 → 168×146
  const TX = 66, TY = 46;
  const onCrop = shown === 'crop' || shown === 'decon' || shown === 'mask' || shown === 'proj';
  const look: Look = shown === 'mask' ? 'label' : shown === 'decon' || shown === 'proj' ? 'sharp' : 'raw';
  return (
    <svg viewBox="0 0 300 226" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-label="Where the selected dataset lands on the slide">
      <rect x={6} y={8} width={288} height={212} rx={12} fill="var(--color-fd-muted)" fillOpacity={0.25} stroke={shown === 'slide' ? HOT : BORDER} strokeWidth={shown === 'slide' ? 2 : 1.5} />
      <text x={18} y={28} fontFamily={MONO} fontSize="9.5" fontWeight="700" letterSpacing="1.4" fill={shown === 'slide' ? HOT : MUTED}>
        SLIDE (mm)
      </text>
      {Array.from({ length: 8 }, (_, k) => (
        <line key={k} x1={24 + k * 36} y1={209} x2={24 + k * 36} y2={215} stroke={MUTED} strokeWidth="1" opacity="0.6" />
      ))}

      <g style={{ transform: refined ? 'translate(11px, -8px)' : 'translate(0px, 0px)', transition: 'transform .6s cubic-bezier(0.22, 1, 0.36, 1)' }}>
        <g transform={`translate(${TX}, ${TY}) scale(${S})`}>
          {/* the tile is always there: it is what was registered */}
          <rect x={0} y={0} width={120} height={104} rx={5} fill={INK} stroke={shown === 'tile' ? HOT : BORDER} strokeWidth={shown === 'tile' ? 1.6 : 0.8} style={glow(shown === 'tile', HOT)} />
          <g opacity={onCrop ? 0.45 : shown === 'table' ? 0.3 : 1}>
            <CellsArt look="raw" />
          </g>

          {/* a derived dataset lands on its window of the tile */}
          {onCrop && (
            <g key={shown} className="animate-pop-in">
              <rect x={CROP.x} y={CROP.y} width={CROP.w} height={CROP.h} fill={INK} />
              <svg x={CROP.x} y={CROP.y} width={CROP.w} height={CROP.h} viewBox={CROP_VB}>
                <CellsArt look={look} />
              </svg>
              <rect x={CROP.x} y={CROP.y} width={CROP.w} height={CROP.h} fill="none" stroke={HOT} strokeWidth="1.5" style={glow(true, HOT)} />
              {shown === 'proj' && (
                <text x={CROP.x + CROP.w - 3} y={CROP.y + CROP.h - 4} fontFamily={MONO} fontSize="6.5" textAnchor="end" fill="rgba(255,255,255,0.75)">
                  flat · no z
                </text>
              )}
            </g>
          )}

          {/* a table has nowhere to land */}
          {shown === 'table' && (
            <g className="animate-pop-in">
              <rect x={CROP.x} y={CROP.y} width={CROP.w} height={CROP.h} fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 3" />
              <rect x={22} y={40} width={76} height={26} rx={6} fill={INK} fillOpacity="0.92" stroke="white" strokeOpacity="0.35" strokeWidth="0.8" />
              <text x={60} y={51} fontFamily={MONO} fontSize="7" fontWeight="700" textAnchor="middle" fill="white">
                not drawn
              </text>
              <text x={60} y={60.5} fontFamily={MONO} fontSize="6.5" textAnchor="middle" fill="rgba(255,255,255,0.65)">
                a row has no position
              </text>
            </g>
          )}
        </g>
      </g>
    </svg>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 2 · MikroSpaceValues
// ═════════════════════════════════════════════════════════════════════════════

type SpaceKind = 'shifted' | 'same' | 'rescaled' | 'dropped' | 'none';
type ValueKind = 'identical' | 'transformed' | 'categorized' | 'stated' | 'measured';

const HIST_A = [6, 14, 24, 17, 9, 4];
const HIST_B = [3, 5, 9, 16, 26, 12];

function Hist({ x, bars, color, opacity = 1 }: { x: number; bars: number[]; color: string; opacity?: number }) {
  return (
    <g opacity={opacity}>
      {bars.map((h, k) => (
        <rect key={k} x={x + k * 5.5} y={44 - h} width={4} height={h} rx={1} style={{ fill: color }} />
      ))}
      <line x1={x - 1} y1={45} x2={x + bars.length * 5.5} y2={45} stroke={MUTED} strokeWidth="0.8" />
    </g>
  );
}

function Grid({ x, y, s, n, color, width = 1 }: { x: number; y: number; s: number; n: number; color: string; width?: number }) {
  const lines = Array.from({ length: n - 1 }, (_, k) => ((k + 1) * s) / n);
  return (
    <g style={{ stroke: color }} strokeWidth={width} fill="none">
      <rect x={x} y={y} width={s} height={s} rx={2} />
      {lines.map((d) => (
        <g key={d} opacity="0.6">
          <line x1={x + d} y1={y} x2={x + d} y2={y + s} />
          <line x1={x} y1={y + d} x2={x + s} y2={y + d} />
        </g>
      ))}
    </g>
  );
}

const Arrow = ({ x }: { x: number }) => <path d={`M${x - 5} 28 H${x + 4} M${x + 1} 25 L${x + 4} 28 L${x + 1} 31`} fill="none" stroke={MUTED} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />;
const Equals = ({ x }: { x: number }) => <path d={`M${x - 4} 26 H${x + 4} M${x - 4} 30 H${x + 4}`} fill="none" stroke={MUTED} strokeWidth="1.3" strokeLinecap="round" />;

function SpaceGlyph({ kind }: { kind: SpaceKind }) {
  return (
    <svg viewBox="0 0 96 56" className="h-auto w-full" aria-hidden>
      {kind === 'shifted' && (
        <>
          <rect x={14} y={6} width={66} height={44} rx={3} fill="none" stroke={MUTED} strokeDasharray="3 3" />
          <rect x={42} y={20} width={30} height={24} rx={2} strokeWidth="1.6" style={{ stroke: TRANSLATION, fill: TRANSLATION, fillOpacity: 0.16 }} />
          <circle cx={14} cy={6} r={2} fill={MUTED} />
          <path d="M16.5 7.5 L39 18.5 M35 14.6 L39 18.5 L33.6 18.6" fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: TRANSLATION }} />
        </>
      )}
      {kind === 'same' && (
        <>
          <Grid x={10} y={13} s={30} n={4} color={MUTED} />
          <Equals x={48} />
          <Grid x={56} y={13} s={30} n={4} color={IDENTITY} width={1.4} />
        </>
      )}
      {kind === 'rescaled' && (
        <>
          <Grid x={10} y={13} s={30} n={6} color={MUTED} />
          <Arrow x={48} />
          <Grid x={56} y={13} s={30} n={3} color={FG} width={1.4} />
        </>
      )}
      {kind === 'dropped' && (
        <>
          {[0, 1, 2].map((k) => (
            <rect key={k} x={8 + k * 5} y={8 + k * 6} width={26} height={22} rx={2} fill="var(--orbit-surface)" stroke={MUTED} />
          ))}
          <Arrow x={54} />
          <rect x={64} y={17} width={26} height={22} rx={2} strokeWidth="1.6" style={{ stroke: BYDIM, fill: BYDIM, fillOpacity: 0.16 }} />
        </>
      )}
      {kind === 'none' && (
        <>
          <Grid x={8} y={13} s={30} n={4} color={MUTED} />
          <path d="M42 28 H47 M53 28 H58" fill="none" stroke={MUTED} strokeWidth="1.4" strokeDasharray="2 2.5" strokeLinecap="round" />
          <path d="M48.5 32.5 L51.5 23.5" stroke={MUTED} strokeWidth="1.4" strokeLinecap="round" />
          <rect x={62} y={13} width={26} height={30} rx={3} fill="none" stroke={FG} strokeWidth="1.3" />
          {[21, 28.5, 36].map((y) => (
            <line key={y} x1={62} y1={y} x2={88} y2={y} stroke={FG} strokeOpacity="0.5" />
          ))}
        </>
      )}
    </svg>
  );
}

function ValueGlyph({ kind }: { kind: ValueKind }) {
  return (
    <svg viewBox="0 0 96 56" className="h-auto w-full" aria-hidden>
      <Hist x={7} bars={HIST_A} color={kind === 'identical' ? FG : MUTED} opacity={kind === 'identical' ? 0.85 : 0.7} />
      {kind === 'identical' ? <Equals x={48} /> : <Arrow x={48} />}
      {kind === 'identical' && <Hist x={57} bars={HIST_A} color={FG} opacity={0.85} />}
      {kind === 'transformed' && <Hist x={57} bars={HIST_B} color={IDENTITY} />}
      {kind === 'categorized' &&
        CELLS.map((c, k) => (
          <g key={c.i}>
            <rect x={57 + k * 11.5} y={20} width={9.5} height={16} rx={2.5} fill={cellFill(c.hue)} />
            <text x={61.75 + k * 11.5} y={31} fontFamily={MONO} fontSize="7" fontWeight="700" textAnchor="middle" fill={INK}>
              {c.i}
            </text>
          </g>
        ))}
      {kind === 'stated' && (
        <>
          <rect x={58} y={14} width={30} height={30} rx={4} fill="none" stroke={MUTED} strokeDasharray="3 3" />
          <text x={73} y={34} fontFamily={MONO} fontSize="15" fontWeight="700" textAnchor="middle" fill={MUTED}>
            ?
          </text>
        </>
      )}
      {kind === 'measured' && (
        <text fontFamily={MONO} fontSize="8" fill={FG}>
          <tspan x={58} y={22}>
            214 µm²
          </tspan>
          <tspan x={58} y={33}>
            0.83
          </tspan>
          <tspan x={58} y={44} fill={MUTED}>
            …
          </tspan>
        </text>
      )}
    </svg>
  );
}

const OPERATIONS: { name: string; eg: string; space: SpaceKind; spaceWord: string; values: ValueKind; valuesWord: string; notice: string }[] = [
  { name: 'Crop', eg: 'cut out a region', space: 'shifted', spaceWord: 'shifted', values: 'identical', valuesWord: 'identical', notice: 'Sits where it was cut from. Your contrast settings still fit.' },
  { name: 'Downsample', eg: 'bin, resize', space: 'rescaled', spaceWord: 'rescaled', values: 'stated', valuesWord: 'the tool says', notice: 'Overlays at the right size.' },
  { name: 'Deconvolve', eg: 'denoise, normalize', space: 'same', spaceWord: 'unchanged', values: 'transformed', valuesWord: 'transformed', notice: 'Overlays exactly. Needs its own contrast.' },
  { name: 'Segment', eg: 'threshold, classify', space: 'same', spaceWord: 'unchanged', values: 'categorized', valuesWord: 'categorized', notice: 'Overlays exactly. Set up as a label map.' },
  { name: 'Project', eg: 'max projection, line profile', space: 'dropped', spaceWord: 'axes dropped', values: 'stated', valuesWord: 'the tool says', notice: 'Lines up along the axes that remain.' },
  { name: 'Measure', eg: 'one row per object', space: 'none', spaceWord: 'no correspondence', values: 'measured', valuesWord: 'transformed', notice: 'A table linked to the mask. Not drawn anywhere.' },
];

export function MikroSpaceValues() {
  return (
    <Frame
      caption={
        <>
          <strong>Two questions, answered separately.</strong>{' '}
          Every derivation says what happened to
          space and what happened to the values. A viewer needs both: the first tells it where to draw
          the result, the second how.
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {OPERATIONS.map((op) => (
          <div key={op.name} className="flex flex-col rounded-2xl border border-fd-border bg-fd-background/40 p-3 backdrop-blur">
            <div className="mb-2 flex items-baseline justify-between gap-2">
              <span className="text-[13px] font-semibold text-fd-foreground">{op.name}</span>
              <span className="truncate font-mono text-[10px] leading-tight text-fd-muted-foreground">{op.eg}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'SPACE', word: op.spaceWord, glyph: <SpaceGlyph kind={op.space} /> },
                { label: 'VALUES', word: op.valuesWord, glyph: <ValueGlyph kind={op.values} /> },
              ].map((q) => (
                <div key={q.label} className="rounded-xl border border-fd-border bg-fd-muted/30 px-2 pb-2 pt-1.5">
                  <div className="font-mono text-[9px] font-bold leading-tight tracking-[0.16em] text-primary/80">{q.label}</div>
                  {q.glyph}
                  <div className="text-center font-mono text-[10.5px] leading-tight text-fd-foreground">{q.word}</div>
                </div>
              ))}
            </div>
            <p className="mt-2.5 text-[12.5px] leading-snug text-fd-muted-foreground">{op.notice}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// 3 · MikroPlacementTrust
// ═════════════════════════════════════════════════════════════════════════════

const GUESSED = flow(25, '0.17');
const AUTHORED = flow(85, '0.15');
const CHECKED = flow(150, '0.15');

// Ordered weakest first: a placement is as well known as its weakest edge.
const VALIDITY = [
  { key: 'guessed', label: 'guessed', color: GUESSED, verdict: 'Assumed, never measured. Treat this overlay as a sketch.' },
  { key: 'authored', label: 'authored', color: AUTHORED, verdict: 'Someone made it on purpose, but nothing has checked it against the data.' },
  { key: 'checked', label: 'checked', color: CHECKED, verdict: 'Every registration on the way was validated against the data.' },
] as const;

const SURVIVES = [
  {
    key: 'isometry',
    label: 'moved or rotated',
    transform: 'rotate(24)',
    rows: [
      { what: 'a distance', verdict: 'is that distance', ok: true },
      { what: 'an angle', verdict: 'kept', ok: true },
      { what: 'a ratio of areas', verdict: 'kept', ok: true },
    ],
  },
  {
    key: 'similarity',
    label: 'evenly rescaled',
    transform: 'rotate(24) scale(1.42)',
    rows: [
      { what: 'a distance', verdict: 'needs one factor', ok: true },
      { what: 'an angle', verdict: 'kept', ok: true },
      { what: 'a ratio of areas', verdict: 'kept', ok: true },
    ],
  },
  {
    key: 'affine',
    label: 'general affine',
    transform: 'matrix(1.25 0.1 0.62 0.78 0 0)',
    rows: [
      { what: 'a distance', verdict: 'means nothing here', ok: false },
      { what: 'an angle', verdict: 'not kept', ok: false },
      { what: 'a ratio of areas', verdict: 'kept', ok: true },
    ],
  },
] as const;

function Segmented<T extends string>({ options, value, onChange, label }: { options: readonly { key: T; label: string; color?: string }[]; value: T; onChange: (v: T) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-1">
      {options.map((o) => {
        const on = o.key === value;
        return (
          <button
            key={o.key}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.key)}
            className={`rounded-full border px-2.5 py-1.5 font-mono text-[10px] leading-none transition-colors ${on ? 'bg-fd-muted/60 text-fd-foreground' : 'border-fd-border text-fd-muted-foreground hover:text-fd-foreground'}`}
            style={on ? { borderColor: o.color ?? HOT, color: o.color ?? HOT } : undefined}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/** The shape a registration is tested on: a round cell, a ruler across it, a right angle. */
function ProbeShape({ transform, color, dashed }: { transform?: string; color: string; dashed?: boolean }) {
  return (
    <g transform={transform} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: color, transition: 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)' }}>
      <circle r={25} strokeWidth="1.6" strokeDasharray={dashed ? '4 3' : undefined} vectorEffect="non-scaling-stroke" style={{ fill: color, fillOpacity: 0.1 }} />
      <path d="M-25 0 H25 M0 0 V-25" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      <path d="M0 -7 H7 V0" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

type ValidityKey = (typeof VALIDITY)[number]['key'];
type SurviveKey = (typeof SURVIVES)[number]['key'];

export function MikroPlacementTrust() {
  const [stage, setStage] = useState<ValidityKey>('checked');
  const [atlas, setAtlas] = useState<ValidityKey>('authored');
  const [kind, setKind] = useState<SurviveKey>('similarity');

  const rank = (k: ValidityKey) => VALIDITY.findIndex((v) => v.key === k);
  const weakestIsAtlas = rank(atlas) <= rank(stage);
  const overall = VALIDITY[Math.min(rank(stage), rank(atlas))];
  const colorOf = (k: ValidityKey) => VALIDITY[rank(k)].color;
  const survive = SURVIVES.find((s) => s.key === kind)!;

  // chain geometry
  const PW = 66, PH = 28, PY = 46;
  const PX = [6, 104, 202, 300, 398];
  const NAMES = ['mask', 'crop', 'tile', 'slide', 'atlas'];
  const gap = (k: number) => ({ x1: PX[k] + PW + 3, x2: PX[k + 1] - 7, cx: (PX[k] + PW + PX[k + 1]) / 2 });

  return (
    <Frame
      caption={
        <>
          <strong>Derived is a fact, registered is a claim.</strong>{' '}
          How well an overlay is known is
          decided by its weakest registration, and which measurements you may read off it is decided by
          the kind of map that put it there.
        </>
      }
    >
      <div className="flex flex-col gap-4">
        {/* ── how well is it known ─────────────────────────────────────────── */}
        <Panel label="HOW WELL IS IT KNOWN · THE WEAKEST LINK">
          <div className="overflow-x-auto">
          <svg viewBox="0 0 470 112" className="h-auto w-full min-w-[27rem]" xmlns="http://www.w3.org/2000/svg">
            <Markers
              defs={[
                ['trDerived', MUTED],
                ['trGuessed', GUESSED],
                ['trAuthored', AUTHORED],
                ['trChecked', CHECKED],
              ]}
            />
            {NAMES.map((n, k) => (
              <g key={n}>
                <rect x={PX[k]} y={PY} width={PW} height={PH} rx={PH / 2} fill="var(--color-fd-muted)" fillOpacity={k >= 3 ? 0.25 : 0.5} stroke={BORDER} strokeWidth="1.2" strokeDasharray={k >= 3 ? '4 3' : undefined} />
                <text x={PX[k] + PW / 2} y={PY + PH / 2 + 3.5} fontFamily={MONO} fontSize="10" fontWeight="700" textAnchor="middle" fill={FG}>
                  {n}
                </text>
              </g>
            ))}
            {/* derivations: written by the tool that made the data */}
            {[0, 1].map((k) => {
              const g = gap(k);
              return <line key={k} x1={g.x1} y1={PY + PH / 2} x2={g.x2} y2={PY + PH / 2} stroke={MUTED} strokeWidth="2" markerEnd="url(#trDerived)" />;
            })}
            <path d={`M${PX[0] + PW / 2} ${PY + PH + 8} v6 H${PX[2] + PW / 2} v-6`} fill="none" stroke={MUTED} strokeOpacity="0.6" />
            <text x={(PX[0] + PX[2] + PW) / 2} y={PY + PH + 28} fontFamily={MONO} fontSize="9.5" textAnchor="middle" fill={MUTED}>
              derived · written by the tool
            </text>
            {/* registrations: claims, each with its own validity */}
            {(
              [
                [2, stage, !weakestIsAtlas],
                [3, atlas, weakestIsAtlas],
              ] as const
            ).map(([k, v, weakest]) => {
              const g = gap(k);
              const c = colorOf(v);
              return (
                <g key={k}>
                  <line x1={g.x1} y1={PY + PH / 2} x2={g.x2} y2={PY + PH / 2} strokeWidth={weakest ? 3 : 2.2} markerEnd={`url(#tr${v[0].toUpperCase()}${v.slice(1)})`} style={{ stroke: c, transition: 'stroke .25s ease', ...glow(weakest, c) }} />
                  <text x={g.cx} y={PY - 12} fontFamily={MONO} fontSize="9.5" fontWeight="700" textAnchor="middle" style={{ fill: c }}>
                    {v}
                  </text>
                  {weakest && (
                    <text x={g.cx} y={PY - 24} fontFamily={MONO} fontSize="8.5" textAnchor="middle" fill={MUTED}>
                      weakest
                    </text>
                  )}
                </g>
              );
            })}
            <path d={`M${PX[2] + PW / 2 + 12} ${PY + PH + 8} v6 H${PX[4] + PW / 2} v-6`} fill="none" stroke={MUTED} strokeOpacity="0.6" />
            <text x={(PX[2] + PX[4] + PW) / 2 + 6} y={PY + PH + 28} fontFamily={MONO} fontSize="9.5" textAnchor="middle" fill={MUTED}>
              registered · stated by someone
            </text>
          </svg>
          </div>

          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-fd-border bg-fd-muted/30 p-2.5">
              <div className="mb-1.5 font-mono text-[10px] leading-tight text-fd-muted-foreground">tile → slide · stage position</div>
              <Segmented label="How the tile to slide registration is known" options={VALIDITY} value={stage} onChange={setStage} />
            </div>
            <div className="rounded-xl border border-fd-border bg-fd-muted/30 p-2.5">
              <div className="mb-1.5 font-mono text-[10px] leading-tight text-fd-muted-foreground">slide → atlas · alignment</div>
              <Segmented label="How the slide to atlas registration is known" options={VALIDITY} value={atlas} onChange={setAtlas} />
            </div>
          </div>

          <div key={overall.key} className="animate-pop-in mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl border px-3 py-2.5" style={{ borderColor: overall.color }}>
            <span className="shrink-0 rounded-full border px-2 py-1 font-mono text-[10px] uppercase leading-none tracking-wide" style={{ borderColor: overall.color, color: overall.color }}>
              mask in the atlas · {overall.label}
            </span>
            <p className="text-[12.5px] leading-snug text-fd-foreground/90">{overall.verdict}</p>
          </div>
        </Panel>

        {/* ── what survives the trip ───────────────────────────────────────── */}
        <Panel label="WHAT SURVIVES THE TRIP" aside={<Segmented label="The kind of map" options={SURVIVES} value={kind} onChange={setKind} />}>
          <div className="grid items-center gap-3 sm:grid-cols-2">
          <svg viewBox="0 0 300 150" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-label="A round cell before and after the map">
            <g transform="translate(66 70)">
              <ProbeShape color={MUTED} dashed />
            </g>
            <path d="M118 70 H150 M145 65 L150 70 L145 75" fill="none" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <g transform="translate(218 70)">
              <ProbeShape color={AFFINE} transform={survive.transform} />
            </g>
            <text x={66} y={142} fontFamily={MONO} fontSize="9.5" textAnchor="middle" fill={MUTED}>
              in the data
            </text>
            <text x={218} y={142} fontFamily={MONO} fontSize="9.5" textAnchor="middle" fill={MUTED}>
              in the scene
            </text>
          </svg>
          <ul key={kind} className="flex flex-col gap-1.5 font-mono text-[11px] leading-tight">
            {survive.rows.map((r, k) => (
              <li key={r.what} className="animate-pop-in flex items-center gap-2 rounded-lg border border-fd-border bg-fd-muted/30 px-2.5 py-1.5" style={{ animationDelay: `${k * 0.08}s` }}>
                {r.ok ? <Check className="size-3.5 shrink-0" style={{ color: CHECKED }} /> : <X className="size-3.5 shrink-0" style={{ color: GUESSED }} />}
                <span className="text-fd-muted-foreground">{r.what}</span>
                <span className="ml-auto text-right text-fd-foreground">{r.verdict}</span>
              </li>
            ))}
          </ul>
          </div>
        </Panel>
      </div>

      {/* ── when something does not appear ───────────────────────────────────── */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {[
          {
            title: 'Not registered yet',
            tag: 'a gap to close',
            color: AUTHORED,
            body: 'Nothing relates this data to the scene so far. Registering it closes the gap.',
            link: (
              <>
                <line x1={60} y1={18} x2={136} y2={18} strokeWidth="1.8" strokeDasharray="2 5" strokeLinecap="round" style={{ stroke: AUTHORED }} />
                <circle cx={98} cy={18} r={8} fill="var(--orbit-surface)" strokeWidth="1.5" style={{ stroke: AUTHORED }} />
                <path d="M94 18 H102 M98 14 V22" strokeWidth="1.6" strokeLinecap="round" style={{ stroke: AUTHORED }} />
              </>
            ),
            from: 'EM image',
          },
          {
            title: 'Cannot be placed',
            tag: 'a fact to accept',
            color: MUTED,
            body: 'Its geometry did not survive the step that made it. There is no missing registration to look for.',
            link: (
              <>
                <path d="M60 18 H90 M106 18 H136" stroke={MUTED} strokeWidth="1.8" strokeDasharray="3 4" strokeLinecap="round" />
                <path d="M94 25 L102 11" stroke={MUTED} strokeWidth="1.8" strokeLinecap="round" />
              </>
            ),
            from: 'table',
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-fd-border bg-fd-background/40 p-3 backdrop-blur">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[13px] font-semibold text-fd-foreground">{c.title}</span>
              <span className="rounded-full border px-2 py-1 font-mono text-[10px] uppercase leading-none tracking-wide" style={{ borderColor: c.color, color: c.color }}>
                {c.tag}
              </span>
            </div>
            <svg viewBox="0 0 196 36" className="mx-auto mt-2 h-auto w-full max-w-[17rem]" aria-hidden>
              <rect x={2} y={5} width={56} height={26} rx={13} fill="var(--color-fd-muted)" fillOpacity="0.5" stroke={BORDER} strokeWidth="1.2" />
              <text x={30} y={21.5} fontFamily={MONO} fontSize="9.5" fontWeight="700" textAnchor="middle" fill={FG}>
                {c.from}
              </text>
              {c.link}
              <rect x={138} y={5} width={56} height={26} rx={13} fill="var(--color-fd-muted)" fillOpacity="0.25" stroke={BORDER} strokeWidth="1.2" strokeDasharray="4 3" />
              <text x={166} y={21.5} fontFamily={MONO} fontSize="9.5" fontWeight="700" textAnchor="middle" fill={FG}>
                scene
              </text>
            </svg>
            <p className="mt-2 text-[12.5px] leading-snug text-fd-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}
