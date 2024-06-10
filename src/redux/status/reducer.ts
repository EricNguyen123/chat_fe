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
