"use strict";
// 类有实例接口和构造器接口
// 实例接口
class Click {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(d) {
        this.currentTime = d;
    }
}
// 工厂方法
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
}
class AnalogClock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
}
let digital = createClock(DigitalClock, 18, 18);
let analog = createClock(AnalogClock, 18, 18);
let square = {};
square.color = 'red';
square.sideLength = 10;
square.penWidth = 2;
function getCounter() {
    let counter = function (start) {
    };
    counter.interval = 1;
    counter.reset = () => { };
    return counter;
}
let co = getCounter();
co(10);
// 接口实现类
class Control {
}
class button extends Control {
    select() {
    }
}
class TextBox extends Control {
    select() {
    }
}
// 不可用，因为需要 private state 但是没有从 Control 继承
// class ImageC implements SelectableControl {
//   private state:any
//   select()
// }
