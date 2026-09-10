'use client';

import Link from 'next/link';
import { ArrowRight, Boxes, Bot, Workflow } from 'lucide-react';
import { useInView, revealClass } from './reveal';

/* ─────────────────────────── data ─────────────────────────── */

// Each card draws a clear boundary against a tool Arkitekt is often confused
// with. It then points at how we *integrate* with it instead of competing. Hues
// (oklch) keep the multi-colour palette of the surrounding marketing sections.
const tools = [
  {
    tag: 'NOT A PARALLELIZATION LIBRARY',
    tool: 'Dask',
    icon: Boxes,
    great: 'We love and use Dask heavily. It is brilliant at scaling array, dataframe & task-graph compute across a cluster.',
    isNot: 'Arkitekt is not a pure parallelization library.',
    weAre:
      'We are a concurrency platform: long-lived, stateful actor apps that broker data and compute. They are not ephemeral task graphs you submit and forget.',
    link: '/docs/design/services/next/kluster',
    linkLabel: 'How we run Dask',
    hue: 195,
  },
  {
    tag: 'NOT A STATELESS PIPELINE',
    tool: 'Nextflow',
    icon: Workflow,
    great: 'We love Nextflow: for running stateless batch pipelines on a cluster.',
    isNot: 'Arkitekt is not just a stateless executor.',
    weAre:
      'Smart microscopy is rarely stateless. A model is loaded once and results steer the next acquisition. Our apps stay alive and keep their state across a live feedback loop.',
    link: '/docs/design/vs/nextflow',
    linkLabel: 'Arkitekt vs Nextflow',
    hue: 268,
  },
  {
    tag: 'NOT ROBOTICS MIDDLEWARE',
    tool: 'ROS',
    icon: Bot,
    great: 'We love ROS. It rules at real-time robotic control and swarm orchestration',
    isNot: 'Arkitekt does not orchestrate robotic swarms.',
    weAre:
      'That layer is out of scope. But the moment your robot exposes a high-level action, wrap it as an Arkitekt app and we become your friend.',
    link: '/docs/apps',
    linkLabel: 'Wrap it as an app',
    hue: 90,
  },
];

/* ─────────────────────────── view ─────────────────────────── */

export function NotArkitekt() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="w-full pb-10">
      <div
        ref={ref}
        className="relative isolate overflow-hidden rounded-3xl px-6 py-12 text-white sm:px-10 lg:px-14"
      >
        {/* heading */}
        <div className="mb-10 max-w-2xl">
          <div className=" text-[15px]  text-white/40">
             First things first
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Arkitekt is a reactive platform for live, stateful workflows. It is not
            a replacement for the tools we admire. 
            <span className="text-white/80"> So let's see how it differs</span> 
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {tools.map((t, i) => (
            <div
              key={t.tool}
              className={`flex flex-col rounded-2xl border p-6 ${revealClass(inView)}`}
              style={{
                borderColor: `oklch(0.55 0.09 ${t.hue} / 0.5)`,
                backgroundImage: `linear-gradient(180deg, oklch(0.29 0.045 ${t.hue}), oklch(0.24 0.035 ${t.hue}))`,
                transitionDelay: `${i * 160}ms`,
              }}
            >
              <div
                className="mb-4 grid size-12 place-items-center rounded-xl border"
                style={{
                  borderColor: `oklch(0.6 0.09 ${t.hue} / 0.4)`,
                  backgroundColor: `oklch(0.4 0.07 ${t.hue} / 0.32)`,
                }}
              >
                <t.icon
                  className="size-6"
                  style={{ color: `oklch(0.86 0.1 ${t.hue})` }}
                />
              </div>
              <div
                className="mb-3 "
                style={{ color: `oklch(0.84 0.1 ${t.hue})` }}
              >
                We are {t.tag}
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {t.tool}
              </div>
              <p className="text-sm leading-relaxed text-white/50">{t.great}</p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-white/90">
                {t.isNot}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {t.weAre}
              </p>
              <Link
                href={t.link}
                className="group mt-auto inline-flex items-center gap-1.5 pt-6  text-xs tracking-[0.08em] transition-colors"
                style={{ color: `oklch(0.84 0.1 ${t.hue})` }}
              >
                {t.linkLabel}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
