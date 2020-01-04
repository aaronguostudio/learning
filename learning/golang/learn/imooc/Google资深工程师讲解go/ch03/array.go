package main

import "fmt"

// 数组是值类型

func max (numbers []int) (int, int) {
	maxi := -1
	maxv := -1
	for i, v := range numbers {
		if v > maxv {
			maxi, maxv = i, v
		}
	}
	return maxi, maxv
}

func passVal (numbers [5]int) {
	for i := 0; i < len(numbers); i++ {
		numbers[i] = 1
	}
}

func passRef (numbers *[5]int) {
	for i := 0; i < len(numbers); i++ {
		numbers[i] = 1
	}
}

func main() {
	var arr1 [5]int
	arr2 := [3]int{1,3,5}
	arr3 := [...]int{2,4,6,8,10}
	arr4 := []int{24,23,2,35,6,223,4,1,25}
	var grid [4][5]int

	fmt.Println(arr1, arr2, grid)

	for i:=0; i < len(arr3); i++ {
		fmt.Println(arr3[i])
	}

	for i, v := range arr3 {
		fmt.Println(i, v)
	}

	// 切片的方式传递，是按照引用传递
	fmt.Println(max(arr4))

	fmt.Println("值传递")
	// passVal 接受的是值传递，所以操作不改变原始值
	passVal(arr1)
	fmt.Println(arr1)


	fmt.Println("引用传递")
	passRef(&arr1)
	fmt.Println(arr1)
}
