# Redux and Flux
- 单向数据流，Store 是唯一数据源的思想
- 相当于浏览器中只有一个 store tree 存放所有的 state
- reducers are pure function

# Redux flow
1. view -> dispatch action -> action creators -> store
2. store with oldState, action -> middleware -> reducers
3. reducers with newState -> middleware -> store -> update view