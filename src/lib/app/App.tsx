// @ts-nocheck
import { manifest } from "@/constants";
import { buildArkitekt } from "../arkitekt";
import { mikroServiceDefinition } from "../mikro/service";
import { lokServiceDefinition } from "../lok/service";
import { kabinetDefinition } from "../kabinet/service";
import lokReust from "@/lib/lok/api/fragments";
import { createGraphQLServiceBuilder } from "../arkitekt/builders/graphQlServiceBuidler";



export const App = buildArkitekt({
  manifest,
  serviceBuilderMap: {
    mikro: mikroServiceDefinition,
    kabinet: kabinetDefinition,
  },
  selfServiceBuilder: createGraphQLServiceBuilder(lokReust.possibleTypes),
});

export const MikroInner = App.buildServiceGuard("mikro");
export const KabinetInner = App.buildServiceGuard("kabinet");

export const Guard = {
  Mikro: MikroInner,
  Lok: App.Guard,
  Kabinet: KabinetInner,
};