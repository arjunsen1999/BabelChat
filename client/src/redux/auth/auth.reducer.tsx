import {
  Auth_Reducer_Action_Types,
  DataTypes,
  InitialStateType,
} from "../../Types/Auth.Types";

import {
  auth_isError,
  auth_isLoading,
  auth_isSuccess,
  auth_reset,
} from "./auth.actionType";

const storedData = localStorage.getItem("babelChatData");
const data: DataTypes = storedData ? JSON.parse(storedData) : false;

// auth reducer initial state
const initialState: InitialStateType = {
  isAuth: data,
  loading: false,
  isSuccess: false,
  isError: false,
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

