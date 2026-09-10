'use client';

import { useEffect, useState } from 'react';
import { Camera, LayoutPanelTop, MousePointerClick } from 'lucide-react';
import { BentoCard } from './primitives';

// The component catalog a blok draws from. The platform ships these and you
// compose them in JSX. Props are either static, a $state binding, or an
// @action callback.
const CATALOG = ['Page', 'Label', 'Text', 'Button', 'Stack', 'Image'];

export function BlokCard() {
  const [connected, setConnected] = useState(true);
  const [snaps, setSnaps] = useState(0);
  const [flash, setFlash] = useState(false);

  // The bound state ($state.camera.connected) flips on its own, as if the
  // remote camera agent connected and disconnected over the platform.
  useEffect(() => {
    const id = setInterval(() => setConnected((c) => !c), 3600);
    return () => clearInterval(id);
  }, []);

  // The Button's onClick="@camera.snap(...)" callback.
  const snap = () => {
    setSnaps((s) => s + 1);
    setFlash(true);
    setTimeout(() => setFlash(false), 220);
  };

  return (
    <BentoCard
      href="/docs/developers/python/bloks"
      hrefLabel="Learn about bloks"
      className="grid grid-cols-1 gap-6 p-6 sm:col-span-2 sm:p-8 lg:grid-cols-2 lg:items-center"
    >
      {/* copy + source */}
      <div>
        <span className="font-mono text-[11px] tracking-[0.16em] text-fd-primary">
          BLOKS
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Dashboards, declared in JSX.
        </h2>
        <p className="mt-3 max-w-md text-sm text-fd-muted-foreground">
          Compose a panel from the component <strong>catalog</strong> and wire
          it straight to your app: bind props to a dependency&apos;s state with{' '}
          <code>$state</code>, and call its actions with <code>@</code>.{' '}
          <code>jsx(...)</code> parses it into a component tree.
        </p>

        {/* component catalog */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {CATALOG.map((c) => (
            <span
              key={c}
              className="rounded-md border border-fd-border bg-fd-muted/40 px-2 py-0.5 font-mono text-[11px] text-white/70"
            >
              {c}
            </span>
          ))}
        </div>

        <pre className="mt-4 overflow-x-auto rounded-xl border border-fd-border bg-[#0a0a0c] p-4 font-mono text-[12px] leading-relaxed text-white/80">
          <code>
            <span className="text-[#546e7a]">{'<'}</span>
            <span className="text-[#ffcb6b]">Page</span>
            <span className="text-[#546e7a]">{'>'}</span>
            {'\n'}
            {'  '}
            <span className="text-[#546e7a]">{'<'}</span>
            <span className="text-[#ffcb6b]">Label</span>{' '}
            <span className="text-[#c792ea]">text</span>=
            <span className="text-[#c3e88d]">&quot;Camera&quot;</span>{' '}
            <span className="text-[#546e7a]">/{'>'}</span>
            {'\n'}
            {'  '}
            <span className="text-[#546e7a]">{'<'}</span>
            <span className="text-[#ffcb6b]">Text</span>{' '}
            <span className="text-[#c792ea]">value</span>=
            <span className="text-[#c3e88d]">
              &quot;$state.camera.connected&quot;
            </span>{' '}
            <span className="text-[#546e7a]">/{'>'}</span>
            {'\n'}
            {'  '}
            <span className="text-[#546e7a]">{'<'}</span>
            <span className="text-[#ffcb6b]">Button</span>{' '}
            <span className="text-[#c792ea]">title</span>=
            <span className="text-[#c3e88d]">&quot;Snap&quot;</span>
            {'\n'}
            {'    '}
            <span className="text-[#c792ea]">onClick</span>=
            <span className="text-[#c3e88d]">&quot;@camera.snap(exposure_ms=10)&quot;</span>{' '}
            <span className="text-[#546e7a]">/{'>'}</span>
            {'\n'}
            <span className="text-[#546e7a]">{'</'}</span>
            <span className="text-[#ffcb6b]">Page</span>
            <span className="text-[#546e7a]">{'>'}</span>
          </code>
        </pre>
      </div>

      {/* rendered blok preview */}
      <div className="rounded-2xl border border-white/10 bg-[#0a0a0c] p-5 shadow-[0_0_80px_-40px_var(--color-fd-primary)]">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-white/45">
          <LayoutPanelTop className="size-3.5" />
          RENDERED BLOK
        </div>

        {/* <Page> */}
        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          {/* <Label text="Camera" /> */}
          <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
            <Camera className="size-4 text-fd-primary" />
            Camera
          </div>

          {/* <Text value="$state.camera.connected" /> */}
          <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-[12px]">
            <span className="text-white/45">$state.camera.connected</span>
            <span
              className={`inline-flex items-center gap-1.5 ${
                connected ? 'text-emerald-400' : 'text-white/40'
              }`}
            >
              <span
                className={`size-1.5 rounded-full ${
                  connected ? 'animate-pulse bg-emerald-500' : 'bg-white/30'
                }`}
              />
              {connected ? 'true' : 'false'}
            </span>
          </div>

          {/* <Button title="Snap" onClick="@camera.snap(...)" /> */}
          <button
            type="button"
            onClick={snap}
            disabled={!connected}
            className={`relative z-10 mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
              connected
                ? 'bg-fd-primary text-fd-primary-foreground hover:opacity-90'
                : 'cursor-not-allowed bg-white/5 text-white/30'
            } ${flash ? 'scale-[0.97]' : ''}`}
          >
            <MousePointerClick className="size-4" />
            Snap
          </button>

          {/* feedback from the action callback */}
          <p className="mt-3 text-center font-mono text-[11px] text-white/45">
            @camera.snap → {snaps} {snaps === 1 ? 'frame' : 'frames'} captured
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
