import React from 'react';

/**
 * MeshHandshake
 *
 * How an app (does the work) and a hub (stores the data) meet on the mesh:
 * both authorize against the coordinator, get credentials back (token + mesh
 * key), start a Tailscale sidecar, and then talk over a direct WireGuard
 * tunnel. On the hub the sidecar is one more container in its Docker Compose
 * project. A second panel shows the app rotating onto another organization's
 * mesh.
 */

const INDIGO = '#7d7dea';
const GREEN = '#7FC99B';
const AMBER = '#E8B96B';
const SANS = 'ui-sans-serif, system-ui, -apple-system, sans-serif';
const TEXT = 'rgba(255,255,255,0.92)';
const MUTED = 'rgba(255,255,255,0.55)';
const FAINT = 'rgba(255,255,255,0.4)';

function Frame({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-3xl p-4 sm:p-6"
      style={{
        background: 'radial-gradient(120% 120% at 50% 0%, #14141f 0%, #08080c 70%)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="mb-3 flex flex-col items-center gap-1 text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-[#7d7dea]">{title}</span>
        <span className="text-sm text-white/55">{subtitle}</span>
      </div>
      {children}
    </div>
  );
}

function Step({ x, y, n, color = TEXT }: { x: number; y: number; n: number; color?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="11" fill="#0d0d15" stroke={color} strokeWidth="1.5" />
      <text x={x} y={y + 4} fontFamily={SANS} fontSize="11" fontWeight="700" textAnchor="middle" fill={color}>
        {n}
      </text>
    </g>
  );
}

function Box({
  x, y, w, h, title, sub, stroke, fill = 'rgba(255,255,255,0.03)',
}: { x: number; y: number; w: number; h: number; title: string; sub: string; stroke: string; fill?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x={x + 18} y={y + h / 2 - 3} fontFamily={SANS} fontSize="13.5" fontWeight="700" fill={TEXT}>
        {title}
      </text>
      <text x={x + 18} y={y + h / 2 + 15} fontFamily={SANS} fontSize="11" fill={MUTED}>
        {sub}
      </text>
    </g>
  );
}

function Tunnel({ x1, x2, y, color, faded = false }: { x1: number; x2: number; y: number; color: string; faded?: boolean }) {
  return (
    <g opacity={faded ? 0.3 : 1}>
      {!faded && (
        <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth="7" strokeLinecap="round" opacity="0.4" filter="url(#mhGlow)" />
      )}
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray="14 11" />
      <circle cx={x1} cy={y} r="5" fill={color} />
      <circle cx={x2} cy={y} r="5" fill={color} />
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <filter id="mhGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <marker id="mhArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="rgba(255,255,255,0.6)" />
      </marker>
    </defs>
  );
}

function Meeting() {
  const up = { stroke: 'rgba(255,255,255,0.45)', strokeWidth: 1.6, markerEnd: 'url(#mhArrow)' };
  const down = { ...up, strokeDasharray: '3 5' };
  return (
    <svg viewBox="0 0 880 500" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      <Defs />

      {/* coordinator */}
      <rect x="290" y="20" width="300" height="84" rx="16" fill="rgba(125,125,234,0.10)" stroke={INDIGO} strokeWidth="2" />
      <text x="440" y="56" fontFamily={SANS} fontSize="14.5" fontWeight="700" textAnchor="middle" fill={TEXT}>
        Coordinator
      </text>
      <text x="440" y="76" fontFamily={SANS} fontSize="11" textAnchor="middle" fill={MUTED}>
        accounts · organizations · Ionscale
      </text>

      {/* app: authorize up, credentials down */}
      <line x1="150" y1="248" x2="300" y2="108" {...up} />
      <line x1="325" y1="108" x2="185" y2="248" {...down} />
      <Step x={255} y={150} n={1} />
      <text x={238} y={154} fontFamily={SANS} fontSize="11" fill={MUTED} textAnchor="end">authorize</text>
      <Step x={223} y={210} n={2} />
      <text x={240} y={214} fontFamily={SANS} fontSize="11" fill={MUTED}>token + mesh key</text>

      {/* hub: authorize up, credentials down */}
      <line x1="730" y1="248" x2="580" y2="108" {...up} />
      <line x1="555" y1="108" x2="695" y2="248" {...down} />
      <Step x={625} y={150} n={1} />
      <text x={642} y={154} fontFamily={SANS} fontSize="11" fill={MUTED}>authorize</text>
      <Step x={657} y={210} n={2} />
      <text x={640} y={214} fontFamily={SANS} fontSize="11" fill={MUTED} textAnchor="end">token + mesh key</text>

      {/* app column */}
      <rect x="30" y="250" width="300" height="220" rx="18" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <text x="46" y="274" fontFamily={SANS} fontSize="11" fontWeight="700" letterSpacing="2" fill={FAINT}>
        APP · DOES THE WORK
      </text>
      <Box x={50} y={288} w={260} h={62} title="Your app" sub="laptop · GPU node · plugin" stroke="rgba(255,255,255,0.5)" />
      <Box x={50} y={388} w={260} h={62} title="Tailscale sidecar" sub="started with the mesh key" stroke={GREEN} fill="rgba(127,201,155,0.06)" />
      <line x1="180" y1="350" x2="180" y2="384" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" markerEnd="url(#mhArrow)" />
      <Step x={200} y={368} n={3} />

      {/* hub column: a Docker Compose project */}
      <rect x="550" y="250" width="300" height="220" rx="18" fill="rgba(127,201,155,0.03)" stroke={GREEN} strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="566" y="274" fontFamily={SANS} fontSize="11" fontWeight="700" letterSpacing="2" fill={FAINT}>
        HUB · STORES THE DATA
      </text>
      <text x="834" y="463" fontFamily="ui-monospace, monospace" fontSize="10" fill={FAINT} textAnchor="end">
        docker compose
      </text>
      <Box x={570} y={288} w={260} h={62} title="Gateway + services" sub="mikro · rekuest · storage" stroke="rgba(255,255,255,0.5)" />
      <Box x={570} y={388} w={260} h={62} title="Tailscale sidecar" sub="one more container" stroke={GREEN} fill="rgba(127,201,155,0.06)" />
      <line x1="700" y1="350" x2="700" y2="384" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" markerEnd="url(#mhArrow)" />
      <Step x={680} y={368} n={3} />

      {/* the meeting: direct tunnel between sidecars */}
      <Tunnel x1={310} x2={570} y={419} color={GREEN} />
      <Step x={440} y={380} n={4} color={GREEN} />
      <text x="440" y="444" fontFamily={SANS} fontSize="12" fontWeight="700" textAnchor="middle" fill={GREEN}>
        WireGuard, peer-to-peer
      </text>
      <text x="440" y="460" fontFamily={SANS} fontSize="10.5" textAnchor="middle" fill={MUTED}>
        never via the coordinator
      </text>
    </svg>
  );
}

function Rotation() {
  return (
    <svg viewBox="0 0 880 290" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      <Defs />

      {/* org A mesh */}
      <rect x="20" y="30" width="270" height="200" rx="18" fill="rgba(125,125,234,0.05)" stroke={INDIGO} strokeOpacity="0.5" strokeWidth="1.5" />
      <text x="36" y="56" fontFamily={SANS} fontSize="11" fontWeight="700" letterSpacing="2" fill={INDIGO}>
        ORG A · MESH
      </text>
      <Box x={40} y={100} w={220} h={62} title="Hub A" sub="Org A's data" stroke={INDIGO} fill="rgba(125,125,234,0.08)" />

      {/* org B mesh */}
      <rect x="590" y="30" width="270" height="200" rx="18" fill="rgba(232,185,107,0.05)" stroke={AMBER} strokeOpacity="0.6" strokeWidth="1.5" />
      <text x="606" y="56" fontFamily={SANS} fontSize="11" fontWeight="700" letterSpacing="2" fill={AMBER}>
        ORG B · MESH
      </text>
      <Box x={620} y={100} w={220} h={62} title="Hub B" sub="Org B's data" stroke={AMBER} fill="rgba(232,185,107,0.08)" />

      {/* old tunnel, dropped */}
      <Tunnel x1={260} x2={350} y={131} color={INDIGO} faded />
      <g transform="translate(305,131)" stroke="#e07a7a" strokeWidth="3" strokeLinecap="round">
        <line x1="-8" y1="-8" x2="8" y2="8" />
        <line x1="-8" y1="8" x2="8" y2="-8" />
      </g>
      <text x="305" y="170" fontFamily={SANS} fontSize="10.5" textAnchor="middle" fill={MUTED}>
        key dropped
      </text>

      {/* new tunnel */}
      <Tunnel x1={530} x2={620} y={131} color={AMBER} />
      <text x="575" y="170" fontFamily={SANS} fontSize="10.5" textAnchor="middle" fill={MUTED}>
        new key
      </text>

      {/* the app in the middle */}
      <rect x="350" y="96" width="180" height="70" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
      <text x="440" y="124" fontFamily={SANS} fontSize="13.5" fontWeight="700" textAnchor="middle" fill={TEXT}>
        Your app
      </text>
      <text x="440" y="143" fontFamily={SANS} fontSize="11" textAnchor="middle" fill={MUTED}>
        + Tailscale sidecar
      </text>

      {/* rotate glyph */}
      <g transform="translate(440,60)" fill="none" stroke={TEXT} strokeWidth="2" strokeLinecap="round">
        <path d="M-14 0 A14 14 0 0 1 12 -7" markerEnd="url(#mhArrow)" />
        <path d="M14 0 A14 14 0 0 1 -12 7" markerEnd="url(#mhArrow)" />
      </g>
      <text x="440" y="30" fontFamily={SANS} fontSize="11" fontWeight="700" letterSpacing="2" textAnchor="middle" fill={FAINT}>
        SWITCH ORG
      </text>

      <text x="440" y="212" fontFamily={SANS} fontSize="11.5" textAnchor="middle" fill={MUTED}>
        re-authorize for Org B → new token + mesh key → sidecar restarts
      </text>
      <text x="440" y="232" fontFamily={SANS} fontSize="11.5" textAnchor="middle" fill={MUTED}>
        Hub A is no longer reachable from this app
      </text>
    </svg>
  );
}

export function MeshHandshake() {
  return (
    <figure className="not-prose my-8 flex flex-col gap-4">
      <Frame title="Meeting on the mesh" subtitle="App and hub each authorize, then talk directly">
        <Meeting />
      </Frame>
      <Frame title="Switching organizations" subtitle="The app's mesh identity rotates with the organization">
        <Rotation />
      </Frame>
      <figcaption className="text-center text-sm text-fd-muted-foreground">
        The coordinator hands out credentials and introduces peers. Your data only ever travels on the
        tunnel between the two sidecars.
      </figcaption>
    </figure>
  );
}
