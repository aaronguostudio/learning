package main

import "fmt"

// slice 不是值类型，是一个视图类型
func updateSlice (s []int) {
	s[0] = 100
}

func main () {
	arr := [...]int{0,1,2,3,4,5,6,7,8,9}
	fmt.Println("2:6: ", arr[2:6])
	fmt.Println(":6: ", arr[:6])
	fmt.Println("2:: ", arr[2:])
	fmt.Println(":", arr[:])

	// s1 是 arr 的视图，就是引用了和 arr 一个地址
	s1 := arr[:]

	// 所以改变 s1 的时候，也会改变 arr
	updateSlice(s1)
	fmt.Println(s1)
	fmt.Println(arr)

	// 这样传递是传递的 arr 的视图
	// 这样的方法可以避免我们传递指针
	updateSlice(arr[:])
	fmt.Println(arr)

	fmt.Println("Reslice")
	fmt.Println(s1)
	s1 = s1[:3]
	fmt.Println(s1)
	s1 = s1[2:]
	fmt.Println(s1)

	fmt.Println("slice 的扩展")

	arr2 := [...]int{0,1,2,3,4,5,6,7}
	s2 := arr2[2:6]

	// slice 里面保存了 ptr len 和 cap,
	// 如果越界的话，cap 里面保存了超过 len 的
	// 信息，所以能够取出超过 s2 的值
	// slice 可以向后扩展，但是不可用向前
	s3 := s2[3:5]
	fmt.Println(s2, len(s2), cap(s2))
	fmt.Println(s3, len(s3), cap(s3))
}