function setupUI() {
    console.log('alarm-button: setupUI');
    const $alarm = document.querySelector('#btn');
    $alarm.addEventListener('click', () => {
        sendMessage({ action: 'alarm' });
    });
    
}