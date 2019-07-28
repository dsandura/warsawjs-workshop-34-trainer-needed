function setupUI() {
    console.log('alarm-button: setupUI');
    const $alarm = document.body.querySelector('#btn');
    $alarm.addEventListener('click', () => {
        sendMessage({ action: 'alarm'});
    });
    
}