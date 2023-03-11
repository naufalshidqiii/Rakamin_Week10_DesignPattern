const express = require("express");
const app = express();
const port = 3000;
const errorHandler = require("./middlewares/errorhandler.js");
const router = require("./routes");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);
app.use(errorHandler);

// Listening to API Calls
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
