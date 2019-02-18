const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true }
});

UserSchema.index({ username: "text" });

module.exports = mongoose.model("Users", UserSchema);
