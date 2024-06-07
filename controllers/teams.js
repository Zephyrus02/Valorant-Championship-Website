const Teams = require("../models/teams");

async function createTeam(req, res) {
	try {
		await Teams.create({
			teamname: req.body.teamname,
			IGL: req.body.IGL,
			IGN1: req.body.IGN1,
			Player2: req.body.Player2,
			IGN2: req.body.IGN2,
			Player3: req.body.Player3,
			IGN3: req.body.IGN3,
			Player4: req.body.Player4,
			IGN4: req.body.IGN4,
			Player5: req.body.Player5,
			IGN5: req.body.IGN5,
		});
		return res
			.status(200)
			.render("teamBuilder", { message: "Team created successfully" });
	} catch (error) {
		return res
			.status(400)
			.render("teamBuilder", { message_err: error.message });
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
