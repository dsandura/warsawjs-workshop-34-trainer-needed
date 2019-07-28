const { registerClient, deleteClient, broadcast } = require('../services/client.manager');

module.exports = (socket) => {

    //const payload = { obiad: '13:15' };
    //socket.send(JSON.stringify(payload)); 

    registerClient(socket);

    socket.on('message', (payload) => {
        try {
            const data = JSON.parse(payload);
            broadcast(socket, payload);
            // console.log('message is coming');
            console.log(data);
        } catch (err) {
            console.error(err);

        }
    });

    socket.on('close', () => {
        console.log('close');
        deleteClient(socket);
    });

    socket.on('error', (err) => {
        console.log('error', err);
        deleteClient(socket);
    });
};
