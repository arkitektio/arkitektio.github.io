// @ts-nocheck
import { EnhancedManifest } from "../types";
import { FaktsEndpoint } from "./endpointSchema";
import { GrantResult, pollToken } from "./pollToken";
import { popOutWindowOpen } from "./popout";
import { deviceAuthorization } from "./start";

/**
 * The canonical fakts grant: register + stage a device code, let a human
 * approve it, then poll the OAuth2 token endpoint once. Tokens and the
 * rendered service instances come back together in that single response —
 * there is no separate claim or client_credentials trip any more.
 */
export const flow = async ({
  endpoint,
  controller,
  manifest,
  expirationTime,
}: {
  endpoint: FaktsEndpoint;
  controller: AbortController;
  manifest: EnhancedManifest;
  expirationTime?: number;
}): Promise<GrantResult> => {
  // 1. Device authorization (also dynamically registers our public client)
  const authorization = await deviceAuthorization({
    endpoint,
    controller,
    manifest,
    expirationTime,
  });

  // 2. Open the configure page for the human
  const handle = await popOutWindowOpen(authorization.verification_uri_complete);

  // 3. Poll the token endpoint until approved → tokens + instances
  try {
    return await pollToken({
      tokenEndpoint: authorization.token_endpoint,
      deviceCode: authorization.device_code,
      clientId: authorization.client_id,
      controller,
      interval: authorization.interval,
      expiresIn: authorization.expires_in,
    });
  } finally {
    await handle?.close();
  }
};
