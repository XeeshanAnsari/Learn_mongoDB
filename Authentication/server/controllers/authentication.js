const User = require('../models/user')


exports.signup = function(req,res, next ){
    const email = req.body.email;
    const password = req.body.password;


   if(!email || !password){
       return res.status(422).send({error:"You must provide email and password"})
   }

    //see if a user with the given email exist   
    User.findOne({email: email } , function(err , existingUser) {
        if (err) { return next(err)}
        // if doesnot exist
        if(existingUser){
            return res.status(422).send({error: "Email is in use"})
        }
    })

  //if email does not exist , create new user
    const user  = new User({
        email:email,
        password:password
    })
    user.save(function(err){
        if(err) {return next(err)}

        //repond to request indicating the user was created
        res.send({success: true})
    })
   
}