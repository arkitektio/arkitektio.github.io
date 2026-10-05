import { source } from '@/lib/source';
import { withLinkedSeparators } from '@/lib/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { PersonaBar, ThemeSwitchWithConnector } from '@/components/site';

// One sidebar for all of the docs, ordered by kind of page. Who a page is for
// is a tag on it, and the switch at the top of the sidebar filters by that tag.
export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={withLinkedSeparators(source.getPageTree())}
      tabs={false}
      {...baseOptions()}
      links={[]}
      sidebar={{ banner: <PersonaBar key="persona" /> }}
      slots={{ themeSwitch: ThemeSwitchWithConnector }}
    >
      {children}
    </DocsLayout>
  );
}
