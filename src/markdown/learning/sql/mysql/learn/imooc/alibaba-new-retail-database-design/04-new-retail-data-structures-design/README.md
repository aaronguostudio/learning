---
path: "/learn/mysql/imooc/alibaba-new-retail-database-design/04-new-retail-data-structures-design/"
---

# 04 - New Retail Data Structures Design

## 01 - 02 - What is SPU and SKU

- Challege
  - e commerce website has products, and each product has many different properties. It's really complex due to the varity.
- SPU (Standard Product Unit) 标准产品单位, describes the features of a product.
- Product vs commodity (产品 vs 商品)
  - product has the common features
  - commodity has the details of a product, e.g. 16GB, 32GB, 64GB
- SKU (Stock Keeping Unit) 库存进出计量的单位，SKU 是物理上不可分割的最小存货单元
- Weighting and SKU
  - 为了避免商家随意修改商品的 SKU 造成对消费者的侵害，套包会对修改的 SKU 做权重下降
  - B2C 的模式中不需要考虑这一点
- SKU and Properties
  - SKU 非常繁多，并且每种产品的属性有很大差别
  - 怎么设计?
    - Category 1 <-> n Properties
      - phone -> CPU, Memory, Size, Battery
    - Product 1 <-> 1 Category
    - Product 1 <-> n Commodities

## 03 - 04 Design tables

- In file: ./new-retail-db.sql

<!-- https://coding.imooc.com/lesson/353.html#mid=26131 -->
