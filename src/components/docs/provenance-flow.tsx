'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { Bot, ChevronLeft, ChevronRight, KeyRound, Layers, Network, Pause, Play, ShieldCheck, User } from 'lucide-react';
import { useInView } from '@/components/marketing/reveal';
import { Logo } from '@/components/site/logo';
import { cardStyle, Centered, flow as flowColor, hueDot, iconBox, iconColor, lerp, ptOn, useContainerWidth, wedgePath, type Pt } from '@/components/diagram';

/* A "user story" for the Rekuest provenance token, drawn in the EcosystemOrbit
   visual language (theme-aware `--orbit-*` / `--brand-hue` OKLCH tokens).

   Layout (wide):
     • top:    the human. Their request is the ROOT TASK; an arrow drops it in.
     • left:   the robot apps (agents). Every call is brokered by Rekuest, and a
                delegation mints the callee its OWN child token pointing to parent.
     • centre: the server, split left/right: Rekuest (mints + signs) and Mikro
                (verifies + decodes on every write, the stamped store).
     • right:  the provenance tree Mikro has recorded so far.

   When the container is narrow the layout reflows: the human moves to the right
   of the donut and the provenance tree drops below the diagram, full-width and
   unscaled so it stays readable.

   The story is a list of SCENES. Every scene is a complete description of the
   picture: which nodes are lit, the one call being animated, where every token
   rests (a token only ever moves outward, Rekuest → app → stamped on an image
   → Mikro; it is never sent back to Rekuest), what Mikro decoded, and which
   tasks and writes the tree shows. Nothing is carried over between scenes, so
   reading a scene is reading the frame. The diagram is authored in a fixed
   coordinate space and CSS-scaled to fit. */

const CTRL = flowColor('var(--brand-hue)');
const DATA = flowColor('calc(var(--brand-hue) + 150)');
const TOKEN = flowColor(85, '0.15');

// ── cast ────────────────────────────────────────────────────────────────────
type NodeName = 'Human' | 'Rekuest' | 'Mikro' | 'App A' | 'App B' | 'App C';

type AppMeta = { label: NodeName; sub: string; hue: number };
const APPS: AppMeta[] = [
  { label: 'App A', sub: 'agent', hue: 195 },
  { label: 'App B', sub: 'agent', hue: 250 },
  { label: 'App C', sub: 'agent', hue: 40 },
];
const appOf = (label: string) => APPS.find((a) => a.label === label)!;

// ── the run: the task tree the story tells ──────────────────────────────────
// App A runs the root task; it delegates to B and C, which become sibling child
// tasks. Each task has its own token and produces one image. The tree pane is
// drawn from this; scenes reveal it piece by piece by id.
type TaskNode = {
  id: string; // '#42'
  app: NodeName;
  token: string; // 'tok·9f3c'
  image: string; // 'image_001.tif'
  parent: string; // 'root' | '#42'
  children: TaskNode[];
};

const RUN: TaskNode = {
  id: '#42', app: 'App A', token: 'tok·9f3c', image: 'image_001.tif', parent: 'root',
  children: [
    { id: '#43', app: 'App B', token: 'tok·a4e1', image: 'image_002.tif', parent: '#42', children: [] },
    { id: '#44', app: 'App C', token: 'tok·b7d2', image: 'image_003.tif', parent: '#42', children: [] },
  ],
};
const TASK_A = RUN;
const TASK_B = RUN.children[0];
const TASK_C = RUN.children[1];

// ── scenes ──────────────────────────────────────────────────────────────────
/** A token in a scene: which task it belongs to and where it currently is.
    `travels` means it rides this scene's call and arrives at `at`. */
type TokenInScene = { task: TaskNode; at: NodeName; travels?: boolean };

type Call = {
  from: NodeName;
  to: NodeName;
  /** `call` is a brokered control call (brand hue); `data` is a write to Mikro. */
  kind: 'call' | 'data';
};

type AgentStatus = { text: string; progress: number | [number, number] };

type Scene = {
  /** Narration under the diagram. */
  desc: string;
  /** Nodes lit up in this scene. */
  hot: NodeName[];
  /** Speech bubble over the human. */
  user?: string;
  /** The one animated edge of the scene, if any. */
  call?: Call;
  /** Every token that exists in this scene, and where it rests. */
  tokens: TokenInScene[];
  /** An image travelling along the `data` call, stamped with its app's token. */
  upload?: TaskNode;
  /** What Mikro shows once the write has landed. */
  decode?: TaskNode;
  /** What each agent reports on its card: a line of text and its progress.
      A `[from, to]` pair animates with the scene; a number holds. */
  status?: Partial<Record<NodeName, AgentStatus>>;
  /** What the provenance tree shows: task ids and the ids whose write is in. */
  tree: { tasks: string[]; writes: string[] };
  /** Closing scene: the tree footer lights up. */
  done?: boolean;
  /** ms for the call animation, and ms to hold the settled frame. */
  dur?: number;
  hold?: number;
};

