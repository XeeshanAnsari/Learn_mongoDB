const mongoose  = require('mongoose')
mongoose.Promise =  global.Promise;

mongoose.connect('mongodb://localhost/user_list')

before((done) =>{
mongoose.connection
    .once('open' , () => { done(); })
    .on('error' , (error) =>{
        console.warn('warning' , error)
     })

})



beforeEach((done) => {
    mongoose.connection.collection.users.drops(()=> {
        done();
    })
})     