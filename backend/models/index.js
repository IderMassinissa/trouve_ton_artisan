const sequelize = require("../config/database");
const Categorie = require("./Categorie");
const Specialite = require("./Specialite");
const Artisan = require("./Artisan");

// Categorie -> Specialite
Categorie.hasMany(Specialite, { foreignKey: "id_categorie" });
Specialite.belongsTo(Categorie, { foreignKey: "id_categorie" });

// Specialite -> Artisan
Specialite.hasMany(Artisan, { foreignKey: "id_specialite" });
Artisan.belongsTo(Specialite, { foreignKey: "id_specialite" });

module.exports = { sequelize, Categorie, Specialite, Artisan };
