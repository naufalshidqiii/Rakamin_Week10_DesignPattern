const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/moviesController.js");

// Di endpoint, manggil controller
router.get("/movies", MoviesController.findMovies);
router.get("/movies/:id", MoviesController.findMoviesID);

module.exports = router;
