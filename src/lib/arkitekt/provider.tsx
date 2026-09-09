// @ts-nocheck
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { checkAliasHealth } from "./alias/resolve";
import { buildAliases } from "./builder";
import { ArkitektContext } from "./context";
import { FaktsEndpoint, FaktsEndpointSchema } from "./fakts/endpointSchema";
import { ActiveFakts, Alias } from "./fakts/faktsSchema";
import { flow } from "./fakts/flow";
import { Manifest } from "./fakts/manifestSchema";
import { useArkitekt } from "./hooks";
import { isAbortLikeError, normalizeToken, shouldRefreshToken } from "./runtime/auth";
import { loadStoredSession, SessionStore, StoredSession } from "./runtime/session";
import {
  AppContext,
  ConnectedContext,
  EnhancedManifest,
  GetToken,
  ReportRequest,
  Service,
  ServiceBuilder,
  ServiceBuilderMap,
  ServiceDefinition,
} from "./types";
import { enhanceManifest, report } from "./utils";


export type { AliasMap } from "./runtime/session";

export type ServiceMap = {
  [key: string]: Service;
};

export const buildServiceMap = ({map, manifest, aliasMap, getToken, fakts}: {map: ServiceBuilderMap, manifest: EnhancedManifest, aliasMap: AliasMap, getToken: GetToken, fakts: ActiveFakts}): ServiceMap => {
  const services: ServiceMap= {};

  for (const key in map) {
    const def: ServiceDefinition = map[key];
    if (!aliasMap[key]) {
      if (def.optional) {
        console.warn(`Optional service ${key} has no alias, skipping`);
        continue;
      } else {
        throw new Error(`No alias found for required service: ${key}`);
      }
    }
    services[key] = def.builder({
      manifest,
      alias: aliasMap[key],
      fakts: fakts,
      getToken: getToken,
      instance: fakts.instances[key],
    }
    )
  }

  return services;
}


export const aliasMapStillValidForManifest = (aliasMap: AliasMap, enhancedManifest: EnhancedManifest): boolean => {
  return enhancedManifest.requirements.every((req) => {
    if (req.optional) return true;
    const alias = aliasMap[req.key];

    return alias !== undefined;
  });
}

export const mappedAliasesStillReachable = async ({aliasMap, controller, timeout}: {aliasMap: AliasMap, controller: AbortController, timeout: number}): Promise<boolean> => {
  const checkPromises = Object.values(aliasMap).map(async (alias) => {
    try {
      const response = await checkAliasHealth(alias, timeout,  controller);
      return response
    } catch (e: Error | unknown) {
      console.warn(`Alias health check failed: ${alias.host}`, (e as Error).message);
      return false;
    }
  });

  return await Promise.all(checkPromises).then((results) => results.every((res) => res));
}


