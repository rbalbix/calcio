import http from 'http';
import App from './app';
import { connect } from './database';
import { setupWebSocket } from '@services/websocket';

const app = new App().getApp();
const server = http.createServer(app);

setupWebSocket(server);
connect();

// ease to start Server an to deploy || Verify the environment
const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log('@port', PORT);
});
