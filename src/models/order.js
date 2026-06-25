const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    products:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Book"
            },
            quantity:Number
        }
    ],
    totalAmount:Number,
    status:{
        type:String,
        enum:["pending","paid","shipped","delivered"],
        default:"pending"
    },
    shippingAddress:String
},{timestamps:true});

module.exports = mongoose.model("Order", orderSchema);