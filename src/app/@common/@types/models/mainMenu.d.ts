declare module "@common.models.mainMenu" {
  type Maybe<T> = T | null;
  type InputMaybe<T> = Maybe<T>;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
  type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
  };

  type UserInput = {
    email?: InputMaybe<Scalars["String"]>;
    /**  TODO add ! ?? */
    password?: InputMaybe<Scalars["String"]>;
    username: Scalars["String"];
  };

  type UpdateUserMutationVariables = Exact<{
    updateUserInput: UserInput;
  }>;

  type UpdateUserMutation = {
    updateUser: {
      __typename?: "User";
      id: string;
      idcard: string;
      username: string;
      email: string;
      mobile: string;
    };
  };

  type UserInfoFragment = {
    __typename?: "User";
    id: string;
    idcard: string;
    username: string;
    email: string;
    mobile: string;
  };

  type FindUsersQueryVariables = Exact<{ [key: string]: never }>;

  type FindUsersQuery = {
    users: Array<{
      __typename?: "User";
      id: string;
      idcard: string;
      username: string;
      email: string;
      mobile: string;
    }>;
  };

  type UsersPaginationQueryVariables = Exact<{
    page: Scalars["Int"];
    size: Scalars["Int"];
  }>;

  type UsersPaginationQuery = {
    usersPagination: {
      __typename?: "Pager";
      page: number;
      size: number;
      total: number;
      rows: Array<{
        __typename?: "User";
        id: string;
        idcard: string;
        username: string;
        email: string;
        mobile: string;
      }>;
    };
  };
}
