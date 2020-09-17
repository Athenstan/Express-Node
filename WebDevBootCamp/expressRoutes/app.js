var express = require("express");

var app = express();

app.get("/", function(req, res){
	res.send("Hi there, Welcome to my website");
}); 

app.get("/speak/:animal", function(req,res){
	var animas = req.params.animal;
	var sounds ={
		cow: "mooo",
		fish: "Burlp",
		cat: "meowwww",
		dog: "Woof Woof",
		human: "Suckyyyy"
	}; 
	
	res.send("The " + animas + " says " + sounds[animas]); 
	
}); 
 app.get("/repeat/:word/:amount", function(req,res){
	 var word = req.params.word; 
	 var amount = Number(req.params.amount); 
	 var result = ""; 
	 
	 for(var i = 0; i < amount; i++ ){
		 result += word; 
	 }
	 res.send(result); 
 });

app.get("*", function(req, res){
	res.send("Sorry, page not found.... What are you doing with your life????")
}); 



// Putting the app on port 3000 
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});