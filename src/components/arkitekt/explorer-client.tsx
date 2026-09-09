'use client';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

// GraphiQL touches localStorage, builds fetchers and introspects on mount, so it
// must never run during the static prerender.
export const Explorer = dynamic(
  () => import('@/components/arkitekt/graph').then((m) => m.Graph),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center text-fd-muted-foreground">
        <Loader2 className="size-5 animate-spin" />
      </div>
    ),
  },
);
