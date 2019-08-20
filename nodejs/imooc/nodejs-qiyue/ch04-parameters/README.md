# 异常处理
- 在 JavaScript 里面 1/0 等于 Infinity，不会报错
- 0 / 0 等于 NaN
- JavaScript 语法搞笑图：http://blog.kaaass.net/archives/929

## 全局异常处理
- 异步错误的拦截

## Koa 错误拦截
- 中间件中监听异常, 运用了 AOP 的思维
- error 信息不应该全部返回客户端，仅仅返回一些有用的信息
- error 中携带的信息
  - error_code 自定义的错误
  - message
  - request_url
- 错误的分类
  - 已知错误
  - 未知错误

## 使用面向对象的方式包装 error
- 类与继承的方式大大简化了对异常的处理
