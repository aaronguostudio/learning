# DTO - Data Transit Object
- 对于 Model 之外需要的属性，可以通过 DTO 来实现灵活的定义

# 6-11 内容
- OrderServiceImpl
- BuyerOrderController
- 问题：
  - createdAt and updatedAt will need to be seconds, how to do it in a better way
  - 使用 JsonSerializer 和装饰器模式转换格式
- 去除返回结果中的 null 字段
  - 查看文档使用方案提到 depercated
  - 加入配置到配置文件，避免一个个手动添加
  - 设置字段初始值，如果需要的话
  - 加入验证并把验证逻辑放到另一个 service 里面

<!-- start form ch07-->