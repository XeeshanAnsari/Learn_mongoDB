const assert = require('assert')
const User = require('../src/user')

describe('Reading users out of a the Database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'joe' })
        joe.save()
            .then(() => done())

    });

    it('finds all Users with a name of joe ', (done) => {
        User.find({ name: 'joe' })
            .then((users) => {
                console.log(users)
                assert(users[0]._id.toString() === joe._id.toString())
                done();

            })
    })
})