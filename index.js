'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./server/config/db.js'),
    env = require('./server/config/env'),
    router = require('./server/router/index'),
    cors = require('cors');


const app = express();
const PORT = env.PORT;

app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
});

router(app, db);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('Express listening on port:', PORT);
    });
});
