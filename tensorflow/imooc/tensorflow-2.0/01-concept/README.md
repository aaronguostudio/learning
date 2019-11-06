# Tensorflow

## 数据流图

- 节点，处理数据
- 线，节点间的输入输出关系
- 线上运输张量，张量就是 n 维数据

## 特性

- 高度灵活性
- 可移植
- 产品和科研结合
- 自动求微分
- 多语言支持
- 性能最优化

## 开发流程

- tf.data 加载数据
- tf.keras 构建模型
  - premade estimator 来验证模型
  - tensorflow hub 进行迁移学习
- eager mode 运行和调试
- 使用分发策略进行分布式训练
- 导出到 SavedModel
- 使用 Tensorflow Serve, Tensorflow Lite, Tensorflow.js 部署模型

## 跨平台

- HTTP/REST or GRPC
- Tensorflow Lite
- Tensorflow.js
- C, Java, Go, C#, Rust, Julia, R, ...
