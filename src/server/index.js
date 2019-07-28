const ws = require('ws');
const { verifyClient } = require('./services/verify-client');

const path = require('path');

const dotenv = require('dotenv');

dotenv.config({
    path: path.join(__dirname, 'config', 'app.env')
});

const setupServerHandler = require('./handlers/server.handler');

const port = Number(process.env.PORT);

const settings = { port, verifyClient };

const server = new ws.Server(settings);

setupServerHandler(server);
