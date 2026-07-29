const Joi = require("joi");

module.exports = Joi.object({
    name: Joi.string().min(3).max(100).required(),

    email: Joi.string().email().required(),

    password: Joi.string().min(6).required(),

    role: Joi.string()
        .valid("customer", "admin")
        .required(),

    isPremium: Joi.boolean()
});