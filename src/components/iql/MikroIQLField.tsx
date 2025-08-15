import { DocumentNode } from "@apollo/client";
import { Fetcher } from "@graphiql/toolkit";
import { FieldHookConfig, useField } from "formik";
import { GraphiQLProvider } from "graphiql";
import React from "react";
import { IQL } from "./IQL";
import { App } from "@site/src/lib/app/App";
import { aliasToHttpPath } from "@site/src/lib/arkitekt/alias/helpers";

export interface MikroIQLFieldProps {
  name: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  description?: string;
}

export const MikroQLProvider = (props: {
  query?: string | undefined;
  children: React.ReactNode;
}) => {
  const alias = App.useService("mikro").alias;
  const token = App.useToken();

  const passingFetcher: Fetcher = async (graphQLParams, fetcherOpts) => {
    console.log("passingFetcher", graphQLParams, fetcherOpts);

    const data = await fetch(aliasToHttpPath(alias, "graphql"), {
      method: "POST",
      body: JSON.stringify(graphQLParams),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
        ...fetcherOpts?.headers,
      },
    });
    console.log("data", data);
    return data.json();
  };

  return (
    <>
      <GraphiQLProvider fetcher={passingFetcher} query={props.query}>
        {props.children}
      </GraphiQLProvider>
    </>
  );
};

export const MikroIQLField = ({
  initialQuery,
  ...props
}: FieldHookConfig<string> & { initialQuery: string }): any => {
  return (
    <MikroQLProvider query={initialQuery}>
      <MikroIQLFieldInner {...props} />
    </MikroQLProvider>
  );
};

export const MikroIQLFieldInner = (props: FieldHookConfig<string>): any => {
  const [field, meta, form] = useField(props);

  const onEditQuery = (
    value: string,
    documentAst: DocumentNode | undefined
  ) => {
    form.setValue(value);
  };

  return (
    <>
      <IQL onEditQuery={onEditQuery} />
    </>
  );
};
