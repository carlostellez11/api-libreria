const financialReportSchema = require("../validations/financialReportValidation");

module.exports = (req, res, next) => {

    const { error } = financialReportSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    next();

};