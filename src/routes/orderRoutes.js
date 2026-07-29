const express = require("express");
const router = express.Router();

const {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");

const validateOrder = require("../middlewares/validateOrder");

router.post("/", validateOrder, createOrder);
router.get("/", getOrders);
router.get("/:id", getOrderById);
router.put("/:id", validateOrder, updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;