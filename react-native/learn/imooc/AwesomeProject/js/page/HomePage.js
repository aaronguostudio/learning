import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import NavigationUtil from '../navigator/NavigationUtil'
import PopularPage from './PopularPage'
import TrendingPage from './TrendingPage'
import FavoritePage from './FavoritePage'
import MyPage from './MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type Props = {};

export default class HomePage extends Component<Props> {
  _tabNavigator () {
    // TODO icons are not displayed, fix them later
    return createAppContainer(createBottomTabNavigator({
      PopularPage: {
        screen: PopularPage,
        navigationOptions: {
          tabBarLabel: '最热',
          tabBarIcon: ({tintColor, focused}) => {
            <MaterialIcons
              name={'whatshot'}
              size={26}
              style={{ color: tintColor }}
            />
          }
        }
      },
      TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
          tabBarLabel: '趋势',
          tabBarIcon: ({tintColor, focused}) => {
            <MaterialIcons
              name={'whatshot'}
              size={26}
              style={{ color: tintColor }}
            />
          }
        }
      },
      FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
          tabBarLabel: '收藏',
          tabBarIcon: ({tintColor, focused}) => {
            <MaterialIcons
              name={'whatshot'}
              size={26}
              style={{ color: tintColor }}
            />
          }
        }
      },
      MyPage: {
        screen: MyPage,
        navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: ({tintColor, focused}) => {
            <MaterialIcons
              name={'whatshot'}
              size={26}
              style={{ color: tintColor }}
            />
          }
        }
      }
    }))
  }
  render () {
    // 保存最外层的 navigation
    NavigationUtil.navigation = this.props.navigation
    const Tabs = this._tabNavigator()
    return <Tabs />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})