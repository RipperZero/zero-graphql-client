import { gql, useQuery } from "@apollo/client";
import {
  FindUsersQuery,
  UsersPaginationQuery,
  UsersPaginationQueryVariables,
} from "@common.models.mainMenu";

export const FRAGMENT_USERINFO = gql`
  fragment userInfo on User {
    id
    idcard
    username
    email
    mobile
    # valid
    # createdUser
    # modifiedUser
    # createdTime
    # modifiedTime
  }
`;

export const QUERY_USERS = gql`
  ${FRAGMENT_USERINFO}
  query findUsers {
    users {
      ...userInfo
    }
  }
`;

export const useQueryUsers = () => {
  const { data, loading, error } = useQuery<FindUsersQuery>(QUERY_USERS, {
    context: { fetchCount: 1 },
    onError: () => {
      console.log("useQueryUsers onError");
    },
  });

  return { data, loading, error };
};

export const QUERY_USERS_PAGINATION = gql`
  ${FRAGMENT_USERINFO}
  query usersPagination($page: Int!, $size: Int!) {
    usersPagination(page: $page, size: $size) {
      page
      size
      rows {
        ...userInfo
      }
      total
    }
  }
`;

export const useQueryUsersPagination = (pageSize: number) => {
  const { fetchMore, data, loading, error } = useQuery<
    UsersPaginationQuery,
    UsersPaginationQueryVariables
  >(QUERY_USERS_PAGINATION, {
    variables: {
      page: 1,
      size: pageSize,
    },
  });

  return { fetchMore, data, loading, error };
};
