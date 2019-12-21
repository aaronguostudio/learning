// union types
let a: number | string

a = 1
console.log(a)

a = 'Aaron'
console.log(a)

// js quick
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}

// fix for the js quick
for (var i = 0; i < 10; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i)
    }, 100)
  })(i)
}

// http://www.typescriptlang.org/docs/handbook/interfaces.html
// readonly vs const


