
const cheerio = require("cheerio");
const express = require("express");
let Router  = express.Router();
//const DB      = require("../models");


Router.get("/", (request, response) => {
    var fake = [{title:"China", link: "http://www.google.com"}]



    console.log("firing");
    response.render("index", {article: fake})
    
});
//  this one gets the index. 
//cherrio get the data from website, so I won't have to do it manually. 

// scrape is a verb, it's the action.   Cherrio does scraping. 

// public is everything you can see...

Router.get("/scrape", (request, response) => {
    

    
    
    

});



//fake dummy data, TITLE LINK, THEN SEE IF IT DISPLAYS ON MY HANDLESBARS. 
//
//Luis




module.exports = Router