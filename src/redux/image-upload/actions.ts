import {
  Action,
} from "../../types/redux";
import types from "./type";

export const uploadFile = (data: any): Action => ({
  type: types.UPLOAD_FILE,
  payload: data,
});

export const uploadFileResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.UPLOAD_FILE_SUCCESS : types.UPLOAD_FILE_FAILED,
  payload: result,
});

export const uploadAvatar = (data: any): Action => ({
  type: types.UPLOAD_AVATAR,
  payload: data,
});

export const uploadAvatarResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.UPLOAD_AVATAR_SUCCESS : types.UPLOAD_AVATAR_FAILED,
  payload: result,
});

export const getImage = (data: any): Action => ({
  type: types.GET_IMAGE,
  payload: data,
});

export const getImageResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_IMAGE_SUCCESS : types.GET_IMAGE_FAILED,
  payload: result,
});
