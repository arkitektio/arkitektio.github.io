'use client';

import { useEffect, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { BentoCard } from './primitives';

// How many planes the fake action streams, and the hues its yielded "images"
// cycle through so each tile reads as a different microscopy plane.
const PLANES = 5;
const hues = [195, 268, 90, 350, 150];

// Deterministic per-tile pseudo-random so the texture is stable across renders
// (no hydration mismatch) while every plane looks different.
function rand(i: number, n: number) {
  const x = Math.sin((i + 1) * 127.1 + n * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// Build a noisy "microscopy plane": a scatter of fluorescent puncta over a dark
// background. A fractal-noise overlay (.bg-grain) is layered on top in the JSX.
function tileStyle(i: number) {
  const hue = hues[i % hues.length];
  const puncta = Array.from({ length: 9 }, (_, k) => {
    const x = Math.round(rand(i, k) * 100);
    const y = Math.round(rand(i, k + 30) * 100);
    const r = 5 + Math.round(rand(i, k + 60) * 11);
    const l = (0.72 + rand(i, k + 90) * 0.16).toFixed(2);
    return `radial-gradient(circle at ${x}% ${y}%, oklch(${l} 0.18 ${hue}) 0%, transparent ${r}%)`;
  });
  return {
    backgroundColor: '#08080c',
    backgroundImage: [
      ...puncta,
      // faint hue wash + vignette so the plane has depth
      `radial-gradient(circle at 50% 45%, oklch(0.32 0.08 ${hue}) 0%, #08080c 80%)`,
      'radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)',
    ].join(', '),
  };
}

export function AsyncApiCard() {
  const [pct, setPct] = useState(0);
  const [tiles, setTiles] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [mode, setMode] = useState<'async' | 'sync'>('async');
  const [resetKey, setResetKey] = useState(0);

  // Auto-toggle between the async and sync flavours of the action; a manual
  // click also flips it and restarts the timer via resetKey.
  useEffect(() => {
    const id = setInterval(
      () => setMode((m) => (m === 'async' ? 'sync' : 'async')),
      5200,
    );
    return () => clearInterval(id);
  }, [resetKey]);

  const choose = (m: 'async' | 'sync') => {
    setMode(m);
    setResetKey((k) => k + 1);
  };

  // Loop a fake streaming action: each step reports progress(i*10) and yields
  // one image, which pops into the panel on the right.
  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      setPct(i * 10);
      setTiles((t) => [...t, i]);
      i += 1;

      if (i >= PLANES) {
        setPct(100);
        setDone(true);
        timer = setTimeout(() => {
          setDone(false);
          setPct(0);
          setTiles([]);
          i = 0;
          timer = setTimeout(tick, 700);
        }, 1900);
        return;
      }
      timer = setTimeout(tick, 420);
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BentoCard
      href="/docs/developers/python/plugin/usage"
      hrefLabel="Learn about actions"
      className="grid grid-cols-1 gap-6 p-6 sm:col-span-2 sm:p-8 lg:grid-cols-2 lg:items-center"
    >
      {/* copy */}
      <div>
        <span className="font-mono text-[11px] tracking-[0.16em] text-fd-primary">
          (ASYNC) API
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Control everything, freely.
        </h2>
        <p className="mt-3 max-w-md text-sm text-fd-muted-foreground">
          Every action is just a function, sync or async. Call{' '}
          <code>progress()</code> to report how far along you are, and{' '}
          <code>yield</code> results as they are produced. The platform streams
          them straight to the caller.
        </p>

        {/* async / sync toggle */}
        <div className="relative z-10 mt-5 inline-flex rounded-lg border border-fd-border bg-[#0a0a0c] p-1 font-mono text-[12px]">
          {(['async', 'sync'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => choose(m)}
              aria-pressed={mode === m}
              className={`rounded-md px-3 py-1 transition-colors ${
                mode === m
                  ? 'bg-fd-primary text-fd-primary-foreground'
                  : 'text-white/55 hover:text-white/80'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <pre className="mt-3 overflow-x-auto rounded-xl border border-fd-border bg-[#0a0a0c] p-4 font-mono text-[12px] leading-relaxed text-white/80">
          <code>
            <span className="text-[#c792ea]">@register</span>
            {'\n'}
            <span className="text-[#82aaff]">
              {mode === 'async' ? 'async def' : 'def'}
            </span>{' '}
            <span className="text-[#ffcb6b]">process</span>(stack:{' '}
            <span className="text-[#82aaff]">Image</span>){' '}
            <span className="text-[#89ddff]">{'->'}</span>{' '}
            <span className="text-[#82aaff]">Image</span>:{'\n'}
            {'    '}
            <span className="text-[#c3e88d]">
              &quot;&quot;&quot;Segment every plane and stream the masks.&quot;&quot;&quot;
            </span>
            {'\n'}
            {'    '}
            <span className="text-[#82aaff]">for</span> i, plane{' '}
            <span className="text-[#82aaff]">in enumerate</span>(stack):{'\n'}
            {'        '}
            <span className="text-[#ffcb6b]">progress</span>(i{' '}
            <span className="text-[#89ddff]">*</span> 10){'\n'}
            {'        '}
            <span className="text-[#c792ea]">yield</span>{' '}
            <span className="text-[#ffcb6b]">from_array_like</span>(
            <span className="text-[#ffcb6b]">segment</span>(plane))
          </code>
        </pre>
      </div>

      {/* live task widget */}
      <div className="rounded-2xl border border-white/10 bg-[#0a0a0c] p-5 shadow-[0_0_80px_-40px_var(--color-fd-primary)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-[13px] text-white/85">
            <span className="size-2 rounded-full bg-fd-primary" />
            process(stack)
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${
              done
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                : 'border-white/10 bg-white/5 text-white/70'
            }`}
          >
            {done ? (
              <>
                <Check className="size-3" /> done
              </>
            ) : (
              <>
                <Loader2 className="size-3 animate-spin" /> running
              </>
            )}
          </span>
        </div>

        {/* progress() */}
        <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-white/55">
          <span>
            <span className="text-fd-primary">progress</span>({pct})
          </span>
          <span className="text-white/45">{pct}%</span>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full transition-[width] duration-300 ease-out ${
              done ? 'bg-emerald-500' : 'bg-fd-primary'
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* yielded images */}
        <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-white/55">
          <span>
            <span className="text-fd-primary">yield</span> from_array_like
          </span>
          <span className="text-white/45">{tiles.length} images</span>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-2">
          {tiles.map((i) => (
            <div
              key={i}
              className="animate-pop-in relative aspect-square overflow-hidden rounded-md border border-white/10"
              style={tileStyle(i)}
            >
              {/* fractal-noise overlay so the plane reads as a real, grainy image */}
              <div className="bg-grain pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
