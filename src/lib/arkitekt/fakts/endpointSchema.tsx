import { z } from "zod";

export const FaktsEndpointSchema = z.object({
  name: z.string(),
  version: z.string(),
  description: z.string(),
  claim: z.string().url(),
  base_url: z.string().url(),
  frontend_url: z.string().url(),
  ca_crt: z.string().optional().nullable(), // PEM-encoded certificate as plain string
});

export type FaktsEndpoint = z.infer<typeof FaktsEndpointSchema>;
