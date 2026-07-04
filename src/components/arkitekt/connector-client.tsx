'use client';
import dynamic from 'next/dynamic';

// Client-only: the Connector touches localStorage and builds Apollo/ws clients
// on mount, so it must never run during the static prerender.
export const Connector = dynamic(
  () => import('@/components/arkitekt/connector').then((m) => m.Connector),
  { ssr: false, loading: () => null },
);

// Labelled sign-in button + avatar menu for the marketing/home top nav.
export const NavConnector = dynamic(
  () => import('@/components/arkitekt/connector').then((m) => m.NavConnector),
  { ssr: false, loading: () => null },
);
