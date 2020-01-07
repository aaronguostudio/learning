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

-- 首先有一个基本概念。MySQL 的数字检索速度大大快于字符串
-- 如果是字符串检索，在高并发的情况下会存在性能问题

-- sku group table
-- spg_id 品类，可以自定义区间代表不同的商品
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
) comment = '品牌表';

-- category table
create table t_category (
  id int unsigned primary key auto_increment comment '主键',
  `name` varchar(200) not null comment '分类名称',
  parent_id int unsigned comment '上级分类 ID',
  if_parent boolean not null comment '是否含有下级分类',
  sort int unsigned not null comment '排名指数',
  index idx_parent_id(parent_id),
  index idx_sort(sort)
) comment = '商品分类表';

-- category and brand assocation table
create table t_category_brand (
  category_id int unsigned comment '分类 ID',
  brand_id int unsigned comment '品牌 ID',
  primary key(category_id, brand_id)
) comment = '分类品牌关联表';

-- product table
create table t_spu (
  id int unsigned primary key auto_increment comment '主键',
  title varchar(200) not null comment '标题', -- 关于字符串的检索，一般不做 inde 因为比较忙，常用的是分词，MySQL 的内置分词对中文的支持不好
  sub_title varchar(200) comment '副标题',
  category_id int unsigned not null comment '分类 ID',
  brand_id int unsigned comment '品牌 ID',
  spg_id int unsigned not null comment '品类 ID',
  saleable boolean not null comment '是否上架',
  valid boolean not null comment '是否有效',
  create_time timestamp not null default now() comment '添加时间',
  last_update_time timestamp not null default now() comment '最后修改时间',
  index idx_brand_id(brand_id),
  index idx_category_id(category_id),
  index idx_spg_id(spg_id),
  index idx_saleable(saleable),
  index idx_valid(valid)
) comment = '产品表';

-- commodity table
create table t_sku (
  id int unsigned primary key auto_increment comment '主键',
  spu_id int unsigned not null comment '产品 ID',
  title varchar(200) not null comment '商品标题',
  images json comment '商品图片',
  price decimal(10, 2) unsigned not null comment '商品价格', -- float and double 精度都不够高
  param json not null comment '参数', -- 字段来自于参数表
  saleable boolean not null comment '是否上架',
  valid boolean not null comment '是否有效',
  create_time timestamp not null default now() comment '添加时间',
  last_update_time timestamp not null default now() comment '最后修改时间',
  index idx_spu_id(spu_id),
  index idx_saleable(saleable),
  index idx_valid(valid)
) comment = '商品表';

-- 商品库存的设计
-- 因为新零售大都需要分店，多仓库的设计
-- 零售店和仓库是多对多的关系
-- 这里还涉及到关联表，如果设置了关联表，意味着一个门店只能去存储了的仓库去进货
-- 但是如果该仓库没有货了，就没有办法从其他仓库拿货，所以不能用多对多的关系
-- 而且，有的零售店也会存有一部分货物，零售店与商品也是多对多的关系，商品和库存也是多对多的关系
create table t_province (
  id int unsigned primary key auto_increment comment '主键',
  province varchar(200) not null comment '省份',
  unique unq_province(province)
) comment = '省会';

create table t_city (
  id int unsigned primary key auto_increment comment '主键',
  city varchar(200) not null comment '城市',
  province_id int unsigned not null comment '省份 ID',
  index idx_province_id(province_id)
) comment = '城市';

create table t_warehouse (
  id int unsigned primary key auto_increment comment '主键',
  city_id int unsigned not null comment '城市 ID',
  address varchar(200) not null comment '地址',
  tel varchar(20) not null comment '电话',
  index idx_city_id(city_id)
) comment = '仓库表';

create table t_warehouse_sku (
  warehouse_id int unsigned not null comment '仓库 ID',
  sku_id int unsigned not null comment '商品 ID',
  num int unsigned not null comment '库存数量',
  unit varchar(20) not null comment '库存单位',
  primary key (warehouse_id, sku_id)
) comment = '仓库商品库存表';

create table t_shop (
  id int unsigned primary key auto_increment comment '主键',
  city_id int unsigned not null comment '城市 ID',
  address varchar(200) not null comment '地址',
  tel varchar(20) not null comment '电话',
  index idx_city_id(city_id)
) comment = '零售店表';

create table t_shop_sku (
  shop_id int unsigned not null comment '零售店 ID',
  sku_id int unsigned not null comment '商品 ID',
  num int unsigned not null comment '库存数量',
  unit varchar(20) not null comment '库存单位',
  primary key (shop_id, sku_id)
) comment = '零售店商品库存表';

create table t_level (
  id int unsigned primary key auto_increment comment '主键',
  `level` varchar(200) not null comment '等级',
  discount decimal(10,2) unsigned not null comment '折扣'
) comment = '会员登记表';

create table t_customer (
  id int unsigned primary key auto_increment comment '主键',
  username varchar(200) not null comment '用户名',
  `password` varchar(2000) not null comment '密码（AES加密）',
  wechat varchar(200) comment '微信号',
  tel char(11) comment '手机号',
  level_id int unsigned comment '会员等级',
  create_time timestamp not null default now() comment '添加时间',
  last_update_time timestamp not null default now() comment '最后修改时间',
  index idx_username(username),
  unique unq_username(username)
) comment = '客户表';

create table t_customer_address (
  id int unsigned primary key auto_increment comment '主键',
  customer_id int unsigned not null comment '客户 ID',
  `name` varchar(200) not null comment '收货人姓名',
  tel char(11) not null comment '收货人电话',
  `address` varchar(200) not null comment '收获地址',
  prime boolean not null comment '是否是默认收获地址',
  index idx_customer_id(customer_id)
) comment '收获地址表';

-- mysql encrypt and decrypt function
select hex(AES_ENCRYPT('helloworld', 'new retail'));
SELECT AES_DECRYPT(unhex('CB3D0E8879D042B35831E83B1F4EB973'), 'new retail');


```

<!-- https://coding.imooc.com/lesson/353.html#mid=26120 -->
