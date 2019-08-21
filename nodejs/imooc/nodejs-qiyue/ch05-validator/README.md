# 验证器
- Validate and Rule
- Get params from validator
  - validator 不仅做验证，同时还存储了通过校验的参数，同时在获取的时候胡自动转换
  - validator 可以获取复杂参数，比如：v.get('body.c.d.e'). 而且不会应为中间对象不存在而报错
    - 这里面的参数获取使用了 lodash
    - 了解 lodash cloneDeep
    - LinValidator 使用了 validator.js 校验库
    - 作业，思考 homework.js，怎么获取一个类（包括父类）的所有属性和方法名
      - 通过递归的方式在原型链的方式来查找
      - 复习原型链的知识
- 在 js 中，contructor 必须用 super() 之后才能用 this
- 在开发环境和生产环境下分别处理 error

# 关系和非关系数据库
<!-- https://coding.imooc.com/lesson/342.html#mid=24688 -->
