const paymentModel = require("../model/payment-model")

//post

module.exports.addpayment = function(req , res){
    let vehicalId = req.body.vehicalId
    let paymentDate = req.body.paymentDate
    let billId = req.body.billId



    let payment = new paymentModel({
        vehicalId: vehicalId,
        paymentDate: paymentDate,
        billId: billId


    })



    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "payment done", data: data, status: 200 })//http status code 
        }
    })

}


//list
module.exports.getAllPayments = function (req, res) {

    paymentModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "payment details ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deletePayment = function(req,res){
    //params userid 
    let paymentId = req.params.paymentId

    paymentModel.deleteOne({_id:paymentId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "payment details removed...", data: data, status: 200 })//http status code 
        }
    })
}
 

//put 



module.exports.updatepayment = function(req,res){

    
    let paymentId = req.body.paymentId 
     

    paymentModel.updateOne({_id:paymentId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}