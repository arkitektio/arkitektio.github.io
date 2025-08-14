import { manifest } from "@site/src/constants";
import { buildArkitekt } from "../arkitekt";
import { mikroServiceDefinition } from "../mikro/service";
import { lokServiceDefinition } from "../lok/service";
import { kabinetDefinition } from "../kabinet/service";

export const App = buildArkitekt({
  manifest,
  serviceBuilderMap: {
    mikro: mikroServiceDefinition,
    lok: lokServiceDefinition,
    kabinet: kabinetDefinition,
  },
});

export const Guard = {
  Mikro: App.buildServiceGuard("mikro"),
  Lok: App.buildServiceGuard("lok"),
  Kabinet: App.buildServiceGuard("kabinet"),
};
