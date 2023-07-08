import { ReactNode } from "react";
import { InitialStateType } from "./Auth.Types";

export type StateReduxTypes = {
  auth: InitialStateType;
};

export type PrivateRouteProps = {
  children?: ReactNode;
};

export type Event_value_name_types = {
  name: string;
  value: string | number;
};
