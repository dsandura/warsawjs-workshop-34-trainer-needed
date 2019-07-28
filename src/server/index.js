const ws = require('ws');

const path = require('path');

const dotenv = require('dotenv');

dotenv.config({
    path: path.join(__dirname, 'config', 'app.env')
});

const setupServerHandler = require('./handlers/server.handler');

const port = Number(process.env.PORT);

const settings = { port };

const server = new ws.Server(settings);

setupServerHandler(server);
