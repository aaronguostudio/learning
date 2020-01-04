package main

import "fmt"

// Animal is an interface
type Animal interface {
	Speak() string
}

// Dog is a struct
type Dog struct{}

// Speak is a func
func (d Dog) Speak() string {
	return "Woof!"
}

// Cat is a struct
type Cat struct{}

// Speak is a func
func (c Cat) Speak() string {
	return "Meow!"
}

func main() {
	animals := []Animal{Dog{}, Cat{}}
	for _, animal := range animals {
		fmt.Println(animal.Speak())
	}
}

// Continue learning
// http://jordanorelli.com/post/32665860244/how-to-use-interfaces-in-go
// https://gobyexample.com/goroutines
