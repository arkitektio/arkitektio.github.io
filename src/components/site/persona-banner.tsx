'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeft, Library } from 'lucide-react';
import { docsRoute } from '@/lib/shared';

const STORAGE_KEY = 'arkitekt-docs-persona';
const personas: Record<string, string> = { use: 'Use', deploy: 'Deploy', build: 'Build' };
const shared = 'design';

const className =
  'flex items-center gap-2 rounded-lg border bg-fd-card px-3 py-2 text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground [&_svg]:size-4';

/**
 * The Design section is shared by all personas, so opening it swaps the sidebar.
 * On a persona page this links to it; on a Design page it leads back to the
 * persona the reader came from.
 */
export function PersonaBanner() {
  const section = usePathname().slice(docsRoute.length + 1).split('/')[0];
  const [last, setLast] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (section in personas) localStorage.setItem(STORAGE_KEY, section);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- read after hydration, the export is static
      else setLast(localStorage.getItem(STORAGE_KEY));
    } catch {
      // storage unavailable, the banner just stays hidden
    }
  }, [section]);

  if (section in personas) {
    return (
      <Link href={`${docsRoute}/${shared}`} className={className}>
        <Library />
        How Arkitekt is designed
      </Link>
    );
  }
  if (section === shared && last && last in personas) {
    return (
      <Link href={`${docsRoute}/${last}`} className={className}>
        <ArrowLeft />
        Back to {personas[last]}
      </Link>
    );
  }
  return null;
}
