var express = require('express');
const { runInNewContext } = require('vm');
var app = express();
var server = require('http').Server(app);
server.listen(8000);
app.use(express.static('web'));
console.log("Server runnning port 8000");

app.get("/user", function(req, res){
    res.json({ code : "007"});
});