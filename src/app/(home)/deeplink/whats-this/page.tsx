import type { Metadata } from 'next';
import Link from 'next/link';
import { Share2 } from 'lucide-react';
import { DeeplinkGuide } from '@/components/deeplink-guide';
import { DeeplinkRetry, LinkApp, WrongDeviceNote } from '@/components/deeplink-client';
import { SectionBackground } from '@/components/marketing';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: "What's this?",
  description: `You opened an ${appName} link. Here is what that means and how to see what was shared with you.`,
  robots: { index: false },
};

const linkClass = 'underline underline-offset-4 hover:text-fd-primary';

export default function WhatsThisPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <SectionBackground />

      <section className="mx-auto w-full max-w-3xl px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
            <Share2 className="size-3.5 text-fd-primary" />
            Shared with you
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            You just opened an {appName} link
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-fd-muted-foreground">
            Somebody wants to share something with you: a workflow, some data,
            or an app to install. {appName} links open in{' '}
            <LinkApp long />
            , so your browser alone cannot show it. To see it, follow the steps below.
          </p>
          <WrongDeviceNote />
        </div>

        <div className="mt-12">
          <DeeplinkGuide />
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <DeeplinkRetry />
          <p className="text-sm text-fd-muted-foreground">
            More detail in{' '}
            <Link
              className={linkClass}
              href="/docs/guides/joining"
            >
              Joining somebody&apos;s server
            </Link>
            .
          </p>
        </div>

      </section>
    </main>
  );
}
