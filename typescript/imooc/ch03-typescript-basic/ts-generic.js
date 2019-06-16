"use strict";
function identity(arg) {
    return arg;
}
// generic variable
// Both of them are valid
let output1 = identity('myString');
let output2 = identity('myString');
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg[0];
}
let myIdentity = identity;
// generic class
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
let stringNumeric = new GenericNumber();
stringNumeric.zeroValue = 'abc';
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
let x3 = { a: 1, b: 2, c: 3 };
console.log(getProperty(x3, 'a'));
console.log(getProperty(x3, 'b'));
console.log(getProperty(x3, 'c'));
// console.log(getProperty(x3, 'd')) // won't work d is not in the keys of a
// generic in factory function
function create(c) {
    return new c();
}
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class LionKeeper {
    constructor() {
        this.nametag = 'default';
    }
}
class Animial3 {
    constructor() {
        this.numLength = 1;
    }
}
class Bee extends Animial3 {
}
class Lion extends Animial3 {
}
function createInstance(c) {
    return new c();
}
createInstance(Bee).keepper.hasMask;
createInstance(Lion).keepper.nametag;
