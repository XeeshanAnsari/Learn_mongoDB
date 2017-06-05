const asset  = require('assert');
const User = require('../src/user');

describe('Deleteing Record', ()=>{
    let joe;

    beforeEach((done) =>{
        joe = new User({name: 'joe'})
        joe.save()
        .then(()=> done())
    }) 

    it('model instance remove ', (done)=>{
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
    
     it('class method findByIdAndRemove ', ()=>{
         User.fByIdAndRemove(joe._id)
        .then(()=> User.findOne({name: 'joe'}))
        .then((user) => {
           assert(user === null)
           done();
        })
    })
})