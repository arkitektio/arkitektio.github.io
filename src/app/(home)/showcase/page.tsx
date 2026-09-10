import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { SectionBackground } from '@/components/marketing';
import { showcaseSource } from '@/lib/source';
import { appName, gitConfig } from '@/lib/shared';
import { PaperBadge, WHATS_CHANGED_URL } from './paper-badge';

export const metadata: Metadata = {
  title: 'Showcase',
  description: `Worked examples of ${appName} solving real bioimage analysis problems.`,
};

type Group = 'paper' | 'advanced';

const GROUPS: { key: Group; title: string; blurb: React.ReactNode }[] = [
  {
    key: 'paper',
    title: 'From the paper',
    blurb: (
      <>
        The workflows described in the Arkitekt publication, as interactive guides you can
        import into your own deployment. They were run with the <em>Paper</em> version of the
        platform; what has changed since is summarised in{' '}
        <Link href={WHATS_CHANGED_URL} className="text-fd-primary underline underline-offset-4">
          What&apos;s changed from Paper to Next
        </Link>
        .
      </>
    ),
  },
  {
    key: 'advanced',
    title: 'Advanced',
    blurb: (
      <>
        Single-app and cross-app automation that assumes you know your way around Arkitekt. If
        you are new, start with the{' '}
        <Link
          href="/docs/introduction/first-steps"
          className="text-fd-primary underline underline-offset-4"
        >
          Getting Started
        </Link>{' '}
        guide first.
      </>
    ),
  },
];

export default function ShowcasePage() {
  const pages = showcaseSource.getPages();

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-fd-primary" />
            Built with Arkitekt
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Showcase</h1>
          <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">
            Worked examples of Arkitekt solving real bioimage analysis problems, from the
            publication and beyond.
          </p>
        </div>

        {GROUPS.map((group) => {
          const items = pages.filter((page) => page.data.group === group.key);
          if (items.length === 0) return null;

          return (
            <div key={group.key} className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight">{group.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-fd-muted-foreground">{group.blurb}</p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((page) => (
                  // The title link is stretched over the whole card with a
                  // pseudo-element, so the card is clickable without nesting
                  // the Paper badge (itself a link) inside another <a>.
                  <div
                    key={page.url}
                    className="group relative flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur transition-colors hover:border-fd-primary/50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">
                        <Link href={page.url} className="after:absolute after:inset-0">
                          {page.data.title}
                        </Link>
                      </h3>
                      <ArrowUpRight className="size-4 shrink-0 text-fd-muted-foreground transition-colors group-hover:text-fd-primary" />
                    </div>
                    <p className="text-sm text-fd-muted-foreground">{page.data.description}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      {page.data.version === 'paper' && (
                        <span className="relative z-10">
                          <PaperBadge />
                        </span>
                      )}
                      {page.data.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-fd-border bg-fd-card/50 px-8 py-12 text-center backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Using Arkitekt in your lab?
          </h2>
          <p className="max-w-xl text-fd-muted-foreground">
            Share what you&apos;ve built and we&apos;ll add it here.
          </p>
          <a
            href={`https://github.com/${gitConfig.user}/${gitConfig.repo}/issues/new?title=Showcase%3A%20`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-fd-primary"
          >
            Submit your showcase
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
