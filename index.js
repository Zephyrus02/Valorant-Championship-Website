const express = require("express");
// const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const builderRoute = require("./routes/teamBuildRouter");
const viewRoute = require("./routes/teamViewRouter");
const staticRoute = require("./routes/staticRouter");
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
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(coreAuth);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", staticRoute);
app.use("/builder", builderRoute);
app.use("/viewer", viewRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
