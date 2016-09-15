var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

app.use(bodyParser.json());

/**
Main todos array
*/
var todos = [];
var todosIndex = 1;

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

app.post('/todos', function(req, res){
	
	var body = req.body;
	body.id = todosIndex ++;

	if(typeof body !== 'undefined'){
		todos.push(body);
		res.send("Todo added successfully.")
	} else {
		res.status(404).send("Missing required data!");
	}
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