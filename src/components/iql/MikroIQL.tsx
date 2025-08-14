import React, { useState, useEffect } from "react";
import { createGraphiQLFetcher, Fetcher } from "@graphiql/toolkit";
import { GraphiQLProvider } from "graphiql";
import { IQL } from "./IQL";
import { DocumentNode } from "@apollo/client";
import Translate from "@docusaurus/Translate";
import { useService } from "@site/src/lib/arkitekt/provider";
import { aliasToHttpPath } from "@site/src/lib/arkitekt/alias/helpers";
import { App } from "@site/src/lib/app/App";

export interface MikroIQLProps {
  query: string;
  onEditQuery?: (value: string, documentAst: DocumentNode | undefined) => void;
}

export const MikroIQL: React.FC<MikroIQLProps> = ({ query, onEditQuery }) => {
  const service = App.useService("mikro");
  const token = App.useToken();

  const [sfetcher, setFetcher] = useState<Fetcher | undefined>();

  const fetcher = createGraphiQLFetcher({
    url: aliasToHttpPath(service?.alias, "graphql"),
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
