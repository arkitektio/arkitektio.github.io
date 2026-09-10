'use client';

/* Figures for the "Large scale volume viewer" deck. Plain SVG drawn from the
   site's theme tokens, so they flip with light/dark like the rest of the deck.
   Each figure has a fixed viewBox and scales with the slide.

   They illustrate how Orkestrator shows a volume nobody can hold in memory:
   chunks instead of files, a pyramid level chosen per frame, and bytes that
   travel from storage to the Orkestrator desktop app without passing through the API. See
   `volume-viewer.tsx` for the deck itself. */

import { useState } from 'react';
import type { ReactNode } from 'react';

const PRIMARY = 'var(--color-fd-primary)';
const BORDER = 'var(--color-fd-border)';
const MUTED = 'var(--color-fd-muted-foreground)';
const FG = 'var(--color-fd-foreground)';
const SURFACE = 'var(--color-fd-card)';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

function Label({
  x,
  y,
  children,
  anchor = 'middle',
  size = 13,
  fill = MUTED,
  weight = 500,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: 'start' | 'middle' | 'end';
  size?: number;
  fill?: string;
  weight?: number;
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill} fontFamily={MONO}>
      {children}
    </text>
  );
}

/** Arrowheads. Rendered once per figure that needs them. */
function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-primary`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={PRIMARY} />
      </marker>
      <marker id={`${id}-muted`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={MUTED} />
      </marker>
    </defs>
  );
}

/** An isometric block standing in for a volume. `s` scales the whole thing. */
function Block({
  x,
  y,
  w,
  h,
  d,
  tone = 'muted',
}: {
  /** Front-face top-left. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** How far back the block goes, drawn up and to the right. */
  d: number;
  tone?: 'muted' | 'primary';
}) {
  const accent = tone === 'primary' ? PRIMARY : BORDER;
  const fill = tone === 'primary' ? PRIMARY : SURFACE;
  return (
    <g>
      <polygon
        points={`${x},${y} ${x + d},${y - d} ${x + w + d},${y - d} ${x + w},${y}`}
        fill={fill}
        fillOpacity={tone === 'primary' ? 0.2 : 0.65}
        stroke={accent}
        strokeWidth={1.6}
      />
      <polygon
        points={`${x + w},${y} ${x + w + d},${y - d} ${x + w + d},${y + h - d} ${x + w},${y + h}`}
        fill={fill}
        fillOpacity={tone === 'primary' ? 0.14 : 0.4}
        stroke={accent}
        strokeWidth={1.6}
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={fill}
        fillOpacity={tone === 'primary' ? 0.1 : 1}
        stroke={accent}
        strokeWidth={1.6}
      />
    </g>
  );
}

/* --- 1. the mismatch ------------------------------------------------------- */

/** Slide 2: what you acquired, next to what you can actually look at. */
export function VolumeScaleFigure() {
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A terabyte-scale volume next to the handful of megapixels a screen can show">
      <Block x={40} y={72} w={186} h={150} d={44} />
      <Label x={160} y={50} fill={FG} size={14} weight={700}>one acquisition</Label>
      <Label x={133} y={242} size={12}>more voxels than you will ever see</Label>

      {/* the screen */}
      <g>
        <rect x={432} y={104} width={150} height={94} rx={6} fill={SURFACE} stroke={PRIMARY} strokeWidth={1.8} />
        <line x1={507} y1={198} x2={507} y2={214} stroke={PRIMARY} strokeWidth={2} />
        <line x1={478} y1={214} x2={536} y2={214} stroke={PRIMARY} strokeWidth={2} />
        <Label x={507} y={88} fill={FG} size={14} weight={700}>your screen</Label>
        <Label x={507} y={242} size={12} fill={PRIMARY}>a few million pixels</Label>
      </g>

      <line x1={296} y1={150} x2={420} y2={150} stroke={MUTED} strokeWidth={1.8} strokeDasharray="5 5" markerEnd="url(#scale-muted)" />
      <Label x={358} y={138} size={11} fill={FG} weight={700}>orders of magnitude</Label>

      <Markers id="scale" />
    </svg>
  );
}

/** Slide 3: the usual route — make it smaller until it fits, then look at that
    instead. The bottom band names what that costs. */
export function ProxyFigure() {
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A volume downsampled and cropped until it fits on a workstation, with a callout: you never look at the volume">
      <Block x={20} y={62} w={92} h={78} d={26} />
      <Label x={80} y={20} fill={FG} size={13} weight={700}>the volume</Label>

      <line x1={152} y1={104} x2={196} y2={104} stroke={MUTED} strokeWidth={2} markerEnd="url(#proxy-muted)" />
      <Label x={174} y={93} size={11}>downsample</Label>

      <Block x={206} y={74} w={62} h={54} d={18} />
      <Label x={250} y={44} fill={FG} size={13} weight={700}>a proxy</Label>

      <line x1={294} y1={104} x2={338} y2={104} stroke={MUTED} strokeWidth={2} markerEnd="url(#proxy-muted)" />
      <Label x={316} y={93} size={11}>crop</Label>

      <Block x={348} y={86} w={34} h={30} d={10} />
      <Label x={370} y={66} fill={FG} size={13} weight={700}>crop</Label>

      <line x1={400} y1={104} x2={444} y2={104} stroke={MUTED} strokeWidth={2} markerEnd="url(#proxy-muted)" />
      <Label x={422} y={93} size={11}>copy</Label>

      <rect x={454} y={68} width={140} height={74} rx={8} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
      <Label x={524} y={100} fill={FG} size={13} weight={700}>a workstation</Label>
      <Label x={524} y={120} size={10}>with enough RAM</Label>

      {/* what the detour actually cost */}
      <g>
        <rect x={20} y={180} width={580} height={52} rx={12} fill={PRIMARY} fillOpacity={0.08} stroke={PRIMARY} strokeWidth={1.8} strokeOpacity={0.5} />
        <circle cx={46} cy={206} r={11} fill={PRIMARY} fillOpacity={0.15} stroke={PRIMARY} strokeWidth={1.4} />
        <path d="M 41 201 l 10 10 M 51 201 l -10 10" stroke={PRIMARY} strokeWidth={1.8} strokeLinecap="round" />
        <Label x={70} y={202} anchor="start" size={16} weight={700} fill={FG}>You never look at the expenisvely acquired volume</Label>
        <Label x={70} y={222} anchor="start" size={12.5}>only at whatever survived being made small enough</Label>
      </g>

      <Markers id="proxy" />
    </svg>
  );
}

/* --- 2. chunks ------------------------------------------------------------- */

/** Slide 9: the view intersects a handful of chunks. Only those are fetched. */
export function ChunkFigure() {
  const cols = 8;
  const rows = 6;
  const step = 34;
  const ox = 40;
  const oy = 36;
  /** The chunks the viewport happens to land on. */
  const lit = new Set(['2,1', '3,1', '4,1', '2,2', '3,2', '4,2', '2,3', '3,3', '4,3']);
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A chunked volume where only the chunks under the viewport are fetched">
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => {
          const on = lit.has(`${c},${r}`);
          return (
            <rect
              key={`${c},${r}`}
              x={ox + c * step}
              y={oy + r * step}
              width={step - 3}
              height={step - 3}
              rx={3}
              fill={on ? PRIMARY : SURFACE}
              fillOpacity={on ? 0.22 : 0.55}
              stroke={on ? PRIMARY : BORDER}
              strokeWidth={on ? 1.6 : 1}
            />
          );
        }),
      )}

      {/* the viewport */}
      <rect x={ox + 2 * step - 6} y={oy + 1 * step - 6} width={3 * step + 6} height={3 * step + 6} rx={6} fill="none" stroke={PRIMARY} strokeWidth={2.4} />
      <Label x={ox + 3.5 * step} y={oy + 4.5 * step + 12} size={12} fill={PRIMARY} weight={700}>what is on screen</Label>

      <line x1={330} y1={110} x2={382} y2={110} stroke={PRIMARY} strokeWidth={2.2} markerEnd="url(#chunk-primary)" />

      <rect x={392} y={54} width={200} height={54} rx={10} fill={PRIMARY} fillOpacity={0.08} stroke={PRIMARY} strokeWidth={1.5} strokeOpacity={0.5} />
      <Label x={492} y={78} fill={FG} size={14} weight={700}>9 chunks fetched</Label>
      <Label x={492} y={96} size={12} fill={PRIMARY}>a few megabytes</Label>

      <rect x={392} y={124} width={200} height={54} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
      <Label x={492} y={148} fill={FG} size={14} weight={700}>39 never touched</Label>
      <Label x={492} y={166} size={12}>they stay in object storage</Label>

      <Markers id="chunk" />
    </svg>
  );
}

/* --- 3. the octree --------------------------------------------------------- */

/* An isometric unit cube, in projected coordinates. `U` is half the width of a
   cube, `V` a quarter of the height of its top face, `D` the vertical edge. A
   cube's anchor is its topmost vertex, so a child at octant (i, j, k) hangs off
   the parent's anchor at half of each of these. */
const U = 88;
const V = 51;
const D = 102;

/** How deep the hover is allowed to refine. Level 3 is already 4096 leaves if
    you opened all of them; you only ever open the one under the cursor. */
const MAX_LEVEL = 3;

/** Progressively more primary the finer the level, so "more detail" reads as
    "more of the accent colour" without needing a legend to decode it. */
const LEVEL_FILL = [0.06, 0.13, 0.22, 0.34];

function OctCube({
  x,
  y,
  scale,
  level,
  onEnter,
  animate = true,
}: {
  x: number;
  y: number;
  scale: number;
  level: number;
  onEnter?: () => void;
  /** Off for cubes inside a dissolving subtree — they are already on screen. */
  animate?: boolean;
}) {
  const u = U * scale;
  const v = V * scale;
  const d = D * scale;
  const opacity = LEVEL_FILL[Math.min(level, LEVEL_FILL.length - 1)];
  const stroke = level === 0 ? BORDER : PRIMARY;
  return (
    <g
      onPointerEnter={onEnter}
      style={{
        cursor: onEnter ? 'pointer' : 'default',
        // Without a fill-box origin the pop would scale about the SVG origin
        // and read as the cube flying in from the corner.
        transformBox: 'fill-box',
        transformOrigin: 'center',
        animation: animate ? 'octree-pop 220ms ease-out both' : undefined,
      }}
    >
      {/* top */}
      <polygon
        points={`${x},${y} ${x + u},${y + v} ${x},${y + 2 * v} ${x - u},${y + v}`}
        fill={PRIMARY}
        fillOpacity={opacity * 1.5}
        stroke={stroke}
        strokeWidth={1.2}
        strokeOpacity={0.8}
      />
      {/* left */}
      <polygon
        points={`${x - u},${y + v} ${x},${y + 2 * v} ${x},${y + 2 * v + d} ${x - u},${y + v + d}`}
        fill={PRIMARY}
        fillOpacity={opacity}
        stroke={stroke}
        strokeWidth={1.2}
        strokeOpacity={0.8}
      />
      {/* right */}
      <polygon
        points={`${x},${y + 2 * v} ${x + u},${y + v} ${x + u},${y + v + d} ${x},${y + 2 * v + d}`}
        fill={PRIMARY}
        fillOpacity={opacity * 0.65}
        stroke={stroke}
        strokeWidth={1.2}
        strokeOpacity={0.8}
      />
    </g>
  );
}

/** Slide 14: the volume as an octree, under a budget.

    It starts as one coarse block. Hovering an octant refines it — but only a
    fixed number of refinements are ever resident at once, so refining somewhere
    new makes an older one dissolve back to coarse. That is the same trade the
    real renderer makes every frame, with the camera in place of the cursor. */

/** How many nodes may be subdivided at once. The root counts as one, so this
    allows the block plus two refinements — enough to show a chain from level 0
    to level 3, and not enough to refine the whole cube. */
const BUDGET = 3;

/** Where a path sits, recovered from the path itself so evicted subtrees can
    still be drawn while they dissolve. */
function geomOf(path: string) {
  let x = 160;
  let y = 16;
  let scale = 1.5;
  let level = 0;
  for (const seg of path.split('/').slice(1)) {
    const half = scale / 2;
    const i = Number(seg[0]);
    const j = Number(seg[1]);
    const k = Number(seg[2]);
    x += (i - j) * U * half;
    y += (i + j) * V * half + k * D * half;
    scale = half;
    level += 1;
  }
  return { x, y, scale, level };
}

/** The eight children of a node, in painter's order: the octant nearest the
    camera has the largest i + j and the smallest k, so draw ascending. */
function octants(x: number, y: number, scale: number) {
  const half = scale / 2;
  const out: { seg: string; x: number; y: number; scale: number; order: number }[] = [];
  for (let k = 0; k < 2; k += 1) {
    for (let j = 0; j < 2; j += 1) {
      for (let i = 0; i < 2; i += 1) {
        out.push({
          seg: `${i}${j}${k}`,
          x: x + (i - j) * U * half,
          y: y + (i + j) * V * half + k * D * half,
          scale: half,
          order: i + j - k,
        });
      }
    }
  }
  return out.sort((a, b) => a.order - b.order);
}

export function OctreeFigure() {
  /** Subdivided paths, oldest first — an LRU, which is what makes it a budget. */
  const [open, setOpen] = useState<string[]>([]);
  /** Paths whose children are on their way out. */
  const [fading, setFading] = useState<string[]>([]);

  const deepest = open.length
    ? Math.max(...open.map((path) => path.split('/').length))
    : 0;

  function refine(path: string) {
    if (open.includes(path)) return;
    let next = [...open, path];
    const evicted: string[] = [];
    while (next.length > BUDGET) {
      // Never evict something the newly refined node hangs off — that would
      // undo the refinement that was just asked for.
      const victim = next.find(
        (candidate) => candidate !== path && !path.startsWith(`${candidate}/`),
      );
      if (!victim) break;
      next = next.filter(
        (candidate) => candidate !== victim && !candidate.startsWith(`${victim}/`),
      );
      evicted.push(victim);
    }
    setOpen(next);
    if (evicted.length) {
      setFading((prev) => [...prev, ...evicted]);
      window.setTimeout(
        () => setFading((prev) => prev.filter((path_) => !evicted.includes(path_))),
        240,
      );
    }
  }

  function node(path: string, x: number, y: number, scale: number, level: number): ReactNode {
    if (!open.includes(path) || level >= MAX_LEVEL) {
      return (
        <OctCube
          key={path}
          x={x}
          y={y}
          scale={scale}
          level={level}
          onEnter={level < MAX_LEVEL ? () => refine(path) : undefined}
        />
      );
    }
    return (
      <g key={path}>
        {octants(x, y, scale).map((child) =>
          node(`${path}/${child.seg}`, child.x, child.y, child.scale, level + 1),
        )}
      </g>
    );
  }

  return (
    <div
      className="grid w-full grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center gap-8"
      onPointerLeave={() => {
        setOpen([]);
        setFading([]);
      }}
    >
      {/* the levels, lighting up as the cube is refined */}
      <div className="flex flex-col gap-2.5">
        {[0, 1, 2, 3].map((level) => {
          const active = level <= deepest;
          return (
            <div
              key={level}
              className={
                active
                  ? 'flex items-baseline justify-between rounded-xl border border-fd-primary/50 px-4 py-2.5'
                  : 'flex items-baseline justify-between rounded-xl border border-fd-border px-4 py-2.5'
              }
              style={
                active
                  ? {
                      background: `color-mix(in srgb, ${PRIMARY} ${LEVEL_FILL[level] * 100}%, transparent)`,
                    }
                  : undefined
              }
            >
              <span
                className={
                  active
                    ? 'font-mono text-[15px] font-bold'
                    : 'font-mono text-[15px] font-bold text-fd-muted-foreground'
                }
              >
                {`level ${level}`}
              </span>
              <span
                className={
                  active
                    ? 'font-mono text-[13px] text-fd-primary'
                    : 'font-mono text-[13px] text-fd-muted-foreground'
                }
              >
                {['the whole block', '8 octants', '64', '512'][level]}
              </span>
            </div>
          );
        })}

        <div className="mt-1 flex items-baseline justify-between">
          <span className="text-[15px] font-semibold">
            {open.length >= BUDGET ? 'budget spent' : 'hover the block'}
          </span>
          <span className="font-mono text-[13px] text-fd-muted-foreground">
            {`${open.length}/${BUDGET} resident`}
          </span>
        </div>
        <span className="text-[14px] leading-snug text-fd-muted-foreground">
          {open.length >= BUDGET
            ? 'Refining somewhere new drops the oldest refinement back to coarse.'
            : 'Only the octant under the pointer subdivides.'}
        </span>
      </div>

      {/* the block itself */}
      <div className="flex h-[356px] items-center justify-center">
        <svg
          viewBox="0 0 320 340"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          role="group"
          aria-label="An octree of the volume: one coarse block that splits into eight finer octants wherever the pointer rests, within a fixed budget"
        >
          <style>{`@keyframes octree-pop {
            from { opacity: 0; transform: scale(0.86); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes octree-drop {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.86); }
          }
          @media (prefers-reduced-motion: reduce) {
            @keyframes octree-pop { from { opacity: 1; } to { opacity: 1; } }
            @keyframes octree-drop { from { opacity: 0; } to { opacity: 0; } }
          }`}</style>

          {node('root', 160, 16, 1.5, 0)}

          {/* subtrees that lost their place in the budget, dissolving to reveal
              the coarse cube that has already been drawn underneath them */}
          {fading.map((path) => {
            const geom = geomOf(path);
            return (
              <g
                key={`fade-${path}`}
                style={{
                  pointerEvents: 'none',
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  animation: 'octree-drop 240ms ease-in both',
                }}
              >
                {octants(geom.x, geom.y, geom.scale).map((child) => (
                  <OctCube
                    key={`${path}/${child.seg}`}
                    x={child.x}
                    y={child.y}
                    scale={child.scale}
                    level={geom.level + 1}
                    animate={false}
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* --- 4. where the bytes go ------------------------------------------------- */

/** Slide 13: the API answers questions about chunks; storage serves them. */
export function StreamFigure() {
  return (
    <svg viewBox="0 0 620 240" className="w-full" role="img" aria-label="Orkestrator asks the API where chunks are and then reads the bytes straight from object storage">
      <rect x={24} y={82} width={150} height={70} rx={10} fill={PRIMARY} fillOpacity={0.1} stroke={PRIMARY} strokeWidth={1.8} strokeOpacity={0.6} />
      <Label x={99} y={112} fill={FG} size={14} weight={700}>Orkestrator</Label>
      <Label x={99} y={132} size={12} fill={PRIMARY}>the desktop app on your machine</Label>

      <rect x={236} y={22} width={150} height={70} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.8} />
      <Label x={311} y={52} fill={FG} size={14} weight={700}>the API</Label>
      <Label x={311} y={72} size={12}>coordinates, not voxels</Label>

      <rect x={446} y={82} width={150} height={70} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.8} />
      <Label x={521} y={112} fill={FG} size={14} weight={700}>object storage</Label>
      <Label x={521} y={132} size={12}>the chunks themselves</Label>

      {/* the small question */}
      <line x1={178} y1={96} x2={232} y2={68} stroke={MUTED} strokeWidth={1.6} markerEnd="url(#stream-muted)" />
      <Label x={196} y={66} anchor="start" size={11}>where is it?</Label>
      <line x1={232} y1={82} x2={178} y2={110} stroke={MUTED} strokeWidth={1.6} markerEnd="url(#stream-muted)" />
      <Label x={244} y={104} anchor="start" size={11}>a path, once</Label>

      {/* the big pipe */}
      <line x1={182} y1={126} x2={440} y2={126} stroke={PRIMARY} strokeWidth={6} strokeOpacity={0.35} />
      <line x1={440} y1={126} x2={182} y2={126} stroke={PRIMARY} strokeWidth={2.2} markerEnd="url(#stream-primary)" />
      <Label x={311} y={152} size={13} fill={FG} weight={700}>every chunk, straight from storage</Label>
      <Label x={311} y={172} size={12}>the API never opens your data</Label>

      <Label x={311} y={210} size={12}>which is why the ceiling is throughput, not the platform</Label>

      <Markers id="stream" />
    </svg>
  );
}

/* --- 5. the same trick, for surfaces --------------------------------------- */

/* Modelled on `fabriks` (github.com/jhnnsrs/fabriks), an LOD wire format that
   partitions a mesh collection into an octree of Parquet cells: level 0 is full
   detail, each coarser level merges 2x2x2 cells into one at a quarter of the
   face count, vertices on cell boundaries are pinned during decimation so a
   fine cell tiles against a coarse neighbour without cracking, and cells are
   stored in Morton order so a plan turns into a few byte ranges.

   Here the pointer stands in for the camera, the way `collection.plan(camera,
   pixel_budget)` does: near cells get level 0, far cells get coarsened until
   the whole frame fits the face budget. */

/** Cells per side of the patch drawn. */
const MESH_GRID = 4;
/** Cell size, in viewBox units. */
const MESH_CELL = 66;
const MESH_OX = 28;
const MESH_OY = 40;

/** Edge subdivisions at each level — halving per level, as decimation does. */
const MESH_SEGMENTS = [4, 2, 1];
/** Faces per cell at each level, following the format's quarter-per-level rule. */
const MESH_FACES = [512, 128, 32];
/** What one frame is allowed to cost. Sixteen cells at full detail would be
    8192 faces, so the budget always bites and the far cells always coarsen. */
const MESH_BUDGET = 2200;

/** Grid coordinates to screen, with a gentle bump so the patch reads as a
    surface rather than as graph paper. Every cell shares this warp, which is
    why neighbouring cells still meet exactly. */
function meshWarp(u: number, v: number): [number, number] {
  const half = MESH_GRID / 2;
  const bump =
    -20 *
    Math.cos(((u - half) / MESH_GRID) * Math.PI) *
    Math.cos(((v - half) / MESH_GRID) * Math.PI);
  return [MESH_OX + u * MESH_CELL + bump * 0.35, MESH_OY + v * MESH_CELL + bump];
}

/** Z-order index of a cell, the order fabriks writes row groups in. */
function morton(c: number, r: number) {
  let m = 0;
  for (let b = 0; b < 2; b += 1) {
    m |= ((c >> b) & 1) << (2 * b);
    m |= ((r >> b) & 1) << (2 * b + 1);
  }
  return m;
}

/** Points along one edge of a cell, excluding the far corner so a ring can be
    concatenated without duplicates. */
function edgePoints(
  u0: number,
  v0: number,
  u1: number,
  v1: number,
  segments: number,
): [number, number][] {
  const out: [number, number][] = [];
  for (let s = 0; s < segments; s += 1) {
    const t = s / segments;
    out.push(meshWarp(u0 + (u1 - u0) * t, v0 + (v1 - v0) * t));
  }
  return out;
}

export function MeshLodFigure() {
  /** The camera, in viewBox coordinates. Starts over the middle of the patch. */
  const [camera, setCamera] = useState<[number, number]>([
    MESH_OX + (MESH_GRID / 2) * MESH_CELL,
    MESH_OY + (MESH_GRID / 2) * MESH_CELL,
  ]);

  /* Plan the frame: pick a level per cell from how far it is from the camera,
     then coarsen the farthest cells until the whole thing fits the budget. */
  const cells: { c: number; r: number; distance: number; level: number }[] = [];
  for (let r = 0; r < MESH_GRID; r += 1) {
    for (let c = 0; c < MESH_GRID; c += 1) {
      const [cx, cy] = meshWarp(c + 0.5, r + 0.5);
      const distance = Math.hypot(cx - camera[0], cy - camera[1]);
      cells.push({
        c,
        r,
        distance,
        level: distance < 78 ? 0 : distance < 150 ? 1 : 2,
      });
    }
  }
  const byDistance = [...cells].sort((a, b) => b.distance - a.distance);
  let faces = cells.reduce((sum, cell) => sum + MESH_FACES[cell.level], 0);
  for (const cell of byDistance) {
    if (faces <= MESH_BUDGET) break;
    while (cell.level < MESH_FACES.length - 1 && faces > MESH_BUDGET) {
      faces -= MESH_FACES[cell.level] - MESH_FACES[cell.level + 1];
      cell.level += 1;
    }
  }
  const levelOf = (c: number, r: number) =>
    c < 0 || r < 0 || c >= MESH_GRID || r >= MESH_GRID
      ? undefined
      : cells[r * MESH_GRID + c].level;

  function onMove(event: React.PointerEvent<SVGSVGElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    // The svg is `meet`-fitted, so undo the letterboxing before mapping.
    const scale = Math.min(rect.width / 320, rect.height / 340);
    setCamera([
      (event.clientX - rect.left - (rect.width - 320 * scale) / 2) / scale,
      (event.clientY - rect.top - (rect.height - 340 * scale) / 2) / scale,
    ]);
  }

  const counts = [0, 1, 2].map(
    (level) => cells.filter((cell) => cell.level === level).length,
  );

  return (
    <div className="grid w-full grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center gap-8">
      <div className="flex flex-col gap-2.5">
        {[0, 1, 2].map((level) => {
          const active = counts[level] > 0;
          return (
            <div
              key={level}
              className={
                active
                  ? 'flex items-baseline justify-between rounded-xl border border-fd-primary/50 px-4 py-2.5'
                  : 'flex items-baseline justify-between rounded-xl border border-fd-border px-4 py-2.5'
              }
              style={
                active
                  ? {
                      background: `color-mix(in srgb, ${PRIMARY} ${LEVEL_FILL[level] * 100}%, transparent)`,
                    }
                  : undefined
              }
            >
              <span
                className={
                  active
                    ? 'font-mono text-[15px] font-bold'
                    : 'font-mono text-[15px] font-bold text-fd-muted-foreground'
                }
              >
                {`level ${level}`}
              </span>
              <span
                className={
                  active
                    ? 'font-mono text-[13px] text-fd-primary'
                    : 'font-mono text-[13px] text-fd-muted-foreground'
                }
              >
                {`${MESH_FACES[level]} faces · ${counts[level]} cells`}
              </span>
            </div>
          );
        })}

        <div className="mt-1 flex items-baseline justify-between">
          <span className="text-[15px] font-semibold">the frame&rsquo;s plan</span>
          <span className="font-mono text-[13px] text-fd-primary">
            {`${faces} / ${MESH_BUDGET} faces`}
          </span>
        </div>
        <span className="text-[14px] leading-snug text-fd-muted-foreground">
          Move the pointer — it is the camera. Cells near it stay at level 0;
          the rest coarsen until the frame fits, and their shared edges keep the
          finer neighbour&rsquo;s vertices so nothing cracks.
        </span>
      </div>

      <div className="flex h-[356px] items-center justify-center">
        <svg
          viewBox="0 0 320 340"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          role="group"
          aria-label="A mesh patch partitioned into cells, each drawn at the level of detail the camera justifies, under a face budget"
          onPointerMove={onMove}
        >
          {cells.map((cell) => {
            const { c, r, level } = cell;
            // An edge is sampled at the finer of the two cells that share it —
            // this is the seam lock, and it is why nothing cracks.
            const rate = (neighbour: number | undefined) =>
              MESH_SEGMENTS[Math.min(level, neighbour ?? level)];
            const top = rate(levelOf(c, r - 1));
            const right = rate(levelOf(c + 1, r));
            const bottom = rate(levelOf(c, r + 1));
            const left = rate(levelOf(c - 1, r));

            const ring = [
              ...edgePoints(c, r, c + 1, r, top),
              ...edgePoints(c + 1, r, c + 1, r + 1, right),
              ...edgePoints(c + 1, r + 1, c, r + 1, bottom),
              ...edgePoints(c, r + 1, c, r, left),
            ];
            const centre = meshWarp(c + 0.5, r + 0.5);
            const fill = LEVEL_FILL[level];

            return (
              <g key={`${c},${r}`}>
                {ring.map((point, i) => {
                  const next = ring[(i + 1) % ring.length];
                  return (
                    <polygon
                      key={i}
                      points={`${point[0]},${point[1]} ${next[0]},${next[1]} ${centre[0]},${centre[1]}`}
                      fill={PRIMARY}
                      fillOpacity={fill}
                      stroke={PRIMARY}
                      strokeWidth={0.7}
                      strokeOpacity={0.55}
                    />
                  );
                })}
                {/* the pinned vertices, which every neighbour agrees on */}
                {ring.map((point, i) => (
                  <circle key={`v${i}`} cx={point[0]} cy={point[1]} r={1.5} fill={PRIMARY} fillOpacity={0.8} />
                ))}
              </g>
            );
          })}

          {/* the order the cells are stored, and therefore fetched, in */}
          <polyline
            points={[...cells]
              .sort((a, b) => morton(a.c, a.r) - morton(b.c, b.r))
              .map((cell) => meshWarp(cell.c + 0.5, cell.r + 0.5).join(','))
              .join(' ')}
            fill="none"
            stroke={FG}
            strokeWidth={1.2}
            strokeDasharray="4 4"
            strokeOpacity={0.45}
          />
          <Label x={160} y={330} size={12}>Morton order — one plan, a few byte ranges</Label>
        </svg>
      </div>
    </div>
  );
}

/* --- 6. the memory wall ---------------------------------------------------- */

/** Slide 6: every stage of the machine, drawn to the same linear scale as the
    dataset. Two of the four bars come out invisible, which is the point — a log
    axis would hide exactly the thing worth showing. */
export function MemoryWallFigure() {
  const rows: [string, string, number][] = [
    ['your dataset', '12 TB', 12288],
    ['local SSD', '2 TB', 2048],
    ['system RAM', '128 GB', 128],
    ['GPU memory', '16 GB', 16],
  ];
  const x0 = 152;
  const full = 404;
  const perGb = full / rows[0][2];

  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="Dataset, disk, RAM and GPU memory drawn to one linear scale, where the last two are too small to see">
      {rows.map(([label, size, gb], i) => {
        const y = 34 + i * 46;
        const w = Math.max(gb * perGb, 2);
        const top = i === 0;
        return (
          <g key={label}>
            <Label x={138} y={y + 20} anchor="end" fill={FG} size={14} weight={top ? 700 : 500}>
              {label}
            </Label>
            <rect
              x={x0}
              y={y}
              width={w}
              height={28}
              rx={4}
              fill={PRIMARY}
              fillOpacity={top ? 0.28 : 0.7}
              stroke={PRIMARY}
              strokeWidth={1.4}
            />
            <Label x={x0 + w + 10} y={y + 20} anchor="start" size={13} fill={top ? PRIMARY : MUTED} weight={top ? 700 : 500}>
              {size}
            </Label>
          </g>
        );
      })}

      {/* the two bars you cannot see */}
      <path
        d={`M ${x0 - 8} 126 h -14 v 92 h 14`}
        fill="none"
        stroke={MUTED}
        strokeWidth={1.4}
      />
      <Label x={x0 + 92} y={196} anchor="start" size={13} fill={FG} weight={700}>both of these are drawn to scale</Label>
      <Label x={x0 + 92} y={216} anchor="start" size={12}>there is no version of &ldquo;load it and draw it&rdquo;</Label>

      <Label x={310} y={20} size={12}>one linear scale, top to bottom</Label>
    </svg>
  );
}

/* --- 7. what you can skip without looking ---------------------------------- */

/** Slide 7: the asymmetry that makes volumes harder than surfaces. A mesh index
    knows where geometry is, so anything outside the frustum is never fetched. A
    volume has voxels everywhere; whether a chunk shows anything depends on the
    transfer function, so the only way to find out is to load it. */
export function CullingFigure() {
  /** A little cluster of triangles standing in for a piece of surface. */
  const cluster = (cx: number, cy: number, tone: 'in' | 'out') => (
    <g>
      <rect
        x={cx - 26}
        y={cy - 20}
        width={52}
        height={40}
        rx={3}
        fill="none"
        stroke={tone === 'in' ? PRIMARY : MUTED}
        strokeWidth={1.2}
        strokeDasharray="4 3"
        strokeOpacity={tone === 'in' ? 0.8 : 0.5}
      />
      {[
        `${cx - 22},${cy + 14} ${cx - 4},${cy - 12} ${cx + 8},${cy + 14}`,
        `${cx - 4},${cy - 12} ${cx + 22},${cy - 6} ${cx + 8},${cy + 14}`,
        `${cx - 22},${cy + 14} ${cx + 8},${cy + 14} ${cx - 12},${cy + 2}`,
      ].map((points) => (
        <polygon
          key={points}
          points={points}
          fill={PRIMARY}
          fillOpacity={tone === 'in' ? 0.35 : 0.08}
          stroke={tone === 'in' ? PRIMARY : MUTED}
          strokeWidth={1}
        />
      ))}
    </g>
  );

  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A mesh whose out-of-view geometry is skipped from the index, next to a volume whose chunks must be fetched before their emptiness is known">
      {/* ---- a mesh ---- */}
      <Label x={160} y={24} fill={FG} size={14} weight={700}>a mesh</Label>
      <polygon points="24,124 288,52 288,196" fill={PRIMARY} fillOpacity={0.05} stroke={PRIMARY} strokeWidth={1} strokeOpacity={0.35} />
      <polygon points="16,116 32,124 16,132" fill={FG} />

      {cluster(122, 116, 'in')}
      {cluster(226, 150, 'in')}
      {cluster(232, 34, 'out')}
      <Label x={232} y={68} size={11}>never fetched</Label>

      <Label x={160} y={220} fill={FG} size={13} weight={700}>geometry has bounds</Label>
      <Label x={160} y={238} size={12}>the index says what is out there</Label>

      <line x1={310} y1={20} x2={310} y2={236} stroke={BORDER} strokeWidth={1.2} />

      {/* ---- a volume ---- */}
      <Label x={462} y={24} fill={FG} size={14} weight={700}>a volume</Label>
      <polygon points="330,124 594,52 594,196" fill={PRIMARY} fillOpacity={0.05} stroke={PRIMARY} strokeWidth={1} strokeOpacity={0.35} />
      <polygon points="322,116 338,124 322,132" fill={FG} />

      {Array.from({ length: 4 }, (_, r) =>
        Array.from({ length: 4 }, (_, c) => {
          const x = 400 + c * 40;
          const y = 62 + r * 38;
          // Everything the wedge touches is a candidate, and looks identical
          // from the outside.
          const inView = x + 34 > 330 && y + 30 > 124 - ((x - 330) * 72) / 264 && y < 124 + ((x - 330) * 72) / 264;
          return (
            <g key={`${c},${r}`}>
              <rect
                x={x}
                y={y}
                width={34}
                height={30}
                rx={3}
                fill={inView ? PRIMARY : SURFACE}
                fillOpacity={inView ? 0.12 : 0.5}
                stroke={inView ? PRIMARY : BORDER}
                strokeWidth={inView ? 1.4 : 1}
              />
              {inView ? (
                <Label x={x + 17} y={y + 21} size={14} fill={PRIMARY} weight={700}>?</Label>
              ) : null}
            </g>
          );
        }),
      )}

      <Label x={462} y={220} fill={FG} size={13} weight={700}>every voxel exists</Label>
      <Label x={462} y={238} size={12}>load it to find out it was empty</Label>
    </svg>
  );
}

/* --- 8. the obvious objection ---------------------------------------------- */

/** The slide between the two hard things: someone in the room says the obvious
    thing, with the face of a person who has never met a transfer function. */
export function ObviousFigure() {
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A dumbfounded face asking why you cannot simply skip drawing what is not visible">
      <g>
        <circle cx={150} cy={125} r={86} fill={PRIMARY} fillOpacity={0.12} stroke={PRIMARY} strokeWidth={2.2} />

        {/* eyebrows, up somewhere near the hairline */}
        <path d="M 98 72 q 22 -14 44 -4" fill="none" stroke={PRIMARY} strokeWidth={3.4} strokeLinecap="round" />
        <path d="M 158 68 q 22 -10 44 4" fill="none" stroke={PRIMARY} strokeWidth={3.4} strokeLinecap="round" />

        {/* a wide, entirely untroubled stare */}
        <circle cx={120} cy={112} r={19} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
        <circle cx={180} cy={112} r={19} fill={SURFACE} stroke={PRIMARY} strokeWidth={2} />
        <circle cx={124} cy={116} r={7} fill={FG} />
        <circle cx={184} cy={116} r={7} fill={FG} />

        {/* the mouth of someone mid-suggestion */}
        <ellipse cx={150} cy={170} rx={17} ry={13} fill={FG} fillOpacity={0.75} />
      </g>

      {/* what they said */}
      <g>
        <path d="M 268 120 l -22 8 l 22 10 z" fill={SURFACE} stroke={PRIMARY} strokeWidth={1.8} />
        <rect x={266} y={56} width={330} height={112} rx={16} fill={SURFACE} stroke={PRIMARY} strokeWidth={1.8} />
        <Label x={431} y={98} fill={FG} size={21} weight={700}>Well,just don&rsquo;t draw</Label>
        <Label x={431} y={128} fill={FG} size={21} weight={700}>what you don&rsquo;t see?</Label>
        <Label x={431} y={154} size={13}>.....</Label>
      </g>

      <Label x={431} y={200} size={13} fill={MUTED}>— someone, every single time</Label>
    </svg>
  );
}

/* --- 9. one file versus one file per chunk --------------------------------- */

/** Slide 15, animated on a six-second loop: both sides start downloading at the
    same moment. The gzipped stack can show nothing until the last byte lands;
    the chunked array is drawing within the first tenth of the loop.

    The format on the left is deliberately a `.tif.gz` — a *tiled* TIFF can be
    range-read, and pretending otherwise would be a strawman. One deflate stream
    genuinely cannot: byte N is undecodable without bytes 0..N-1, and nothing in
    it says where a given plane starts. */
export function WholeFileVsChunksFigure() {
  const tiles = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg viewBox="0 0 620 260" className="w-full" role="img" aria-label="A gzipped stack that shows nothing until it has fully downloaded, beside a chunked array that draws as its first chunks arrive">
      <style>{`
        .wf-bar { transform-box: fill-box; transform-origin: left center; }
        @keyframes wf-slow { 0% { transform: scaleX(0.004); } 88%, 100% { transform: scaleX(1); } }
        @keyframes wf-fast { 0% { transform: scaleX(0.004); } 31%, 100% { transform: scaleX(1); } }
        @keyframes wf-late { 0%, 86% { opacity: 0; } 93%, 100% { opacity: 1; } }
        @keyframes wf-early-out { 0%, 86% { opacity: 1; } 93%, 100% { opacity: 0; } }
        ${tiles
          .map(
            (i) =>
              `@keyframes wf-t${i} { 0%, ${(i * 3.3).toFixed(1)}% { opacity: 0; } ${(i * 3.3 + 1.4).toFixed(1)}%, 100% { opacity: 1; } }
        .wf-t${i} { animation: wf-t${i} 6s linear infinite; }`,
          )
          .join('\n        ')}
        .wf-slow { animation: wf-slow 6s linear infinite; }
        .wf-fast { animation: wf-fast 6s linear infinite; }
        .wf-late { animation: wf-late 6s linear infinite; }
        .wf-out { animation: wf-early-out 6s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .wf-slow, .wf-fast, .wf-late, .wf-out,
          ${tiles.map((i) => `.wf-t${i}`).join(', ')} { animation-duration: 0.001s; }
        }
      `}</style>

      {/* ---- one deflate stream ---- */}
      <Label x={157} y={22} fill={FG} size={14} weight={700}>volume.tif.gz</Label>

      <path
        d="M 30 44 h 40 l 16 16 v 56 a 5 5 0 0 1 -5 5 h -51 a 5 5 0 0 1 -5 -5 v -67 a 5 5 0 0 1 5 -5 z"
        fill={SURFACE}
        stroke={BORDER}
        strokeWidth={1.5}
      />
      <path d="M 70 44 v 11 a 5 5 0 0 0 5 5 h 11" fill="none" stroke={BORDER} strokeWidth={1.5} />
      <Label x={58} y={140} size={11}>2 TB</Label>

      <line x1={94} y1={82} x2={112} y2={82} stroke={MUTED} strokeWidth={2} markerEnd="url(#wf-muted)" />

      {/* the tab: empty until the very last moment */}
      <rect x={120} y={40} width={162} height={102} rx={7} fill={SURFACE} stroke={BORDER} strokeWidth={1.6} />
      <g className="wf-out">
        <Label x={201} y={96} size={12}>nothing to show yet</Label>
      </g>
      <g className="wf-late">
        <rect x={128} y={48} width={146} height={86} rx={4} fill={PRIMARY} fillOpacity={0.12} />
        <path d="M 150 122 q 28 -14 46 -40 q 18 -24 40 -38" fill="none" stroke={PRIMARY} strokeWidth={9} strokeOpacity={0.65} strokeLinecap="round" />
      </g>

      <rect x={30} y={162} width={252} height={13} rx={6.5} fill={SURFACE} stroke={BORDER} strokeWidth={1.3} />
      <rect className="wf-bar wf-slow" x={32} y={164} width={248} height={9} rx={4.5} fill={PRIMARY} fillOpacity={0.55} />

      <Label x={157} y={198} size={12}>one deflate stream — no byte range means anything</Label>
      <Label x={157} y={228} fill={FG} size={14} weight={700}>all of it, before any of it</Label>

      <line x1={310} y1={16} x2={310} y2={244} stroke={BORDER} strokeWidth={1.2} />

      {/* ---- one file per chunk ---- */}
      <Label x={462} y={22} fill={FG} size={14} weight={700}>volume.zarr</Label>

      <g>
        {Array.from({ length: 4 }, (_, r) =>
          Array.from({ length: 3 }, (_, c) => (
            <rect
              key={`${c},${r}`}
              x={332 + c * 20}
              y={44 + r * 20}
              width={17}
              height={17}
              rx={2}
              fill={SURFACE}
              stroke={BORDER}
              strokeWidth={1}
            />
          )),
        )}
      </g>
      <Label x={361} y={140} size={11}>chunks</Label>

      {[0, 1, 2].map((i) => (
        <line key={i} x1={396} y1={62 + i * 20} x2={414} y2={62 + i * 20} stroke={PRIMARY} strokeWidth={1.6} markerEnd="url(#wf-primary)" />
      ))}

      {/* the tab: filling in as the chunks land */}
      <rect x={422} y={40} width={162} height={102} rx={7} fill={SURFACE} stroke={PRIMARY} strokeWidth={1.6} strokeOpacity={0.6} />
      {tiles.map((i) => (
        <rect
          key={i}
          className={`wf-t${i}`}
          x={430 + (i % 3) * 49}
          y={48 + Math.floor(i / 3) * 29}
          width={47}
          height={27}
          rx={2}
          fill={PRIMARY}
          fillOpacity={0.22 + (i % 3) * 0.06}
          stroke={PRIMARY}
          strokeWidth={0.8}
          strokeOpacity={0.5}
        />
      ))}

      <rect x={332} y={162} width={252} height={13} rx={6.5} fill={SURFACE} stroke={BORDER} strokeWidth={1.3} />
      <rect className="wf-bar wf-fast" x={334} y={164} width={248} height={9} rx={4.5} fill={PRIMARY} fillOpacity={0.55} />

      <Label x={462} y={198} size={12}>nine chunks, a few megabytes, streaming in one after another</Label>
      <Label x={462} y={228} fill={FG} size={14} weight={700}>drawing from the first chunk on</Label>

      <Markers id="wf" />
    </svg>
  );
}

/* --- 10. the per-frame pipeline -------------------------------------------- */

/** A pipeline stage. `tone` picks whether it is on the fast path everyone takes
    or the expensive detour only a cache miss goes down. */
function Stage({
  x,
  y,
  w,
  title,
  detail,
  tone = 'fast',
}: {
  x: number;
  y: number;
  w: number;
  title: string;
  detail: string;
  tone?: 'fast' | 'slow' | 'check';
}) {
  const h = 56;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={PRIMARY}
        fillOpacity={tone === 'fast' ? 0.12 : 0.05}
        stroke={tone === 'slow' ? BORDER : PRIMARY}
        strokeWidth={tone === 'fast' ? 1.9 : 1.5}
        strokeOpacity={tone === 'fast' ? 0.7 : 1}
        strokeDasharray={tone === 'check' ? '6 4' : undefined}
      />
      <Label x={x + w / 2} y={y + 25} fill={FG} size={13} weight={700}>{title}</Label>
      <Label x={x + w / 2} y={y + 43} size={11}>{detail}</Label>
    </g>
  );
}

/** Slide 17: one pass of the loop. The camera moves, the bricks it now needs
    are planned, and — for most frames — they are already resident and the pass
    ends right there. Only a miss pays for the bottom row. */
export function PipelineFigure() {
  return (
    <svg viewBox="0 0 620 262" className="w-full" role="img" aria-label="A per-frame pipeline that ends early when the planned bricks are already resident, and otherwise fetches, decodes and uploads them">
      <Stage x={12} y={26} w={104} title="view change" detail="you moved" />
      <line x1={118} y1={54} x2={132} y2={54} stroke={PRIMARY} strokeWidth={2.4} markerEnd="url(#pipe-primary)" />

      <Stage x={136} y={26} w={110} title="plan bricks" detail="which, at which level" />
      <line x1={248} y1={54} x2={262} y2={54} stroke={PRIMARY} strokeWidth={2.4} markerEnd="url(#pipe-primary)" />

      <Stage x={266} y={26} w={112} title="already here?" detail="ask the cache" tone="check" />

      {/* the fast path: most frames stop here */}
      <line x1={380} y1={54} x2={462} y2={54} stroke={PRIMARY} strokeWidth={2.8} markerEnd="url(#pipe-primary)" />
      <Label x={421} y={44} size={11} fill={PRIMARY} weight={700}>yes</Label>
      <Label x={421} y={74} size={11}>draw it</Label>

      <Stage x={470} y={26} w={112} title="the frame" detail="on screen" />

      {/* the detour a miss pays for */}
      <path d="M 322 84 v 22 q 0 10 -12 10 h -58 q -12 0 -12 10 v 14" fill="none" stroke={MUTED} strokeWidth={1.8} markerEnd="url(#pipe-muted)" />
      <Label x={300} y={104} anchor="start" size={11}>no — go and get it</Label>

      <Stage x={186} y={152} w={112} title="zarr on MinIO" detail="GET the chunk keys" tone="slow" />
      <line x1={300} y1={180} x2={314} y2={180} stroke={MUTED} strokeWidth={1.8} markerEnd="url(#pipe-muted)" />
      <Stage x={318} y={152} w={112} title="WASM decode" detail="blosc / zstd, in a worker" tone="slow" />
      <line x1={432} y1={180} x2={446} y2={180} stroke={MUTED} strokeWidth={1.8} markerEnd="url(#pipe-muted)" />
      <Stage x={450} y={152} w={112} title="WebGPU" detail="upload as texture" tone="slow" />

      {/* and back up into the frame, now resident for next time */}
      <path d="M 506 148 v -24 q 0 -10 12 -10 h 8 q 12 0 12 -10 v -18" fill="none" stroke={MUTED} strokeWidth={1.8} markerEnd="url(#pipe-muted)" />

      {/* the loop */}
      <path d="M 584 54 h 22 v 172 h -542 v -136" fill="none" stroke={BORDER} strokeWidth={1.4} strokeDasharray="5 5" markerEnd="url(#pipe-muted)" />
      <Label x={330} y={220} size={12} fill={FG} weight={700}>and again, every frame you keep moving</Label>
      <Label x={330} y={248} size={12}>most frames never leave the top row</Label>

      <Markers id="pipe" />
    </svg>
  );
}

/* --- 11. the layers of a scene --------------------------------------------- */

/** An isometric plane, drawn as a diamond of width `w` and height `h`. */
function isoPlane(cx: number, cy: number, w: number, h: number) {
  return `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}`;
}

/** Slide 19: what is actually in a scene. Voxels, a mask, surfaces and the
    things you marked — four kinds of data, each living in its own space, drawn
    over one another because the graph says how they line up. */
export function LayerStackFigure() {
  const cx = 178;
  const w = 250;
  const h = 100;
  const levels = [200, 152, 104, 56];
  const [imageY, maskY, meshY, noteY] = levels;

  const label = (y: number, title: string, detail: string) => (
    <g>
      <line x1={cx + w / 2 - 20} y1={y} x2={332} y2={y} stroke={BORDER} strokeWidth={1.2} strokeDasharray="3 3" />
      <Label x={342} y={y - 2} anchor="start" fill={FG} size={14} weight={700}>{title}</Label>
      <Label x={342} y={y + 16} anchor="start" size={12}>{detail}</Label>
    </g>
  );

  return (
    <svg viewBox="0 0 620 260" className="w-full" role="img" aria-label="Voxels, a segmentation mask, meshes and annotations stacked as separate layers over the same footprint">
      {/* they share a footprint, which is the whole point */}
      {[cx - w / 2, cx + w / 2].map((x) => (
        <line key={x} x1={x} y1={noteY} x2={x} y2={imageY} stroke={BORDER} strokeWidth={1.2} strokeDasharray="4 4" />
      ))}

      {/* the voxels */}
      <polygon points={isoPlane(cx, imageY, w, h)} fill={PRIMARY} fillOpacity={0.1} stroke={PRIMARY} strokeWidth={1.5} strokeOpacity={0.5} />
      {[-3, -1.5, 0, 1.5, 3].map((k) => (
        <line
          key={k}
          x1={cx - w / 2 + (w / 8) * (k + 4)}
          y1={imageY - h / 2 + (h / 8) * (k + 4)}
          x2={cx + (w / 8) * (k + 4) - w / 8}
          y2={imageY + h / 2 - (h / 8) * (4 - k) + h / 8}
          stroke={PRIMARY}
          strokeWidth={0.9}
          strokeOpacity={0.35}
        />
      ))}
      {label(imageY, 'image', 'the voxels you acquired')}

      {/* the mask */}
      <polygon points={isoPlane(cx, maskY, w, h)} fill={SURFACE} fillOpacity={0.35} stroke={BORDER} strokeWidth={1.4} />
      {[
        [cx - 46, maskY - 8],
        [cx + 22, maskY + 12],
        [cx + 54, maskY - 16],
      ].map(([bx, by], i) => (
        <ellipse key={i} cx={bx} cy={by} rx={26 - i * 4} ry={12 - i * 2} fill={PRIMARY} fillOpacity={0.45 - i * 0.1} stroke={PRIMARY} strokeWidth={1} />
      ))}
      {label(maskY, 'segmentation mask', 'a label per object')}

      {/* the meshes */}
      <polygon points={isoPlane(cx, meshY, w, h)} fill={SURFACE} fillOpacity={0.25} stroke={BORDER} strokeWidth={1.4} />
      {[
        `${cx - 40},${meshY} ${cx - 12},${meshY - 16} ${cx + 4},${meshY + 6}`,
        `${cx - 12},${meshY - 16} ${cx + 34},${meshY - 8} ${cx + 4},${meshY + 6}`,
        `${cx - 40},${meshY} ${cx + 4},${meshY + 6} ${cx - 18},${meshY + 16}`,
        `${cx + 4},${meshY + 6} ${cx + 34},${meshY - 8} ${cx + 30},${meshY + 14}`,
      ].map((points) => (
        <polygon key={points} points={points} fill={PRIMARY} fillOpacity={0.22} stroke={PRIMARY} strokeWidth={1.1} strokeOpacity={0.8} />
      ))}
      {label(meshY, 'meshes', 'surfaces, at their own LOD')}

      {/* what you marked */}
      <polygon points={isoPlane(cx, noteY, w, h)} fill={SURFACE} fillOpacity={0.2} stroke={BORDER} strokeWidth={1.4} />
      {[
        [cx - 34, noteY - 4],
        [cx + 30, noteY + 6],
      ].map(([px, py], i) => (
        <g key={i}>
          <path d={`M ${px} ${py} l -6 -16 a 6 6 0 1 1 12 0 z`} fill={PRIMARY} fillOpacity={0.75} />
          <circle cx={px} cy={py - 17} r={2.6} fill={SURFACE} />
        </g>
      ))}
      <rect x={cx + 42} y={noteY - 16} width={52} height={17} rx={4} fill={SURFACE} stroke={PRIMARY} strokeWidth={1} />
      <Label x={cx + 68} y={noteY - 4} size={10} fill={PRIMARY}>34.1 um</Label>
      {label(noteY, 'annotations', 'what you marked, and measured')}

      <Label x={476} y={244} size={12}>one scene, four residents</Label>
      <Label x={178} y={244} size={12}>each in its own space</Label>
    </svg>
  );
}

/* --- 12. probing a volume -------------------------------------------------- */

/** Slide 19: what a click means in 3D. On a plane you pick a pixel; in a volume
    you cast a ray and march it until a sample is actually visible. That first
    hit is the voxel you meant, and it is what an annotation gets attached to.

    Animated on a five-second loop: samples step along the ray, the first one
    inside the surface stops it, and the readout and pin follow. */
export function RaycastFigure() {
  const from = { x: 84, y: 136 };
  const to = { x: 556, y: 112 };
  /** Samples that pass through empty space before the surface is reached. */
  const steps = 8;
  const stride = 22;
  const at = (x: number) => from.y + ((to.y - from.y) * (x - from.x)) / (to.x - from.x);
  const firstX = 186;
  const hitX = firstX + steps * stride;

  return (
    <svg viewBox="0 0 620 270" className="w-full" role="img" aria-label="A ray cast from the cursor through a volume, stopping at the first visible sample, where an annotation is placed">
      <style>{`
        ${Array.from({ length: steps }, (_, i) =>
          `@keyframes rc-s${i} { 0%, ${(i * 4.4).toFixed(1)}% { opacity: 0; } ${(i * 4.4 + 2).toFixed(1)}%, 92% { opacity: 1; } 100% { opacity: 0; } }
        .rc-s${i} { animation: rc-s${i} 5s linear infinite; }`,
        ).join('\n        ')}
        @keyframes rc-hit { 0%, 38% { opacity: 0; transform: scale(0.4); } 46%, 92% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(1); } }
        @keyframes rc-late { 0%, 48% { opacity: 0; } 56%, 92% { opacity: 1; } 100% { opacity: 0; } }
        .rc-hit { animation: rc-hit 5s linear infinite; transform-box: fill-box; transform-origin: center; }
        .rc-late { animation: rc-late 5s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          ${Array.from({ length: steps }, (_, i) => `.rc-s${i}`).join(', ')},
          .rc-hit, .rc-late { animation-duration: 0.001s; }
        }
      `}</style>

      {/* the camera, and the pixel you actually clicked */}
      <path d="M 20 128 l 22 -12 v 44 l -22 -12 z" fill={FG} fillOpacity={0.8} />
      <rect x={44} y={118} width={22} height={36} rx={4} fill={SURFACE} stroke={FG} strokeWidth={1.4} />
      <line x1={78} y1={92} x2={78} y2={182} stroke={BORDER} strokeWidth={1.6} />
      <path d="M 74 130 l 12 16 l -5 1 l 5 9 l -5 2 l -5 -9 l -4 3 z" fill={FG} />
      <Label x={62} y={204} size={11}>your cursor</Label>

      {/* the volume it is pointed into */}
      <rect x={168} y={44} width={388} height={192} rx={8} fill={SURFACE} fillOpacity={0.35} stroke={BORDER} strokeWidth={1.5} strokeDasharray="6 4" />
      <Label x={362} y={32} fill={FG} size={13} weight={700}>the volume</Label>

      <ellipse cx={300} cy={192} rx={46} ry={30} fill={PRIMARY} fillOpacity={0.14} stroke={PRIMARY} strokeWidth={1.2} strokeOpacity={0.4} />
      <ellipse cx={402} cy={124} rx={44} ry={36} fill={PRIMARY} fillOpacity={0.3} stroke={PRIMARY} strokeWidth={1.6} strokeOpacity={0.75} />
      <ellipse cx={492} cy={190} rx={36} ry={26} fill={PRIMARY} fillOpacity={0.12} stroke={PRIMARY} strokeWidth={1.2} strokeOpacity={0.35} />

      {/* the ray: solid up to the hit, never sampled past it */}
      <line x1={from.x} y1={from.y} x2={hitX} y2={at(hitX)} stroke={PRIMARY} strokeWidth={1.8} strokeOpacity={0.55} />
      <line x1={hitX} y1={at(hitX)} x2={to.x} y2={to.y} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 5" strokeOpacity={0.5} />

      {Array.from({ length: steps }, (_, i) => {
        const x = firstX + i * stride;
        return (
          <circle key={i} className={`rc-s${i}`} cx={x} cy={at(x)} r={4} fill={PRIMARY} fillOpacity={0.85} />
        );
      })}

      {/* the first sample that is actually visible */}
      <g className="rc-hit">
        <circle cx={hitX} cy={at(hitX)} r={11} fill="none" stroke={PRIMARY} strokeWidth={2.4} />
        <circle cx={hitX} cy={at(hitX)} r={4} fill={PRIMARY} />
      </g>

      {/* what you keep */}
      <g className="rc-late">
        <path d={`M ${hitX} ${at(hitX) - 12} l -7 -19 a 7 7 0 1 1 14 0 z`} fill={PRIMARY} fillOpacity={0.85} />
        <circle cx={hitX} cy={at(hitX) - 32} r={3} fill={SURFACE} />
        <rect x={hitX + 22} y={at(hitX) - 52} width={148} height={44} rx={8} fill={SURFACE} stroke={PRIMARY} strokeWidth={1.5} />
        <Label x={hitX + 96} y={at(hitX) - 34} anchor="middle" fill={FG} size={13} weight={700}>label 42</Label>
        <Label x={hitX + 96} y={at(hitX) - 17} anchor="middle" size={11}>annotation placed here</Label>
      </g>

      <Label x={186} y={258} anchor="start" size={13} fill={FG} weight={700}>a click is a ray, not a pixel</Label>
      <Label x={556} y={258} anchor="end" size={12}>it stops at the first sample you can actually see</Label>
    </svg>
  );
}

/* --- 13. why meshes are a different problem -------------------------------- */

/** The arbor of one traced neuron, as polylines in figure space. */
const ARBOR: [number, number][][] = [
  [[112, 140], [92, 118], [74, 94], [58, 68], [46, 46]],
  [[74, 94], [48, 96], [28, 88]],
  [[112, 140], [130, 112], [142, 84], [150, 54]],
  [[142, 84], [170, 72], [192, 58]],
  [[112, 140], [94, 170], [78, 194], [60, 214]],
  [[112, 140], [138, 166], [166, 182], [196, 190]],
  [[166, 182], [180, 208], [196, 228]],
  [[112, 140], [152, 144], [196, 148], [238, 156], [272, 172]],
];

/** Walk a polyline as a strip of quads, split into triangles — a tube in
    wireframe, which is what a surfaced process actually is. */
function tube(points: [number, number][], base: number, key: string) {
  const fine: [number, number][] = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    for (let k = 0; k < 4; k += 1) {
      const t = k / 4;
      fine.push([
        points[i][0] + (points[i + 1][0] - points[i][0]) * t,
        points[i][1] + (points[i + 1][1] - points[i][1]) * t,
      ]);
    }
  }
  fine.push(points[points.length - 1]);

  const faces = [];
  for (let i = 0; i < fine.length - 1; i += 1) {
    const [x0, y0] = fine[i];
    const [x1, y1] = fine[i + 1];
    const dx = x1 - x0;
    const dy = y1 - y0;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const w0 = Math.max(1.4, base * (1 - i / fine.length));
    const w1 = Math.max(1.4, base * (1 - (i + 1) / fine.length));
    const a = `${x0 + nx * w0},${y0 + ny * w0}`;
    const b = `${x1 + nx * w1},${y1 + ny * w1}`;
    const c = `${x1 - nx * w1},${y1 - ny * w1}`;
    const d = `${x0 - nx * w0},${y0 - ny * w0}`;
    faces.push(
      <polygon key={`${key}-${i}-a`} points={`${a} ${b} ${c}`} fill={PRIMARY} fillOpacity={0.16} stroke={PRIMARY} strokeWidth={0.5} strokeOpacity={0.75} />,
      <polygon key={`${key}-${i}-b`} points={`${a} ${c} ${d}`} fill={PRIMARY} fillOpacity={0.24} stroke={PRIMARY} strokeWidth={0.5} strokeOpacity={0.75} />,
    );
  }
  return faces;
}

/** Slide 21: one traced neuron, surfaced at full resolution, is already more
    geometry than an engine will take in a single buffer — and unlike a volume
    there is no grid to cut it along. */
export function MeshBlowupFigure() {
  const soma = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    return [112 + Math.cos(a) * 26, 140 + Math.sin(a) * 22] as const;
  });

  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A single traced neuron surfaced at full detail, whose geometry no engine will draw in one buffer">
      {ARBOR.map((branch, i) => tube(branch, 7 - Math.min(3, i * 0.4), `b${i}`))}
      {soma.map((p, i) => (
        <polygon
          key={`s${i}`}
          points={`${p[0]},${p[1]} ${soma[(i + 1) % soma.length][0]},${soma[(i + 1) % soma.length][1]} 112,140`}
          fill={PRIMARY}
          fillOpacity={i % 2 ? 0.3 : 0.22}
          stroke={PRIMARY}
          strokeWidth={0.6}
          strokeOpacity={0.8}
        />
      ))}

      <Label x={150} y={244} fill={FG} size={13} weight={700}>one traced neuron</Label>

      <line x1={300} y1={130} x2={344} y2={130} stroke={MUTED} strokeWidth={2} markerEnd="url(#blow-muted)" />
      <Label x={322} y={118} size={11}>surface it</Label>

      <rect x={356} y={70} width={112} height={82} rx={8} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
      <Label x={412} y={104} fill={FG} size={13} weight={700}>one buffer</Label>
      <Label x={412} y={124} size={11} fill={PRIMARY}>10⁸ vertices</Label>
      <Label x={412} y={172} size={11}>a single object —</Label>
      <Label x={412} y={188} size={11}>not a scene full of them</Label>

      <line x1={476} y1={110} x2={510} y2={110} stroke={MUTED} strokeWidth={2} markerEnd="url(#blow-muted)" />

      <rect x={522} y={70} width={78} height={82} rx={8} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
      <line x1={522} y1={90} x2={600} y2={90} stroke={BORDER} strokeWidth={1.2} />
      <circle cx={533} cy={80} r={3} fill={MUTED} fillOpacity={0.6} />
      <path d="M 546 108 l 30 30 M 576 108 l -30 30" stroke={MUTED} strokeWidth={3} strokeLinecap="round" />
      <Label x={561} y={172} fill={FG} size={12} weight={700}>the engine</Label>
      <Label x={561} y={188} size={12}>gives up</Label>

      <g>
        <rect x={300} y={206} width={300} height={30} rx={9} fill={PRIMARY} fillOpacity={0.08} stroke={PRIMARY} strokeWidth={1.5} strokeOpacity={0.45} />
        <Label x={450} y={226} size={12.5} fill={FG} weight={700}>a volume has a grid — a mesh has none</Label>
      </g>

      <Markers id="blow" />
    </svg>
  );
}
