import type { Metadata } from 'next';
import { DeeplinkClient } from '@/components/deeplink-client';
import { DeeplinkGuide } from '@/components/deeplink-guide';
import { SectionBackground } from '@/components/marketing';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'Deep link',
  description: `Opens ${appName} deep links in Orkestrator, Pokket or the documentation.`,
  robots: { index: false },
};

export default function DeeplinkPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />
      <DeeplinkClient />
      <section id="whats-this" className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 pb-16 lg:pb-24">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">
          New here? This is what to do
        </h2>
        <DeeplinkGuide />
      </section>
    </main>
  );
}
