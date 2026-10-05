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
import { getMDXComponents, PersonaFooter } from '@/components/site';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { pageTypes, personaInfo } from '@/lib/persona';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  // what kind of page this is (its top folder) and who it is written for
  const badges = [
    pageTypes[page.slugs[0]],
    ...page.data.personas.map((persona) => personaInfo[persona].badge),
  ].filter(Boolean);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} slots={{ footer: PersonaFooter }}>
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {badges.map((badge, index) => (
            <span
              key={badge}
              className={
                index === 0
                  ? 'rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary'
                  : 'rounded-full border px-2.5 py-0.5 text-xs font-medium text-fd-muted-foreground'
              }
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
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
