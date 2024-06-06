const express = require("express");
const router = express.Router();
const { getTeam, viewTeams } = require("../controllers/teams");
const { restrictUser } = require("../middlewares/auth");
const Team = require("../models/teams");

router.get("/all", viewTeams); //, restrictUser(["admin"])
router.get("/:name", getTeam);

module.exports = router;
