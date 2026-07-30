const PremiumPlan = require("../models/premiumPlan");

exports.createPremiumPlan = async (req, res) => {
    try {

        const plan = new PremiumPlan(req.body);
        await plan.save();

        res.status(201).json(plan);

    } catch (error) {

        res.status(500).json({
            message: "Error creating premium plan."
        });

    }
};

exports.getPremiumPlans = async (req, res) => {
    try {
        const plans = await PremiumPlan.find().select(
            "_id planName price benefits durationDays"
        );

        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: "Error fetching premium plans." });
    }
};

exports.getPremiumPlanById = async (req, res) => {
    try {
        const plan = await PremiumPlan.findById(req.params.id).select(
            "_id planName price benefits durationDays"
        );

        if (!plan) {
            return res.status(404).json({
                message: "Premium plan not found."
            });
        }

        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ message: "Error fetching premium plan." });
    }
};

exports.updatePremiumPlan = async (req, res) => {
    try {

        const plan = await PremiumPlan.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!plan) {
            return res.status(404).json({
                message: "Premium plan not found."
            });
        }

        res.status(200).json(plan);

    } catch (error) {

        res.status(500).json({
            message: "Error updating premium plan."
        });

    }
};

exports.deletePremiumPlan = async (req, res) => {
    try {

        const plan = await PremiumPlan.findByIdAndDelete(req.params.id);

        if (!plan) {
            return res.status(404).json({
                message: "Premium plan not found."
            });
        }

        res.status(200).json({
            message: "Premium plan deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting premium plan."
        });

    }
};