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
  const url = `${endpoint.base_url}configure/?device_code=${code}&grant=device_code`;

  const win = window.open(url, "Fakts Grant");

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
