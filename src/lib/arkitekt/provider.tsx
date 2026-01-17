import React, { ReactNode, useEffect, useRef, useState } from "react";
import { checkAliasHealth } from "./alias/resolve";
import { buildAliases } from "./builder";
import { ArkitektContext } from "./context";
import { AliasStorageSchema } from "./fakts/aliasStorageSchema";
import { FaktsEndpoint, FaktsEndpointSchema } from "./fakts/endpointSchema";
import { ActiveFakts, ActiveFaktsSchema, Alias } from "./fakts/faktsSchema";
import { flow } from "./fakts/flow";
import { Manifest } from "./fakts/manifestSchema";
import { TokenResponse, TokenResponseSchema } from "./fakts/tokenSchema";
import { useArkitekt } from "./hooks";
import { login } from "./oauth/login";
import { AppContext, ConnectedContext, EnhancedManifest, ReportRequest, Service, ServiceBuilder, ServiceBuilderMap, ServiceDefinition } from "./types";
import { enhanceManifest, report } from "./utils";


export type AliasMap = {
  [key: string]: Alias;
};

export type ServiceMap = {
  [key: string]: Service;
};

export const buildServiceMap = ({map, manifest, aliasMap, token, fakts}: {map: ServiceBuilderMap, manifest: EnhancedManifest, aliasMap: AliasMap, token: TokenResponse, fakts: ActiveFakts}): ServiceMap => {
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
      token: token,
      instance: fakts.instances[key],
    }
    )
  }

  return services;;
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




