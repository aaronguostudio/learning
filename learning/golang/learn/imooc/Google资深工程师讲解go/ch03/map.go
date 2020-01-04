package main

import "fmt"

func main () {
	m1 := map[string]string {
		"name": "Aaron",
		"course": "golang",
		"site": "aaornguostudio.com",
		"quality": "good",
	}

	m2 := make(map[string]int)

	var m3 map[string]int

	fmt.Println(m1["name"])
	fmt.Println(m2)
	fmt.Println(m3)

	fmt.Println("Traversing map")

	// 无序，hashmap
	for k, v := range m1 {
		fmt.Println(k, "->", v)
	}

	courseName, ok := m1["course"]
	fmt.Println(courseName, ok)

	// 不存在于 map 的值返回空字符
	courseNameFak, ok := m1["coue"]
	fmt.Println(courseNameFak, ok)

	fmt.Println("Deleting values")
	name, ok := m1["name"]
	fmt.Println(name, ok)

	delete(m1, "name")
	name, ok = m1["name"]
	fmt.Println(name, ok)

	// map 的 key
	// - 除了 slice, map, function 的内建类型都可以作为 key
	// - struct 类型不包含上述字段，也可以作为 key

}
