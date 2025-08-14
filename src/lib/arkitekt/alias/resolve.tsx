import { Alias, Instance } from "../fakts/faktsSchema";
import { fetchWithTimeout } from "../utils";
import { aliasToHttpPath } from "./helpers";

export const buildChallengeUrl = (alias: Alias): string => {
  const protocol = alias.ssl ? "https" : "http";
  const port = alias.port ? `:${alias.port}` : "";
  const path = alias.path || "";
  return `${protocol}://${alias.host}${port}/${path}/.well-known/fakts-challenge`;
};

export const resolveWorkingAlias = async ({
  instance,
  timeout = 3000,
  controller,
}: {
  instance: Instance;
  timeout?: number;
  controller: AbortController;
}): Promise<Alias> => {
  for (const alias of instance.aliases) {
    try {
      const url = aliasToHttpPath(alias, alias.challenge);

      const response = await fetchWithTimeout(url, {
        timeout,
        controller,
      });

      if (response.ok) {
        return alias;
      }
    } catch (e) {
      console.warn(`Alias failed: ${alias.host}`, (e as Error).message);
      continue;
    }
  }

  throw new Error(`No working alias found for service: ${instance.identifier}`);
};
