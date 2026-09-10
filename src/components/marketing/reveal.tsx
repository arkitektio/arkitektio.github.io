'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is in the viewport. By default it fires once
 * (the first time the element scrolls into view) and then stops observing,
 * which is what the sequenced (staggered) card reveals on the home page want.
 * Pass `once: false` to keep following the element in and out, e.g. to pause
 * a video while it is off-screen. `rootMargin` grows the viewport so work can
 * start shortly before the element is actually visible.
 */
export function useInView<T extends HTMLElement>(
  threshold = 0.2,
  { once = true, rootMargin = '0px' }: { once?: boolean; rootMargin?: string } = {},
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, inView };
}

/** Tailwind classes for an item that rises + fades in once `inView` flips. */
export function revealClass(inView: boolean) {
  return [
    'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0',
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
  ].join(' ');
}
