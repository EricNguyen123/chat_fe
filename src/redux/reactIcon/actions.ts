import {
  Action,
} from "../../types/redux";
import types from "./type";

export const getReact = (data: any): Action => ({
  type: types.GET,
  payload: data,
});

export const getReactResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.GET_SUCCESS : types.GET_FAILED,
  payload: result,
});

export const createReact = (data: any): Action => ({
  type: types.POST,
  payload: data,
});

export const createReactResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.POST_SUCCESS : types.POST_FAILED,
  payload: result,
});

export const deleteReact = (data: any): Action => ({
  type: types.DELETE,
  payload: data,
});

export const deleteReactResult = (result: any, isSuccess = true): Action => ({
  type: isSuccess ? types.DELETE_SUCCESS : types.DELETE_FAILED,
  payload: result,
});
