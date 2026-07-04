/* Shared, pure geometry for the docs/marketing diagrams. No React, no DOM.
   Just the math the figures kept re-deriving: trig, donut wedges, orthogonal
   "elbow" wire routing into horizontal lanes, and firewall-crossing detection.
   Keep this file pure and parameterized: per-diagram routing *decisions* (which
   edge takes which route) stay in the diagram; only the maths live here. */

export type Pt = { x: number; y: number };

/** A measured node card, in coordinates local to the diagram wrapper. */
export type Anchor = { cx: number; cy: number; top: number; bottom: number; left: number; right: number };

/** A measured enclosure box, in coordinates local to the diagram wrapper. */
export type Box = { x: number; y: number; w: number; h: number };

export const rad = (deg: number) => (deg * Math.PI) / 180;
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** A point on a circle of radius `r` around (cx, cy), `deg` clockwise from 12 o'clock. */
export const ptOn = (cx: number, cy: number, r: number, deg: number): Pt => ({
  x: cx + r * Math.sin(rad(deg)),
  y: cy - r * Math.cos(rad(deg)),
});

/** SVG path for a donut segment (annular wedge) between angles a0→a1, radii ri→ro. */
export function wedgePath(cx: number, cy: number, ri: number, ro: number, a0: number, a1: number) {
  const large = a1 - a0 > 180 ? 1 : 0;
  const o0 = ptOn(cx, cy, ro, a0), o1 = ptOn(cx, cy, ro, a1), i1 = ptOn(cx, cy, ri, a1), i0 = ptOn(cx, cy, ri, a0);
  return [`M${o0.x} ${o0.y}`, `A${ro} ${ro} 0 ${large} 1 ${o1.x} ${o1.y}`, `L${i1.x} ${i1.y}`, `A${ri} ${ri} 0 ${large} 0 ${i0.x} ${i0.y}`, 'Z'].join(' ');
}

/** The y of the i-th horizontal routing lane, spread evenly between fromY→toY. */
export const laneY = (i: number, count: number, fromY: number, toY: number) => lerp(fromY, toY, (i + 1) / (count + 1));

/** An orthogonal elbow: from `from`, up/down to the shared channel `atY`, across, then to `to`. */
export const elbow = (from: Pt, to: Pt, atY: number): Pt[] => [from, { x: from.x, y: atY }, { x: to.x, y: atY }, to];

/** The points where a polyline crosses the horizontal line y = `y` (e.g. the firewall). */
export function crossings(pts: Pt[], y: number): Pt[] {
  const out: Pt[] = [];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    if ((a.y - y) * (b.y - y) < 0) out.push({ x: a.x + (b.x - a.x) * ((y - a.y) / (b.y - a.y)), y });
  }
  return out;
}

/** Serialize points for an SVG `points="…"` attribute. */
export const toPoints = (pts: Pt[]) => pts.map((p) => `${p.x},${p.y}`).join(' ');
