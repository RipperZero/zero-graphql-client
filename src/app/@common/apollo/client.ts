import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

export const client = new ApolloClient({
  cache,
  uri: "http://localhost:8080/zero",
  connectToDevTools: true,
});
