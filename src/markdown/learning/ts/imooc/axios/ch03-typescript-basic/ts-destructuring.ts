// destructuring
let input:[number, number] = [1, 2]

function destructuring([a, b]: [number, number]) {
  console.log('>', a)
  console.log('>', b)
}

destructuring(input)

let [first, ...others] = [1, 2, 3, 4, 5]
console.log('>', first)
console.log('>', others)  // an array

let [, second,,fourth] = [1, 2, 3, 4, 5]
console.log('>', second)
console.log('>', fourth)

let obj = {
  a: 1,
  b: 2,
  c: 3
}

let { a, ...b } = obj
console.log('>', a)
console.log('>', b)
