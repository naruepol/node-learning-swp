var express = require('express');
var app = express();
var server = require('http').Server(app);
server.listen(8000);
app.use(express.static('web'));
console.log("Server runnning port 8000");

app.get("/user", function(req, res){
    res.json({ code : "007"});
});

app.get("/users/:userId/books/:bookId", function(req, res){
    console.log(req.params);
    res.json(req.params);
});