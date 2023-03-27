import { gql, useLazyQuery } from "@apollo/client";
import {
  FindUserInfoQuery,
  FindUserInfoQueryVariables,
} from "@common.models.signUp";

export const QUERY_USERINFO = gql`
  query findUserInfo($username: String!) {
    userInfo(username: $username) {
      id
      username
    }
  }
`;

export const useLQueryUserInfo = () => {
  const [queryUserInfo, { data, loading, error }] = useLazyQuery<
    FindUserInfoQuery,
    FindUserInfoQueryVariables
  >(QUERY_USERINFO);

  return [queryUserInfo, { data, loading, error }] as const;
};
export type QueryUserInfo = ReturnType<typeof useLQueryUserInfo>["0"];
