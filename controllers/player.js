const Player = require("../models/player");
const { setPlayer } = require("../service/auth");

async function signupPlayer(req, res) {
	try {
		const { name, ID, password } = req.body;
		await Player.create({
			name,
			ID,
			password,
		});
		res.status(201).redirect("/");
	} catch (error) {
		res.status(400).send(error);
	}
}

async function loginPlayer(req, res) {
	try {
		const { ID, password, returnUrl } = req.body; // Extract returnUrl from the request body
		const player = await Player.findOne({ ID, password });
		if (!player) {
			return res
				.status(401)
				.render("login.js", { error: "Invalid email or password" });
		}
		const token = setPlayer(player);
		res.cookie("uid", token, {
			expires: new Date(Date.now() + 3600000),
		});

		// Redirect to the provided returnUrl or to the home page if returnUrl is not available
		const redirectUrl = returnUrl || "/";
		res.status(200).redirect(redirectUrl);
	} catch (error) {
		res.status(400).send(error);
	}
}

module.exports = { signupPlayer, loginPlayer };
