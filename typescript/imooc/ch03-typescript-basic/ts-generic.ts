function identity<T>(arg: T): T {
  return arg
}

// generic variable
// Both of them are valid
let output1 = identity<string>('myString')
let output2 = identity('myString')

function loggingIdentity<T> (arg: T[]) : T {
  console.log(arg.length)
  return arg[0]
}

// generic type
interface GenericIdentityFn<T> {
  (arg: T) : T
}
let myIdentity: GenericIdentityFn<number> = identity

// generic class
class GenericNumber<T> {
  zeroValue?: T
  add?: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = 'abc'
stringNumeric.add = function (x, y) {
  return x + y
}

console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))

// generic constrains
interface LengthWise {
  length: number
}

function loggingIdentity2<T extends LengthWise>(arg: T): T {
  console.log(arg.length)
  return arg
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x3 = {a: 1, b: 2, c: 3}
console.log(getProperty(x3, 'a'))
console.log(getProperty(x3, 'b'))
console.log(getProperty(x3, 'c'))
// console.log(getProperty(x3, 'd')) // won't work d is not in the keys of a


// generic in factory function
function create<T>(c: { new(): T }):T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true
}

class LionKeeper {
  nametag: string = 'default'
}

class Animial3 {
  numLength: number = 1
}

class Bee extends Animial3 {
  keepper!: BeeKeeper
}

class Lion extends Animial3 {
  keepper!: LionKeeper
}

function createInstance<T extends Animial3> (c: new() => T): T {
  return new c()
}

createInstance(Bee).keepper.hasMask
createInstance(Lion).keepper.nametag