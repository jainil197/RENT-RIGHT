const vehicalModel = require("../model/vehical-model")


// add post

module.exports.addVehical = function(req,res){
    let  numberPlate = req.body.numberPlate
    let  vehicalModel = req.body.vehicalModel
    let  colour = req.body.colour
    let  costPerKilomete = req.body.costPerKilometer

    let user = req.body.user

    let vehical = new vehicalModel({
        numberPlate: numberPlate,
        vehicalModel : vehicalModel,
        colour : colour,
        costPerKilomete : costPerKilomete,
        user : user
    })

    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })

}

//list 
module.exports.getAllVehical = function(req,res){
    
vehicalModel.find() .popolate("user").exec(function(err , data){
    if(err){
        res.json({ msg: "SOMTHING WENT WRONG", data: err, status: -1})
    }else{
        res.json({ msg: "vehical retrive...", data: data, status: 200})
    }
})

}

//delete
module.exports.deleteVehical = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    vehicalModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "vehical removed...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.updateVehical = function(req,res){
 
   let vehicalId = req.body.vehicalId
   let numberPlate = req.body.numberPlate

    vehicalId.updateOne({_id:vehicalId},{numberPlate:numberPlate},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}