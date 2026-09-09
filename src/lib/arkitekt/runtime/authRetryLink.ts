// @ts-nocheck
import { fromPromise, type ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import type { GetToken } from "../types";
import { hasRefreshableAuthError } from "./authErrors";

/** Marks an operation as already retried, so a dead session cannot loop. */
export const RETRIED_CONTEXT_KEY = "arkitektAuthRetried";

export const isSubscriptionQuery = (query: Parameters<typeof getMainDefinition>[0]): boolean => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === "OperationDefinition" && definition.operation === "subscription"
  );
};

/**
 * Recover from a rejected token: refresh past it and retry the operation once.
 *
 * `getToken()` already refreshes when the token is near expiry, which handles
 * the ordinary case before a request is ever sent. This link is for the cases
 * the clock cannot predict — a revoked session, clock skew wider than the
 * refresh skew, or a token that aged out while the request was in flight.
 *
 * `forceRefresh` is load-bearing: the plain path returns the cached token
 * whenever it still *looks* fresh, and that is precisely the token the server
 * just rejected, so an unforced retry reproduces the failure.
 */
export const createAuthRetryLink = ({
  getToken,
  onReauthenticateSocket,
}: {
  getToken: GetToken;
  /**
   * Called before retrying a subscription. A socket carries the token it was
   * opened with, so re-auth means dropping it — see the builder.
   */
  onReauthenticateSocket?: () => void;
}): ApolloLink =>
  onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (!hasRefreshableAuthError({ graphQLErrors, networkError })) {
      return;
    }

    // Bound the retry to one attempt per operation. The flag lives on the
    // OPERATION rather than in this closure: the link is shared by every
    // operation on the client.
    if (operation.getContext()[RETRIED_CONTEXT_KEY]) {
      return;
    }
    operation.setContext({ [RETRIED_CONTEXT_KEY]: true });

    return fromPromise(
      getToken({ forceRefresh: true }).catch((e) => {
        // The refresh chain is genuinely gone. Let the original auth error
        // surface rather than masking it with this one.
        console.warn("[arkitekt] forced token refresh failed:", e);
        return null;
      }),
    ).flatMap((token) => {
      if (token && isSubscriptionQuery(operation.query)) {
        onReauthenticateSocket?.();
      }
      return forward(operation);
    });
  });
