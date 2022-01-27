const express = require('express');
const cors = require('cors');

const app = express();

const router = require('./routes/router');

const corsOptions = {
    'credentials': true,
    'origin': true,
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'allowedHeaders': 'Authorization,X-Requested-With,X-HTTP-Method-Override, Content-Type, Cache-Control, Accept',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const server = require('http').createServer(app);
server.listen(8080);

module.exports = app;
