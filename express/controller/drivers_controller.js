const Driver =  require('../models/driver_model')
module.exports = {
    greeting(req, res) {
        res.send({hi:'there'})
    },

    create(req, res , next){
       const DriverProps = req.body;
    
       Driver.create(DriverProps)
       .then(driver => res.send(driver))
         .catch(next)
    },

    edit(req, res, nest){
        const driverId = req.params.id;
        const driverProps = req.body;

        Driver.findByIdAndUpdate({_id : driverId} , driverProps)
        .then(() =>{
            Driver
            .findById({_id: driverId})
        }) 
        .then(driver => res.send(driver)) 
        .catch(next)  
}


}