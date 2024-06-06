const express = require("express");
const router = express.Router();
const { createTeam } = require("../controllers/teams");
const { restrictUser } = require("../middlewares/auth");
const Team = require("../models/teams");

router.post("/", createTeam);

module.exports = router;
