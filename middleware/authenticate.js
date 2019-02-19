var jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET;

module.exports = authenticate = function(req, res, next) {
	var userToken = req.headers["authorization"];
	//decode token
	if (userToken) {
		userToken = userToken.split(" ")[1];
		jwt.verify(userToken, jwt_secret, function(err, decoded) {
			if (err) {
				res.status(400).json({
					message: "Invalid token"
				});
			} else {
				(req.decoded = decoded), next();
			}
		});
	} else {
		return res.status(403).json({
			message: "No user Token provided"
		});
	}
};
