const Driver =  require('../models/driver_model')
module.exports = {
    greeting(req, res) {
        res.send({hi:'there'})
    },

    create(req, res){
       const DriverProps = req.body;
       console.log(DriverProps)
       Driver.create(DriverProps)
       .then(driver => res.send(driver))
       .catch(error=>console.log(error))
    }
}