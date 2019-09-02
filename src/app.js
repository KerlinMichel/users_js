const express = require('express');
const app = express();

const accountRouter = require('./routes/account');

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/account', accountRouter);

module.exports = {
    app: app
};
