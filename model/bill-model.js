const mongoose = require("mongoose")


const billSchema = new mongoose.Schema({
    
  totalAmount:{
      type: Number
  },
  billDate:{
      type: Date
  },
    bookingId : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"booking"
    }
})


const billModel = mongoose.model("bill",billSchema)
module.exports = billlModel