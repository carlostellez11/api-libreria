const mongoose = require("mongoose");

const financialReportSchema = new mongoose.Schema({
    totalSales:Number,
    totalOrders:Number,
    bestSellingProduct:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Book"
    },
    reportDate:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("FinancialReport", financialReportSchema);