export const ArkitektProvider = ({
  children,
  manifest,
  serviceBuilderMap,
  selfServiceBuilder
}: {
  children: ReactNode;
  manifest: Manifest;
  serviceBuilderMap: ServiceBuilderMap;
  selfServiceBuilder: ServiceBuilder;
}) => {
  const [context, setContext] = useState<AppContext>({
    manifest: manifest as EnhancedManifest,
    connection: undefined,
    autoLoginError: undefined,
  });
  const [connecting, setConnecting] = useState(false);
  const [currentController, setCurrentController] = useState<AbortController | null>(null);

  const connectingRef = useRef<boolean>(false);

  // The session and its refresh chain live outside React state (see
  // SessionStore). React follows refreshes through the listener below.
  const [store] = useState(() => new SessionStore());
  const getToken: GetToken = store.getToken;

  useEffect(
    () =>
      store.onRefreshed((session) => {
        setContext((x) => ({
          ...x,
          connection: x.connection
            ? { ...x.connection, token: session.token, fakts: session.fakts }
            : x.connection,
        }));
      }),
    [store],
  );

  const setValidatedConnection = (connection: ConnectedContext) => {
    setContext(x => ({
      ...x,
      connection: connection,
      autoLoginError: undefined,
    })
    );
    store.set({
      endpoint: connection.endpoint,
      fakts: connection.fakts,
      token: connection.token,
      aliasMap: connection.aliasMap,
    });
  }

  const setAutoLoginError = (error: string) => {
    setContext(x => ({
      ...x,
      autoLoginError: error,
      connection: undefined,
    }));
  }

  const connect = async (options: {
    endpoint: FaktsEndpoint;
    controller: AbortController;
  }): Promise<ConnectedContext> => {
  try {

    setConnecting(true);
    setCurrentController(options.controller);
    localStorage.setItem("endpoint", JSON.stringify(options.endpoint));

    const enhancedManifest = await enhanceManifest(manifest);

    // One grant, one response: tokens and the rendered instances together.
    const { fakts, token: grantToken } = await flow({
      endpoint: options.endpoint,
      controller: options.controller,
      manifest: enhancedManifest,
    });

    const token = normalizeToken(grantToken);

    const { aliasReports, aliasMap, functional } = await buildAliases({
      fakts,
      manifest: enhancedManifest,
      controller: options.controller,
    });

    const reportRequest : ReportRequest = {
      alias_reports: aliasReports,
      functional: functional,
    };

    await report(options.endpoint.base_url, token.access_token, reportRequest);

    if (!functional) {
      throw new Error("Could not connect to all required services");
    }

    // Persist before building clients: the clients pull their token through
    // `getToken`, which reads from the stored session.
    store.set({ endpoint: options.endpoint, fakts, token, aliasMap });

    const serviceMap = buildServiceMap({
      map: serviceBuilderMap,
      manifest: enhancedManifest,
      aliasMap: aliasMap,
      getToken: getToken,
      fakts: fakts,
    });

    const selfService  = selfServiceBuilder({
      manifest: enhancedManifest,
      alias: fakts.self.alias,
      fakts: fakts,
      getToken: getToken,
    }
    );

    setValidatedConnection({
        endpoint: options.endpoint,
        fakts: fakts,
        manifest: enhancedManifest,
        serviceMap: serviceMap,
        aliasMap: aliasMap,
        selfService: selfService,
        serviceBuilderMap: serviceBuilderMap,
        token: token,
      }
    );
    } catch (e) {
      console.error("Connection failed:", e);
      if (!store.current) {
        store.clear();
      }
      throw e;
    } finally {
      setConnecting(false);
      setCurrentController(null);
    }

  };

  const disconnect = async () => {
    setContext(
      { manifest: context.manifest, connection: undefined }
    );
    store.clear();
  };

  const cancelConnection = () => {
    if (currentController) {
      console.log("Cancelling connection attempt...");
      currentController.abort();
      setCurrentController(null);
      setConnecting(false);
      setContext({
        manifest: context.manifest,
        connection: undefined,
        autoLoginError: "Connection cancelled by user",
      });
    }
  };

  useEffect(() => {
    const handler = async (e: KeyboardEvent) => {
      const isReloadKey = e.key === "x" && (e.ctrlKey || e.metaKey);

      if (isReloadKey) {
        e.preventDefault(); // prevent default reload
        console.log("Reloading Arkitekt context...");

        if (context.connection) {
          for (const key in context.connection.serviceMap) {
            const service = context.connection.serviceMap[key];
            console.log(`Clearing service: ${key}`, service);
            if (service.client) {
              try {
              console.log(`Clearing store for apollo: ${key}`);
              await service.client.clearStore(); // stops the Apollo clien
              await service.client.resetStore();
              } catch (err) {
                console.warn(`Failed to clear store for service ${key}:`, err);
            }
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
    const endpoint: FaktsEndpoint = FaktsEndpointSchema.parse(JSON.parse(oldEndpoint));
    const options = { controller: new AbortController(), endpoint: endpoint };

    await connect({ ...options, endpoint });
  };

  const tryReconnect = async ({manifest, serviceBuilderMap, controller}: {manifest: EnhancedManifest, serviceBuilderMap: ServiceBuilderMap, controller: AbortController}) => {
    console.log("Attempting auto-login with stored data...");

    let session: StoredSession | null = null;
    try {
      session = loadStoredSession();
    } catch (e) {
      console.warn("Stored session is not usable under the current protocol, clearing it", e);
      store.clear();
    }

    if (!session) {
      setAutoLoginError("No stored session data found");
      return
    }

    setConnecting(true);

    try {
      store.set(session);

      // A token that is about to expire (or already has) is refreshed before
      // any client is built. This also doubles as the "is this session still
      // alive" check: a revoked refresh token fails here, and we fall back to
      // asking the user to sign in again.
      if (shouldRefreshToken(session.token)) {
        await store.forceRefresh();
        session = store.current!;
      }

      if (!aliasMapStillValidForManifest(session.aliasMap, manifest)) {
        throw new Error("Stored aliases no longer valid for manifest");
      }

      const stillReachable = await mappedAliasesStillReachable({
        aliasMap: session.aliasMap,
        controller: controller,
        timeout: 150,
      });

      let currentAliasMap = session.aliasMap;

      if (!stillReachable) {
        const { aliasReports, aliasMap, functional } = await buildAliases({
            fakts: session.fakts,
            manifest: manifest,
            controller: controller,
        });

        const reportRequest : ReportRequest = {
          alias_reports: aliasReports,
          functional: functional,
        };

        if (!functional) {
          throw new Error("Could not connect to all required services");
        }

        await report(session.endpoint.base_url, session.token.access_token, reportRequest);

        currentAliasMap = aliasMap;
        store.set({ ...session, aliasMap: currentAliasMap });
      }

      const serviceMap = buildServiceMap({
        map: serviceBuilderMap,
        manifest: manifest,
        aliasMap: currentAliasMap,
        getToken: getToken,
        fakts: session.fakts,
      });

      const selfService  = selfServiceBuilder({
        manifest: manifest,
        alias: session.fakts.self.alias,
        fakts: session.fakts,
        getToken: getToken,
      }
      );

      const nextContext : AppContext = {
        manifest: manifest,
        connection: {
          endpoint: session.endpoint,
          fakts: session.fakts,
          manifest: manifest,
          aliasMap: currentAliasMap,
          serviceBuilderMap: serviceBuilderMap,
          serviceMap: serviceMap,
          selfService: selfService,
          token: session.token,
        },
      };

      setContext(nextContext);
      setConnecting(false);
    } catch (e) {
      console.log(e)
      // Keep the endpoint so "reconnect" knows where to go.
      store.clear(["fakts", "token", "aliasMap"]);
      setContext({
            manifest: manifest,
            autoLoginError: isAbortLikeError(e)
              ? "Connection cancelled by user"
              : e instanceof Error ? e.message : "Auto-login failed",
            connection: undefined,
      });
      setConnecting(false);
      setCurrentController(null);
    }
  };

  // 🔁 Auto-login effect on mount
  useEffect(() => {
    if (!connectingRef.current) {
      connectingRef.current = true;
      const controller = new AbortController();
      console.log("Attempting auto-login...");
      enhanceManifest(manifest).then((enhancedManifest) => {
        console.log("Enhanced manifest for auto-login:", enhancedManifest);
        tryReconnect({manifest: enhancedManifest, serviceBuilderMap, controller});
      });

    }
  }, [manifest, serviceBuilderMap]);

  return (
    <ArkitektContext.Provider
      value={{ ...context, connect, disconnect, reconnect, connecting, cancelConnection, getToken }}
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

export type ArkitektBuilderOptions<T extends ServiceBuilderMap, S extends ServiceBuilder> = {
  manifest: Manifest;
  serviceBuilderMap: T;
  selfServiceBuilder: S;
};

export const buildArkitektProvider =
  <T extends ServiceBuilderMap, S extends ServiceBuilder>(options: ArkitektBuilderOptions<T, S>) =>
    ({ children }: { children: ReactNode }) => {
      return (
        <ArkitektProvider
          manifest={options.manifest}
          serviceBuilderMap={options.serviceBuilderMap}
          selfServiceBuilder={options.selfServiceBuilder}
        >
          {children}
        </ArkitektProvider>
      );
    };

export { ArkitektContext } from "./context";
export * from "./hooks";
export * from "./types";
