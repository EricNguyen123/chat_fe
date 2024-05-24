import { Action, AuthState } from "../../types/redux";
import types from "./type";

const initState = {
  loading: false,
  userInfo: undefined,
};

export default function authReducer(
  state: AuthState = initState,
  action: Action
) {
  switch (action.type) {
    case types.GET_USER: {
      return { ...state, loading: true };
    }

    case types.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload || undefined,
      };
    }

    case types.GET_USER_FAILED: {
      return { ...state, loading: false };
    }

    case types.GET_USERS: {
      return { ...state, loading: true };
    }

    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        usersInfo: action.payload || undefined,
      };
    }

    case types.GET_USERS_FAILED: {
      return { ...state, loading: false };
    }

    case types.GET_OTHER_USER: {
      return { ...state, loading: true };
    }

    case types.GET_OTHER_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload || undefined,
      };
    }

    case types.GET_OTHER_USER_FAILED: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}
