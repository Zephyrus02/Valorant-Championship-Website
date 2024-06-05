const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    IGN: {
        type: String,
        required: true,
    },
}, {_id: false});
const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    players: [playerSchema], // This is an array of player objects
});

module.exports = mongoose.model("Teams", teamSchema);