const at = (task: TaskNode, node: NodeName): TokenInScene => ({ task, at: node });
const arriving = (task: TaskNode, node: NodeName): TokenInScene => ({ task, at: node, travels: true });

const SCENES: Scene[] = [
  {
    desc: 'You start a run. Your request becomes the root task, and everything that follows hangs off it.',
    hot: ['Human'],
    user: 'run my pipeline',
    tokens: [],
    tree: { tasks: [], writes: [] },
    hold: 1100,
  },
  {
    desc: 'The request lands in Rekuest as task #42, and Rekuest schedules App A to run it.',
    hot: ['Human', 'Rekuest'],
    user: 'run my pipeline',
    call: { from: 'Human', to: 'Rekuest', kind: 'call' },
    tokens: [],
    tree: { tasks: [], writes: [] },
    dur: 560,
    hold: 700,
  },
  {
    desc: 'Rekuest mints one signed token (EdDSA) for task #42. It states who asked (you), which task, and that there is no parent.',
    hot: ['Rekuest'],
    tokens: [at(TASK_A, 'Rekuest')],
    tree: { tasks: [], writes: [] },
    hold: 1100,
  },
  {
    desc: 'Rekuest hands App A the token together with the assignment. From here the token only moves outward. It is never sent back to Rekuest.',
    hot: ['Rekuest', 'App A'],
    call: { from: 'Rekuest', to: 'App A', kind: 'call' },
    tokens: [arriving(TASK_A, 'App A')],
    status: { 'App A': { text: 'Assignment received · task #42', progress: 0 } },
    tree: { tasks: [], writes: [] },
    dur: 560,
    hold: 900,
  },
  {
    desc: 'App A saves a progress image to Mikro. The image carries the token. Mikro checks the signature against Rekuest’s public key, no round trip, and records: you, App A, task #42.',
    hot: ['App A', 'Mikro'],
    call: { from: 'App A', to: 'Mikro', kind: 'data' },
    tokens: [at(TASK_A, 'App A')],
    upload: TASK_A,
    decode: TASK_A,
    status: { 'App A': { text: 'Saving image_001.tif…', progress: [0, 0.3] } },
    tree: { tasks: ['#42'], writes: ['#42'] },
    dur: 900,
    hold: 1300,
  },
  {
    desc: 'App A needs App B for the next step. It asks Rekuest to schedule it under task #42. Its own token stays where it is.',
    hot: ['App A', 'Rekuest'],
    call: { from: 'App A', to: 'Rekuest', kind: 'call' },
    tokens: [at(TASK_A, 'App A')],
    status: { 'App A': { text: 'Delegating to App B…', progress: 0.3 } },
    tree: { tasks: ['#42'], writes: ['#42'] },
    dur: 600,
    hold: 900,
  },
  {
    desc: 'Rekuest mints App B a token of its own, for task #43, pointing back to #42. Tokens are never shared or forwarded between apps.',
    hot: ['Rekuest'],
    tokens: [at(TASK_A, 'App A'), at(TASK_B, 'Rekuest')],
    status: { 'App A': { text: 'Waiting for App B…', progress: 0.3 } },
    tree: { tasks: ['#42'], writes: ['#42'] },
    hold: 1100,
  },
  {
    desc: 'Rekuest dispatches App B with its child token.',
    hot: ['Rekuest', 'App B'],
    call: { from: 'Rekuest', to: 'App B', kind: 'call' },
    tokens: [at(TASK_A, 'App A'), arriving(TASK_B, 'App B')],
    status: {
      'App A': { text: 'Waiting for App B…', progress: 0.3 },
      'App B': { text: 'Assignment received · task #43', progress: 0 },
    },
    tree: { tasks: ['#42'], writes: ['#42'] },
    dur: 560,
    hold: 700,
  },
  {
    desc: 'App B saves its image, stamped with its own token. Mikro verifies it the same way and files the write under task #43, whose parent is #42.',
    hot: ['App B', 'Mikro'],
    call: { from: 'App B', to: 'Mikro', kind: 'data' },
    tokens: [at(TASK_A, 'App A'), at(TASK_B, 'App B')],
    upload: TASK_B,
    decode: TASK_B,
    status: {
      'App A': { text: 'Waiting for App B…', progress: 0.3 },
      'App B': { text: 'Saving image_002.tif…', progress: [0, 1] },
    },
    tree: { tasks: ['#42', '#43'], writes: ['#42', '#43'] },
    dur: 900,
    hold: 1300,
  },
  {
    desc: 'App A also schedules App C under #42, in parallel. Same ask, same rules.',
    hot: ['App A', 'Rekuest'],
    call: { from: 'App A', to: 'Rekuest', kind: 'call' },
    tokens: [at(TASK_A, 'App A'), at(TASK_B, 'App B')],
    status: {
      'App A': { text: 'Delegating to App C…', progress: 0.6 },
      'App B': { text: 'Finished ✓', progress: 1 },
    },
    tree: { tasks: ['#42', '#43'], writes: ['#42', '#43'] },
    dur: 600,
    hold: 800,
  },
  {
    desc: 'Rekuest mints a sibling token for task #44, pointing back to the same parent #42.',
    hot: ['Rekuest'],
    tokens: [at(TASK_A, 'App A'), at(TASK_B, 'App B'), at(TASK_C, 'Rekuest')],
    status: {
      'App A': { text: 'Waiting for App C…', progress: 0.6 },
      'App B': { text: 'Finished ✓', progress: 1 },
    },
    tree: { tasks: ['#42', '#43'], writes: ['#42', '#43'] },
    hold: 1000,
  },
  {
    desc: 'Rekuest dispatches App C with its token.',
    hot: ['Rekuest', 'App C'],
    call: { from: 'Rekuest', to: 'App C', kind: 'call' },
    tokens: [at(TASK_A, 'App A'), at(TASK_B, 'App B'), arriving(TASK_C, 'App C')],
    status: {
      'App A': { text: 'Waiting for App C…', progress: 0.6 },
      'App B': { text: 'Finished ✓', progress: 1 },
      'App C': { text: 'Assignment received · task #44', progress: 0 },
    },
    tree: { tasks: ['#42', '#43'], writes: ['#42', '#43'] },
    dur: 560,
    hold: 700,
  },
  {
    desc: 'App C saves its image with its token on it. Mikro decodes task #44, a sibling of #43 under root #42.',
    hot: ['App C', 'Mikro'],
    call: { from: 'App C', to: 'Mikro', kind: 'data' },
    tokens: [at(TASK_A, 'App A'), at(TASK_B, 'App B'), at(TASK_C, 'App C')],
    upload: TASK_C,
    decode: TASK_C,
    status: {
      'App A': { text: 'Waiting for App C…', progress: 0.6 },
      'App B': { text: 'Finished ✓', progress: 1 },
      'App C': { text: 'Saving image_003.tif…', progress: [0, 1] },
    },
    tree: { tasks: ['#42', '#43', '#44'], writes: ['#42', '#43', '#44'] },
    dur: 900,
    hold: 1300,
  },
  {
    desc: 'Three tasks, three tokens, one tree. Each token was minted once by Rekuest, handed outward, stamped on what its app wrote, and verified by Mikro on its own. Nothing ever travelled back.',
    hot: ['Mikro'],
    tokens: [at(TASK_A, 'App A'), at(TASK_B, 'App B'), at(TASK_C, 'App C')],
    status: {
      'App A': { text: 'Finished ✓ · 3 tasks', progress: 1 },
      'App B': { text: 'Finished ✓', progress: 1 },
      'App C': { text: 'Finished ✓', progress: 1 },
    },
    tree: { tasks: ['#42', '#43', '#44'], writes: ['#42', '#43', '#44'] },
    done: true,
    hold: 3000,
  },
];

