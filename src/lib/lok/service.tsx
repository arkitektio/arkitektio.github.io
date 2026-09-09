// @ts-nocheck
import lokReust from "@/lib/lok/api/fragments";
import { Database } from "lucide-react";
import React from "react";
import { createGraphQLServiceBuilder } from "../arkitekt/builders/graphQlServiceBuidler";
import { ServiceDefinition } from "../arkitekt/provider";

export const lokServiceDefinition: ServiceDefinition = {
  builder: createGraphQLServiceBuilder(lokReust.possibleTypes),
  logo: () => <Database className="w-8 h-8 mx-auto text-foreground" />,
  description: "Lok is a service for managing microservices.",
  key: "lok",
  name: "Lok",
  service: "live.arkitekt.lok",
  optional: true,
};