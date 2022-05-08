import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://more-gecko-90.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "LLb4tz0nYOqX7lRxQjk6XyNdEw4ndbHSIw2Py23UOkZCfZKDrRteROYbXoteR4YG",
  },
});

export default client;
