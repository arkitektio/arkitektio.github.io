import { createGraphiQLFetcher, Fetcher, Storage } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import React from "react";
import "graphiql/graphiql.css";
import "@graphiql/plugin-explorer/dist/style.css";
import "./test.css";
import { useHerre } from "@jhnnsrs/herre";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { explorerPlugin } from "@graphiql/plugin-explorer";
import { useArkitektConnect, useArkitektLogin, EasyGuard } from "@jhnnsrs/arkitekt";
import mikroIntrospection from "./mikro.introspection.json";
import { GraphQLError } from "graphql";
import Link from "@docusaurus/Link";

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
  const { token } = useArkitektLogin();

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
  const { fakts } = useArkitektConnect();

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

export const Login = () => {
  const { login, loading } = useArkitektLogin();
  const { fakts, remove } = useArkitektConnect();

  return (
    <div className="h-full flex flex-col flex-1 items-center justify-center dark:text-white ">
              <div className="px-2 py-2 flex flex-col items-center justify-center">
                <div className="text-slate-200 justify-center  items-center align-center">You are connected!</div>
                <div className="text-slate-600 text-xs">
                  You are logged in with this demo website with arkitekt. Just
                  authenticate yourself and you are ready to go
                </div>
              </div>
              <div className="flex flex-row w-full gap-2 justify-center p-3">
                <>
                  <button
                    className={
                      "px-2  py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md " +
                      (loading ? "animate-pulse" : "")
                    }
                    onClick={() => login()}
                  >
                   <div className="text-md text-center">Login</div>
                  </button>
                  <button className="px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md text-md" onClick={() => remove()}> Unconnect</button>
                </>
              </div>
          </div>
  );
};

export const Connect = () => {
  const { registeredEndpoints, load, fakts, loading} = useArkitektConnect();

  return (
   <div className="h-full flex flex-col flex-1 items-center justify-center dark:text-white ">
            <div className="text-slate-200 justify-center ">Lets get you connected!</div>
            <div className="text-slate-600 text-xs">
              You are not currently connected. Here connectable instances will
              appear (currently restricted to local arkitekt instance)
            </div>
            <div className="flex flex-row gap-2 justify-start p-3">
            {!loading ? registeredEndpoints.map((e) => (
              
                <button
                  className="px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md flex flex-col"
                  onClick={() => load({endpoint: e, requestPublic: true})}
                >
                  {" "}
                  <div className="text-2xl text-center">{e.name}</div>
                  {e.base_url}
                </button>
            )): <div className="animate-pulse cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md px-2 py-2 " onClick={() => load()}>Cancel connection</div>}
            </div>

    </div>
  );
};



export const GraphQuard = (props: { children: React.ReactNode }) => {

  return (
    <>
      <EasyGuard
        noAppFallback={<>Not connected</>}
        notConnectedFallback={<Connect />} 
        notLoggedInFallback={<Login />}
      >
        {props.children}
      </EasyGuard>
    </>
  );
};




export const createFallBackFetcher = (props: FallbackDocumentationProps): Fetcher => {

  const fetcher = createGraphiQLFetcher({
    url: props.faktsKey,
    headers: {
    }
  });

  console.log("Initiated fetcher", fetcher)

  return (graphQLParams, fetcherOpts) => {
    console.log("Fetcher", graphQLParams, fetcherOpts)
    if (graphQLParams.operationName === 'IntrospectionQuery') {
      console.log("IntrospectionQuery", props.schema)
      return fetch(props.schema).then((response) => {
        return response.json()
       
      }).then(
        (response) => {
          console.log("Response", response)
          return { data: response, errors: [] }
        }
      ).catch((e) => {
        console.error(e)
        return {data: {}, errors: [new GraphQLError("Could not fetch schema from " + props.schema)]};
    });

    }
    return Promise.resolve({ data: {}, errors: [{ message: "Live features only availabe if your connect your Arkitekt Instance" }]});
  }


}


export type AliveDocumentationProps = {
  faktsKey: string;
  storageKey: string;
}

