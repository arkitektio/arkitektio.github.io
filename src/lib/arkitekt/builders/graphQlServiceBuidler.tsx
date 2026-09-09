// @ts-nocheck
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { aliasToHttpPath, aliasToWsPath } from "../alias/helpers";
import { createAuthRetryLink, isSubscriptionQuery } from "../runtime/authRetryLink";
import { Service, ServiceBuilder } from "../types";
import { buildGraphQlWard } from "../ward";


export const createGraphQLServiceBuilder =
  (possibleTypes: any): ServiceBuilder<Service<ApolloClient<any>>> =>
  (options) => {
    const { alias, getToken } = options;

    const httpLink = createHttpLink({
      uri: aliasToHttpPath(alias, "graphql"),
    });

    // The token is resolved per request, not captured at build time, so a
    // refreshed token is picked up without rebuilding the client.
    const queryLink = setContext(async (_, previousContext) => {
      const token = await getToken();

      return {
        headers: {
          ...previousContext.headers,
          authorization: token ? `Bearer ${token.access_token}` : "",
        },
      };
    }).concat(httpLink);

    const wsClient = createClient({
      url: aliasToWsPath(alias, "graphql"),
      connectionParams: async () => {
        // Re-evaluated on every (re)connect, so a socket that comes back for
        // any reason authenticates with a current token.
        const token = await getToken();
        return {
          token: token.access_token,
        };
      },
    });

    const wslink = new GraphQLWsLink(wsClient);

    const splitLink = split(
      ({ query }) => isSubscriptionQuery(query),
      wslink,
      queryLink as unknown as ApolloLink
    );

    const authRetryLink = createAuthRetryLink({
      getToken,
      onReauthenticateSocket: () => {
        // A socket carries the token it was opened with; `connectionParams`
        // is only re-evaluated on a new socket, so the socket has to go.
        // `terminate` reconnects, `dispose` would be permanent teardown.
        try {
          wsClient.terminate();
        } catch (e) {
          console.warn("[arkitekt] failed to terminate ws client for re-auth:", e);
        }
      },
    });

    const client = new ApolloClient({
      link: authRetryLink.concat(splitLink),
      cache: new InMemoryCache({ possibleTypes }),
    });

    const ward = buildGraphQlWard(client);

    return {
      type: "apollo",
      client: client,
      ward: ward,
      alias: alias,
    }
  };
