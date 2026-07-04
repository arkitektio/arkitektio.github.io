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
                (decodes on every write, the stamped store), Arkitekt mark inside.
     • right:  the Mikro provenance tree: a nested task hierarchy.

   When the container is narrow the layout reflows: the human moves to the right
   of the donut and the provenance tree drops below the diagram, full-width and
   unscaled so it stays readable.

   The diagram is authored in a fixed coordinate space and CSS-scaled to fit; the
   step graph is generated from one declarative run tree (see RUN / buildBeats). */

const CTRL = flowColor('var(--brand-hue)');
const DATA = flowColor('calc(var(--brand-hue) + 150)');
const TOKEN = flowColor(85, '0.15');

// ── apps (label / sub / hue only; positions come from the active layout) ─────
type AppMeta = { label: string; sub: string; hue: number };
const APPS: AppMeta[] = [
  { label: 'App A', sub: 'agent', hue: 195 },
  { label: 'App B', sub: 'agent', hue: 250 },
  { label: 'App C', sub: 'agent', hue: 40 },
];
const appOf = (label: string) => APPS.find((a) => a.label === label)!;

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
  graphql: Pt; decode: Pt;
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
      graphql: { x: 172, y: 566 }, decode: { x: cx + 60, y: 552 },
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
    graphql: { x: 150, y: 486 }, decode: { x: cx + 44, y: 450 },
  };
}

const nodePt = (L: Layout, name: string): Pt => {
  if (name === 'Rekuest') return L.rekIn;
  if (name === 'Mikro') return L.mikIn;
  if (name === 'Human') return L.human;
  return L.appPt(name);
};

// ── the run: ONE declarative task tree is the single source of truth ─────────
// App A is the root task; it schedules B and C as siblings. Each node owns its
// token + saved image (and the bespoke narration in `copy`). Both the step graph
// and the tree pane are generated from this. Adding an agent is a one-line edit.
type Task = {
  id: string; // '#42'
  app: string; // must match an APPS[].label
  token: string; // 'tok·9f3c'
  image: string; // 'image_001.tif'
  parent: string; // 'root' | '#42'
  copy?: Partial<Record<'mint' | 'dispatch' | 'save', string>>; // bespoke wording
  children: Task[];
};

const RUN: Task = {
  id: '#42', app: 'App A', token: 'tok·9f3c', image: 'image_001.tif', parent: 'root',
  copy: {
    mint: 'The root task drops into the server, where Rekuest mints one signed token (EdDSA) for task #42.',
    dispatch: 'Rekuest dispatches robot App A, carrying the root token.',
    save: 'App A saves its progress image to Mikro. Mikro decodes the token → user, app, and root task #42.',
  },
  children: [
    {
      id: '#43', app: 'App B', token: 'tok·a4e1', image: 'image_002.tif', parent: '#42',
      copy: {
        mint: 'App A delegates to App B. Rekuest mints App B its OWN token (task #43) that points back to #42.',
        dispatch: 'Rekuest dispatches robot App B with its own child token.',
        save: 'App B saves its progress image to Mikro. It decodes to task #43, whose parent is #42.',
      },
      children: [],
    },
    {
      id: '#44', app: 'App C', token: 'tok·b7d2', image: 'image_003.tif', parent: '#42',
      copy: {
        mint: 'App A also schedules App C. That mints a sibling child token (task #44) pointing back to the same root #42.',
        dispatch: 'Rekuest dispatches robot App C with its token.',
        save: 'App C saves its image to Mikro with the same token. It decodes to task #44, a sibling of #43 under root #42.',
      },
      children: [],
    },
  ],
};

const taskById = (id: string): Task | undefined => {
  const walk = (t: Task): Task | undefined => (t.id === id ? t : t.children.reduce<Task | undefined>((f, c) => f ?? walk(c), undefined));
  return walk(RUN);
};
const isRoot = (t: Task) => t.parent === 'root';
const parentApp = (t: Task) => taskById(t.parent)?.app ?? RUN.app;

