'use strict';
require('dotenv').config();
const server = require('./src/server');
const pool = require('./src/models/pool');
const port = process.env.PORT || 3000;


pool.connect()

    .then(() => {
        server.start(port);
    }).catch((e) => {
        console.error('connection error', e.message);

    });


