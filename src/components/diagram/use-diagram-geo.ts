'use client';

/* The measurement plumbing the diagrams kept re-rolling: a ResizeObserver bound
   to a wrapper, plus (for the flex-reflow figures) conversion of each child
   card/box rect into wrapper-local coordinates. Two flavours:

   • useMeasuredAnchors: for figures whose layout reflows (flexbox) and whose
     wires are routed from *measured* node positions (deployment-strategies).
   • useScaledViewport / useContainerWidth: for figures authored at a fixed
     BASE_W and CSS-scaled to fit (provenance-flow, ecosystem-orbit). */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Anchor, Box } from './geometry';

/** Observe a wrapper's content width. SSR-safe (returns 0 until first measure). */
export function useContainerWidth<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return { ref, width };
}

/** Author at `baseW`, CSS-scale to the container. `compact` mirrors the figures'
    `scale < 0.5` gate for hiding labels at small sizes. */
export function useScaledViewport(baseW: number, fallback = 0.6) {
  const { ref: wrapRef, width: cw } = useContainerWidth<HTMLDivElement>();
  const scale = cw > 0 ? cw / baseW : fallback;
  return { wrapRef, cw, scale, compact: scale < 0.5 };
}

export type MeasuredGeo = { anchors: Record<string, Anchor>; boxes: Record<string, Box>; W: number; H: number };

/** Measure node cards (and optional enclosure boxes) into wrapper-local
    coordinates, recomputing on resize. Returns `null` until the first layout
    pass, so callers gate rendering of the wire overlay on `geo`. */
export function useMeasuredAnchors(opts: { boxes?: string[] } = {}) {
  const boxIds = opts.boxes ?? [];
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeEls = useRef<Map<string, HTMLElement>>(new Map());
  const boxEls = useRef<Map<string, HTMLElement>>(new Map());
  const [geo, setGeo] = useState<MeasuredGeo | null>(null);

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const w = wrap.getBoundingClientRect();
    const anchors: Record<string, Anchor> = {};
    for (const [id, el] of nodeEls.current) {
      const r = el.getBoundingClientRect();
      anchors[id] = {
        cx: r.left - w.left + r.width / 2,
        cy: r.top - w.top + r.height / 2,
        top: r.top - w.top,
        bottom: r.bottom - w.top,
        left: r.left - w.left,
        right: r.right - w.left,
      };
    }
    const boxes: Record<string, Box> = {};
    for (const id of boxIds) {
      const el = boxEls.current.get(id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      boxes[id] = { x: r.left - w.left, y: r.top - w.top, w: el.offsetWidth, h: el.offsetHeight };
    }
    setGeo({ anchors, boxes, W: w.width, H: w.height });
    // boxIds is stable per render (spread from opts); intentionally not a dep to avoid identity churn
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxIds.join(',')]);

  useLayoutEffect(() => {
    measure();
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [measure]);

  const registerNode = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) nodeEls.current.set(id, el);
      else nodeEls.current.delete(id);
    },
    [],
  );
  const registerBox = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) boxEls.current.set(id, el);
      else boxEls.current.delete(id);
    },
    [],
  );

  return { wrapRef, registerNode, registerBox, geo, remeasure: measure };
}
