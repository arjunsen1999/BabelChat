import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps, StateReduxTypes } from "../Types/State.Types";
import { InitialStateType, authTypes } from "../Types/Auth.Types";

export default function MakePrivate({ children }: PrivateRouteProps) {
  const { isAuth }: authTypes = useSelector(
    (state: StateReduxTypes): InitialStateType => state.auth
  );
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
}
