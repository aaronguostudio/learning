package main

import (
	"context"
	"fmt"
	"os/exec"
	"time"
)

type result struct {
	err error
	output []byte
}

func main() {
	// 执行一个 cmd 让它在携程里面进行

	var (
		ctx context.Context
		cancelFunc context.CancelFunc
		cmd *exec.Cmd
		resultChan chan *result
		res *result
	)

	// 创建结果队列
	resultChan = make(chan *result, 100)

	// 执行环境
	ctx, cancelFunc = context.WithCancel(context.TODO())

	// goroutine
	go func() {
		var (
			output []byte
			err error
		)

		// 通过 goroutine 开启的 CMD 需要使用 CommandContext 对象，第一个参数是 context
		cmd = exec.CommandContext(ctx, "/bin/bash", "-c", "sleep 1; echo hello;")
		output, err = cmd.CombinedOutput()

		resultChan <- &result{
			err: err,
			output: output,
		}

	}()

	time.Sleep(3 * time.Second)

	cancelFunc()

	res = <- resultChan

	fmt.Println(res.err, string(res.output))
}