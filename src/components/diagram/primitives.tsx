/* Presentational SVG/DOM primitives shared by the diagrams: the band labels,
   network enclosures, firewall line, crossing markers, help/info dots, wire
   polylines, and the in-view reveal style. Each is theme-token-aware and free
   of any one diagram's metaphor. */

import type { CSSProperties, ReactNode } from 'react';
import type { Box, Pt } from './geometry';
import { toPoints } from './geometry';

/** Fade-in once the figure scrolls into view. Applied to overlay + content. */
export const bloomStyle = (inView: boolean): CSSProperties => ({ opacity: inView ? 1 : 0, transition: 'opacity .3s ease' });

/** Absolute overlay centered on (x, y) in the parent's coordinate space. */
export function Centered({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return (
    <div className="absolute" style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}>
      {children}
    </div>
  );
}

/** A small mono uppercase zone label (PUBLIC INTERNET, YOUR LOCAL NETWORK, …). */
export function Band({ icon, small, children }: { icon: ReactNode; small?: boolean; children: ReactNode }) {
  return (
    <span className={`flex items-center gap-1.5 self-start font-mono font-bold uppercase text-fd-muted-foreground ${small ? 'text-[8.5px] tracking-[0.12em]' : 'text-[10.5px] tracking-[0.18em]'}`}>
      {icon}
      {children}
    </span>
  );
}

/** The dashed firewall / NAT boundary line. */
export function FirewallLine({ y, x1, x2 }: { y: number; x1: number; x2: number }) {
  return <line x1={x1} y1={y} x2={x2} y2={y} stroke="var(--color-fd-primary)" strokeOpacity="0.5" strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />;
}

/** A network enclosure rectangle. `mine` is the highlighted local network; `other` is the dashed remote one. */
export function Enclosure({ box, tone }: { box: Box; tone: 'mine' | 'other' }) {
  const common = { x: box.x, y: box.y, width: box.w, height: box.h, rx: 18 };
  return tone === 'mine' ? (
    <rect {...common} fill="var(--color-fd-primary)" fillOpacity="0.05" stroke="var(--color-fd-primary)" strokeOpacity="0.34" strokeWidth="1.5" />
  ) : (
    <rect {...common} fill="var(--color-fd-muted)" fillOpacity="0.4" stroke="var(--color-fd-border)" strokeWidth="1.5" strokeDasharray="5 5" />
  );
}

/** A marker where a wire meets the firewall: an open port (allowed), a padlock
    (encrypted tunnel), or a red X (blocked/dropped). */
export function CrossingMarker({ x, y, color, kind }: { x: number; y: number; color: string; kind: 'open' | 'lock' | 'x' }) {
  if (kind === 'x') {
    return (
      <g transform={`translate(${x}, ${y})`} stroke={color} strokeWidth="3" strokeLinecap="round">
        <line x1="-7" y1="-7" x2="7" y2="7" />
        <line x1="-7" y1="7" x2="7" y2="-7" />
      </g>
    );
  }
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="-9" y="-7" width="18" height="14" rx="4" fill="var(--orbit-surface)" stroke={color} strokeWidth="1.8" />
      {kind === 'lock' ? (
        <>
          <rect x="-4.5" y="-1" width="9" height="6.5" rx="1.5" fill={color} />
          <path d="M-2.6 -1 V-3.4 a2.6 2.6 0 0 1 5.2 0 V-1" fill="none" stroke={color} strokeWidth="1.4" />
        </>
      ) : (
        <circle r="2.6" fill={color} />
      )}
    </g>
  );
}

/** A routed wire: an optional blurred glow underlay plus the dashed/solid line. */
export function Wire({ pts, color, dash, width = 2.2, markerEnd, glow }: { pts: Pt[]; color: string; dash?: string; width?: number; markerEnd?: string; glow?: boolean }) {
  const points = toPoints(pts);
  return (
    <>
      {glow && <polyline points={points} fill="none" stroke={color} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" opacity="0.22" style={{ filter: 'blur(4px)' }} />}
      <polyline points={points} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinejoin="round" strokeLinecap="round" markerEnd={markerEnd} style={{ opacity: 0.95 }} />
    </>
  );
}

/** A linked "?" marker (native SVG tooltip on hover) pointing at a docs page. */
export function HelpDot({ x, y, href, title, label }: { x: number; y: number; href: string; title: string; label: string }) {
  return (
    <a href={href} style={{ cursor: 'pointer' }} aria-label={label}>
      <title>{title}</title>
      <circle cx={x} cy={y} r="9" fill="color-mix(in oklch, var(--color-fd-primary) 22%, transparent)" stroke="var(--color-fd-primary)" strokeWidth="1.4" />
      <text x={x} y={y + 3.4} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize="11.5" fontWeight="700" fill="var(--color-fd-primary)">?</text>
    </a>
  );
}

/** A plain "?" marker with a hover tooltip (no link). Use it for asides. */
export function InfoDot({ x, y, tip }: { x: number; y: number; tip: string }) {
  return (
    <g style={{ cursor: 'help' }} aria-label={tip}>
      <title>{tip}</title>
      <circle cx={x} cy={y} r="9" fill="var(--orbit-surface)" stroke="var(--color-fd-muted-foreground)" strokeWidth="1.4" />
      <text x={x} y={y + 3.4} textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize="11.5" fontWeight="700" fill="var(--color-fd-muted-foreground)">?</text>
    </g>
  );
}
