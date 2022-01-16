//EXPORT A NAMED OBJECT
var Baz = function(){};
Baz.prototype.log = function() {
    console.log("log display");
};

Baz.prototype.sayName = function (name) {
    console.log("Hello"+name);
};

Baz.prototype.showMe = function(num1, num2) {
    console.log("Hello "+num1+num2);
};

module.exports = new Baz();