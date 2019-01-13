import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class DetailPage extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text>Detail Page</Text>
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