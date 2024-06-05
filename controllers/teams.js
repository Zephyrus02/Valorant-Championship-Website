const Teams = require("../models/teams");

async function createTeam(req, res) {
	try {
		await Teams.create({
			name: req.body.name,
			players: req.body.players,
		});
		return res.status(200).json({ message: "Team created" });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
}

async function getTeam(req, res) {
	try {
		const name = req.params.name;
		const team = await Teams.findOne({
			name: { $regex: new RegExp(name, "i") },
		});

		// Create a new JSON object
		const teamDetails = {
			teamName: team.name,
			players: team.players,
		};

		return res.status(200).json(teamDetails);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
}

async function viewTeams(req, res) {
	try {
		const teams = await Teams.find();
		return res.status(200).json(teams);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
}

module.exports = { createTeam, getTeam, viewTeams };
