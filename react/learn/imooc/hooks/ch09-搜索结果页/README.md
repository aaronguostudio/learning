# 数据结构

## 配置
- 需要更新 webpack.config.js
  - bundle.js 改为 [name].js

## 重点
- 创建自定义 hook，并且理解使用 hook 带来的优势

## 浮层与缓冲区
- 注意，考虑到重渲染，一般 map 里面都会放置一个独立的组件
  - 这样就可以使用 memo 等手段放置列表的重新渲染
- 本地的缓存区采用 state 设置
- 延迟初始化 state
  - 采用 callback 的方式能够使 state 只在初始化的时候渲染
- {...props} 这个语法相当于返回一个副本
