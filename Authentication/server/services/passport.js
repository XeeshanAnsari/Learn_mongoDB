const passport  = require('passport')
const User = require('../models/user')
const config = require('../config')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//setup option for JWT Strategy

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
    secretOrKey: config.secrets
};

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions , function(payload , done){
    //see if the user Id in the payload exist in our db
    //if it does , call done 
    //otherwise call done without a user object

    User.findById(payload.sub , function(err , user ){
        if(err) { return done(err , false)}

        if(user){
            done(null , user);
        }else{
            done(null, false)
        }
    }) 
})

// tell passpoet use Strategy
passport.use(jwtLogin)
