// @ts-nocheck
import type { GraphQLFormattedError } from "graphql";

/**
 * Deciding whether a failed operation is worth a forced token refresh and one
 * retry.
 *
 * authentikate >= 3.1 answers with a machine-readable `extensions.code`:
 *
 *     {"message": "The access token has expired.",
 *      "extensions": {"code": "UNAUTHENTICATED", "reason": "TOKEN_EXPIRED"}}
 *
 * Only UNAUTHENTICATED is refreshable; everything else (PERMISSION_DENIED,
 * INTERNAL_ERROR, domain errors) is left alone.
 */
const REFRESHABLE_CODE = "UNAUTHENTICATED";

/**
 * TRANSITIONAL: the auth failures of authentikate <= 3.0, which had no codes.
 * Delete this once every service is on authentikate >= 3.1.
 */
const LEGACY_REFRESHABLE_MESSAGES = [
  "token has expired",
  "token claims are invalid",
  "error decoding token",
  "error decoding token header",
  "missing kid in header",
  "no authorization header",
  "not a valid token",
];

const messageLooksRefreshable = (message: string): boolean => {
  const normalized = message.trim().toLowerCase();
  return LEGACY_REFRESHABLE_MESSAGES.some((candidate) => normalized.includes(candidate));
};

/** Whether a single GraphQL error says "re-authenticate and try again". */
export const isRefreshableAuthError = (
  error: Pick<GraphQLFormattedError, "message" | "extensions">,
): boolean => {
  const code = error.extensions?.code;

  if (typeof code === "string") {
    // A service that speaks codes is authoritative in BOTH directions.
    return code === REFRESHABLE_CODE;
  }

  return typeof error.message === "string" && messageLooksRefreshable(error.message);
};

/**
 * Whether an operation's errors warrant a forced refresh + retry.
 *
 * `graphQLErrors` is the normal HTTP path. Subscription errors come up the
 * `GraphQLWsLink` branch and can arrive as a `networkError` carrying the
 * GraphQL errors on itself instead, so both shapes are checked.
 */
export const hasRefreshableAuthError = ({
  graphQLErrors,
  networkError,
}: {
  graphQLErrors?: readonly Pick<GraphQLFormattedError, "message" | "extensions">[];
  networkError?: unknown;
}): boolean => {
  if (graphQLErrors?.some(isRefreshableAuthError)) {
    return true;
  }

  if (!networkError || typeof networkError !== "object") {
    return false;
  }

  const candidates = [
    (networkError as { errors?: unknown }).errors,
    (networkError as { result?: { errors?: unknown } }).result?.errors,
  ];

  return candidates.some(
    (errors) =>
      Array.isArray(errors) &&
      errors.some(
        (error) =>
          error &&
          typeof error === "object" &&
          isRefreshableAuthError(error as GraphQLFormattedError),
      ),
  );
};
