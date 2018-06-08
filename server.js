const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
// librarys.

//scrape tools
var axios = require("axios");
var cheerio = require("cheerio");

// require all models
var db = require("./models");

var PORT = 3000;

var app = express();






app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// this is how to connect to M database.
//mongoose.connect("mongodb://localhost/unk");
// unk is database, need to install. 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


const exphbs = require("express-handlebars");


//turn on HB. 
app.engine("handlebars", exphbs({ defaultLayout: "main"}));

// puts it in drive. 
app.set("view engine","handlebars");


// routes must be at end to operate correctly. 
// before you can fly you need all of these reqs before you can actually fly. 
const routes = require("./controller/newsController.js");
// I need routes.

// turn it on. 
app.use(routes)


app.listen(PORT, () => {
    console.log(`app running on port ${PORT}!`);
});






