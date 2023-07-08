import { ChangeEvent, ReactElement } from "react";

export type SignupInputBoxProps = {
  icon: ReactElement;
  type: string;
  placeholder: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export type signup_initialState_types = {
  name: string;
  email: string;
  password: string;
};
