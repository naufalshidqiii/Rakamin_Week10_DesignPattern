const Movie = require("../models/movie.js");

class MoviesController {
	// Bikin request di controllernya
	// static myReq = (req, res, next) => {
	// }
	static findMovies = (req, res, next) => {
		Movie.getMovies((err, result) => {
			if (err) {
				next(err);
			} else {
				res.status(200).json(result);
			}
		});
	};
}

module.exports = MoviesController;
