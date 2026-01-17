import { useContext, useMemo } from "react";
import { ArkitektContext } from "./context";
import { ArkitektContextType, Service, ServiceMap } from "./types";

export const useArkitekt = () =>
  useContext(ArkitektContext) as ArkitektContextType<any, any>;


export type IsOptional<T, K extends keyof T> = undefined extends T[K] ? true : false;


export const useService = (key: string): Service=> {
  const { connection } = useArkitekt();

  if (!connection) {
    throw new Error("Arkitekt not connected");
  }

  const service = connection.serviceMap[key];
  if (!service) {
    throw new Error(`Service ${key} not found`);
  }
  return service;
};

export const useSelfService = (key: string): Service=> {
  const { connection } = useArkitekt();

  if (!connection) {
    throw new Error("Arkitekt not connected");
  }

  const service = connection.selfService[key];
  if (!service) {
    throw new Error(`Service ${key} not found`);
  }
  return service;
};


export const useAvailableServices = () => {
  const { connection } = useArkitekt();

  if (!connection) {
    throw new Error("Arkitekt not connected");
  }

  return Object.keys(connection.serviceMap).map(key =>({key: key, definition: connection.serviceBuilderMap[key], instance: connection.serviceMap[key]}));
}

export const usePotentialService = (key: string): Service | undefined => {
  const { connection } = useArkitekt();
  const service = connection?.serviceMap?.[key];
  return service;
};

export const useToken = () => {
  return useArkitekt().connection?.token || null;
};

export const useManifest = () => {
  return useArkitekt().manifest;
}
