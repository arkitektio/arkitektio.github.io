import { AutoConfiguration, EasyProvider } from "@jhnnsrs/arkitekt";
import { UnkoverProvider } from "@jhnnsrs/unkover";
import React from "react";
// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <EasyProvider
      manifest={{ identifier: "github.io.jhnnsrs.doks", version: "latest", scopes: ["openid"] }}
    >
      <AutoConfiguration wellKnownEndpoints={["localhost:8000", "localhost:8010", "localhost:8030", "localhost:11000"]} />
      <UnkoverProvider>{children}</UnkoverProvider>
    </EasyProvider>
  );
}
