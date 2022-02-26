const mongoose = require("mongoose")


//schema 
let bookingSchema = new mongoose.Schema({
    vehical :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vehical"
    },
    rentCost :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "rentCost"
    }
})

//model 
let bookingModel = mongoose.model("booking",bookingSchema) //roles 

module.exports = bookingModel 
