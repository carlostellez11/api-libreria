const Joi = require("joi");

const bookSchema = Joi.object({

    title: Joi.string()
        .min(3)
        .max(100)
        .required(),

    author: Joi.string()
        .min(3)
        .max(100)
        .required(),

    isbn: Joi.string()
        .min(10)
        .max(20),

    category: Joi.string()
        .min(3)
        .max(50)
        .required(),

    description: Joi.string()
        .allow("")
        .optional(),

    publisher: Joi.string()
        .allow("")
        .optional(),

    price: Joi.number()
        .positive()
        .required(),

    stock: Joi.number()
        .integer()
        .min(0)
        .required(),

    isActive: Joi.boolean()
        .optional()

});

module.exports = bookSchema;