'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { Boxes, Globe, Laptop, Lock, Network, Server, ShieldCheck } from 'lucide-react';
import { useInView } from '@/components/marketing/reveal';
import { Logo } from '@/components/site/logo';
import {
  Band,
  bloomStyle,
  cardGradient,
  CrossingMarker,
  crossings,
  elbow,
  Enclosure,
  FirewallLine,
  flow,
  HelpDot,
  iconBox,
  iconColor,
  InfoDot,
  laneY,
  useMeasuredAnchors,
  Wire,
  type Anchor,
  type Box,
  type MeasuredGeo,
  type Pt,
} from '@/components/diagram';

/* Deployment strategies, in the ProvenanceFlow visual language (theme-aware
   `--orbit-*` / `--brand-hue` OKLCH tokens).

   Layout is flexbox: a column of bands. PUBLIC INTERNET sits on top, then the
   ground floor holding two side-by-side network boxes (ANOTHER NETWORK and
   YOUR LOCAL NETWORK). Every box and node card is a flex child that sizes
   itself; nothing is hand-placed. The only absolutely-positioned layer is the
   SVG wire overlay, whose edges are routed from the *measured* positions of the
   node cards. So the diagram and its connectors always agree.

   One fixed point of view: your app always lives in your local network, and a
   remote app on another network always wants in. Across the three strategies
   only server placement changes. That determines which of your two planes crosses
   the NAT/firewall, and whether the remote app can reach in:
     • data  (green):  your workload. Crossing it means your data leaves.
     • auth  (indigo): the auth & discovery handshake (every app needs it).
   The Data / Auth / Both switch isolates one plane. Nothing animates. */

const DATA = flow(150); // workload data (green)
const AUTH = flow('var(--brand-hue)'); // auth & discovery (brand indigo)
const RED = flow(28, '0.21'); // dropped at the firewall

type Plane = 'data' | 'auth';
type Variant = 'tunnel' | 'blocked';
type Net = 'mine' | 'other'; // undefined ⇒ lives in the public internet
type Kind = 'central' | 'coordinator' | 'apps' | 'outside';
type Route = 'sibling' | 'inrow' | 'up' | 'over' | 'blocked';

type Node = { id: string; kind: Kind; title: string; sub: string; net?: Net };
const mk = (id: string, kind: Kind, title: string, sub: string, net?: Net): Node => ({ id, kind, title, sub, net });

type Edge = { from: string; to?: string; plane: Plane; variant?: Variant; route: Route; lane?: number; label?: string; help?: boolean; info?: string };

type Strategy = { key: string; title: string; readiness: string; story: string; nodes: Node[]; edges: Edge[] };

const TAILSCALE = 'Air-gapped by default. You’re of course free to bridge in with your own VPN, e.g. Tailscale or WireGuard.';

// ── the three strategies: node lists + semantic edges (geometry is measured) ──
const PARTNER: Strategy = {
  key: 'partner',
  title: 'Kommunity partner',
  readiness: 'Demo only',
  story:
    'Your app runs in your local network, but the servers live on the partner’s public cloud. So its data and auth calls cross the boundary out to the internet. An app on another network reaches those same public servers just as easily. The catch is trust, not reachability: your data lives on infrastructure you don’t own.',
  nodes: [
    mk('coord', 'coordinator', 'Coordination server', 'partner · public'),
    mk('central', 'central', 'Data-Server','partner · public'),
    mk('outside', 'outside', 'Remote app', 'another network', 'other'),
    mk('app', 'apps', 'Your app', 'local network', 'mine'),
  ],
  edges: [
    { from: 'app', to: 'coord', plane: 'auth', route: 'up', lane: 0, label: 'auth & discovery', help: true },
    { from: 'app', to: 'central', plane: 'data', route: 'up', lane: 1, label: 'data' },
    { from: 'outside', to: 'coord', plane: 'auth', route: 'up', lane: 2 },
    { from: 'outside', to: 'central', plane: 'data', route: 'up', lane: 3, label: 'connects' },
  ],
};

