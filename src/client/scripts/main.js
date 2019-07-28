(function (root) {

    let socket = null;

    function sendMessage(data) {
        const payload = JSON.stringify(data);
        socket.send(payload);
    }

    function main() {
        console.log('hello world');

        const url = 'ws://localhost:3000';
        socket = new WebSocket(url);

        //nasluchac na klikniecie
    
        //wyslac message po WebSocket w handlerze klikniecie
        
        socket.addEventListener('open', () => {
            console.log('open');
            //const payload = { action: 'alarm' };

            //socket.send(JSON.stringify(payload));
        });
        socket.addEventListener('close', () => {
            console.log('close');
        });
        socket.addEventListener('message', () => {
            console.log('message');
            try {
                const $message = document.querySelector('.message');
                $message.classList.remove('hidden');
            } catch (err) {
                console.error(err);
            }
        });
        socket.addEventListener('error', (err) => {
            console.log(err);
        });

        setupUI();

    }

    root.addEventListener('DOMContentLoaded', main);
    root.sendMessage = sendMessage;
    

}(window));
