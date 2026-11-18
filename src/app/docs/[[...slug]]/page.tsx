import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMDXComponents, StewardCard } from '@/components/site';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { pageTypes } from '@/lib/page-type';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  // what kind of page this is
  const badge = page.data.type && pageTypes[page.data.type];

  // every page of the legacy section carries the same warning
  const isLegacy = page.slugs.includes('legacy');

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      {badge && (
        <div className="flex">
          <span className="rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary">
            {badge}
          </span>
        </div>
      )}
      {page.data.type === 'tutorial' ? (
        // a tutorial names its steward to the right of the title
        <div className="flex items-center justify-between gap-6 max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <DocsTitle>{page.data.title}</DocsTitle>
          <StewardCard id={page.data.steward} />
        </div>
      ) : (
        <DocsTitle>{page.data.title}</DocsTitle>
      )}
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        {isLegacy && (
          <div
            role="note"
            className="not-prose mb-6 rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm"
          >
            <p className="font-semibold tracking-wide text-red-700 dark:text-red-300">OUTDATED</p>
            <p className="mt-1 text-fd-foreground">
              This is not how Arkitekt works today. This page describes an older version and is kept
              for reference only. For the current platform, start at the{' '}
              <Link href="/docs" className="underline underline-offset-4">
                documentation home
              </Link>
              .
            </p>
          </div>
        )}
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
