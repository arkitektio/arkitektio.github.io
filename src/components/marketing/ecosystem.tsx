'use client';

import {
  ArrowRight,
  BarChart3,
  Camera,
  Cpu,
  Database,
  Eye,
  Microscope,
  Workflow,
} from 'lucide-react';
import { useInView, revealClass } from './reveal';

/* ─────────────────────────── data ─────────────────────────── */

// Each pipeline stage carries its own hue (oklch) so the diagram keeps the
// distinctive multi-colour palette of the ecosystem poster.
const stages = [
  {
    n: '01',
    title: 'Acquire',
    icon: Camera,
    blurb: 'Capture images straight from the microscope.',
    hue: 195,
  },
  {
    n: '02',
    title: 'Process',
    icon: Workflow,
    blurb: 'Deconvolve, segment & clean the raw data.',
    hue: 268,
  },
  {
    n: '03',
    title: 'Analyze',
    icon: BarChart3,
    blurb: 'Run AI models & quantify what you found.',
    hue: 90,
  },
  {
    n: '04',
    title: 'Visualize',
    icon: Eye,
    blurb: 'Explore results & validate live.',
    hue: 350,
  },
];

const edge = [
  { label: 'Microscopes', icon: Microscope },
  { label: 'Cameras', icon: Camera },
  { label: 'GPU', icon: Cpu },
  { label: 'Storage', icon: Database },
];

/* ─────────────────────────── view ─────────────────────────── */

export function Ecosystem() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  // Reveal the closed-loop line right after the "Analyze" stage, before the
  // last stage finishes animating in.
  const analyzeIndex = stages.findIndex((s) => s.title === 'Analyze');

  return (
    <section className="w-full pb-16">
      <div
        ref={ref}
        className="relative isolate overflow-hidden rounded-3xl px-6 py-12 text-white sm:px-10 lg:px-14"
      >

        {/* heading */}
        <div className="mb-10 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.18em] text-white/40">
            THE WORKFLOW · FROM SAMPLE TO INSIGHT
          </div>
        </div>

        {/* pipeline */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:items-stretch lg:gap-0">
          {stages.map((s, i) => (
            <div
              key={s.title}
              className="contents lg:flex lg:flex-1 lg:items-stretch"
            >
              <div
                className={`flex-1 rounded-2xl border p-6 ${revealClass(inView)}`}
                style={{
                  borderColor: `oklch(0.55 0.09 ${s.hue} / 0.5)`,
                  backgroundImage: `linear-gradient(180deg, oklch(0.29 0.045 ${s.hue}), oklch(0.24 0.035 ${s.hue}))`,
                  transitionDelay: `${i * 160}ms`,
                }}
              >
                <div
                  className="mb-4 grid size-12 place-items-center rounded-xl border"
                  style={{
                    borderColor: `oklch(0.6 0.09 ${s.hue} / 0.4)`,
                    backgroundColor: `oklch(0.4 0.07 ${s.hue} / 0.32)`,
                  }}
                >
                  <s.icon
                    className="size-6"
                    style={{ color: `oklch(0.86 0.1 ${s.hue})` }}
                  />
                </div>
                <div
                  className="mb-3 font-mono text-[11px] tracking-[0.12em]"
                  style={{ color: `oklch(0.84 0.1 ${s.hue})` }}
                >
                  STAGE {s.n}
                </div>
                <div className="mb-2 text-xl font-bold tracking-tight">
                  {s.title}
                </div>
                <p className="text-sm leading-relaxed text-white/65">
                  {s.blurb}
                </p>
              </div>
              {i < stages.length - 1 && (
                <div
                  className={`hidden items-center px-2 lg:flex ${revealClass(inView)}`}
                  style={{ transitionDelay: `${i * 160 + 80}ms` }}
                >
                  <ArrowRight className="size-5 text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* closed loop */}
        <div
          className={`mt-5 flex items-center gap-4 ${revealClass(inView)}`}
          style={{ transitionDelay: `${analyzeIndex * 160 + 80}ms` }}
        >
          <div className="h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(129,140,248,0.5)_0_2px,transparent_2px_9px)]" />
          <span className="shrink-0 font-mono text-xs text-[#8a8aea]">
            closed loop · results steer the next acquisition
          </span>
        </div>

        {/* federated edge: the instruments & compute the workflow runs on */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="mb-5 font-mono text-[11px] tracking-[0.18em] text-white/40">
            FEDERATED EDGE · INSTRUMENTS & COMPUTE
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {edge.map((e, i) => (
              <div
                key={e.label}
                className={`flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 ${revealClass(inView)}`}
                style={{ transitionDelay: `${(stages.length + 1 + i) * 120}ms` }}
              >
                <e.icon className="size-5 shrink-0 text-white/70" />
                <span className="text-sm text-white/80">{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
