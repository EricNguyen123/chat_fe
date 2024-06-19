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

export const deleteMessages = (data: any): Action => ({
    type: types.DELETE_MESSAGES,
    payload: data,
});

export const deleteMessagesResult = (result: any, isSuccess = true): Action => ({
    type: isSuccess ? types.DELETE_MESSAGES_SUCCESS : types.DELETE_MESSAGES_FAILED,
    payload: result,
});

export const voiceMessages = (data: any): Action => ({
    type: types.VOICE_MESSAGES,
    payload: data,
});

export const voiceMessagesResult = (result: any, isSuccess = true): Action => ({
    type: isSuccess ? types.VOICE_MESSAGES_SUCCESS : types.VOICE_MESSAGES_FAILED,
    payload: result,
});

export const outMessages = (data: any): Action => ({
    type: types.OUT_MESSAGES,
    payload: data,
});

export const outMessagesResult = (result: any, isSuccess = true): Action => ({
    type: isSuccess ? types.OUT_MESSAGES_SUCCESS : types.OUT_MESSAGES_FAILED,
    payload: result,
});
