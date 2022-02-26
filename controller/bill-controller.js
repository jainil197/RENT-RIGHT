const billlModel = require("../model/bill-model")


//add [ POST ]
module.exports.addbill = function (req, res) {

    let totalAmount = req.body.addbill
    let billDate = req.body.billDate
    let bookingId = req.body.bookingId    


    let bill = new billModel({
        totalAmount: totalAmount,
        billDate: billDate,
        bookingId: bookingId
        
    })



bill.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "bill save" , data: data, status: 200 })//http status code 
        }
    })


}

//list
module.exports.getAllbill = function (req, res) {

    billModel.find().populate("bookingId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "bill ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deletebill = function(req,res){
    //params userid 
    let billId = req.params.billId //postman -> userid 

   billlModel.deleteOne({_id:billId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "bill removed...", data: data, status: 200 })//http status code 
        }
    })
}
module.exports.updatebill = function(req,res){

    
    let billId = req.body.billId 
  

   billlModel.updateOne({_id:billId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"bill updated...",status:200,data:data})
        }
    })

}