const LOCAL: Strategy = {
  key: 'local',
  title: 'Local + coordination',
  readiness: 'Recommended',
  story:
    'Your app and the central server both sit in your local network, so your workload data never leaves it. Only the lightweight auth & discovery handshake crosses the firewall to the Arkitekt-run coordination server. An app on another network can still reach in, over an experimental, encrypted WireGuard mesh tunnel.',
  nodes: [
    mk('coord', 'coordinator', 'Coordination server', 'Arkitekt-run'),
    mk('outside', 'outside', 'Remote app', 'another network', 'other'),
    mk('app', 'apps', 'Your app', 'local network', 'mine'),
    mk('central', 'central', 'Data-Server','in your lab', 'mine'),
  ],
  edges: [
    { from: 'app', to: 'central', plane: 'data', route: 'sibling', label: 'data · stays local' },
    { from: 'app', to: 'coord', plane: 'auth', route: 'up', lane: 0, label: 'auth & discovery', help: true },
    { from: 'outside', to: 'coord', plane: 'auth', route: 'up', lane: 1 },
    { from: 'outside', to: 'central', plane: 'data', variant: 'tunnel', route: 'over', lane: 2, label: 'experimental WireGuard' },
  ],
};

const SELFHOST: Strategy = {
  key: 'selfhost',
  title: 'Fully self-hosted',
  readiness: 'Advanced',
  story:
    'Everything (your app, the central server, and your own coordination server) runs inside your local network, so neither data nor auth ever crosses the boundary. By the same token there is no way in for an app on another network: the firewall drops it. That isolation is the point (air-gapped / CI).',
  nodes: [
    mk('outside', 'outside', 'Remote app', 'another network', 'other'),
    mk('app', 'apps', 'Your app', 'local network', 'mine'),
    mk('central', 'central', 'Data-Server','in your lab', 'mine'),
    mk('coord', 'coordinator', 'Coordination server', 'your own', 'mine'),
  ],
  edges: [
    { from: 'app', to: 'central', plane: 'data', route: 'sibling', label: 'data' },
    { from: 'app', to: 'coord', plane: 'auth', route: 'inrow', label: 'auth & discovery · in-network', help: true },
    { from: 'outside', plane: 'auth', variant: 'blocked', route: 'blocked', lane: 0, label: 'no way in', info: TAILSCALE },
  ],
};

const STRATEGIES: Strategy[] = [PARTNER, LOCAL, SELFHOST];

const ICON: Record<Kind, typeof Server> = { central: Server, coordinator: Network, apps: Boxes, outside: Laptop };
const colorOf = (e: Edge) => (e.variant === 'blocked' ? RED : e.plane === 'data' ? DATA : AUTH);
const DISCOVERY_URL = '/docs/design/architecture/service-discovery';

const PARAM = 'deploy';
const DEFAULT = Math.max(0, STRATEGIES.findIndex((s) => s.key === 'local'));
type Show = 'both' | 'data' | 'auth';

