import type { Metadata } from 'next';
import { DeeplinkClient } from '@/components/deeplink-client';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Deep link',
  description: `Opens ${appName} deep links in the Orkestrator desktop app or the documentation.`,
  robots: { index: false },
};

export default function DeeplinkPage() {
  return (
    <main className="min-h-[calc(100dvh-3.5rem)]">
      <DeeplinkClient />
    </main>
  );
}
