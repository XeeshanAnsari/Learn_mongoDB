const assert = require('assert')
const User = require('../src/user')
 
 describe('creating record' , (done) => {
     it('save a user ', () =>{
         const joe =  new User({name:'Joe'}) 
         joe.save()
         .then(()=>{
             assert(!joe.isNew) // if name is save so isNew === false
             done();
         })

     })
 }) 