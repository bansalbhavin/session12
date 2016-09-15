var express = require('express');
var app = express();
var port = 8080;

/**
Main todos array
*/
var todos = [
	{
		id:1,
		description: "This is sample todo.",
		completed:false
	},
	{
		id:2,
		description: "Need to go mithakali.",
		completed:false
	},
	{
		id:3,
		description: "Need to go home.",
		completed: true
	}
];

app.get('/', function(req, res){
	res.send("Todos API");
});

app.get('/getTodos', function(req, res){
	res.json(todos);
});

app.get('/getTodos/:id', function(req, res){
	
	var todoId = req.params.id;
	var matchedData;
	var isFound = false;
	todos.forEach(function(obj){
		
		if(isFound === true){
			return;
		}
		if(obj.id == todoId){
			matchedData = obj;
			isFound = true;
		}
	})
	
	console.log(matchedData);
	if(typeof matchedData === 'undefined'){
		res.status(404).send("Unable to find todo!")
	} else {
		res.json(matchedData);
	}
});

app.get('/addTodo', function(req, res){
	res.send("Add API");
});

app.get('/editTodo', function(req, res){
	res.send("Edit API");
});

app.get('/deleteTodo', function(req, res){
	res.send("Delete API");
});

app.listen(port, function(){
	console.log("Server started on port " + port);
})