type Tok = { id: string; task: string; parent: string };
const tokOf = (t: Task): Tok => ({ id: t.token, task: t.id, parent: t.parent });

// ── the predictable step graph ───────────────────────────────────────────────
// A deterministic pre-order walk emits the beats; per task it is mint → dispatch
// → save, wrapped by a leading `request` and a trailing `done`. Each task is
// stamped with the step index at which its tree node (`revealAt`) and write leaf
// (`saveAt`) become visible, so the reveal is `cur >=` index. No hand-kept
// counters to drift out of sync. The walk is geometry-free; positions are
// injected later by `toStep(beat, layout)`.
type BeatKind = 'request' | 'mint' | 'dispatch' | 'save' | 'done';
type Beat = { kind: BeatKind; task?: Task };
type BuiltTask = Omit<Task, 'children'> & { revealAt: number; saveAt: number; children: BuiltTask[] };

function buildBeats(run: Task): { beats: Beat[]; tree: BuiltTask } {
  const beats: Beat[] = [{ kind: 'request' }];
  const walk = (t: Task, root: boolean): BuiltTask => {
    const mintAt = beats.push({ kind: 'mint', task: t }) - 1;
    beats.push({ kind: 'dispatch', task: t });
    const saveAt = beats.push({ kind: 'save', task: t }) - 1;
    // root node appears at its save (matches the original reveal); children at their mint
    return { ...t, revealAt: root ? saveAt : mintAt, saveAt, children: t.children.map((c) => walk(c, false)) };
  };
  const tree = walk(run, true);
  beats.push({ kind: 'done' });
  return { beats, tree };
}

type Edge = { from: Pt; to: Pt; color: string };
type Step = {
  kind: BeatKind;
  desc: string;
  hot: string[];
  user?: string;
  edge?: Edge;
  token?: Tok;
  tokenTravels?: boolean;
  tokenAt?: string;
  decode?: { client: string; task: string; parent: string };
  running?: string;
  done?: boolean;
  dur?: number;
  hold?: number;
};

// Derive the render-facing Step from a beat + the active layout. `copy` supplies
// the exact narration; the templates are the fallback for any newly added agent.
function toStep(beat: Beat, L: Layout): Step {
  const t = beat.task;
  switch (beat.kind) {
    case 'request':
      return { kind: 'request', hot: ['Human'], user: 'run my pipeline', desc: 'A human starts the run. Their request is the root task.', hold: 1100 };
    case 'mint': {
      const root = isRoot(t!);
      return {
        kind: 'mint',
        hot: root ? ['Human', 'Rekuest'] : [parentApp(t!), 'Rekuest'],
        edge: root ? { from: L.humanOut, to: L.donutTop, color: CTRL } : { from: nodePt(L, parentApp(t!)), to: L.rekIn, color: CTRL },
        token: tokOf(t!), tokenAt: 'Rekuest',
        desc: t!.copy?.mint ?? `${parentApp(t!)} schedules ${t!.app}. Rekuest mints task ${t!.id}, pointing back to ${t!.parent}.`,
        dur: root ? 560 : 600, hold: root ? 1000 : 1200,
      };
    }
    case 'dispatch':
      return {
        kind: 'dispatch', hot: ['Rekuest', t!.app],
        edge: { from: L.rekIn, to: nodePt(L, t!.app), color: CTRL },
        token: tokOf(t!), tokenTravels: true, tokenAt: t!.app,
        desc: t!.copy?.dispatch ?? `Rekuest dispatches robot ${t!.app} with its token.`,
        dur: 560, hold: 700,
      };
    case 'save':
      return {
        kind: 'save', hot: [t!.app, 'Mikro'],
        edge: { from: nodePt(L, t!.app), to: L.mikIn, color: DATA },
        token: tokOf(t!), tokenAt: t!.app, running: t!.app,
        decode: { client: t!.app, task: t!.id, parent: t!.parent },
        desc: t!.copy?.save ?? `${t!.app} saves its image to Mikro. It decodes to task ${t!.id}.`,
        dur: 900, hold: 1100,
      };
    case 'done':
      return { kind: 'done', hot: ['Mikro'], done: true, desc: 'Every delegation minted its own token pointing back to its parent. Together they form one verifiable task tree under the human root.', hold: 2800 };
  }
}

