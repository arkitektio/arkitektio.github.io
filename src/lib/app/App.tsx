import { manifest } from "@site/src/constants";
import { buildArkitekt } from "../arkitekt";
import { mikroServiceDefinition } from "../mikro/service";
import { lokServiceDefinition } from "../lok/service";
import { kabinetDefinition } from "../kabinet/service";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const App = buildArkitekt({
  manifest,
  serviceBuilderMap: {
    mikro: mikroServiceDefinition,
    lok: lokServiceDefinition,
    kabinet: kabinetDefinition,
  },
});

export const withBrowserGuard = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    return (
      <BrowserOnly fallback={<> Loading</>}>
        {() => <Component {...props} />}
      </BrowserOnly>
    );
  };
};

export const MikroInner = App.buildServiceGuard("mikro");
export const LokInner = App.buildServiceGuard("lok");
export const KabinetInner = App.buildServiceGuard("kabinet");

export const Guard = {
  Mikro: withBrowserGuard(MikroInner),
  Lok: withBrowserGuard(LokInner),
  Kabinet: withBrowserGuard(KabinetInner),
};
