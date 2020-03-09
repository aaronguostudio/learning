"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello ' + this.greeting;
    }
}
let greeterer = new Greeter('World');
greeterer.greet();
// inherits
class Animal2 {
    constructor(name) {
        this.age = 0;
        this.gender = 1;
        this.name = name;
    }
    move(distance = 0) {
        console.log(`Animal moved ${distance}`);
    }
}
class Dog2 extends Animal2 {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log('bark');
    }
}
const dog = new Dog2("wangwang");
dog.bark();
dog.move(10);
// If define: protected constructor () {}, outside can not new it
// static
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigio(point) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigio({ x: 3, y: 4 }));
console.log(grid2.calculateDistanceFromOrigio({ x: 3, y: 4 }));
