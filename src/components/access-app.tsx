'use client';
import { useEffect, useState, useSyncExternalStore } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Download, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

// The "access apps" are how people get into Arkitekt: Orkestrator on a
// computer, Pokket on a phone or tablet.
export type Platform = 'android' | 'ios' | 'windows' | 'mac' | 'linux' | 'unknown';

const ORKESTRATOR_RELEASES = 'https://github.com/arkitektio/orkestrator/releases/latest';
const ORKESTRATOR_RELEASES_API =
  'https://api.github.com/repos/arkitektio/orkestrator/releases/latest';
const ORKESTRATOR_DOCS = '/docs/guides/apps/orkestrator#desktop-application';

export const POKKET_APK =
  'https://github.com/arkitektio/pokket/releases/latest/download/pokket.apk';
// Pokket for iOS is handed out through TestFlight invites, so there is no
// direct download: the install section explains how to get one.
export const POKKET_INSTALL = '/docs/guides/apps/pokket#install';

// Asset names carry the version (orkestrator-2.18.0.dmg), so there is no
// stable /releases/latest/download/ URL: match the installer per platform.
const installers = {
  windows: { label: 'Windows', match: /\.exe$/i },
  mac: { label: 'macOS', match: /\.dmg$/i },
  linux: { label: 'Linux', match: /\.AppImage$/i },
} as const;

type Desktop = keyof typeof installers;

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  // Android user agents also say "Linux", and iPadOS poses as a Mac.
  if (/android/i.test(ua)) return 'android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'ios';
  if (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return 'ios';
  if (/windows/i.test(ua)) return 'windows';
  if (/mac/i.test(ua)) return 'mac';
  if (/linux|x11|cros/i.test(ua)) return 'linux';
  return 'unknown';
}

const subscribe = () => () => {};

// The platform is only known in the browser: `null` during the static
// prerender and the hydration pass.
export const usePlatform = (): Platform | null =>
  useSyncExternalStore(subscribe, detectPlatform, () => null);

export const isMobile = (platform: Platform | null) =>
  platform === 'android' || platform === 'ios';

export const isDesktop = (platform: Platform | null): platform is Desktop =>
  platform !== null && platform in installers;

type Release = {
  tag_name: string;
  assets: { name: string; browser_download_url: string }[];
};

export function useOrkestratorRelease() {
  const [release, setRelease] = useState<Release | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(ORKESTRATOR_RELEASES_API, { headers: { Accept: 'application/vnd.github+json' } })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Release) => {
        if (!cancelled) setRelease(data);
      })
      // Rate limited or offline: the links keep pointing at the release page.
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const find = (match: RegExp) =>
    release?.assets.find((asset) => match.test(asset.name))?.browser_download_url;

  return { release, find, releases: ORKESTRATOR_RELEASES };
}

// Picks its text by the kind of device the reader is on. `fallback` shows
// while the device is unknown, which includes the static HTML.
export function ForDevice({
  mobile,
  desktop,
  fallback,
}: {
  mobile: ReactNode;
  desktop: ReactNode;
  fallback: ReactNode;
}) {
  const platform = usePlatform();
  if (isMobile(platform)) return <>{mobile}</>;
  if (isDesktop(platform)) return <>{desktop}</>;
  return <>{fallback}</>;
}

const primaryClass =
  'inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90';
const secondaryClass =
  'inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-5 py-2.5 text-sm font-medium transition-colors hover:border-fd-primary/50 hover:text-fd-primary';
const linkClass = 'underline underline-offset-4 hover:text-fd-primary';

// One button for the app that fits the reader's device: Pokket on a phone or
// tablet, the matching Orkestrator installer on a computer. Everything else
// stays reachable in the line below it.
export function AccessAppDownload({ className }: { className?: string }) {
  const platform = usePlatform();
  const { release, find, releases } = useOrkestratorRelease();

  let button: ReactNode;
  let note: ReactNode;

  if (platform === 'android') {
    button = (
      <a href={POKKET_APK} className={primaryClass}>
        <Download className="size-4" />
        Download Pokket for Android
      </a>
    );
    note = (
      <>
        An APK: allow installs from your browser when asked. On a computer? Get{' '}
        <Link className={linkClass} href={ORKESTRATOR_DOCS}>
          Orkestrator
        </Link>{' '}
        there.
      </>
    );
  } else if (platform === 'ios') {
    button = (
      <Link href={POKKET_INSTALL} className={primaryClass}>
        <Smartphone className="size-4" />
        How to get Pokket for iPhone
      </Link>
    );
    note = (
      <>
        Pokket for iPhone and iPad is invite-only for now. On a computer? Get{' '}
        <Link className={linkClass} href={ORKESTRATOR_DOCS}>
          Orkestrator
        </Link>{' '}
        there.
      </>
    );
  } else if (isDesktop(platform)) {
    const others = (Object.keys(installers) as Desktop[]).filter((key) => key !== platform);
    const deb = platform === 'linux' ? find(/\.deb$/i) : undefined;
    button = (
      <a href={find(installers[platform].match) ?? releases} className={primaryClass}>
        <Download className="size-4" />
        Download Orkestrator for {installers[platform].label}
      </a>
    );
    note = (
      <>
        {release && <>{release.tag_name} · </>}
        {deb && (
          <>
            <a className={linkClass} href={deb}>
              .deb
            </a>{' '}
            ·{' '}
          </>
        )}
        Also for{' '}
        {others.map((key) => (
          <span key={key}>
            <a className={linkClass} href={find(installers[key].match) ?? releases}>
              {installers[key].label}
            </a>
            {', '}
          </span>
        ))}
        or{' '}
        <Link className={linkClass} href={POKKET_INSTALL}>
          Pokket
        </Link>{' '}
        on your phone.
      </>
    );
  } else {
    button = (
      <>
        <Link href={ORKESTRATOR_DOCS} className={primaryClass}>
          <Download className="size-4" />
          Orkestrator for desktop
        </Link>
        <Link href={POKKET_INSTALL} className={secondaryClass}>
          <Download className="size-4" />
          Pokket for mobile
        </Link>
      </>
    );
    note = <>Orkestrator runs on Windows, macOS and Linux, Pokket on Android and iOS.</>;
  }

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div className="flex flex-wrap items-center justify-center gap-2">{button}</div>
      <p className="text-xs text-fd-muted-foreground">{note}</p>
    </div>
  );
}
