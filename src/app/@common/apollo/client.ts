import { ApolloClient, HttpLink, Operation, from } from "@apollo/client";
import { cache } from "./cache";
import { RetryLink } from "@apollo/client/link/retry";
import { onError } from "@apollo/client/link/error";

const errorLink = onError((error) => {
  const { graphQLErrors, networkError, operation } = error;
  if (graphQLErrors) {
    // graphQLErrors.map(({ message, locations, path }) =>
    //   console.log(
    //     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    //   ),
    // );
    console.log("graphQLErrorsgraphQLErrorsgraphQLErrorsgraphQLErrors");
  }

  if (networkError) {
    // console.log(`[Network error]: ${networkError}`, networkError);
    console.log("networkErrornetworkErrornetworkErrornetworkError");
    console.log(operation.getContext());
  }
});

const retryLink = new RetryLink({
  delay: {
    initial: 100,
    max: 150,
  },
  // attempts: {
  //   max: 3,
  //   retryIf: (error, operation) => {
  //     console.log(error);
  //     return true;
  //   },
  // },
  attempts: (count: number, operation: Operation, _error: unknown) => {
    // console.log(count);
    operation.setContext({ fetchCount: count });

    if (count === 3) {
      // console.log("====================================");
      // console.log(operation.getContext());
      return false;
    }

    return true;
  },
});

const httpLink = new HttpLink({
  uri: "http://localhost:8080/zero",
});

const client = new ApolloClient({
  cache,
  uri: "http://localhost:8080/zero",
  connectToDevTools: true,
  link: from([retryLink, errorLink, httpLink]),
});

export { client };
