const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    publisher:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

module.exports = mongoose.model("Book", bookSchema);