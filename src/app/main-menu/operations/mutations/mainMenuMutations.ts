import { gql, useMutation } from "@apollo/client";
import {
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UserInfoFragment,
} from "@common.models.mainMenu";
import { FRAGMENT_USERINFO } from "../queries/mainMenuQueries";

export const UPDATE_USER = gql`
  ${FRAGMENT_USERINFO}
  mutation updateUser($updateUserInput: UserInput!) {
    updateUser(userInput: $updateUserInput) {
      ...userInfo
    }
  }
`;

export const useUpdateUserMutation = () => {
  const [updateUser, { data, error, loading }] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UPDATE_USER, {
    update(cache, { data }) {
      cache.writeFragment<UserInfoFragment>({
        fragment: FRAGMENT_USERINFO,
        data: {
          ...data!.updateUser,
        },
      });
    },
  });
  return { updateUser, data, error, loading };
};
