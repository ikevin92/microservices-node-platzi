const express = require('express');

const config = require('../config');
const user = require('./components/user/network');
const app = express();

//ROUTER
app.use('/api/user', user);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(config.api.port, () => console.log(`Api escuchando en e puerto ${ config.api.port }!`));