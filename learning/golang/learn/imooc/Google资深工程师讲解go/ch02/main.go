package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func convertToBin (n int) string {
	if n == 0 {
		return "0"
	}
	result := ""
	for ; n > 0; n /= 2 {
		lsb := n % 2
		result = strconv.Itoa(lsb) + result
	}
	return result
}

func printFile (filename string) {
	fmt.Println(filename)
	file, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
}

func forever () {
	for {
		fmt.Println("ANC")
	}
}

func main() {
	fmt.Println(convertToBin(5))
	fmt.Println(convertToBin(17))
	fmt.Println(convertToBin(7234323345))
	fmt.Println(convertToBin(0))

	printFile("/Users/arronstudio/Workflow/tools/a-lib/golang/learn/imooc/Google资深工程师讲解go/ch02/demo.txt")
	forever()
}