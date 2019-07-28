const whitelist = require('../config/host-whitelist');

function verifyClient(client) {
    const host = client.origin;
    const status = whitelist.includes(host);
    console.log(`status = ${status}, host = ${host}`);
    return true;

}

module.exports = {
    verifyClient
}