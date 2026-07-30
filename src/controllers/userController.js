const User = require("../models/user");

exports.createUser = async (req, res) => {
    try {

        const user = new User(req.body);
        await user.save();

        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({
            message: "Error creating user."
        });

    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select(
            "_id name email role isPremium"
        );

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users." });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select(
            "_id name email role isPremium"
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user." });
    }
};

exports.updateUser = async (req, res) => {
    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        res.status(200).json(user);

    } catch (error) {

        res.status(500).json({
            message: "Error updating user."
        });

    }
};

exports.deleteUser = async (req, res) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        res.status(200).json({
            message: "User deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting user."
        });

    }
};