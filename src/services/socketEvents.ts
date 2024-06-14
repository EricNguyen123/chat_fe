import {
    addMessage,
    allLastMessages,
    deleteMessage,
    updateUserStatus,
    deleteRoom,
    changedMessage,
} from '../redux/status/actions';
import { getSocket } from './socket';
import { store } from '../redux/store';

export const setupSocketEvents = (userId: string) => {
    const socket = getSocket();
    const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
    const currentUserId = dataUser ? dataUser.id : undefined;

    if (!socket) {
        return;
    }

    socket.on('friendOnline', (data: { userId: string }) => {
        store.dispatch(updateUserStatus(data.userId, true));
    });

    socket.on('friendOffline', (data: { userId: string }) => {
        store.dispatch(updateUserStatus(data.userId, false));
    });

    socket.on('newMessage', (data: { userId: string; roomId: string; message: any }) => {
        store.dispatch(addMessage(data));
    });

    socket.on('deleteMessage', (data: { id: string; roomId: string }) => {
        store.dispatch(deleteMessage(data));
    });

    socket.on('latsMessages', (data) => {
        store.dispatch(allLastMessages(data));
    });

    socket.on('deleteRoom', (data) => {
        store.dispatch(deleteRoom(data));
    });

    socket.on('changedMessage', (data: { userId: string; messageId: any }) => {
        store.dispatch(changedMessage(data));
    });

    const sendRoomMessage = (roomId: string, userId: string, message: any) => {
        socket.emit('messages', { userId, roomId, message });
    };

    const joinRoom = (roomId: string) => {
        socket.emit('joinRoom', { roomId });
    };

    const reload = () => {
        socket.emit('reload', { success: true, userId: parseInt(userId, 10) });
    };

    const sendMessageDelete = (roomId: string, id: string) => {
        socket.emit('messageDelete', { id, roomId });
    };

    const sendAllLastMessages = (userId: string) => {
        socket.emit('reqLastMessage', { userId });
    };

    const sendDeleteRoom = (roomId: string, userId: string) => {
        socket.emit('reqDeleteRoom', { roomId, userId });
    };

    const sendChangedMessage = (userId: string, messageId: string) => {
        socket.emit('reqMessageReact', { userId, messageId });
    };

    return {
        sendRoomMessage,
        joinRoom,
        reload,
        sendMessageDelete,
        sendAllLastMessages,
        sendDeleteRoom,
        sendChangedMessage,
    };
};
