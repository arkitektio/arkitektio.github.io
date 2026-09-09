// @ts-nocheck
"use client";
import { VscDebugDisconnect } from "react-icons/vsc";

import * as Popover from "@radix-ui/react-popover";
import React from "react";
import { useForm } from "react-hook-form";
import {
  CircleUserRound,
  Loader2,
  LogIn,
  LogOut,
  ServerCog,
  UserRound,
} from "lucide-react";
import { toast } from "sonner";
import { App, Guard } from "@/lib/app/App";
import { discover } from "@/lib/arkitekt/fakts/discover";
import { useMeQuery } from "@/lib/lok/api/graphql";
import { BrandColorControls } from "@/components/site";
import { cn } from "@/lib/utils";

/** The default coordination server sign-in targets unless told otherwise. */
export const DEFAULT_COORDINATION_URL = "https://go.arkitekt.live";

/**
 * Shared discover→connect logic. Exposes the in-flight/error state so it can
 * back both the one-click default sign-in and the "another server" sheet.
 */
const useConnectToServer = () => {
  const connect = App.useConnect();
  const [error, setError] = React.useState<string | null>(null);
  const [connecting, setConnecting] = React.useState(false);

  const connectTo = React.useCallback(
    (url: string) => {
      setError(null);
      setConnecting(true);
      const controller = new AbortController();
      return discover({ url, timeout: 2000, controller })
        .then((endpoint) => connect({ endpoint, controller }))
        .catch((e) => {
          setError(e.message);
          throw e;
        })
        .finally(() => setConnecting(false));
    },
    [connect]
  );

  return { connectTo, connecting, error, setError };
};
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const NoHerre = () => {
  const fakts = App.useFakts();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Connection"
          className="size-7 cursor-pointer text-fd-muted-foreground"
        >
          <VscDebugDisconnect className="size-4" />
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={8}
          className="z-50 w-56 rounded-md border border-border bg-popover p-3 text-sm text-popover-foreground shadow-md focus:outline-none"
        >
          <p className="text-muted-foreground">Connected to</p>
          <p className="font-medium">{fakts?.self?.deployment_name}</p>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const ShowMe = () => {
  const { data } = useMeQuery();
  const logout = App.useDisconnect();
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Account"
          className="size-7 cursor-pointer text-fd-muted-foreground"
        >
          <UserRound className="size-4" />
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={8}
          className="z-50 w-56 rounded-md border border-border bg-popover p-1 text-sm text-popover-foreground shadow-md focus:outline-none"
        >
          {data?.me && (
            <div className="px-3 py-2">
              <p className="font-medium">Hi {data.me.username}!</p>
              <p className="text-xs text-muted-foreground">
                {data.me.firstName} {data.me.lastName}
              </p>
            </div>
          )}
          {data?.me && (
            <div className="p-1">
              <Button
                variant="ghost"
                size="sm"
                className="w-full cursor-pointer justify-start"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </div>
          )}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

/**
 * The "connect to a server" sheet. The trigger is supplied by the caller so the
 * same discover→connect flow can back both the compact sidebar icon and the
 * labelled top-nav button.
 */
export const ConnectSheet = ({
  trigger,
  open,
  onOpenChange,
  defaultOpen,
}: {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}) => {
  const { connectTo, connecting, error: introspectError } = useConnectToServer();

  const form = useForm({
    defaultValues: {
      url: DEFAULT_COORDINATION_URL,
    },
  });

  const handleConnect = (formData: { url: string }) => {
    // Errors are surfaced inline below, so swallow the rejection here.
    connectTo(formData.url).catch(() => {});
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      {trigger ? <SheetTrigger asChild>{trigger}</SheetTrigger> : null}
      <SheetContent className="flex flex-col gap-6">
        <SheetHeader>
          <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ServerCog className="size-5" />
          </div>
          <SheetTitle>Connect to your server</SheetTitle>
          <SheetDescription>
            Enter the URL of your Arkitekt server to connect and sign in.
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={form.handleSubmit(handleConnect)}
          className="flex flex-col gap-4"
        >
          {introspectError && (
            <div className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
              <p className="font-medium">Could not connect to the server</p>
              <p className="mt-1 break-words text-xs opacity-90">
                {introspectError}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label
              htmlFor="server-url"
              className="text-sm font-medium text-foreground"
            >
              Server URL
            </label>
            <Input
              id="server-url"
              {...form.register("url")}
              type="text"
              autoFocus
              placeholder="https://go.arkitekt.live"
            />
            <p className="text-xs text-muted-foreground">
              For example your local instance or the public demo.
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={connecting}>
            {connecting && <Loader2 className="size-4 animate-spin" />}
            {connecting ? "Connecting…" : "Connect"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

/** Compact login icon used in the docs sidebar control row. */
export const NotConnected = () => (
  <ConnectSheet
    trigger={
      <Button
        variant="ghost"
        size="icon"
        aria-label="Login"
        className="size-7 cursor-pointer text-fd-muted-foreground"
      >
        <LogIn className="size-4" />
      </Button>
    }
  />
);

export const Connector = (props) => {
  return (
    <App.Guard notConnectedFallback={<NotConnected />}>
      <Guard.Lok>
        <ShowMe />
      </Guard.Lok>
    </App.Guard>
  );
};

/* -------------------------------------------------------------------------- */
/*  Top-nav variants: a proper labelled "Sign in" button and a user avatar.   */
/* -------------------------------------------------------------------------- */

/** Two-letter initials from the best name we have, for the avatar fallback. */
const initialsFor = (me: {
  firstName?: string | null;
  lastName?: string | null;
  username?: string | null;
}) => {
  const first = me.firstName?.trim();
  const last = me.lastName?.trim();
  if (first && last) return (first[0] + last[0]).toUpperCase();
  const base = first || me.username || "?";
  return base.slice(0, 2).toUpperCase();
};

/** Thin divider used between sections of the account popover. */
const MenuDivider = () => <div className="-mx-2 my-2 h-px bg-border" />;

/** Shared popover chrome so the signed-in / signed-out menus line up exactly. */
const menuContentClass =
  "z-50 w-72 rounded-xl border border-border bg-popover p-3 text-sm text-popover-foreground shadow-lg focus:outline-none";

/**
 * Signed-out account popover: sign in with the default coordination server,
 * sign in with another one, and tweak the brand colour. All in one place.
 */
export const NotConnectedNav = () => {
  const { connectTo, connecting } = useConnectToServer();
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const defaultHost = DEFAULT_COORDINATION_URL.replace(/^https?:\/\//, "");

  const signInDefault = () => {
    connectTo(DEFAULT_COORDINATION_URL).catch((e) => {
      toast.error("Couldn't reach the default server", {
        description:
          e?.message ?? "Try signing in with another server instead.",
      });
    });
  };

  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Account"
            title="Sign in"
            className="size-7 cursor-pointer text-fd-muted-foreground"
          >
            {connecting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <CircleUserRound className="size-[1.05rem]" />
            )}
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align="end"
            sideOffset={8}
            className={menuContentClass}
          >
            <div className="px-1 pb-1">
              <p className="font-medium">Sign in to Arkitekt</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Connect to a server to reach your data and apps.
              </p>
            </div>

            <Button
              className="mt-2 h-auto w-full cursor-pointer justify-start gap-3 px-3 py-2.5"
              disabled={connecting}
              onClick={signInDefault}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15">
                {connecting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <LogIn className="size-4" />
                )}
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-sm font-medium">
                  {connecting ? "Connecting…" : "Sign in"}
                </span>
                <span className="text-[11px] font-normal text-primary-foreground/70">
                  via {defaultHost}
                </span>
              </span>
            </Button>

            <Popover.Close asChild>
              <button
                type="button"
                onClick={() => setSheetOpen(true)}
                className="mt-2 flex w-full cursor-pointer items-center justify-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <ServerCog className="size-3.5" />
                Use another server
              </button>
            </Popover.Close>

            <MenuDivider />
            <BrandColorControls />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      {/* Controlled so it survives the popover closing when opened. */}
      <ConnectSheet open={sheetOpen} onOpenChange={setSheetOpen} />
    </>
  );
};

/** Round avatar (image → initials) shared by the trigger and the menu header. */
const Avatar = ({
  me,
  url,
  name,
  className,
}: {
  me: { firstName?: string | null; lastName?: string | null; username?: string | null } | null;
  url: string | null;
  name: string;
  className: string;
}) => {
  // Fall back to initials (or a generic icon) if there's no avatar URL or the
  // image fails to load. A broken <img> should never leak into the UI.
  const [broken, setBroken] = React.useState(false);
  React.useEffect(() => setBroken(false), [url]);
  const showImage = Boolean(url) && !broken;

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 font-semibold text-primary ring-1 ring-inset ring-border",
        className,
      )}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url as string}
          alt={name}
          className="size-full object-cover"
          onError={() => setBroken(true)}
        />
      ) : me ? (
        initialsFor(me)
      ) : (
        <UserRound className="size-[55%]" />
      )}
    </span>
  );
};

