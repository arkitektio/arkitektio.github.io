import { source } from '@/lib/source';
import { withLinkedSeparators } from '@/lib/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { Guide, GuideScript, ThemeSwitchWithConnector } from '@/components/site';

// Four tabs across the top, one per question a reader brings: What is Arkitekt?
// (concepts/), Get started (get-started/), Guides & tutorials (guides/) and
// Developer (develop/). Each is a root folder in content/docs; the sidebar shows
// the tab you are in, and the bar itself is drawn on each page (DocsTabs). The
// guide in the corner asks a first-time reader a few questions and hides what
// they do not need (see src/lib/guide.ts).
export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={withLinkedSeparators(source.getPageTree())}
      // the tab bar is src/components/site/docs-tabs.tsx, at the top of each page
      tabs={false}
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
