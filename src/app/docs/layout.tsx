import { source } from '@/lib/source';
import { withLinkedSeparators } from '@/lib/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { ThemeSwitchWithConnector } from '@/components/site';

// One sidebar for all of the docs, ordered by kind of page. Who a page is for
// is a tag on it, shown as a badge above its title.
export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={withLinkedSeparators(source.getPageTree())}
      tabs={false}
      {...baseOptions()}
      links={[]}
      slots={{ themeSwitch: ThemeSwitchWithConnector }}
    >
      {children}
    </DocsLayout>
  );
}
