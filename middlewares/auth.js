const { getPlayer } = require("../service/auth");

function coreAuth(req, res, next) {
	const PlayerUID = req.cookies?.uid;
	if (!PlayerUID) {
		req.Player = null;
		return next();
	}
	req.Player = getPlayer(PlayerUID);
	next();
}

function restrictPlayer(roles = []) {
	return (req, res, next) => {
		if (!req.Player) {
			return res.redirect("/login");
		}

		if (!roles.includes(req.Player.role)) {
			return res
				.status(403)
				.render("teams", { message: "You are not authorized" });
		}

		return next();
	};
}

async function restrictLogin(req, res, next) {
	const PlayerUID = req.cookies?.uid;
	if (!PlayerUID) {
		return res.redirect("/login");
	}
	req.Player = getPlayer(PlayerUID);

	if (!req.Player) {
		return res.redirect("/login");
	}

	return next();
}

module.exports = { coreAuth, restrictPlayer, restrictLogin };
