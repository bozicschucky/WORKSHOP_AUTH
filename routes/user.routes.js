const user = require("../controllers/user.controller");

module.exports = app => {
	app.post("/api/auth/user", user.create);
	app.post("/api/auth/user/login", user.logIn);
};
