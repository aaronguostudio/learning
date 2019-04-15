// Basic types
/* 
Int, Double, Bool, String, Array, Dictionary
 */

struct Person {
  let firstName: String
  let lastName: String

  func sayHello () {
    print("\(firstName) \(lastName)")
  }
}

let p1 = Person(firstName: "Aaron", lastName: "Guo")
let p2 = Person(firstName: "Chris", lastName: "Lambdert")

p1.sayHello()
p2.sayHello()