'use client';

/* The reveal.js deck itself, plus the shared config every Arkitekt deck runs
   with. Split out from `deck-frame.tsx` so the frame chrome stays readable. */

import type { ReactNode, RefObject } from 'react';
import { Deck } from '@revealjs/react';
import type { RevealApi, RevealConfig } from 'reveal.js';

import 'reveal.js/reveal.css';
import './reveal-theme.css';

/* Slides are authored against this canvas; reveal scales it to fit the frame,
   so a `text-[20px]` in a slide always keeps the same relative size. */
export const DECK_WIDTH = 1280;
export const DECK_HEIGHT = 720;
/* The breathing room around the canvas while the deck is embedded in a page.
   Fullscreen drops it (see `deck-frame.tsx`). */
export const DECK_MARGIN = 0.03;

const config: RevealConfig = {
  width: DECK_WIDTH,
  height: DECK_HEIGHT,
  margin: DECK_MARGIN,
  // Embedded decks share the page with the site nav, so reveal must not grab
  // the arrow keys until the deck is actually focused.
  embedded: true,
  keyboardCondition: 'focused',
  // Keep the current slide (and fragment step) in the URL hash, so a reload
  // or a shared link lands on the same slide. Reveal writes it with
  // history.replaceState, which leaves the Next router alone.
  hash: true,
  respondToHashChanges: true,
  fragmentInURL: true,
  controls: true,
  controlsLayout: 'bottom-right',
  controlsTutorial: false,
  progress: true,
  slideNumber: 'c/t',
  transition: 'slide',
  transitionSpeed: 'fast',
  // Render fewer slides around the current one (the default is 3 each way):
  // the decks are heavy with figures, and only the slide on screen animates.
  viewDistance: 2,
  mobileViewDistance: 1,
  backgroundTransition: 'fade',
};

export default function RevealDeck({
  children,
  deckRef,
}: {
  children: ReactNode;
  deckRef: RefObject<RevealApi | null>;
}) {
  return (
    <Deck config={config} deckRef={deckRef} className="size-full">
      {children}
    </Deck>
  );
}
