const pool = require("../configs/config.js");

class Movie {
	static getMovies = (callback) => {
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
}

module.exports = Movie;
