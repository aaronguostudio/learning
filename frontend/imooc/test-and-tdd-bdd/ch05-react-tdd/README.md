# react tdd
- create project
- eject config
- enzyme
  - const wrapper= shallow(<App />)
  - wrapper.find('.name')
  - wrapper.debug()
  - 解耦测试
    - <div className="app" title='aaron' data-test='container'>
    - expect(wrapper.find(`[data-test='container']`).length).toBe(1)
  - install jest-enzyme
    - 提供了额一些高效的语法
    - npm i jest-enzyme -D
    - add into jest.config.js
  ```js
  "setupFilesAfterEnv": [
    './node_modules/jest-enzyme/lib/index.js'
  ],
  ```
    - then I can use this syntax
      - expect(wrapper.find(`[data-test='container']`)).toExist()
    - using snapshot to test component

# TDD 方式开发 Header
- refer to code

<!-- starts from https://coding.imooc.com/lesson/372.html#mid=27392 -->