const { beats: BEATS, tree: BUILT_TREE } = buildBeats(RUN);

// reveal counts for the tree footer, derived from the current step index
const countRevealed = (node: BuiltTask, cur: number, key: 'revealAt' | 'saveAt'): number =>
  (cur >= node[key] ? 1 : 0) + node.children.reduce((n, c) => n + countRevealed(c, cur, key), 0);

const STACK_BELOW = 760; // px container width under which the figure reflows

export function ProvenanceFlow() {
  const { ref: revealRef, inView } = useInView<HTMLDivElement>(0.15);
  const { ref: wrapRef, width: cw } = useContainerWidth<HTMLDivElement>();
  const [cur, setCur] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [flow, setFlow] = useState<(Edge & { progress: number }) | null>(null);
  const [fill, setFill] = useState(0);

  const stacked = cw > 0 && cw < STACK_BELOW;
  const L = useMemo(() => makeLayout(stacked), [stacked]);
  const scale = cw > 0 ? cw / L.BASE_W : 0.6;
  const compact = scale < 0.5;
  const STEPS = useMemo(() => BEATS.map((b) => toStep(b, L)), [L]);
  const step = STEPS[cur];
  const go = (i: number) => {
    setPlaying(false);
    setCur((i + STEPS.length) % STEPS.length);
  };

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const rafs = new Set<number>();
    let timer: ReturnType<typeof setTimeout> | undefined;
    setFlow(null);
    setFill(step.running ? 0 : 1);

    const dur = step.dur ?? 480;
    const enter = () =>
      new Promise<void>((resolve) => {
        if (!step.edge && !step.running) return resolve();
        let start: number | null = null;
        const tick = (ts: number) => {
          if (cancelled) return resolve();
          if (start == null) start = ts;
          const p = Math.min(1, (ts - start) / dur);
          if (step.edge) setFlow({ ...step.edge, progress: p });
          if (step.running) setFill(p);
          if (p < 1) rafs.add(requestAnimationFrame(tick));
          else resolve();
        };
        rafs.add(requestAnimationFrame(tick));
      });

    (async () => {
      await enter();
      if (cancelled) return;
      setFlow(null);
      if (playing) timer = setTimeout(() => setCur((c) => (c + 1) % STEPS.length), step.hold ?? 800);
    })();

    return () => {
      cancelled = true;
      rafs.forEach(cancelAnimationFrame);
      if (timer) clearTimeout(timer);
    };
  }, [cur, inView, playing, step, STEPS.length]);

  // The active token rests on its app and only rides a brokered dispatch.
  const tokenPt: Pt | null = useMemo(() => {
    if (!step.token) return null;
    if (flow && step.tokenTravels) return { x: lerp(flow.from.x, flow.to.x, flow.progress), y: lerp(flow.from.y, flow.to.y, flow.progress) };
    return nodePt(L, step.tokenAt ?? 'Rekuest');
  }, [flow, step, L]);

  const hot = new Set(step.hot);

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
            <Diagram L={L} inView={inView} hot={hot} flow={flow} tokenPt={tokenPt} step={step} fill={fill} compact={compact} cur={cur} />
          </div>
        </div>

        {/* narration + transport */}
        <div className="mx-auto mt-1 flex max-w-2xl flex-col items-center gap-3">
          <p key={cur} className="animate-pop-in min-h-[2.75rem] text-center text-[15px] leading-relaxed text-fd-foreground/90">
            <span className="font-mono text-[11px] text-primary/70">{String(cur + 1).padStart(2, '0')} · </span>
            {step.desc}
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
            <span className="ml-1.5 font-mono text-[11px] text-fd-muted-foreground">{cur + 1} / {STEPS.length}</span>
          </div>
        </div>

        {/* stacked: the provenance tree drops below the diagram, full-width */}
        {L.stacked && (
          <div className="mx-auto mt-4 w-full max-w-xl">
            <TreePane cur={cur} done={step.done} />
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-fd-muted-foreground">
          <span className="flex items-center gap-2"><span className="h-1.5 w-5 rounded-full" style={{ background: CTRL }} /> call · brokered by Rekuest</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-5 rounded-full" style={{ background: TOKEN }} /> the run's token (child → parent)</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-5 rounded-full" style={{ background: DATA }} /> saves an image · stamped & decoded in Mikro</span>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">
        <strong>One token per task, one tree per run.</strong> A human's request is the root task.
        <em> Rekuest</em> brokers every call. When one robot app delegates to another, it mints
        the callee its own signed token that points back to the parent. On each write, <em>Mikro</em>
        decodes the token and records who acted, which app, and the parent task. So the whole run
        forms one verifiable provenance tree you can query, audit, or revert.
      </figcaption>
    </figure>
  );
}

