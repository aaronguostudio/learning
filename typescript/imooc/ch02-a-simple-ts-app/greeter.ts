// User has the same interface as Person
class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.fullName = `${firstName} ${lastName}`
    this.firstName = firstName
    this.lastName = lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter (person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

let person: Person = {
  firstName: 'Aaron',
  lastName: 'Guo'
}

let user = new User('Grace', 'Guo');
console.log(greeter(user))