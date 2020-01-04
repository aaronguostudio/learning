package main

import "fmt"

/*
向 slice 添加元素
- 如果元素超过 cap，系统会重新分配更大的底层数组
- append 是值传递，需要获取返回值
- s = append(s, val)
*/



func main () {
	var s []int // zero value for slice is nil
	for i := 0; i < 100; i++ {
		s = append(s, i)
	}
	fmt.Println(s)

	s1 := []int{1,2,3,4}

	// 创建一个长度为 16 的 slice
	s2 := make([]int, 16)
	fmt.Println(s2, len(s2), cap(s2))
	s2 = append(s2, 1)
	fmt.Println("s2 is - ", s2, len(s2), cap(s2))

	// 创建一个 len is 16, cap is 32 的 slice
	s3 := make([]int, 16, 32)
	fmt.Println("s3 is - ", s3, len(s3), cap(s3))

	fmt.Println("copy slice")
	copy(s2, s1)
	fmt.Println(s2)

	fmt.Println("Deleteing elements form slice")
	s2 = append(s2[:3], s2[4:]...) // 展开传入
	fmt.Println(s2)

	fmt.Println("Popping from front")
	front := s2[0]
	s2 = s2[1:]
	fmt.Println("Popping from Back")
	tail := s2[len(s2) - 1]
	s2 = s2[:len(s2) - 1]
	fmt.Println(front, tail, s2)
}