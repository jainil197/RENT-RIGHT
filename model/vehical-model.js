const mongoose = require("mongoose")

const vehicalSchema = new mongoose.Schema({

   numberPlate:{
       type:Number,
       required:true
   },
   vehicalModel:{
       type:String
   },
   colour:{
       type:String
   },
   costPerKilometer:{
       type:Number
   },
   user : {
       type:mongoose.Schema.Types.ObjectId,
       ref: "user"
   }
})

const vehicalModel = mongoose.model("vehical",vehicalSchema)
module.exports = vehicalSchema