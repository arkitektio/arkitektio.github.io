import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Node, Root } from 'fumadocs-core/page-tree';
import { source } from '@/lib/source';
import { withLinkedSeparators } from '@/lib/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { getLayoutTabs, type LayoutTab } from 'fumadocs-ui/layouts/shared';
import { Code, Compass, Library, Microscope, Server } from 'lucide-react';
import { baseOptions } from '@/lib/layout.shared';
import { docsRoute } from '@/lib/shared';
import { PersonaBanner, ThemeSwitchWithConnector } from '@/components/site';

// The sections of the sidebar dropdown: one per persona, plus the shared
// in-depth section (Understand, under /docs/design). Each is a folder with `"root": true` in its meta.json.
const icons: Record<string, ReactNode> = {
  [`${docsRoute}/use`]: <Microscope />,
  [`${docsRoute}/deploy`]: <Server />,
  [`${docsRoute}/build`]: <Code />,
  [`${docsRoute}/design`]: <Library />,
};

const tabIcon = (icon: ReactNode) => (
  <div className="size-full text-fd-primary [&_svg]:size-full max-md:rounded-md max-md:border max-md:bg-fd-secondary max-md:p-1.5">
    {icon}
  </div>
);

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const full = withLinkedSeparators(source.getPageTree());
  const sections = getLayoutTabs(full, {
    transform: (tab) => ({
      ...tab,
      icon: tabIcon(icons[tab.url]),
      // the in-depth section is shared by the personas, so a rule sets it apart
      props:
        tab.url === `${docsRoute}/design`
          ? {
              className:
                'relative mt-2 before:absolute before:inset-x-1 before:-top-1.5 before:h-px before:bg-fd-border',
            }
          : undefined,
    }),
  });

  // Outside the sections (`/docs`, the privacy policy) the sidebar links to each
  // section under "Paths" instead of nesting its pages. The section folders move
  // to the fallback tree, where a page inside one still finds its own sidebar.
  // The links are a separator node: a page node with a section's URL would be
  // matched as the current page there and bring this sidebar along.
  const [overview, ...rest] = full.children.filter((node) => node.type === 'page');
  const paths: Node = {
    type: 'separator',
    name: (
      <span className="-mx-2 flex flex-1 flex-col">
        <span className="mb-1 px-2">Paths</span>
        {sections.map((section) => (
          <Link
            key={section.url}
            href={section.url}
            className="rounded-lg p-2 font-normal text-fd-muted-foreground transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80"
          >
            {section.title}
          </Link>
        ))}
      </span>
    ),
  };
  const tree: Root = {
    ...full,
    children: [overview, paths, ...rest],
    fallback: {
      name: full.name,
      children: [
        ...full.children.filter((node) => node.type === 'folder'),
        ...(full.fallback?.children ?? []),
      ],
    },
  };
  const tabs: LayoutTab[] = [
    // Matches every docs page, so the dropdown also shows on pages outside the
    // sections (`/docs`, the privacy policy); a section tab takes precedence.
    {
      title: 'Overview',
      description: 'Start here',
      url: docsRoute,
      icon: tabIcon(<Compass />),
    },
    ...sections,
  ];

  return (
    <DocsLayout
      tree={tree}
      tabs={tabs}
      {...baseOptions()}
      links={[]}
      sidebar={{ banner: <PersonaBanner /> }}
      slots={{ themeSwitch: ThemeSwitchWithConnector }}
    >
      {children}
    </DocsLayout>
  );
}
