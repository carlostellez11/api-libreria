const cartSchema = require("../validations/cartValidation");

module.exports = (req, res, next) => {

    const { error } = cartSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    next();

};