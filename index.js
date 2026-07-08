const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

const bookRoutes = require("./src/routes/bookRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const premiumPlanRoutes = require("./src/routes/premiumPlanRoutes");
const financialReportRoutes = require("./src/routes/financialReportRoutes");

dotenv.config();

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Library API is running successfully"
    });
});

// Rutas
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/premiumplans", premiumPlanRoutes);
app.use("/api/reports", financialReportRoutes);

// Solo iniciar el servidor cuando NO esté en Vercel
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5100;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Exportar la app para Vercel
module.exports = app;