const refreshToken = async (fakts: ActiveFakts, currentToken: TokenResponse, controller: AbortController): Promise<TokenResponse> => {
  const response = await fetch(`${fakts.auth.token_url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: currentToken.refresh_token || "",
      client_id: "arkitekt-client",
    }),
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to refresh token: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return TokenResponseSchema.parse(data);
}




type AuthClient = {

  token: TokenResponse,
  refresh: () => Promise<void>,
  load: () => TokenResponse,

}



class MyAuthClient implements AuthClient {
  private fakts: ActiveFakts;
  private controller: AbortController;
  private currentToken: TokenResponse;

  constructor(fakts: ActiveFakts, initialToken: TokenResponse, controller: AbortController) {
    this.fakts = fakts;
    this.currentToken = initialToken;
    this.controller = controller;
  }

  public async refresh() {
    // Using an async lock to prevent multiple simultaneous refreshes




    this.currentToken = await refreshToken(this.fakts, this.currentToken, this.controller);
    localStorage.setItem("token", JSON.stringify(this.currentToken));
  }

  public load() {
    return this.currentToken;
  }

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



  const setValidatedConnection = (connection: ConnectedContext) => {
    setContext(x => ({
      ...x,
      connection: connection,
    })
    );
    localStorage.setItem("endpoint", JSON.stringify(connection.endpoint));
    localStorage.setItem("fakts", JSON.stringify(connection.fakts));
    localStorage.setItem("token", JSON.stringify(connection.token));
    localStorage.setItem("aliasMap", JSON.stringify({aliasMap: connection.aliasMap}));
  }

  const setAutoLoginError = (error: string) => {
    setContext(x => ({
      ...x,
      autoLoginError: error,
      connection: undefined,
    }));
  }

  const setCoordinatorNotReachable = (error: string) => {
    // We cannot reach the Coordinator at all, clear everything
    setContext(x => ({
      ...x,
      autoLoginError: error,
      connection: undefined,
    }));
    localStorage.removeItem("endpoint");
    localStorage.removeItem("fakts");
    localStorage.removeItem("aliasMap");
    localStorage.removeItem("token");
  }


  const setAliasDoNoLongerMatchManifest = (error: string) => {
    // The stored aliases no longer match the manifest, we need to reauthenticate
    setContext(x => ({
      ...x,
      autoLoginError: error,
      connection: undefined,
    }));
    localStorage.removeItem("fakts");
    localStorage.removeItem("aliasMap");
    localStorage.removeItem("token");
  }


  const setAliasesArePersistentlyNotReachable = (error: string) => {
    setContext(x => ({
      ...x,
      autoLoginError: error,
      connection: undefined,
    }));

    localStorage.removeItem("fakts");
    localStorage.removeItem("aliasMap");
    localStorage.removeItem("token");
  }


   const setRefreshTokenNotValid = (error: string) => {
    setContext(x => ({
      ...x,
      autoLoginError: error,
      connection: undefined,
    }));
    localStorage.removeItem("token");
    localStorage.removeItem("aliasMap");
  }




  const refreshToken = async () => {
    if (!context.connection) {
      throw new Error("No connection to refresh token for");
    }
  }










  const connect = async (options: {
    endpoint: FaktsEndpoint;
    controller: AbortController;
  }): Promise<ConnectedContext> => {
    // Build Manifest
  try {

    setConnecting(true);
    setCurrentController(options.controller);
    localStorage.setItem("endpoint", JSON.stringify(options.endpoint));


    const enhancedManifest = await enhanceManifest(manifest);

    const fakts = await flow({
      endpoint: options.endpoint,
      controller: options.controller,
      manifest: enhancedManifest,
    });

    // Save fakts to local storage
    localStorage.setItem("fakts", JSON.stringify(fakts));


    const token = await login(fakts.auth);

    localStorage.setItem("token", JSON.stringify(token));


    const { aliasReports, aliasMap, functional } = await buildAliases({
      fakts,
      manifest: enhancedManifest,
      controller: options.controller,
    });

    localStorage.setItem("aliasMap", JSON.stringify({aliasMap: aliasMap}));


    const reportRequest : ReportRequest = {
      alias_reports: aliasReports,
      token: fakts.auth.client_token,
      functional: functional,
    };

    await report(fakts.auth.report_url, reportRequest);

    if (!functional) {
      throw new Error("Could not connect to all required services");
    }


    const serviceMap = buildServiceMap({
      map: serviceBuilderMap,
      manifest: enhancedManifest,
      aliasMap: aliasMap,
      token: token,
      fakts: fakts,
    });

    const selfService  = selfServiceBuilder({
      manifest: enhancedManifest,
      alias: fakts.self.alias,
      fakts: fakts,
      token: token,
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
    localStorage.removeItem("fakts");
    localStorage.removeItem("token");
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
    const endpoint: FaktsEndpoint = JSON.parse(oldEndpoint);
    const options = { controller: new AbortController(), endpoint: endpoint };

    await connect({ ...options, endpoint });
  };

  const tryReconnect = async ({manifest, serviceBuilderMap, controller}: {manifest: EnhancedManifest, serviceBuilderMap: ServiceBuilderMap, controller: AbortController}) => {
    const faktsRaw = localStorage.getItem("fakts");
    const tokenRaw = localStorage.getItem("token");
    const endpointRaw = localStorage.getItem("endpoint");
    const aliasMapRaw = localStorage.getItem("aliasMap");
    console.log("Attempting auto-login with stored data...");

    if (!faktsRaw || !tokenRaw || !endpointRaw || !aliasMapRaw) {
      setAutoLoginError("No stored session data found");
      return
    }

    setConnecting(true);

    try {

      const fakts = ActiveFaktsSchema.parse(JSON.parse(faktsRaw));
      const token = TokenResponseSchema.parse(JSON.parse(tokenRaw));
      const endpoint = FaktsEndpointSchema.parse(JSON.parse(endpointRaw));
      const aliasStorage = AliasStorageSchema.parse(JSON.parse(aliasMapRaw));

      if (!aliasMapStillValidForManifest(aliasStorage.aliasMap, manifest)) {
        setContext({
              manifest: manifest,
              autoLoginError: "Stored aliases no longer valid for manifest",
              connection: undefined,
          });
        setConnecting(false);
      }

      const stillReachable = await mappedAliasesStillReachable({
        aliasMap: aliasStorage.aliasMap,
        controller: controller,
        timeout: 150,
      });

      let currentAliasMap = aliasStorage.aliasMap;

      if (!stillReachable) {
        const { aliasReports, aliasMap, functional } = await buildAliases({
            fakts,
            manifest: manifest,
            controller: controller,
        });

        const reportRequest : ReportRequest = {
          alias_reports: aliasReports,
          token: fakts.auth.client_token,
          functional: functional,
        };

        localStorage.setItem("aliasReports", JSON.stringify({aliasMap: aliasMap}));
        if (!functional) {
          setContext({
            manifest: manifest,
            autoLoginError: "Could not connect to all required services",
            connection: undefined,
          });
          setConnecting(false);
          return;
        }

        await report(fakts.auth.report_url, reportRequest);

        currentAliasMap = aliasMap;

      }


      const serviceMap = buildServiceMap({
        map: serviceBuilderMap,
        manifest: manifest,
        aliasMap: currentAliasMap,
        token: token,
        fakts: fakts,
      });

      const selfService  = selfServiceBuilder({
        manifest: manifest,
        alias: fakts.self.alias,
        fakts: fakts,
        token: token,
      }
      );


      const context : AppContext = {
        manifest: manifest,
        connection: {
          endpoint: endpoint,
          fakts: fakts,
          manifest: manifest,
          aliasMap: currentAliasMap,
          serviceBuilderMap: serviceBuilderMap,
          serviceMap: serviceMap,
          selfService: selfService,
          token: token,
        },
      };

      setContext(context);
      setConnecting(false);
    } catch (e) {
      console.log(e)
      localStorage.removeItem("fakts");
      localStorage.removeItem("token");
      setContext({
            manifest: manifest,
            autoLoginError: e instanceof Error ? e.message : "Auto-login failed",
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
      value={{ ...context, connect, disconnect, reconnect, connecting, cancelConnection }}
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

