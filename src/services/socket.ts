import { io, Socket } from 'socket.io-client';

const URL: string = process.env.REACT_APP_BASE_URL || 'http://localhost:3002';
const socket: Socket = io(URL);

export const connectSocket = (userId: string): void => {
    socket.on('connect', () => {
        console.log('Connected to socket server');
        if (socket) {
            socket.emit('registerUser', parseInt(userId, 10));
        }
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from socket server');
    });
};

export const disconnectSocket = (): void => {
    if (socket) {
        socket.disconnect();
    }
};

export const getSocket = (): Socket | null => {
    return socket;
};
