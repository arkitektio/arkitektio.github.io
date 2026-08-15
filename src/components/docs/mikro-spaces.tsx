'use client';

import { useState, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { flow } from '@/components/diagram';

/* The Mikro coordinate-system figure, in two linked panels:

   • left  ("the slide"): an overview scan, a 60× tile and its segmentation
     mask, each a coordinate system of its own, wired together by the edges
     that place them (affine), relate pyramid levels (scale), record the
     derivation (identity, values categorized) and cross into the measurement
     table (field). Everything is clickable; the strip below narrates the
     selected space or edge. A "refine calibration" toggle bumps the affine
     edge to v2 and visibly moves the tile while its pixels stay put.

   • right ("under your cursor"): the mask at working zoom. Hovering a cell
     plays the attribute plan the server hands a viewer: sample the mask,
     bind the label into the prepared lookup, read the row. Locally, with no
     server round-trip.

   Cell shapes and measurements are shared between the panels so the story
   reads as one dataset. Drawn against the fd-* / --orbit-* theme tokens. */

// ── edge palette (one hue per transformation kind) ───────────────────────────
const AFFINE = flow('var(--brand-hue)');
const SCALE = flow('calc(var(--brand-hue) + 60)');
const DERIVED = flow('calc(var(--brand-hue) + 150)');
const FIELD = flow(85, '0.15');

const MONO = 'var(--font-mono, monospace)';
const MUTED = 'var(--color-fd-muted-foreground)';
const HOT = 'var(--color-fd-primary)';

// ── the cells, shared by the tile, the mask chip and the hover panel ─────────
// Paths live in the tile's local 120×104 pixel grid.
type Cell = { i: number; hue: number; d: string; cx: number; cy: number; sample: [number, number]; area: number; mean: string };
const CELLS: Cell[] = [
  { i: 3, hue: 150, d: 'M 20 34 C 20 22, 44 20, 46 32 C 48 44, 36 50, 28 47 C 21 44, 19 40, 20 34 Z', cx: 32, cy: 35, sample: [52, 49], area: 152, mean: '0.41' },
  { i: 7, hue: 55, d: 'M 58 46 C 56 28, 82 22, 92 36 C 100 48, 90 62, 74 62 C 63 62, 59 56, 58 46 Z', cx: 76, cy: 44, sample: [68, 118], area: 214, mean: '0.83' },
  { i: 12, hue: 305, d: 'M 34 78 C 34 68, 52 66, 56 74 C 60 82, 50 90, 42 88 C 36 86, 34 84, 34 78 Z', cx: 45, cy: 78, sample: [120, 70], area: 98, mean: '0.57' },
];
const cellFill = (hue: number) => `oklch(0.75 0.16 ${hue})`;

// ── what the info strip says for each selectable thing ───────────────────────
type SelId = 'slide' | 'overview' | 'tile' | 'mask' | 'table' | 'e-scale' | 'e-affine' | 'e-derived' | 'e-field';
type Detail = { title: string; badge: string; badgeColor?: string; body: string };

function detailOf(sel: SelId, refined: boolean): Detail {
  switch (sel) {
    case 'slide':
      return { title: 'The slide', badge: 'space · mm', body: 'A shared physical space: axes x and y in millimetres. Nothing is stored here, it is a pure reference frame. Images are placed into it by transformation edges, and any number of images can share it.' };
    case 'overview':
      return { title: 'Overview scan', badge: 'space · px', body: 'The pixel grid of a 4× overview image. Axes y and x with no units: pixel space is structural, it exists before anyone calibrates anything. Micrometres only enter through an edge.' };
    case 'tile':
      return { title: '60× tile', badge: 'space · px', body: 'The pixel grid of a detail image. The mask and every ROI you draw on this image live in this grid, so they can never drift out of register with the pixels.' };
    case 'mask':
      return { title: 'Segmentation mask', badge: 'space · cell ids', body: 'A grid the same shape as the tile, but its values are cell ids, not intensities. Pixel value 7 does not mean brightness 7, it means cell number 7.' };
    case 'table':
      return { title: 'cells.parquet', badge: 'table', badgeColor: FIELD, body: 'One row per cell: id, area, mean intensity. Its coordinate system is not spatial at all, it is the list of cell ids, an index axis.' };
    case 'e-scale':
      return { title: 'level 1 → level 0', badge: 'edge · scale', badgeColor: SCALE, body: 'scale [2, 2]. Pyramid levels are spaces of their own, and one stored scale edge relates each level to the full-resolution grid. Computed once when the pyramid is written, never re-derived.' };
    case 'e-affine':
      return refined
        ? { title: 'tile → slide', badge: 'edge · affine · v2', badgeColor: AFFINE, body: '0.108 µm/px, placed at (14.6, 8.2) mm · validity VALIDATED. The refinement bumped this one edge from v1 to v2: the tile moved on the slide, and every overlay that looks through the edge moved with it. Nothing drawn in tile pixels moved at all.' }
        : { title: 'tile → slide', badge: 'edge · affine · v1', badgeColor: AFFINE, body: '0.108 µm/px, placed at (14.2, 8.4) mm · validity MANUAL. This edge is the only place this placement is stored. Try "refine calibration" above: fixing the edge fixes everything that looks through it.' };
    case 'e-derived':
      return { title: 'tile → mask', badge: 'edge · derived', badgeColor: DERIVED, body: 'Spatially an identity, values categorized. The segmentation moved no pixels, it changed what the values mean, and the edge records exactly that as a fact.' };
    case 'e-field':
      return { title: 'mask → cells.parquet', badge: 'edge · field', badgeColor: FIELD, body: 'A pixel’s value is a row number in the table. This is the single kind of edge that crosses from geometry into records, and it is the edge attribute plans walk.' };
  }
}

export function MikroSpaces() {
  const [sel, setSel] = useState<SelId>('slide');
  const [refined, setRefined] = useState(false);
  const [cellId, setCellId] = useState<number>(7);

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
  const hot = (id: SelId) => sel === id;
  const detail = detailOf(sel, refined);
  const cell = CELLS.find((c) => c.i === cellId)!;

  return (
    <figure className="not-prose my-8">
      <div className="relative isolate overflow-hidden rounded-3xl border border-fd-border bg-[var(--orbit-surface)] px-3 py-5 text-fd-foreground sm:px-5">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[10%] h-[22rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--orbit-grid)_1px,transparent_0)] [background-size:36px_36px]" />
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {/* ── left: the slide ──────────────────────────────────────────── */}
          <Panel
            className="md:col-span-3"
            label="THE SLIDE · SPACES &amp; EDGES"
            aside={
              <button
                type="button"
                onClick={() => {
                  setRefined((r) => !r);
                  setSel('e-affine');
                }}
                className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] transition-colors ${
                  refined ? 'border-primary/50 bg-primary/15 text-primary' : 'border-fd-border bg-fd-muted/40 text-fd-muted-foreground hover:text-fd-foreground'
                }`}
              >
                <SlidersHorizontal className="size-3" />
                {refined ? 'calibration v2 · validated' : 'refine calibration'}
              </button>
            }
          >
            <SlideScene pick={pick} hot={hot} refined={refined} />
          </Panel>

          {/* ── right: under your cursor ─────────────────────────────────── */}
          <Panel className="md:col-span-2" label="UNDER YOUR CURSOR · AN ATTRIBUTE PLAN">
            <MaskProbe cell={cell} setCellId={setCellId} />
            <PlanCard cell={cell} />
          </Panel>
        </div>

        {/* ── the info strip for the selected space / edge ─────────────────── */}
        <div key={`${sel}-${refined}`} className="animate-pop-in mt-4 flex min-h-[4.5rem] items-start gap-3 rounded-2xl border border-fd-border bg-fd-muted/30 px-4 py-3 backdrop-blur">
          <span
            className="mt-0.5 shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide"
            style={{ borderColor: detail.badgeColor ?? 'var(--color-fd-border)', color: detail.badgeColor ?? MUTED }}
          >
            {detail.badge}
          </span>
          <p className="text-[13px] leading-relaxed text-fd-foreground/90">
            <strong className="font-semibold text-fd-foreground">{detail.title}.</strong> {detail.body}
          </p>
        </div>

        {/* legend */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-fd-muted-foreground">
          {[
            { c: AFFINE, t: 'affine · places pixels in the world' },
            { c: SCALE, t: 'scale · pyramid levels' },
            { c: DERIVED, t: 'derived · same pixels, new meaning' },
            { c: FIELD, t: 'field · pixels into a table' },
          ].map((l) => (
            <span key={l.t} className="flex items-center gap-2">
              <span className="h-1.5 w-5 rounded-full" style={{ background: l.c }} /> {l.t}
            </span>
          ))}
        </div>
      </div>

      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">
        <strong>Every spatial fact lives exactly once.</strong> Spaces are places data can live, edges
        are the maps between them. Click any space or arrow to inspect it, refine the calibration to
        watch one edge fix a whole placement, and hover the cells on the right to run an attribute
        plan the way your viewer does: locally, from a recipe the server handed it once.
      </figcaption>
    </figure>
  );
}

// ── panel chrome ─────────────────────────────────────────────────────────────
function Panel({ label, aside, className, children }: { label: ReactNode; aside?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <div className={`flex flex-col rounded-2xl border border-fd-border bg-fd-background/40 p-3 backdrop-blur ${className ?? ''}`}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-primary/80">{label}</span>
        {aside}
      </div>
      {children}
    </div>
  );
}

// ── left SVG: slide, overview, tile, mask, table ─────────────────────────────
type PickFn = (id: SelId) => Record<string, unknown>;

function SlideScene({ pick, hot, refined }: { pick: PickFn; hot: (id: SelId) => boolean; refined: boolean }) {
  // slide
  const SX = 14, SY = 24, SW = 432, SH = 200;
  // overview scan (with its pyramid stack behind)
  const OX = 40, OY = 60, OW = 168, OH = 126;
  // tile (movable by the calibration refinement)
  const TX = 272, TY = 74, TW = 120, TH = 104;
  const tcx = TX + TW / 2;
  // derived row below the slide
  const MX = 266, MY = 258, MW = 132, MH = 104; // mask chip
  const BX = 56, BY = 264, BW = 148, BH = 94; // table chip

  const glow = (on: boolean, c: string) => (on ? { filter: `drop-shadow(0 0 6px ${c})` } : undefined);

  return (
    <svg viewBox="0 0 460 372" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {[
          ['mkAffine', AFFINE],
          ['mkScale', SCALE],
          ['mkDerived', DERIVED],
          ['mkField', FIELD],
        ].map(([id, c]) => (
          <marker key={id} id={id} markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
            <path d="M1.5 1.5 L6.5 4.5 L1.5 7.5" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: c }} />
          </marker>
        ))}
      </defs>

      {/* the slide: a shared reference frame */}
      <g {...pick('slide')} aria-label="The slide, a shared coordinate system in millimetres">
        <rect x={SX} y={SY} width={SW} height={SH} rx={14} fill="var(--color-fd-muted)" fillOpacity={0.25} stroke={hot('slide') ? HOT : 'var(--color-fd-border)'} strokeWidth={hot('slide') ? 2 : 1.5} style={glow(hot('slide'), HOT)} />
        <text x={SX + 12} y={SY + 18} fontFamily={MONO} fontSize="10" fontWeight="700" letterSpacing="1.5" fill={hot('slide') ? HOT : MUTED}>
          SLIDE · SHARED SPACE (mm)
        </text>
        {/* mm ruler along the bottom edge */}
        {[0, 1, 2, 3, 4, 5].map((k) => {
          const x = SX + 24 + k * 78;
          return (
            <g key={k}>
              <line x1={x} y1={SY + SH - 8} x2={x} y2={SY + SH - 2} stroke={MUTED} strokeWidth="1" opacity="0.7" />
              <text x={x} y={SY + SH - 12} fontFamily={MONO} fontSize="7.5" textAnchor="middle" fill={MUTED} opacity="0.7">
                {k * 4}
              </text>
            </g>
          );
        })}
      </g>

      {/* overview scan + pyramid stack */}
      <g {...pick('overview')} aria-label="Overview scan pixel grid">
        <rect x={OX - 10} y={OY - 10} width={OW} height={OH} rx={8} fill="#0b0b14" opacity="0.35" stroke="var(--color-fd-border)" />
        <rect x={OX - 5} y={OY - 5} width={OW} height={OH} rx={8} fill="#0b0b14" opacity="0.6" stroke="var(--color-fd-border)" />
        <rect x={OX} y={OY} width={OW} height={OH} rx={8} fill="#0b0b14" stroke={hot('overview') ? HOT : 'var(--color-fd-border)'} strokeWidth={hot('overview') ? 2 : 1} style={glow(hot('overview'), HOT)} />
        {/* faint tissue blobs */}
        <circle cx={OX + 44} cy={OY + 42} r={17} fill={cellFill(150)} opacity="0.22" />
        <circle cx={OX + 96} cy={OY + 66} r={23} fill={cellFill(55)} opacity="0.2" />
        <circle cx={OX + 132} cy={OY + 34} r={12} fill={cellFill(305)} opacity="0.2" />
        <circle cx={OX + 62} cy={OY + 94} r={14} fill={cellFill(210)} opacity="0.18" />
        {/* footprint of the 60× tile within the overview */}
        <rect x={OX + 118} y={OY + 78} width={26} height={22} fill="none" stroke="var(--color-fd-foreground)" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="2 2" />
        <text x={OX + 2} y={OY + OH + 14} fontFamily={MONO} fontSize="9" fill={hot('overview') ? HOT : MUTED}>
          overview scan · px
        </text>
      </g>

      {/* the scale edge on the pyramid stack */}
      <g {...pick('e-scale')} aria-label="Scale edge between pyramid levels">
        <line x1={OX - 22} y1={OY + 34} x2={OX - 22} y2={OY + 74} stroke="transparent" strokeWidth="18" />
        <line x1={OX - 22} y1={OY + 38} x2={OX - 22} y2={OY + 68} strokeWidth={hot('e-scale') ? 2.6 : 2} markerEnd="url(#mkScale)" style={{ stroke: SCALE, ...glow(hot('e-scale'), SCALE) }} />
        <text x={OX - 28} y={OY + 30} fontFamily={MONO} fontSize="9" textAnchor="middle" style={{ fill: SCALE }}>
          ×2
        </text>
      </g>

      {/* tile: shifted by the refined calibration, contents untouched */}
      <g style={{ transform: refined ? 'translate(11px, -7px)' : 'translate(0px, 0px)', transition: 'transform .6s cubic-bezier(0.22, 1, 0.36, 1)' }}>
        <g {...pick('tile')} aria-label="60x tile pixel grid">
          <rect x={TX} y={TY} width={TW} height={TH} rx={8} fill="#0b0b14" stroke={hot('tile') ? HOT : 'var(--color-fd-border)'} strokeWidth={hot('tile') ? 2 : 1} style={glow(hot('tile'), HOT)} />
          <g transform={`translate(${TX}, ${TY})`}>
            {CELLS.map((c) => (
              <path key={c.i} d={c.d} fill={cellFill(c.hue)} fillOpacity="0.3" stroke={cellFill(c.hue)} strokeWidth="1.2" />
            ))}
            {CELLS.map((c) => (
              <circle key={c.i} cx={c.cx} cy={c.cy} r={3.5} fill={cellFill(c.hue)} opacity="0.8" />
            ))}
          </g>
          <text x={TX + 2} y={TY - 6} fontFamily={MONO} fontSize="9" fill={hot('tile') ? HOT : MUTED}>
            60× tile · px
          </text>
        </g>

        {/* the affine edge that places the tile on the slide */}
        <g {...pick('e-affine')} aria-label="Affine edge placing the tile on the slide">
          <line x1={tcx} y1={TY + TH} x2={tcx} y2={SY + SH + 4} stroke="transparent" strokeWidth="20" />
          <line x1={tcx} y1={TY + TH + 3} x2={tcx} y2={SY + SH - 4} strokeWidth={hot('e-affine') ? 2.8 : 2.2} markerEnd="url(#mkAffine)" style={{ stroke: AFFINE, ...glow(hot('e-affine'), AFFINE) }} />
          <text x={tcx + 8} y={(TY + TH + SY + SH) / 2 + 3} fontFamily={MONO} fontSize="9.5" style={{ fill: AFFINE }}>
            affine · µm/px{refined ? ' · v2' : ' · v1'}
          </text>
        </g>
      </g>

      {/* derived edge: out of the slide, into the mask */}
      <g {...pick('e-derived')} aria-label="Derived edge from tile to mask">
        <line x1={MX + MW / 2 + 22} y1={SY + SH} x2={MX + MW / 2 + 22} y2={MY} stroke="transparent" strokeWidth="20" />
        <line x1={MX + MW / 2 + 22} y1={SY + SH + 4} x2={MX + MW / 2 + 22} y2={MY - 5} strokeWidth={hot('e-derived') ? 2.8 : 2.2} strokeDasharray="6 5" markerEnd="url(#mkDerived)" style={{ stroke: DERIVED, ...glow(hot('e-derived'), DERIVED) }} />
        <text x={MX + MW / 2 + 32} y={(SY + SH + MY) / 2 + 4} fontFamily={MONO} fontSize="9.5" style={{ fill: DERIVED }}>
          derived
        </text>
      </g>

      {/* the segmentation mask */}
      <g {...pick('mask')} aria-label="Segmentation mask, values are cell ids">
        <rect x={MX} y={MY} width={MW} height={MH} rx={8} fill="#0b0b14" stroke={hot('mask') ? HOT : 'var(--color-fd-border)'} strokeWidth={hot('mask') ? 2 : 1} style={glow(hot('mask'), HOT)} />
        <g transform={`translate(${MX + 6}, ${MY})`}>
          {CELLS.map((c) => (
            <g key={c.i}>
              <path d={c.d} fill={cellFill(c.hue)} fillOpacity="0.85" />
              <text x={c.cx} y={c.cy + 3} fontFamily={MONO} fontSize="9" fontWeight="700" textAnchor="middle" fill="#0b0b14">
                {c.i}
              </text>
            </g>
          ))}
        </g>
        <text x={MX + 2} y={MY + MH + 13} fontFamily={MONO} fontSize="9" fill={hot('mask') ? HOT : MUTED}>
          mask · cell ids
        </text>
      </g>

      {/* the field edge: geometry crosses into records */}
      <g {...pick('e-field')} aria-label="Field edge from mask into the measurement table">
        <line x1={MX - 4} y1={MY + MH / 2} x2={BX + BW + 4} y2={BY + BH / 2 - 4} stroke="transparent" strokeWidth="20" />
        <line x1={MX - 4} y1={MY + MH / 2} x2={BX + BW + 7} y2={BY + BH / 2 - 4} strokeWidth={hot('e-field') ? 2.8 : 2.2} markerEnd="url(#mkField)" style={{ stroke: FIELD, ...glow(hot('e-field'), FIELD) }} />
        <text x={(MX + BX + BW) / 2 + 2} y={MY + MH / 2 - 10} fontFamily={MONO} fontSize="9.5" textAnchor="middle" style={{ fill: FIELD }}>
          field
        </text>
      </g>

      {/* the measurement table */}
      <g {...pick('table')} aria-label="Measurement table cells.parquet">
        <rect x={BX} y={BY} width={BW} height={BH} rx={10} fill="var(--color-fd-muted)" fillOpacity="0.5" stroke={hot('table') ? HOT : 'var(--color-fd-border)'} strokeWidth={hot('table') ? 2 : 1} style={glow(hot('table'), HOT)} />
        <text x={BX + 12} y={BY + 18} fontFamily={MONO} fontSize="9.5" fontWeight="700" fill="var(--color-fd-foreground)">
          cells.parquet
        </text>
        <line x1={BX + 8} y1={BY + 26} x2={BX + BW - 8} y2={BY + 26} stroke="var(--color-fd-border)" />
        <text x={BX + 12} y={BY + 39} fontFamily={MONO} fontSize="8.5" fill={MUTED}>
          i · area · mean
        </text>
        {CELLS.map((c, k) => (
          <g key={c.i}>
            <circle cx={BX + 16} cy={BY + 51 + k * 14} r={3} fill={cellFill(c.hue)} />
            <text x={BX + 24} y={BY + 54 + k * 14} fontFamily={MONO} fontSize="8.5" fill={MUTED}>
              {c.i} · {c.area} µm² · {c.mean}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// ── right SVG: the mask you hover ────────────────────────────────────────────
function MaskProbe({ cell, setCellId }: { cell: Cell; setCellId: (i: number) => void }) {
  const S = 1.9; // tile-local 120×104 → 228×198
  const OXP = 36, OYP = 8;
  const px = OXP + cell.cx * S;
  const py = OYP + cell.cy * S;
  return (
    <svg viewBox="0 0 300 212" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-label="Hover a cell to run its attribute plan">
      <rect x={2} y={2} width={296} height={208} rx={10} fill="#0b0b14" stroke="var(--color-fd-border)" />
      {/* a hint of the pixel grid */}
      {Array.from({ length: 13 }, (_, k) => (
        <line key={`v${k}`} x1={13 + k * 22.8} y1={3} x2={13 + k * 22.8} y2={209} stroke="white" strokeOpacity="0.035" />
      ))}
      {Array.from({ length: 9 }, (_, k) => (
        <line key={`h${k}`} x1={3} y1={13 + k * 23.2} x2={297} y2={13 + k * 23.2} stroke="white" strokeOpacity="0.035" />
      ))}

      {/* crosshair on the sampled pixel */}
      <g key={cell.i} className="animate-pop-in" pointerEvents="none">
        <line x1={px} y1={6} x2={px} y2={206} stroke="white" strokeOpacity="0.35" strokeDasharray="2 4" />
        <line x1={6} y1={py} x2={294} y2={py} stroke="white" strokeOpacity="0.35" strokeDasharray="2 4" />
      </g>

      <g transform={`translate(${OXP}, ${OYP}) scale(${S})`}>
        {CELLS.map((c) => {
          const active = c.i === cell.i;
          return (
            <g
              key={c.i}
              role="button"
              tabIndex={0}
              aria-label={`Cell ${c.i}`}
              onMouseEnter={() => setCellId(c.i)}
              onClick={() => setCellId(c.i)}
              onFocus={() => setCellId(c.i)}
              style={{ cursor: 'crosshair', outline: 'none' }}
            >
              <path
                d={c.d}
                fill={cellFill(c.hue)}
                fillOpacity={active ? 0.55 : 0.28}
                stroke={active ? 'white' : cellFill(c.hue)}
                strokeWidth={active ? 1.4 : 0.8}
                style={{ transition: 'fill-opacity .2s ease, stroke .2s ease', ...(active ? { filter: `drop-shadow(0 0 4px ${cellFill(c.hue)})` } : undefined) }}
              />
              <text x={c.cx} y={c.cy + 2.5} fontFamily={MONO} fontSize="7" fontWeight="700" textAnchor="middle" fill={active ? 'white' : 'rgba(255,255,255,0.55)'} pointerEvents="none">
                {c.i}
              </text>
            </g>
          );
        })}
      </g>

      {/* sampled coordinate readout */}
      <text key={`c-${cell.i}`} x={292} y={202} fontFamily={MONO} fontSize="9" textAnchor="end" fill="rgba(255,255,255,0.6)" className="animate-pop-in">
        y {cell.sample[0]} · x {cell.sample[1]}
      </text>
    </svg>
  );
}

// ── the plan, played for the hovered cell ────────────────────────────────────
function PlanCard({ cell }: { cell: Cell }) {
  return (
    <div className="mt-3 flex-1 rounded-xl border border-fd-border bg-fd-muted/30 p-3">
      <div className="mb-2 flex items-center justify-between font-mono text-[9.5px] tracking-[0.14em] text-primary/80">
        <span>ATTRIBUTE PLAN</span>
        <span className="text-fd-muted-foreground">fetched once</span>
      </div>
      <ol key={cell.i} className="flex flex-col gap-1.5 font-mono text-[11px] leading-snug">
        <li className="animate-pop-in flex gap-2">
          <span className="shrink-0 text-fd-muted-foreground">1 sample</span>
          <span className="text-fd-foreground">
            mask[{cell.sample[0]}, {cell.sample[1]}] → i = <b style={{ color: cellFill(cell.hue) }}>{cell.i}</b>
          </span>
        </li>
        <li className="animate-pop-in flex gap-2" style={{ animationDelay: '.14s' }}>
          <span className="shrink-0 text-fd-muted-foreground">2 lookup</span>
          <span className="break-all text-fd-foreground/85">
            SELECT area, mean FROM cells.parquet WHERE i = <b style={{ color: cellFill(cell.hue) }}>{cell.i}</b>
          </span>
        </li>
        <li className="animate-pop-in flex gap-2" style={{ animationDelay: '.3s' }}>
          <span className="shrink-0 text-fd-muted-foreground">3 answer</span>
          <span className="font-semibold text-fd-foreground">
            area {cell.area} µm² · mean {cell.mean}
          </span>
        </li>
      </ol>
      <div className="mt-2.5 border-t border-fd-border pt-2 text-center font-mono text-[9.5px] text-fd-muted-foreground">
        runs in your viewer · no server round-trip
      </div>
    </div>
  );
}
