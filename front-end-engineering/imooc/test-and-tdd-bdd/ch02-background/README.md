# Test and background
- 手动写一个测试例子以及测试的简单封装
- 主流框架
  - jasmine
  - mocha
  - chai
  - jest
- Jest 的优势
  - 速度快，API 简单，容易配置，隔离性好（每个测试很好的隔离）
  - 监控模式，IDE 整合，Snapshot, 多项目并行, 覆盖率, Mock 丰富
- 使用 jest 修改之前手写的测试

# Jest Basic
- 安装之前配置 jest
  - npx jest --init
  - 配置之后会生成 jest.config.js
- coverage
  - npx jest --coverage  // npx 相当于使用当前模块，而不是 global, 如果没有的话会安装（不会保存）
- update commonjs modules to es module
- install
  - "@babel/core": "^7.4.5",
    "@babel/preset-env": "^7.4.5",
  - add .babelrc
  - 内置的 babel-jest 将会处理语法
    - jest(babel-jest) 将会检测是否安装了 babel，如果有的话会提前转化代码之后再去运行测试

# jest matchers
- toBe()            // 引用相等
- toEqual()         // 值相等
- toBeNull()
- toBeUndefined()
- toBeDefined()
- toBeTruthy()
- toBeFalshy()
- toBeGreaterThan()
- toBeLessThan()
- toMatchObject()
- toBeCloseTo()     // 解决浮点运算的不精确问题
- .not.toBe()
- toMatch(str)      // str or regex
- toContain()       // array or set contains ...
- expect(func).toBeCalled()  // 运行 mock 函数
- toThrow()
- expect.assertions(1)   // 运行一个断言
```js
const throwNewErrorFunc = () => {
  throw new Error('this is a new error)
}
test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow()
  expect(throwNewErrorFunc).toThrow('error content')
  expect(throwNewErrorFunc).not.toThrow()
})
```
# async code testing
- refer to the code

# jest hooks
- refer to the code

# jest Mock
- refer to the code
- usages:
  - 捕获调用和返回结果以及顺序 jest.fn()
  - 自由的设置返回结果 jest.fn()
  - 改变函数内部实现 jest.mock('name')

```js
//
export const runCallback = (callback) => {
  callback('abc')
}
//
import { runCallback, createObject, getData } from './demo.js'
import axios from 'axios'
import Axios from 'axios';
jest.mock('axios')

test('test runCallback', () => {
  // 'def' 将会被返回
  const func = jest.fn(() => {
    return 'def'
  })

  // this will affect all func returns
  // func.mockReturnValue('test')

  // 只有第一次会被返回
  func
    .mockReturnValueOnce('Once')
    .mockReturnValueOnce('Twice')
  runCallback(func)
  runCallback(func)
  runCallback(func)
  expect(func).toBeCalled()
  expect(func.mock.calls.length).toBe(3)
  expect(func.mock.calls[0]).toEqual(['abc'])
  expect(func.mock.results[0].value).toEqual('Once')
  expect(func.mock.results[1].value).toEqual('Twice')
  expect(func.mock.results[2].value).toEqual('def')

  console.log(func.mock)
})

test('test createObject', () => {
  const func = jest.fn()

  createObject(func)
  console.log(func.mock)
})

// 改变内部函数的实现
test.only('test getData', async () => {

  Axios.get.mockResolvedValue({data: 'hello'})
  await getData()
          .then(data => {
            expect(data).toBe('hello')
          })
})

```
