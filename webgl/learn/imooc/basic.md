# 什么是 WebGL
- OpenGL -> OpenGL ES -> javascript -> WebGL API  // ES 嵌入式, OpenGL ES 做了移动端的优化

## webgl 着色器三中数据类型
- attribute 只能在 vertex shader 中使用的变量，一般用于传递顶点数据
- uniform 常量，不能被 shader 修改。uniform 变量在 vertex 和 fragment 两者之间声明的方式完全一样，则他可以在 vertex 和 fragment 共享使用。相当于一个被 vertex 和 fragment 共享的全局变量
- varing vertex 和 fragment 之间做数据传递用的