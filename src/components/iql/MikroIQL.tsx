import React, { useState, useEffect } from "react";
import { createGraphiQLFetcher, Fetcher } from "@graphiql/toolkit";
import { useMikro } from "@jhnnsrs/mikro";
import { useHerre } from "@jhnnsrs/herre";
import { GraphiQLProvider } from "graphiql";
import { IQL } from "./IQL";
import { DocumentNode } from "@apollo/client";
import Translate from "@docusaurus/Translate";

export interface MikroIQLProps {
  query: string;
  onEditQuery?: (value: string, documentAst: DocumentNode | undefined) => void;
}

export const MikroIQL: React.FC<MikroIQLProps> = ({ query, onEditQuery }) => {
  const { config } = useMikro();
  const { token } = useHerre();

  const [sfetcher, setFetcher] = useState<Fetcher | undefined>();

  const fetcher = createGraphiQLFetcher({
    url: config?.endpointUrl || "",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <>
      <div className="p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 ">
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks"
        >
          Live
        </Translate>
      </div>
      <div className="h-[300px]">
        <GraphiQLProvider fetcher={fetcher} query={query}>
          <IQL onEditQuery={onEditQuery} />
        </GraphiQLProvider>
      </div>
    </>
  );
};
