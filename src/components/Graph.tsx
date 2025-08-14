import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import { explorerPlugin } from "@graphiql/plugin-explorer";
import "@graphiql/plugin-explorer/dist/style.css";
import { createGraphiQLFetcher, Fetcher, Storage } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import { GraphQLError } from "graphql";
import React from "react";
import { App } from "../lib/app/App";
import { aliasToHttpPath } from "../lib/arkitekt/alias/helpers";
import { AvailableService, useToken } from "../lib/arkitekt/provider";
import { NotConnected } from "./Connector";
import "./test.css";

const explorer = explorerPlugin({} as any);

export const buildStorage = (url: string): Storage => {
  let prepend = `graphiql:${url}.`;

  return {
    getItem: (key: string) => {
      return localStorage.getItem(`${prepend}.${key}`);
    },
    setItem: (key: string, value: string) => {
      localStorage.setItem(`${prepend}.${key}`, value);
    },
    removeItem: (key: string) => {
      localStorage.removeItem(`${prepend}.${key}`);
    },
    clear: () => {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prepend)) {
          localStorage.removeItem(key);
        }
      }
    },
    get length() {
      let count = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prepend)) {
          count++;
        }
      }
      return count;
    },
  };
};

const Renderer = ({ url }: { url: string }) => {
  const token = useToken();

  const fetcher = createGraphiQLFetcher({
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const storage = buildStorage(url);

  return (
    <div className="h-full">
      <div className="h-full">
        {fetcher && (
          <GraphiQL
            fetcher={fetcher}
            defaultQuery=""
            plugins={[explorer]}
            storage={storage}
          />
        )}
      </div>
    </div>
  );
};

export type APIOption = {
  url: string;
  label: string;
};

export const Selector = ({
  onChange,
  value,
  options,
}: {
  onChange: (value: string) => void;
  value: string;
  options: APIOption[];
}) => {
  return (
    <div className="flex flex-row px-4">
      <div className="flex flex-col">
        <div className="flex  p-2  text-xl font-light text-slate-200 rounded-t-md border-none border-0">
          API Explorer{" "}
        </div>
        <div className="px-2 my-auto text-xs text-slate-200">
          {" "}
          Explore your connected GraphQL Apis
        </div>
      </div>

      <div className="flex-grow"></div>
      <div className="flex flex-col">
        <div className=" my-auto text-xs text-slate-200 text-end">
          API Endpoint{" "}
        </div>
        <div className="flex flex-row gap-2 my-auto ">
          {options.map((e) => (
            <>
              <button
                onClick={() => onChange(e.url)}
                disabled={e.url == value}
                className={
                  "appearance-none bg-slate-700 hover:bg-slate-400 text-slate-200 font-light py-2 px-2 rounded inline-flex items-center cursor-pointer disabled:opacity-100 opacity-30 "
                }
              >
                {e.label}
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export const GraphOptions = ({ options }: { options: APIOption[] }) => {
  const [state, setState] = React.useState(options.at(0).url);

  return (
    <>
      <Selector value={state} onChange={(e) => setState(e)} options={options} />
      <Renderer url={state} />;
    </>
  );
};

export const APIDocumentation = () => {
  const [options, setOptions] = React.useState<APIOption[]>([]);
  const fakts = App.useFakts();

  React.useEffect(() => {
    if (!fakts) return;

    let options: APIOption[] = [];

    Object.keys(fakts).forEach((e) => {
      console.log(e);
      const endpoint = fakts[e].endpoint_url as string;
      const name = e;
      if (endpoint && endpoint.includes("graphql")) {
        options.push({ url: endpoint, label: name });
      }
    });
    setOptions(options);
  }, [fakts]);

  return (
    <div className="h-full">
      {options && options.length >= 1 && <GraphOptions options={options} />}
    </div>
  );
};

export const GraphQuard = (props: { children: React.ReactNode }) => {
  return (
    <>
      <App.Guard notConnectedFallback={<NotConnected />}>
        {props.children}
      </App.Guard>
    </>
  );
};

export const createFallBackFetcher = (
  props: FallbackDocumentationProps
): Fetcher => {
  const fetcher = createGraphiQLFetcher({
    url: props.faktsKey,
    headers: {},
  });

  console.log("Initiated fetcher", fetcher);

  return (graphQLParams, fetcherOpts) => {
    console.log("Fetcher", graphQLParams, fetcherOpts);
    if (graphQLParams.operationName === "IntrospectionQuery") {
      console.log("IntrospectionQuery", props.schema);
      return fetch(props.schema)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log("Response", response);
          return { data: response, errors: [] };
        })
        .catch((e) => {
          console.error(e);
          return {
            data: {},
            errors: [
              new GraphQLError("Could not fetch schema from " + props.schema),
            ],
          };
        });
    }
    return Promise.resolve({
      data: {},
      errors: [
        {
          message:
            "Live features only availabe if your connect your Arkitekt Instance",
        },
      ],
    });
  };
};

export type AliveDocumentationProps = {
  serviceKey: string;
  storageKey: string;
};

export const AliveDocumentation = (props: AliveDocumentationProps) => {
  const token = App.useToken();
  const alias = App.useService(props.serviceKey).alias;

  if (!alias) {
    return <div className="flex flex-col h-full w-full">No service found</div>;
  }

  const fetcher = createGraphiQLFetcher({
    url: aliasToHttpPath(alias, "graphql"),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const storage = buildStorage(props.storageKey);

  return (
    <div className="flex-grow">
      <div className="h-full">
        {fetcher && (
          <GraphiQL
            fetcher={fetcher}
            defaultQuery=""
            plugins={[explorer]}
            storage={storage}
          />
        )}
      </div>
    </div>
  );
};

export type FallbackDocumentationProps = {
  faktsKey: string;
  storageKey: string;
  schema?: string;
};

export const FallbackDocumentation = (props: FallbackDocumentationProps) => {
  const fetcher = createFallBackFetcher(props);

  const storage = buildStorage(props.storageKey);

  return (
    <div className="flex-grow">
      <div className="h-full">
        {fetcher && (
          <GraphiQL
            fetcher={fetcher}
            defaultQuery=""
            plugins={[explorer]}
            storage={storage}
          />
        )}
      </div>
    </div>
  );
};

export type DynamicDocumentationProps = {
  service: AvailableService;
};

export const DynamicDocumentation = (props: DynamicDocumentationProps) => {
  return (
    <>
      <div className="flex flex-grow h-full flex-col">
        <div className="flex-grow flex overflow-y-auto">
          <App.Guard notConnectedFallback={<> No Documentation</>}>
            <AliveDocumentation
              serviceKey={props.service.key}
              storageKey={props.service.key}
            />
          </App.Guard>
        </div>
      </div>
    </>
  );
};

export type ServiceOption = {
  label: string;
  schema: any;
  faktsKey: string;
  description: string;
  core?: boolean;
};

export const ServiceSelector = ({
  onChange,
  value,
  options,
}: {
  onChange: (value: AvailableService) => void;
  value: AvailableService;
  options: AvailableService[];
}) => {
  return (
    <div className="flex-initial flex flex-row pl-20 gap-2 h-10 mt-2 pr-10">
      <div className="py-2 px-2 h-10 my-auto text-slate-600">
        {" "}
        Core Services
      </div>
      {options.map((e) => (
        <>
          <button
            onClick={() => onChange(e)}
            disabled={e.key == value.key}
            className={
              "appearance-none bg-slate-700 hover:bg-slate-400 text-slate-200 font-light py-2 px-2 rounded inline-flex items-center cursor-pointer disabled:opacity-100 opacity-30 transition duration-500 ease-in-out"
            }
          >
            {e.key}
          </button>
        </>
      ))}
      <div className="flex-initial px-3  text-slate-600 my-auto max-w-50">
        {value.key}
      </div>
      <Link to={"docs/design/api"} className="flex-initial my-auto">
        What am I Seeing?
      </Link>
    </div>
  );
};

export const DocumentationPage = ({}: {}) => {
  const options = App.useServices();

  if (!options || options.length === 0) {
    return (
      <div className="flex flex-col h-full w-full">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-slate-200 text-lg">
            No services available. Please connect to a service.
          </div>
        </div>
      </div>
    );
  }

  const [state, setState] = React.useState(options.at(0));

  return (
    <div className="flex flex-col h-[95%] w-full overflow-y-auto">
      <DynamicDocumentation service={state} />
      <ServiceSelector
        value={state}
        onChange={(e) => setState(e)}
        options={options}
      />
    </div>
  );
};

export const Graph = () => {
  return (
    <BrowserOnly fallback={<div>Hallo</div>}>
      {() => <DocumentationPage />}
    </BrowserOnly>
  );
};
