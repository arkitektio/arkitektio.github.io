import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  GitFork,
  Microscope,
  Network,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CoreBento, HomeBento } from '@/components/bento';
import { asset } from '@/lib/base-path';
import { Ecosystem, EcosystemOrbit, NotArkitekt } from '@/components/marketing';
import { gitConfig } from '@/lib/shared';

const features = [
  {
    icon: Network,
    title: 'The middleman',
    description:
      'A central datahub that sits between you and your analysis tools, brokering data and compute across your lab.',
  },
  {
    icon: Workflow,
    title: 'Visual workflows',
    description:
      'Compose nodes into reactive pipelines and orchestrate complex analysis without writing glue code.',
  },
  {
    icon: Microscope,
    title: 'Built for microscopy',
    description:
      'First-class support for bioimage data, metadata and the formats your instruments already produce.',
  },
  {
    icon: Boxes,
    title: 'Apps, not scripts',
    description:
      'Package tools as installable apps that anyone in your group can discover, run and share.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col px-6 pb-24 pt-6 sm:px-6 lg:px-8">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative isolate w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0c] text-white lg:min-h-[660px]">
        {/* brand glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -left-24 -top-24 h-[34rem] w-[34rem] rounded-full bg-primary/30 blur-[130px]" />
          <div className="absolute -right-16 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[130px]" />
          <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        {/* grain overlay */}
        <div
          aria-hidden
          className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.12] mix-blend-overlay"
        />

        <div className="relative z-10 max-w-2xl px-6 pt-14 sm:px-12 sm:pt-20 lg:px-16 lg:pb-28">
          {/* badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary backdrop-blur">
            <Sparkles className="size-3.5" />
            An open platform for bioimage analysis.
          </span>

          {/* headline */}
          <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Bioimage analysis,
            <br />
            <span className="text-primary">your way.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/60">
            Arkitekt is a middleman between your data, your tools and your
            team. It turns scattered scripts, FIJI scripts, into shareable, reactive analysis
            apps.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 text-base"
            >
              <Link href="/docs/introduction/installation">
                Get started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full border border-white/10 bg-white/10 px-7 text-base text-white hover:bg-white/20"
            >
              <a
                href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitFork className="size-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* product screenshot. Anchored into the lower-right corner and oversized
            so it bleeds off the edge, clipped by the hero's overflow-hidden */}
        <div className="relative z-0 mt-10 px-6 sm:px-12 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[64%] lg:translate-x-[12%] lg:translate-y-[16%] lg:px-0">
          <div className="overflow-hidden rounded-xl  lg:rounded-none lg:rounded-tl-2xl lg:border-b-0 lg:border-r-0">
            <img
              src={asset('/img/image.png')}
              alt="The Orkestrator app managing uploaded microscopy data"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────── Statement ─────────────────────── */}
      <section className="w-full my-16 flex flex-col items-center gap-6 text-center">
        <p className="max-w-5xl text-3xl font-medium leading-snug tracking-tight text-fd-muted-foreground sm:text-4xl">
          Arkitekt is an{' '}
          <span className="text-fd-foreground">open-source platform</span> for{' '}
          <span className="text-fd-foreground">bioimages and beyond</span>. It connects your
          data, analysis tools and team through a single reactive datahub. It
          adapts to how <span className="text-fd-foreground">your lab</span>{' '}
          already works.
        </p>
      </section>


      {/* ─────────────────── Ecosystem orbit map ────────────────── */}
      <EcosystemOrbit />

      {/* ────────────────────── Ecosystem ──────────────────────── */}
      <Ecosystem />

      {/* ─────────────────── What Arkitekt is not ──────────────── */}
      <NotArkitekt />

      {/* ───────────────────────── Bento ──────────────────────── */}
      <HomeBento />

      {/* ─────────────────────── Core services ─────────────────── */}
      <CoreBento />

      {/* ───────────────────────── AI? ─────────────────────────── */}
      <section className="w-full my-16">
        <div className="relative overflow-hidden rounded-3xl border border-fd-border bg-fd-card/50 p-8 backdrop-blur sm:p-12">
          {/* brand glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-fd-primary/10 blur-[120px]"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-fd-primary/40 bg-fd-primary/10 px-3.5 py-1.5 text-sm font-medium text-fd-primary">
                <Sparkles className="size-3.5" />
                AI?
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Yes, we use AI. No, nothing here is vibe-coded.
              </h2>
              <p className="mt-4 text-lg text-fd-muted-foreground">
                We build the new version of Arkitekt with AI. We never build it
                without supervision. Looks are deceiving: polish is not proof of
                carelessness, and every line is read, understood and owned by a
                human.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0 rounded-full">
              <Link href="/docs/ai">
                How we use AI
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────────────── Features ─────────────────────── */}
      <section className="w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur transition-colors hover:border-fd-primary/50"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* closing CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-fd-border bg-fd-card/50 px-8 py-12 text-center backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Get started with Arkitekt
          </h2>
          <p className="max-w-xl text-fd-muted-foreground">
            Install the platform, walk through the tutorial, and connect your
            first tool.
          </p>
          <Button asChild size="lg" className="mt-2 rounded-full">
            <Link href="/docs/introduction/first-steps">
              Start the tutorial
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
