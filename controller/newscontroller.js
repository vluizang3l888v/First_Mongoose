
const cheerio = require("cheerio");
const express = require("express");
const axios   = require("axios")  // package used to to AJAX calls...
let Router  = express.Router();
//const DB      = require("../models");


Router.get("/", (request, response) => {
    var fake = [
        {title:"China", link: "http://www.scmp.com/news/china"},
        {title:"China2 click", link:"http://www.bing.com"},
        {title:"China3 click", link:"http://www.bing.com"}
    ]



    console.log("firing1");
    response.render("index", {article: fake})
    
});
//  this one gets the index. 
//cherrio get the data from website, so I won't have to do it manually. 

// scrape is a verb, it's the action.   Cherrio does scraping. 

// public is everything you can see...

Router.get("/scrape", (request, response) => {
    
});

//test
Router.get("/obey", (request, response) => {
    var obey = [{title2:"ChinaNews", link2: "https://twitter.com/XHNews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}]

// I don't get where Router.get goes???

    console.log("firing");
    response.render("index", {article: obey})
    
});
//test






//new
Router.get("/articles", (request, response) => {

   return axios.get("https://thediplomat.com/tag/china-state-run-media/").then(function(res){
    var $ =cheerio.load(res.data)
    var articles = []
    $(".postPrevTitle").each(function(i,element) {
    var header = $(this)
    .text();


    var youareL =$(this)
    .parent()
    .parent()
    .children("a")
    .attr("href")

    var conclusion = $(this)
   .parent()
   .children(".prose")
   .text()

    

    var data = {
    Line1: header,
    Line2: youareL,
    Line3: conclusion
    
      }
    articles.push(data)
    })
   
    res.json(articles);
    })
   })


//new







//fake dummy data, TITLE LINK, THEN SEE IF IT DISPLAYS ON MY HANDLESBARS. 
//
//Luis




module.exports = Router