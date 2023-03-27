import { gql, useMutation } from "@apollo/client";
import {
  InsertUserMutation,
  InsertUserMutationVariables,
} from "@common.models.signUp";

export const FRAGMENT_USERINFO = gql`
  fragment userInfo on User {
    id
    idcard
    username
    email
    mobile
    valid
    createdUser
    modifiedUser
    createdTime
    modifiedTime
  }
`;

export const INSERT_USER = gql`
  ${FRAGMENT_USERINFO}
  mutation insertUser($insertUserInput: UserInput!) {
    insertUser(userInput: $insertUserInput) {
      ...userInfo
    }
  }
`;

export const useInsertUserMutation = () => {
  const [insertUser, { data, loading, error }] = useMutation<
    InsertUserMutation,
    InsertUserMutationVariables
  >(INSERT_USER);
  return [insertUser, { data, loading, error }] as const;
};
export type InsertUser = ReturnType<typeof useInsertUserMutation>["0"];
