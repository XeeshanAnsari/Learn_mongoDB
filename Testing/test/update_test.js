const assert = require('assert')
const User = require('../src/user');


describe('Update Record ', (done)=>{
    let joe 
    beforeEach((done) => {
        joe = new User({ name: 'joe'})
        .save(() => done())
    })


    it('instance set n save ', () =>{
        joe.set('name','ALEX')
        joe.save()
        .then(() => User.find({}))
        .then((users) =>{
            assert(users.length === 1);
            assert(users[0].name == 'ALEX');
            done();
        })
        
    })

})