require("dotenv").config();

// Vérifie que la requête contient la bonne clé API
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: "Accès non autorisé" });
  }

  next();
};

module.exports = checkApiKey;
