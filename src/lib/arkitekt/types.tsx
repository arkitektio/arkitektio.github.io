import { ApolloCache } from "@apollo/client";
import { Manifest, Requirement } from "./fakts/manifestSchema";

export type WardParams = {
  client: ApolloCache<any>;
  param: string;
};

export type Ward = (params: WardParams) => Promise<void>;

export type Service = {
  key: string;
  client: ApolloCache<any>;
};

export type ServiceMap = {
  [key: string]: Service;
};

export type App<T extends ServiceMap> = {
  services: T;
  manifest: Manifest;
};
