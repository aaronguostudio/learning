import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation'
import NavigationUtil from '../navigator/NavigationUtil'

type Props = {};
export default class PopularPage extends Component<Props> {
  constructor (props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'iOS', 'React', 'Vue', 'Angular', 'NodeJS', 'PHP']
  }
  _genTabs () {
    const tabs = []
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item
        }
      }
    })
    return tabs
  }
  _topTabNav () {
    return createAppContainer(createMaterialTopTabNavigator(
      this._genTabs(),
      {
        tabBarOptions: {
          tabStyle: styles.tabStyle,
          upperCaseLabel: false,
          scrollEnabled: true,
          style: {
            backgroundColor: 'black'
          },
          indicatorStyle: styles.indicatorStyle,
          labelStyle: styles.labelStyle,
        }
      }
    ))
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
  },
  tabStyle: {
    width: 90,
    textAlign: 'center'
  },
  indicatorStyle: {
    height: 1,
    backgroundColor: 'white'
  },
  labelStyle: {
    color: 'white'
  }
})