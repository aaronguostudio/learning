class Person {
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  firstName: string
  lastName: string
  age: number

  walk = () : void => {
    console.log(`${this.firstName} is walking`)
  }

  run = () : void => {
    console.log(`${this.firstName} is running`)
  }
}

class Programmer extends Person {
  constructor(firstName: string, lastName: string, age: number, skills: string[]) {
    super(firstName, lastName, age)
    this.skills = skills
  }

  skills: string[]

  code = () : void => {
    console.log(`${this.firstName} ${this.lastName} can code using ${this.skills.join(' ')}`)
  }
}

class FrontEndProgrammer extends Programmer implements drawable {
  constructor(firstName: string, lastName: string, age: number, skills: string[]) {
    super(firstName, lastName, age, skills)
  }

  drawStyle: 'flat design'

  draw = () : void => {
    console.log(`Front-end developer ${this.firstName} ${this.lastName} can code using ${this.skills.join(' ')}`)
  }
}

class FullStackProgrammer extends Programmer implements buildPage {
  constructor(firstName: string, lastName: string, age: number, skills: string[]) {
    super(firstName, lastName, age, skills)
  }

  drawStyle: 'material design'

  draw = () : void => {
    console.log(`Full-stack developer ${this.firstName} ${this.lastName} can code using ${this.skills.join(' ')}`)
  }

  designDb = (dbName: string) : void => {
    console.log(`Full-stack developer ${this.firstName} ${this.lastName} designs db ${dbName}`)
  }

  buildPage = () : void => {
    console.log('Build Page')
  }
}

interface drawable {
  drawStyle: string
  draw (page: string) : void
}

interface designDb {
  designDb (db: string) : void
}

interface buildPage extends drawable, designDb {
  buildPage () : void
}

export {
  Person,
  Programmer,
  FrontEndProgrammer,
  FullStackProgrammer,
  drawable,
  designDb,
  buildPage
}
