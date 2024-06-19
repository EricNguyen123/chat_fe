import { setupSocketEvents } from '../../services/socketEvents';
import { Action, MessageState } from '../../types/redux';
import types from './type';

const initState = {
    loading: false,
    messages: [],
    message: {},
};

export default function userReducer(state: MessageState = initState, action: Action) {
    switch (action.type) {
        case types.GET_MESSAGES: {
            return { ...state, loading: true };
        }

        case types.GET_MESSAGES_SUCCESS: {
            return {
                ...state,
                loading: false,
                messages: action.payload.messages || undefined,
            };
        }

        case types.GET_MESSAGES_FAILED: {
            return { ...state, loading: false };
        }

        case types.POST_MESSAGES: {
            return { ...state, loading: true };
        }

        case types.POST_MESSAGES_SUCCESS: {
            const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
            const currentUserId = dataUser ? dataUser.id : undefined;
            const socketEvents = setupSocketEvents && setupSocketEvents(currentUserId);
            socketEvents &&
                socketEvents.sendRoomMessage(
                    action.payload.data.roomId,
                    action.payload.data.userId,
                    JSON.stringify(action.payload.data),
                );
            socketEvents && socketEvents.sendAllLastMessages(currentUserId);
            return {
                ...state,
                loading: false,
                message: action.payload || undefined,
            };
        }

        case types.POST_MESSAGES_FAILED: {
            return { ...state, loading: false };
        }

        case types.DELETE_MESSAGES: {
            return { ...state, loading: true };
        }

        case types.DELETE_MESSAGES_SUCCESS: {
            const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
            const currentUserId = dataUser ? dataUser.id : undefined;
            const socketEvents = setupSocketEvents && setupSocketEvents(currentUserId);
            socketEvents && socketEvents.sendMessageDelete(action.payload.roomId, action.payload.id);
            socketEvents && socketEvents.sendAllLastMessages(currentUserId);
            return {
                ...state,
                loading: false,
                message: action.payload.message || undefined,
            };
        }

        case types.DELETE_MESSAGES_FAILED: {
            return { ...state, loading: false };
        }

        case types.VOICE_MESSAGES: {
            return { ...state, loading: true };
        }

        case types.VOICE_MESSAGES_SUCCESS: {
            const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
            const currentUserId = dataUser ? dataUser.id : undefined;
            const socketEvents = setupSocketEvents && setupSocketEvents(currentUserId);
            socketEvents &&
                socketEvents.sendRoomMessage(
                    action.payload.data.roomId,
                    action.payload.data.userId,
                    JSON.stringify(action.payload.data),
                );
            socketEvents && socketEvents.sendAllLastMessages(currentUserId);
            return {
                ...state,
                loading: false,
                recordedBlob: action.payload.recordedBlob || undefined,
            };
        }

        case types.VOICE_MESSAGES_FAILED: {
            return { ...state, loading: false };
        }

        case types.OUT_MESSAGES: {
            return { ...state, loading: true };
        }

        case types.OUT_MESSAGES_SUCCESS: {
            const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
            const currentUserId = dataUser ? dataUser.id : undefined;
            const socketEvents = setupSocketEvents && setupSocketEvents(currentUserId);
            socketEvents &&
                socketEvents.sendRoomMessage(
                    action.payload.roomId,
                    action.payload.userId,
                    JSON.stringify(action.payload.outMessage),
                );
            socketEvents && socketEvents.sendAllLastMessages(currentUserId);
            return {
                ...state,
                loading: false,
                outMessage: action.payload.outMessage || undefined,
            };
        }

        case types.OUT_MESSAGES_FAILED: {
            return { ...state, loading: false };
        }

        default:
            return state;
    }
}
