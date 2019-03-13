// ejs
const ejs = require("ejs");

// express
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

app.set("view engine", "ejs"); // set view engine to ejs
app.set("views", __dirname + "/views"); // set folder for templated in /views

app.get("/", (req, res) => {
    res.render("index");
});

