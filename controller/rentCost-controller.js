const rentCostModel = require("../model/rentCost")



//add [ POST ]
module.exports.addrentCost = function (req, res) {

    let vehical = req.body.vehical


    let rentCost = new rentCostModel({
        vehical: vehical
    })



    rentCost.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "saved", data: data, status: 200 })//http status code 
        }
    })


}

//list
module.exports.getAllrentCost = function (req, res) {

    rentCostModel.find().populate("vehical").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "rentCost ret...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleterentCost = function(req,res){
    //params userid 
    let rentCostId = req.params.rentCostId //postman -> userid 

    rentCostModel.deleteOne({_id:rentCostId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
            res.json({ msg: "rent  removed...", data: data, status: 200 })//http status code 
        }
    })
}


module.exports.updaterentCost = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let rentCostId = req.body.rentCostId
    let vehicalId= req.body.vehicalId

    rentCostModel.updateOne({_id:rentCostId},{vehicalId:vehicalId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"rent updated....",status:200,data:data})
        }
    })

}
