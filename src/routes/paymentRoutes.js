const express = require("express");
const router = express.Router();

const {
    createPayment,
    getPayments,
    getPaymentById,
    updatePayment,
    deletePayment
} = require("../controllers/paymentController");

const validatePayment = require("../middlewares/validatePayment");

router.post("/", validatePayment, createPayment);
router.get("/", getPayments);
router.get("/:id", getPaymentById);
router.put("/:id", validatePayment, updatePayment);
router.delete("/:id", deletePayment);

module.exports = router;