var Greeting = /** @class */ (function () {
    function Greeting(yourname) {
        this.name = "N/A";
        this.name = yourname;
    }
    Greeting.prototype.showName = function () { };
    Greeting.prototype.showAny = function () { };
    Greeting.prototype.showString = function () {
        return "SE";
    };
    return Greeting;
}());
var g = new Greeting("Software");
g.showString();
