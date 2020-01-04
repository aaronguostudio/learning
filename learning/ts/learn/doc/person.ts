interface Person {
  firstName: string;
  lastName: string;
}

function greeter (person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`;
}

let user = {
  firstName: 'Aaron',
  lastName: 'Guo'
}

console.log(greeter(user))