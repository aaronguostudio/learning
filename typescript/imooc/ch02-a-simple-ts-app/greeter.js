"use strict";
// User has the same interface as Person
class User {
    constructor(firstName, lastName) {
        this.fullName = `${firstName} ${lastName}`;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
function greeter(person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: 'Aaron',
    lastName: 'Guo'
};
let user = new User('Grace', 'Guo');
console.log(greeter(user));
