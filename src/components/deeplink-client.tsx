'use client';
import { useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

// Services that the legacy `?live=<url>` deep links can point at. The first
// matching entry wins.
const liveTargets: { name: string; href: string }[] = [
  { name: 'rekuest', href: '/docs/design/services/rekuest' },
  { name: 'mikro', href: '/docs/design/services/mikro' },
  { name: 'fluss', href: '/docs/design/services/fluss' },
  { name: 'lok', href: '/docs/design/services/lok' },
];

type Status =
  | { kind: 'pending' }
  | { kind: 'orkestrator'; href: string }
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
  const live = params.get('live');
  try {
    if (orkestrator) {
      return { kind: 'orkestrator', href: `orkestrator://${decodeURIComponent(orkestrator)}` };
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
      message: 'This page expects an ?orkestrator= or ?live= query parameter.',
    };
  } catch (error) {
    return { kind: 'error', message: `Could not decode the link: ${String(error)}` };
  }
}

// Ported from the Docusaurus site's /deeplink page. Two forms are supported:
//   /deeplink?orkestrator=<path>  → hands off to the orkestrator:// protocol
//   /deeplink?live=<url>          → jumps to the docs of the matching service
export function DeeplinkClient() {
  const status = resolve(useSearch());

  useEffect(() => {
    if (status.kind === 'orkestrator' || status.kind === 'live') {
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