export const AliveDocumentation = (props: AliveDocumentationProps) => {

  const { token } = useArkitektLogin();
  const { fakts } = useArkitektConnect();

  const fetcher = createGraphiQLFetcher({
    url: fakts[props.faktsKey]?.endpoint_url as string,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const storage = buildStorage(props.storageKey);

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



}


export type FallbackDocumentationProps = {
  faktsKey: string;
  storageKey: string;
  schema?: string;
}




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
  faktsKey: string;
  schema: string;
  description: string;
}



export const DynamicDocumentation = (props: DynamicDocumentationProps) => {


  return (
    <>
  
    <div className="flex flex-grow h-full flex-col">
    <div className="flex-grow flex overflow-y-auto">
        <EasyGuard
          noAppFallback={<>Not connected</>}
          notConnectedFallback={<FallbackDocumentation faktsKey={props.faktsKey} storageKey={props.faktsKey} schema={props.schema} />} 
          notLoggedInFallback={<FallbackDocumentation faktsKey={props.faktsKey} storageKey={props.faktsKey} schema={props.schema} />}
        >
          <AliveDocumentation faktsKey={props.faktsKey} storageKey={props.faktsKey}/>
        </EasyGuard>
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
  };
  
  export const ServiceSelector = ({
    onChange,
    value,
    options,
  }: {
    onChange: (value: ServiceOption) => void;
    value: ServiceOption;
    options: ServiceOption[];
  }) => {
    return (
      <div className="flex-initial flex flex-row pl-20 gap-2 h-10 mt-2 pr-10">
        <div className="py-2 px-2 h-10 my-auto text-slate-600"> Choose Service</div>
            {options.map((e) => (
              <>
                <button
                  onClick={() => onChange(e)}
                  disabled={e.faktsKey == value.faktsKey}
                  className={
                    "appearance-none bg-slate-700 hover:bg-slate-400 text-slate-200 font-light py-2 px-2 rounded inline-flex items-center cursor-pointer disabled:opacity-100 opacity-30 transition duration-500 ease-in-out"
                  }
                >
                  {e.label}
                </button>
              </>
            ))}
            <div className="flex-grow"></div>
      <div className="flex-initial px-3  text-slate-600 my-auto max-w-50">{value.description}</div>
      <Link to={"docs/design/api"} className="flex-initial my-auto">What am I Seeing?</Link>
      </div>
    );
  };




export const DocumentationPage = ({ options }: { options: ServiceOption[] }) => {
    const [state, setState] = React.useState(options.at(0));
  
    return (
      <div className="flex flex-col h-[95%] w-full overflow-y-auto">
        <DynamicDocumentation {...state} />
        <ServiceSelector value={state} onChange={(e) => setState(e)} options={options} />
      </div>
    );
  };


export const APIS: ServiceOption[] = [
  {faktsKey: "mikro", label: "Mikro", schema: "/introspections/mikro.introspection.json", description: "Mikro handles all things microscopy"},
  {faktsKey: "port", label: "Port", schema: "/introspections/port.introspection.json", description: "Port manages containers and apps"},
  {faktsKey: "kabinet", label: "Kabinet", schema: "/introspections/kabinet.introspection.json", description: "Kabinet will manage all things apps in the future"},
  {faktsKey: "kluster", label: "Kluster", schema: "/introspections/kluster.introspection.json", description: "Kluster spawns and manages dask clusters on demand"},
  {faktsKey: "konviktion", label: "Konviktion", schema: "/introspections/konviktion.introspection.json", description: "Connects your data to notion and back"},
  {faktsKey: "mikro_next", label: "Mikro (Next)", schema: "/introspections/mikro_next.introspection.json", description: "Mikro handles all things microscopy"},
  {faktsKey: "omero_ark", label: "OmeroArk (Next)", schema: "/introspections/omero_ark.introspection.json", description: "Your Omero server gateway"},
  {faktsKey: "rekuest", label: "Rekuest", schema: "/introspections/rekuest.introspection.json", description: "Rekuest manages Nodes and Tasks"},
  {faktsKey: "unlok", label: "Lok", schema: "/introspections/unlok.introspection.json", description: "User management and authentication"},
  {faktsKey: "fluss", label: "Fluss", schema: "/introspections/fluss.introspection.json", description: "Workflow management and execution log"},
]




export const Graph = () => {





  return (
    <BrowserOnly fallback={<div>Hallo</div>}>
      {() => (
       

       <DocumentationPage options={APIS} />
      )}
    </BrowserOnly>
  );
};
