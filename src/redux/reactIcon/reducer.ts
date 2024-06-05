import { Action, ReactState } from "../../types/redux";
import types from "./type";

const initState = {
  loading: false,
  react: undefined,
  reacts: [],
};

export default function userReducer(
  state: ReactState = initState,
  action: Action
) {
  switch (action.type) {
    case types.GET: {
      return { ...state, loading: true };
    }

    case types.GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        reacts: action.payload || undefined,
      };
    }

    case types.GET_FAILED: {
      return { ...state, loading: false };
    }

    case types.DELETE: {
      return { 
        ...state, 
        loading: true,
       };
    }

    case types.DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        react: action.payload || undefined,
      };
    }

    case types.DELETE_FAILED: {
      return { ...state, loading: false };
    }

    case types.POST: {
      return { 
        ...state, 
        loading: true,
       };
    }

    case types.POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        react: action.payload || undefined,
        reacts: state.reacts.length === 0 ? [action.payload] : state.reacts.map((react: any) =>
          react.id === action.payload.id ? action.payload : react),
      };
    }

    case types.POST_FAILED: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}
