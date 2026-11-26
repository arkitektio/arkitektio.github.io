import { source } from '@/lib/source';
import { withLinkedSeparators } from '@/lib/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { getLayoutTabs, type LayoutTab } from 'fumadocs-ui/layouts/shared';
import { House } from 'lucide-react';
import { baseOptions } from '@/lib/layout.shared';
import { Guide, GuideScript, ThemeSwitchWithConnector } from '@/components/site';

// The docs are four sections, each a root folder in content/docs: What is Arkitekt?
// (concepts/), Installation & get started (get-started/), Guides & tutorials (guides/) and
// Developer (develop/). The switch at the top of the sidebar moves between them,
// with Home (the start page) first. The guide in the corner asks a first-time
// reader a few questions and hides what they do not need (see src/lib/guide.ts).
const HOME: LayoutTab = {
  title: 'Home',
  description: 'Start page: what is where',
  url: '/docs',
  icon: <House />,
  urls: new Set(['/docs', '/docs/privacy']),
};
// Where a section leads when it is not simply its folder's index page.
const START: Record<string, string> = { '/docs/concepts': '/docs/concepts/basics' };

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const tree = withLinkedSeparators(source.getPageTree());
  const tabs = [
    HOME,
    ...getLayoutTabs(tree, { transform: (tab) => ({ ...tab, url: START[tab.url] ?? tab.url }) }),
  ];
  return (
    <DocsLayout
      tree={tree}
      tabs={tabs}
      {...baseOptions()}
      links={[]}
      slots={{ themeSwitch: ThemeSwitchWithConnector }}
    >
      <GuideScript />
      {children}
      <Guide />
    </DocsLayout>
  );
}
