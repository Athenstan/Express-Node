var express = require("express"); 
var bodyParser =require("body-parser"); 
var app = express(); 
app.use(bodyParser.urlencoded({extended: true})); 



app.set("view engine", "ejs"); 

var friends = ["Tony", "Justin", "Lilly", "Valentina", "Arwaa" ];

app.get("/", function(req, res){
    res.render("home");
    
}); 

app.get("/friends", function(req, res){
   
    res.render("friends", {friends:friends}); 

});

app.post("/addfriend", function(req, res){
    var newfriend = req.body.newfriend; 
    friends.push(newfriend); 
    res.redirect("/friends"); 
});

// Putting the app on port 3000 
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
    
  });