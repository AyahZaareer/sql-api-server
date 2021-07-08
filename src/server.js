'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
app.use(express.json());
app.use(cors());

// app.use(logger);

app.get('/', (req, res) => {
    res.send('Holle from server');
})
app.use('/api/vi/clothes', clothesRouter);
app.use('/api/vi/food', foodRouter);
app.get('/bad', (req, res) => {

    throw new Error('There is a wrong');
})
app.use('*', notFound);
app.use(errorHandler);


module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => console.log(`server listen from ${port}`));
    }
}