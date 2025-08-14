import { fetchWithTimeout } from "../utils";
import { FaktsEndpoint, FaktsEndpointSchema } from "./endpointSchema";

export const discover = async ({
  url,
  controller,
  timeout = 500,
}: {
  url: string;
  controller: AbortController;
  timeout?: number;
}): Promise<FaktsEndpoint> => {
  url = (url || "").trim();

  if (!url) throw new Error("No endpoint or URL provided");

  const baseUrls =
    url.startsWith("http://") || url.startsWith("https://")
      ? [url]
      : [`https://${url}`, `http://${url}`];

  const normalizedUrls = baseUrls.map((u) => (u.endsWith("/") ? u : u + "/"));

  const attempts = await Promise.allSettled(
    normalizedUrls.map(async (base) => {
      const response = await fetchWithTimeout(base + ".well-known/fakts", {
        timeout,
        controller,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch from ${base}: ${response.status}`);
      }

      const json = await response.json();
      return FaktsEndpointSchema.parse(json);
    }),
  );

  if (controller.signal.aborted) {
    console.warn("Discovery aborted by user");
    throw new Error("Discovery cancelled");
  }

  const fulfilled = attempts.find(
    (r): r is PromiseFulfilledResult<FaktsEndpoint> => r.status === "fulfilled",
  );

  if (!fulfilled) {
    console.error("No valid Fakts endpoint found", attempts);
    throw new Error(`No valid Fakts endpoint discovered at "${url}"`);
  }

  return fulfilled.value;
};
