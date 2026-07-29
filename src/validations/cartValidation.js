const Joi = require("joi");

module.exports = Joi.object({

    user: Joi.string()
        .hex()
        .length(24)
        .required(),

    items: Joi.array().items(

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

    totalPrice: Joi.number()
        .positive()
        .required()

});