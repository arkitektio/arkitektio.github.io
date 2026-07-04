'use client';

import { Box, Layers, Network, Share2 } from 'lucide-react';
import { useInView, revealClass } from '@/components/marketing/reveal';

const services = [
  {
    name: 'Rekuest',
    icon: Network,
    tag: 'ACTIONS & APPS',
    blurb:
      'Apps expose Actions; agents run them and Rekuest assigns the work across the network.',
    hue: 268,
  },
  {
    name: 'Mikro',
    icon: Layers,
    tag: 'MICROSCOPY DATA',
    blurb: 'Stores & serves n-dimensional images, ROIs and rich metadata.',
    hue: 195,
  },
  {
    name: 'Kraph',
    icon: Share2,
    tag: 'KNOWLEDGE GRAPH',
    blurb: 'Links samples, experiments and results into one graph.',
    hue: 90,
  },
  {
    name: 'Kabinet',
    icon: Box,
    tag: 'APP REGISTRY',
    blurb: 'Discovers, deploys & manages Apps across the platform.',
    hue: 150,
  },
];

const clients = ['Python', 'MATLAB', 'Kotlin / Java'];

export function CoreBento() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section ref={ref} className="w-full pb-16">
      <div className="mb-6 max-w-xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Powered by the Arkitekt core
        </h2>
        <p className="mt-2 text-fd-muted-foreground">
          A handful of focused services do the heavy lifting. Call them from any
          language through the client SDKs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div
            key={s.name}
            className={`rounded-3xl border p-6 ${revealClass(inView)}`}
            style={{
              borderColor: `oklch(0.5 0.08 ${s.hue} / 0.45)`,
              backgroundColor: `oklch(0.255 0.035 ${s.hue})`,
              transitionDelay: `${i * 140}ms`,
            }}
          >
            <div className="mb-3 flex items-center gap-3">
              <s.icon
                className="size-5"
                style={{ color: `oklch(0.8 0.13 ${s.hue})` }}
              />
              <span className="text-lg font-bold tracking-tight text-white">
                {s.name}
              </span>
            </div>
            <div
              className="mb-2 font-mono text-[11px] tracking-[0.06em]"
              style={{ color: `oklch(0.82 0.11 ${s.hue})` }}
            >
              {s.tag}
            </div>
            <p className="text-[13px] leading-relaxed text-white/60">
              {s.blurb}
            </p>
          </div>
        ))}
      </div>

      {/* client SDKs */}
      <div
        className={`mt-4 flex flex-col gap-6 rounded-3xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-8 ${revealClass(inView)}`}
        style={{ transitionDelay: `${services.length * 140}ms` }}
      >
        <div>
          <div className="font-mono text-[11px] tracking-[0.12em] text-fd-primary">
            CLIENT SDKs
          </div>
          <p className="mt-2 max-w-md text-sm text-fd-muted-foreground">
            Build Apps & call Actions from any language.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {clients.map((c) => (
            <span
              key={c}
              className="whitespace-nowrap rounded-lg border border-fd-border bg-fd-muted/40 px-5 py-3 text-center font-mono text-[13px] text-fd-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
