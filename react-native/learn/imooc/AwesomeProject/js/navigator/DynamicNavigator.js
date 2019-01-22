import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavigationUtil from './NavigationUtil';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';

type Props = {};

const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name={'whatshot'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name={'whatshot'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name={'whatshot'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name={'whatshot'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  }
}

class DynamicNavigator extends Component<Props> {
  constructor (props) {
    super(props)
  }

  _tabNavigator () {
    // TODO icons are not displayed, fix them later
    // return createAppContainer(createBottomTabNavigator())
    if (this.Tabs) { return this.Tabs; }

    const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS;
    const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage }
    PopularPage.navigationOptions.tabBarLabel = '最新'
    return this.Tabs = createAppContainer(createBottomTabNavigator(tabs, {
      tabBarComponent: props => ( <TabBarComponent theme={props.theme} {...props} /> )
    }))
  }

  render () {
    const Tab = this._tabNavigator();
    // 保存最外层的 navigation
    // NavigationUtil.navigation = this.props.navigation
    // const Tabs = this._tabNavigator()
    // return <Tabs />
    return <Tab
        onNavigationStateChange={(prevState, newState, action) => {
          // EventBus.getInstance().fireEvent(EventTypes.bottom_tab_select, {//发送底部tab切换的事件
          //   from: prevState.index,
          //   to: newState.index
          // })
        }}
    />
  }
}

class TabBarComponent extends React.Component {
  constructor (props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    }
  }
  render () {
    // const { routes, index } = this.props.navigation.state
    // if (routes[index].params) {
    //   const { theme } = routes[index].params;
    //   if (theme && theme.updateTime > this.theme.updateTime) {
    //     this.theme = theme
    //   }
    // }
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.props.theme.themeColor}
    />
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
})

export default connect(mapStateToProps)(DynamicNavigator);