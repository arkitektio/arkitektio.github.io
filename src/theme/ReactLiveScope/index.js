import React from "react";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/client";
import {App} from "@site/src/lib/app/App";
// Add react-live imports you need here

const useMikroQuery = (query, options) => {
  return useQuery(query, {
    ...options,
    client: App.useService("mikro").client,
  });
};

const useKabinetQuery = (query, options) => {
  return useQuery(query, {
    ...options,
    client: App.useService("kabinet").client,
  });
};


const ReactLiveScope = {
  React,
  ...React,
  useKabinetQuery,
  useMikroQuery,
  gql,
};
export default ReactLiveScope;
