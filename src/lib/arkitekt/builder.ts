import { resolveWorkingAlias } from "./alias/resolve";
import { ActiveFakts, Alias } from "./fakts/faktsSchema";
import {
  AliasReport,
  EnhancedManifest,
} from "./types";

export const buildAliases = async ({
  fakts,
  manifest,
  controller,
}: {
  fakts: ActiveFakts;
  manifest: EnhancedManifest;
  controller: AbortController;
}) => {
  const aliasMap: { [key: string]: Alias } = {};
  const aliasReports: { [key: string]: AliasReport } = {};
  let functional = true;

  console.log("Building clients for", fakts);

  const servicePromises = manifest.requirements.map(
    async (req) => {
      try {

        const serviceInstance = fakts.instances[req.key];
        if (!serviceInstance) {
          aliasReports[req.key] = { valid: false, reason: `Service instance not found for key: ${req.key}` };
          return;
        }

        const alias = await resolveWorkingAlias({
          instance: serviceInstance,
          timeout: 1000,
          controller,
        });


        aliasReports[req.key] = { valid: true, alias_id: alias.id };
        aliasMap[req.key] = alias;

      } catch (error) {
         if (!req.optional) {
            functional = false;
             aliasReports[req.key] = { valid: false, reason: error instanceof Error ? error.message : String(error) };
          }
          else {
            aliasReports[req.key] = { valid: true , reason: error instanceof Error ? error.message : String(error) };
          }

      }
    },
  );

  await Promise.allSettled(servicePromises);

  return {
    aliasReports: aliasReports,
    aliasMap: aliasMap,
    functional: functional,
  }
};

