const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	ID: {
		type: String,
		required: true,
		unique: true,
	},
	IGN: {
		type: String,
		required: true,
	},
	team: {
		type: String,
		required: true,
		unique: true,
	},
    role: {
        type: String,
        required: true,
        enum: ["contestant", "admin"],
        default: "contestant",
    },
});

module.exports = mongoose.model("Teams", teamSchema);
