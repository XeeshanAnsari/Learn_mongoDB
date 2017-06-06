const assert = require('assert')
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const Driver = mongoose.model('driver')


describe('Driver controller ', (done) => {
    it('Post api/driver to create new driver', () => {
        Driver.count().then(count => {
            request(app)
                .post('/api/drivers')
                .send({ email: 'test@test.com' })
                .end(() => {
                    Driver.count().then(newCount => {
                        assert(count + 1 === newCount);
                        done();
                    })

                })
        })




    })
})