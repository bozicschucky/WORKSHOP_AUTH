const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/db.config");
const mongoose = require("mongoose");
var morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("default"));

mongoose.Promise = global.Promise;

mongoose
	.connect(dbConfig.url, {
		useNewUrlParser: true
	})
	.then(() => {
		console.log("connected to db");
	})
	.catch(err => {
		console.log(err);
		process.exit();
	});

app.get("/api", (req, res) => {
	return res.json({
		message: "Our API"
	});
});

require("./routes/task.routes")(app);
require("./routes/user.routes")(app);

app.listen(8000, () => {
	console.log("Server running on port 8000");
});
