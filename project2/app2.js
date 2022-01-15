var app = require('http');
var handler = function (req, res){
        res.writeHead(200, { 'Content-Type' : "text/plain" });
        res.end("yes you can\n");
    }
var server = app.createServer(handler);
server.listen(8000);
console.log("server start on port 8000");

require('./foo');
foo();