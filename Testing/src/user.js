const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const UserSchema = Schema({
    name:String

})

const User = mongoose.model('user', UserSchema)

module.exports =  User 