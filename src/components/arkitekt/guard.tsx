// @ts-nocheck
"use client";
import React from "react";
import { App } from "@/lib/app/App";

/**
 * Renders its children only while this site is connected to an Arkitekt
 * instance. `fallback` is shown otherwise (nothing by default), so docs pages
 * can keep their headings and prose outside the guard and wrap only the
 * interactive parts.
 */
export const Guard = (props: { children: React.ReactNode; fallback?: React.ReactNode }) => {
  return (
    <App.Guard notConnectedFallback={props.fallback ?? null} connectingFallback={props.fallback ?? null}>
      {props.children}
    </App.Guard>
  );
};
