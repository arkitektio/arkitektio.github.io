import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { Alias } from "../fakts/faktsSchema";
import { aliasToHttpPath, aliasToWsPath } from "../alias/helpers";
import { buildGraphQlWard } from "../ward";
import { Service, ServiceBuilder } from "../types";


export const createGraphQLServiceBuilder =
  (possibleTypes: any): ServiceBuilder<Service<ApolloClient<any>>> =>
  (options) => {
    const { alias, token } = options;

    const httpLink = createHttpLink({
      uri: aliasToHttpPath(alias, "graphql"),
      headers: {
        authorization: token ? `Bearer ${token.access_token}` : "",
      },
    });

    const queryLink = httpLink;

    const wslink = new GraphQLWsLink(
      createClient({
        url: aliasToWsPath(alias, "graphql"),
        connectionParams: () => ({
          token: token.access_token,
        }),
      })
    );

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wslink,
      queryLink as unknown as ApolloLink
    );

    const client = new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache({ possibleTypes }),
    });

    const ward = buildGraphQlWard(client);

    return {
      type: "apollo",
      client: client,
      ward: ward, // Replace with appropriate logo component
      alias: alias,
    }
  };
