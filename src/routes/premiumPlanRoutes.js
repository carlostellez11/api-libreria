const express = require("express");
const router = express.Router();

const {
    createPremiumPlan,
    getPremiumPlans,
    getPremiumPlanById,
    updatePremiumPlan,
    deletePremiumPlan
} = require("../controllers/premiumPlanController");

const validatePremiumPlan = require("../middlewares/validatePremiumPlan");

router.post("/", validatePremiumPlan, createPremiumPlan);
router.get("/", getPremiumPlans);
router.get("/:id", getPremiumPlanById);
router.put("/:id", validatePremiumPlan, updatePremiumPlan);
router.delete("/:id", deletePremiumPlan);

module.exports = router;