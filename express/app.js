const express =  require('express')
const bodyParser =  require('body-parser')
const route = require('./route/route')
const app = express();

app.use(bodyParser.json())// middle ware

 route(app);

module.exports = app;
