import { message } from 'antd';
import types from './type';

interface UserStatusState {
    [key: string]: boolean;
}

const initialState: UserStatusState = {};

export default function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case types.UPDATE_USER_STATUS:
            return {
                ...state,
                [action.payload.userId]: action.payload.isOnline,
            };
        default:
            return state;
    }
}

interface AddMessageState {
    message: any;
}

const initialMessageState: AddMessageState = { message: {} };

export function addMessageReducer(state = initialMessageState, action: any) {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
}

export function deleteMessageReducer(state = initialMessageState, action: any) {
    switch (action.type) {
        case types.DELETE_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
}

interface AllLastMessages {
    allLastMessages: any;
}

const initialAllLastMessagesState: AllLastMessages[] = [];
export function allLastMessagesReducer(state = initialAllLastMessagesState, action: any) {
    switch (action.type) {
        case types.ALL_LAST_MESSAGES:
            return {
                ...state,
                allLastMessages: action.payload,
            };
        default:
            return state;
    }
}

const initialRoomState: { deleteRoom: {} } = { deleteRoom: {} };
export function deleteRoomReducer(state = initialRoomState, action: any) {
    switch (action.type) {
        case types.DELETE_ROOM:
            return {
                ...state,
                deleteRoom: action.payload.roomId,
            };
        default:
            return state;
    }
}

export function changedMessageReducer(state = initialMessageState, action: any) {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return {
                ...state,
                message: action.payload.message,
                userId: action.payload.userId,
            };
        default:
            return state;
    }
}
