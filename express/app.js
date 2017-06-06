const express =  require('express')
const bodyParser =  require('body-parser')
const mongoose = require('mongoose')
const route = require('./route/route')
const app = express();
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/muber')

app.use(bodyParser.json())// middle ware

 route(app);

module.exports = app;
