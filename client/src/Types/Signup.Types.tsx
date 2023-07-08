import { ReactElement } from "react";

export type SignupInputBoxProps = {
  icon: ReactElement;
  type: string;
  placeholder: string;
};

export type signup_initialState_types = {
  name: string;
  email: string;
  password: string;
};

export type signup_action_types = {
    type : string,
    payload : string
}