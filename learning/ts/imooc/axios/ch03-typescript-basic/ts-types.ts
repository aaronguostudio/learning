// 交叉类型
function extend<T, U>(first: T, second: U): T & U {
  let res = {...first, ...second} as T & U
  return res
}

class Person {
  constructor (public name: string) {

  }
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log () { }
}

var jim = extend(new Person('Aaron'), new ConsoleLogger())
console.log(jim.name)
jim.log()

// Union
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error('Expected string or number')
}

console.log(padLeft('Hey', 2))


interface Bird {
  fly():void
  layEggs():void
}

interface Fish {
  swim():void
  layEggs():void
}

class BirdFish implements Bird {
  fly() {

  }
  swim() {

  }
  layEggs() {
    
  }
}

function isFish(pet: Fish | Bird):pet is Fish {
  return (pet as Fish).swim !== undefined
}

function isNumber(x: any): x is number {
  return typeof x === 'number'
}

function isString(x: any): x is string {
  return typeof x === 'string'
}

function getSmallPet(): Bird | Fish {
  return new BirdFish()
}

let pet = getSmallPet()

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

function padLeft2(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value
  }
  if (isString(padding)) {
    return padding + value
  }
  throw new Error('Expected string or number')
}

// nullable type
