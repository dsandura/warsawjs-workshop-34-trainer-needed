const debug = require('debug');

const console = {
    log: debug('client-manager:log')
};

const clients = [];

function registerClient(socket) {
    console.log('register client');
    clients.push(socket);
}

function deleteClient(client) {
    console.log('delete client');
    clients.splice(client, 1);

}

function broadcast(me, message) {
    clients.forEach((client) => {
        if (client !== me) {
            client.send(message);
        }
    });
}


module.exports = {
    registerClient,
    deleteClient,
    broadcast
}