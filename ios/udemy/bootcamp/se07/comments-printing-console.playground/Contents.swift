import UIKit

/*
 This is a practice file for learning swift code
 */

// var
var str = "Hello, playground"

// const
let monsterHealth = 19

// func
func getMilk(howManyMileCartons: Int, howMuchMoneyGiven: Int) -> Int {
    let price = howManyMileCartons * 2
    print("Get \(howManyMileCartons) Mike, the price is \(price)")
    return howMuchMoneyGiven - price
}

var price = getMilk(howManyMileCartons: 10, howMuchMoneyGiven: 100)
print("Final change is \(price)")

// Love Calculator
func loveCalculator (yourName: String, theirName: String) -> (String, Int) {
    let loveScore = Int(arc4random_uniform(101))
    if loveScore > 80 {
        return ("Love, the score is \(loveScore)", loveScore)
    } else if loveScore > 20 && loveScore <= 80 {
        return ("Maybe love, \(loveScore)", loveScore)
    } else {
        return ("No love, \(loveScore)", loveScore)
    }
}

let (result, score) = loveCalculator(yourName: "Aaron", theirName: "Test")
print(result)
print(score)
