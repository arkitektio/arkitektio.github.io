'use client';

/* The per-frame pipeline, drawn with React Flow rather than hand-placed SVG.

   This is the first figure moved over; the rest of the deck's figures are still
   plain SVG in `volume-viewer-figures.tsx`. Four things to know before moving
   more of them across — the last two cost an afternoon:

   - Nothing is positioned by hand. The stages declare only which way is
     forward; dagre lays the graph out left-to-right and hands back the routed
     points for every edge, which `RoutedEdge` below draws verbatim. That is why
     the long "yes" edge passes under the miss path instead of through it.
   - Slides are scaled by reveal.js with a CSS transform, which throws off
     pointer coordinates inside a flow. Every interaction is switched off — this
     is a diagram, not a canvas.
   - A slide reveal.js has not shown yet measures 0x0. React Flow measures the
     handles on mount, so in a hidden slide every handle records an offset of
     zero and the edges appear to sprout from the middle of the node. The resize
     observer re-runs `updateNodeInternals` (and `fitView`) once the box has a
     real size, which is what puts the ports back on the sides.
   - The container needs a fixed height, or the flow measures to zero.

   The stylesheet is imported on the route that renders this deck, not here —
   from a client component it arrives after first paint and the flow renders
   unstyled. See `src/app/(home)/presentations/volume-viewer/page.tsx`. */

import { useCallback, useEffect, useRef } from 'react';
import dagre from '@dagrejs/dagre';
import {
  BaseEdge,
  EdgeLabelRenderer,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  useUpdateNodeInternals,
} from '@xyflow/react';
import type { Edge, EdgeProps, Node, NodeProps } from '@xyflow/react';

type StageTone = 'fast' | 'slow' | 'check' | 'meta';
type Point = { x: number; y: number };

type StageData = {
  title: string;
  detail: string;
  tone: StageTone;
  /** Optional mark for the technology the stage is. */
  logo?: string;
};

type RoutedData = {
  points: Point[];
  label?: string;
};

const NODE_W = 156;
const NODE_H = 64;

const TONE: Record<StageTone, string> = {
  fast: 'border-fd-primary/60 bg-fd-primary/10',
  slow: 'border-fd-border bg-fd-card/70',
  check: 'border-dashed border-fd-primary/60 bg-fd-primary/5',
  // Off the hot path entirely: asked once, then not again.
  meta: 'border-dashed border-fd-border bg-fd-muted/40',
};

const PORT = {
  opacity: 0,
  width: 1,
  height: 1,
  border: 'none',
  minWidth: 0,
  minHeight: 0,
} as const;

