// @ts-nocheck
import { splitRefreshResponse, type RefreshResult } from "../fakts/pollToken";
import { TokenResponse } from "../fakts/tokenSchema";

const TOKEN_REFRESH_SKEW_MS = 60_000;

export const normalizeToken = (token: TokenResponse): TokenResponse => ({
  ...token,
  received_at: token.received_at ?? Date.now(),
});

export const shouldRefreshToken = (token: TokenResponse): boolean => {
  if (!token.expires_in || !token.received_at) {
    return false;
  }

  const expiresAt = token.received_at + token.expires_in * 1000;
  return Date.now() >= expiresAt - TOKEN_REFRESH_SKEW_MS;
};

export const isAbortLikeError = (error: unknown): boolean => {
  if (!(error instanceof Error)) {
    return false;
  }

  return (
    error.message.includes("cancel") ||
    error.message.includes("Cancel") ||
    error.message.includes("aborted") ||
    error.message.includes("Abort") ||
    error.message.includes("User Cancelled")
  );
};

/**
 * Refresh as a public client: `client_id` only, no secret.
 *
 * The refresh token rotates on every use, so the returned one must always be
 * persisted. The response also carries a freshly re-rendered fakts envelope
 * (instance aliases are resolved against the requesting host), which is how
 * configuration changes reach us without a human re-approving — hence the
 * `fakts` half of the result — which is `null` when the server could not
 * render one, in which case the caller keeps the config it already has.
 */
export const refreshAccessToken = async (
  tokenEndpoint: string,
  currentToken: TokenResponse,
  controller?: AbortController,
): Promise<RefreshResult> => {
  if (!currentToken.refresh_token) {
    throw new Error("No refresh token available – cannot refresh");
  }

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: currentToken.refresh_token,
      client_id: currentToken.client_id,
    }),
    signal: controller?.signal,
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(
      `Failed to refresh token: ${response.status} ${response.statusText}\n${JSON.stringify(json)}`,
    );
  }

  return splitRefreshResponse(json);
};
