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

  draw = () : void => {
    console.log(`Front-end developer ${this.firstName} ${this.lastName} can code using ${this.skills.join(' ')}`)
  }
}

class FullStackProgrammer extends Programmer implements drawable, designDb {
  constructor(firstName: string, lastName: string, age: number, skills: string[]) {
    super(firstName, lastName, age, skills)
  }

  draw = () : void => {
    console.log(`Full-stack developer ${this.firstName} ${this.lastName} can code using ${this.skills.join(' ')}`)
  }

  designDb = (dbName: string) : void => {
    console.log(`Full-stack developer ${this.firstName} ${this.lastName} designs db ${dbName}`)
  }
}

interface drawable {
  draw (page: string) : void
}

interface designDb {
  designDb (db: string) : void
}

export {
  Person,
  Programmer,
  FrontEndProgrammer,
  FullStackProgrammer
}
