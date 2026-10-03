'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Library } from 'lucide-react';
import { docsRoute } from '@/lib/shared';

const personas = ['use', 'deploy', 'build'];

/**
 * The persona sections hold tutorials and practical knowledge; the in-depth
 * explanation is shared between them under Design. This links there from the
 * sidebar of every persona page.
 */
export function PersonaBanner() {
  const section = usePathname().slice(docsRoute.length + 1).split('/')[0];
  if (!personas.includes(section)) return null;

  return (
    <Link
      href={`${docsRoute}/design`}
      className="flex items-center gap-2 rounded-lg border bg-fd-card px-3 py-2 text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground [&_svg]:size-4"
    >
      <Library />
      Arkitekt in depth
    </Link>
  );
}
