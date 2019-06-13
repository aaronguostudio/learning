let isDone: boolean = true
let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

let myName: string = 'Aaron'

let list: number[] = [1,2,3]
let genericList: Array<number> = [1,2,3]

// tuple
// 如果访问越界的元素，它会是联合类型
let x: [string, number]
x = ['Hello', 12]

// enum，默认值为 1, 2, 3
enum Color {
  Red = 1,
  Green,
  Blue
}

var c: Color = Color.Blue
var c: Color = Color.Green
var c: Color = Color.Blue

var y: any = 4
y = 'a string'
console.log('> x is' + x)

function emptyVal(): void {
  console.log('> empty val')
}

let unionType: number | null
unionType = null
unionType = 199
console.log('> union type is', unionType)

// 函数从不返回或者抛出异常 never 
function error(mes: string): never {
  throw new Error('This is never')
}

declare function create (o: object | null): void;

create({prop: 0})
create(null)

// 类型断言
let someValue:any = 'this is a string'
let strLength: number = (<string>someValue).length
let strLength2: number = (someValue as string).length










