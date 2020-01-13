-- 首先有一个基本概念。MySQL 的数字检索速度大大快于字符串
-- 如果是字符串检索，在高并发的情况下会存在性能问题

-- sku group table
-- spg_id 品类，可以自定义区间代表不同的商品
-- 唯一性索引本身自带索引功能，一般加了唯一性索引之后不需要再加索引了
-- 这里重复加入索引是因为 MySQL 的索引分为 Hash and BTree,
-- 为以后流出修改索引类型的结构，比如 constrain is BTree and index is Hash
create table t_spec_group(
  id int unsigned primary key auto_increment comment 'PK',
  spg_id int unsigned not null comment '品类编号',
  `name` varchar(200) not null comment '品类名称',
  unique index unq_spg_id(spg_id),
  unique index unq_name(`name`),
  index idx_spg_id(spg_id)
) comment = '品类表';

-- sku table
create table t_spec_param (
  id int unsigned primary key auto_increment comment 'PK',
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
  id int unsigned primary key auto_increment comment 'PK',
  `name` varchar(200) not null comment '名称',
  image varchar(500) comment '图片路径',
  letter char(1) not null comment '品牌首字母',
  unique unq_name(`name`),
  index idx_letter(letter)
) comment = '品牌表';

-- category table
create table t_category (
  id int unsigned primary key auto_increment comment 'PK',
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
  primary key (category_id, brand_id)
) comment = '分类品牌关联表';

-- product table
create table t_spu (
  id int unsigned primary key auto_increment comment 'PK',
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
  id int unsigned primary key auto_increment comment 'PK',
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
  id int unsigned primary key auto_increment comment 'PK',
  province varchar(200) not null comment '省份',
  unique unq_province(province)
) comment = '省会';

create table t_city (
  id int unsigned primary key auto_increment comment 'PK',
  city varchar(200) not null comment '城市',
  province_id int unsigned not null comment '省份 ID',
  index idx_province_id(province_id)
) comment = '城市';

create table t_warehouse (
  id int unsigned primary key auto_increment comment 'PK',
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
  id int unsigned primary key auto_increment comment 'PK',
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
  id int unsigned primary key auto_increment comment 'PK',
  `level` varchar(200) not null comment '等级',
  discount decimal(10,2) unsigned not null comment '折扣'
) comment = '会员登记表';

create table t_customer (
  id int unsigned primary key auto_increment comment 'PK',
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
  id int unsigned primary key auto_increment comment 'PK',
  customer_id int unsigned not null comment '客户 ID',
  `name` varchar(200) not null comment '收货人姓名',
  tel char(11) not null comment '收货人电话',
  `address` varchar(200) not null comment '收获地址',
  prime boolean not null comment '是否是默认收获地址',
  index idx_customer_id(customer_id)
) comment = '收获地址表';

-- mysql encrypt and decrypt function
-- select hex(AES_ENCRYPT('helloworld', 'new retail'));
-- SELECT AES_DECRYPT(unhex('CB3D0E8879D042B35831E83B1F4EB973'), 'new retail');

-- voucher
create table t_voucher(
  id int unsigned primary key auto_increment comment 'PK',
  deno decimal(10, 2) unsigned not null comment 'denomination',
  `condition` decimal(10, 2) unsigned not null comment 'over how much to allow use',
  start_date date comment 'start dtate',
  end_date date comment 'end date',
  max_num int unsigned comment 'max number'
) comment = 'voucher';

-- voucher and customer
-- not use compound key because each customer may have multiple same voucher
create table t_voucher_customer(
  id int unsigned not null primary key auto_increment comment 'PK',
  voucher_id int unsigned not null comment 'voucher ID',
  customer_id int unsigned not null comment 'customer ID'
) comment = 'voucher and customer relationship';

