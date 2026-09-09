import type { Metadata } from 'next';
import { Explorer } from '@/components/arkitekt/explorer-client';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: 'API Explorer',
  description: `Interactively explore and query the GraphQL APIs of your ${appName} instance.`,
};

export default function ExplorerPage() {
  // Fill the viewport below the (sticky, h-14) home navbar.
  return (
    <main className="relative h-[calc(100dvh-3.5rem)] w-full overflow-hidden">
      {/* brand glow, echoing the hero. It sits behind the (translucent) panels */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-fd-primary/10 blur-[130px]" />
        <div className="absolute -right-16 bottom-0 h-[24rem] w-[24rem] rounded-full bg-fd-primary/10 blur-[120px]" />
      </div>

      <Explorer />

      {/* the same fractal-noise grain used on the hero, tying the explorer into
          the rest of the grainy UI */}
      <div
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 z-10 opacity-[0.07] mix-blend-overlay"
      />
    </main>
  );
}
