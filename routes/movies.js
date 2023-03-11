const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/moviesController.js");

router.get("/movies", MoviesController.findMovies);

module.exports = router;
