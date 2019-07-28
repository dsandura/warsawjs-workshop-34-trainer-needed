const { registerClient, deleteClient, broadcast } = require('../services/client.manager');

module.exports = (socket) => {

    //const payload = { obiad: '13:15' };
    //socket.send(JSON.stringify(payload)); 

    registerClient(socket);

    socket.addEventListener('open', () => {
        console.log('open');
        
    });

    socket.addEventListener('message', (payload) => {
        try {
            const data = JSON.parse(payload);
            broadcast(socket, payload);
            // console.log('message is coming');
            console.log(data);
        } catch (err) {
            console.error(err);

        }
    });

    socket.addEventListener('close', () => {
        console.log('close');
        deleteClient(socket);
    });

    socket.addEventListener('error', (err) => {
        console.log('error', err);
        deleteClient(socket);
    });
};
