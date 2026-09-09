// @ts-nocheck
import { AliasStorageSchema } from "../fakts/aliasStorageSchema";
import { FaktsEndpoint, FaktsEndpointSchema } from "../fakts/endpointSchema";
import { ActiveFakts, ActiveFaktsSchema, Alias } from "../fakts/faktsSchema";
import { TokenResponse, TokenResponseSchema } from "../fakts/tokenSchema";
import { GetToken } from "../types";
import { normalizeToken, refreshAccessToken, shouldRefreshToken } from "./auth";
import { TokenRotation } from "./tokenRotation";

export type AliasMap = {
  [key: string]: Alias;
};

/**
 * Everything a session needs to come back after a reload. The token is the
 * OAuth2 token response from the device-code grant (or the latest refresh),
 * and carries the `client_id` the refresh grant needs.
 */
export type StoredSession = {
  endpoint: FaktsEndpoint;
  fakts: ActiveFakts;
  token: TokenResponse;
  aliasMap: AliasMap;
};

export const STORAGE_KEYS = ["endpoint", "fakts", "token", "aliasMap"] as const;
export type StorageKey = (typeof STORAGE_KEYS)[number];

export const writeStoredSession = (session: StoredSession) => {
  localStorage.setItem("endpoint", JSON.stringify(session.endpoint));
  localStorage.setItem("fakts", JSON.stringify(session.fakts));
  localStorage.setItem("token", JSON.stringify(session.token));
  localStorage.setItem("aliasMap", JSON.stringify({ aliasMap: session.aliasMap }));
};

export const clearStoredSession = (keys: readonly StorageKey[] = STORAGE_KEYS) => {
  keys.forEach((key) => localStorage.removeItem(key));
};

export const loadStoredSession = (): StoredSession | null => {
  const faktsRaw = localStorage.getItem("fakts");
  const tokenRaw = localStorage.getItem("token");
  const endpointRaw = localStorage.getItem("endpoint");
  const aliasMapRaw = localStorage.getItem("aliasMap");

  if (!faktsRaw || !tokenRaw || !endpointRaw || !aliasMapRaw) {
    return null;
  }

  // A stored session from the previous protocol (no `client_id` on the token,
  // no `token_endpoint` on the endpoint) fails these parses, which is the
  // intended outcome: the user re-approves once under the new grant.
  return {
    endpoint: FaktsEndpointSchema.parse(JSON.parse(endpointRaw)),
    fakts: ActiveFaktsSchema.parse(JSON.parse(faktsRaw)),
    token: normalizeToken(TokenResponseSchema.parse(JSON.parse(tokenRaw))),
    aliasMap: AliasStorageSchema.parse(JSON.parse(aliasMapRaw)).aliasMap,
  };
};

/**
 * The live session plus its refresh chain.
 *
 * Lives outside React state on purpose: `getToken` is handed to every Apollo
 * client once at build time and must always see the latest token, including
 * the one a refresh just rotated in. React is told about refreshes through
 * `onRefreshed` so the visible context can follow.
 */
export class SessionStore {
  current: StoredSession | null = null;

  private readonly listeners = new Set<(session: StoredSession) => void>();
  private readonly rotation: TokenRotation;

  constructor() {
    this.rotation = new TokenRotation(() => this.refresh());
  }

  set(session: StoredSession) {
    this.current = session;
    writeStoredSession(session);
  }

  clear(keys?: readonly StorageKey[]) {
    this.current = null;
    clearStoredSession(keys);
  }

  onRefreshed(listener: (session: StoredSession) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /** Force a refresh now, regardless of how fresh the token looks. */
  forceRefresh(): Promise<TokenResponse> {
    return this.rotation.rotate({ forceRefresh: true });
  }

  private async refresh(): Promise<TokenResponse> {
    const session = this.current;
    if (!session) {
      throw new Error("No stored session available");
    }

    // Every refresh response re-renders the fakts envelope, so this is also
    // how instance/alias changes reach us without re-approval.
    const { token: nextToken, fakts: refreshedFakts } = await refreshAccessToken(
      session.endpoint.token_endpoint,
      session.token,
    );
    // No envelope on the response means the server could not re-render it,
    // not that our config went away.
    const nextFakts = refreshedFakts ?? session.fakts;

    const nextSession = { ...session, token: nextToken, fakts: nextFakts };
    this.set(nextSession);
    this.listeners.forEach((listener) => listener(nextSession));

    return nextToken;
  }

  getToken: GetToken = async (options = {}) => {
    const forceRefresh = Boolean(options.forceRefresh);

    const session = this.current;
    if (!session) {
      throw new Error("No stored session available");
    }

    // `forceRefresh` deliberately skips the freshness check: the caller is
    // here because the server rejected the token, so how fresh the clock says
    // it is tells us nothing. `isForcedInFlight` extends that to everyone
    // else — while some other client is replacing a rejected token, a "still
    // fresh" cached token is the rejected one, so join the rotation instead.
    if (!forceRefresh && !this.rotation.isForcedInFlight() && !shouldRefreshToken(session.token)) {
      return session.token;
    }

    return this.rotation.rotate({ forceRefresh });
  };
}
