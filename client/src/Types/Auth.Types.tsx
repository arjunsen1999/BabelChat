// auth reducer start
export type InitialStateType = {
  isAuth: boolean | { token: string; name: string };
  loading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

export type DataTypes = boolean | string | null | any | undefined;

export type Auth_Reducer_Action_Types = {
  type: string;
  payload?: any;
};

export type authTypes = {
    isAuth: boolean | { token: string; name: string };
}

// auth reducer end
