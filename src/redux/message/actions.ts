import { Action } from '../../types/redux';
import types from './type';

export const getMessages = (data: any): Action => ({
    type: types.GET_MESSAGES,
    payload: data,
});

export const getMessagesResult = (result: any, isSuccess = true): Action => ({
    type: isSuccess ? types.GET_MESSAGES_SUCCESS : types.GET_MESSAGES_FAILED,
    payload: result,
});

export const createMessages = (data: any): Action => ({
    type: types.POST_MESSAGES,
    payload: data,
});

export const createMessagesResult = (result: any, isSuccess = true): Action => ({
    type: isSuccess ? types.POST_MESSAGES_SUCCESS : types.POST_MESSAGES_FAILED,
    payload: result,
});
