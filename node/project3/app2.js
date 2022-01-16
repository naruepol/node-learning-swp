var app = require('http');
require('./foo');
var bar = require('./bar');
var c1 = require("./call").call1;
var c2 = require("./call")
c2.call2();
c2.call3();
var baz = require('./baz.js');
var server = app.createServer(handler);
server.listen(8000);
console.log("server start on port 8000");
foo();
bar(1,2,3,4,5);
baz.log();
baz.sayName("Hi");
baz.showMe(1,2)



