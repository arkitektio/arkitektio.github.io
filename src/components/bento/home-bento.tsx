import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Terminal } from '@/components/docs/terminal';
import { RandomClip } from '@/components/marketing/random-clip';
import { BentoCard, BentoGrid } from './primitives';
import { AsyncApiCard } from './async-api-card';
import { ProvenanceCard } from './provenance-card';
import { StateCard } from './state-card';
import { DeclareCard } from './declare-card';
import { BlokCard } from './blok-card';

/** The main home-page bento grid. */
export function HomeBento() {
  return (
    <section className="w-full pb-16">
      <BentoGrid>
        {/* (async) API. Everything is a controllable, progress-yielding task */}
        <AsyncApiCard />

        {/* observable state. A robot whose state updates live */}
        <StateCard />

        {/* media. A random clip from the volume-viewer talk, captioned
            (pin with ?demo=<slug>), filling its cell edge to edge like any
            other card. The card is a flex row so the clip stretches to the
            row's height, with the showcase CTA sitting beside it. */}
        <BentoCard className="flex">
          <RandomClip slot="demo" caption />
        </BentoCard>

        {/* facilities statement + showcase CTA, to the right of the clip */}
        <BentoCard className="flex flex-col justify-between gap-6 p-6 sm:p-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Want to see Arkitekt in action?
            </h2>
            <p className="mt-3 max-w-md text-sm text-fd-muted-foreground">
              Look at these examples. Maybe they can illustrate things better than words.
            </p>
          </div>
          <Button asChild className="w-fit rounded-full">
            <Link href="/showcase">
              Showcase
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </BentoCard>

        {/* provenance. Everything is audited & recorded */}
        <ProvenanceCard />

        {/* live install recording, beside provenance. No card around it: the
            terminal brings its own window chrome and sits straight on the
            page background. */}
        <div className="flex">
          <Terminal src="/casts/arkitekt-init.cast" autoPlay loop speed={1.5} />
        </div>

        {/* declare. Programmatic workflows resolved across remote agents */}
        <DeclareCard />

        {/* bloks. Dashboards declared in JSX from the component catalog */}
        <BlokCard />
      </BentoGrid>
    </section>
  );
}
