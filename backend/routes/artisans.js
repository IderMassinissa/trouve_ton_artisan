const express = require("express");
const router = express.Router();
const {
  getAll,
  getByCategorie,
  getById,
  search,
  getTop,
} = require("../controllers/artisansController");

router.get("/", getAll);
router.get("/top", getTop);
router.get("/search", search);
router.get("/categorie/:id", getByCategorie);
router.get("/:id", getById);

module.exports = router;
