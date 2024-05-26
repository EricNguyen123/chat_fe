import { Action, UploadFile } from "../../types/redux";
import types from "./type";

const initState = {
  loading: false,
  media: undefined,
};

export default function uploadFileReducer(
  state: UploadFile = initState,
  action: Action
) {
  switch (action.type) {
    case types.UPLOAD_FILE: {
      return { ...state, loading: true };
    }

    case types.UPLOAD_FILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        media: action.payload.mediaItem || undefined,
      };
    }

    case types.UPLOAD_FILE_FAILED: {
      return { ...state, loading: false };
    }

    case types.UPLOAD_AVATAR: {
      return { ...state, loading: true };
    }

    case types.UPLOAD_AVATAR_SUCCESS: {
      return {
        ...state,
        loading: false,
        media: action.payload.mediaItem || undefined,
      };
    }

    case types.UPLOAD_AVATAR_FAILED: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
}
