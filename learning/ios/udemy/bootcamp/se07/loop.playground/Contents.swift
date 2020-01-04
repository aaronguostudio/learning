import UIKit

let nums = [1,2,3,4,5,6]

for num in nums {
    print("=======")
    print(num)
}
print("=======")

for num in 1..<10 where num%2 == 0 {
    print(num)
}
print("=======")

for num in 1...10 where num%2 == 0 {
    print(num)
}
print("=======")

func fibonacci(until n : Int) {
    var num1 = 0
    var num2 = 1
    for _ in 0...n {
        let num = num1 + num2
        print(num)
        num1 = num2
        num2 = num
    }
}

fibonacci(until: 5)
