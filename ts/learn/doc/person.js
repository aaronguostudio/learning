function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 'Aaron',
    lastName: 'Guo'
};
console.log(greeter(user));