function StageNode({ data }: NodeProps<Node<StageData>>) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border ${TONE[data.tone]}`}
      style={{ width: NODE_W, height: NODE_H }}
    >
      <Handle type="target" position={Position.Left} isConnectable={false} style={PORT} />
      <span className="flex items-center gap-1.5">
        {data.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={data.logo} alt="" className="size-[18px] shrink-0 object-contain" />
        ) : null}
        <span className="text-[14px] font-semibold leading-tight tracking-tight">
          {data.title}
        </span>
      </span>
      <span className="mt-0.5 px-2 text-center text-[11px] leading-tight text-fd-muted-foreground">
        {data.detail}
      </span>
      <Handle type="source" position={Position.Right} isConnectable={false} style={PORT} />
    </div>
  );
}

/** Move `from` toward `to` by at most `r`, so a corner can be rounded. */
function toward(from: Point, to: Point, r: number): Point {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  const step = Math.min(r, length / 2);
  return { x: from.x + (dx / length) * step, y: from.y + (dy / length) * step };
}

/** dagre's polyline, with its corners rounded off. */
function pathThrough(points: Point[], radius = 14) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length - 1; i += 1) {
    const corner = points[i];
    const before = toward(corner, points[i - 1], radius);
    const after = toward(corner, points[i + 1], radius);
    d += ` L ${before.x} ${before.y} Q ${corner.x} ${corner.y} ${after.x} ${after.y}`;
  }
  const last = points[points.length - 1];
  return `${d} L ${last.x} ${last.y}`;
}

/** Draws the route dagre computed, rather than guessing a path between two
    handles — which is what sent the long edge straight through three boxes. */
function RoutedEdge({ data, style, markerEnd }: EdgeProps<Edge<RoutedData>>) {
  const points = data?.points ?? [];
  if (points.length < 2) return null;
  const middle = points[Math.floor(points.length / 2)];
  return (
    <>
      <BaseEdge path={pathThrough(points)} style={style} markerEnd={markerEnd} />
      {data?.label ? (
        <EdgeLabelRenderer>
          <div
            className="pointer-events-none absolute rounded-md bg-fd-background/85 px-1.5 py-0.5 text-[12px] text-fd-muted-foreground"
            style={{ transform: `translate(-50%, -50%) translate(${middle.x}px, ${middle.y}px)` }}
          >
            {data.label}
          </div>
        </EdgeLabelRenderer>
      ) : null}
    </>
  );
}

const nodeTypes = { stage: StageNode };
const edgeTypes = { routed: RoutedEdge };

const LOGO = '/presentations/volume-viewer';

type Stage = {
  id: string;
  title: string;
  detail: string;
  tone: StageTone;
  logo?: string;
};

const STAGES: Stage[] = [
  { id: 'view', title: 'view change', detail: 'you moved', tone: 'fast' },
  {
    id: 'api',
    title: 'GraphQL API',
    detail: 'Python — the layout only',
    tone: 'meta',
    logo: `${LOGO}/logo-graphql.svg`,
  },
  { id: 'plan', title: 'plan bricks', detail: 'which, at which level', tone: 'fast' },
  { id: 'check', title: 'already here?', detail: 'ask the cache', tone: 'check' },
  {
    id: 'minio',
    title: 'zarr on MinIO',
    detail: 'GET the chunk keys',
    tone: 'slow',
    logo: `${LOGO}/logo-zarr-mark.png`,
  },
  {
    id: 'decode',
    title: 'WASM decode',
    detail: 'blosc / zstd, in a worker',
    tone: 'slow',
    logo: `${LOGO}/logo-wasm.png`,
  },
  {
    id: 'upload',
    title: 'WebGPU',
    detail: 'upload as texture',
    tone: 'slow',
    logo: `${LOGO}/logo-webgpu.svg`,
  },
  { id: 'frame', title: 'the frame', detail: 'on screen', tone: 'fast' },
];

const FAST = 'var(--color-fd-primary)';
const SLOW = 'var(--color-fd-muted-foreground)';

type Link = {
  from: string;
  to: string;
  colour: string;
  fast?: boolean;
  dashed?: boolean;
  label?: string;
};

const LINKS: Link[] = [
  { from: 'view', to: 'plan', colour: FAST, fast: true },
  // Once, when the layer loads — not per frame, which is the whole point.
  { from: 'api', to: 'plan', colour: SLOW, dashed: true, label: 'once per layer' },
  { from: 'plan', to: 'check', colour: FAST, fast: true },
  { from: 'check', to: 'frame', colour: FAST, fast: true, label: 'yes — already resident' },
  { from: 'check', to: 'minio', colour: SLOW, label: 'no' },
  { from: 'minio', to: 'decode', colour: SLOW },
  { from: 'decode', to: 'upload', colour: SLOW },
  { from: 'upload', to: 'frame', colour: SLOW },
];

/** dagre decides where every node and every edge goes; we only say which way is
    forward. */
function layout() {
  const graph = new dagre.graphlib.Graph();
  graph.setDefaultEdgeLabel(() => ({}));
  graph.setGraph({ rankdir: 'LR', nodesep: 54, ranksep: 70, marginx: 8, marginy: 8 });

  for (const stage of STAGES) graph.setNode(stage.id, { width: NODE_W, height: NODE_H });
  for (const link of LINKS) graph.setEdge(link.from, link.to);
  dagre.layout(graph);

  const nodes: Node<StageData>[] = STAGES.map((stage) => {
    const placed = graph.node(stage.id);
    return {
      id: stage.id,
      type: 'stage',
      // dagre reports centres; React Flow wants the top-left corner.
      position: { x: placed.x - NODE_W / 2, y: placed.y - NODE_H / 2 },
      data: { title: stage.title, detail: stage.detail, tone: stage.tone, logo: stage.logo },
      width: NODE_W,
      height: NODE_H,
      draggable: false,
      selectable: false,
    };
  });

  const edges: Edge<RoutedData>[] = LINKS.map((link) => ({
    id: `${link.from}-${link.to}`,
    source: link.from,
    target: link.to,
    type: 'routed',
    data: { points: graph.edge(link.from, link.to).points as Point[], label: link.label },
    style: {
      stroke: link.colour,
      strokeWidth: link.fast ? 2.6 : 1.6,
      strokeDasharray: link.dashed ? '6 5' : undefined,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: link.colour,
      width: 18,
      height: 18,
    },
  }));

  return { nodes, edges };
}

const { nodes, edges } = layout();

function Flow() {
  const { fitView } = useReactFlow();
  const updateNodeInternals = useUpdateNodeInternals();
  const container = useRef<HTMLDivElement>(null);

  const settle = useCallback(() => {
    requestAnimationFrame(() => {
      // Re-measure the handles: mounted inside a slide reveal.js had not shown,
      // every one of them recorded a zero offset.
      updateNodeInternals(nodes.map((node) => node.id));
      void fitView({ padding: 0.12, duration: 0 });
    });
  }, [fitView, updateNodeInternals]);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(settle);
    observer.observe(element);
    return () => observer.disconnect();
  }, [settle]);

  return (
    <div ref={container} className="h-[330px] w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        colorMode="system"
        fitView
        fitViewOptions={{ padding: 0.12 }}
        // React Flow is MIT, and this is an open-source project.
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

export function PipelineFlow() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
