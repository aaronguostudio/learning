"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// destructuring
let input = [1, 2];
function destructuring([a, b]) {
    console.log('>', a);
    console.log('>', b);
}
destructuring(input);
let [first, ...others] = [1, 2, 3, 4, 5];
console.log('>', first);
console.log('>', others); // an array
let [, second, , fourth] = [1, 2, 3, 4, 5];
console.log('>', second);
console.log('>', fourth);
let obj = {
    a: 1,
    b: 2,
    c: 3
};
let { a } = obj, b = __rest(obj, ["a"]);
console.log('>', a);
console.log('>', b);
