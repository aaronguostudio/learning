# 数据结构与模块设计
- refer to the code
  - 这里面采用了集中构建数据结构的方式，值得学习。
  - 构建之前，要先把 Mock 和模块都想清楚，大部分的逻辑聊熟于心之后再开始设计

# 顶部导航栏
- npm i prop-types --save
  - 这个模块已经和 react 分开了，所以需要安装
- 使用 useCallback 避免组件的重新渲染

# 始发终到站
- 理解如何传入 state 和 dispatch
- 理解如何使用 useCallback 优化
- 理解如何使用 useMemo 批量 bindActionCreators to dispatch
  - 这样做是因为目前 react 还没有对 hooks 提供非常好的支持，以后可以关注更新

# 城市选择浮层

##顶部搜索栏
- npm i classnames -s
- classnames 工具库的使用
- useState() 的使用
- 使用 useMemo 优化 ‘计算属性(方法)’
- useEffect 并且优化 cityData 的加载
- 使用本地缓存保存 cityData 并增加时间戳
- 创建 cityData 各个子组件
- 使用 position: sticky 实现 sticky header 的效果
- 使用 memo 优化所有无状态组件

## 字母定位
- 增加 alpha 组件，理解操作 DOM
- 使用 callback 优化，注意 callback 和 memo 的区别

## 搜索建议
- 处理多次异步请求
- 不要同时发送多个
- 或者。返回的结果加上 key 防止显示不相关的结果

## 出发日期控件
- date 组件的优化，通过去掉小时分钟秒来减少无意义的加载
- 本组件不适用 memo, 因为依赖获取系统时间
  - 如果想用 memo 优化，可以把时间戳作为属性传递进来，这样变量就仅仅依赖于外部传入的 props 了
