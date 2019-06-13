// duck typing
interface LabelledVale {
  label: string
}

function printLabel(labelledObj: LabelledVale) {
  console.log(labelledObj.label)
}

printLabel({ label: 'test' })


// optional
interface Square {
  color: string
  area: number
}

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 }
  config.color ? newSquare.color = config.color : null
  config.width ? newSquare.area = config.width : null
  
  return newSquare
}

let sq1 = createSquare({color: 'red'})
console.log(sq1)

// readonly
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 1, y: 2 }
// p1.x = 2 can not change readonly

// readonly array
let na: number[] = [1, 2, 3, 4]
let ra: ReadonlyArray<number> = na

// ra[1] = 2 can not change readonly


// extra type check
interface SphereConfig {
  color?: string
  radius?: number
  [propName: string]: any
}

function createSphere(config: SphereConfig) {
  // 
}
createSphere ({ extraProp: 'anything' })


// function type
interface SearchFunc {
  (source: string, subString: string): boolean
}

function aFunc(callback: SearchFunc) {
  callback('a', 'b')
}

aFunc(() => { return true })


// 索引签名
// 描述看索引类型
// 同时使用数字和字符串索引的时候，数字返回的值必须是
// 字符串索引的子类型，因为其实使用数字索引的时候，
// js 会首先把数字索引转化为字符串，调用 toString()
// 所以 number 的索引需要时字符串索引的同类或者子类
// 参考：https://jkchao.github.io/typescript-book-chinese/typings/indexSignatures.html#%E5%A3%B0%E6%98%8E%E4%B8%80%E4%B8%AA%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D
interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['a', 'b', 'c']
console.log('>', myArray[0])

class Animal {
  constructor (type: string = 'default') {
    this.type = type
  }
  type: string
}
class Dog extends Animal {
  constructor (breed: string = 'default') {
    super()
    this.breed = breed
  }
  breed: string
}

interface Indexable {
  [x: number]: Animal
  [x: string]: Animal
}

let indexableArray: Indexable = [new Animal(), new Animal()]
console.log(indexableArray[0])


// start from here
// https://coding.imooc.com/lesson/330.html#mid=24483