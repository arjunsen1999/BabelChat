import {
  Auth_Reducer_Action_Types,
  DataTypes,
  InitialStateType,
} from "../../Types/Auth.Types";
import {
  login_action_types,
  login_initialState_types,
} from "../../Types/Login.Types";
import {
  signup_action_types,
  signup_initialState_types,
} from "../../Types/Signup.Types";
import {
  auth_isError,
  auth_isLoading,
  auth_isSuccess,
  auth_reset,
} from "./auth.actionType";

import {
  signup_name,
  signup_email,
  signup_password,
  signup_reset,
} from "./auth.actionType";

import { login_email, login_password, login_reset } from "./auth.actionType";

const storedData = localStorage.getItem("babelChatData");
const data: DataTypes = storedData ? JSON.parse(storedData) : false;

// auth reducer initial state
const initialState: InitialStateType = {
  isAuth: data,
  loading: false,
  isSuccess: false,
  isError: false,
};

// signup state reducer initial state
const signup_initialState: signup_initialState_types = {
  name: "",
  email: "",
  password: "",
};

// login state reducer initial state
const login_initialState: login_initialState_types = {
  email: "",
  password: "",
};

// auth reducer
export const auth_reducer = (
  state = initialState,
  { type, payload }: Auth_Reducer_Action_Types
): InitialStateType => {
  switch (type) {
    case auth_isSuccess:
      return {
        ...state,
        isSuccess: true,
        isAuth: payload,
      };
    case auth_isError:
      return {
        ...state,
        isError: true,
      };
    case auth_isLoading:
      return {
        ...state,
        loading: payload,
      };
    case auth_reset:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isError: false,
      };

    default:
      return state;
  }
};

// signup state reducer
export const signup_state_reducer = (
  state: signup_initialState_types = signup_initialState,
  { type, payload }: signup_action_types
) => {
  switch (type) {
    case signup_name:
      return {
        ...state,
        name: payload,
      };
    case signup_email:
      return {
        ...state,
        email: payload,
      };
    case signup_password:
      return {
        ...state,
        password: payload,
      };

    case signup_reset:
      return {
        ...state,
        name: "",
        email: "",
        password: "",
      };

    default:
      return state;
  }
};

// login state reducer
export const login_state_reducer = (
  state: login_initialState_types = login_initialState,
  { type, payload }: login_action_types
): login_initialState_types => {
  switch (type) {
    case login_email:
      return {
        ...state,
        email: payload,
      };

    case login_password:
      return {
        ...state,
        password: payload,
      };

    case login_reset:
      return {
        ...state,
        email: "",
        password: "",
      };

    default:
      return state;
  }
};
