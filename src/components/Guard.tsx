import { EasyGuard } from "@jhnnsrs/arkitekt";
import { MikroGuard } from "@jhnnsrs/mikro";
import React from "react";
import { useHerre } from "@jhnnsrs/herre";

export const Guard = (props: { children: React.ReactNode }) => {
  const { user } = useHerre();

  return (
    <>
      {!user && (
        <div className="bg-primary-300 text-white text-center p-2">
          Not connected
        </div>
      )}
      <EasyGuard
        noAppFallback={<>Not connected</>}
        loginButtonProps={{
          buildGrant: async (fakts) => {
            return {
              clientId: fakts.lok.client_id,
              clientSecret: fakts.lok.client_secret,
              scopes: fakts.lok.scopes,
              redirectUri: window.location.origin + "/callback",
            };
          },
          className: (e) =>
            "px-2  py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md " +
            (e.authenticating ? "animate-pulse" : ""),
        }}
        connectButtonProps={{
          buttonClassName: () =>
            "px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400  rounded rounded-md",
        }}
      >
        <MikroGuard>{props.children}</MikroGuard>
      </EasyGuard>
    </>
  );
};
