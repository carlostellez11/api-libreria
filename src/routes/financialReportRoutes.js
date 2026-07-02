const express = require("express");
const router = express.Router();

const {
    createFinancialReport,
    getFinancialReports,
    getFinancialReportById,
    updateFinancialReport,
    deleteFinancialReport
} = require("../controllers/financialReportController");

router.post("/", createFinancialReport);
router.get("/", getFinancialReports);
router.get("/:id", getFinancialReportById);
router.put("/:id", updateFinancialReport);
router.delete("/:id", deleteFinancialReport);

module.exports = router;