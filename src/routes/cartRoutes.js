const express = require("express");
const router = express.Router();

const {
    createCart,
    getCarts,
    getCartById,
    updateCart,
    deleteCart
} = require("../controllers/cartController");

const validateCart = require("../middlewares/validateCart");

router.post("/", validateCart, createCart);
router.get("/", getCarts);
router.get("/:id", getCartById);
router.put("/:id", validateCart, updateCart);
router.delete("/:id", deleteCart);

module.exports = router;