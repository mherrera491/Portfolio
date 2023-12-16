// DEPENDENCIES
require("dotenv").config();
const { PORT } = process.env;
const express = require("express")
const cors = require("cors");

// IMPORT JSON FILES
const projects = require("./projects.json")
const about = require("./about.json");

// CREATE APP OBJECT
const app = express();

// MIDDLEWARE
app.use(cors());

// HOME ROUTE FOR TESTING
app.get("/", (req, res) => {
    res.send("Hello World")
})

// ROUTE FOR RETRIEVING PROJECTS
app.get("/projects", (req, res) => {
    res.json(projects);
})

// ROUTE FOR RETRIEVING ABOUT INFO
app.get("/about", (req, res) => {
    res.json(about);
})

// TURN ON SERVER LISTENING
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
