import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/components/site';
import { SectionBackground } from '@/components/marketing';
import { showcaseSource } from '@/lib/source';
import { showcaseRoute } from '@/lib/shared';
import { PaperBadge, WHATS_CHANGED_URL } from '../paper-badge';

export default async function ShowcaseDetailPage(props: PageProps<'/showcase/[...slug]'>) {
  const params = await props.params;
  const page = showcaseSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const isPaper = page.data.version === 'paper';

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />

      <article className="mx-auto w-full max-w-3xl px-6 py-12 lg:py-16">
        <Link
          href={showcaseRoute}
          className="inline-flex items-center gap-1 text-sm text-fd-muted-foreground hover:text-fd-foreground"
        >
          <ArrowLeft className="size-4" />
          All showcases
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{page.data.title}</h1>
        {page.data.description && (
          <p className="mt-3 text-lg text-fd-muted-foreground">{page.data.description}</p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {isPaper && <PaperBadge />}
          {page.data.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {isPaper && (
          <p className="mt-6 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-fd-muted-foreground">
            This example was run with the <strong>Paper</strong> version of Arkitekt. The
            workflow still applies, but the platform has moved on since; see{' '}
            <Link href={WHATS_CHANGED_URL} className="text-fd-primary underline underline-offset-4">
              what&apos;s changed from Paper to Next
            </Link>
            .
          </p>
        )}

        <DocsBody className="mt-8">
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(showcaseSource, page),
            })}
          />
        </DocsBody>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return showcaseSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/showcase/[...slug]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = showcaseSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
