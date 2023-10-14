import { DocumentNode } from "@apollo/client";
import { Fetcher } from "@graphiql/toolkit";
import { FieldHookConfig, useField } from "formik";
import { GraphiQLProvider } from "graphiql";
import React from "react";
import { useHerre } from "@jhnnsrs/herre";
import { useMikro } from "@jhnnsrs/mikro";
import { IQL } from "./IQL";

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
  const { config } = useMikro();
  const { token } = useHerre();

  const passingFetcher: Fetcher = async (graphQLParams, fetcherOpts) => {
    console.log("passingFetcher", graphQLParams, fetcherOpts);
    if (config?.endpointUrl && token) {
      const data = await fetch(config?.endpointUrl, {
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
    }
    return {};
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
