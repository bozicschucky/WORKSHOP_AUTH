var jwt = require("jsonwebtoken");
const jwt_secret = "This is topsecret#$%^^%^$^$^#$#W$@$$#%#%#%$";

module.exports = authenticate = function(req, res, next) {
	var userToken =
		req.headers["authorization"];

	//decode token
	if (userToken) {
		if (userToken.startsWith("Bearer ")) {
			// Remove Bearer from string
			userToken = userToken.slice(7, userToken.length).trimLeft();
		}
		jwt.verify(userToken, jwt_secret, function(err, decoded) {
			if (err) {
				res.status(400).json({
					success: false,
					message: "Invalid Token, try again !!!!"
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(403).json({
			success: false,
			message: "No user token provided, try again !!!!!"
		});
	}
};
