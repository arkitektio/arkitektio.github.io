import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Newspaper } from 'lucide-react';
import { SectionBackground } from '@/components/marketing';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Blog',
  description: `News, release notes and deep dives from the ${appName} team.`,
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag: string;
};

const posts: Post[] = [
  {
    slug: 'introducing-arkitekt',
    title: 'Introducing Arkitekt',
    excerpt:
      'Why we built a datahub for microscopy, and how it turns scattered analysis scripts into shareable, reactive apps.',
    date: '2026-05-28',
    readingTime: '6 min read',
    tag: 'Announcement',
  },
  {
    slug: 'streaming-bioimage-pipelines',
    title: 'Streaming bioimage pipelines without the glue code',
    excerpt:
      'A look at how reactive nodes let you compose acquisition, processing and visualisation into a single live pipeline.',
    date: '2026-04-15',
    readingTime: '8 min read',
    tag: 'Engineering',
  },
  {
    slug: 'apps-not-scripts',
    title: 'Apps, not scripts: packaging analysis for your lab',
    excerpt:
      'How packaging tools as installable apps changes the way research groups discover, run and share their methods.',
    date: '2026-03-02',
    readingTime: '5 min read',
    tag: 'Product',
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

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

        <div className="mt-12 flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur transition-colors hover:border-fd-primary/50"
            >
              <div className="flex items-center gap-3 text-xs text-fd-muted-foreground">
                <span className="rounded-full bg-fd-primary/10 px-2.5 py-0.5 font-medium text-fd-primary">
                  {post.tag}
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                {post.title}
              </h2>
              <p className="text-sm text-fd-muted-foreground">{post.excerpt}</p>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-fd-primary">
                Read more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
