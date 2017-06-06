const assert = require('assert')
const request  = require('supertest')// for express rerquest
const app = require('../app')


describe('the express app ', ()  =>{
    it('handle a get request to api', (done)=>{
        request(app)
        .get('./api')
        .end((err, response) =>{
            console.log(response)
            done();
        })
        

    })
})