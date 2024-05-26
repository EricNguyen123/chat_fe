import { userInfo } from "os";
import { Action, AuthState } from "../../types/redux";
import types from "./type";

const initState = {
  loading: false,
  userInfo: undefined,
  status: false,
  isFollowing: false
};

export default function userReducer(
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

    case types.FOLLOWING: {
      return { ...state, loading: true };
    }

    case types.FOLLOWING_SUCCESS: {
      return {
        ...state,
        loading: false,
        status: action.payload.success || false,
        userInfo: {  
          ...state.userInfo,
          followingCount: action.payload.followingCount, 
          followerCount: action.payload.followerCount }
      };
    }

    case types.FOLLOWING_FAILED: {
      return { ...state, loading: false };
    }

    case types.UNFOLLOW: {
      return { ...state, loading: true };
    }

    case types.UNFOLLOW_SUCCESS: {
      return {
        ...state,
        loading: false,
        status: !action.payload.success || undefined,
        isFollowing: false,
        userInfo: {  
          ...state.userInfo,
          followingCount: action.payload.followingCount, 
          followerCount: action.payload.followerCount }
      };
    }

    case types.UNFOLLOW_FAILED: {
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
        isFollowing: action.payload.isFollowing || undefined,
      };
    }

    case types.GET_OTHER_USER_FAILED: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}
