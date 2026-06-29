const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "API running successfully"
    });
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});