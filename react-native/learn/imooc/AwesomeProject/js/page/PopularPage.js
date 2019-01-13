import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation'
import NavigationUtil from '../navigator/NavigationUtil'

type Props = {};
export default class PopularPage extends Component<Props> {
  _topTabNav () {
    return createAppContainer(createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab1'
        }
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab2'
        }
      },
      PopularTab3: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab3'
        }
      }
    }))
  }
  render () {
    const TopTabs = this._topTabNav()
    return (
      <View style={styles.topTabs}>
        <TopTabs />
      </View>
    )
  }  
}

// inner navigater can not jump to the outer navigator
class PopularTab extends Component<Props> {
  render () {
    const { tabLabel } = this.props
    return (
      <View>
        <Text>{tabLabel}</Text>
        <Text onPress={() => {
          NavigationUtil.goPage({}, 'DetailPage')
        }}>Go To Details Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  topTabs: {
    flex: 1,
    marginTop: 30
  }
})