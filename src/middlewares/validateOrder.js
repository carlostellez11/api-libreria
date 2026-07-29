const orderSchema = require("../validations/orderValidation");

module.exports = (req, res, next) => {

    const { error } = orderSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    next();

};