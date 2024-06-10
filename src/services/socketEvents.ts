import { addMessage, updateUserStatus } from '../redux/status/actions';
import { getSocket } from './socket';
import { store } from '../redux/store';

export const setupSocketEvents = (userId: string) => {
    const socket = getSocket();

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

    const sendRoomMessage = (roomId: string, userId: string, message: any) => {
        socket.emit('messages', { userId, roomId, message });
    };

    const joinRoom = (roomId: string) => {
        socket.emit('joinRoom', { roomId });
    };

    return { sendRoomMessage, joinRoom };
};
