const ejs = require("ejs"); // ejs
const path = require("path"); // path

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

// set the folder where the stylesheets and scripts will live
app.use(express.static(path.join(__dirname + "/public")));

const subjects = [
    {name: "SDI"},
    {name: "ASR"}
]

app.get("/", (req, res) => {
    res.render("index", {subjects: subjects});
});

