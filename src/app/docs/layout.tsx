import { source } from '@/lib/source';
import { withLinkedSeparators } from '@/lib/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { Guide, GuideScript, ThemeSwitchWithConnector } from '@/components/site';

// The docs have one section per reader (use, run, build) and one for everyone
// (about). Each is a root folder in content/docs, so the sidebar shows one
// section at a time and a switch at its top moves between them. The guide in
// the corner asks a first-time reader a few questions and hides what they do
// not need (see src/lib/guide.ts).
export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={withLinkedSeparators(source.getPageTree())}
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
