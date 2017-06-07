const mongoose  = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/umber_test')

mongoose.connection
    .open('open', ()=>{  done(); })
  
    // beforeEach((done) =>{
    //     const { drivers } = mongoose.connection.collections;
    //     drivers.drop()
    //       .then(() => done())
    // })