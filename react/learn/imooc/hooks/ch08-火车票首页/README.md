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
