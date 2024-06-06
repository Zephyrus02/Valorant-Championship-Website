const express = require("express");
const router = express.Router();

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

router.get("/builder", (req, res) => {
	res.render("teamBuilder");
});

router.get("/viewer", (req, res) => {
	res.render("teamViewer");
});

module.exports = router;
