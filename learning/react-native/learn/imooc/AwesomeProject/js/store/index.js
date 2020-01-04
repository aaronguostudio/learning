import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import { middleware } from '../navigator/AppNavigators'

const middlewares = [
  middleware
]

// 创建 store
export default createStore(reducer, applyMiddleware(...middlewares))