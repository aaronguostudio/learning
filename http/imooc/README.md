# HTTP

## 报文

- HTTP 报文结构分析 - 请求报文

  ![请求报文](http-request.png)

- 报文头
  - 通用报文头
    - Cache-Control
    - Connection
    - Date
    - Pragma
    - Trailer
    - Transfer-Encoding
    - Upgrade
    - Via
    - Warning
  - 请求专业
    - Accept
    - Accept-Charset
    - Accept-Encoding
    - Accept-Language
    - Authorization
    - Expect
    - From
    - Host
    - If-Match
    - If-Modified-Since
    - If-None-Match
    - If-Range
    - If-Unmodified-Since
    - Max-Forwards
    - Proxy-Authorization
    - Range
    - Referer
    - TE
    - User-Agent
  - 响应报文头
    - Accept-Ranges
    - Age
    - ETag
    - Location
    - Proxy-Authenticate
    - Retry-After
    - Server
    - Vary
    - WWW-Authenticate
  - 实体报文头
    - Allow
    - Content-Encoding
    - Content-Languate
    - Contnet-Length
    - Content-Location
    - Content-MD5
    - Content-Range
    - Content-Type
    - Expires
    - Last-Modified

- 常用报文
  - Accept
    - 客户端可以接受的返回类型，比如 text/html, 如果服务器没法返回，可能会得到 406 Non Acceptable
    - Accept: */* 任何类型
    - 可以设置优先级
  - Accept-Encoding
    - gzip, deflate
  - Accept-Language
    - Accept-Languate: zh-en, zh; q=0.7,en-us,en;q=0.3
  - Connection
    - Connection: keep-alive
    - Connection: close
  - Host
    - 指定被请求资源的 Internet 主机和端口号，通常来自 HTTP URL
    - www.google.com:80
  - Referer
    - 告诉是从哪个页面进来的
  - User-Agent
    - 比如：跟进浏览器类型返回不同的内容做兼容
  - Content-Type

## 请求方法

- 常用方法
  - GET
  - POST 创建资源
  - PUT 幂等性，缺少验证机制，通常被 POST 替代
  - DELETE 也是缺少验证机制
  - HEAD 经常用来判断链接的有效性
  - OPTIONS 返回支持的方法
  - TRACE 回显服务器收到的请求，主要用于测试或诊断
  - CONNECT 开启双向沟通的通道，通常用于 VPN, 客户端和服务器建立 connect 之后进行代理

## 状态管理

- Cookie and Session
  - Cookie and Session 区别
    - 存放位置不同
    - Session 更安全，或者将 Cookie 加密也能保证安全
    - 有效期的不同
    - 对服务器的压力不同，Session 需要更多的资源
  - Session
    - 保存 Session ID 的方式
      - Cookie
      - URL 重写
      - 隐藏表单
    - Session 的有效期
      - 超时
      - 通过程序调用

<!-- https://coding.imooc.com/lesson/395.html#mid=29998 -->
