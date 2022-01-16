
var express = require('express');
var main = express();
var user = require('./user');
var server = require('http').Server(main);
server.listen(8000);
main.use(express.static('web'));

main.use("/svr",user);
console.log('Running port 8000');