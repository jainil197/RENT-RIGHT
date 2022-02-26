const vehicalInsurancesModel = require("../model/vehicalInsurance-model")


//post
//add [ POST ]
module.exports.addvehicalInsurances = function (req, res) {

    let bankName = req.body.bankName
    let validity = req.body.validity
    let vehical = req.body.vehical
    



    let user = new vehicalInsurancesModel({
        bankName: bankName,
        validity: validity,
        vehical: vehical,
        
    })



    vehicalInsurances.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "insurances add sucessfully", data: data, status: 200 })//http status code 
        }
    })


}

//list
module.exports.getAllvehicalInsurances = function (req, res) {

    vehicalInsurancesModel.find().populate("vehical").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "insurances ret...", data: data, status: 200 })//http status code 
        }
    })
}

//delete
module.exports.deletevehicalinsurance = function(req,res){
    
    let vehicalInsurancesId = req.params.vehicalInsurancesId //postman -> userid 

    vehicalInsurancesModel.deleteOne({_id:vehicalInsurancesId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "insurances removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update

module.exports.updatevehicalInsurances = function(req,res){

    
    let vehicalInsurancesId = req.body.vehicalInsurancesId 
    let bankName = req.body.bankName 

    vehicalInsurancesModel.updateOne({_id:vehicalInsurancesId},{bankName:bankName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
