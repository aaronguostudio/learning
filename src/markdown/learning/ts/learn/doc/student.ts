class Student {
  constructor ( public firstName: string, public lastName: string ) {
    this.fullName = `${firstName} ${lastName}`;
  }
  fullName: string;
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter (person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

let test = new Student("A", "G")

console.log(greeter(test))