import { Action } from '../../types/redux';
import types from './type';

export const updateUserStatus = (userId: string, isOnline: boolean): Action => ({
    type: types.UPDATE_USER_STATUS,
    payload: { userId, isOnline },
});

export const addMessage = (message: any) => ({
    type: types.ADD_MESSAGE,
    payload: message,
});

export const deleteMessage = (message: any) => ({
    type: types.DELETE_MESSAGE,
    payload: message,
});

export const allLastMessages = (message: any) => ({
    type: types.ALL_LAST_MESSAGES,
    payload: message,
});

export const deleteRoom = (roomId: string) => ({
    type: types.DELETE_ROOM,
    payload: { roomId },
});

export const changedMessage = (data: any) => ({
    type: types.CHANGE_MESSAGE,
    payload: data,
});
