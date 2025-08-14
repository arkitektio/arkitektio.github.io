import {
  ApolloClient,
  NormalizedCache,
  NormalizedCacheObject,
} from "@apollo/client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { resolveWorkingAlias } from "./alias/resolve";
import { FaktsEndpoint } from "./fakts/endpointSchema";
import {
  ActiveFakts,
  ActiveFaktsSchema,
  Alias,
  Instance,
} from "./fakts/faktsSchema";
import { flow } from "./fakts/flow";
import { Manifest, Requirement } from "./fakts/manifestSchema";
import { TokenResponse, TokenResponseSchema } from "./fakts/tokenSchema";
import { login } from "./oauth/login";
import React from "react";

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

export type BaseService = {
  alias: Alias;
};

export type WardBearingService = BaseService & {
  ward: any;
};

export type ApolloService = BaseService &
  WardBearingService & {
    type: "apollo";
    client: ApolloClient<NormalizedCacheObject>;
  };

export type GenericService = BaseService & {
  type: "generic";
  [key: string]: any;
};

export type Service = ApolloService | GenericService;

export type ServiceBuilder = (options: {
  manifest: Manifest;
  instance: Instance;
  alias: Alias;
  fakts: ActiveFakts;
  token: Token;
}) => Promise<Service>;

export type ServiceDefinition = {
  builder: ServiceBuilder;
  key: string;
  service: string;
  requirements?: Requirement[];
  optional: boolean;
  logo: () => React.ReactNode;
  description?: string;
  name: string;
};

export type ServiceBuilderMap = {
  [key: string]: ServiceDefinition;
};

export type ServiceMap = {
  [key: string]: Service;
};

export type Token = string;

export type AppContext = {
  manifest: Manifest;
  connection?: ConnectedContext;
};

export type AppFunctions = {
  connect: ConnectFunction;
  disconnect: DisconnectFunction;
  reconnect: () => Promise<void>;
  connecting?: boolean;
};

export type ConnectedContext = {
  fakts: ActiveFakts;
  clients: ServiceMap;
  token: Token;
  availableServices: AvailableService[];
  unresolvedServices?: UnresolvedService[];
};

export type ConnectFunction = (options: {
  endpoint: FaktsEndpoint;
  controller: AbortController;
}) => Promise<AppContext>;

export type DisconnectFunction = () => Promise<void>;

export const ArkitektContext = createContext<AppContext & AppFunctions>({
  manifest: undefined as unknown as Manifest,
  connect: async () => {
    throw new Error("No provider");
  },
  disconnect: async () => {
    throw new Error("No provider");
  },
  reconnect: async () => {
    throw new Error("No provider");
  },
  // Default values
  connection: undefined,
  connecting: false,
});
export const useArkitekt = () => useContext(ArkitektContext);

export const useService = (key: string) => {
  const { connection } = useArkitekt();

  if (!connection) {
    throw new Error("Arkitekt not connected");
  }

  if (!connection.clients[key]) {
    throw new Error(`Service ${key} not available`);
  }

  return connection?.clients[key];
};

export const usePotentialService = (key: string) => {
  const { connection } = useArkitekt();

  return connection?.clients[key];
};

export const useToken = () => {
  return useArkitekt().connection?.token || null;
};

export const buildContext = async ({
  fakts,
  manifest,
  serviceBuilderMap,
  token,
  controller,
}: {
  fakts: ActiveFakts;
  manifest: Manifest;
  serviceBuilderMap: ServiceBuilderMap;
  token: Token;
  controller: AbortController;
}): Promise<ConnectedContext> => {
  const clients: { [key: string]: Service } = {};

  console.log("Building clients for", fakts);

  const availableServices = [] as AvailableService[];
  const unresolvedServices = [] as UnresolvedService[];

  const servicePromises = Object.entries(serviceBuilderMap).map(
    async ([key, definition]) => {
      try {
        if (!definition.builder) {
          throw new Error(`No builder defined for service ${key}`);
        }

        if (!definition.service) {
          throw new Error(`No service defined for service ${key}`);
        }

        const serviceInstance = fakts.instances[key];
        if (!serviceInstance) {
          throw new Error(`No instance found for service ${key}`);
        }

        const alias = await resolveWorkingAlias({
          instance: serviceInstance,
          timeout: 1000,
          controller,
        });

        const client = await definition.builder({
          manifest,
          alias,
          token,
          fakts,
          instance: serviceInstance,
        });

        return {
          key,
          client,
          availableService: {
            key,
            service: definition.service,
            resolved: alias,
          },
        };
      } catch (e) {
        console.error(`Failed to build client for ${key}`, e);
        if (!definition.optional) {
          throw e;
        } else {
          console.warn(`Service ${key} is optional, skipping...`);
          return {
            key,
            unresolvedService: {
              key,
              service: definition.service,
              aliases: fakts.instances[key]?.aliases,
            },
          };
        }
      }
    }
  );

  const results = await Promise.allSettled(servicePromises);

  for (const result of results) {
    if (result.status === "fulfilled" && result.value) {
      const { key, client, availableService, unresolvedService } = result.value;

      if (client && availableService) {
        clients[key] = client;
        availableServices.push(availableService);
      } else if (unresolvedService) {
        unresolvedServices.push(unresolvedService);
      }
    } else if (result.status === "rejected") {
      console.error("Service build failed:", result.reason);
      // Re-throw if it's a non-optional service that failed
      const failedKey = Object.keys(serviceBuilderMap).find(
        (key) => serviceBuilderMap[key] && !serviceBuilderMap[key].optional
      );
      if (failedKey) {
        throw result.reason;
      }
    }
  }

  return {
    clients,
    fakts: fakts,
    availableServices: availableServices,
    unresolvedServices:
      unresolvedServices.length > 0 ? unresolvedServices : undefined,
    token: token,
  };
};