-- about JSON
-- json is good for saving data, but not good for searching
-- e.g. for orders, shouldn't use json because seaching will be slow
create table t_order(
  id int unsigned not null primary key auto_increment comment 'PK',
  `code` varchar(200) not null comment 'order code',
  `type` tinyint unsigned not null comment 'order type: 1. store, 2. web',
  shop_id int unsigned comment 'shop ID',
  customer_id int unsigned comment 'customer ID',
  amount decimal(20, 2) unsigned not null comment 'order amount',
  payment_type tinyint unsigned not null comment 'payment type: 1. debit, 2. credit, 3. wechat, 4. alipay, 5. cash',
  `status` tinyint unsigned not null comment 'status: 1. unpaid, 2. paid, 3. shipped, 4. received',
  postage decimal(10, 2) unsigned comment 'shipping fee',
  `weight` int unsigned comment 'weight (gram)',
  voucher_id int unsigned comment 'voucher ID',
  create_time timestamp not null default now() comment 'create time',
  index idx_code(`code`),
  index idx_customer_id(customer_id),
  index idx_status(`status`),
  index idx_type(`type`),
  index idx_shop_id(`shop_id`),
  index idx_create_time(`create_time`),
  unique unq_code(`code`)
) comment = 'order table';

create table t_order_detail(
  order_id int unsigned not null comment 'orderID',
  sku_id int unsigned not null comment 'commdity ID',
  price decimal(10, 2) unsigned not null comment 'real price',
  actual_price decimal(10, 2) unsigned not null comment 'purchased price',
  num int unsigned not null comment 'number of this commdity in this order',
  primary key (order_id, sku_id)
) comment = 'order details';


-- 新零售系统的进销存属性
-- multiple staff create one ship record
-- staff -> employee, department, job
create table t_dept(
  id int unsigned not null primary key auto_increment comment 'PK',
  dname varchar(200) not null comment 'department name',
  unique unq_dname(dname)
) comment = 'department';

create table t_job(
  id int unsigned not null primary key auto_increment comment 'PK',
  job varchar(200) not null comment 'job name',
  unique unq_job(job)
) comment = 'job';

create table t_emp(
  id int unsigned not null primary key auto_increment comment 'PK',
  wid varchar(20) not null comment 'work ID',
  ename varchar(20) not null comment 'employee name',
  sex char(1) not null comment 'sex',
  married boolean not null comment 'marriage status',
  education tinyint not null comment 'education: 1. undergraduate, 2. graduate, 3. master, 4. doctor, 5. others',
  tel char(11) not null comment 'phone',
  email varchar(200) comment 'email',
  `address` varchar(200) comment 'address',
  job_id int unsigned not null comment 'job ID',
  dept_id int unsigned not null comment 'department ID',
  mgr_id int unsigned comment 'manager ID',
  hiredate date not null comment 'hire date',
  termdate date comment 'terminate date',
  `status` tinyint unsigned not null comment 'status: 1. on duty, 2. off duty, 3. resigned, 4. death',
  index idx_job_id(job_id),
  index idx_dept_id(dept_id),
  index idx_status(`status`),
  index idx_mgr_id(mgr_id),
  index idx_wid(wid),
  unique unq_wid(wid)
) comment = 'employee';

create table t_role(
  id int unsigned not null primary key auto_increment comment 'PK',
  role varchar(20) not null comment 'role',
  unique unq_role(role)
) comment = 'role'

create table t_user(
  id int unsigned not null primary key auto_increment comment 'PK',
  username varchar(200) not null comment 'username',
  `password` varchar(2000) not null comment 'password(AES)',
  emp_id int unsigned not null comment 'employee ID',
  role_id int unsigned not null comment 'role ID',
  `status` int unsigned not null comment 'status: 1. active, 2. inactive',
  create_time timestamp not null default now() comment 'create time',
  last_update_time timestamp not null default now() comment 'last update time',
  unique unq_username(username),
  index idx_username(username),
  index idx_emp_id(emp_id),
  index idx_role_id(role_id),
  index idx_status(`status`)
) comment = 'user';

-- one order may have multiple delivery items
-- sku can be splitted into different delivery items
create table t_delivery(
  id int unsigned not null primary key auto_increment comment 'PK',
  order_id int unsigned not null comment 'order ID',
  sku json not null comment 'commodity details ids',
  qa_id int unsigned not null comment 'QA ID',
  de_id int unsigned not null comment 'delivery employee ID',
  postid varchar(20) unsigned not null comment 'shipping ID (generated by 3rd party)',
  price decimal(10, 2) not null comment 'price',
  ecp tinyint unsigned not null comment 'express company number',
  address_id int unsigned not null comment 'receiver address',
  warehouse_id int unsigned not null comment 'warehouse ID',
  create_time timestamp not null default now() comment 'create time',
  index idx_order_id(order_id),
  index idx_qa_id(qa_id),
  index idx_de_id(de_id),
  index idx_post_id(post_id),
  index idx_warehouse_id(warehouse_id),
  index idx_address_id(address_id),
  index idx_ecp(ecp)
) comment = 'delivery';

