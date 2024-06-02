import { io, Socket } from 'socket.io-client';

const URL: string = process.env.REACT_APP_BASE_URL || 'http://localhost:3002';
const socket: Socket = io(URL);

export default socket;
