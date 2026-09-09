// @ts-nocheck
export interface Closable {
  close: () => Promise<void>;
}

/**
 * Open the deployment's configure page so a human can approve the device code.
 * The URL is `verification_uri_complete` straight from the authorization
 * response — the server builds it from its own configure template, so a
 * deployment can relocate the page without us knowing.
 */
export const popOutWindowOpen = async (
  verificationUri: string,
): Promise<Closable> => {
  const win = window.open(verificationUri, "Fakts Grant", "width=600,height=600");

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
