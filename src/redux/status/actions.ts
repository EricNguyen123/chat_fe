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
