"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        var _this = this;
        this.walk = function () {
            console.log(_this.firstName + " is walking");
        };
        this.run = function () {
            console.log(_this.firstName + " is running");
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName, age, skills) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.code = function () {
            console.log(_this.firstName + " " + _this.lastName + " can code using " + _this.skills.join(' '));
        };
        _this.skills = skills;
        return _this;
    }
    return Programmer;
}(Person));
exports.Programmer = Programmer;
var FrontEndProgrammer = /** @class */ (function (_super) {
    __extends(FrontEndProgrammer, _super);
    function FrontEndProgrammer(firstName, lastName, age, skills) {
        var _this = _super.call(this, firstName, lastName, age, skills) || this;
        _this.draw = function () {
            console.log("Front-end developer " + _this.firstName + " " + _this.lastName + " can code using " + _this.skills.join(' '));
        };
        return _this;
    }
    return FrontEndProgrammer;
}(Programmer));
exports.FrontEndProgrammer = FrontEndProgrammer;
var FullStackProgrammer = /** @class */ (function (_super) {
    __extends(FullStackProgrammer, _super);
    function FullStackProgrammer(firstName, lastName, age, skills) {
        var _this = _super.call(this, firstName, lastName, age, skills) || this;
        _this.draw = function () {
            console.log("Full-stack developer " + _this.firstName + " " + _this.lastName + " can code using " + _this.skills.join(' '));
        };
        _this.designDb = function (dbName) {
            console.log("Full-stack developer " + _this.firstName + " " + _this.lastName + " designs db " + dbName);
        };
        return _this;
    }
    return FullStackProgrammer;
}(Programmer));
exports.FullStackProgrammer = FullStackProgrammer;
