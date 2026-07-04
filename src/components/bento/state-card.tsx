'use client';

import { useEffect, useState } from 'react';
import { Bot, Radio } from 'lucide-react';
import { BentoCard } from './primitives';
import { RobotStateScene } from '@/components/marketing';

// A fake observable robot state. Each tick the agent mutates it and the change
// is "published" live. This stands in for the real @state instance a dashboard
// would watch over the platform at `publish_interval`.
const POSES = ['idle', 'reaching', 'gripping', 'lifting', 'placing'] as const;

export function StateCard() {
  const [count, setCount] = useState(0);
  const [battery, setBattery] = useState(96);
  const [pose, setPose] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
      setBattery((b) => (b <= 12 ? 96 : b - 4));
      setPose((p) => (p + 1) % POSES.length);
      // flash the "published" indicator on every mutation
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 380);
      return () => clearTimeout(t);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <BentoCard
      href="/docs/developers/python/plugin/more"
      hrefLabel="Learn about state"
      className="grid grid-cols-1 gap-6 p-6 sm:col-span-2 sm:p-8 lg:grid-cols-2 lg:items-center"
    >
      {/* copy */}
      <div>
        <span className="font-mono text-[11px] tracking-[0.16em] text-fd-primary">
          OBSERVABLE STATE
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          State that updates, live.
        </h2>
        <p className="mt-3 max-w-md text-sm text-fd-muted-foreground">
          Declare an <code>@state</code> dataclass and any action can read or
          mutate it just by type-hinting it. Every change is published to the
          platform automatically. Dashboards and other apps watch your
          robot in real time.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-fd-border bg-[#0a0a0c] p-4 font-mono text-[12px] leading-relaxed text-white/80">
          <code>
            <span className="text-[#c792ea]">@state</span>
            {'\n'}
            <span className="text-[#c792ea]">@dataclass</span>
            {'\n'}
            <span className="text-[#82aaff]">class</span>{' '}
            <span className="text-[#ffcb6b]">RobotState</span>:{'\n'}
            {'    '}pose: <span className="text-[#82aaff]">str</span>{' '}
            <span className="text-[#89ddff]">=</span>{' '}
            <span className="text-[#c3e88d]">&quot;idle&quot;</span>
            {'\n'}
            {'    '}picks: <span className="text-[#82aaff]">int</span>{' '}
            <span className="text-[#89ddff]">=</span> 0{'\n'}
            {'\n'}
            <span className="text-[#c792ea]">@register</span>
            {'\n'}
            <span className="text-[#82aaff]">def</span>{' '}
            <span className="text-[#ffcb6b]">pick</span>(robot:{' '}
            <span className="text-[#82aaff]">RobotState</span>){' '}
            <span className="text-[#89ddff]">{'->'}</span>{' '}
            <span className="text-[#82aaff]">int</span>:{'\n'}
            {'    '}robot.picks{' '}
            <span className="text-[#89ddff]">+=</span> 1{'  '}
            <span className="text-[#546e7a]"># published automatically</span>
            {'\n'}
            {'    '}
            <span className="text-[#c792ea]">return</span> robot.picks
          </code>
        </pre>
      </div>

      {/* live state. The Fairino arm in 3D, with its observable state read out
          on top: each command landing on the arm mutates the state below. */}
      <div className="relative z-10 min-h-[20rem] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c] shadow-[0_0_80px_-40px_var(--color-fd-primary)] lg:min-h-[24rem]">
        {/* brand glow behind the scene */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-1/3 h-56 w-56 rounded-full bg-primary/20 blur-[110px]" />
          <div className="absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-primary/10 blur-[100px]" />
        </div>

        {/* the Fairino FR5 model */}
        <RobotStateScene />

        {/* state overlay */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 font-mono text-[12px] text-white/85 backdrop-blur">
              <Bot className="size-4 text-fd-primary" />
              RobotState
            </div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] backdrop-blur transition-colors ${
                pulse
                  ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-400'
                  : 'border-white/10 bg-black/40 text-white/55'
              }`}
            >
              <Radio className={`size-3 ${pulse ? 'animate-pulse' : ''}`} />
              published
            </span>
          </div>

          {/* live values */}
          <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-black/45 p-3 font-mono text-[12px] backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-white/55">pose</span>
              <span className="rounded-md border border-fd-primary/40 bg-fd-primary/10 px-2 py-0.5 text-fd-primary">
                {POSES[pose]}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/55">picks</span>
              <span
                key={count}
                className="animate-pop-in font-semibold text-white/90"
              >
                {count}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-white/55">
              <span>battery</span>
              <span className="text-white/45">{battery}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full transition-[width] duration-500 ease-out ${
                  battery <= 20 ? 'bg-amber-500' : 'bg-fd-primary'
                }`}
                style={{ width: `${battery}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
