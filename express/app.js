const express =  require('express')
const bodyParser =  require('body-parser')
const mongoose = require('mongoose')
const route = require('./route/route')
const app = express();
mongoose.Promise = global.Promise

if(process.env.NODE_ENV !== 'test'){
  mongoose.connect('mongodb://localhost/muber')
}


app.use(bodyParser.json())// middle ware

 route(app);

 app.use((err , req , res, next)=>{
    res.send({error: err.message})
 })

module.exports = app;
