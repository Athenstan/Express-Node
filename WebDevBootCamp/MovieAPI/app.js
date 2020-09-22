const { response } = require("express");
// General searches with OMDB is with this link and key; http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb
// Searching with a movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb
// So in order to allow the API to interact with your app, you need to add this into your URL: &apikey=thewdb

 var express = require("express"); 
 var app = express(); 

var request = require("request"); 

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=star&apikey=thewdb", function(error, request, body ){
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body); 
            res.send(results.Search[0].Title); 
        }
    })
})
















// Putting the app on port 3000 
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });