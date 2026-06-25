const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    paymentMethod:{
        type:String,
        enum:["card","paypal","transfer"]
    },
    amount:Number,
    paymentStatus:{
        type:String,
        enum:["pending","completed","failed"],
        default:"pending"
    },
    transactionId:String
},{timestamps:true});

module.exports = mongoose.model("Payment", paymentSchema);