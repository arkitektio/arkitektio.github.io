import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  GitFork,
  Microscope,
  Network,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CoreBento, HomeBento } from '@/components/bento';
import { asset } from '@/lib/base-path';
import { Ecosystem, EcosystemOrbit, NotArkitekt } from '@/components/marketing';
import { gitConfig } from '@/lib/shared';

function UnderConstruction() {
  return (
    <div
      role="status"
      className="relative z-20 border-b border-amber-400/40 bg-amber-400/15 px-6 py-3 text-sm text-amber-100 backdrop-blur sm:px-12 lg:px-16"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <TriangleAlert className="size-4 shrink-0 text-amber-300" />
        <span className="font-semibold text-amber-200">Under construction.</span>
        <span className="text-amber-100/80">
          This site is being rebuilt for the next release of Arkitekt. Pages may be incomplete or
          change without notice. Please check back soon!
        </span>
      </div>
    </div>
  );
}

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

        <UnderConstruction />

        <div className="relative z-10 max-w-2xl px-6 pt-14 sm:px-12 sm:pt-20 lg:px-16 lg:pb-28">
          {/* badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary backdrop-blur">
            
           Take the K pill
          </span>

          {/* headline */}
          <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Bioimage analysis,
            <br />
            <span className="text-primary">a bit more fun.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/60">
            Arkitekt is a real-time middleman between you and your tools. It turns scattered scripts and messy multi-folder data sinkholes into a single, analysis tracking datahub that orchestrates your workflows and lets you share your data with your team securely.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 text-base"
            >
              <Link href="/docs/introduction/installation">
                Lets gooo!
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
                Show me code
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



      {/* ─────────────────── Ecosystem orbit map ────────────────── */}
      <EcosystemOrbit />

      

      {/* ─────────────────── What Arkitekt is not ──────────────── */}
      <NotArkitekt />
        

        <section className="w-full my-auto flex flex-col items-center gap-4  px-8 py-12 text-center backdrop-blur">
           Let us dump some features on you, like every weird marketing site. If you care more about what Arkitekt stands
           for check out <Link href="/docs/design/philosophy" className="text-primary underline inline font-medium">Why we exists?</Link> 
           
        </section>
      {/* ───────────────────────── Bento ──────────────────────── */}
      <HomeBento />

      {/* ─────────────────────── Core services ─────────────────── */}
      <CoreBento />

      {/* ───────────────────────── AI? ─────────────────────────── */}
      <section className="w-full">
        <div className="relative overflow-hidden rounded-3xl p-2 backdrop-blur sm:p-6">
          {/* brand glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-fd-primary/10 blur-[120px]"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-fd-primary/40 bg-fd-primary/10 px-3.5 py-1.5 text-sm font-medium text-fd-primary">
                
                This shit looks like AI...
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                We dont vibe code here, but we use AI <i>sometimes</i>. 
              </h2>
              <p className="mt-4 text-lg text-fd-muted-foreground">
                Arkitekt is older than AI and the core of the platform has been
                painstakingly engineered without any ML magic. Look at our code,
                talk to us humans, there is no hype here.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0 rounded-md" variant={"outline"}>
              <Link href="/docs/design/ai">
                What we do care about with regards to AI
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ──────────────────────── Features ─────────────────────── */}
      <section className="w-full">

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

      {/* ───────────────────────── Footer ──────────────────────── */}
      <footer className="mt-16 flex flex-col items-center gap-1 text-center text-sm text-fd-muted-foreground">
        <Link
          href="/docs/privacy"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-fd-foreground"
        >
          <ShieldCheck className="size-3.5" />
          Mind your privacy
        </Link>
        <p className="text-xs">
          We don&apos;t want your data. Here&apos;s exactly what we do and don&apos;t touch.
        </p>
      </footer>
    </main>
  );
}
