
var express = require('express');
var user = require('./user');

var main = express();
var server = require('http').Server(main);
server.listen(8000);
main.use(express.static('web'));
console.log('Running port 8000');

main.use("/svr",user);
