import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import { NoFakts } from '@site/src/fallbacks/NoFakts';
import { Connector } from '@site/src/components/Connector';
export default function Navbar() {
  return (
    <NavbarLayout>
      <NavbarContent />

      <Connector/>
    </NavbarLayout>
  );
}
