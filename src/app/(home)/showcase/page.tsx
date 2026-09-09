import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { SectionBackground } from '@/components/marketing';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Showcase',
  description: `Real-world projects and labs building on ${appName}.`,
};

type Showcase = {
  title: string;
  org: string;
  description: string;
  href: string;
  tags: string[];
};

const showcases: Showcase[] = [
  {
    title: 'Live smart microscopy',
    org: 'Imaging Core Facility',
    description:
      'Closed-loop acquisition that adapts imaging in real time based on streaming segmentation results.',
    href: '/docs/showcases',
    tags: ['Smart microscopy', 'Real-time'],
  },
  {
    title: 'High-throughput screening',
    org: 'Cell Biology Lab',
    description:
      'Thousands of wells analysed through a single reactive pipeline, with results shared as installable apps.',
    href: '/docs/showcases',
    tags: ['Screening', 'Apps'],
  },
  {
    title: 'Connectomics at scale',
    org: 'Neuroscience Institute',
    description:
      'Petabyte-scale volumes brokered through the datahub and visualised collaboratively across the group.',
    href: '/docs/showcases',
    tags: ['Big data', 'Collaboration'],
  },
  {
    title: 'Reproducible analysis pipelines',
    org: 'Bioimage Analysis Group',
    description:
      'Versioned, shareable workflows that let any team member reproduce a published result end to end.',
    href: '/docs/showcases',
    tags: ['Reproducibility', 'Workflows'],
  },
];

export default function ShowcasePage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-fd-primary" />
            Built with Arkitekt
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Showcase
          </h1>
          <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">
            A collection of projects and labs using Arkitekt to solve real
            bioimage analysis problems.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {showcases.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur transition-colors hover:border-fd-primary/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-fd-muted-foreground">
                    {item.org}
                  </p>
                </div>
                <ExternalLink className="size-4 shrink-0 text-fd-muted-foreground transition-colors group-hover:text-fd-primary" />
              </div>
              <p className="text-sm text-fd-muted-foreground">
                {item.description}
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-fd-border bg-fd-card/50 px-8 py-12 text-center backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Using Arkitekt in your lab?
          </h2>
          <p className="max-w-xl text-fd-muted-foreground">
            Share what you&apos;ve built and we&apos;ll add it here.
          </p>
          <Link
            href="/docs/showcases"
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-fd-primary"
          >
            Submit your showcase
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
