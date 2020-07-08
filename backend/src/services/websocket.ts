// const socketio = require('socket.io');
// const parseStringAsArray = require('./utils/parseStringAsArray');
// const calculateDistance = require('./utils/calculateDistance');

import socketio, { Server, Socket } from 'socket.io';
import { Server as httpServer } from 'http';

let io: Server;

export const setupWebSocket = (server: httpServer) => {
  io = socketio(server);

  io.on('connection', (socket: Socket) => {
    console.log(`Connected: ${socket.id}`);
  });
};

// exports.sendMessage = (to, message, data) => {
//   to.forEach((connection) => {
//     io.to(connection.id).emit(message, data);
//   });
// };
