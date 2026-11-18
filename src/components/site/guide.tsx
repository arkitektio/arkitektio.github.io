'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import {
  GUIDE_STORAGE_KEY,
  GUIDE_STYLE_ID,
  guideCss,
  pickedOptions,
  questionsFor,
  startFor,
  type GuideAnswers,
  type GuideState,
} from '@/lib/guide';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

const GUIDE_EVENT = 'arkitekt:guide';
// The filter as CSS, stored next to the answers so it can be applied before
// paint without the questions (see GuideScript).
const CSS_KEY = `${GUIDE_STORAGE_KEY}-css`;
const EMPTY: GuideState = {};

let cachedRaw: string | null = null;
let cachedState: GuideState = EMPTY;

function readState(): GuideState {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(GUIDE_STORAGE_KEY);
  } catch {
    /* no storage: the guide works for this visit only */
    return cachedState;
  }
  if (raw === cachedRaw) return cachedState;
  cachedRaw = raw;
  try {
    cachedState = raw ? (JSON.parse(raw) as GuideState) : EMPTY;
  } catch {
    cachedState = EMPTY;
  }
  return cachedState;
}

function subscribe(onChange: () => void) {
  document.addEventListener(GUIDE_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    document.removeEventListener(GUIDE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function applyCss(css: string) {
  let style = document.getElementById(GUIDE_STYLE_ID);
  if (!style) {
    style = document.createElement('style');
    style.id = GUIDE_STYLE_ID;
    document.head.appendChild(style);
  }
  if (style.textContent !== css) style.textContent = css;
}

function saveState(state: GuideState) {
  const css = guideCss(state.answers);
  cachedState = state;
  cachedRaw = JSON.stringify(state);
  try {
    localStorage.setItem(GUIDE_STORAGE_KEY, cachedRaw);
    localStorage.setItem(CSS_KEY, css);
  } catch {
    /* ignore */
  }
  applyCss(css);
  document.dispatchEvent(new CustomEvent(GUIDE_EVENT));
}

/** Runs before paint: applies the stored filter, so the sidebar comes up tidy. */
export function GuideScript() {
  const code = `(function(){try{var c=localStorage.getItem(${JSON.stringify(
    CSS_KEY,
  )});if(c){var s=document.createElement('style');s.id=${JSON.stringify(
    GUIDE_STYLE_ID,
  )};s.textContent=c;document.head.appendChild(s)}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

const OPEN_EVENT = 'arkitekt:guide-open';

/** A button on a page that starts the questions of the guide in the corner. */
export function GuideStart() {
  return (
    <button
      type="button"
      onClick={() => document.dispatchEvent(new CustomEvent(OPEN_EVENT))}
      className="not-prose flex items-center gap-2 rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
    >
      Ask me a few questions
      <ArrowRight className="size-4" />
    </button>
  );
}

/**
 * Klippy, the mascot: the Arkitekt logo with googly eyes, the same ones it has in the
 * smart microscopy deck (GooglyLogo in smart-microscopy-defeat-figures.tsx).
 */
function Buddy({ className }: { className?: string }) {
  return (
    <span className={cn('relative block', className)}>
      <Logo className="size-full" />
      <svg viewBox="0 0 190 190" className="absolute inset-0 size-full" aria-hidden>
        {[75, 115].map((x) => (
          <g key={x} className="guide-blink">
            <ellipse cx={x} cy={39} rx={12} ry={14} fill="#fff" stroke="#111" strokeWidth={2.6} />
            <circle cx={x} cy={42} r={6.4} fill="#111" />
            <circle cx={x - 2.4} cy={38} r={2.4} fill="#fff" />
          </g>
        ))}
      </svg>
    </span>
  );
}

type Mode = 'closed' | 'greet' | 'ask' | 'done';

const buttonClass =
  'rounded-md border px-2.5 py-1.5 text-start text-sm transition-colors hover:border-fd-primary hover:bg-fd-accent';
const quietClass = 'text-xs text-fd-muted-foreground underline-offset-4 hover:underline';

/**
 * The first-time guide in the bottom right corner. It greets a new reader,
 * asks the questions of src/lib/guide.ts and hides the parts of the docs their
 * answers make irrelevant. It stays there afterwards, to change the answers or
 * to show everything again.
 */
export function Guide() {
  const state = useSyncExternalStore(subscribe, readState, () => EMPTY);
  const [mode, setMode] = useState<Mode>('closed');
  const [draft, setDraft] = useState<GuideAnswers>({});

  // The filter is recomputed on load: the questions may have changed since the
  // stored one was written.
  useEffect(() => {
    const css = guideCss(state.answers);
    applyCss(css);
    try {
      if (state.answers) localStorage.setItem(CSS_KEY, css);
    } catch {
      /* ignore */
    }
  }, [state]);

  // A reader who never answered and never declined is greeted, a moment after
  // the page is there.
  useEffect(() => {
    const current = readState();
    if (current.answers || current.dismissed) return;
    const timer = setTimeout(() => setMode((now) => (now === 'closed' ? 'greet' : now)), 1200);
    return () => clearTimeout(timer);
  }, []);

  // <GuideStart> on a page starts the questions.
  useEffect(() => {
    const open = () => {
      setDraft({});
      setMode('ask');
    };
    document.addEventListener(OPEN_EVENT, open);
    return () => document.removeEventListener(OPEN_EVENT, open);
  }, []);

  const questions = questionsFor(draft);
  const question = questions.find((q) => !(q.id in draft));
  const answered = questions.filter((q) => q.id in draft);

  const start = () => {
    setDraft({});
    setMode('ask');
  };

  const pick = (id: string, value: string) => {
    const next = { ...draft, [id]: value };
    setDraft(next);
    if (questionsFor(next).every((q) => q.id in next)) {
      saveState({ answers: next });
      setMode('done');
    }
  };

  const back = () => {
    const last = answered.at(-1);
    if (!last) return setMode('greet');
    const next = { ...draft };
    delete next[last.id];
    setDraft(next);
  };

  const showEverything = () => {
    saveState({ dismissed: true });
    setMode('closed');
  };

  const toggle = () => setMode((now) => (now !== 'closed' ? 'closed' : state.answers ? 'done' : 'greet'));

  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2 print:hidden">
      {mode !== 'closed' && (
        <div
          role="dialog"
          aria-label="Klippy, the docs guide"
          className="guide-pop relative w-72 max-w-[calc(100vw-2rem)] rounded-xl border bg-fd-popover p-4 text-fd-popover-foreground shadow-lg"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => (state.answers ? setMode('closed') : showEverything())}
            className="absolute right-2 top-2 rounded-md p-1 text-fd-muted-foreground hover:bg-fd-accent"
          >
            <X className="size-4" />
          </button>

          {mode === 'greet' && (
            <div className="flex flex-col gap-3">
              <p className="pe-6 text-sm font-semibold">
                Hi, I&apos;m Klippy, your AI-less assistant.
              </p>
              <p className="text-sm text-fd-muted-foreground">
                First time here? Answer two or three questions and I will put away the parts of the
                docs you do not need.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={start}
                  className="rounded-md bg-fd-primary px-3 py-1.5 text-sm font-medium text-fd-primary-foreground"
                >
                  Sure
                </button>
                <button type="button" onClick={showEverything} className={quietClass}>
                  No thanks, show me everything
                </button>
              </div>
            </div>
          )}

          {mode === 'ask' && question && (
            <div className="flex flex-col gap-3">
              <p className="pe-6 text-sm font-semibold">{question.text}</p>
              <div className="flex flex-col gap-1.5">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => pick(question.id, option.value)}
                    className={buttonClass}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <button type="button" onClick={back} className={cn(quietClass, 'flex items-center gap-1 self-start')}>
                <ArrowLeft className="size-3" />
                Back
              </button>
            </div>
          )}

          {mode === 'done' && state.answers && (
            <div className="flex flex-col gap-3">
              <p className="pe-6 text-sm font-semibold">These docs are tidied for you</p>
              <ul className="flex flex-col gap-1 text-sm text-fd-muted-foreground">
                {pickedOptions(state.answers).map((option) => (
                  <li key={option.label}>· {option.label}</li>
                ))}
              </ul>
              <Link
                href={startFor(state.answers)}
                onClick={() => setMode('closed')}
                className="flex items-center justify-center gap-1.5 rounded-md bg-fd-primary px-3 py-1.5 text-sm font-medium text-fd-primary-foreground"
              >
                Take me to my start
                <ArrowRight className="size-4" />
              </Link>
              <div className="flex items-center justify-between">
                <button type="button" onClick={start} className={quietClass}>
                  Ask me again
                </button>
                <button type="button" onClick={showEverything} className={quietClass}>
                  Show everything
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={toggle}
        aria-label={state.answers ? 'Klippy: change what is shown' : 'Klippy: first time here?'}
        aria-expanded={mode !== 'closed'}
        className="guide-bob relative size-16 transition-transform hover:scale-105"
      >
        <Buddy className="size-full drop-shadow-md" />
        {state.answers && (
          <span className="absolute right-0 top-1 size-3 rounded-full border-2 border-fd-background bg-fd-primary" />
        )}
      </button>
    </div>
  );
}
