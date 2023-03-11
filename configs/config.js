const { Pool } = require("pg");

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "week10_movies",
	password: "admin",
	post: 5432,
});

module.exports = pool;
