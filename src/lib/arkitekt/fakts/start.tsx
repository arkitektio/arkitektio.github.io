// @ts-nocheck
import { z } from "zod";
import { EnhancedManifest } from "../types";
import { FaktsEndpoint } from "./endpointSchema";

/**
 * The app authorization response: RFC 8628 device authorization plus fakts'
 * dynamic client registration — the `client_id` is minted here, from the
 * manifest, and is unusable until a human approves the code.
 */
export const DeviceAuthorizationSchema = z.object({
  status: z.string(),
  /** Full-entropy polling secret — never shown to the user. */
  device_code: z.string(),
  /** Short, human-transcribable code; what the configure URL carries. */
  user_code: z.string(),
  client_id: z.string(),
  token_endpoint: z.string().url(),
  verification_uri: z.string().url(),
  verification_uri_complete: z.string().url(),
  expires_in: z.number(),
  interval: z.number(),
});

export type DeviceAuthorization = z.infer<typeof DeviceAuthorizationSchema>;

export const deviceAuthorization = async ({
  endpoint,
  controller,
  manifest,
  expirationTime,
}: {
  endpoint: FaktsEndpoint;
  controller: AbortController;
  manifest: EnhancedManifest;
  expirationTime?: number;
}): Promise<DeviceAuthorization> => {
  const response = await fetch(endpoint.device_authorization_endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      manifest,
      expiration_time_seconds: expirationTime,
      // This is a website; the kind is a label on the registered client
      // (the grant is the same either way).
      requested_client_kind: "website",
    }),
    signal: controller.signal,
  });

  const json = await response.json();

  if (!response.ok || json.status !== "granted") {
    throw new Error(
      json.error || json.message || "Device authorization was refused",
    );
  }

  const parsed = DeviceAuthorizationSchema.safeParse(json);
  if (!parsed.success) {
    console.error("Malformed device authorization response", parsed.error, json);
    throw new Error("Malformed device authorization response");
  }

  return parsed.data;
};
