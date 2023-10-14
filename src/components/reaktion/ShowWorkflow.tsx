import { EasyGuard } from "@jhnnsrs/arkitekt";
import React from "react";

export const ShowWorkflow = (props: { url: string }) => {
  return (
    <>
      <EasyGuard
        loginButtonProps={{
          buildGrant: async (fakts) => {
            return {
              clientId: fakts.lok.client_id,
              clientSecret: fakts.lok.client_secret,
              scopes: fakts.lok.scopes,
              redirectUri: window.location.origin + "/doks/callback",
            };
          },
        }}
      >
        Hallo
      </EasyGuard>
    </>
  );
};
