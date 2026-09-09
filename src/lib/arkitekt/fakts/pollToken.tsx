// @ts-nocheck
import { z } from "zod";
import { ActiveFakts, ActiveFaktsSchema } from "./faktsSchema";
import { TokenResponse, TokenResponseSchema } from "./tokenSchema";

export const DEVICE_CODE_GRANT_TYPE =
  "urn:ietf:params:oauth:grant-type:device_code";

/**
 * A successful token response for a fakts client: the standard OAuth2 members
 * plus the fakts envelope (`self`, `instances`, `statuses`) appended to them.
 */
export const TokenGrantResponseSchema = TokenResponseSchema.extend(
  ActiveFaktsSchema.shape,
);

export type TokenGrantResponse = z.infer<typeof TokenGrantResponseSchema>;

export type GrantResult = {
  token: TokenResponse;
  fakts: ActiveFakts;
};

/** A refresh may legitimately arrive without an envelope — see below. */
export type RefreshResult = {
  token: TokenResponse;
  fakts: ActiveFakts | null;
};

/** Split a combined token response into the pieces we store separately. */
export const splitGrantResponse = (json: unknown): GrantResult => {
  const parsed = TokenGrantResponseSchema.safeParse(json);
  if (!parsed.success) {
    console.error("Malformed token response", parsed.error, json);
    throw new Error("Malformed token response");
  }

  const { self, instances, statuses, ...token } = parsed.data;
  return {
    token: { ...token, received_at: Date.now() },
    fakts: { self, instances, statuses },
  };
};

/**
 * Same split, but tolerant of a missing envelope.
 *
 * The server appends the envelope on a best-effort basis: if rendering the
 * instances throws it logs and returns the plain token response rather than
 * failing the grant. A valid token with no envelope must therefore refresh the
 * session, not destroy it — the caller keeps its previous config and picks up a
 * re-render on the next refresh.
 */
export const splitRefreshResponse = (json: unknown): RefreshResult => {
  const withEnvelope = TokenGrantResponseSchema.safeParse(json);
  if (withEnvelope.success) {
    const { self, instances, statuses, ...token } = withEnvelope.data;
    return {
      token: { ...token, received_at: Date.now() },
      fakts: { self, instances, statuses },
    };
  }

  const parsed = TokenResponseSchema.safeParse(json);
  if (!parsed.success) {
    console.error("Malformed refresh response", parsed.error, json);
    throw new Error("Malformed refresh response");
  }

  console.warn("Refresh response carried no fakts envelope; keeping current config");
  return {
    token: { ...parsed.data, received_at: Date.now() },
    fakts: null,
  };
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Poll the OAuth2 token endpoint with the device-code grant until the human
 * approves (or declines) on the configure page.
 *
 * Note the response semantics are inverted relative to the old `/challenge/`
 * poll: "still waiting" is an HTTP 400 carrying `{"error": ...}`, so we branch
 * on the `error` member and never on `response.ok`. The loop is bounded by the
 * wall clock (`expiresIn`), not a retry count, and it honours the server's
 * `interval` — polling faster earns a `slow_down`.
 */
export const pollToken = async ({
  tokenEndpoint,
  deviceCode,
  clientId,
  controller,
  interval = 5,
  expiresIn = 300,
}: {
  tokenEndpoint: string;
  deviceCode: string;
  clientId: string;
  controller: AbortController;
  interval?: number;
  expiresIn?: number;
}): Promise<GrantResult> => {
  const deadline = Date.now() + expiresIn * 1000;
  let currentInterval = interval;

  while (Date.now() < deadline) {
    if (controller.signal.aborted) {
      throw new Error("User Cancelled");
    }

    const response = await fetch(tokenEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: DEVICE_CODE_GRANT_TYPE,
        device_code: deviceCode,
        client_id: clientId,
      }).toString(),
      signal: controller.signal,
    });

    const json = await response.json().catch(() => ({}));

    if (response.ok && !json.error) {
      // The device code is single-use — burned server-side by this response.
      // Never poll again from here; continuity is the refresh chain.
      return splitGrantResponse(json);
    }

    switch (json.error) {
      case "authorization_pending":
        break;
      case "slow_down":
        // RFC 8628 §3.5: back off by 5s and keep going.
        currentInterval += 5;
        break;
      case "access_denied":
        throw new Error("The authorization request was declined");
      case "expired_token":
        throw new Error("The authorization request expired before it was approved");
      default:
        throw new Error(
          json.error_description ||
            json.error ||
            `Token request failed: ${response.status} ${response.statusText}`,
        );
    }

    await sleep(currentInterval * 1000);
  }

  throw new Error("The authorization request expired before it was approved");
};
