import type { ReactNode } from 'react';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { AccessAppDownload, ForDevice } from '@/components/access-app';
import { LinkApp } from '@/components/deeplink-client';
import { appName } from '@/lib/shared';

const linkClass = 'underline underline-offset-4 hover:text-fd-primary';

const pokket = <>Pokket, the {appName} mobile app</>;
const orkestrator = <>Orkestrator, the {appName} desktop app</>;

// The short version of /docs/guides/joining, which stays the
// source of truth for the details.
const steps: { title: string; body: ReactNode; extra?: ReactNode }[] = [
  {
    title: 'Download one of the access apps',
    body: (
      <>
        <ForDevice
          mobile={<>On a phone or tablet that is {pokket}.</>}
          desktop={
            <>
              On a computer that is {orkestrator}. It runs on Windows, macOS and Linux and
              needs no admin rights.
            </>
          }
          fallback={
            <>
              That is Orkestrator on a computer, or Pokket on a phone or tablet.
            </>
          }
        />
      </>
    ),
    extra: <AccessAppDownload className="items-start" />,
  },
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
    title: 'Open the link again',
    body: (
      <>
        Open the app, sign in and pick their server. Then click the link you were sent
        once more. This time it opens in{' '}
        <LinkApp />, right on
        what they wanted to show you.
      </>
    ),
  },
];

// What somebody who was sent a link has to do, shown on /deeplink itself and on
// its explainer page.
export function DeeplinkGuide() {
  return (
    <>
      <aside className="flex gap-4 rounded-xl border border-amber-500/40 bg-amber-500/10 p-6 backdrop-blur">
        <ShieldAlert className="size-6 shrink-0 text-amber-600 dark:text-amber-400" />
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold tracking-tight">This is not hosted by us</h2>
          <p className="text-sm text-fd-muted-foreground">
            {appName} is open-source software that labs run on their own servers. What this
            link shows you is not stored on arkitekt.live: it comes directly from the server of
            whoever sent it to you. We do not host, check or vouch for it, so only continue if
            you know and trust the sender.
          </p>
        </div>
      </aside>

        <ol className="mt-4 flex flex-col gap-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-xl border border-fd-border bg-fd-card/50 p-6 backdrop-blur"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-fd-primary/10 text-sm font-semibold text-fd-primary">
                {index + 1}
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <h2 className="font-semibold tracking-tight">{step.title}</h2>
                <p className="text-sm text-fd-muted-foreground">{step.body}</p>
                {step.extra && <div className="mt-3">{step.extra}</div>}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-fd-border bg-fd-card/50 px-8 py-10 text-center backdrop-blur">
          <h2 className="text-xl font-bold tracking-tight">
            And what is {appName}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-fd-muted-foreground">
            An open-source platform for bioimage analysis. It sits between a
            lab&apos;s data, its analysis tools and its people, so they can
            share images, workflows and results with each other.{' '}
            <Link className={linkClass} href="/docs/concepts/basics">
              Read the basics
            </Link>
            .
          </p>
        </div>
    </>
  );
}
