const PremiumPlan = require("../models/premiumPlan");

exports.createPremiumPlan = async (req, res) => {
    try {
        const premiumPlan = new PremiumPlan(req.body);
        await premiumPlan.save();

        res.status(201).json({
            message: "Premium plan created successfully",
            data: premiumPlan
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating premium plan"
        });
    }
};

exports.getPremiumPlans = async (req, res) => {
    try {
        const premiumPlans = await PremiumPlan.find();

        res.status(200).json({
            total: premiumPlans.length,
            data: premiumPlans
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving premium plans"
        });
    }
};

exports.getPremiumPlanById = async (req, res) => {
    try {
        const premiumPlan = await PremiumPlan.findById(req.params.id);

        if (!premiumPlan) {
            return res.status(404).json({
                message: "Premium plan not found"
            });
        }

        res.status(200).json(premiumPlan);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving premium plan"
        });
    }
};

exports.updatePremiumPlan = async (req, res) => {
    try {
        const updatedPlan = await PremiumPlan.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: "Premium plan updated successfully",
            data: updatedPlan
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating premium plan"
        });
    }
};

exports.deletePremiumPlan = async (req, res) => {
    try {
        await PremiumPlan.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Premium plan deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting premium plan"
        });
    }
};