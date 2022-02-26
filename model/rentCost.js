const mongoose = require("mongoose")


const rentCostSchema = new mongoose.Schema({
    
  
    vehical : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"vehical"
    }
})


const rentCostModel = mongoose.model("rentCost",rentCostSchema)
module.exports = rentCostModel