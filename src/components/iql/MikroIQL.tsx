import { DocumentNode } from "@apollo/client";
import Translate from "@docusaurus/Translate";
import { createGraphiQLFetcher, Fetcher } from "@graphiql/toolkit";
import { App } from "@site/src/lib/app/App";
import { aliasToHttpPath } from "@site/src/lib/arkitekt/alias/helpers";
import { GraphiQLProvider } from "graphiql";
import React, { useState } from "react";
import { IQL } from "./IQL";

export interface MikroIQLProps {
  query: string;
  onEditQuery?: (value: string, documentAst: DocumentNode | undefined) => void;
}

export const MikroIQL: React.FC<MikroIQLProps> = ({ query, onEditQuery }) => {
  const alias = App.useService("mikro").alias;
  const token = App.useToken();

  const [sfetcher, setFetcher] = useState<Fetcher | undefined>();

  const fetcher = createGraphiQLFetcher({
    url: aliasToHttpPath(alias, "graphql"),
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
