import { AutoConfiguration, EasyProvider } from "@jhnnsrs/arkitekt";
import { UnkoverProvider } from "@jhnnsrs/unkover";
import React from "react";
// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <EasyProvider
      manifest={{ identifier: "github.io.jhnnsrs.doks", version: "latest" }}
    >
      <AutoConfiguration wellKnownEndpoints={["localhost:8000"]} />
      <UnkoverProvider>{children}</UnkoverProvider>
    </EasyProvider>
  );
}
