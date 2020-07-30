const browserSync = require('browser-sync');

const server = (config) =>{

    // Create new instance of browser-sync
    const bsServer = browserSync.create();

    bsServer.init(config);

    return bsServer;

};

module.exports = server;