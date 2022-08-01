const app = require('./app');
const config = require('./config');

app.listen(config.port, () => {
  console.log('The server is waiting for connection...'); // eslint-disable-line no-console
});
