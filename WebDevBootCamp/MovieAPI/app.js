const { response } = require("express");
// General searches with OMDB is with this link and key; http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
// Searching with a movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb
// So in order to allow the API to interact with your app, you need to add this into your URL: &apikey=thewdb

 var express = require("express"); 
 var app = express(); 
 
var request = require("request"); 
app.set("view engine", "ejs"); 

app.get("/results", function(req, res){
    var searched = req.query.search;
    var URL = "http://www.omdbapi.com/?s=" + searched +"&apikey=thewdb"; 
    request(URL, function(error, request, body ){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body); 
            // res.send(results.Search[0].Title); Commenting out for the use of the render page instead
            res.render("results", {data:data}); // Use the curly brackets to bring the data from the javascript into the EJS or the HTML File. 
        }
    })
});

app.get("/search", function(req, res){
    res.render("search"); 
});
















// Putting the app on port 3000 
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });