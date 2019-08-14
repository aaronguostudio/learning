function fib () {
  let x = 0
  let y = 1
  return function () {
    const temp = x
    console.log('temp:', temp)
    x = x + y
    y = temp
    console.log('x:', x)
    console.log('y:', y)
    return y
  }
}

const fibo = fib()
for (let i = 0; i < 5; i++) {
  console.log('----------', i)
  console.log(fibo())
}