import { combineReducers } from 'redux'
import theme from './theme'
import { rootCom, RootNavigator } from '../navigator/AppNavigators'

// 1. 指定默认 state
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom))

// 2. 创建自己的 navigation reducer
const navReducer = ( state = navState, action ) => {
  const nextState = RootNavigator.router.getStateForAction(action, state)
  return nextState || null
}

// 3. 合并 reducer
const index = combineReducers({
  nav: navReducer,
  theme
})

export default index