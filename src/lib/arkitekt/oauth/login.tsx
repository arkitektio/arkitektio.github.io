import { AuthFakt } from "../fakts/faktsSchema";
import { TokenResponse, TokenResponseSchema } from "../fakts/tokenSchema";

export const login = async (auth: AuthFakt): Promise<TokenResponse> => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", auth.client_id);
  params.append("client_secret", auth.client_secret);

  const response = await fetch(auth.token_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(
      `Token request failed: ${response.status} ${response.statusText}\n${JSON.stringify(json)}`,
    );
  }

  const parsed = TokenResponseSchema.parse(json);
  return parsed;
};
