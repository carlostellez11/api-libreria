const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const verifyAppToken = require("./src/middlewares/authMiddleware");

const bookRoutes = require("./src/routes/bookRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const premiumPlanRoutes = require("./src/routes/premiumPlanRoutes");
const financialReportRoutes = require("./src/routes/financialReportRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Ruta principal (pública)
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Library API is running successfully"
    });
});

console.log("Middleware cargado correctamente");
// Rutas protegidas
app.use("/api/users", verifyAppToken, userRoutes);
app.use("/api/books", verifyAppToken, bookRoutes);
app.use("/api/carts", verifyAppToken, cartRoutes);
app.use("/api/orders", verifyAppToken, orderRoutes);
app.use("/api/payments", verifyAppToken, paymentRoutes);
app.use("/api/premiumplans", verifyAppToken, premiumPlanRoutes);
app.use("/api/reports", verifyAppToken, financialReportRoutes);

// Solo iniciar el servidor en desarrollo
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5100;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Exportar para Vercel
module.exports = app;