var express = require("express"); 
var bodyParser =require("body-parser"); 
var app = express(); 
// Use body parser to take in javascript and parse the object out of the form for example into a usable javascript item 
app.use(bodyParser.urlencoded({extended: true})); 


// This app.set will allow the system to understand that the files we are using and giving it are ejs files 
app.set("view engine", "ejs"); 

//creating a group of friends outside the scope of the function so that the list can be edited
var friends = ["Tony", "Justin", "Lilly", "Valentina", "Arwaa" ];

// simple get function that renders the home page when a get request is sent. Keep in mind that the get function is "listening" for a get request. 
app.get("/", function(req, res){
    res.render("home");
    
}); 

// Gets the friends page, do not forget the / in front of the friends as it directs you to a path 
app.get("/friends", function(req, res){

    
   // Here we render the friends page but we are also passing in the friends list from above to the friends page to be rendered. The friends page will then 
   // take the friends list and you can do whatever to the friends  array. 
    res.render("friends", {friends:friends}); 

});

// The post route will take in post requests such as forms and inputs and buttons, the post route will be pretty similar.
// Use the redirect function in order to refresh the page where the friends list is in order to create a seemingly seamless function.
// Here we are modifying the friends list with the input gotten from the form. The form is the output of the body and therefore it will be stored in a variable
// to be passed in. 
app.post("/addfriend", function(req, res){
    var newfriend = req.body.newfriend; 
    friends.push(newfriend); 
    res.redirect("/friends"); 
});

// Putting the app on port 3000 
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
    
  });