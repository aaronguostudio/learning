"use strict";
// 交叉类型
function extend(first, second) {
    let res = Object.assign({}, first, second);
    return res;
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
class ConsoleLogger {
    log() { }
}
var jim = extend(new Person('Aaron'), new ConsoleLogger());
console.log(jim.name);
jim.log();
// Union
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error('Expected string or number');
}
console.log(padLeft('Hey', 2));
class BirdFish {
    fly() {
    }
    swim() {
    }
    layEggs() {
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function getSmallPet() {
    return new BirdFish();
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
function padLeft2(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error('Expected string or number');
}
// nullable type
