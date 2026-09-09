// @ts-nocheck
import { z } from "zod";

export const TokenResponseSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number().optional(),
  scope: z.string().optional(),
  refresh_token: z.string().optional(),
  /**
   * The public OAuth2 client minted for us at device authorization. With no
   * `auth` block left in the config, this is the only place the client
   * identity the refresh grant needs survives.
   */
  client_id: z.string(),
  received_at: z.number().optional(),
});

export type TokenResponse = z.infer<typeof TokenResponseSchema>;
