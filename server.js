'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();


server.connection({
    host: process.env.IP,
    port: process.env.PORT
});

//add routes


server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

