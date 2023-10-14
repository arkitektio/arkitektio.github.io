import { FaktsGuard } from "@jhnnsrs/fakts";
import { HerreGuard } from "@jhnnsrs/herre";
import { MikroGuard } from "@jhnnsrs/mikro";
import { NoFakts } from "./NoFakts";
import { NoHerre } from "./NoHerre";
import { NoMikro } from "./NoMikro";
import React, { ReactNode } from "react";

export const Fallback = () => {
  return <>Please connect to your Server first to use this Feature</>;
};

export const AllGuarded = ({ children }: { children: React.ReactNode }) => {
  return (
    <FaktsGuard fallback={<Fallback />}>
      <HerreGuard fallback={<Fallback />}>
        <MikroGuard fallback={<Fallback />}>{children}</MikroGuard>
      </HerreGuard>
    </FaktsGuard>
  );
};
