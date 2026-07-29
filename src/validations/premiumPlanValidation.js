const Joi = require("joi");

module.exports = Joi.object({

    planName: Joi.string()
        .required(),

    price: Joi.number()
        .positive()
        .required(),

    benefits: Joi.array()
        .items(Joi.string())
        .required(),

    durationDays: Joi.number()
        .integer()
        .positive()
        .required()

});