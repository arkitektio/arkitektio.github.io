'use client';

import { useEffect, useState } from 'react';
import { Check, Palette, Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'arkitekt-brand-hue';

/** A few curated hues users can pick from with one click. */
const PRESETS = [267, 222, 200, 160, 130, 90, 40, 12, 330, 300];

function swatch(hue: number) {
  return `oklch(0.62 0.19 ${hue})`;
}

/** Fired on `document` whenever the hue is applied, so open controls can
    mirror a change they did not make (e.g. a clip tinting the page). */
export const BRAND_HUE_EVENT = 'arkitekt:brand-hue';

function applyHue(hue: number) {
  document.documentElement.style.setProperty('--brand-hue', String(hue));
  document.dispatchEvent(new CustomEvent(BRAND_HUE_EVENT, { detail: hue }));
}

/** Whether the visitor saved a hue: a saved hue is a choice, and nothing on the
    page should override it. */
export function hasSavedBrandHue() {
  try {
    return localStorage.getItem(STORAGE_KEY) != null;
  } catch {
    return false;
  }
}

/**
 * Tint the site to a hue derived from content (the hero clip's poster, the
 * way orkestrator-next tints itself after the open scene). Skipped when the
 * visitor has saved a hue of their own.
 */
export function applyBrandHueFromContent(hue: number) {
  if (hasSavedBrandHue()) return;
  applyHue(Math.round(hue));
}

/**
 * Runs before paint: applies a saved brand hue if the visitor picked one,
 * otherwise a fresh random hue for this page load. Rendered high in <body> so
 * the variable is set before the rest of the tree styles itself.
 */
export function BrandColorScript() {
  const code = `(function(){try{var k=${JSON.stringify(
    STORAGE_KEY,
  )};var s=localStorage.getItem(k);var h=s!=null?parseFloat(s):Math.floor(Math.random()*360);document.documentElement.style.setProperty('--brand-hue',h);}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

/**
 * The brand-hue controls (label, slider, swatches, save/random) without any
 * surrounding popover chrome. Drop it into whatever container you like. Reports
 * the live hue via `onHueChange` so a trigger can mirror the current colour.
 */
export function BrandColorControls({
  onHueChange,
}: {
  onHueChange?: (hue: number) => void;
}) {
  const [hue, setHueState] = useState(267);
  const [saved, setSaved] = useState(false);

  function setHue(next: number) {
    setHueState(next);
    onHueChange?.(next);
  }

  // Sync from whatever the early script already applied, and follow any
  // later content-derived tint.
  useEffect(() => {
    const current = getComputedStyle(document.documentElement).getPropertyValue(
      '--brand-hue',
    );
    const parsed = parseFloat(current);
    if (!Number.isNaN(parsed)) setHue(Math.round(parsed));
    try {
      setSaved(localStorage.getItem(STORAGE_KEY) != null);
    } catch {
      /* ignore */
    }
    const onHue = (event: Event) => {
      const next = (event as CustomEvent<number>).detail;
      if (typeof next === 'number') setHue(next);
    };
    document.addEventListener(BRAND_HUE_EVENT, onHue);
    return () => document.removeEventListener(BRAND_HUE_EVENT, onHue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function preview(next: number) {
    setHue(next);
    applyHue(next);
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, String(hue));
    } catch {
      /* ignore */
    }
    setSaved(true);
  }

  function shuffle() {
    const next = Math.floor(Math.random() * 360);
    preview(next);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setSaved(false);
  }

  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-medium">
        <Palette className="size-4 text-fd-primary" />
        Brand color
      </div>
      <p className="mt-1 text-xs text-fd-muted-foreground">
        A new hue is picked on every visit. Found one you like? Save it.
      </p>

      <input
        type="range"
        min={0}
        max={359}
        value={hue}
        onChange={(e) => preview(Number(e.target.value))}
        aria-label="Hue"
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full"
        style={{
          background:
            'linear-gradient(to right, oklch(0.62 0.19 0), oklch(0.62 0.19 60), oklch(0.62 0.19 120), oklch(0.62 0.19 180), oklch(0.62 0.19 240), oklch(0.62 0.19 300), oklch(0.62 0.19 360))',
        }}
      />

      <div className="mt-3 flex flex-wrap gap-1.5">
        {PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => preview(preset)}
            aria-label={`Hue ${preset}`}
            className={cn(
              'size-6 rounded-full ring-1 ring-inset ring-black/10 transition-transform hover:scale-110',
              Math.abs(hue - preset) < 6 && 'ring-2 ring-fd-foreground',
            )}
            style={{ background: swatch(preset) }}
          />
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={save}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-fd-primary px-3 py-1.5 text-xs font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
        >
          {saved ? <Check className="size-3.5" /> : null}
          {saved ? 'Saved' : 'Save'}
        </button>
        <button
          type="button"
          onClick={shuffle}
          className="inline-flex items-center justify-center gap-1.5 rounded-md border border-fd-border px-3 py-1.5 text-xs font-medium text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <Shuffle className="size-3.5" />
          Random
        </button>
      </div>
    </div>
  );
}

export function BrandColorPicker() {
  const [hue, setHue] = useState(267);

  return (
    <details className="group relative [&_summary::-webkit-details-marker]:hidden">
      <summary
        aria-label="Brand color"
        className="flex size-9 cursor-pointer list-none items-center justify-center rounded-full text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
      >
        <span
          className="size-4 rounded-full ring-1 ring-inset ring-black/10"
          style={{ background: swatch(hue) }}
        />
      </summary>

      <div className="absolute right-0 z-50 mt-2 w-64 rounded-xl border border-fd-border bg-fd-popover p-4 text-fd-popover-foreground shadow-xl">
        <BrandColorControls onHueChange={setHue} />
      </div>
    </details>
  );
}
