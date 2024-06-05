const express = require("express");
const router = express.Router();
const { createTeam, getTeam, viewTeams } = require("../controllers/teams");
const { restrictUser } = require("../middlewares/auth");
const Teams = require("../models/teams");

router.post("/create", createTeam);

router.get("/all",restrictUser(["admin"]), viewTeams);
router.get("/:name", getTeam);

module.exports = router;
