'use client';
import SearchDialog from './search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { type ReactNode } from 'react';
import { ArkitektRoot } from '@/components/arkitekt/root';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider search={{ SearchDialog }}>
      <ArkitektRoot>{children}</ArkitektRoot>
    </RootProvider>
  );
}
