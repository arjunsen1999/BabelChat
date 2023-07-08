import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { auth_reducer, login_state_reducer, signup_state_reducer } from "./auth/auth.reducer";


const rootReducer = combineReducers({
  auth : auth_reducer,
  signup_state : signup_state_reducer,
  login_state : login_state_reducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
