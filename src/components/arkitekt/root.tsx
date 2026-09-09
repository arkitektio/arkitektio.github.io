'use client';
import { type ReactNode } from 'react';
import { App } from '@/lib/app/App';
import { Toaster } from '@/components/ui/sonner';

export function ArkitektRoot({ children }: { children: ReactNode }) {
  return (
    <App.Provider>
      {children}
      <Toaster />
    </App.Provider>
  );
}
