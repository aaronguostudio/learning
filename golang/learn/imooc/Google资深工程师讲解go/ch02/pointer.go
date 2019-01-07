package main

import "fmt"

func swap (a, b *int) {
	*a, *b = *b, *a
}

func main () {
	//var a int = 2
	//var pa *int = &a
	//a = 10
	//fmt.Println(&a, *pa)

	// 参数传递
	// 值，引用
	/*

	一段 C++ 的示例
	void pass_by_value (int a) { a++; }

	void pass_by_ref (int& a) { a++; }

	*/

	a, b := 3, 4
	swap(&a, &b)

	fmt.Println(a, b)
}