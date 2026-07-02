const Payment = require("../models/payment");

exports.createPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();

        res.status(201).json({
            message: "Payment created successfully",
            data: payment
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating payment"
        });
    }
};

exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find()
            .populate("user")
            .populate("order");

        res.status(200).json({
            total: payments.length,
            data: payments
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving payments"
        });
    }
};

exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);

        if (!payment) {
            return res.status(404).json({
                message: "Payment not found"
            });
        }

        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving payment"
        });
    }
};

exports.updatePayment = async (req, res) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: "Payment updated successfully",
            data: updatedPayment
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating payment"
        });
    }
};

exports.deletePayment = async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Payment deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting payment"
        });
    }
};