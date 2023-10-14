import React from 'react';
import {withMikro, useMikroQuery} from "@jhnnsrs/mikro";
import {useDatalayer} from "@jhnnsrs/datalayer";
import { BioImage } from '@site/src/components/Bioimage';
import {gql } from "graphql-tag";
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  withMikro,
  useMikroQuery,
  BioImage,
  useDatalayer,
  gql,
};
export default ReactLiveScope;
