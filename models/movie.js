const pool = require("../configs/config.js");

class Movie {
	static getAllMovies = (callback) => {
		//callback => (err,result)
		const findQuery = `
            SELECT
            *
            FROM movies;
        `;

		pool.query(findQuery, (err, result) => {
			if (err) {
				callback(err, null);
			} else {
				callback(null, result.rows);
			}
		});
	};

	static getOneMovies = (callback) => {
		//callback => (err,result)
		const findQuery = `
            SELECT
            *
            FROM movies
            WHERE movies.id = $1;
        `;

		pool.query(findQuery, [id], (err, result) => {
			if (err) {
				callback(err, null);
			} else if (result.rows.length == 0) {
				next({ name: "ErrorNotFound" });
			} else {
				callback(null, result.rows);
			}
		});
	};
}

module.exports = Movie;
