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

     it('PUT to /api/drriver/id edit an existing driver', () =>{
         const driver = new Driver({email: 't@t.com', driving: false})

         driver.save().then(()=>{
             request(app)
             .put('api/drivers/${driver._id}')
             .send({driving : true})
             .end(() =>{
                 Driver.findOne({email:'t@t.com'})
                  .then(driver =>{
                      assert(driver.driving === ture)
                      done();
                  })
             })
         })
     })

     it('Delete to /api/drivers/id can delete a driver ', ()=>{
         request(app)
         .delete('/api/drivers/${drivers._id}')
         .end(() =>{
             Driver.findOne({ email: 'test@test.com'})
             .then((driver) =>{
                 assert(drivers === null)
                 done();
             })
         })
     })
})