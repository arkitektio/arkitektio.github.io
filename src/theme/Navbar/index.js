import { Connector } from "@site/src/components/Connector";
import NavbarContent from "@theme/Navbar/Content";
import NavbarLayout from "@theme/Navbar/Layout";
import React from "react";
import connect from "./connect.png";

console.log(connect);

export default function Navbar() {
  return (
    <NavbarLayout>
      <NavbarContent />

      <div className="relative my-auto">
        <Connector />
      </div>
    </NavbarLayout>
  );
}