// ── responsive layout: all geometry lives here, switched on `stacked` ───────
type Layout = {
  stacked: boolean;
  BASE_W: number; BASE_H: number;
  cx: number; cy: number; ri: number; ro: number;
  human: Pt; humanOut: Pt; donutTop: Pt; entryLabel: Pt;
  rekLabel: Pt; mikLabel: Pt; rekIn: Pt; mikIn: Pt;
  appPt: (label: string) => Pt;
  tree: { x: number; y: number; w: number } | null; // null → render below as a DOM block
  mikroFeedX2: number | null; // dashed connector donut→tree (wide only)
  decode: Pt;
};

function makeLayout(stacked: boolean): Layout {
  if (!stacked) {
    const cx = 372, cy = 320, ri = 80, ro = 140;
    const apps: Record<string, Pt> = { 'App A': { x: 104, y: 206 }, 'App B': { x: 104, y: 320 }, 'App C': { x: 104, y: 434 } };
    return {
      stacked: false, BASE_W: 1000, BASE_H: 620, cx, cy, ri, ro,
      human: { x: cx, y: 58 }, humanOut: { x: cx, y: 106 }, donutTop: { x: cx, y: cy - ro }, entryLabel: { x: cx + 12, y: 143 },
      rekLabel: ptOn(cx, cy, (ri + ro) / 2, 270), mikLabel: ptOn(cx, cy, (ri + ro) / 2, 90),
      rekIn: { x: cx - ro, y: cy }, mikIn: { x: cx + ri * 0.4, y: cy },
      appPt: (l) => apps[l],
      tree: { x: 548, y: 36, w: 432 }, mikroFeedX2: 540,
      decode: { x: cx + 60, y: 552 },
    };
  }
  // narrow: human to the right of the donut, tree drops below (DOM block)
  const cx = 300, cy = 250, ri = 76, ro = 132;
  const apps: Record<string, Pt> = { 'App A': { x: 96, y: 120 }, 'App B': { x: 96, y: 236 }, 'App C': { x: 96, y: 352 } };
  return {
    stacked: true, BASE_W: 560, BASE_H: 520, cx, cy, ri, ro,
    human: { x: 476, y: 82 }, humanOut: { x: 444, y: 112 }, donutTop: { x: cx, y: cy - ro }, entryLabel: { x: 372, y: 96 },
    rekLabel: ptOn(cx, cy, (ri + ro) / 2, 270), mikLabel: ptOn(cx, cy, (ri + ro) / 2, 90),
    rekIn: { x: cx - ro, y: cy }, mikIn: { x: cx + ri * 0.4, y: cy },
    appPt: (l) => apps[l],
    tree: null, mikroFeedX2: null,
    decode: { x: cx + 44, y: 450 },
  };
}

