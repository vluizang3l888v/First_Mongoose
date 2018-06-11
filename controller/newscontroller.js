
const cheerio = require("cheerio");
const express = require("express");
let Router  = express.Router();
const DB      = require("../models");


Router.get("/", (request, response) => {
    response.render("index");
});
//  this one gets the index. 
//cherrio get the data from website, so I won't have to do it manually. 

// scrape is a verb, it's the action.   Cherrio does scraping. 

// public is everything you can see...

Router.get("/", (request, response) => {
    response.render("index");
});




module.exports = Router