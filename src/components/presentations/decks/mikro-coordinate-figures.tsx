'use client';

/* Figures for the "Mikro coordinate system" deck. Plain SVG drawn from the
   site's theme tokens, so they flip with light/dark like the rest of the deck.
   Each figure has a fixed viewBox and scales with the slide.

   They illustrate the coordinate-system graph: spaces as nodes, transformations
   as directed edges. See `mikro-coordinate-system.tsx` for the deck itself. */

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

/** A coordinate-system node: a name and the unit its axes carry. */
function SpaceNode({
  x,
  y,
  w = 150,
  h = 58,
  name,
  unit,
  tone = 'pixel',
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  name: string;
  unit: string;
  tone?: 'pixel' | 'physical' | 'records';
}) {
  const physical = tone === 'physical';
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={physical ? PRIMARY : SURFACE}
        fillOpacity={physical ? 0.12 : 1}
        stroke={physical ? PRIMARY : BORDER}
        strokeWidth={1.8}
        strokeOpacity={physical ? 0.7 : 1}
        strokeDasharray={tone === 'records' ? '6 4' : undefined}
      />
      <Label x={x + w / 2} y={y + h / 2 - 2} fill={FG} size={14} weight={600}>
        {name}
      </Label>
      <Label x={x + w / 2} y={y + h / 2 + 16} size={12} fill={physical ? PRIMARY : MUTED}>
        {unit}
      </Label>
    </g>
  );
}

/* --- 0. the opening story -------------------------------------------------- */

/** A neuron with its axon initial segment picked out — reused across the three
    opening slides so the same cell is followed the whole way through. */
function NeuronScene({
  x,
  y,
  w,
  h,
  flat = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  /** Draw it as a label mask: flat fills, no soma, no faint neighbours. */
  flat?: boolean;
}) {
  const sx = w / 300;
  const sy = h / 200;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
      <g transform={`translate(${x} ${y}) scale(${sx} ${sy})`}>
        {!flat ? (
          <>
            {/* dendrites */}
            <path d="M 62 150 q -26 -20 -34 -50" fill="none" stroke={PRIMARY} strokeWidth={5} strokeOpacity={0.13} strokeLinecap="round" />
            <path d="M 62 150 q -34 8 -46 34" fill="none" stroke={PRIMARY} strokeWidth={5} strokeOpacity={0.13} strokeLinecap="round" />
            <path d="M 62 150 q 6 -40 -4 -62" fill="none" stroke={PRIMARY} strokeWidth={4} strokeOpacity={0.1} strokeLinecap="round" />
            {/* the distal axon, past the AIS */}
            <path d="M 176 78 q 44 -28 96 -34" fill="none" stroke={PRIMARY} strokeWidth={5} strokeOpacity={0.13} strokeLinecap="round" />
          </>
        ) : null}
        {/* the AIS itself */}
        <path
          d="M 74 142 q 42 -22 66 -42 q 16 -14 36 -22"
          fill="none"
          stroke={PRIMARY}
          strokeWidth={flat ? 15 : 13}
          strokeOpacity={flat ? 0.8 : 0.85}
          strokeLinecap="round"
        />
        {!flat ? (
          <circle cx={62} cy={150} r={20} fill={PRIMARY} fillOpacity={0.28} stroke={PRIMARY} strokeWidth={1.6} />
        ) : null}
      </g>
    </g>
  );
}

