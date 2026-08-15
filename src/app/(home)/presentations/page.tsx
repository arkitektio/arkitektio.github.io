import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Layers, Play } from 'lucide-react';
import { SectionBackground } from '@/components/marketing';
import { presentations } from '@/lib/presentations';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Presentations',
  description: `Slide decks explaining how ${appName} works, ready to present in the browser.`,
};

export default function PresentationsPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
            <Play className="size-3.5 text-fd-primary" />
            Talks &amp; teaching material
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Presentations
          </h1>
          <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">
            Decks that walk through a single {appName} concept end to end. They
            run in the browser, so you can present straight from this page.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {presentations.map((presentation) => (
            <Link
              key={presentation.slug}
              href={`/presentations/${presentation.slug}`}
              className="group relative flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur transition-colors hover:border-fd-primary/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {presentation.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-fd-muted-foreground">
                    {presentation.topic}
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-fd-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-fd-primary" />
              </div>
              <p className="text-sm text-fd-muted-foreground">
                {presentation.description}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                {presentation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-1 flex items-center gap-4 text-xs text-fd-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="size-3.5" />
                  {presentation.slides} slides
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" />~{presentation.minutes} min
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-fd-border bg-fd-card/50 px-8 py-12 text-center backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Teaching {appName} somewhere?
          </h2>
          <p className="max-w-xl text-fd-muted-foreground">
            The decks are plain React components built on reveal.js — fork one,
            or open an issue with the topic you are missing.
          </p>
          <Link
            href="/docs"
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-fd-primary"
          >
            Browse the docs
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
