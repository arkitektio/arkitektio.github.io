import { z } from "zod";

// Alias type
export const AliasSchema = z.object({
  port: z.number().optional().nullable(),
  host: z.string(),
  ssl: z.boolean(),
  path: z.string().optional().nullable(),
  challenge: z.string(),
});

// Instance type
export const InstanceSchema = z.object({
  identifier: z.string(),
  service: z.string(),
  aliases: z.array(AliasSchema),
});

// AuthFakt type
export const AuthFaktSchema = z.object({
  client_id: z.string(),
  client_secret: z.string(),
  token_url: z.string().url(),
});

// SelfFakt type
export const SelfFaktSchema = z.object({
  deployment_name: z.string(),
});

// ActiveFakts type
export const ActiveFaktsSchema = z.object({
  instances: z.record(z.string(), InstanceSchema),
  auth: AuthFaktSchema,
  self: SelfFaktSchema,
});

// ClaimAnswer type
export const ClaimAnswerSchema = z.object({
  config: ActiveFaktsSchema.optional(),
  status: z.enum(["granted", "error"]),
});

// Generate types from schemas
export type Alias = z.infer<typeof AliasSchema>;
export type Instance = z.infer<typeof InstanceSchema>;
export type AuthFakt = z.infer<typeof AuthFaktSchema>;
export type SelfFakt = z.infer<typeof SelfFaktSchema>;
export type ActiveFakts = z.infer<typeof ActiveFaktsSchema>;
export type ClaimAnswer = z.infer<typeof ClaimAnswerSchema>;
