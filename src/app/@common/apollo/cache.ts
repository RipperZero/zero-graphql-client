import { InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
// import { offsetLimitPagination } from "@apollo/client/utilities";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // @see https://www.apollographql.com/docs/react/pagination/offset-based/
        usersPagination: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,
        },
        // usersPagination: offsetLimitPagination(),
      },
    },
    Pager: {
      fields: {
        // rows: {
        //   // Concatenate the incoming list items with
        //   // the existing list items.
        //   merge(existing = [], incoming) {
        //     return [...existing, ...incoming];
        //   },
        // },
        rows: offsetLimitPagination(),
      },
    },
  },
});
