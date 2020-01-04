import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {};
export default class FavoritePage extends Component<Props> {
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>Favorite Page</Text>
        <Button
          title="Theme Color"
          onPress = { () => {
            navigation.setParams({
              theme: {
                tintColor: 'blue',
                updateTime: new Date().getTime()
              }
            })
          }}
        >
        </Button>
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
  }
})