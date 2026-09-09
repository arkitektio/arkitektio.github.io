'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the element first scrolls into view. Used to drive the
 * sequenced (staggered) card reveals on the home page. Pair the returned
 * `inView` flag with a per-item `transitionDelay` to play cards in order.
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Tailwind classes for an item that rises + fades in once `inView` flips. */
export function revealClass(inView: boolean) {
  return [
    'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0',
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
  ].join(' ');
}
