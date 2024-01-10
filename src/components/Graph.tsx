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

export const Graph = () => {
  return (
    <BrowserOnly fallback={<div>Hallo</div>}>
      {() => (
       
          <GraphQuard>
            <APIDocumentation />
          </GraphQuard>
      )}
    </BrowserOnly>
  );
};
