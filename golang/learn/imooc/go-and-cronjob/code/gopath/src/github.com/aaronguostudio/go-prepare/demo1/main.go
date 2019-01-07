package main

import (
	"fmt"
	"os/exec"
)

func main() {

	var (
		 cmd *exec.Cmd
		 err error
	)

	// command 在子进程中运行，需要捕获子进程才能看到输出
	cmd = exec.Command("/bin/bash", "-c", "echo 1; echo 2;")

	cmd.Run()

	fmt.Println(err)
}
