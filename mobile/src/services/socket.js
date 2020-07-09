import socketio from 'socket.io-client';
import { baseURL } from '../config';

const socket = socketio(baseURL, {
  autoConnect: false,
});

function subscribeToNews(subscribeFunction) {
  socket.on('matches-updated', subscribeFunction);
}

function connect() {
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNews };
