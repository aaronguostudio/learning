class Greeter {
  greeting: string
  constructor (message: string) {
    this.greeting = message
  }

  greet() {
    return 'Hello ' + this.greeting
  }
}

let greeterer = new Greeter('World')
greeterer.greet()

// inherits
class Animal2 {
  private age: number = 0
  readonly gender: number = 1
  name:string
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}`)
  }
}

class Dog2 extends Animal2 {
  constructor (name: string) {
    super(name)
  }
  bark () {
    console.log('bark')
  }
}

const dog = new Dog2("wangwang")
dog.bark()
dog.move(10)

// If define: protected constructor () {}, outside can not new it


// static
class Grid {
  static origin = {x: 0, y: 0}
  scale: number

  constructor(scale: number) {
      this.scale = scale
  }

  calculateDistanceFromOrigio(point: { x:number, y:number }) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }

}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigio({x: 3, y: 4}))
console.log(grid2.calculateDistanceFromOrigio({x: 3, y: 4}))