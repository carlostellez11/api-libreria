const Order = require("../models/order");

exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();

        res.status(201).json({
            message: "Order created successfully",
            data: order
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating order"
        });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user")
            .populate("items.product");

        res.status(200).json({
            total: orders.length,
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving orders"
        });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving order"
        });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: "Order updated successfully",
            data: updatedOrder
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating order"
        });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Order deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting order"
        });
    }
};