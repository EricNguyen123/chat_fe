import { Action, RoomState } from '../../types/redux';
import types from './type';

const initState = {
    loading: false,
    rooms: [],
    room: {},
};

export default function userReducer(state: RoomState = initState, action: Action) {
    switch (action.type) {
        case types.GET_ROOM: {
            return { ...state, loading: true };
        }

        case types.GET_ROOM_SUCCESS: {
            return {
                ...state,
                loading: false,
                rooms: action.payload.rooms || undefined,
            };
        }

        case types.GET_ROOM_FAILED: {
            return { ...state, loading: false };
        }

        case types.POST_ROOM: {
            return { ...state, loading: true };
        }

        case types.POST_ROOM_SUCCESS: {
            return {
                ...state,
                loading: false,
                room: action.payload || undefined,
                // rooms: [...state.rooms, action.payload],
            };
        }

        case types.POST_ROOM_FAILED: {
            return { ...state, loading: false };
        }

        case types.POST_GROUP_ROOM: {
            return { ...state, loading: true };
        }

        case types.POST_GROUP_ROOM_SUCCESS: {
            console.log('state', state);
            return {
                ...state,
                loading: false,
                room: action.payload || undefined,
                // rooms: [...state.rooms, action.payload],
            };
        }

        case types.POST_GROUP_ROOM_FAILED: {
            return { ...state, loading: false };
        }

        default:
            return state;
    }
}
