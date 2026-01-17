import { EnhancedManifest } from "../provider";
import { challenge } from "./challenge";
import { claim } from "./claim";
import { FaktsEndpoint } from "./endpointSchema";
import { ActiveFakts } from "./faktsSchema";
import { popOutWindowOpen } from "./popout";
import { start } from "./start";

export const flow = async ({
  endpoint,
  controller,
  manifest,
  expirationTime,
  challengeTimeout,
  maxRetries,
}: {
  endpoint: FaktsEndpoint;
  controller: AbortController;
  manifest: EnhancedManifest;
  expirationTime?: number;
  redirectURIs?: string[];
  retrieveTimeout?: number;
  challengeTimeout?: number;
  maxRetries?: number;
}): Promise<ActiveFakts> => {
  // 1. Request device code
  const code = await start({
    endpoint,
    controller,
    manifest,
    expirationTime,
  });

  // 2. Open configuration window
  const handle = await popOutWindowOpen({ endpoint, code });

  // 3. Poll challenge endpoint for token
  let token: string;
  try {
    token = await challenge({
      endpoint,
      controller,
      code,
      challengeTimeout,
      maxRetries,
    });
  } finally {
    await handle?.close();
  }

  if (!token) {
    throw new Error("Failed to retrieve token from challenge endpoint");
  }

  // 4. Use token to claim Fakts config
  return await claim(endpoint, token, controller);
};