create table t_backstock(
  id int unsigned not null primary key auto_increment comment 'PK',
  order_id int unsigned not null comment 'order ID',
  sku json not null comment 'commdity details ids',
  reason varchar(200) not null comment 'reason',
  qa_id int unsigned not null comment 'QA ID',
  payment decimal(10, 2) unsigned not null comment 'return amount',
  payment_type tinyint unsigned not null comment 'return type: 1. debit, 2. credit, 3. wechat, 4. alipay, 5. cash',
  `status` tinyint unsigned not null comment 'status: 1. successed, 2. failed',
  create_time timestamp not null default now() comment 'create time',
  index idx_order_id(order_id),
  index idx_qa_id(qa_id),
  index idx_status(`status`)
) comment = 'backstock';

create table t_rating(
  id int unsigned not null primary key auto_increment comment 'PK',
  order_id int unsigned not null comment 'order ID',
  sku_id int unsigned not null comment 'sku ID',
  img json comment 'commdity images',
  rating tinyint unsigned not null comment 'rating number',
  `comment` varchar(200) comment 'comment',
  create_time timestamp not null default now() comment 'create time',
  index idx_order_id(order_id),
  index idx_sku_id(sku_id),
  index idx_create_time(create_time)
) comment = 'rating';

create table t_supplier(
  id int unsigned not null primary key auto_increment comment 'PK',
  `code` varchar(200) not null comment 'supplier code',
  `name` varchar(200) not null comment 'supplier name',
  `type` tinyint unsigned not null comment 'type: 1. factory, 2. agency, 3. person',
  link_man varchar(20) not null comment 'contact person',
  tel varchar(20) not null comment 'phone/telephone',
  `address` varchar(200) not null comment 'address',
  bank_name varchar(200) comment 'bank name',
  bank_account varchar(200) comment 'bank account',
  `status` tinyint unsigned not null comment 'status: 1. active, 2. inactive',
  index idx_code(`code`),
  index index_type(`type`),
  index index_status(`status`),
  unique unq_code(`code`)
) comment = 'supplier';

create table t_supplier_sku(
  supplier_id int unsigned not null comment 'supplier ID',
  sku_id int unsigned not null comment 'sku ID',
  primary key (supplier_id, sku_id)
) comment = 'supplier and sku relationship';

create table t_purchase(
  id int unsigned not null primary key auto_increment comment 'PK',
  sku_id int unsigned not null comment 'sku ID',
  num int unsigned not null comment 'number',
  warehouse_id int unsigned not null comment 'warehouse ID',
  in_price decimal(10, 2) unsigned not null comment 'purchase price',
  out_price decimal(10, 2) unsigned comment 'recommanded sale price',
  buyer_id int unsigned not null comment 'buery ID',
  `status` tinyint unsigned not null comment 'status: 1. active, 2. completed',
  create_time timestamp not null default now() comment 'create time',
  index idx_sku_id(sku_id),
  index idx_warehouse_id(warehouse_id),
  index idx_buyer_id(buyer_id),
  index idx_status(`status`),
  index idx_create_time(create_time)
) comment = 'purchase';

create table t_productin(
  id int unsigned not null primary key auto_increment comment 'PK',
  storekeeper_id int unsigned not null comment 'store keep ID',
  amount decimal(15, 2) unsigned not null comment 'amount',
  supplier_id int unsigned not null comment 'supplier ID',
  payment decimal(15, 2) unsigned not null comment 'payment amount',
  payment_type tinyint unsigned not null comment 'payment type',
  invoice boolean not null comment 'if invoice',
  remark varchar(200) comment 'notice',
  create_time timestamp not null default now() comment 'create time',
  index idx_storekeeper_id(storekeeper_id),
  index idx_supplier_id(supplier_id),
  index idx_payment_type(payment_type),
  index idx_create_time(create_time)
) comment = ''

create table t_productin_purchase(
  productin_id int unsigned not null comment 'in store ID',
  purchase_id int unsigned not null comment 'purchase ID',
  primary key (productin_id, purchase_id)
) comment = 'productin and purchase relationship';
