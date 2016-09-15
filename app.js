var express = require('express');
var app = express();
var port = 8080;

app.get('/', function(req, res){
	res.send("Todos API");
});

app.listen(port, function(){
	console.log("Server started on port " + port);
})