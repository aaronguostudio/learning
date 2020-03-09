// an array with multiple types
const arr: (number | string)[] = [1, '2', 3]

// tuple
const teacherInfo: [string, string, number] = ['user', 'age', 29]

// interface can be an object, type can represent basic types
interface PersonA {
  readonly username: string
  age?: number
  [propName: string]: any // can also define other properties
  say(): string
}

interface sayHi {
  (word: string): string
}

interface TeacherA extends PersonA {
  teach(): string
}

class UserA implements TeacherA {
  username = 'A'
  age = 12
  say () {
    return 'hello'
  }
  teach () {
    return 'teach'
  }
}

// class in typescript
class PersonB {
  name = 'dell'
  getName () {
    return this.name
  }
}

const p = new PersonB()

class TeacherB extends PersonB {
  getTeacherName () {
    return 'Teacher name'
  }
}

// getter and setter
class PersonC {
  constructor(private _name: string) {}
  get name () {
    return this._name + ' last'
  }
  set name (name: string) {
    this._name = 'name'
  }
}

// singleton
class Demo {
  private static instance: Demo
  private constructor() {}
  public static getInstance () {
    if (!this.instance) {
      this.instance = new Demo()
    }
    return this.instance
  }
}

const demo1 = Demo.getInstance()

// abstract class
abstract class Geom {
  abstract getArea(): number
}

class Circle extends Geom {
  getArea() {
    return 100
  }
}

class Square extends Geom {
  getArea() {
    return 100
  }
}
