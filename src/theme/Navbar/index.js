import React from "react";
import NavbarLayout from "@theme/Navbar/Layout";
import NavbarContent from "@theme/Navbar/Content";
import { NoFakts } from "@site/src/fallbacks/NoFakts";
import { Connector } from "@site/src/components/Connector";
import connect from "./connect.png";
import { FaktsGuard } from "@jhnnsrs/fakts";

console.log(connect);

export default function Navbar() {
  return (
    <NavbarLayout>
      <NavbarContent />

      <div className="relative my-auto">
        <Connector />
        <FaktsGuard
          fallback={
            <div className="absolute translate-y-[20px] w-40 translate-x-[-75%] xl:block hidden z-1">
              <img src={connect.src} alt="connect" />
            </div>
          }
        ></FaktsGuard>
      </div>
    </NavbarLayout>
  );
}
