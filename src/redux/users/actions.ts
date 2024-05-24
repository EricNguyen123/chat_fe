import {
  Action,
} from "../../types/redux";
import types from "./type";

export const getUser = (): Action => ({
  type: types.GET_USER,
});

export const getUserResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_USER_SUCCESS : types.GET_USER_FAILED,
  payload: result,
});

export const getOtherUser = (data: any): Action => ({
  type: types.GET_OTHER_USER,
  payload: data,
});

export const getOtherUserResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_OTHER_USER_SUCCESS : types.GET_OTHER_USER_FAILED,
  payload: result,
});

export const getUsers = (): Action => ({
  type: types.GET_USERS,
});

export const getUsersResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_USERS_SUCCESS : types.GET_USERS_FAILED,
  payload: result,
});

export const following = (data: any): Action => ({
  type: types.FOLLOWING,
  payload: data,
});

export const followingResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.FOLLOWING_SUCCESS : types.FOLLOWING_FAILED,
  payload: result,
});

export const unfollow = (data: any): Action => ({
  type: types.UNFOLLOW,
  payload: data,
});

export const unfollowResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.UNFOLLOW_SUCCESS : types.UNFOLLOW_FAILED,
  payload: result,
});
