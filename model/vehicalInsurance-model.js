const mongoose = require("mongoose")


const vehicalInsuranceSchema = new mongoose.Schema({
    
    bankName:{
        type:String,
        required:true
    },
    validity:{
        type: date
    },
   
    vehical: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"vehical"
    }
})


const vehicalInsurancesModel = mongoose.model("vehicalInsurance",vehicalInsuranceSchema)
module.exports =vehicalInsurancesModel 