function Diagram({ L, inView, hot, flow, tokenPt, step, fill, compact, cur }: { L: Layout; inView: boolean; hot: Set<string>; flow: (Edge & { progress: number }) | null; tokenPt: Pt | null; step: Step; fill: number; compact: boolean; cur: number }) {
  const bloom: CSSProperties = { opacity: inView ? 1 : 0, transition: 'opacity .25s ease' };
  const serverHot = hot.has('Rekuest') || hot.has('Mikro');
  const { cx, cy, ri, ro } = L;

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
          { label: 'Rekuest', d: wedgePath(cx, cy, ri, ro, 180, 360) },
          { label: 'Mikro', d: wedgePath(cx, cy, ri, ro, 0, 180) },
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

        {/* glowing flow for the active step */}
        {flow && (
          (() => {
            const hp = flow.progress;
            const tp = Math.max(0, flow.progress - 0.34);
            const hx = lerp(flow.from.x, flow.to.x, hp);
            const hy = lerp(flow.from.y, flow.to.y, hp);
            const tx = lerp(flow.from.x, flow.to.x, tp);
            const ty = lerp(flow.from.y, flow.to.y, tp);
            return (
              <g>
                <line x1={tx} y1={ty} x2={hx} y2={hy} strokeWidth="9" strokeLinecap="round" style={{ stroke: flow.color, opacity: 0.22, filter: 'blur(4px)' }} />
                <line x1={tx} y1={ty} x2={hx} y2={hy} strokeWidth="3" strokeLinecap="round" style={{ stroke: flow.color, filter: `drop-shadow(0 0 5px ${flow.color})` }} />
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

      {/* GraphQL transport symbol */}
      <Centered x={L.graphql.x} y={L.graphql.y}>
        <div className="flex items-center gap-2 rounded-full border border-fd-border bg-fd-muted/40 px-3 py-1.5 backdrop-blur" style={bloom}>
          <GraphQLMark className="size-[22px]" />
          <span className="font-mono text-[11px] text-fd-muted-foreground">GraphQL · kante transport</span>
        </div>
      </Centered>

      {/* human node (root task) */}
      <Centered x={L.human.x} y={L.human.y}>
        <div className="relative flex flex-col items-center" style={bloom}>
          {step.user && (
            <div className="absolute bottom-full mb-3 whitespace-nowrap rounded-xl border border-primary/40 bg-primary/15 px-3 py-1.5 font-mono text-[12px] text-primary backdrop-blur">
              “{step.user}”
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
        { label: 'Rekuest', sub: 'mints & signs', icon: Network, pt: L.rekLabel },
        { label: 'Mikro', sub: 'decodes & stores', icon: Layers, pt: L.mikLabel },
      ].map((s) => (
        <Centered key={s.label} x={s.pt.x} y={s.pt.y}>
          <div className="flex w-[100px] flex-col items-center text-center" style={bloom}>
            <s.icon className="mb-1 size-[20px]" style={{ color: 'var(--orbit-icon)' }} />
            <div className="text-[14px] font-bold tracking-tight">{s.label}</div>
            {!compact && <div className="mt-0.5 font-mono text-[10px] text-fd-muted-foreground">{s.sub}</div>}
          </div>
        </Centered>
      ))}

      {/* robot app cards */}
      {APPS.map((app) => {
        const p = L.appPt(app.label);
        const isHot = hot.has(app.label);
        const running = step.running === app.label;
        return (
          <Centered key={app.label} x={p.x} y={p.y}>
            <div style={bloom}>
              <div className={`relative flex items-center rounded-2xl border ${compact ? 'size-[92px] justify-center' : 'h-[64px] w-[172px] justify-start gap-3 px-4'}`} style={cardStyle(app.hue, isHot)}>
                {compact ? (
                  <Bot className="size-9" style={{ color: iconColor(app.hue) }} />
                ) : (
                  <>
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl border" style={iconBox(app.hue)}>
                      <Bot className="size-[21px]" style={{ color: iconColor(app.hue) }} />
                    </span>
                    <div className="min-w-0 leading-tight">
                      <div className="truncate text-[15px] font-bold tracking-tight text-fd-foreground">{app.label}</div>
                      <div className="mt-0.5 truncate font-mono text-[10.5px] text-fd-muted-foreground">{app.sub}</div>
                    </div>
                  </>
                )}
                {running && (
                  <div className="absolute inset-x-3 -bottom-2 h-1.5 overflow-hidden rounded-full" style={{ background: 'var(--orbit-seg-hot)' }}>
                    <div className="h-full rounded-full" style={{ width: `${fill * 100}%`, background: iconColor(app.hue), transition: 'width .1s linear' }} />
                  </div>
                )}
              </div>
            </div>
          </Centered>
        );
      })}

      {/* the active provenance token (child → parent) */}
      {tokenPt && step.token && (
        <Centered x={tokenPt.x} y={tokenPt.y}>
          <div className="animate-pop-in flex items-center gap-1.5 rounded-full px-2.5 py-1 shadow-md ring-1 ring-fd-border backdrop-blur" style={{ background: TOKEN }}>
            <KeyRound className="size-3.5" style={{ color: 'var(--orbit-hole)' }} />
            <span className="font-mono text-[11px] font-bold" style={{ color: 'var(--orbit-hole)' }}>{step.token.id}</span>
            {step.token.parent !== 'root' && <span className="font-mono text-[10px] font-semibold opacity-70" style={{ color: 'var(--orbit-hole)' }}>↳{step.token.parent}</span>}
          </div>
        </Centered>
      )}

      {/* each agent's progress image, attached to Mikro as it uploads */}
      {step.running && flow && (
        (() => {
          const hx = lerp(flow.from.x, flow.to.x, flow.progress);
          const hy = lerp(flow.from.y, flow.to.y, flow.progress);
          return (
            <Centered x={hx} y={hy}>
              <ImageThumb hue={appOf(step.running!).hue} className="h-[30px] w-[42px]" />
            </Centered>
          );
        })()
      )}

      {/* Mikro decodes the signed token → claims */}
      {step.decode && (
        <Centered x={L.decode.x} y={L.decode.y}>
          <div className="animate-pop-in w-[196px] rounded-xl border border-fd-border bg-fd-popover/95 p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur">
            <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-primary/80">
              <KeyRound className="size-3.5" style={{ color: TOKEN }} /> TOKEN DECODED
            </div>
            <dl className="flex flex-col gap-1 font-mono text-[12px]">
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">user</dt><dd className="text-fd-foreground">you</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">client</dt><dd className="text-fd-foreground">{step.decode.client}</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">task</dt><dd className="font-semibold text-primary">{step.decode.task}</dd></div>
              <div className="flex justify-between gap-2"><dt className="text-fd-muted-foreground">parent</dt><dd className="text-fd-foreground">{step.decode.parent}</dd></div>
            </dl>
          </div>
        </Centered>
      )}

      {/* provenance tree pane (wide: inside the diagram on the right) */}
      {L.tree && (
        <div className="absolute" style={{ left: L.tree.x, top: L.tree.y, width: L.tree.w, ...bloom }}>
          <TreePane cur={cur} done={step.done} />
        </div>
      )}
    </div>
  );
}

/** The Mikro provenance tree card. Usable inside the diagram or as a DOM block. */
function TreePane({ cur, done }: { cur: number; done?: boolean }) {
  const revealedTasks = countRevealed(BUILT_TREE, cur, 'revealAt');
  const revealedWrites = countRevealed(BUILT_TREE, cur, 'saveAt');
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
          <div className="font-mono text-[10.5px] text-fd-muted-foreground">root authority · run #42</div>
        </div>
      </div>

      {/* nested task tree */}
      <div className="ml-2.5 mt-2 border-l border-fd-border pl-4">
        <TreeBranch node={BUILT_TREE} cur={cur} />
      </div>

      <div
        className="mt-4 flex items-center justify-between rounded-lg px-3 py-2 font-mono text-[12px] transition-colors"
        style={done ? { background: 'oklch(0.6 0.18 var(--brand-hue) / 0.14)', color: 'var(--color-fd-primary)' } : { color: 'var(--color-fd-muted-foreground)' }}
      >
        <span>{revealedTasks} task{revealedTasks === 1 ? '' : 's'} · {revealedWrites} write{revealedWrites === 1 ? '' : 's'}</span>
        <span className="font-semibold">one tree</span>
      </div>
    </div>
  );
}

/** One task node: the task badge, its write leaf, and its delegated children. */
function TreeBranch({ node, cur }: { node: BuiltTask; cur: number }) {
  if (cur < node.revealAt) return null;
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
        {cur >= node.saveAt && (
          <div className="animate-pop-in relative flex items-center gap-2.5 rounded-lg border border-fd-border bg-fd-background/40 px-2.5 py-1.5">
            <span className="absolute -left-4 top-1/2 w-4 border-t border-fd-border" />
            <ImageThumb hue={hue} className="h-[28px] w-[38px]" />
            <div className="min-w-0 flex-1 leading-tight">
              <div className="truncate font-mono text-[12px] text-fd-foreground">{node.image}</div>
              <div className="font-mono text-[10px] text-fd-muted-foreground">image · CREATE</div>
            </div>
          </div>
        )}
        {node.children.map((c) => (
          <TreeBranch key={c.id} node={c} cur={cur} />
        ))}
      </div>
    </div>
  );
}

/** A tiny saved "progress image". A microscopy-ish plane tinted by the agent,
    carrying the provenance token overlaid in its corner. */
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

/** The GraphQL mark: a hexagon of nodes with the inscribed triangle. */
function GraphQLMark({ className }: { className?: string }) {
  const GQL = '#E10098';
  const verts = [-90, -30, 30, 90, 150, 210].map((d) => ({
    x: 50 + 42 * Math.cos((d * Math.PI) / 180),
    y: 50 + 42 * Math.sin((d * Math.PI) / 180),
  }));
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <polygon points={verts.map((v) => `${v.x},${v.y}`).join(' ')} fill="none" stroke={GQL} strokeWidth="5" strokeLinejoin="round" />
      <polygon points={[verts[0], verts[2], verts[4]].map((v) => `${v.x},${v.y}`).join(' ')} fill="none" stroke={GQL} strokeWidth="5" strokeLinejoin="round" />
      {verts.map((v, i) => (
        <circle key={i} cx={v.x} cy={v.y} r="8.5" fill={GQL} />
      ))}
    </svg>
  );
}
