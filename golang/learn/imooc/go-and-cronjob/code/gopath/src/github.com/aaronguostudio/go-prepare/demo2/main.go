package main

import (
	"fmt"
	"os/exec"
)

func main () {
	var (
		cmd *exec.Cmd
		output []byte
		err error
	)
	cmd = exec.Command("/bin/bash", "-c", "sleep 3;ls -l;")

	// 执行命令并捕获子进程
	if output, err = cmd.CombinedOutput(); err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(string(output))
}