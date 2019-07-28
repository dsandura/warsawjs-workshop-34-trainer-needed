const setupSocketHandler = require('./socket.handler');

module.exports = (server) => {

    // nasluchujemy
    server.on('headers', () => {
        console.log('headers');
    });

    server.on('connection', (socket, _request) => {
        console.log('connection');
        setupSocketHandler(socket);
    });

    server.on('listening', () => {
        console.log('listening');

    });

    server.on('error', (err) => {
        console.log('error', err);

    });
};
