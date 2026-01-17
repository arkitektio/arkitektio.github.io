
import { ApolloClient } from "@apollo/client";
import { FaktsEndpoint } from "./fakts/endpointSchema";
import { ActiveFakts, Alias, Instance } from "./fakts/faktsSchema";
import { Manifest } from "./fakts/manifestSchema";
import { TokenResponse } from "./fakts/tokenSchema";

export type AvailableService = {
  key: string;
  service: string;
  resolved: Alias;
};

export type UnresolvedService = {
  key: string;
  service: string;
  aliases: Alias[] | undefined;
};

export type Service<T = unknown> = {
  alias?: Alias;
  client: T;
};



export type ServiceBuilder<T = unknown> = (options: {
  manifest: Manifest;
  alias: Alias;
  fakts: ActiveFakts;
  token: TokenResponse;
}) => T;


export type ServiceDefinition<T extends Service = Service> = {
  builder: ServiceBuilder<T>;
  key: string;
  service: string;
  omitchallenge?: boolean;
  forceinsecure?: boolean;
  optional: boolean;
  description?: string;
  name?: string;
  logo?: () => React.ReactNode;
};

export type ServiceBuilderMap<T extends Record<string, ServiceDefinition> = Record<string, ServiceDefinition>> = {
  [K in keyof T]: T[K];
};


export type InferedServiceMap<T extends ServiceBuilderMap> = {
  [K in keyof T]: T[K] extends ServiceDefinition<infer R> ? R : never;
};

export type AliasReport = {
  valid: boolean;
  alias_id?: string;
  reason?: string;
};

export type ReportRequest = {
  alias_reports: { [key: string]: AliasReport };
  token: string;
  functional: boolean;
};



export type EnhancedManifest = Manifest & {
  node_id: string;
};




// Context Types

export type ConnectedContext<T extends ServiceBuilderMap = ServiceBuilderMap, S extends ServiceBuilder = ServiceBuilder> = {
  fakts: ActiveFakts;
  manifest: EnhancedManifest;
  serviceMap: InferedServiceMap<T>;
  aliasMap: { [K in keyof T]: Alias };
  serviceBuilderMap: T;
  selfService: ReturnType<S>;
  token: TokenResponse;
  endpoint: FaktsEndpoint;
};

export type ConnectFunction = (options: {
  endpoint: FaktsEndpoint;
  controller: AbortController;
}) => Promise<AppContext>;

export type DisconnectFunction = () => Promise<void>;

export type AppContext<T extends ServiceBuilderMap = ServiceBuilderMap, S extends ServiceBuilder = ServiceBuilder> = {
  manifest: EnhancedManifest;
  connection?: ConnectedContext<T,S>;
  autoLoginError?: string;
};

export type AppFunctions = {
  connect: ConnectFunction;
  disconnect: DisconnectFunction;
  reconnect: () => Promise<void>;
  connecting?: boolean;
  cancelConnection: () => void;
};

export type ArkitektContextType<T extends ServiceBuilderMap, S extends ServiceBuilder> = AppContext<T, S>;
