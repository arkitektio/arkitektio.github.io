import type { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import { SectionBackground } from '@/components/marketing';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Blog',
  description: `News, release notes and deep dives from the ${appName} team.`,
};

export default function BlogPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />

      <section className="mx-auto w-full max-w-5xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
            <Newspaper className="size-3.5 text-fd-primary" />
            From the team
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">
            Release notes, engineering deep dives and stories from labs building
            on Arkitekt.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-fd-border bg-fd-card/40 px-8 py-16 text-center backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight">Nothing here yet</h2>
          <p className="max-w-md text-sm text-fd-muted-foreground">
            We have not published any posts. Until we do, the{' '}
            <Link href="/docs/design/whats-changed" className="text-fd-primary underline underline-offset-4">
              What&apos;s changed
            </Link>{' '}
            section is the closest thing to release notes.
          </p>
        </div>
      </section>
    </main>
  );
}
