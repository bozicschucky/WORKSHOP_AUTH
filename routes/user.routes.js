const users = require("../controllers/user.controller");

module.exports = app => {
	app.post("/api/auth/users", users.createUser);
	app.post("/api/auth/login", users.logUserIn);
};
