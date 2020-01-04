package main

import (
	"fmt"
	"math"
	"reflect"
	"runtime"
)

func eval (a, b int, op string) (int, error) {
	switch op {
	case "+":
		return a + b, nil
	case "-":
		return a - b, nil
	case "*":
		return a * b, nil
	case "/":
		return a / b, nil
	default:
		return 0, fmt.Errorf("Unsuppored operation: %s", op)
	}
}

func div(a, b int) (q, r int) {
	//q = a / b
	//r = a % b
	//return

	return a / b, a % b
}

// 使用函数式编程的方式
func apply(op func(int, int) (int), a, b int) int {

	// 获取传入的函数的名称
	p := reflect.ValueOf(op).Pointer()
	opName := runtime.FuncForPC(p).Name()

	fmt.Printf("Calling function %s with args %d, %d\n", opName, a, b)
	return op(a, b)
}

func pow(a, b int) int {
	return int(math.Pow(float64(a), float64(b)))
}

// 可变参数列表
func sum(numbers ...int) int {
	s := 0
	for i := range numbers {
		s += numbers[i]
	}
	return s
}

func main () {
	if result, err := eval(8, 4, "/"); err != nil {
		fmt.Println("Error", err)
	} else {
		fmt.Println(result)
	}
	q, r := div(13, 3)
	fmt.Println(q, r)

	fmt.Println("函数式编程")
	fmt.Println(apply(pow, 4, 2))

	fmt.Println("Lambda")
	fmt.Println(apply(func(a, b int) int {
		return int(math.Pow(float64(a), float64(b)))
	},4, 2))

	fmt.Println("可变参数列表")
	fmt.Println(sum(1,2,3,4,5))

}