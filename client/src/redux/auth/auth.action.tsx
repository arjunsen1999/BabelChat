import axios from "axios";
import { signup_initialState_types } from "../../Types/Signup.Types";
import {
  auth_isError,
  auth_isLoading,
  auth_isSuccess,
} from "./auth.actionType";
import { Dispatch } from "redux";
import { Auth_Reducer_Action_Types } from "../../Types/Auth.Types";
import notification from "../../toast";

// Sign Up
export const signup_action =
  (formData: signup_initialState_types) =>
  async (dispatch: Dispatch<Auth_Reducer_Action_Types>): Promise<void> => {
    dispatch({ type: auth_isLoading, payload: true });
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
        formData
      );
      dispatch({ type: auth_isLoading, payload: false });
      notification("success", data.message);
      dispatch({ type: auth_isSuccess });
    } catch (error: any) {
      dispatch({ type: auth_isLoading, payload: false });
      notification("error", error.response.data.message);
      dispatch({ type: auth_isError });
    }
  };
