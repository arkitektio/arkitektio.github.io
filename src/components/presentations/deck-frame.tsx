'use client';

/* Chrome around an embedded reveal.js deck: a 16:9 card that matches the site
   surfaces, a fullscreen toggle, and the keyboard hints. The deck itself (and
   its reveal.js config) lives in `reveal-deck.tsx`. */

import { useCallback, useRef, useSyncExternalStore } from 'react';
import type { ReactNode } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import type { RevealApi } from 'reveal.js';
import { cn } from '@/lib/cn';
import RevealDeck from './reveal-deck';

/** `document.fullscreenEnabled` never changes, so there is nothing to subscribe to. */
const noSubscribe = () => () => {};

const hints: [string, string][] = [
  ['← →', 'navigate'],
  ['Esc', 'overview'],
  ['?', 'shortcuts'],
];

export function DeckFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);

  const supported = useSyncExternalStore(
    noSubscribe,
    () => document.fullscreenEnabled,
    () => false,
  );

  const fullscreen = useSyncExternalStore(
    useCallback((onStoreChange: () => void) => {
      const onChange = () => {
        // Reveal only re-measures on its own resize tick; entering fullscreen
        // resizes the frame a beat earlier than that.
        requestAnimationFrame(() => deckRef.current?.layout());
        onStoreChange();
      };
      document.addEventListener('fullscreenchange', onChange);
      return () => document.removeEventListener('fullscreenchange', onChange);
    }, []),
    () => document.fullscreenElement !== null,
    () => false,
  );

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void frameRef.current?.requestFullscreen();
  }, []);

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div
        ref={frameRef}
        className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-fd-border bg-fd-card/60 backdrop-blur [&:fullscreen]:aspect-auto [&:fullscreen]:size-full [&:fullscreen]:rounded-none [&:fullscreen]:border-0 [&:fullscreen]:bg-fd-background"
      >
        <RevealDeck deckRef={deckRef}>{children}</RevealDeck>

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? 'Exit fullscreen' : 'Present fullscreen'}
          className={cn(
            'absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-fd-border bg-fd-card/80 px-2.5 py-1.5 text-xs font-medium text-fd-muted-foreground opacity-0 backdrop-blur transition hover:border-fd-primary/50 hover:text-fd-primary focus-visible:opacity-100 group-hover:opacity-100',
            !supported && 'hidden',
          )}
        >
          {fullscreen ? (
            <Minimize className="size-3.5" />
          ) : (
            <Maximize className="size-3.5" />
          )}
          {fullscreen ? 'Exit' : 'Present'}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fd-muted-foreground">
        <span>Click the deck first, then</span>
        {hints.map(([key, label]) => (
          <span key={key} className="inline-flex items-center gap-1.5">
            <kbd className="rounded border border-fd-border bg-fd-muted px-1.5 py-0.5 font-mono text-[10px] text-fd-foreground">
              {key}
            </kbd>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
