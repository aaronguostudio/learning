// Source: http://www.typescriptlang.org/docs/handbook/interfaces.html

/*
  Duck typing
  ---------------------------------------------------------
*/
interface User {
  name: string
}

function printUserName (user: User) {
  console.log('User name is', user.name)
}

// Notice that we don't need to explicitly say this
// object implements User interface like in Java
let personHasName = { name: 'Aaron', age: 32 }
printUserName(personHasName)


/*
  Index signatures
  ---------------------------------------------------------
*/

// We’ll discuss index signatures in a bit, but here
// we’re saying a SquareConfig can have any number of
// properties, and as long as they aren’t color or width,
// their types don’t matter.
// This will skip error when pass colour instead of color
// Another way is creating an object as the variables
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}



/*
  Function types
  ---------------------------------------------------------
*/
interface SearchFunction {
  (source: string, subString: string): boolean
}

// parameter names can be different
let mySearch: SearchFunction;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

/*
  Indexable types
  ---------------------------------------------------------
*/
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


/*
  Class types
  ---------------------------------------------------------
*/
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }
// class Clock implements ClockInterface {
//   currentTime: Date = new Date()
//   constructor (h: number, m: number) {
//   }
//   setTime (d: Date) {
//     this.currentTime = d;
//   }
// }



// this will get error because constructor is
// the private side of a class, it won't check
// the private side, instead, it checks the
// instance side
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }
// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }



// correct and simple way to use constructor
interface ClockConstructor {
  new (hour: number, minute: number)
}

interface ClockInterface {
  tick()
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick () {}
}
