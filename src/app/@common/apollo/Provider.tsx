import { FC, PropsWithChildren } from "react";
import { ApolloProvider as Ap } from "@apollo/client";
import { client } from "./client";

type ApolloProviderProps = {};

export const ApolloProvider: FC<PropsWithChildren<ApolloProviderProps>> = ({
  children,
}) => <Ap client={client}>{children}</Ap>;
