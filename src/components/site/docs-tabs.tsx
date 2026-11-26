'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code, Compass, Lightbulb, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GUIDE_PATH_ATTR } from '@/lib/guide';

// The bar across the top of every docs page: one tab per root folder in
// content/docs. Fumadocs' own top tabs share the page's grid cell and cover it,
// so the bar is drawn here instead (see src/app/docs/layout.tsx). Each label
// carries its folder path, so Klippy can put a whole tab away (src/lib/guide.ts).
const TABS = [
  { title: 'What is Arkitekt?', href: '/docs/concepts/basics', folder: 'concepts/', icon: Lightbulb },
  { title: 'Get started', href: '/docs/get-started', folder: 'get-started/', icon: Rocket },
  { title: 'Guides & tutorials', href: '/docs/guides/first-workflow', folder: 'guides/', icon: Compass },
  { title: 'Developer', href: '/docs/develop/why-build', folder: 'develop/', icon: Code },
];

export function DocsTabs() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Docs sections"
      className="not-prose mb-6 flex gap-6 overflow-x-auto border-b text-sm [scrollbar-width:none]"
    >
      {TABS.map(({ title, href, folder, icon: Icon }) => {
        const active = pathname.startsWith(`/docs/${folder}`) || pathname === `/docs/${folder.slice(0, -1)}`;
        return (
          <Link
            key={folder}
            href={href}
            aria-current={active ? 'page' : undefined}
            className={cn(
              '-mb-px inline-flex items-center gap-1.5 whitespace-nowrap border-b-2 pb-2 font-medium transition-colors',
              active
                ? 'border-fd-primary text-fd-primary'
                : 'border-transparent text-fd-muted-foreground hover:text-fd-foreground',
            )}
          >
            <Icon className="size-4" aria-hidden />
            <span {...{ [GUIDE_PATH_ATTR]: folder }}>{title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
