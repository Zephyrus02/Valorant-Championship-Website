const express = require("express");
// const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const teamsRoute = require("./routes/teams");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

mongoose
	.connect(process.env.mongodb)
	.then(() => {
		console.log("Connected to database");
	})
	.catch((error) => {
		console.error("Error connecting to database", error);
	});

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(coreAuth);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("home");
});

app.use("/teams", teamsRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
