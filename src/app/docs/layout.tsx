import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { withLinkedSeparators } from '@/lib/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { getLayoutTabs, type LayoutTab } from 'fumadocs-ui/layouts/shared';
import { Code, Compass, Library, Microscope, Server } from 'lucide-react';
import { baseOptions } from '@/lib/layout.shared';
import { docsRoute } from '@/lib/shared';
import { PersonaBanner, ThemeSwitchWithConnector } from '@/components/site';

// The sections of the sidebar dropdown: one per persona, plus the shared Design
// section. Each is a folder with `"root": true` in its meta.json.
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
  const tree = withLinkedSeparators(source.getPageTree());
  const tabs: LayoutTab[] = [
    // Matches every docs page, so the dropdown also shows on pages outside the
    // sections (`/docs`, the privacy policy); a section tab takes precedence.
    {
      title: 'Overview',
      description: 'Start here',
      url: docsRoute,
      icon: tabIcon(<Compass />),
    },
    ...getLayoutTabs(tree, {
      transform: (tab) => ({
        ...tab,
        icon: tabIcon(icons[tab.url]),
        // Design is shared by the personas, so a rule sets it apart from them
        props:
          tab.url === `${docsRoute}/design`
            ? {
                className:
                  'relative mt-2 before:absolute before:inset-x-1 before:-top-1.5 before:h-px before:bg-fd-border',
              }
            : undefined,
      }),
    }),
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
