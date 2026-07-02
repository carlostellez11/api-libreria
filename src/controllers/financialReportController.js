const FinancialReport = require("../models/financialReport");

exports.createFinancialReport = async (req, res) => {
    try {
        const report = new FinancialReport(req.body);
        await report.save();

        res.status(201).json({
            message: "Financial report created successfully",
            data: report
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating financial report"
        });
    }
};

exports.getFinancialReports = async (req, res) => {
    try {
        const reports = await FinancialReport.find()
            .populate("bestSellingProduct");

        res.status(200).json({
            total: reports.length,
            data: reports
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving reports"
        });
    }
};

exports.getFinancialReportById = async (req, res) => {
    try {
        const report = await FinancialReport.findById(req.params.id);

        if (!report) {
            return res.status(404).json({
                message: "Report not found"
            });
        }

        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving report"
        });
    }
};

exports.updateFinancialReport = async (req, res) => {
    try {
        const updatedReport = await FinancialReport.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: "Financial report updated successfully",
            data: updatedReport
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating report"
        });
    }
};

exports.deleteFinancialReport = async (req, res) => {
    try {
        await FinancialReport.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Financial report deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting report"
        });
    }
};