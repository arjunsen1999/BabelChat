import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
type PrivateRouteProps = {
  children?: ReactNode;
};
export default function MakePrivate({ children }: PrivateRouteProps) {
  const isAuth: boolean = true;
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
}
