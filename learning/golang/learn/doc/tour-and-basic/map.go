package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

var m map[string]Vertex

func main () {
	m = make(map[string]Vertex)
	m["Bell Studio"] = Vertex{ 1, 2 }
	fmt.Println(m)
}