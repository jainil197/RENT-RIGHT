const bookingModel = require("../model/booking-model");

//add [ POST ]
module.exports.addbooking = function (req, res) {

    let vehicalId = req.body.vehicalId
    let rentCostId = req.body.rentCostId
    


    let booking = new bookingModel({
        vehicalId: vehicalId,
        rentCostId: rentCostId
    })



booking.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "booking done" , data: data, status: 200 })//http status code 
        }
    })


}


//list
module.exports.getAllbooking = function (req, res) {

    bookingModel.find().populate("vehicalId").populate("rentCostId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "booking ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deletebooking = function(req,res){
    //params userid 
    let bookingID= req.params.bookingID //postman -> userid 

   bookingModel.deleteOne({_id:bookingID},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "booking removed...", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.updatebooking = function(req,res){

   
    let bookingID = req.body.bookingID
    

   bookingModel.updateOne({_id:bookingID},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
