# 如何进一步提升 JavaScript 的运行效率

```javascript
// js 是一门什么样的语言，解释性的，还是编译性的？这一段代码，代码在执行前，会把 function sum 进行提升，从这一点来看，js 是一门编译性的语言
sum(1, 2);
function sum(a, b) { return a + b; }

// V8 引擎在处理变量和方法的时候，会把他们转换成底层汇编语言。但是有一个问题，js 是动态语言。再次调用的时候 V8 需要删去原来的汇编再去添加新的类型。这个过程叫做 re-optimize 重优化
sum(1, 2);
sum('1', '2');
function sum(a, b) { return a + b; }

// 还有在玩 H5 游戏的时候有时候会遇到突然的短时间卡顿，是因为内存回收机制触发了自动回收的机制。
```

根据以上的思考，未来的 js 可以这样设计
- 面向机器，而非开发者
- 强类型
- 使用更可控的垃圾回收机制

# 关于 WebAssembly 的建议
- 把密集型大量计算工作交由 WebAssembly 解决