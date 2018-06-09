
const cheerio = require("cheerio");
const express = require("express");
let Router  = express.Router();
const DB      = require("../models");


Router.get("/", (request, response) => {
    response.render("index");
});


module.exports = Router;

