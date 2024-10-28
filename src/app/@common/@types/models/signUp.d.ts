declare module "@common.models.signUp" {
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

  type UserInfoFragment = {
    __typename?: "User";
    id: string;
    idcard: string;
    username: string;
    email: string;
    mobile: string;
    valid: number;
    createdUser: string;
    modifiedUser: string;
    createdTime: string;
    modifiedTime: string;
  };

  type InsertUserMutationVariables = Exact<{
    insertUserInput: UserInput;
  }>;

  type InsertUserMutation = {
    insertUser: {
      __typename?: "User";
      id: string;
      idcard: string;
      username: string;
      email: string;
      mobile: string;
      valid: number;
      createdUser: string;
      modifiedUser: string;
      createdTime: string;
      modifiedTime: string;
    };
  };

  type FindUserInfoQueryVariables = Exact<{
    username: Scalars["String"];
  }>;

  type FindUserInfoQuery = {
    userInfo: { __typename?: "User"; id: string; username: string };
  };
}
