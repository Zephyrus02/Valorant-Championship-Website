const express = require("express");
const router = express.Router();
const { signupPlayer, loginPlayer } = require("../controllers/player");

router.post("/", signupPlayer);
router.post("/login", loginPlayer);

module.exports = router;
