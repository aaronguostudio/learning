- 使用 transactions 来实现多个数据表的操作
- module-alias
  - 可以使用别名导入模块
- scope 查询 model
  - db.js 定义scope
  - Movie.scope('bh').findOne(finder)
  - 存在一个 updatedAt 的 bug，通过有条件性的添加或删除 scope 可以控制
    - 原因在于排除了 updatedAt 之后 Sequlize 还是会添加 updatedAt
- API 的代码越简单越好，底层的代码可以复杂，包含大量的逻辑和验证
  - 但是调用的时候争取做到足够的简单

<!-- https://coding.imooc.com/lesson/342.html#mid=25567 -->
