require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const { sequelize } = require("./models");
const checkApiKey = require("./middlewares/auth");
const artisansRoutes = require("./routes/artisans");
const categoriesRoutes = require("./routes/categories");

const app = express();
const PORT = process.env.PORT || 3000;

// Sécurité HTTP
app.use(helmet());

// CORS — autorise uniquement le frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

// Limite les requêtes à 100 par 15 minutes par IP
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { message: "Trop de requêtes, réessayez plus tard" },
  }),
);

app.use(express.json());

// Toutes les routes sont protégées par la clé API
app.use("/api", checkApiKey);
app.use("/api/artisans", artisansRoutes);
app.use("/api/categories", categoriesRoutes);

// Route de santé
app.get("/", (req, res) => {
  res.json({ message: "API Trouve ton artisan — OK" });
});

// Connexion BDD puis démarrage serveur
sequelize
  .authenticate()
  .then(() => {
    console.log("Connecté à la base de données");
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Impossible de se connecter à la BDD :", error.message);
  });
