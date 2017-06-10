const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

//define our models
const userSchema = new Schema({
    email: String,
    password:String
})

//    open Save Hook , encrypt password
// Before saving a model , run this function
userSchema.pre('save', function(next){
    // get access to the user model
    const user = this;

  //generate a salt then run callback
    bcrypt.genSalt(10 , function(err , salt){
        if(err) { return next(err)}
        
        // hash (encrypt ) our passord using the salt
       bcrypt.hash(user.password , salt , null , function(err , hash){
          if(err) { return next(err)}
     
        // overwrite plane password to  encrypt pass
          user.password = hash ;
          next();           
       })
    })

})

userSchema.methods.comparePassword = function(candidatePasseord , callback){
    bcrypt.comparePassword(candidatePasseord , this.password , function(err , isMatch){
        if(err) { return callback(err); }

        callback(null , isMatch)
    })
}

const User = mongoose.model('users', userSchema)


module.exports = User

