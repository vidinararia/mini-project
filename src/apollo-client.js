import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "https://more-gecko-90.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "LLb4tz0nYOqX7lRxQjk6XyNdEw4ndbHSIw2Py23UOkZCfZKDrRteROYbXoteR4YG",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://more-gecko-90.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "LLb4tz0nYOqX7lRxQjk6XyNdEw4ndbHSIw2Py23UOkZCfZKDrRteROYbXoteR4YG",
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
