import { Manifest, Requirement } from "./fakts/manifestSchema";
import {
  buildArkitektProvider,
  ConnectedGuard,
  ServiceBuilderMap,
  useArkitekt,
  usePotentialService,
  useService,
} from "./provider";
import React from "react";
// When using the Tauri API npm package:

export const buildGuard =
  (key: string) =>
  (props: { children: React.ReactNode; fallback?: React.ReactNode }) => {
    const service = usePotentialService(key);

    if (!service) {
      return <div>{props.fallback || "Loading "}</div>;
    }

    return props.children;
  };

export const buildWith =
  (key: string) =>
  <T extends (options: any) => any>(func: T): T => {
    const Wrapped = (nana: any) => {
      const service = useService(key);

      return func({ ...nana, client: service.client });
    };
    return Wrapped as T;
  };

export const buildArkitekt = <T extends ServiceBuilderMap>({
  manifest,
  serviceBuilderMap,
}: {
  manifest: Manifest;
  serviceBuilderMap: T;
}) => {
  const requirements: Requirement[] = serviceBuilderMap
    ? Object.values(serviceBuilderMap).map((s) => ({
        service: s.service,
        key: s.key,
        optional: s.optional,
      }))
    : [];

  const realManifest: Manifest = {
    ...manifest,
    requirements: requirements,
  };

  return {
    Provider: buildArkitektProvider({
      manifest: realManifest,
      serviceBuilderMap,
    }),
    Guard: ConnectedGuard,
    buildServiceGuard: (key: keyof T) => {
      return buildGuard(key as string);
    },
    useConnect: () => useArkitekt().connect,
    useDisconnect: () => useArkitekt().disconnect,
    useReconnect: () => useArkitekt().reconnect,
    useManifest: () => realManifest,
    useFakts: () => useArkitekt().connection?.fakts,
    useService: (key: keyof T) => useService(key as string),
    useServices: () => useArkitekt().connection?.availableServices || [],
    useUnresolvedServices: () =>
      useArkitekt().connection?.unresolvedServices || [],
    useToken: () => useArkitekt().connection?.token || null,
  };
};
