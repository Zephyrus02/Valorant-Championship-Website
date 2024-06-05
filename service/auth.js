const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT;

function setUser(user) {
	return jwt.sign(
		{
			id: user.id,
			email: user.email,
			role: user.role,
		},
		secret,
		{
			expiresIn: "1h",
		}
	);
}

function getUser(token) {
	if (!token) return null;
	try {
		return jwt.verify(token, secret);
	} catch (error) {
		return null;
	}
}

module.exports = { setUser, getUser };