/**
 * Signed-in account popover: who you are, the brand colour, and sign out. It is
 * the mirror of {@link NotConnectedNav}, keyed off the avatar.
 */
export const ShowMeNav = () => {
  const { data } = useMeQuery();
  const logout = App.useDisconnect();
  const me = data?.me ?? null;
  const avatarUrl = me?.profile?.avatar?.presignedUrl ?? me?.avatar ?? null;
  const displayName =
    [me?.firstName, me?.lastName].filter(Boolean).join(" ") ||
    me?.username ||
    "";

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-label="Account"
          className="cursor-pointer rounded-full outline-none ring-offset-2 ring-offset-background transition-shadow focus-visible:ring-2 focus-visible:ring-primary [&>span]:hover:ring-primary/40"
        >
          <Avatar
            me={me}
            url={avatarUrl}
            name={displayName}
            className="size-7 text-[11px] transition-shadow"
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="end" sideOffset={8} className={menuContentClass}>
          <div className="flex items-center gap-3 px-1">
            <Avatar
              me={me}
              url={avatarUrl}
              name={displayName}
              className="size-10 text-sm"
            />
            <div className="min-w-0">
              <p className="truncate font-medium">
                {displayName || me?.username || "Signed in"}
              </p>
              {me?.email && (
                <p className="truncate text-xs text-muted-foreground">
                  {me.email}
                </p>
              )}
            </div>
          </div>

          <MenuDivider />
          <BrandColorControls />

          <MenuDivider />
          <Button
            variant="ghost"
            size="sm"
            className="w-full cursor-pointer justify-start gap-2 text-muted-foreground"
            onClick={() => logout()}
          >
            <LogOut className="size-4" />
            Sign out
          </Button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

/** Top-nav connector: labelled sign-in button, avatar menu once signed in. */
export const NavConnector = (props) => {
  return (
    <App.Guard notConnectedFallback={<NotConnectedNav />}>
      <Guard.Lok>
        <ShowMeNav />
      </Guard.Lok>
    </App.Guard>
  );
};
