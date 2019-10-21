"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name' + this.name);
    }
}
class DevDepartment extends Department {
    constructor() {
        super('Dev');
    }
    printMeeting() {
        console.log('>Dev Meeting');
    }
    generateReports() {
        console.log('>Dev Reports');
    }
}
let devDep;
devDep = new DevDepartment();
devDep.printName();
devDep.printMeeting();
// 不可用调用 generateReport unless :DevDepartment
// 使用类类型，区别于实例类型
class Greeter2 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        if (this.greeting) {
            return 'hello ' + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}
Greeter2.standardGreeting = 'Hello';
let greeter2;
greeter2 = new Greeter2();
console.log(greeter2.greet());
// 和这个是 greeterMaker 的类型是类Greeter
// 区别于 greeterMaker: Greeter2 实例类型
let greeterMaker = Greeter2;
greeterMaker.standardGreeting = 'Hey there';
let greeter2Maker = new greeterMaker();
console.log(greeter2Maker.greet());
