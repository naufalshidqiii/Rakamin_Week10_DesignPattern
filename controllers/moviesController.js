const Movie = require("../models/movie.js");

class MoviesController {
	// Method dari class dipanggil dari router.
	// Bikin request di controllernya
	// static myReq = (req, res, next) => {
	// }
	static findMovies = (req, res, next) => {
		Movie.getAllMovies((err, result) => {
			// Query dijalanin dari Models
			if (err) {
				next(err);
			} else {
				res.status(200).json(result);
			}
		});
	};

	static findMoviesID = (req, res, next) => {
		Movie.getOneMovies((err, result) => {
			// Query dijalanin dari Models
			if (err) {
				next(err);
			} else {
				res.status(200).json(result);
			}
		});
	};
}

module.exports = MoviesController;
