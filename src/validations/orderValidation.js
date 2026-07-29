const Joi = require("joi");

module.exports = Joi.object({

    user: Joi.string()
        .hex()
        .length(24)
        .required(),

    products: Joi.array().items(

        Joi.object({

            product: Joi.string()
                .hex()
                .length(24)
                .required(),

            quantity: Joi.number()
                .integer()
                .min(1)
                .required()

        })

    ).required(),

    totalAmount: Joi.number()
        .positive()
        .required(),

    status: Joi.string().valid(
        "pending",
        "paid",
        "shipped",
        "delivered"
    ),

    shippingAddress: Joi.string().required()

});