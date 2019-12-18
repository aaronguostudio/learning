"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var aaron = new Person_1.FullStackProgrammer('Aaron', 'Guo', 32, ['node', 'java', 'python']);
var bob = new Person_1.FrontEndProgrammer('Bob', 'Nice', 23, ['react']);
function drawPages(drawableArray) {
    drawableArray.forEach(function (drawable) { return drawable.draw('Index Page'); });
}
var drawableArray = [aaron, bob];
drawPages(drawableArray);
