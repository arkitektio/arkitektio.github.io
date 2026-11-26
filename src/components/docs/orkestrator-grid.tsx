// @ts-nocheck
"use client";
import React from "react";
import Link from "next/link";
import { BsWindows } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux } from "react-icons/fa";
import { Download } from "lucide-react";
import { useOrkestratorRelease, usePlatform } from "@/components/access-app";
import { cn } from "@/lib/utils";

const RELEASES = "https://github.com/arkitektio/orkestrator/releases/latest";

// Asset names carry the version (orkestrator-2.18.0.dmg), so there is no
// stable /releases/latest/download/ URL: match the installer per platform.
const PLATFORMS = [
  { key: "linux", label: "Linux", kind: "AppImage", Icon: FaLinux, match: /\.AppImage$/i },
  { key: "windows", label: "Windows", kind: "Installer (.exe)", Icon: BsWindows, match: /\.exe$/i },
  { key: "mac", label: "macOS", kind: "Disk image (.dmg)", Icon: FaApple, match: /\.dmg$/i },
];

const POKKET_APK =
  "https://github.com/arkitektio/pokket/releases/latest/download/pokket.apk";
const POKKET_IOS = "/docs/guides/apps/pokket#install";

const Tile = ({ href, label, kind, Icon, yours = false, external = false }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    className={cn(
      "group relative flex items-center gap-3 rounded-xl border bg-fd-card px-4 py-3 transition-colors hover:border-fd-primary/60 hover:bg-fd-accent/50",
      yours ? "border-fd-primary/60 ring-1 ring-fd-primary/30" : "border-fd-border",
    )}
  >
    <Icon
      className={cn(
        "size-8 shrink-0 transition-colors group-hover:text-fd-primary",
        yours ? "text-fd-primary" : "text-fd-muted-foreground",
      )}
    />
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2 text-sm font-semibold text-fd-foreground">
        {label}
        {yours && (
          <span className="rounded-full bg-fd-primary/10 px-1.5 py-0.5 whitespace-nowrap text-[10px] font-medium leading-none text-fd-primary">
            Your OS
          </span>
        )}
      </div>
      <div className="truncate text-xs text-fd-muted-foreground">{kind}</div>
    </div>
    <Download className="size-4 shrink-0 text-fd-muted-foreground transition-colors group-hover:text-fd-primary" />
  </a>
);

// `pokket` adds the mobile companion below the desktop installers.
export const OrkestratorGrid = ({ pokket = false }) => {
  const { release, find } = useOrkestratorRelease();
  const platform = usePlatform();
  const deb = find(/\.deb$/i);

  return (
    <div className="not-prose mb-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {PLATFORMS.map(({ key, label, kind, Icon, match }) => {
          const url = find(match);
          return (
            <Tile
              key={key}
              href={url ?? RELEASES}
              external={!url}
              label={label}
              kind={kind}
              Icon={Icon}
              yours={platform === key}
            />
          );
        })}
      </div>
      <div className="mt-2 text-sm text-fd-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-fd-primary">
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
      {pokket && (
        <div className="mt-4 rounded-xl border border-dashed border-fd-border p-3">
          <div className="mb-3 text-sm text-fd-muted-foreground">
            <span className="mr-2 rounded bg-amber-500/20 px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
              Experimental
            </span>
            <Link href="/docs/guides/apps/pokket" className="underline underline-offset-4 hover:text-fd-primary">
              Pokket
            </Link>
            , the mobile companion app
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Tile href={POKKET_APK} label="Android" kind="APK" Icon={FaAndroid} yours={platform === "android"} />
            <Tile href={POKKET_IOS} label="iPhone / iPad" kind="TestFlight invite" Icon={FaApple} yours={platform === "ios"} />
          </div>
        </div>
      )}
    </div>
  );
};