export const ArkitektProvider = ({
  children,
  manifest,
  serviceBuilderMap,
}: {
  children: ReactNode;
  manifest: Manifest;
  serviceBuilderMap: ServiceBuilderMap;
}) => {
  const [context, setContext] = useState<AppContext>({
    manifest: manifest,
    connection: undefined,
  });
  const [connecting, setConnecting] = useState(false);

  const connectingRef = useRef<boolean>(false);

  const connect = async (options: {
    endpoint: FaktsEndpoint;
    controller: AbortController;
  }): Promise<Omit<AppContext, "connect">> => {
    // Build Manifest
    localStorage.setItem("endpoint", JSON.stringify(options.endpoint));

    const fakts = await flow({
      endpoint: options.endpoint,
      controller: options.controller,
      manifest: manifest,
    });

    // Save fakts to local storage
    localStorage.setItem("fakts", JSON.stringify(fakts));

    const token = await login(fakts.auth);

    localStorage.setItem("token", JSON.stringify(token));

    setConnecting(true);

    const connectedContext = await buildContext({
      fakts,
      manifest,
      serviceBuilderMap,
      token: token.access_token,
      controller: options.controller,
    });

    setContext((context) => ({
      ...context,
      manifest: manifest,
      connection: connectedContext,
    }));

    setConnecting(false);

    return {
      ...context,
      manifest: manifest,
      connection: connectedContext,
    };
  };

  const disconnect = async () => {
    setContext((context) => ({
      ...context,
      connection: undefined,
    }));
    localStorage.removeItem("fakts");
    localStorage.removeItem("token");
  };

  const handler = async (e: KeyboardEvent) => {
    const isReloadKey =
      e.key === "F5" || (e.key === "r" && (e.ctrlKey || e.metaKey));

    if (isReloadKey) {
      e.preventDefault(); // prevent default reload
      console.log("Reloading Arkitekt context...");

      if (context.connection) {
        for (const key in context.connection.clients) {
          const client = context.connection.clients[key];
          console.log(`Clearing store for client: ${key}`, client);
          if (client instanceof ApolloClient) {
            await client.clearStore(); // stops the Apollo clien
            await client.resetStore();
          }
        }
      }
    }
  };

  useEffect(() => {
    const handler = async (e: KeyboardEvent) => {
      const isReloadKey = e.key === "x" && (e.ctrlKey || e.metaKey);

      if (isReloadKey) {
        e.preventDefault(); // prevent default reload
        console.log("Reloading Arkitekt context...");

        if (context.connection) {
          for (const key in context.connection.clients) {
            const service = context.connection.clients[key];
            console.log(`Clearing service: ${key}`, service);
            if (service.client instanceof ApolloClient) {
              console.log(`Clearing store for apollo: ${key}`);
              await service.client.clearStore(); // stops the Apollo clien
              await service.client.resetStore();
            }
          }
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [context.connection]);

  const reconnect = async () => {
    const oldEndpoint = localStorage.getItem("endpoint");
    if (!oldEndpoint) {
      throw new Error("No endpoint found in local storage");
    }
    const endpoint: FaktsEndpoint = JSON.parse(oldEndpoint);
    const options = { controller: new AbortController(), endpoint: endpoint };

    await connect({ ...options, endpoint });
  };

  const tryReconnect = async (manifest, serviceBuilderMap) => {
    const faktsRaw = localStorage.getItem("fakts");
    const tokenRaw = localStorage.getItem("token");

    if (!faktsRaw || !tokenRaw) return;

    try {
      const fakts: ActiveFakts = ActiveFaktsSchema.parse(JSON.parse(faktsRaw));
      const token: TokenResponse = TokenResponseSchema.parse(
        JSON.parse(tokenRaw)
      );

      setConnecting(true);

      const controller = new AbortController();

      const connectedContext = await buildContext({
        fakts,
        manifest,
        serviceBuilderMap,
        token: token.access_token,
        controller,
      });

      setConnecting(false);

      setContext({
        manifest,
        connection: connectedContext,
      });
    } catch (e) {
      console.warn("Auto-login failed:", e);
      localStorage.removeItem("fakts");
      localStorage.removeItem("token");
      setConnecting(false);
    }
  };

  // 🔁 Auto-login effect on mount
  useEffect(() => {
    if (!connectingRef.current) {
      connectingRef.current = true;
      tryReconnect(manifest, serviceBuilderMap);
    }
  }, [manifest, serviceBuilderMap]);

  return (
    <ArkitektContext.Provider
      value={{ ...context, connect, disconnect, reconnect, connecting }}
    >
      {children}
    </ArkitektContext.Provider>
  );
};

export type ConnectedGuardProps = {
  notConnectedFallback?: React.ReactNode;
  connectingFallback?: React.ReactNode;
};

export const ConnectedGuard = ({
  notConnectedFallback = "Not Connected",
  connectingFallback = "Loading...",
  children,
}: ConnectedGuardProps & { children: ReactNode }) => {
  const { connection, connecting } = useArkitekt();

  if (!connection) {
    if (connecting) {
      return <>{connectingFallback}</>;
    }
    return <>{notConnectedFallback}</>;
  }

  return <>{children}</>;
};

export type ArkitektBuilderOptions = {
  manifest: Manifest;
  serviceBuilderMap: ServiceBuilderMap;
};

export const buildArkitektProvider =
  (options: ArkitektBuilderOptions) =>
  ({ children }: { children: ReactNode }) => {
    return (
      <ArkitektProvider
        manifest={options.manifest}
        serviceBuilderMap={options.serviceBuilderMap}
      >
        {children}
      </ArkitektProvider>
    );
  };
