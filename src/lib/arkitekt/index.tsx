// @ts-nocheck
import { Manifest, Requirement } from "./fakts/manifestSchema";
import {
  AppContext,
  buildArkitektProvider,
  ConnectedGuard,
  ServiceBuilder,
  ServiceBuilderMap,
  useArkitekt,
  useAvailableServices,
  usePotentialService,
  useService
} from "./provider";
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




export const buildArkitekt = <T extends ServiceBuilderMap, S extends ServiceBuilder>({
  manifest,
  serviceBuilderMap,
  selfServiceBuilder,
}: {
  manifest: Manifest;
  serviceBuilderMap: T;
  selfServiceBuilder: S;
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
      selfServiceBuilder: selfServiceBuilder,
    }),
    buildServiceGuard: <K extends keyof T>(serviceKey: K) => buildGuard(serviceKey as string),
    Guard: ConnectedGuard,
    useConnect: () => useArkitekt().connect,
    useDisconnect: () => useArkitekt().disconnect,
    useReconnect: () => useArkitekt().reconnect,
    useCancelConnection: () => useArkitekt().cancelConnection,
    useManifest: () => realManifest,
    useConnectedManifest: () => useArkitekt().connection?.manifest,
    useConnection: (): AppContext<T>["connection"] => useArkitekt().connection,
    useFakts: () => useArkitekt().connection?.fakts,
    useAlias: <K extends keyof T>(serviceKey: K) => {
      const service = useService(serviceKey as string);
      return service?.alias;
    },
    useSelfService: (): ReturnType<S> | undefined => useArkitekt().connection?.selfService,
    useSelf: () => useArkitekt().connection?.fakts.self,
    useAutoLoginError: (): AppContext<T>["autoLoginError"] => useArkitekt().autoLoginError,
    useAvailableServices: () => useAvailableServices(),
    useService: <K extends keyof T, >(service: K): ReturnType<T[K]["builder"]>  => useService(service as string) as ReturnType<T[K]["builder"]>,
    useToken: () => useArkitekt().connection?.token || null,
    useArkitekt: useArkitekt,
  };
};