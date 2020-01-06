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

## Design tables

```sql

-- sku group table
-- spg_id 商品编号，可以自定义区间代表不同的商品
-- 唯一性索引本身自带索引功能，一般加了唯一性索引之后不需要再加索引了
-- 这里重复加入索引是因为 MySQL 的索引分为 Hash and BTree,
-- 为以后流出修改索引类型的结构，比如 constrain is BTree and index is Hash
create table t_spec_group(
  id int unsigned primary key auto_increment comment '主键',
  spg_id int unsigned not null comment '品类编号',
  `name` varchar(200) not null comment '品类名称',
  unique index unq_spg_id(spg_id),
  unique index unq_name(`name`),
  index idx_spg_id(spg_id)
) comment = '品类表';

-- sku table
create table t_spec_param (
  id int unsigned primary key auto_increment comment '主键',
  spg_id int unsigned not null comment '品类编号',
  spp_id int unsigned not null comment '参数编号',
  `name` varchar(200) not null comment '参数名称',
  `numeric` boolean not null comment '是否为数字参数',
  unit varchar(200) comment '单位（量词）',
  generic boolean not null comment '是否为通用参数',
  searching boolean not null comment '是否用于通用搜索',
  segements varchar(500) comment '参数值',
  index idx_spg_id(spg_id),
  index idx_spp_id(spp_id)
) comment = '参数表';

-- brand table
create table t_brand (
  id int unsigned primary key auto_increment comment '主键',
  `name` varchar(200) not null comment '名称',
  image varchar(500) comment '图片路径',
  letter char(1) not null comment '品牌首字母',
  unique unq_name(`name`),
  index idx_letter(letter)
) comment = '品牌表'

-- category table
create table t_category(
  id int unsigned primary key auto_increment comment '主键',
  `name` varchar(200) not null comment '分类名称',
  parent_id int unsigned comment '上级分类 ID',
  if_parent boolean not null comment '是否含有下级分类',
  sort int unsigned not null comment '排名指数',
  index idx_parent_id(parent_id),
  index idx_sort(sort)
) comment = '商品分类表'

create table t_category_brand (
  category_id int unsigned comment '分类 ID',
  brand_id int unsigned comment '品牌 ID',
  primary key(category_id, brand_id)
) comment = '分类品牌关联表'
```

<!-- https://coding.imooc.com/lesson/353.html#mid=26113 -->
