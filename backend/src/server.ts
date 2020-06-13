import App from './app';
import { connect } from './database';

const app = new App().getApp();

connect();

// ease to start Server an to deploy || Verify the environment
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log('@port', PORT);
});
