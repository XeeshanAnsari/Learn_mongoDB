const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const brcypt = require('bcrypt-nodejs')

//define our models
const userSchema = new Schema({
    email: String,
    password:String
})

//    open Save Hook , encrypt password
// Before saving a model , run this function
userSchema.pre('save ', function(next){
    // get access to the user model
    const users = this;

  //generate a salt then run callback
    bcrypt.genSalt(10 , function(err , salt){
        if(err) { return next(err)}
        
        // hash (encrypt ) our passord using the salt
       bcrypt.hash(users.password , salt , null , function(err , hash){
          if(err) { return next(err)}
     
        // overwrite plane password to  encrypt pass
          users.password = hash ;
          next();           
       })
    })

})

const User = mongoose.model('user', userSchema)


module.exports = User

