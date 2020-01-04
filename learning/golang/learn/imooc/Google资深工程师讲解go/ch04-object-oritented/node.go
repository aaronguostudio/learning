package main

import "fmt"

type treeNode struct {
	Value int
	Left, Right *treeNode
}

// 括号里面是接收者，就是 treeNode
func (node treeNode) print() {
	fmt.Println(node.Value)
}

// 工厂函数，返回一个 treeNdoe, 这个变量是局部的，但是返回后可以在全局使用
func createTreeNode (value int) *treeNode {
	return &treeNode{Value: value}
}

func main () {
	var root treeNode
	fmt.Println(root)

	root = treeNode{ Value: 3 }
	root.Left = &treeNode{}
	root.Right = &treeNode{4, nil, nil}
	root.Right.Left = new(treeNode)
	fmt.Println(root)

	root.print()
}
