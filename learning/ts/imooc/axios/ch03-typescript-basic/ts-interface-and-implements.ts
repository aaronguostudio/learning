// 类有实例接口和构造器接口

interface ClockInterfact {
  currentTime: Date
}

// 这个构造器接口返回一个实例类型
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterfact
}

// 实例接口
class Click implements ClockInterfact {
  currentTime: Date
  constructor (h: number, m: number) {
    this.currentTime = new Date()
  }
  setTime(d: Date) {
    this.currentTime = d
  }
}

// 工厂方法
function createClock(ctor: ClockConstructor, hour: number, minute: number):ClockInterfact {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterfact {
  currentTime: Date
  constructor (h: number, m: number) {
    this.currentTime = new Date()
  }
}

class AnalogClock implements ClockInterfact {
  currentTime: Date
  constructor (h: number, m: number) {
    this.currentTime = new Date()
  }
}

let digital = createClock(DigitalClock, 18, 18)
let analog = createClock(AnalogClock, 18, 18)

// 接口继承
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Square
square.color = 'red'
square.sideLength = 10
square.penWidth = 2

// 多类型接口
interface Counter {
  (start: number): string,
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = function (start: number) {
    
  } as Counter

  counter.interval = 1
  counter.reset = () => {}
  return counter
}

let co = getCounter()
co(10)

// 接口实现类
class Control {
  private state:any
}

interface SelectableControl extends Control {
  select():void
}

class button extends Control implements SelectableControl {
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