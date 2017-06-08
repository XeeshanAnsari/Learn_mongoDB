const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const brcypt = require('bcrypt-nodejs')

//define our models
const userSchema = new Schema({
    email: String,
    password:String
})

//    open Save Hook , encrypt password

userSchema.pre('save ', function(next){
    const user = this;

    bcrypt.genSalt(10 , function(err , salt){
        if(err) { return next(err)}
        user.password = HashChangeEventnext();
    })

})

const ModelClass = mongoose.model('user', userSchema)


module.exports = ModelClass

