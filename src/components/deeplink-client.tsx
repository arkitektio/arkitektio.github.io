'use client';
import { useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { CircleQuestionMark, Loader2, RotateCw } from 'lucide-react';

// Services that the legacy `?live=<url>` deep links can point at. The first
// matching entry wins.
const liveTargets: { name: string; href: string }[] = [
  { name: 'rekuest', href: '/docs/build/concepts/services/rekuest' },
  { name: 'mikro', href: '/docs/build/concepts/services/mikro' },
  { name: 'fluss', href: '/docs/build/concepts/services/fluss' },
  { name: 'lok', href: '/docs/build/concepts/services/lok' },
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

const whatsThisRoute = '/deeplink/whats-this';

// The explainer keeps the original query string, so the reader can come back to
// the very link they were sent once Orkestrator is installed.
function WhatsThisLink({ search }: { search: string | null }) {
  return (
    <Link
      href={`${whatsThisRoute}${search ?? ''}`}
      className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-4 py-2 text-sm font-medium transition-colors hover:border-fd-primary/50 hover:text-fd-primary"
    >
      <CircleQuestionMark className="size-4" />
      What&apos;s this?
    </Link>
  );
}

// Ported from the Docusaurus site's /deeplink page. Three forms are supported:
//   /deeplink?orkestrator=<path>  → hands off to the orkestrator:// protocol
//   /deeplink?pokket=<path>       → hands off to the pokket:// protocol (mobile app)
//   /deeplink?live=<url>          → jumps to the docs of the matching service
export function DeeplinkClient() {
  const search = useSearch();
  const status = resolve(search);

  useEffect(() => {
    if (status.kind === 'orkestrator' || status.kind === 'pokket' || status.kind === 'live') {
      window.location.href = status.href;
    }
  }, [status]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-6 py-24 text-center">
      {status.kind === 'pending' && <Loader2 className="size-6 animate-spin" />}
      {status.kind === 'orkestrator' && (
        <>
          <h1 className="text-2xl font-semibold">Opening Orkestrator…</h1>
          <p className="text-fd-muted-foreground">
            If nothing happens, make sure the Orkestrator desktop app is installed, or open{' '}
            <a className="underline" href={status.href}>
              this link
            </a>{' '}
            manually.
          </p>
          <p className="text-fd-muted-foreground">
            Somebody shared this with you and you have never heard of Arkitekt?
          </p>
          <WhatsThisLink search={search} />
        </>
      )}
      {status.kind === 'pokket' && (
        <>
          <h1 className="text-2xl font-semibold">Opening Pokket…</h1>
          <p className="text-fd-muted-foreground">
            This link opens in Pokket, the Arkitekt mobile app, so open it on your phone. If
            nothing happens there, make sure{' '}
            <Link className="underline" href="/docs/use/guides/apps/pokket#install">
              Pokket is installed
            </Link>
            , or open{' '}
            <a className="underline" href={status.href}>
              this link
            </a>{' '}
            manually.
          </p>
        </>
      )}
      {status.kind === 'live' && (
        <>
          <h1 className="text-2xl font-semibold">Redirecting…</h1>
          <p className="text-fd-muted-foreground">
            Taking you to{' '}
            <Link className="underline" href={status.href}>
              {status.href}
            </Link>
            .
          </p>
        </>
      )}
      {status.kind === 'error' && (
        <>
          <h1 className="text-2xl font-semibold">Nothing to open</h1>
          <p className="text-fd-muted-foreground">{status.message}</p>
          <WhatsThisLink search={search} />
        </>
      )}
      <p className="text-sm text-fd-muted-foreground">
        <Link className="underline" href="/docs">
          Go to the documentation
        </Link>
      </p>
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
