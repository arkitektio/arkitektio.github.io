'use client';
import { useEffect, useSyncExternalStore } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  CircleQuestionMark,
  Loader2,
  Monitor,
  RotateCw,
  Smartphone,
  Unlink,
  type LucideIcon,
} from 'lucide-react';
import {
  ForDevice,
  isDesktop,
  isMobile,
  usePlatform,
} from '@/components/access-app';
import { appName } from '@/lib/shared';

// Services that the legacy `?live=<url>` deep links can point at. The first
// matching entry wins.
const liveTargets: { name: string; href: string }[] = [
  { name: 'rekuest', href: '/docs/concepts/services/rekuest' },
  { name: 'mikro', href: '/docs/concepts/services/mikro' },
  { name: 'fluss', href: '/docs/concepts/services/fluss' },
  { name: 'lok', href: '/docs/concepts/services/lok' },
];

type Status =
  | { kind: 'pending' }
  | { kind: 'orkestrator'; href: string }
  | { kind: 'pokket'; href: string }
  | { kind: 'live'; href: string }
  | { kind: 'error'; message: string };

// The query string is only known in the browser; during the static prerender we
// render the pending state and hydrate with the real one.
const subscribe = () => () => {};
const useSearch = () =>
  useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => null,
  );

function resolve(search: string | null): Status {
  if (search === null) return { kind: 'pending' };
  const params = new URLSearchParams(search);
  const orkestrator = params.get('orkestrator');
  const pokket = params.get('pokket');
  const live = params.get('live');
  try {
    if (orkestrator) {
      return { kind: 'orkestrator', href: `orkestrator://${decodeURIComponent(orkestrator)}` };
    }
    // `params.get` has already decoded the value once; decoding again would
    // unwrap the page's own query inside a scoped link
    // (`/open?…&path=%2Fbank%3Fview%3D…`). The path keeps its leading slash
    // (`pokket:///open?…`); the app reads either shape.
    if (pokket) {
      return { kind: 'pokket', href: `pokket://${pokket}` };
    }
    if (live) {
      const decoded = decodeURIComponent(live);
      const match = liveTargets.find(({ name }) => decoded.includes(name));
      return match
        ? { kind: 'live', href: match.href }
        : { kind: 'error', message: `No documentation matches "${decoded}".` };
    }
    return {
      kind: 'error',
      message: 'This page expects an ?orkestrator=, ?pokket= or ?live= query parameter.',
    };
  } catch (error) {
    return { kind: 'error', message: `Could not decode the link: ${String(error)}` };
  }
}

const primaryClass =
  'inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90';
const secondaryClass =
  'inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-4 py-2 text-sm font-medium transition-colors hover:border-fd-primary/50 hover:text-fd-primary';
const linkClass = 'underline underline-offset-4 hover:text-fd-primary';

// Jumps to the guide that the page renders below this component.
function WhatsThisLink() {
  return (
    <a href="#whats-this" className={secondaryClass}>
      <CircleQuestionMark className="size-4" />
      What&apos;s this?
    </a>
  );
}

function Badge({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
      <Icon className="size-3.5 text-fd-primary" />
      {children}
    </span>
  );
}

