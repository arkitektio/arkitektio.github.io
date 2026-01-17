import { FaktsEndpoint } from "./endpointSchema";

export interface Closable {
  close: () => Promise<void>;
}

export const popOutWindowOpen = async ({
  endpoint,
  code,
}: {
  endpoint: FaktsEndpoint;
  code: string;
}): Promise<Closable> => {
  const url = `${endpoint.frontend_url}configure/${code}`;

  const win = window.api
    ? window.api.startFakts(url)
    : window.open(url, "Fakts Grant", "width=600,height=600");

  if (!win) throw new Error("Could not open window");

  return {
    close: async () => {
      try {
        win.close?.();
      } catch (e) {
        console.error("Window close failed", e);
      }
    },
  };
};
