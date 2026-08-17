// React Flow's base styles, for the pipeline figure in this deck. Imported on
// the route rather than inside the figure: a stylesheet imported from a client
// component arrives after first paint and the flow renders unstyled.
import '@xyflow/react/dist/style.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Layers } from 'lucide-react';
import { SectionBackground } from '@/components/marketing';
import { VolumeViewerDeck } from '@/components/presentations';
import { getPresentation } from '@/lib/presentations';

const presentation = getPresentation('volume-viewer')!;

export const metadata: Metadata = {
  title: presentation.title,
  description: presentation.description,
};

export default function VolumeViewerPage() {
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
          <VolumeViewerDeck />
        </div>
      </section>
    </main>
  );
}
