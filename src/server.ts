import api from './api';
import { readConfig } from './config';

const config = readConfig();

const server = api({
  title: '@eyevinn/typescript-nodejs',
  redis: config.redis,
  encore: config.encore
});

server.listen({ port: config.port, host: config.host }, (err, address) => {
  if (err) {
    throw err;
  }
  console.log(`Server listening on ${address}`);
});

export default server;
