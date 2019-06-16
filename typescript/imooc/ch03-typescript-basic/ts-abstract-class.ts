abstract class Department {
  name: string

  constructor (name: string) {
    this.name = name
  }

  printName (): void {
    console.log('Department name' + this.name)
  }

  abstract printMeeting ():void
}

class DevDepartment extends Department {
  constructor () {
    super('Dev')
  }
  printMeeting (): void {
    console.log('>Dev Meeting')
  }

  generateReports(): void {
    console.log('>Dev Reports')
  }
}

let devDep: Department
devDep = new DevDepartment()
devDep.printName()
devDep.printMeeting()
// 不可用调用 generateReport unless :DevDepartment



// 使用类类型，区别于实例类型
class Greeter2 {
  static standardGreeting = 'Hello'
  greeting?: string

  constructor (message?: string) {
    this.greeting = message
  }

  greet () {
    if (this.greeting) {
      return 'hello ' + this.greeting
    } else {
      return Greeter2.standardGreeting
    }
  }
}

let greeter2: Greeter2
greeter2 = new Greeter2()

console.log(greeter2.greet())

// 和这个是 greeterMaker 的类型是类Greeter
// 区别于 greeterMaker: Greeter2 实例类型
let greeterMaker: typeof Greeter2 = Greeter2
greeterMaker.standardGreeting = 'Hey there'
let greeter2Maker: Greeter2 = new greeterMaker()
console.log(greeter2Maker.greet())
