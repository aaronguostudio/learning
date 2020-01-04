import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers'

import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'
import { connect } from 'react-redux'
export const rootCom = 'Init' // 指定根路由

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
})

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      // header: null
    }
  }
})

// const AppNavigator = 
export const RootNavigator = createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator
}, {
  navigationOptions: {
    header: null
  }
}))

// export default createAppContainer(AppNavigator)

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = state => ({
  state: state.env
})

export default connect(mapStateToProps)(AppWithNavigationState)