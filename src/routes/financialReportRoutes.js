const express = require("express");
const router = express.Router();

const {
    createFinancialReport,
    getFinancialReports,
    getFinancialReportById,
    updateFinancialReport,
    deleteFinancialReport
} = require("../controllers/financialReportController");

const validateFinancialReport = require("../middlewares/validateFinancialReport");

router.post("/", validateFinancialReport, createFinancialReport);
router.get("/", getFinancialReports);
router.get("/:id", getFinancialReportById);
router.put("/:id", validateFinancialReport, updateFinancialReport);
router.delete("/:id", deleteFinancialReport);

module.exports = router;