import {
  Action,
} from "../../types/redux";
import types from "./type";

export const getPost = (): Action => ({
  type: types.GET_POST,
});

export const getPostResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_POST_SUCCESS : types.GET_POST_FAILED,
  payload: result,
});

export const getPosts = (data?: any): Action => ({
  type: types.GET_POSTS,
  payload: data,
});

export const getPostsResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_POSTS_SUCCESS : types.GET_POSTS_FAILED,
  payload: result,
});

export const getUserPosts = (data?: any): Action => ({
  type: types.GET_USER_POSTS,
  payload: data,
});

export const getUserPostsResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_USER_POSTS_SUCCESS : types.GET_USER_POSTS_FAILED,
  payload: result,
});

export const postPost = (data: any): Action => ({
  type: types.POST_POST,
  payload: data,
});

export const postPostResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.POST_POST_SUCCESS : types.POST_POST_FAILED,
  payload: result,
});

export const updatePost = (data: any): Action => ({
  type: types.UPDATE_POST,
  payload: data,
});

export const updatePostResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.UPDATE_POST_SUCCESS : types.UPDATE_POST_FAILED,
  payload: result,
});

export const deletePost = (data: any): Action => ({
  type: types.DELETE_POST,
  payload: data,
});

export const deletePostResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.DELETE_POST_SUCCESS : types.DELETE_POST_FAILED,
  payload: result,
});
