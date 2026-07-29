const FinancialReport = require("../models/financialReport");

exports.createFinancialReport = async (req, res) => {
    try {

        const report = new FinancialReport(req.body);
        await report.save();

        res.status(201).json(report);

    } catch (error) {

        res.status(500).json({
            message: "Error creating report."
        });

    }
};

exports.getFinancialReports = async (req, res) => {
    try {

        const reports = await FinancialReport.find();

        res.status(200).json(reports);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching reports."
        });

    }
};

exports.getFinancialReportById = async (req, res) => {
    try {

        const report = await FinancialReport.findById(req.params.id);

        if (!report) {
            return res.status(404).json({
                message: "Report not found."
            });
        }

        res.status(200).json(report);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching report."
        });

    }
};

exports.updateFinancialReport = async (req, res) => {
    try {

        const report = await FinancialReport.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!report) {
            return res.status(404).json({
                message: "Report not found."
            });
        }

        res.status(200).json(report);

    } catch (error) {

        res.status(500).json({
            message: "Error updating report."
        });

    }
};

exports.deleteFinancialReport = async (req, res) => {
    try {

        const report = await FinancialReport.findByIdAndDelete(req.params.id);

        if (!report) {
            return res.status(404).json({
                message: "Report not found."
            });
        }

        res.status(200).json({
            message: "Report deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting report."
        });

    }
};