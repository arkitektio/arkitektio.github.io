'use client';

import { useEffect, useState } from 'react';
import { Camera, Cpu, Network } from 'lucide-react';
import { BentoCard } from './primitives';

// The remote agents a declared dependency could resolve to. The platform load
// balances across matching agents and heals the reservation if one drops. We
// cycle the "bound" highlight to hint at that live resolution.
const agents = [
  { id: 'agent-7f3', host: 'lab-seg-01' },
  { id: 'agent-1a9', host: 'lab-seg-02' },
  { id: 'agent-c20', host: 'lab-seg-03' },
];

export function DeclareCard() {
  const [bound, setBound] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setBound((b) => (b + 1) % agents.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <BentoCard
      href="/docs/developers/python/plugin-usage"
      hrefLabel="Learn about actions"
      className="grid grid-cols-1 gap-6 p-6 sm:col-span-2 sm:p-8 lg:grid-cols-2 lg:items-center"
    >
      {/* copy */}
      <div>
        <span className="font-mono text-[11px] tracking-[0.16em] text-fd-primary">
           WORKFLOWS ARE JUST CODE
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Declare dependencies, resolve them automatically 
        </h2>
        <p className="mt-3 max-w-md text-sm text-fd-muted-foreground">
          Your workflows can depend on outside functions through a simple{' '}
          <code>@declare</code>. Type-hint the protocol and rekuest resolves a
          matching remote agent, injects a proxy, and load balances calls (if you
          are into that) Your action composes a workflow across machines.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-fd-border bg-[#0a0a0c] p-4 font-mono text-[12px] leading-relaxed text-white/80">
          <code>
            <span className="text-[#c792ea]">@declare</span>(app=
            <span className="text-[#c3e88d]">&quot;stardist&quot;</span>){'\n'}
            <span className="text-[#82aaff]">class</span>{' '}
            <span className="text-[#ffcb6b]">Segmentor</span>:{'\n'}
            {'    '}
            <span className="text-[#82aaff]">async def</span>{' '}
            <span className="text-[#ffcb6b]">segment_cells</span>(self, feature_size:{' '}
            <span className="text-[#82aaff]">float</span>){' '}
            <span className="text-[#89ddff]">{'->'}</span>{' '}
            <span className="text-[#82aaff]">Image</span>: ...{'\n'}
            {'\n'}
            <span className="text-[#c792ea]">@register</span>
            {'\n'}
            <span className="text-[#82aaff]">def</span>{' '}
            <span className="text-[#ffcb6b]">double_segment</span>(segmentor:{' '}
            <span className="text-[#82aaff]">Segmentor</span>){' '}
            <span className="text-[#89ddff]">{'->'}</span>{' '}
            <span className="text-[#82aaff]">bytes</span>:{'\n'}
            {'    '}
            <span className="text-[#c792ea]">return</span> segmentor.
            <span className="text-[#ffcb6b]">segment_cells</span>(feature_size=0.5)
          </code>
        </pre>
      </div>

      {/* dependency resolution graph */}
      <div className="rounded-2xl border border-white/10 bg-[#0a0a0c] p-5 shadow-[0_0_80px_-40px_var(--color-fd-primary)]">
        {/* your action */}
        <div className="flex items-center gap-3 rounded-xl border border-fd-primary/40 bg-fd-primary/10 px-3 py-2.5 font-mono text-[12px] text-white/90">
          <Cpu className="size-4 text-fd-primary" />
          double_segment()
          <span className="ml-auto text-[10px] tracking-[0.12em] text-fd-primary">
            YOUR ACTION
          </span>
        </div>

        {/* connector + protocol */}
        <div className="my-1 ml-[1.15rem] h-4 w-px bg-white/15" />
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 font-mono text-[12px] text-white/80">
          <Network className="size-4 text-white/60" />
          @declare Segmentor
          <span className="ml-auto text-[10px] tracking-[0.12em] text-white/45">
            RESOLVING
          </span>
        </div>

        {/* matching agents */}
        <div className="mt-3 flex flex-col gap-2">
          {agents.map((a, i) => {
            const active = i === bound;
            return (
              <div
                key={a.id}
                className={`flex items-center gap-3 rounded-lg border px-3 py-2 font-mono text-[12px] transition-colors ${
                  active
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-white/90'
                    : 'border-fd-border bg-fd-muted/30 text-white/55'
                }`}
              >
                <Camera
                  className={`size-3.5 ${active ? 'text-emerald-400' : 'text-white/40'}`}
                />
                <span>{a.host}</span>
                <span className="text-white/35">#{a.id}</span>
                <span
                  className={`ml-auto size-1.5 rounded-full ${
                    active ? 'animate-pulse bg-emerald-500' : 'bg-white/20'
                  }`}
                />
              </div>
            );
          })}
        </div>

        <p className="mt-3 text-center font-mono text-[10px] tracking-[0.12em] text-white/35">
          LOAD BALANCED · SELF-HEALING
        </p>
      </div>
    </BentoCard>
  );
}
