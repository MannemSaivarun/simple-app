
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

const loginPage = require('./routes/login');
const sendMessage = require('./routes/message');

app.use('/login', loginPage);
app.use('/',sendMessage);

app.listen(5000);


