"use strict";
let isDone = true;
let decLiteral = 20;
let hexLiteral = 0x14;
let binaryLiteral = 0b10100;
let octalLiteral = 0o24;
let myName = 'Aaron';
let list = [1, 2, 3];
let genericList = [1, 2, 3];
// tuple
// 如果访问越界的元素，它会是联合类型
let x;
x = ['Hello', 12];
// enum，默认值为 1, 2, 3
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var c = Color.Green;
var c = Color.Blue;
var y = 4;
y = 'a string';
console.log('> x is' + x);
function emptyVal() {
    console.log('> empty val');
}
let unionType;
unionType = null;
unionType = 199;
console.log('> union type is', unionType);
// 函数从不返回或者抛出异常 never 
function error(mes) {
    throw new Error('This is never');
}
createFactory({ prop: 0 });
createFactory(null);
// 类型断言
let someValue = 'this is a string';
let strLength = someValue.length;
let strLength2 = someValue.length;
