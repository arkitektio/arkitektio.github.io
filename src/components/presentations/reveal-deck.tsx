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

const config: RevealConfig = {
  width: DECK_WIDTH,
  height: DECK_HEIGHT,
  margin: 0.03,
  // Embedded decks share the page with the site nav, so reveal must not grab
  // the arrow keys until the deck is actually focused, and must not rewrite
  // the URL hash out from under the Next router.
  embedded: true,
  keyboardCondition: 'focused',
  hash: false,
  respondToHashChanges: true,
  fragmentInURL: false,
  controls: true,
  controlsLayout: 'bottom-right',
  controlsTutorial: false,
  progress: true,
  slideNumber: 'c/t',
  transition: 'slide',
  transitionSpeed: 'fast',
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