// Ported from the Docusaurus site's /deeplink page. Three forms are supported:
//   /deeplink?orkestrator=<path>  → hands off to the orkestrator:// protocol
//   /deeplink?pokket=<path>       → hands off to the pokket:// protocol (mobile app)
//   /deeplink?live=<url>          → jumps to the docs of the matching service
export function DeeplinkClient() {
  const search = useSearch();
  const platform = usePlatform();
  const status = resolve(search);

  // An app link only fires on a device its app runs on: orkestrator:// on a
  // phone, or pokket:// on a computer, would end in a browser error.
  const wrongDevice =
    (status.kind === 'orkestrator' && isMobile(platform)) ||
    (status.kind === 'pokket' && isDesktop(platform));
  const opens =
    platform !== null &&
    (status.kind === 'live' ||
      ((status.kind === 'orkestrator' || status.kind === 'pokket') && !wrongDevice));
  const href = 'href' in status ? status.href : null;

  useEffect(() => {
    if (opens && href) window.location.href = href;
  }, [opens, href]);

  const app = status.kind === 'pokket' ? 'Pokket' : 'Orkestrator';

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-6 pb-12 pt-16 text-center lg:pt-24">
      {(status.kind === 'pending' || platform === null) && (
        <Loader2 className="size-6 animate-spin" />
      )}
      {platform !== null && (status.kind === 'orkestrator' || status.kind === 'pokket') && (
        <>
          {wrongDevice ? (
            <>
              <Badge icon={status.kind === 'pokket' ? Smartphone : Monitor}>
                {status.kind === 'pokket' ? 'Mobile link' : 'Desktop link'}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {status.kind === 'pokket'
                  ? 'This link opens on your phone'
                  : 'This link opens on a computer'}
              </h1>
              <p className="text-fd-muted-foreground">
                {status.kind === 'pokket' ? (
                  <>
                    It belongs to Pokket, the {appName} mobile app. Open the same link on your
                    phone or tablet to continue.
                  </>
                ) : (
                  <>
                    It belongs to Orkestrator, the {appName} desktop app. Open the same link on
                    a computer to continue.
                  </>
                )}
              </p>
            </>
          ) : (
            <>
              <Badge icon={Loader2}>Handing over to {app}</Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Opening {app}…</h1>
              <p className="text-fd-muted-foreground">
                Your browser may ask whether it is allowed to open {app}. Say yes, and the
                link continues there. Nothing happened? Then {app} is probably not installed
                yet: follow the steps below.
              </p>
            </>
          )}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a href={status.href} className={wrongDevice ? secondaryClass : primaryClass}>
              <RotateCw className="size-4" />
              {wrongDevice ? 'Try it here anyway' : `Open in ${app}`}
            </a>
            <WhatsThisLink />
          </div>
        </>
      )}
      {status.kind === 'live' && (
        <>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Redirecting…</h1>
          <p className="text-fd-muted-foreground">
            Taking you to{' '}
            <Link className={linkClass} href={status.href}>
              {status.href}
            </Link>
            .
          </p>
        </>
      )}
      {platform !== null && status.kind === 'error' && (
        <>
          <Badge icon={Unlink}>No link found</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Nothing to open</h1>
          <p className="text-fd-muted-foreground">{status.message}</p>
          <WhatsThisLink />
        </>
      )}
    </div>
  );
}

// Shown on the explainer page: leads back to the link the reader came from. It
// renders nothing when the page was opened without one.
export function DeeplinkRetry() {
  const search = useSearch();
  const status = resolve(search);
  if (status.kind !== 'orkestrator' && status.kind !== 'pokket' && status.kind !== 'live') return null;

  return (
    <Link
      href={`/deeplink${search}`}
      className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
    >
      <RotateCw className="size-4" />
      Open the link again
    </Link>
  );
}

// Names the app on the explainer page. A link that says which app it is for
// wins over the reader's device: an orkestrator link opened on a phone still
// only opens in Orkestrator.
export function LinkApp({ long = false }: { long?: boolean }) {
  const status = resolve(useSearch());
  const pokket = long ? <>Pokket, the {appName} mobile app</> : 'Pokket';
  const orkestrator = long ? <>Orkestrator, the {appName} desktop app</> : 'Orkestrator';
  if (status.kind === 'pokket') return <>{pokket}</>;
  if (status.kind === 'orkestrator') return <>{orkestrator}</>;
  return (
    <ForDevice
      mobile={pokket}
      desktop={orkestrator}
      fallback={long ? <>one of the {appName} access apps</> : 'the app'}
    />
  );
}

// Shown on the explainer page when the link is for the app of the other kind
// of device.
export function WrongDeviceNote() {
  const status = resolve(useSearch());
  const platform = usePlatform();
  const text =
    status.kind === 'orkestrator' && isMobile(platform)
      ? 'The link you opened is for Orkestrator, so follow these steps on a computer.'
      : status.kind === 'pokket' && isDesktop(platform)
        ? 'The link you opened is for Pokket, so follow these steps on your phone or tablet.'
        : null;
  if (!text) return null;

  return (
    <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-fd-primary/40 bg-fd-primary/10 px-4 py-2 text-sm font-medium">
      {status.kind === 'pokket' ? (
        <Smartphone className="size-4 shrink-0 text-fd-primary" />
      ) : (
        <Monitor className="size-4 shrink-0 text-fd-primary" />
      )}
      {text}
    </p>
  );
}
