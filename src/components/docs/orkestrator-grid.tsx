// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsWindows } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux } from "react-icons/fa";

const RELEASES = "https://github.com/arkitektio/orkestrator/releases/latest";
const RELEASES_API =
  "https://api.github.com/repos/arkitektio/orkestrator/releases/latest";

// Asset names carry the version (orkestrator-2.18.0.dmg), so there is no
// stable /releases/latest/download/ URL: match the installer per platform.
const PLATFORMS = [
  { key: "linux", label: "Linux", Icon: FaLinux, match: /\.AppImage$/i },
  { key: "windows", label: "Windows", Icon: BsWindows, match: /\.exe$/i },
  { key: "mac", label: "Mac", Icon: FaApple, match: /\.dmg$/i },
];

const POKKET_APK =
  "https://github.com/arkitektio/pokket/releases/latest/download/pokket.apk";
const POKKET_IOS = "/docs/use/guides/apps/pokket#install";

const tile =
  "bg-primary-300 rounded-sm px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto";

export const OrkestratorGrid = ({ children }) => {
  const [release, setRelease] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(RELEASES_API, { headers: { Accept: "application/vnd.github+json" } })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (!cancelled) setRelease(data);
      })
      // Rate limited or offline: the tiles keep pointing at the release page.
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const assets = release?.assets ?? [];
  const find = (match) =>
    assets.find((a) => match.test(a.name))?.browser_download_url;
  const deb = find(/\.deb$/i);

  return (
    <div className="mb-3">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        {PLATFORMS.map(({ key, label, Icon, match }) => {
          const url = find(match);
          return (
            <a
              key={key}
              href={url ?? RELEASES}
              target={url ? undefined : "_blank"}
              className={tile}
            >
              <div className="my-auto mr-2">
                <Icon size={"3em"} />
              </div>{" "}
              <div className="my-auto">{label}</div>
            </a>
          );
        })}
      </div>
      <div className="mt-2 text-sm text-fd-muted-foreground">
        {release ? (
          <>
            Latest release: <a href={RELEASES}>{release.tag_name}</a>
            {deb && (
              <>
                {" "}
                · also as a <a href={deb}>.deb package</a>
              </>
            )}
          </>
        ) : (
          <>
            All downloads are on the <a href={RELEASES}>release page</a>.
          </>
        )}
      </div>
      <div className="mt-4 rounded-lg border border-dashed border-fd-border p-3">
        <div className="mb-2 text-sm">
          <span className="mr-2 rounded bg-amber-500/20 px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            Experimental
          </span>
          <Link href="/docs/use/guides/apps/pokket">Pokket</Link>, the mobile
          companion app
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a href={POKKET_APK} className={tile}>
            <div className="my-auto mr-2">
              <FaAndroid size={"2em"} />
            </div>{" "}
            <div className="my-auto">Android (APK)</div>
          </a>
          <Link href={POKKET_IOS} className={tile}>
            <div className="my-auto mr-2">
              <FaApple size={"2em"} />
            </div>{" "}
            <div className="my-auto">iPhone / iPad (TestFlight)</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
