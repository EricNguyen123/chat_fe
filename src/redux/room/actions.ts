import { Action } from '../../types/redux';
import types from './type';

export const getRoom = (): Action => ({
    type: types.GET_ROOM,
});

export const getRoomResult = (result: any, isSuccess = true): Action => ({
    type: isSuccess ? types.GET_ROOM_SUCCESS : types.GET_ROOM_FAILED,
    payload: result,
});

export const createRoom = (data: any): Action => ({
    type: types.POST_ROOM,
    payload: data,
});

export const createRoomResult = (result: any, isSuccess = true): Action => ({
    type: isSuccess ? types.POST_ROOM_SUCCESS : types.POST_ROOM_FAILED,
    payload: result,
});

export const createGroupRoom = (data: any): Action => ({
    type: types.POST_GROUP_ROOM,
    payload: data,
});

export const createGroupRoomResult = (result: any, isSuccess = true): Action => ({
    type: isSuccess ? types.POST_GROUP_ROOM_SUCCESS : types.POST_GROUP_ROOM_FAILED,
    payload: result,
});
