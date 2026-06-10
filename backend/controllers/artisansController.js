const { Artisan, Specialite, Categorie } = require("../models");
const { Op } = require("sequelize");

// Retourne tous les artisans avec leur spécialité et catégorie
const getAll = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        include: Categorie,
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// Retourne les artisans par catégorie
const getByCategorie = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        required: true,
        include: {
          model: Categorie,
          required: true,
          where: { id: req.params.id },
        },
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// Retourne un artisan par son id
const getById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: {
        model: Specialite,
        include: Categorie,
      },
    });
    if (!artisan)
      return res.status(404).json({ message: "Artisan non trouvé" });
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// Recherche par nom
const search = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: {
        nom: { [Op.like]: `%${req.query.q}%` },
      },
      include: {
        model: Specialite,
        include: Categorie,
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

// Retourne les 3 artisans du mois (top = true)
const getTop = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      limit: 3,
      include: {
        model: Specialite,
        include: Categorie,
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

module.exports = { getAll, getByCategorie, getById, search, getTop };
