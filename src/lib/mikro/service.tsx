import mikroResult from "@site/src/lib/mikro/api/fragments";
import { Database } from "lucide-react";
import React from "react";
import { createGraphQLServiceBuilder } from "../arkitekt/builders/graphQlServiceBuidler";
import { ServiceDefinition } from "../arkitekt/provider";

export const mikroServiceDefinition: ServiceDefinition = {
  builder: createGraphQLServiceBuilder(mikroResult.possibleTypes),
  requirements: [
    {
      key: "mikro",
      service: "live.arkitekt.mikro",
      optional: false,
    },
  ],
  name: "Mikro",
  description: "Mikro is a service for managing microservices.",
  logo: () => <Database className="w-8 h-8 mx-auto  text-foreground" />,
  key: "mikro",
  service: "live.arkitekt.mikro",
  optional: false,
};
