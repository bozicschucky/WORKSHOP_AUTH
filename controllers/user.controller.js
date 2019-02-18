const User = require("../models/Users");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;

module.exports = {
	createUser: (req, res) => {
		// validate
		bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
			// Store hash in your password DB.
			if (err) {
				console.log(err);
			} else {
				const user = new User({
					username: req.body.username,
					password: hash
				});

				user.save(err => {
					if (err) console.log(err);
					res.status(201);
					return res.json({
						success: true,
						message: "User Created successfully",
						user: {
							username: user.username,
							userToken: jwt.sign(
								{ username: user.username },
								jwt_secret
							)
						}
					});
				});
			}
		});
	},
	logUserIn: (req, res) => {
		const username = req.body.username;
		const password = req.body.password;
		// const user = new User();
		User.findOne({ username: username }, (err, user) => {
			if (err) console.log(err);
			// Load hash from your password DB.
			if (user) {
				bcrypt.compare(password, user.password, function(err, hash) {
					console.log(err);
					if (hash) {
						return res.json({
							success: true,
							message: "User login successful",
							user: {
								username: user.username,
								userToken: jwt.sign(
									{ username: user.username },
									jwt_secret
								)
							}
						});
					} else {
						res.status(401);
						return res.json({
							message: "Invalid password"
						});
					}
				});
			} else {
				res.status(401);
				return res.json({
					message: "Invalid username Or User not Found"
				});
			}
		});
	}
};
