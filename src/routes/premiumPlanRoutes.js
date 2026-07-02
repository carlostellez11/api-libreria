const express = require("express");
const router = express.Router();

const {
    createPremiumPlan,
    getPremiumPlans,
    getPremiumPlanById,
    updatePremiumPlan,
    deletePremiumPlan
} = require("../controllers/premiumPlanController");

router.post("/", createPremiumPlan);
router.get("/", getPremiumPlans);
router.get("/:id", getPremiumPlanById);
router.put("/:id", updatePremiumPlan);
router.delete("/:id", deletePremiumPlan);

module.exports = router;