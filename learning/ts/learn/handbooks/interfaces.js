// Source: http://www.typescriptlang.org/docs/handbook/interfaces.html
function printUserName(user) {
    console.log('User name is', user.name);
}
// Notice that we don't need to explicitly say this
// object implements User interface like in Java
var personHasName = { name: 'Aaron', age: 32 };
printUserName(personHasName);
// parameter names can be different
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.tick = function () { };
    return Clock;
}());
