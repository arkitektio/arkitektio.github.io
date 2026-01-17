import { manifest } from "@site/src/constants";
import { buildArkitekt } from "../arkitekt";
import { mikroServiceDefinition } from "../mikro/service";
import { lokServiceDefinition } from "../lok/service";
import { kabinetDefinition } from "../kabinet/service";
import BrowserOnly from "@docusaurus/BrowserOnly";
import lokReust from "@site/src/lib/lok/api/fragments";
import { createGraphQLServiceBuilder } from "../arkitekt/builders/graphQlServiceBuidler";



export const App = buildArkitekt({
  manifest,
  serviceBuilderMap: {
    mikro: mikroServiceDefinition,
    kabinet: kabinetDefinition,
  },
  selfServiceBuilder: createGraphQLServiceBuilder(lokReust.possibleTypes),
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
export const KabinetInner = App.buildServiceGuard("kabinet");

export const Guard = {
  Mikro: withBrowserGuard(MikroInner),
  Lok: App.Guard,
  Kabinet: withBrowserGuard(KabinetInner),
};
