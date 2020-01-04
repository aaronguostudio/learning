package main

import (
	"fmt"
	"unicode/utf8"
)

func main () {
	s := "Yes我爱慕课网!"

	// %s print string
	// %X print numbers of chars
	fmt.Printf("%X\n", []byte(s))

	for i, ch := range s {
		fmt.Printf("(%d, %X)", i, ch)
	}

	fmt.Println()

	fmt.Println("Rune count: ", utf8.RuneCountInString(s))
	bytes := []byte(s)

	for len(bytes) > 0 {
		ch, size := utf8.DecodeRune(bytes)
		bytes = bytes[size:]
		fmt.Printf("%c ", ch)
	}
	fmt.Println()

	// 字符转成 rune
	for i, ch := range []rune(s) {
		fmt.Printf("(%d, %c)", i, ch);
	}
}