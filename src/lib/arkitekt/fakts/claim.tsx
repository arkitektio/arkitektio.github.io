import { ActiveFakts, ClaimAnswerSchema } from "./faktsSchema";

export const claim = async (
  endpoint: { base_url: string },
  token: string,
  controller: AbortController,
): Promise<ActiveFakts> => {
  console.log("Claiming Fakts from:", `${endpoint.base_url}claim/`);

  const response = await fetch(`${endpoint.base_url}claim/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
      secure: true,
    }),
    signal: controller.signal,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Non-200 response:", response.status, errorBody);
    throw new Error("Received non-200 when claiming Fakts from token");
  }

  const json = await response.json();

  const claim = ClaimAnswerSchema.safeParse(json);
  console.log("Claim response:", json);

  if (!claim.success) {
    console.error("Malformed Claim Answer", claim, json);
    throw new Error("Invalid structure in claim response");
  }

  if (!claim.data.config) {
    console.error("Missing config in claim response", json);
    throw new Error("No config received in claim response");
  }

  return claim.data.config;
};
