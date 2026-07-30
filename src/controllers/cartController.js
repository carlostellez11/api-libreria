const Cart = require("../models/cart");

exports.createCart = async (req, res) => {
    try {

        const cart = new Cart(req.body);
        await cart.save();

        res.status(201).json(cart);

    } catch (error) {

        res.status(500).json({
            message: "Error creating cart."
        });

    }
};

exports.getCarts = async (req, res) => {
    try {
        const carts = await Cart.find()
            .populate("user", "_id name email")
            .populate("products.product", "_id name")
            .select("_id user products totalPrice");

        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching carts." });
    }
};

exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id)
            .populate("user", "_id name email")
            .populate("products.product", "_id name")
            .select("_id user products totalPrice");

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found."
            });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart." });
    }
};

exports.updateCart = async (req, res) => {
    try {

        const cart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found."
            });
        }

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: "Error updating cart."
        });

    }
};

exports.deleteCart = async (req, res) => {
    try {

        const cart = await Cart.findByIdAndDelete(req.params.id);

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found."
            });
        }

        res.status(200).json({
            message: "Cart deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting cart."
        });

    }
};