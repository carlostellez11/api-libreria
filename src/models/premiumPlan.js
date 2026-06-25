const mongoose = require("mongoose");

const premiumPlanSchema = new mongoose.Schema({
    planName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    benefits:[
        {
            type:String
        }
    ],
    durationDays:Number
},{timestamps:true});

module.exports = mongoose.model("PremiumPlan", premiumPlanSchema);