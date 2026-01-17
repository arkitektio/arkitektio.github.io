import { FaktsEndpoint } from "./endpointSchema";

export const start = async ({
  endpoint,
  controller,
  manifest,
  expirationTime,
}: {
  endpoint: FaktsEndpoint;
  controller: AbortController;
  manifest: any;
  requestedClientType?: string;
  requestPublic?: boolean;
  expirationTime?: number;
  redirectURIs?: string[];
}): Promise<string> => {



  const response = await fetch(`${endpoint.base_url}start/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      manifest,
      expiration_time_seconds: expirationTime,
    }),
    signal: controller.signal,
  });

  const json = await response.json();

  if (!response.ok || json.status === "error" || !json.code) {
    throw new Error(json.message || "Malformed Device Code response");
  }

  return json.code;
};
