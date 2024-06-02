import { userInfo } from "os";
import { Action, PostState } from "../../types/redux";
import types from "./type";

const initState = {
  loading: false,
  post: undefined,
  posts: [],
};

export default function userReducer(
  state: PostState = initState,
  action: Action
) {
  switch (action.type) {
    case types.GET_POST: {
      return { ...state, loading: true };
    }

    case types.GET_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        post: action.payload || undefined,
      };
    }

    case types.GET_POST_FAILED: {
      return { ...state, loading: false };
    }

    case types.GET_POSTS: {
      return { ...state, loading: true };
    }

    case types.GET_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload || undefined,
      };
    }

    case types.GET_POSTS_FAILED: {
      return { ...state, loading: false };
    }

    case types.POST_POST: {
      return { ...state, loading: true };
    }

    case types.POST_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        post: action.payload || undefined,
      };
    }

    case types.POST_POST_FAILED: {
      return { ...state, loading: false };
    }

    case types.UPDATE_POST: {
      return { ...state, loading: true };
    }

    case types.UPDATE_POST_SUCCESS: {
      const { success, ...updatedPost } = action.payload;
      return {
        ...state,
        loading: false,
        post: action.payload || undefined,
        posts: state.posts.map((post: any) =>
          post.id === action.payload.id ? updatedPost : post
        ),
      };
    }

    case types.UPDATE_POST_FAILED: {
      return { ...state, loading: false };
    }

    case types.DELETE_POST: {
      return { ...state, loading: true };
    }

    case types.DELETE_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        post: action.payload || undefined,
      };
    }

    case types.DELETE_POST_FAILED: {
      return { ...state, loading: false };
    }

    case types.GET_USER_POSTS: {
      return { ...state, loading: true };
    }

    case types.GET_USER_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload || undefined,
      };
    }

    case types.GET_USER_POSTS_FAILED: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}