export function DeploymentStrategies() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const [active, setActive] = useState(DEFAULT);
  const [show, setShow] = useState<Show>('both');

  // restore the tab from ?deploy= after mount (keeps SSG markup hydration-safe)
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get(PARAM);
    const idx = STRATEGIES.findIndex((x) => x.key === key);
    if (idx >= 0) setActive(idx);
  }, []);

  const s = STRATEGIES[active];

  const select = (idx: number) => {
    setActive(idx);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set(PARAM, STRATEGIES[idx].key);
      window.history.replaceState({}, '', url);
    } catch {
      /* ignore */
    }
  };

  return (
    <figure className="not-prose my-8">
      <div ref={ref} className="relative isolate overflow-hidden rounded-3xl border border-fd-border bg-[var(--orbit-surface)] text-fd-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[8%] h-[22rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--orbit-grid)_1px,transparent_0)] [background-size:36px_36px]" />
        </div>

        {/* strategy tabs. Part of the card, divided by the same border */}
        <div role="tablist" aria-label="Deployment strategies" className="flex border-b border-fd-border">
          {STRATEGIES.map((st, i) => {
            const on = i === active;
            return (
              <button
                key={st.key}
                role="tab"
                aria-selected={on}
                onClick={() => select(i)}
                className={`-mb-px flex-1 border-b-2 px-3 py-3 text-[13.5px] font-semibold transition-colors ${
                  on ? 'border-primary text-fd-foreground' : 'border-transparent text-fd-muted-foreground hover:text-fd-foreground'
                }`}
              >
                {st.title}
              </button>
            );
          })}
        </div>

        <div className="px-3 pb-5 pt-4 sm:px-6">
          {/* plane switch + readiness */}
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-fd-muted-foreground">{s.readiness}</span>
            <div className="inline-flex rounded-lg border border-fd-border p-0.5 text-[12px]" role="group" aria-label="Which plane to show">
              {(['both', 'data', 'auth'] as Show[]).map((opt) => {
                const on = show === opt;
                const tint = opt === 'data' ? DATA : opt === 'auth' ? AUTH : undefined;
                return (
                  <button
                    key={opt}
                    onClick={() => setShow(opt)}
                    aria-pressed={on}
                    className="flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium capitalize transition-colors"
                    style={{ background: on ? 'var(--color-fd-muted)' : 'transparent', color: on ? 'var(--color-fd-foreground)' : 'var(--color-fd-muted-foreground)' }}
                  >
                    {tint && <span className="size-2 rounded-full" style={{ background: tint }} />}
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-x-auto">
            <Diagram s={s} show={show} inView={inView} />
          </div>

          <p key={s.key + show} className="animate-pop-in mx-auto mt-3 max-w-2xl text-center text-[14px] leading-relaxed text-fd-foreground/85">
            {s.story}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-fd-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-1.5 w-5 rounded-full" style={{ background: DATA }} /> data · your workload</span>
            <span className="flex items-center gap-2"><span className="h-0 w-5 border-t-2 border-dotted" style={{ borderColor: AUTH }} /> auth &amp; discovery</span>
            <span className="flex items-center gap-2"><span className="h-0 w-5 border-t-2 border-dashed" style={{ borderColor: DATA }} /> WireGuard mesh · experimental</span>
            <span className="flex items-center gap-2"><span className="h-0 w-5 border-t-2 border-dashed" style={{ borderColor: RED }} /> blocked at the firewall</span>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">
        <strong>Your app always stays in your local network.</strong> What changes between strategies
        is where the servers live. That determines which of your connections cross the NAT/firewall
        boundary, and whether an app on another network can reach in at all.
      </figcaption>
    </figure>
  );
}

// ── measured geometry ───────────────────────────────────────────────────────
// the semantic geometry of *this* diagram, derived from the measured anchors/boxes
type Geo = { anchors: Record<string, Anchor>; mine?: Box; other?: Box; firewallY: number; serverBottom: number; lanes: number; W: number; H: number };

// y of an edge's routing lane, between the public servers and the firewall line
const lane = (e: Edge, g: Geo) => laneY(e.lane ?? 0, g.lanes, g.serverBottom + 14, g.firewallY - 12);

function deriveGeo(m: MeasuredGeo, publicNodes: Node[], lanes: number): Geo {
  const mine = m.boxes.mine;
  const other = m.boxes.other;
  const firewallY = mine?.y ?? other?.y ?? m.H * 0.5;
  let serverBottom = 0;
  for (const n of publicNodes) {
    const an = m.anchors[n.id];
    if (an) serverBottom = Math.max(serverBottom, an.bottom);
  }
  return { anchors: m.anchors, mine, other, firewallY, serverBottom: serverBottom || firewallY * 0.4, lanes, W: m.W, H: m.H };
}

type Built = { pts: Pt[]; labelPt?: Pt; helpPt?: Pt; infoPt?: Pt };

function buildEdge(e: Edge, g: Geo): Built | null {
  const a = g.anchors[e.from];
  if (!a) return null;
  const t = e.to ? g.anchors[e.to] : undefined;
  const fw = g.firewallY;
  let pts: Pt[];

  if (e.route === 'sibling') {
    if (!t) return null;
    pts = [{ x: a.right, y: a.cy }, { x: t.left, y: t.cy }];
    return { pts, labelPt: { x: (a.right + t.left) / 2, y: a.cy - 10 } };
  }
  if (e.route === 'inrow') {
    if (!t) return null;
    pts = elbow({ x: a.cx, y: a.top }, { x: t.cx, y: t.top }, fw + 18);
  } else if (e.route === 'up') {
    if (!t) return null;
    pts = elbow({ x: a.cx, y: a.top }, { x: t.cx, y: t.bottom }, lane(e, g));
  } else if (e.route === 'over') {
    if (!t) return null;
    pts = elbow({ x: a.cx, y: a.top }, { x: t.cx, y: t.top }, lane(e, g));
  } else {
    // blocked: head toward your network, dropped at the firewall
    const tx = g.mine ? g.mine.x + 34 : a.cx;
    pts = elbow({ x: a.cx, y: a.top }, { x: tx, y: fw }, lane(e, g));
    const last = pts[pts.length - 1];
    return { pts, labelPt: { x: (pts[1].x + pts[2].x) / 2, y: pts[1].y - 7 }, infoPt: { x: last.x + 22, y: last.y - 20 } };
  }

  const segMid = { x: (pts[1].x + pts[2].x) / 2, y: pts[1].y };
  return { pts, labelPt: { x: segMid.x, y: segMid.y - 7 }, helpPt: { x: segMid.x + 34, y: segMid.y + 13 } };
}

function Diagram({ s, show, inView }: { s: Strategy; show: Show; inView: boolean }) {
  const { wrapRef, registerNode, registerBox, geo: measured } = useMeasuredAnchors({ boxes: ['mine', 'other'] });

  const publicNodes = s.nodes.filter((n) => !n.net);
  const otherNodes = s.nodes.filter((n) => n.net === 'other');
  const mineNodes = s.nodes.filter((n) => n.net === 'mine');
  const lanes = Math.max(1, ...s.edges.map((e) => (e.lane ?? -1) + 1));

  const geo = measured ? deriveGeo(measured, publicNodes, lanes) : null;
  const bloom = bloomStyle(inView);
  const visible = s.edges.filter((e) => show === 'both' || e.plane === show);

  return (
    <div ref={wrapRef} className="relative mx-auto min-w-[700px] max-w-[880px]">
      {/* wire overlay: the only absolutely-positioned layer */}
      {geo && (
        <svg className="absolute inset-0 z-0 h-full w-full" viewBox={`0 0 ${geo.W} ${geo.H}`} preserveAspectRatio="none" fill="none" aria-hidden style={bloom}>
          <defs>
            <marker id="dsData" markerWidth="6" markerHeight="6" refX="4.4" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill={DATA} /></marker>
            <marker id="dsAuth" markerWidth="6" markerHeight="6" refX="4.4" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 z" fill={AUTH} /></marker>
          </defs>

          {/* network enclosures (drawn behind the transparent flex boxes) */}
          {geo.mine && <Enclosure box={geo.mine} tone="mine" />}
          {geo.other && <Enclosure box={geo.other} tone="other" />}
          {/* the firewall line. Both networks hang their top edge off it */}
          <FirewallLine y={geo.firewallY} x1={6} x2={geo.W - 6} />

          {visible.map((e, i) => {
            const b = buildEdge(e, geo);
            if (!b) return null;
            const color = colorOf(e);
            const dash = e.variant === 'tunnel' ? '10 8' : e.variant === 'blocked' ? '7 6' : e.plane === 'auth' ? '2 7' : undefined;
            const markerEnd = e.variant === 'blocked' ? undefined : e.plane === 'auth' ? 'url(#dsAuth)' : 'url(#dsData)';
            return (
              <g key={i}>
                <Wire pts={b.pts} color={color} dash={dash} width={e.plane === 'data' && !e.variant ? 2.6 : 2.2} markerEnd={markerEnd} glow={e.variant === 'tunnel'} />
                {e.label && b.labelPt && (
                  <text x={b.labelPt.x} y={b.labelPt.y} fontFamily="var(--font-mono, monospace)" fontSize="10.5" fontWeight="600" textAnchor="middle" style={{ fill: color }}>
                    {e.label}
                  </text>
                )}
                {e.help && b.helpPt && (
                  <HelpDot
                    x={b.helpPt.x}
                    y={b.helpPt.y}
                    href={DISCOVERY_URL}
                    label="How apps discover the server. Read about Service Discovery"
                    title="Each app runs a discovery handshake with the server. Learn more about Service Discovery"
                  />
                )}
                {e.info && b.infoPt && <InfoDot x={b.infoPt.x} y={b.infoPt.y} tip={e.info} />}
              </g>
            );
          })}

          {/* firewall markers: open port for an allowed crossing, lock for a tunnel, X for blocked */}
          {visible.flatMap((e, i) => {
            const b = buildEdge(e, geo);
            if (!b) return [];
            const color = colorOf(e);
            if (e.variant === 'blocked') {
              const last = b.pts[b.pts.length - 1];
              return [<CrossingMarker key={`x${i}`} x={last.x} y={last.y} color={RED} kind="x" />];
            }
            return crossings(b.pts, geo.firewallY).map((c, j) => (
              <CrossingMarker key={`m${i}-${j}`} x={c.x} y={c.y} color={color} kind={e.variant === 'tunnel' ? 'lock' : 'open'} />
            ));
          })}
        </svg>
      )}

      {/* the flex layout */}
      <div className="relative z-10 flex flex-col" style={bloom}>
        {/* public internet band */}
        <div className="flex min-h-[160px] flex-col gap-2 px-4 pt-2">
          <Band icon={<Globe className="size-3.5" />}>PUBLIC INTERNET</Band>
          <div className="flex flex-1 items-start justify-center gap-6">
            {publicNodes.length ? (
              publicNodes.map((n) => <NodeCard key={n.id} n={n} innerRef={registerNode(n.id)} />)
            ) : (
              <div className="m-auto flex flex-col items-center gap-1 text-center">
                <span className="flex items-center gap-1.5 rounded-full border border-dashed border-fd-border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-fd-muted-foreground">
                  <Globe className="size-3" /> fully air-gapped
                </span>
                <span className="font-mono text-[10px] text-fd-muted-foreground/80">nothing of yours reaches the public internet</span>
              </div>
            )}
          </div>
        </div>

        {/* ground floor: two networks side by side, behind the NAT/firewall */}
        <div className="relative flex min-h-[176px] items-stretch gap-5 px-4 pb-2">
          {/* NAT chip sits on the firewall line (top edge of the ground floor) */}
          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <span className="flex items-center gap-1.5 bg-[var(--orbit-surface)] px-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">
              <Lock className="size-2.5" /> NAT / firewall
            </span>
          </div>

          {otherNodes.length > 0 && (
            <div ref={registerBox('other')} className="relative flex shrink flex-col gap-2 rounded-2xl p-3">
              <Band icon={<Laptop className="size-3" />} small>ANOTHER NETWORK</Band>
              <div className="flex flex-1 items-center justify-center">
                {otherNodes.map((n) => <NodeCard key={n.id} n={n} innerRef={registerNode(n.id)} />)}
              </div>
            </div>
          )}

          <div ref={registerBox('mine')} className="relative flex grow flex-col gap-2 rounded-2xl p-3">
            <Band icon={<ShieldCheck className="size-3.5" />}>YOUR LOCAL NETWORK</Band>
            <div className="flex flex-1 items-center justify-center gap-5">
              {mineNodes.map((n) => <NodeCard key={n.id} n={n} innerRef={registerNode(n.id)} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NodeCard({ n, innerRef }: { n: Node; innerRef: (el: HTMLDivElement | null) => void }) {
  const Icon = ICON[n.kind];
  const mine = n.net === 'mine';
  const hue = 'var(--brand-hue)';
  const style: CSSProperties = mine
    ? { borderColor: `oklch(var(--orbit-card-border-hot-l) 0.12 ${hue})`, borderWidth: 2, backgroundImage: cardGradient(hue) }
    : { borderColor: 'var(--color-fd-border)', borderWidth: 1.5, borderStyle: 'dashed', backgroundColor: 'var(--color-fd-card)' };
  const ic = mine ? iconColor(hue) : 'var(--color-fd-muted-foreground)';
  const ib: CSSProperties = mine ? iconBox(hue) : { borderColor: 'var(--color-fd-border)', backgroundColor: 'var(--color-fd-muted)' };

  // the Arkitekt services carry the mark itself; the coordination server's is muted
  const logo = n.kind === 'central' || n.kind === 'coordinator';

  return (
    <div ref={innerRef} className="flex w-[150px] shrink-0 items-center gap-2.5 rounded-2xl border px-3 py-2.5" style={style}>
      {logo ? (
        <Logo className={`size-8 shrink-0 ${n.kind === 'coordinator' ? 'opacity-45 grayscale' : ''}`} />
      ) : (
        <span className="grid size-9 shrink-0 place-items-center rounded-xl border" style={ib}>
          <Icon className="size-[18px]" style={{ color: ic }} />
        </span>
      )}
      <div className="min-w-0 leading-tight">
        <div className="truncate text-[13px] font-bold tracking-tight text-fd-foreground">{n.title}</div>
        <div className="mt-0.5 truncate font-mono text-[10px] text-fd-muted-foreground">{n.sub}</div>
      </div>
    </div>
  );
}
