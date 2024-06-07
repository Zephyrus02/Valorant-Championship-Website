const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT;

function setPlayer(Player) {
	return jwt.sign(
		{
			name: Player.name,
			ID: Player.ID,
			role: Player.role,
		},
		secret,
		{
			expiresIn: "1h",
		}
	);
}

function getPlayer(token) {
	if (!token) return null;
	try {
		return jwt.verify(token, secret);
	} catch (error) {
		return null;
	}
}

module.exports = { setPlayer, getPlayer };
