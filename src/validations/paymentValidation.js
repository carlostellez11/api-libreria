const Joi = require("joi");

module.exports = Joi.object({

    order: Joi.string()
        .hex()
        .length(24)
        .required(),

    paymentMethod: Joi.string().valid(
        "card",
        "paypal",
        "transfer"
    ).required(),

    amount: Joi.number()
        .positive()
        .required(),

    paymentStatus: Joi.string().valid(
        "pending",
        "completed",
        "failed"
    ),

    transactionId: Joi.string()
        .required()

});