/** Where a call to / from a node attaches. */
const nodePt = (L: Layout, name: NodeName): Pt => {
  if (name === 'Rekuest') return L.rekIn;
  if (name === 'Mikro') return L.mikIn;
  if (name === 'Human') return L.human;
  return L.appPt(name);
};

const isApp = (name: NodeName) => name.startsWith('App ');

type Edge = { from: Pt; to: Pt; color: string };
const edgeOf = (L: Layout, call: Call): Edge => ({
  // the human's request drops straight down into the server
  from: call.from === 'Human' ? L.humanOut : nodePt(L, call.from),
  to: call.to === 'Rekuest' && call.from === 'Human' ? L.donutTop : nodePt(L, call.to),
  color: call.kind === 'data' ? DATA : CTRL,
});

const STACK_BELOW = 760; // px container width under which the figure reflows

export function ProvenanceFlow() {
  const { ref: revealRef, inView } = useInView<HTMLDivElement>(0.15);
  const { ref: wrapRef, width: cw } = useContainerWidth<HTMLDivElement>();
  const [cur, setCur] = useState(0);
  const [playing, setPlaying] = useState(true);
  // Progress of the current scene's animation. Keyed by scene index so a
  // freshly entered scene reads as "not started" until its first frame.
  const [anim, setAnim] = useState({ scene: -1, progress: 0 });

  const stacked = cw > 0 && cw < STACK_BELOW;
  const L = useMemo(() => makeLayout(stacked), [stacked]);
  const scale = cw > 0 ? cw / L.BASE_W : 0.6;
  const compact = scale < 0.5;
  const scene = SCENES[cur];
  const go = (i: number) => {
    setPlaying(false);
    setCur((i + SCENES.length) % SCENES.length);
  };

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const animated = Boolean(scene.call);
    const dur = scene.dur ?? 480;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (cancelled) return;
      if (start == null) start = ts;
      const p = animated ? Math.min(1, (ts - start) / dur) : 1;
      setAnim({ scene: cur, progress: p });
      if (p < 1) raf = requestAnimationFrame(tick);
      else if (playing) timer = setTimeout(() => setCur((c) => (c + 1) % SCENES.length), scene.hold ?? 800);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
    };
  }, [cur, inView, playing, scene]);

  const progress = anim.scene === cur ? anim.progress : 0;
  const settled = progress >= 1;
  const edge = scene.call ? edgeOf(L, scene.call) : null;
  const flow = edge && !settled ? { ...edge, progress } : null;
  const hot = new Set<NodeName>(scene.hot);

  return (
    <figure className="not-prose my-8">
      <div
        ref={revealRef}
        className="relative isolate overflow-hidden rounded-3xl border border-fd-border bg-[var(--orbit-surface)] px-3 py-5 text-fd-foreground sm:px-6"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[38%] top-[18%] h-[26rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--orbit-grid)_1px,transparent_0)] [background-size:36px_36px]" />
        </div>

        <div ref={wrapRef} className="relative mx-auto w-full" style={{ height: L.BASE_H * scale }}>
          <div className="absolute left-0 top-0 origin-top-left" style={{ width: L.BASE_W, height: L.BASE_H, transform: `scale(${scale})` }}>
            <Diagram L={L} inView={inView} hot={hot} scene={scene} flow={flow} progress={progress} settled={settled} compact={compact} />
          </div>
        </div>

        {/* narration + transport */}
        <div className="mx-auto mt-1 flex max-w-2xl flex-col items-center gap-3">
          <p key={cur} className="animate-pop-in min-h-[2.75rem] text-center text-[15px] leading-relaxed text-fd-foreground/90">
            <span className="font-mono text-[11px] text-primary/70">{String(cur + 1).padStart(2, '0')} · </span>
            {scene.desc}
          </p>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => go(cur - 1)} aria-label="Previous step" className="grid size-8 place-items-center rounded-lg border border-fd-border bg-fd-muted/30 text-fd-muted-foreground transition-colors hover:bg-fd-muted/60 hover:text-fd-foreground">
              <ChevronLeft className="size-4" />
            </button>
            <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause' : 'Play'} className="grid size-8 place-items-center rounded-lg border border-primary/40 bg-primary/15 text-primary transition-colors hover:bg-primary/25">
              {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            </button>
            <button type="button" onClick={() => go(cur + 1)} aria-label="Next step" className="grid size-8 place-items-center rounded-lg border border-fd-border bg-fd-muted/30 text-fd-muted-foreground transition-colors hover:bg-fd-muted/60 hover:text-fd-foreground">
              <ChevronRight className="size-4" />
            </button>
            <span className="ml-1.5 font-mono text-[11px] text-fd-muted-foreground">{cur + 1} / {SCENES.length}</span>
          </div>
        </div>

        {/* stacked: the provenance tree drops below the diagram, full-width */}
        {L.stacked && (
          <div className="mx-auto mt-4 w-full max-w-xl">
            <TreePane tree={scene.tree} done={scene.done} />
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-fd-muted-foreground">
          <span className="flex items-center gap-2"><span className="h-1.5 w-5 rounded-full" style={{ background: CTRL }} /> call · brokered by Rekuest</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-5 rounded-full" style={{ background: TOKEN }} /> a task’s token · minted once, only moves outward</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-5 rounded-full" style={{ background: DATA }} /> saves an image · token stamped on it, verified by Mikro</span>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">
        <strong>One token per task, one tree per run.</strong> A human’s request is the root task.
        <em> Rekuest</em> brokers every call and mints each task its own signed token; a delegated
        task’s token points back to its parent. The token travels one way: to the app, then stamped
        onto everything the app writes. <em>Mikro</em> verifies the signature with Rekuest’s public
        key, without asking Rekuest, and records who acted, which app, and the parent task. So the
        whole run forms one verifiable provenance tree you can query, audit, or revert.
      </figcaption>
    </figure>
  );
}

function Diagram({ L, inView, hot, scene, flow, progress, settled, compact }: {
  L: Layout;
  inView: boolean;
  hot: Set<NodeName>;
  scene: Scene;
  flow: (Edge & { progress: number }) | null;
  progress: number;
  settled: boolean;
  compact: boolean;
}) {
  const bloom: CSSProperties = { opacity: inView ? 1 : 0, transition: 'opacity .25s ease' };
  const serverHot = hot.has('Rekuest') || hot.has('Mikro');
  const { cx, cy, ri, ro } = L;
  const head = (e: Edge, p: number): Pt => ({ x: lerp(e.from.x, e.to.x, p), y: lerp(e.from.y, e.to.y, p) });
  // tokens that have arrived on an app (a travelling one lands once the call settles)
  const restingTokens = new Map<NodeName, TaskNode>();
  for (const t of scene.tokens) {
    if (isApp(t.at) && !(t.travels && flow)) restingTokens.set(t.at, t.task);
  }

  return (
    <div className="absolute inset-0">
      <svg width={L.BASE_W} height={L.BASE_H} viewBox={`0 0 ${L.BASE_W} ${L.BASE_H}`} fill="none" className="absolute inset-0">
        <defs>
          <marker id="pvDown" markerWidth="10" markerHeight="10" refX="5" refY="7" orient="auto">
            <path d="M1 1 L5 7 L9 1" fill="none" stroke={CTRL} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* the human's request drops into the server */}
        <line x1={L.humanOut.x} y1={L.humanOut.y} x2={L.donutTop.x} y2={L.donutTop.y - 8} strokeWidth="2.2" markerEnd="url(#pvDown)" style={{ stroke: CTRL, ...bloom }} />
        <text x={L.entryLabel.x} y={L.entryLabel.y} fontFamily="var(--font-mono, monospace)" fontSize="12" letterSpacing="1" style={{ fill: 'oklch(var(--orbit-flow-l) 0.13 var(--brand-hue))', ...bloom }}>
          root task
        </text>

        {/* topology spokes. Rekuest brokers every call (no app→app links) */}
        {APPS.map((w) => {
          const p = L.appPt(w.label);
          return <line key={`d-${w.label}`} x1={L.rekIn.x} y1={L.rekIn.y} x2={p.x} y2={p.y} strokeWidth="1.3" strokeDasharray="3 7" style={{ stroke: 'var(--orbit-spoke)', ...bloom }} />;
        })}
        {/* Mikro feeds the provenance tree (wide only) */}
        {L.mikroFeedX2 != null && <line x1={cx + ro} y1={cy} x2={L.mikroFeedX2} y2={cy} strokeWidth="1.4" strokeDasharray="3 7" style={{ stroke: `oklch(var(--orbit-card-border-l) 0.12 calc(var(--brand-hue) + 150) / 0.7)`, ...bloom }} />}

        {/* donut: Rekuest (left) | Mikro (right) */}
        {[
          { label: 'Rekuest' as const, d: wedgePath(cx, cy, ri, ro, 180, 360) },
          { label: 'Mikro' as const, d: wedgePath(cx, cy, ri, ro, 0, 180) },
        ].map((s) => {
          const isHot = hot.has(s.label);
          return (
            <path
              key={s.label}
              d={s.d}
              style={{
                fill: isHot ? 'var(--orbit-seg-hot)' : 'var(--orbit-seg)',
                stroke: isHot ? 'var(--orbit-seg-stroke-hot)' : 'var(--orbit-seg-stroke)',
                strokeWidth: isHot ? 1.6 : 1,
                ...bloom,
                transition: 'opacity .25s ease, fill .25s ease, stroke .25s ease',
              }}
            />
          );
        })}
        <circle cx={cx} cy={cy} r={ri} style={{ fill: 'var(--orbit-hole)' }} />
        <circle cx={cx} cy={cy} r={ro + 2} fill="none" style={{ stroke: 'oklch(0.6 0.12 var(--brand-hue) / .4)', strokeWidth: 1.2 }} />
        <circle cx={cx} cy={cy} r={ro + 8} fill="none" style={{ stroke: 'oklch(var(--orbit-flow-l) 0.16 var(--brand-hue))', strokeWidth: 2, opacity: serverHot ? 0.85 : 0, transition: 'opacity .25s ease' }} />

        {/* glowing flow for the active scene's call */}
        {flow && (
          (() => {
            const h = head(flow, flow.progress);
            const t = head(flow, Math.max(0, flow.progress - 0.34));
            return (
              <g>
                <line x1={t.x} y1={t.y} x2={h.x} y2={h.y} strokeWidth="9" strokeLinecap="round" style={{ stroke: flow.color, opacity: 0.22, filter: 'blur(4px)' }} />
                <line x1={t.x} y1={t.y} x2={h.x} y2={h.y} strokeWidth="3" strokeLinecap="round" style={{ stroke: flow.color, filter: `drop-shadow(0 0 5px ${flow.color})` }} />
              </g>
            );
          })()
        )}
      </svg>

      {/* Arkitekt mark in the centre of the service hoop */}
      <Centered x={cx} y={cy}>
        <div className="flex flex-col items-center" style={bloom}>
          <Logo className="size-[58px]" />
          {!compact && <div className="mt-1 text-[12px] font-bold tracking-tight">Arkitekt</div>}
        </div>
      </Centered>

      {/* human node (root task) */}
      <Centered x={L.human.x} y={L.human.y}>
        <div className="relative flex flex-col items-center" style={bloom}>
          {scene.user && (
            <div className="absolute bottom-full mb-3 whitespace-nowrap rounded-xl border border-primary/40 bg-primary/15 px-3 py-1.5 font-mono text-[12px] text-primary backdrop-blur">
              “{scene.user}”
              <span className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-b border-r border-primary/40 bg-primary/15" />
            </div>
          )}
          <div className="flex items-center gap-3 rounded-2xl border px-4 py-2.5" style={cardStyle(300, hot.has('Human'))}>
            <span className="grid size-10 place-items-center rounded-xl border" style={iconBox('var(--brand-hue)')}>
              <User className="size-6" style={{ color: iconColor('var(--brand-hue)') }} />
            </span>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-bold tracking-tight text-fd-foreground">You</span>
                <span className="rounded border px-1.5 py-px font-mono text-[9px] leading-none text-primary" style={{ borderColor: 'oklch(0.6 0.15 var(--brand-hue) / 0.5)' }}>root task</span>
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-fd-muted-foreground">human</div>
            </div>
          </div>
        </div>
      </Centered>

      {/* service labels in the donut halves */}
      {[
        { label: 'Rekuest', sub: '', icon: Network, pt: L.rekLabel },
        { label: 'Mikro', sub: '', icon: Layers, pt: L.mikLabel },
      ].map((s) => (
        <Centered key={s.label} x={s.pt.x} y={s.pt.y}>
          <div className="flex w-[100px] flex-col items-center text-center" style={bloom}>
            <s.icon className="mb-1 size-[20px]" style={{ color: 'var(--orbit-icon)' }} />
            <div className="text-[14px] font-bold tracking-tight">{s.label}</div>
            {!compact && <div className="mt-0.5 font-mono text-[10px] text-fd-muted-foreground">{s.sub}</div>}
          </div>
        </Centered>
      ))}

      {/* robot app cards. Once a token has been handed to an app it is pinned to
          the card as a badge, and the card reports what the agent is doing with
          a status line + progress bar (the orbit's per-app bubble, folded in). */}
      {APPS.map((app) => {
        const p = L.appPt(app.label);
        const isHot = hot.has(app.label);
        const held = restingTokens.get(app.label);
        const st = scene.status?.[app.label];
        const pct = st ? (Array.isArray(st.progress) ? lerp(st.progress[0], st.progress[1], progress) : st.progress) : 0;
        return (
          <Centered key={app.label} x={p.x} y={p.y}>
            <div style={bloom}>
              <div className={`relative flex rounded-2xl border ${compact ? 'size-[92px] items-center justify-center' : 'w-[172px] flex-col justify-center gap-1.5 px-4 py-2.5'}`} style={{ ...cardStyle(app.hue, isHot), minHeight: compact ? undefined : 64 }}>
                {compact ? (
                  <Bot className="size-9" style={{ color: iconColor(app.hue) }} />
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl border" style={iconBox(app.hue)}>
                      <Bot className="size-[21px]" style={{ color: iconColor(app.hue) }} />
                    </span>
                    <div className="min-w-0 leading-tight">
                      <div className="truncate text-[15px] font-bold tracking-tight text-fd-foreground">{app.label}</div>
                      <div className="mt-0.5 truncate font-mono text-[10.5px] text-fd-muted-foreground">{app.sub}</div>
                    </div>
                  </div>
                )}

                {/* the agent's status: text + progress, like the orbit bubbles */}
                {st && !compact && (
                  <div className="animate-pop-in">
                    <div className="flex items-center justify-between gap-2 font-mono text-[10px] leading-snug text-fd-muted-foreground">
                      <span className="truncate">{st.text}</span>
                      <span className="shrink-0">{Math.round(pct * 100)}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-fd-border">
                      <div className="h-full rounded-full" style={{ width: `${pct * 100}%`, background: iconColor(app.hue), transition: 'width .12s linear' }} />
                    </div>
                  </div>
                )}
                {st && compact && (
                  <div className="absolute inset-x-3 bottom-2 h-1.5 overflow-hidden rounded-full bg-fd-border">
                    <div className="h-full rounded-full" style={{ width: `${pct * 100}%`, background: iconColor(app.hue), transition: 'width .12s linear' }} />
                  </div>
                )}

                {/* the token this agent holds, pinned to its card */}
                {held && (
                  <div className="absolute -right-2 -top-3">
                    <TokenPill task={held} />
                  </div>
                )}
              </div>
            </div>
          </Centered>
        );
      })}

      {/* tokens not on an app: freshly minted on Rekuest, or riding a call */}
      {scene.tokens.map(({ task, at: node, travels }) => {
        const inFlight = Boolean(travels && flow);
        if (!inFlight && isApp(node)) return null;
        const pt = inFlight && flow ? head(flow, flow.progress) : nodePt(L, node);
        return (
          <Centered key={task.token} x={pt.x} y={pt.y}>
            <TokenPill task={task} />
          </Centered>
        );
      })}

      {/* the image on its way to Mikro, with the token stamped on it */}
      {scene.upload && flow && (
        (() => {
          const h = head(flow, flow.progress);
          return (
            <Centered x={h.x} y={h.y}>
              <ImageThumb hue={appOf(scene.upload!.app).hue} className="h-[30px] w-[42px]" />
            </Centered>
          );
        })()
      )}

      {/* Mikro verifies the signature and decodes the token → claims */}
      {scene.decode && settled && (
        <Centered x={L.decode.x} y={L.decode.y}>
          <div className="animate-pop-in w-[196px] rounded-xl border border-fd-border bg-fd-popover/95 p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur">
            <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-primary/80">
              <KeyRound className="size-3.5" style={{ color: TOKEN }} /> TOKEN DECODED
            </div>
            <dl className="flex flex-col gap-1 font-mono text-[12px]">
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">signature</dt><dd className="flex items-center gap-1 text-fd-foreground"><ShieldCheck className="size-3 text-primary" /> valid</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">user</dt><dd className="text-fd-foreground">you</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">client</dt><dd className="text-fd-foreground">{scene.decode.app}</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">task</dt><dd className="font-semibold text-primary">{scene.decode.id}</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">parent</dt><dd className="text-fd-foreground">{scene.decode.parent}</dd></div>
            </dl>
          </div>
        </Centered>
      )}

      {/* provenance tree pane (wide: inside the diagram on the right) */}
      {L.tree && (
        <div className="absolute" style={{ left: L.tree.x, top: L.tree.y, width: L.tree.w, ...bloom }}>
          <TreePane tree={scene.tree} done={scene.done} />
        </div>
      )}
    </div>
  );
}

/** The provenance tree Mikro has recorded. Usable inside the diagram or as a DOM block. */
function TreePane({ tree, done }: { tree: Scene['tree']; done?: boolean }) {
  const tasks = tree.tasks.length;
  const writes = tree.writes.length;
  return (
    <div className="rounded-2xl border border-fd-border bg-fd-muted/30 p-5 backdrop-blur" style={{ minHeight: 468 }}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[12px] tracking-[0.18em] text-primary/80">MIKRO PROVENANCE TREE</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-fd-muted-foreground"><ShieldCheck className="size-3.5" /> koherent</span>
      </div>

      {/* root authority: the human */}
      <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-primary/40 bg-primary/10 px-3 py-2">
        <User className="size-4 shrink-0 text-primary" />
        <div className="leading-tight">
          <div className="font-mono text-[13px] font-semibold text-primary">You · human</div>
          <div className="font-mono text-[10.5px] text-fd-muted-foreground">root authority · run {RUN.id}</div>
        </div>
      </div>

      {/* nested task tree */}
      <div className="ml-2.5 mt-2 border-l border-fd-border pl-4">
        <TreeBranch node={RUN} tree={tree} />
      </div>

      <div
        className="mt-4 flex items-center justify-between rounded-lg px-3 py-2 font-mono text-[12px] transition-colors"
        style={done ? { background: 'oklch(0.6 0.18 var(--brand-hue) / 0.14)', color: 'var(--color-fd-primary)' } : { color: 'var(--color-fd-muted-foreground)' }}
      >
        <span>{tasks} task{tasks === 1 ? '' : 's'} · {writes} write{writes === 1 ? '' : 's'}</span>
        <span className="font-semibold">one tree</span>
      </div>
    </div>
  );
}

/** One task node: the task badge, its write leaf, and its delegated children. */
function TreeBranch({ node, tree }: { node: TaskNode; tree: Scene['tree'] }) {
  if (!tree.tasks.includes(node.id)) return null;
  const hue = appOf(node.app).hue;
  return (
    <div className="animate-pop-in">
      <div className="relative flex items-center gap-2.5 rounded-xl border border-fd-border bg-fd-background/50 px-3 py-2">
        <span className="absolute -left-4 top-1/2 w-4 border-t border-fd-border" />
        <span className="grid size-7 shrink-0 place-items-center rounded-lg border" style={iconBox(hue)}>
          <Bot className="size-4" style={{ color: iconColor(hue) }} />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[13px] font-semibold text-fd-foreground">task {node.id}</span>
            <span className="rounded bg-fd-muted px-1.5 py-px font-mono text-[10px] text-fd-muted-foreground">
              {node.parent === 'root' ? 'root' : `↳ ${node.parent}`}
            </span>
          </div>
          <div className="mt-0.5 flex items-center gap-1 font-mono text-[10.5px] text-fd-muted-foreground">
            <span className="size-2 rounded-full" style={{ background: hueDot(hue) }} />
            {node.app}
            <KeyRound className="ml-0.5 size-3" style={{ color: TOKEN }} />
            {node.token}
          </div>
        </div>
      </div>

      {/* the write this task produced + any delegated children */}
      <div className="ml-2 mt-1.5 flex flex-col gap-1.5 border-l border-fd-border pl-4">
        {tree.writes.includes(node.id) && (
          <div className="animate-pop-in relative flex items-center gap-2.5 rounded-lg border border-fd-border bg-fd-background/40 px-2.5 py-1.5">
            <span className="absolute -left-4 top-1/2 w-4 border-t border-fd-border" />
            <ImageThumb hue={hue} className="h-[28px] w-[38px]" />
            <div className="min-w-0 flex-1 leading-tight">
              <div className="truncate font-mono text-[12px] text-fd-foreground">{node.image}</div>
              <div className="font-mono text-[10px] text-fd-muted-foreground">image · CREATE · {node.token}</div>
            </div>
          </div>
        )}
        {node.children.map((c) => (
          <TreeBranch key={c.id} node={c} tree={tree} />
        ))}
      </div>
    </div>
  );
}

/** A provenance token: key + id, and the parent task it points back to. */
function TokenPill({ task }: { task: TaskNode }) {
  return (
    <div className="animate-pop-in flex items-center gap-1.5 rounded-full px-2.5 py-1 shadow-md ring-1 ring-fd-border backdrop-blur" style={{ background: TOKEN }}>
      <KeyRound className="size-3.5" style={{ color: 'var(--orbit-hole)' }} />
      <span className="font-mono text-[11px] font-bold" style={{ color: 'var(--orbit-hole)' }}>{task.token}</span>
      {task.parent !== 'root' && <span className="font-mono text-[10px] font-semibold opacity-70" style={{ color: 'var(--orbit-hole)' }}>↳{task.parent}</span>}
    </div>
  );
}

/** A tiny saved "progress image". A microscopy-ish plane tinted by the agent,
    carrying the provenance token stamped in its corner. */
function ImageThumb({ hue, className }: { hue: number; className?: string }) {
  return (
    <span className={`relative inline-block shrink-0 ${className ?? ''}`}>
      <span className="block size-full overflow-hidden rounded ring-1 ring-fd-border shadow-md">
        <svg viewBox="0 0 48 34" preserveAspectRatio="none" className="size-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="34" fill="#0b0b14" />
          <circle cx="15" cy="13" r="6.5" fill={`oklch(0.78 0.17 ${hue})`} opacity="0.9" />
          <circle cx="30" cy="21" r="5" fill={`oklch(0.8 0.16 ${hue + 35})`} opacity="0.85" />
          <circle cx="37" cy="11" r="3.5" fill={`oklch(0.83 0.14 ${hue})`} opacity="0.8" />
        </svg>
      </span>
      {/* the token, stamped onto the image */}
      <span className="absolute -right-1.5 -top-1.5 grid size-[15px] place-items-center rounded-full shadow ring-1 ring-fd-border" style={{ background: TOKEN }}>
        <KeyRound className="size-[9px]" style={{ color: 'var(--orbit-hole)' }} />
      </span>
    </span>
  );
}
