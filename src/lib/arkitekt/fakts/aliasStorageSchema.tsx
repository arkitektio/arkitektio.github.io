import { z } from "zod";
import { AliasSchema } from "./faktsSchema";

export const AliasStorageSchema = z.object({
  aliasMap: z.record(z.string(), AliasSchema)
});

export type AliasStorage = z.infer<typeof AliasStorageSchema>;