/** A mouse cursor, pointing at (x, y). */
function Cursor({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M ${x} ${y} l 16 22 l -6 2 l 6 12 l -6 3 l -6 -12 l -5 4 z`}
      fill={FG}
      stroke={SURFACE}
      strokeWidth={1.4}
    />
  );
}

/** Slide 1: you point at the AIS and ask the only question you care about. */
export function AisQuestionFigure() {
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A cursor pointing at an axon initial segment, asking how long it is">
      <NeuronScene x={40} y={26} w={330} h={200} />
      <Cursor x={196} y={92} />

      {/* the question, in a callout */}
      <g>
        <path d="M 236 118 q 40 6 66 6" fill="none" stroke={PRIMARY} strokeWidth={1.6} strokeDasharray="4 4" />
        <rect x={306} y={100} width={266} height={54} rx={12} fill={SURFACE} stroke={PRIMARY} strokeWidth={1.8} />
        <Label x={439} y={124} fill={FG} size={19} weight={700}>how long is this?</Label>
        <Label x={439} y={143} size={13}>...in micrometers, obviously</Label>
      </g>

      <Label x={205} y={240} size={13}>one gesture, one number</Label>
    </svg>
  );
}

/** Slide 2: the number exists, three analysis steps away, in someone's folder. */
export function SpreadsheetFigure() {
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A pipeline from image to segmentation mask to a spreadsheet sitting in an unrelated folder, with a callout: we lose interactive exploration">
      <NeuronScene x={16} y={44} w={150} h={110} />
      <Label x={91} y={36} fill={FG} size={13} weight={700}>image</Label>
      <Cursor x={96} y={72} />

      <line x1={174} y1={99} x2={219} y2={99} stroke={MUTED} strokeWidth={2} markerEnd="url(#sheet-muted)" />
      <Label x={196} y={88} size={11}>segment</Label>

      <NeuronScene x={227} y={44} w={150} h={110} flat />
      <Label x={302} y={36} fill={FG} size={13} weight={700}>mask</Label>

      <line x1={385} y1={99} x2={430} y2={99} stroke={MUTED} strokeWidth={2} markerEnd="url(#sheet-muted)" />
      <Label x={407} y={88} size={11}>measure</Label>

      {/* the folder it all ends up in */}
      <g>
        <path
          d="M 438 40 h 46 l 10 12 h 106 a 6 6 0 0 1 6 6 v 96 a 6 6 0 0 1 -6 6 h -162 a 6 6 0 0 1 -6 -6 v -108 a 6 6 0 0 1 6 -6 z"
          fill={SURFACE}
          stroke={BORDER}
          strokeWidth={1.5}
        />
        <Label x={448} y={78} anchor="start" size={11}>~/Desktop/imaging/</Label>
        <Label x={448} y={96} anchor="start" size={11}>old_run/</Label>
        <rect x={444} y={104} width={158} height={20} rx={4} fill={PRIMARY} fillOpacity={0.16} />
        <Label x={452} y={118} anchor="start" size={11} fill={FG}>results_final_v3.xlsx</Label>
        <Label x={448} y={140} anchor="start" size={11}>results_final_v2.xlsx</Label>
        <Label x={520} y={30} anchor="middle" size={13} fill={FG} weight={700}>somewhere else</Label>
      </g>

      {/* what the detour actually cost */}
      <g>
        <rect x={20} y={180} width={580} height={52} rx={12} fill={PRIMARY} fillOpacity={0.08} stroke={PRIMARY} strokeWidth={1.8} strokeOpacity={0.5} />
        <circle cx={46} cy={206} r={11} fill={PRIMARY} fillOpacity={0.15} stroke={PRIMARY} strokeWidth={1.4} />
        <path d="M 41 201 l 10 10 M 51 201 l -10 10" stroke={PRIMARY} strokeWidth={1.8} strokeLinecap="round" />
        <Label x={70} y={202} anchor="start" size={16} weight={700} fill={FG}>we lose interactive exploration</Label>
        <Label x={70} y={222} anchor="start" size={12.5}>the pixels can no longer be asked anything</Label>
      </g>

      <Markers id="sheet" />
    </svg>
  );
}

/** Slide 4: the same gesture, answered in place. */
export function HoverAnswerFigure() {
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="Hovering the axon initial segment shows its length in a tooltip">
      <NeuronScene x={40} y={26} w={330} h={200} />
      <Cursor x={196} y={92} />

      {/* the tooltip */}
      <g>
        <rect x={210} y={110} width={190} height={84} rx={10} fill={SURFACE} stroke={PRIMARY} strokeWidth={1.8} />
        <Label x={226} y={134} anchor="start" size={13} fill={PRIMARY} weight={700}>AIS #42</Label>
        <Label x={226} y={158} anchor="start" size={16} fill={FG} weight={600}>length 34.1 um</Label>
        <Label x={226} y={180} anchor="start" size={13}>mean intensity 1042</Label>
      </g>

      <Label x={428} y={134} anchor="start" size={13} fill={FG} weight={700}>no folder</Label>
      <Label x={428} y={158} anchor="start" size={13} fill={FG} weight={700}>no round-trip</Label>
      <Label x={428} y={180} anchor="start" size={12}>the graph already knew</Label>
    </svg>
  );
}

/** Slide 5: every processing step leaves its own versioned edge, so the chain
    from raw pixels to the number is walkable. Note the two edges that hang off
    the chain rather than sitting in it: placement is an AFFINE into a space,
    and FIELD is deliberately not a derivation. */
export function LineageFigure() {
  const chain = [
    { x: 18, label: 'raw tile', unit: 'px' },
    { x: 240, label: 'level 1', unit: 'px' },
    { x: 462, label: 'AIS mask', unit: 'px' },
  ];
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="A derivation chain from raw tile to segmentation mask, with placement and field edges hanging off it">
      {chain.map((node) => (
        <g key={node.label}>
          <rect x={node.x} y={30} width={140} height={54} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.8} />
          <Label x={node.x + 70} y={54} fill={FG} size={14} weight={600}>{node.label}</Label>
          <Label x={node.x + 70} y={71} size={11}>{node.unit}</Label>
        </g>
      ))}

      {/* the derivation chain itself */}
      {[
        { x: 160, kind: 'SCALE', version: 'v1' },
        { x: 382, kind: 'DERIVED', version: 'v1' },
      ].map((edge) => (
        <g key={edge.kind}>
          <line x1={edge.x} y1={57} x2={edge.x + 76} y2={57} stroke={PRIMARY} strokeWidth={2.2} markerEnd="url(#lin-primary)" />
          <Label x={edge.x + 40} y={22} size={11} fill={PRIMARY} weight={700}>{edge.kind}</Label>
          <Label x={edge.x + 40} y={76} size={11}>{edge.version}</Label>
        </g>
      ))}

      {/* placement hangs off the chain: an affine into a physical space */}
      <line x1={88} y1={88} x2={88} y2={150} stroke={PRIMARY} strokeWidth={2} strokeOpacity={0.6} markerEnd="url(#lin-primary)" />
      <Label x={98} y={116} anchor="start" size={11} fill={PRIMARY}>AFFINE v2</Label>
      <rect x={18} y={154} width={140} height={54} rx={10} fill={PRIMARY} fillOpacity={0.12} stroke={PRIMARY} strokeWidth={1.8} strokeOpacity={0.7} />
      <Label x={88} y={178} fill={FG} size={14} weight={600}>the slide</Label>
      <Label x={88} y={195} size={11} fill={PRIMARY}>um</Label>

      {/* field hangs off it too, and is pointedly not a derivation */}
      <line x1={532} y1={88} x2={532} y2={150} stroke={MUTED} strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#lin-muted)" />
      <Label x={542} y={116} anchor="start" size={11}>FIELD v1</Label>
      <rect x={462} y={154} width={140} height={54} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.8} strokeDasharray="6 4" />
      <Label x={532} y={178} fill={FG} size={14} weight={600}>ais.parquet</Label>
      <Label x={532} y={195} size={11}>row index</Label>

      <rect x={186} y={150} width={248} height={62} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.4} />
      <Label x={310} y={172} size={12} fill={FG} weight={700}>lineage walks the top row</Label>
      <Label x={310} y={190} size={11}>a step that destroyed geometry</Label>
      <Label x={310} y={205} size={11}>still shows up, as UNMAPPABLE</Label>

      <Markers id="lin" />
    </svg>
  );
}

/* --- 0b. what a coordinate system is --------------------------------------- */

/** A small labelled frame: an origin, two axes and (optionally) a marked point.
    Used by the two intro figures so the same point can be drawn twice. */
function MiniFrame({
  x,
  y,
  size = 132,
  name,
  unit,
  point,
  tone = 'pixel',
}: {
  x: number;
  y: number;
  size?: number;
  name: string;
  unit: string;
  point: { u: number; v: number; label: string };
  tone?: 'pixel' | 'physical';
}) {
  const physical = tone === 'physical';
  const accent = physical ? PRIMARY : MUTED;
  const step = size / 6;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={size}
        height={size}
        rx={4}
        fill={physical ? PRIMARY : SURFACE}
        fillOpacity={physical ? 0.06 : 1}
        stroke={physical ? PRIMARY : BORDER}
        strokeWidth={1.5}
        strokeOpacity={physical ? 0.6 : 1}
      />
      {[1, 2, 3, 4, 5].map((i) => (
        <g key={i} stroke={BORDER} strokeWidth={1} opacity={0.55}>
          <line x1={x + i * step} y1={y} x2={x + i * step} y2={y + size} />
          <line x1={x} y1={y + i * step} x2={x + size} y2={y + i * step} />
        </g>
      ))}
      <circle cx={x} cy={y} r={4} fill={accent} />
      <circle cx={x + point.u * step} cy={y + point.v * step} r={7} fill={PRIMARY} fillOpacity={0.85} />
      <Label x={x + size / 2} y={y - 12} fill={FG} size={14} weight={700}>
        {name}
      </Label>
      <Label x={x + size / 2} y={y + size + 20} size={12} fill={physical ? PRIMARY : MUTED}>
        {unit}
      </Label>
      <Label x={x + size / 2} y={y + size + 38} size={12} fill={FG}>
        {point.label}
      </Label>
    </g>
  );
}

/** Slide 9: a coordinate system names its axes; a transformation carries the
    same point from one of them into another. */
export function TransformIntroFigure() {
  return (
    <svg viewBox="0 0 620 240" className="w-full" role="img" aria-label="One point expressed in a pixel frame and in a physical frame, joined by a single transformation">
      <MiniFrame x={70} y={44} name="camera pixels" unit="axes: t z y x, no unit" point={{ u: 4, v: 2, label: '(y 2, x 4)' }} />

      <line x1={230} y1={110} x2={330} y2={110} stroke={PRIMARY} strokeWidth={2.2} markerEnd="url(#tfi-primary)" />
      <rect x={236} y={80} width={90} height={26} rx={8} fill={SURFACE} stroke={PRIMARY} strokeWidth={1.5} />
      <Label x={281} y={98} fill={PRIMARY} size={13} weight={700}>SCALE</Label>
      <Label x={281} y={132} size={12}>one transformation</Label>

      <MiniFrame x={352} y={44} name="the slide" unit="axes carry um" point={{ u: 4, v: 2, label: '(y 13.0 um, x 26.0 um)' }} tone="physical" />

      <Markers id="tfi" />
    </svg>
  );
}

/** Slide 10: transformations compose, so a point can be stepped all the way
    through a chain of spaces without anything being precomputed. */
export function ComposeFigure() {
  const nodes = [
    { x: 16, name: 'mask px', unit: 'no unit', tone: 'pixel' as const },
    { x: 180, name: 'tile px', unit: 'no unit', tone: 'pixel' as const },
    { x: 344, name: 'the slide', unit: 'um', tone: 'physical' as const },
    { x: 508, name: 'atlas', unit: 'mm', tone: 'physical' as const },
  ];
  return (
    <svg viewBox="0 0 620 220" className="w-full" role="img" aria-label="A point stepped through four spaces by composing three transformations">
      {nodes.map((n) => (
        <SpaceNode key={n.name} x={n.x} y={54} w={96} h={54} name={n.name} unit={n.unit} tone={n.tone} />
      ))}

      {[
        { x: 112, kind: 'IDENTITY' },
        { x: 276, kind: 'SCALE' },
        { x: 440, kind: 'AFFINE' },
      ].map((edge) => (
        <g key={edge.kind}>
          <line x1={edge.x} y1={81} x2={edge.x + 64} y2={81} stroke={PRIMARY} strokeWidth={2.2} markerEnd="url(#cmp-primary)" />
          <Label x={edge.x + 32} y={46} size={11} fill={PRIMARY} weight={700}>{edge.kind}</Label>
        </g>
      ))}

      {/* the same point, carried the whole way */}
      <circle cx={64} cy={81} r={7} fill={PRIMARY} fillOpacity={0.85} />
      <path d="M 64 126 q 246 44 492 -8" fill="none" stroke={PRIMARY} strokeWidth={1.6} strokeDasharray="5 5" strokeOpacity={0.7} markerEnd="url(#cmp-primary)" />
      <Label x={310} y={172} size={13} fill={FG} weight={700}>one point, stepped all the way through</Label>
      <Label x={310} y={192} size={12}>composed on demand, stored nowhere</Label>

      <Markers id="cmp" />
    </svg>
  );
}

/* --- 1. a bare index ------------------------------------------------------- */

/** The starting point: a pixel grid knows its indices and nothing else. */
export function ArrayFigure() {
  const step = 170 / 8;
  return (
    <svg viewBox="0 0 520 250" className="w-full" role="img" aria-label="A pixel grid whose indices carry no physical meaning">
      {[2, 1, 0].map((i) => (
        <rect
          key={i}
          x={50 + i * 16}
          y={40 - i * 16}
          width={170}
          height={170}
          rx={3}
          fill={SURFACE}
          fillOpacity={i === 0 ? 1 : 0.5}
          stroke={BORDER}
          strokeWidth={1.5}
        />
      ))}
      <g>
        {Array.from({ length: 7 }, (_, i) => (
          <g key={i} stroke={BORDER} strokeWidth={1} opacity={0.7}>
            <line x1={50 + (i + 1) * step} y1={40} x2={50 + (i + 1) * step} y2={210} />
            <line x1={50} y1={40 + (i + 1) * step} x2={220} y2={40 + (i + 1) * step} />
          </g>
        ))}
        <rect x={50 + 5 * step} y={40 + 2 * step} width={step} height={step} fill={PRIMARY} fillOpacity={0.55} />
        <circle cx={50} cy={40} r={4} fill={PRIMARY} />
      </g>

      <g stroke={MUTED} strokeWidth={1.4} markerEnd="url(#array-muted)">
        <line x1={50} y1={224} x2={190} y2={224} />
        <line x1={36} y1={40} x2={36} y2={180} />
      </g>
      <Label x={204} y={228} anchor="start">x</Label>
      <Label x={30} y={196} anchor="end">y</Label>

      <rect x={300} y={62} width={196} height={44} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
      <Label x={314} y={80} anchor="start" fill={FG}>the pixel knows</Label>
      <Label x={314} y={98} anchor="start">(t 3, z 12, y 2, x 5)</Label>

      <rect x={300} y={124} width={196} height={44} rx={10} fill={PRIMARY} fillOpacity={0.08} stroke={PRIMARY} strokeWidth={1.5} strokeOpacity={0.45} />
      <Label x={314} y={142} anchor="start" fill={FG}>you asked</Label>
      <Label x={314} y={160} anchor="start">where on the slide?</Label>

      <Markers id="array" />
    </svg>
  );
}

/* --- 2. pixels to physical ------------------------------------------------- */

/** One edge is what turns a structural grid into millimetres on a slide. */
export function PixelToPhysicalFigure() {
  return (
    <svg viewBox="0 0 620 240" className="w-full" role="img" aria-label="A single transformation edge mapping a pixel grid onto a physical slide space">
      <g>
        <rect x={30} y={50} width={150} height={150} rx={2} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
        {[1, 2, 3, 4, 5].map((i) => (
          <g key={i} stroke={BORDER} strokeWidth={1} opacity={0.7}>
            <line x1={30 + i * 25} y1={50} x2={30 + i * 25} y2={200} />
            <line x1={30} y1={50 + i * 25} x2={180} y2={50 + i * 25} />
          </g>
        ))}
        <rect x={130} y={75} width={25} height={25} fill={PRIMARY} fillOpacity={0.55} />
        <circle cx={30} cy={50} r={4} fill={PRIMARY} />
        <Label x={105} y={34} fill={FG} size={14} weight={700}>camera pixels</Label>
        <Label x={105} y={220}>axes have no unit</Label>
      </g>

      <g>
        <line x1={196} y1={124} x2={306} y2={124} stroke={PRIMARY} strokeWidth={2} markerEnd="url(#p2p-primary)" />
        <rect x={206} y={94} width={94} height={26} rx={8} fill={SURFACE} stroke={PRIMARY} strokeWidth={1.5} />
        <Label x={253} y={112} fill={PRIMARY} size={13} weight={700}>one edge</Label>
        <Label x={253} y={146} size={12}>SCALE</Label>
      </g>

      <g>
        <rect x={324} y={40} width={266} height={170} rx={6} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
        {[1, 2, 3, 4].map((i) => (
          <line key={`v${i}`} x1={324 + i * 53} y1={40} x2={324 + i * 53} y2={210} stroke={BORDER} strokeWidth={1} opacity={0.5} />
        ))}
        {[1, 2].map((i) => (
          <line key={`h${i}`} x1={324} y1={40 + i * 57} x2={590} y2={40 + i * 57} stroke={BORDER} strokeWidth={1} opacity={0.5} />
        ))}
        <g transform="translate(374 76) rotate(12) scale(0.6)">
          <rect width={150} height={150} fill={PRIMARY} fillOpacity={0.12} stroke={PRIMARY} strokeWidth={2.5} />
          <rect x={100} y={25} width={25} height={25} fill={PRIMARY} fillOpacity={0.6} />
          <circle cx={0} cy={0} r={6} fill={PRIMARY} />
        </g>
        <Label x={457} y={34} fill={FG} size={14} weight={700}>slide space</Label>
        <Label x={457} y={228}>axes carry um</Label>
      </g>

      <Markers id="p2p" />
    </svg>
  );
}

/* --- 3. the graph ---------------------------------------------------------- */

/** Spaces are nodes, transformations are directed edges. That is the model. */
export function GraphFigure() {
  return (
    <svg viewBox="0 0 620 290" className="w-full" role="img" aria-label="Coordinate systems as nodes connected by named transformation edges">
      <SpaceNode x={20} y={30} name="dataset px" unit="no unit" />
      <SpaceNode x={235} y={30} name="slide" unit="um" tone="physical" />
      <SpaceNode x={450} y={30} name="overview px" unit="no unit" />
      <SpaceNode x={20} y={196} name="mask px" unit="no unit" />
      <SpaceNode x={235} y={196} name="AIS table" unit="row index" tone="records" />

      {/* dataset px -> slide */}
      <line x1={172} y1={59} x2={231} y2={59} stroke={PRIMARY} strokeWidth={2} markerEnd="url(#graph-primary)" />
      <Label x={201} y={48} size={11} fill={PRIMARY}>SCALE</Label>

      {/* overview px -> slide */}
      <line x1={448} y1={59} x2={389} y2={59} stroke={PRIMARY} strokeWidth={2} markerEnd="url(#graph-primary)" />
      <Label x={418} y={48} size={11} fill={PRIMARY}>AFFINE</Label>

      {/* mask px -> dataset px */}
      <line x1={95} y1={192} x2={95} y2={92} stroke={MUTED} strokeWidth={2} markerEnd="url(#graph-muted)" />
      <Label x={104} y={146} anchor="start" size={11}>IDENTITY</Label>

      {/* mask px -> cell table */}
      <line x1={172} y1={225} x2={231} y2={225} stroke={PRIMARY} strokeWidth={2} markerEnd="url(#graph-primary)" />
      <Label x={201} y={214} size={11} fill={PRIMARY}>FIELD</Label>

      <Label x={600} y={200} anchor="end" size={13} fill={FG} weight={700}>every fact stored once</Label>
      <Label x={600} y={220} anchor="end" size={12}>a node, or an edge</Label>
      <Label x={600} y={244} anchor="end" size={12}>nothing is pre-composed</Label>

      <Markers id="graph" />
    </svg>
  );
}

/* --- 4. paths are queries -------------------------------------------------- */

/** The same dataset can sit in two scenes; the client walks whichever path it wants. */
export function PathFigure() {
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="One dataset reaching two scene spaces through two different registration edges">
      <SpaceNode x={26} y={96} name="dataset px" unit="no unit" />

      <line x1={178} y1={112} x2={286} y2={62} stroke={PRIMARY} strokeWidth={2} markerEnd="url(#path-primary)" />
      <line x1={178} y1={140} x2={286} y2={190} stroke={PRIMARY} strokeWidth={2} markerEnd="url(#path-primary)" />
      <Label x={228} y={74} size={11} fill={PRIMARY}>AFFINE v7</Label>
      <Label x={230} y={186} size={11} fill={PRIMARY}>AFFINE v2</Label>

      <SpaceNode x={292} y={22} name="scene: slide" unit="um" tone="physical" />
      <SpaceNode x={292} y={166} name="scene: atlas" unit="mm" tone="physical" />

      <g>
        <rect x={470} y={22} width={130} height={58} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
        <Label x={535} y={44} fill={FG} size={13}>VALIDATED</Label>
        <Label x={535} y={62} size={12}>refined twice</Label>

        <rect x={470} y={166} width={130} height={58} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
        <Label x={535} y={188} fill={FG} size={13}>INFERRED</Label>
        <Label x={535} y={206} size={12}>good enough</Label>
      </g>
      <line x1={446} y1={51} x2={466} y2={51} stroke={BORDER} strokeWidth={1.5} strokeDasharray="3 3" />
      <line x1={446} y1={195} x2={466} y2={195} stroke={BORDER} strokeWidth={1.5} strokeDasharray="3 3" />

      <Label x={310} y={132} anchor="start" size={13} fill={FG} weight={700}>pathToWorld()</Label>
      <Label x={310} y={150} anchor="start" size={12}>walked by the client</Label>

      <Markers id="path" />
    </svg>
  );
}

/* --- 5. the time axis ------------------------------------------------------ */

/** A time axis is only anchored once the space carries an epoch. */
export function EpochFigure() {
  const frames = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg viewBox="0 0 560 180" className="w-full" role="img" aria-label="A time axis anchored to an epoch on the coordinate system">
      <line x1={50} y1={96} x2={520} y2={96} stroke={BORDER} strokeWidth={2} />
      {frames.map((f) => (
        <g key={f}>
          <line x1={60 + f * 60} y1={84} x2={60 + f * 60} y2={108} stroke={PRIMARY} strokeWidth={2.5} />
          <rect x={60 + f * 60 - 14} y={58} width={28} height={20} rx={5} fill={PRIMARY} fillOpacity={0.12} stroke={PRIMARY} strokeWidth={1.2} strokeOpacity={0.5} />
          <Label x={60 + f * 60} y={73} fill={FG} size={12}>{`t${f}`}</Label>
          <Label x={60 + f * 60} y={128} size={12}>{`${(f * 0.25).toFixed(2)}`}</Label>
        </g>
      ))}
      <circle cx={50} cy={96} r={6} fill={PRIMARY} />
      <Label x={50} y={40} size={13} fill={FG} weight={700}>epoch</Label>
      <Label x={300} y={158} size={13}>axis unit: seconds</Label>
    </svg>
  );
}

/* --- 6. attribute plans ---------------------------------------------------- */

/** Hover a cell, get its measurements — without asking the server per pixel. */
export function AttributePlanFigure() {
  return (
    <svg viewBox="0 0 620 250" className="w-full" role="img" aria-label="An attribute plan turning a hovered mask pixel into a row of measurements">
      {/* the mask */}
      <g>
        <rect x={20} y={46} width={150} height={150} rx={4} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
        <path d="M 42 168 q 28 -12 48 -40 q 18 -26 42 -42" fill="none" stroke={PRIMARY} strokeWidth={9} strokeOpacity={0.7} strokeLinecap="round" />
        <path d="M 44 96 q 22 22 30 44" fill="none" stroke={PRIMARY} strokeWidth={7} strokeOpacity={0.2} strokeLinecap="round" />
        <path d="M 96 148 q 26 6 42 -4" fill="none" stroke={PRIMARY} strokeWidth={7} strokeOpacity={0.2} strokeLinecap="round" />
        <path d="M 88 96 l 16 22 l -6 2 l 6 12 l -6 3 l -6 -12 l -5 4 z" fill={FG} stroke={SURFACE} strokeWidth={1.2} />
        <Label x={95} y={32} fill={FG} size={14} weight={700}>AIS mask</Label>
        <Label x={95} y={216}>you hover a segment</Label>
      </g>

      {/* sample step */}
      <line x1={182} y1={120} x2={222} y2={120} stroke={PRIMARY} strokeWidth={2} markerEnd="url(#plan-primary)" />
      <g>
        <rect x={228} y={72} width={148} height={96} rx={10} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
        <Label x={302} y={94} fill={PRIMARY} size={12} weight={700}>SampleStep</Label>
        <Label x={302} y={118} fill={FG} size={13}>read the pixel</Label>
        <Label x={302} y={140} size={12}>i = 42</Label>
        <Label x={302} y={158} size={12}>t = 3</Label>
      </g>

      {/* lookup step */}
      <line x1={382} y1={120} x2={422} y2={120} stroke={PRIMARY} strokeWidth={2} markerEnd="url(#plan-primary)" />
      <g>
        <rect x={428} y={72} width={172} height={96} rx={10} fill={PRIMARY} fillOpacity={0.08} stroke={PRIMARY} strokeWidth={1.5} strokeOpacity={0.5} />
        <Label x={514} y={94} fill={PRIMARY} size={12} weight={700}>LookupStep</Label>
        <Label x={514} y={118} fill={FG} size={13}>length 34.1 um</Label>
        <Label x={514} y={140} fill={FG} size={13}>mean 1042</Label>
        <Label x={514} y={158} size={12}>duckdb on ais.parquet</Label>
      </g>

      <Label x={302} y={202} size={12}>the plan is fetched once</Label>
      <Label x={514} y={202} size={12}>every hover runs locally</Label>

      <Markers id="plan" />
    </svg>
  );
}
