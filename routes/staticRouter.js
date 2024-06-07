const express = require("express");
const router = express.Router();
const { restrictLogin } = require("../middlewares/auth");

router.get("/", (req, res) => {
	res.render("home");
});

router.get("/teams", (req, res) => {
	res.render("teams");
});

router.get("/brackets", (req, res) => {
	res.render("brackets");
});

router.get("/schedule", (req, res) => {
	res.render("schedule");
});

router.get("/standings", (req, res) => {
	res.render("standings");
});

router.get("/builder", restrictLogin, (req, res) => {
	res.render("teamBuilder");
});

router.get("/viewer", restrictLogin, (req, res) => {
	res.render("teamViewer");
});

router.get("/signup", (req, res) => {
	res.render("signup");
});

router.get("/login", (req, res) => {
	res.render("login");
});

module.exports = router;
