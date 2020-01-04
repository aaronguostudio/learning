# 缓存
- Redis 的缓存非常的有效

# 前端缓存
- 解决问题的有效手段
- 前端的缓存有限制，比如不容易实现动态的展现

# url 参数和 body 的 json 参数
- 最大的区别莫过于, body 参数可以保存数据类型

# 方法和对象的一个区别
- 方法无状态，这也导致在使用的时候，没法预先存入状态
- 对象可以有状态，对象上面的一个方法可以使用自己本身存在的另一个属性
- 在使用一些第三方库的时候，有的方法是被第三方调用的，自己无法控制传入的参数，如果使用对象的方式，可以预先存入属性，调取的时候读取属性上面的变量，达到预设参数的目的。

```js
// 参考
class LikeValidator extends PositiveIntegerValidator {
  constructor () {
    super()
    typeChecker.types = ArtTypes
    this.validateType = typeChecker.check.bind(typeChecker)
  }
}

class ClassicValidator extends LikeValidator {
  //
}

let typeChecker = {
  types: null,
  check (vals) {
    let type = vals.body.type || vals.path.type
    if (!this.types) {
      throw new Error('调用前必须设置types')
    }
    if (!type) {
      throw new Error('type是必须参数')
    }
    type = parseInt(type)
    if (!this.types.isThisType(type)) {
      throw new Error('type 参数不合法')
    }
  }
}

```


<!-- https://coding.imooc.com/lesson/342.html#mid=25568 -->
