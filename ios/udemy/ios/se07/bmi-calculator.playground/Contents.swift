import UIKit

func calcBMI (weight: Double, height: Double) -> String {
    let bmi = weight / pow(height, 2)
    return String(format: "%.2f", bmi)
}

var myBMI = calcBMI(weight: 63.4, height: 2.6)
print(myBMI)
