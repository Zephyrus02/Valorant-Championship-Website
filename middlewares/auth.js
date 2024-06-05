const { getUser } = require("../service/auth");

function coreAuth(req, res, next) {
	const userUID = req.cookies?.uid;
	if (!userUID) {
		req.user = null;
		return next();
	}

	const user = getUser(userUID);
	req.user = user;
	next();
}

function restrictUser(roles = []) {
	return (req, res, next) => {
		if (!req.user) {
			return res.redirect("/login");
		}

		if (!roles.includes(req.user.role)) {
			return res.status(403).render("teams", { message: "You are not authorized" });
		}

		return next();
	};
}

module.exports = { coreAuth, restrictUser };
