// @ts-nocheck
import { z } from "zod";

/**
 * The `.well-known/fakts` document (protocol 2).
 *
 * The three endpoint fields the flow actually runs on are required: a
 * deployment that still speaks the pre-OAuth protocol (start → challenge →
 * claim) has none of them and fails discovery here, loudly, instead of
 * half-working later.
 */
export const FaktsEndpointSchema = z.object({
  name: z.string(),
  version: z.string(),
  protocol_version: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  base_url: z.string().url(),
  /** Deprecated server-side in favour of `configure`, but still sent. */
  frontend_url: z.string().url().optional().nullable(),

  /** Configure-page template; the literal `{code}` is substituted by the server. */
  configure: z.string().url(),
  /** RFC 8628 device authorization + dynamic client registration. */
  device_authorization_endpoint: z.string().url(),
  /** The OAuth2 token endpoint: device-code poll, then refresh. */
  token_endpoint: z.string().url(),

  issuer: z.string().optional().nullable(),
  jwks_uri: z.string().url().optional().nullable(),
  grant_types_supported: z.array(z.string()).optional(),
  token_endpoint_auth_methods_supported: z.array(z.string()).optional(),
  ca_crt: z.string().optional().nullable(),
});

export type FaktsEndpoint = z.infer<typeof FaktsEndpointSchema>;
