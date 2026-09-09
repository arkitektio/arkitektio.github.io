// @ts-nocheck
import kabinetResult from "@/lib/kabinet/api/fragments";
import { Database } from "lucide-react";
import React from "react";
import { createGraphQLServiceBuilder } from "../arkitekt/builders/graphQlServiceBuidler";
import { ServiceDefinition } from "../arkitekt/provider";



export const kabinetDefinition: ServiceDefinition = {
  builder: createGraphQLServiceBuilder(kabinetResult.possibleTypes),
  logo: () => <Database className="w-8 h-8 mx-auto  text-foreground" />,
  key: "kabinet",
  name: "Kabinet",
  description: "Kabinet is a service for managing microservices.",
  service: "live.arkitekt.kabinet",
  optional: true,
};