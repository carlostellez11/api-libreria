const Joi = require("joi");

module.exports = Joi.object({

    totalSales: Joi.number()
        .positive()
        .required(),

    totalOrders: Joi.number()
        .integer()
        .min(0)
        .required(),

    bestSellingProduct: Joi.string()
        .hex()
        .length(24)
        .required(),

    reportDate: Joi.date()

});