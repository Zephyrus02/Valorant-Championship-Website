const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
	teamname: {
		type: String,
		required: true,
		unique: true,
	},
	IGL: {
		type: String,
		required: true,
	},
	IGN1: {
		type: String,
		required: true,
	},
	Player2: {
		type: String,
		required: true,
	},
	IGN2: {
		type: String,
		required: true,
	},
	Player3: {
		type: String,
		required: true,
	},
	IGN3: {
		type: String,
		required: true,
	},
	Player4: {
		type: String,
		required: true,
	},
	IGN4: {
		type: String,
		required: true,
	},
	Player5: {
		type: String,
		required: true,
	},
	IGN5: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Teams", teamSchema);
