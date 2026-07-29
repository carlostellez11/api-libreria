const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./src/config/db");
const verifyAppToken = require("./src/middlewares/authMiddleware");

const userRoutes = require("./src/routes/userRoutes");
const bookRoutes = require("./src/routes/bookRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const premiumPlanRoutes = require("./src/routes/premiumPlanRoutes");
const financialReportRoutes = require("./src/routes/financialReportRoutes");

// Cargar variables de entorno
dotenv.config();

// Validar variables de entorno
require("./src/config/envValidator");

const app = express();

// Lista blanca de dominios permitidos
const allowedOrigins = [
    "http://localhost:3000"
];

// Desactivar cabecera X-Powered-By
app.disable("x-powered-by");

// Configuración de Helmet
app.use(
    helmet({
        frameguard: {
            action: "deny"
        },
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                styleSrc: ["'self'"],
                imgSrc: ["'self'", "data:"],
                objectSrc: ["'none'"]
            }
        }
    })
);

// Configuración de CORS
app.use(
    cors({
        origin: function (origin, callback) {

            // Permitir Thunder Client, Postman y peticiones sin Origin
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("Origin not allowed"));
        }
    })
);

// Middleware para leer JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Ruta pública
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API running successfully"
    });
});

// Rutas protegidas
app.use("/api/users", verifyAppToken, userRoutes);
app.use("/api/books", verifyAppToken, bookRoutes);
app.use("/api/carts", verifyAppToken, cartRoutes);
app.use("/api/orders", verifyAppToken, orderRoutes);
app.use("/api/payments", verifyAppToken, paymentRoutes);
app.use("/api/premiumplans", verifyAppToken, premiumPlanRoutes);
app.use("/api/reports", verifyAppToken, financialReportRoutes);

// Middleware global para manejo de errores
app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({
        message: "Internal Server Error"
    });

});

// Iniciar servidor
const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});