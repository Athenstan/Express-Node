var express = require("express"); 

var app = express(); 

// Testing: when you go to "/" you should get hi 
// Using app.get, The fucntion requires two parameters path, and a function() 
app.get("/", function(req, res){
	res.send("hi there");
});
// Testing: when you go to "/goodbye" you should get goodbye
app.get("/bye", function(req,res){
	res.send("goodbye");
});
// Testing: when you go to "/dog " you should get Meow
app.get("/dog", function(req,res){
	res.send("WOOF");
});







// Putting the app on port 3000 
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});