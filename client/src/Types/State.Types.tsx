import { ReactNode } from "react";
import { InitialStateType } from "./Auth.Types";

export type StateReduxTypes = {
  auth: InitialStateType;
};

export type PrivateRouteProps = {
  children?: ReactNode;
};
