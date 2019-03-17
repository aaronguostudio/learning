# 开发流程
- 基础技术选型
- 数据库设计
- 确定日志框架选择，搭建和策略
- 接口定义
  - 通常是后端定义，因为很多接口返回的字段是和数据库相关的，后端定义会比较合理
  - 后端定义好接口之后，要和前端沟通，修改确定后就可以进入开发的流程
  - 如果是 MVP 项目，每个项目的前期制定好要开发的范围，同时确定好需要的所有接口
  - 接口的定义一定要有明确的文档，比如使用 Swagger 定义并生成文档


```json
// Get buyer products
{
  "code": 0,
  "msg": "Done",
  "data": [
    {
      "name": null,
      "type": null,
      "foods": [
        {
          "id": null,
          "name": null,
          "price": null,
          "description": null,
          "icon": null
        }
      ]
    }
  ]
}



```