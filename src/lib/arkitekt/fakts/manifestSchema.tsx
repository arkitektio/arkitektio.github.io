import { z } from "zod";

export const RequirementSchema = z.object({
  key: z.string(),
  service: z.string(),
  optional: z.boolean().optional(),
});

export const ManifestSchema = z.object({
  version: z.string(),
  identifier: z.string(),
  scopes: z.array(z.string()),
  logo: z.string().url().optional(),
  requirements: z.array(RequirementSchema),
});

export type Manifest = z.infer<typeof ManifestSchema>;
export type Requirement = z.infer<typeof RequirementSchema>;
