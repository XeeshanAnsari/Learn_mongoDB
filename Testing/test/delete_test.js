const asset  = require('assert');
const User = require('../src/user');

describe('Deleteing Record',(done)=>{
    let joe;

    beforeEach(() =>{
        joe = new User({name: 'joe'})
        joe.save()
        .then(()=> done())
    }) 

    it('model instance remove ', ()=>{
        joe.remove()
        .then(() => User.findOne({name: 'joe'}))
        .then((user) => {
           assert(user === null)
           done();
        })

    })
    it('Class method remove ', ()=> {
        joe.remove({name: 'joe'})
        .then(()=> User.findOne({name: 'joe'}))
        .then((user) => {
           assert(user === null)
           done();
        })
    })
    it('class method findAndRemove ', ()=>{
         User.findOneAndRemove({name: 'joe'})
        .then(()=> User.findOne({name: 'joe'}))
        .then((user) => {
           assert(user === null)
           done();
        })
    })
    
     it('class method findByIdAndRemove ',()=>{
         User.findByIdAndRemove(joe._id)
        .then(()=> User.findOne({name: 'joe'}))
        .then((user) => {
           assert(user === null)
           done();
        })
    })
})