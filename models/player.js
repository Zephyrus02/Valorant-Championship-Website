const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	ID: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
		enum: ["contestant", "admin"],
		default: "contestant",
	},
});

module.exports = mongoose.model("player", playerSchema);
