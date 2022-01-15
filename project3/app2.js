var app = require('http');
require('./foo');
var server = app.createServer(handler);
server.listen(8000);
console.log("server start on port 8000");
foo();