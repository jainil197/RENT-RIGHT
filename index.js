const express = require("express")
const mongoose = require("mongoose")

const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const vehicalController = require("./controller/vehical-controller")
const paymentController = require("./controller/payment-controller")
const vehicalController = require("./controller/vehicalInsurance-controller")
const vehicalInsurancesController = require("./controller/vehicalInsurance-controller")
const bookingController = require("./controller/booking-controller")

const rentCostController = require("./controller/rentCost-controller")
const billController = require("./controller/bill-controller")
const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/ecom',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})







//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user 
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)

app.post("/login",userController.login)


//vehical
app.post("/vehical",vehicalController.addVehical)
app.get("/vehical",vehicalController.getAllVehical)
app.delete("/vehical/:vehicalId",vehicalController.deleteVehical)
app.put("/vehical",vehicalController.updateVehical)

//payment

app.post("/payment",paymentController.addpayment)
app.get("/payment",paymentController.getAllPayments)
app.delete("/payment",paymentController.deletePayment)
app.put("/payment",paymentController.updatepayment)

//insurances
app.post("/vehicalinsurances",vehicalInsuranceCotroller.addVehicalInsurance)
app.get("/vehicalinsurances",vehicalInsuranceCotroller.getAllVehicalInsurance)
app.delete("/vehicalinsurances",vehicalInsuranceCotroller.deletVehicalInsurance)
app.put("/vehicalinsurances",vehicalInsuranceCotroller.updateVehicalInsurance)


//rentCost
app.post("/rentCost",rentCostController.addrentCost)
app.get("/rentCost",rentCostController.getAllrentCost)
app.delete("/rentCost",rentCostController.deleterentCost)
app.put("/rentCost",rentCostController.updaterentCost)


//booking
app.post("/booking",bookingController.addbooking)
app.get("/booking",bookingController.getAllbooking)
app.delete("/booking",bookingController.deletebooking)
app.put("/booking",bookingController.updatebooking)

//bill
app.post("/bill",billController.addbill)
app.get("/bill",billController.getAllbill)
app.delete("/bill",billController.deletebill)
app.put("/bill",billController.updatebill)



//server 
app.listen(3500,function(){
    console.log("server started on 3500");  
  })