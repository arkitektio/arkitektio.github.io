// @ts-nocheck
import { TokenResponse } from "../fakts/tokenSchema";

/** Performs the actual refresh round-trip. */
export type TokenRefresher = (options: { forceRefresh: boolean }) => Promise<TokenResponse>;

/**
 * Collapses concurrent token refreshes into one — with the single exception
 * that makes retry-after-rejection work at all.
 */
export class TokenRotation {
  private inFlight: Promise<TokenResponse> | null = null;
  /** Whether the in-flight refresh was FORCED. */
  private inFlightForced = false;

  constructor(private readonly refresher: TokenRefresher) {}

  /**
   * Whether a FORCED refresh is currently running.
   *
   * Callers that would otherwise short-circuit on "my cached token still looks
   * fresh" must consult this first: a forced refresh is running precisely
   * because the server rejected that token, so how fresh the clock says it is
   * means nothing.
   */
  isForcedInFlight(): boolean {
    return this.inFlight !== null && this.inFlightForced;
  }

  /**
   * Refresh once, however many callers ask — EXCEPT that a FORCED refresh must
   * never settle for an in-flight NON-forced one.
   *
   * A forced refresh means the server just rejected the token we hold. The
   * non-forced path is allowed to hand back the cached token, which is by
   * definition that same rejected token, so joining a raced non-forced refresh
   * would return the very credential the caller is trying to get past. It
   * chains a forced refresh after the raced one instead. Forced-into-forced
   * still coalesces — one rejection storm is one round-trip.
   */
  rotate(options: { forceRefresh?: boolean } = {}): Promise<TokenResponse> {
    const forceRefresh = Boolean(options.forceRefresh);

    if (this.inFlight) {
      if (!forceRefresh || this.inFlightForced) {
        return this.inFlight;
      }
      // Wait it out (success or failure), then run a genuinely forced one.
      return this.inFlight
        .catch(() => undefined)
        .then(() => this.rotate({ forceRefresh: true }));
    }

    const rotation = this.refresher({ forceRefresh }).finally(() => {
      if (this.inFlight === rotation) {
        this.inFlight = null;
        this.inFlightForced = false;
      }
    });

    this.inFlight = rotation;
    this.inFlightForced = forceRefresh;
    return rotation;
  }
}
