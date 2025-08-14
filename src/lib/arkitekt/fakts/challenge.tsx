import { fetchWithTimeout } from "../utils";
import { FaktsEndpoint } from "./endpointSchema";

export const challenge = async ({
  endpoint,
  code,
  controller,
  challengeTimeout = 5000,
  maxRetries = 20,
  retry = 0,
}: {
  endpoint: FaktsEndpoint;
  code: string;
  controller: AbortController;
  challengeTimeout?: number;
  maxRetries?: number;
  retry?: number;
}): Promise<string> => {
  if (retry > maxRetries) throw new Error("Too many retries");

  try {
    const response = await fetchWithTimeout(`${endpoint.base_url}challenge/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
      timeout: challengeTimeout,
      controller,
    });

    const json = await response.json();

    if (response.ok) {
      switch (json.status) {
        case "pending":
        case "waiting":
          await new Promise((r) => setTimeout(r, 1000));
          return challenge({
            endpoint,
            code,
            controller,
            challengeTimeout,
            maxRetries,
            retry: retry + 1,
          });
        case "granted":
          return json.token;
        case "error":
          throw new Error(json.message || "Challenge failed");
        default:
          if (json.challenge) return json.challenge;
          throw new Error("Malformed response");
      }
    } else {
      await new Promise((r) => setTimeout(r, 1000));
      return challenge({
        endpoint,
        code,
        controller,
        challengeTimeout,
        maxRetries,
        retry: retry + 1,
      });
    }
  } catch (e) {
    if ((e as Error).message === "User Cancelled") throw e;
    await new Promise((r) => setTimeout(r, 1000));
    return challenge({
      endpoint,
      code,
      controller,
      challengeTimeout,
      maxRetries,
      retry: retry + 1,
    });
  }
};
