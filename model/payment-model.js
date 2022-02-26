const mongoose = require("mongoose")


const paymentSchema = new mongoose.Schema({
    
        paymentDate:{
            type:Date,
            required:true
        },
        status:{
            type:String
        },
       
        vehical : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"vehical"
        },
        bill : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "bill"
        }
})


const paymentModel = mongoose.model("payment",paymentSchema)
module.exports = paymentModel