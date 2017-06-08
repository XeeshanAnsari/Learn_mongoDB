
const express = require('express')
const http = require('http')
const mongoose  = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express();
const routes = require('./routes/route')


//db setup
  mongoose.connect('mongodb://localhost/auth')


//app setup
app.use(morgan('combined'));// middleware for logging incoming request
app.use(bodyParser.json({type: '*/*'})) // middleware for json incoming request
//server setup


routes(app)
const port = process.env.PORT ||3090;
const server = http.createServer(app);
server.listen(port);
console.log('Runnig port Listen' , port)