import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Share2 } from 'lucide-react';
import { DeeplinkRetry } from '@/components/deeplink-client';
import { SectionBackground } from '@/components/marketing';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  title: "What's this?",
  description: `You opened an ${appName} link. Here is what that means and how to see what was shared with you.`,
  robots: { index: false },
};

const linkClass = 'underline underline-offset-4 hover:text-fd-primary';

// The short version of /docs/introduction/installation/joining, which stays the
// source of truth for the details.
const steps: { title: string; body: ReactNode }[] = [
  {
    title: 'Create your account',
    body: (
      <>
        Sign up on{' '}
        <a
          className={linkClass}
          href="https://go.arkitekt.live"
          target="_blank"
          rel="noreferrer noopener"
        >
          go.arkitekt.live
        </a>
        , or sign in if you already have an account.
      </>
    ),
  },
  {
    title: 'Ask for an invite',
    body: (
      <>
        Get back to the person who sent you the link and ask them to invite your
        account to their organization. What they shared lives on their {appName} server,
        and you can only see it once they have let you in.
      </>
    ),
  },
  {
    title: 'Install Orkestrator',
    body: (
      <>
        <Link
          className={linkClass}
          href="/docs/apps/standalones/orkestrator#desktop-application"
        >
          Download Orkestrator
        </Link>
        , the {appName} desktop app, for Windows, MacOS or Linux. It needs no
        admin rights. Open it, sign in and pick their server.
      </>
    ),
  },
  {
    title: 'Open the link again',
    body: (
      <>
        Click the link you were sent once more. This time it opens in
        Orkestrator, right on what they wanted to show you.
      </>
    ),
  },
];

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
            or an app to install. {appName} links open in Orkestrator, the{' '}
            {appName} desktop app, so your browser alone cannot show it. To see it, ask them
            for an invite and follow the steps below.
          </p>
        </div>

        <ol className="mt-12 flex flex-col gap-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-fd-primary/10 text-sm font-semibold text-fd-primary">
                {index + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold tracking-tight">{step.title}</h2>
                <p className="text-sm text-fd-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <DeeplinkRetry />
          <p className="text-sm text-fd-muted-foreground">
            More detail in{' '}
            <Link
              className={linkClass}
              href="/docs/introduction/installation/joining"
            >
              Joining somebody&apos;s server
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-fd-border bg-fd-card/50 px-8 py-10 text-center backdrop-blur">
          <h2 className="text-xl font-bold tracking-tight">
            And what is {appName}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-fd-muted-foreground">
            An open-source platform for bioimage analysis. It sits between a
            lab&apos;s data, its analysis tools and its people, so they can
            share images, workflows and results with each other.{' '}
            <Link className={linkClass} href="/docs/introduction/basics">
              Read the basics
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
