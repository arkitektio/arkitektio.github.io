import { createGraphiQLFetcher, Fetcher, Storage } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import React from "react";
import "graphiql/graphiql.css";
import "@graphiql/plugin-explorer/dist/style.css";
import "./test.css";
import { useHerre } from "@jhnnsrs/herre";
import { useFakts } from "@jhnnsrs/fakts";
import { Guard } from "./Guard";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { explorerPlugin } from "@graphiql/plugin-explorer";

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
  const { token } = useHerre();

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
  const { fakts } = useFakts();

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

export const Graph = () => {
  return (
    <BrowserOnly fallback={<div>Hallo</div>}>
      {() => (
        <div className="h-full">
          <Guard>
            <APIDocumentation />
          </Guard>
        </div>
      )}
    </BrowserOnly>
  );
};
