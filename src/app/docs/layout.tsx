import { source } from '@/lib/source';
import { withLinkedSeparators } from '@/lib/page-tree';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { ThemeSwitchWithConnector } from '@/components/site';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={withLinkedSeparators(source.getPageTree())}
      {...baseOptions()}
      links={[]}
      slots={{ themeSwitch: ThemeSwitchWithConnector }}
    >
      {children}
    </DocsLayout>
  );
}
