import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Layers } from 'lucide-react';
import { SectionBackground } from '@/components/marketing';
import { MikroCoordinateSystemDeck } from '@/components/presentations';
import { getPresentation } from '@/lib/presentations';

const presentation = getPresentation('mikro-coordinate-system')!;

export const metadata: Metadata = {
  title: presentation.title,
  description: presentation.description,
};

export default function MikroCoordinateSystemPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />

      <section className="mx-auto w-full max-w-6xl px-6 py-12 lg:py-16">
        <Link
          href="/presentations"
          className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
        >
          <ArrowLeft className="size-4" />
          All presentations
        </Link>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-fd-primary">
              {presentation.topic}
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {presentation.title}
            </h1>
            <p className="mt-2 max-w-2xl text-fd-muted-foreground">
              {presentation.description}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4 text-xs text-fd-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Layers className="size-3.5" />
              {presentation.slides} slides
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" />~{presentation.minutes} min
            </span>
          </div>
        </div>

        <div className="mt-8">
          <MikroCoordinateSystemDeck />
        </div>

        {presentation.docsHref ? (
          <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                Prefer it in prose?
              </h2>
              <p className="mt-1 text-sm text-fd-muted-foreground">
                The same material, with the interactive figure and the full
                reference, lives in the docs.
              </p>
            </div>
            <Link
              href={presentation.docsHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium transition-colors hover:border-fd-primary/50 hover:text-fd-primary"
            >
              <BookOpen className="size-4" />
              Read the Coordinate Systems docs
            </Link>
          </div>
        ) : null}
      </section>
    </main>
  );
}
