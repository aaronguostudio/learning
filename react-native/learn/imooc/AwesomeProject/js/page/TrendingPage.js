import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import actions from '../action/index';

type Props = {};
class TrendingPage extends Component<Props> {
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>Trend Page</Text>
        <Button
          title="Theme Color"
          onPress = { () => {
            this.props.onThemeChange('red')
            // navigation.setParams({
            //   theme: {
            //     tintColor: 'red',
            //     updateTime: new Date().getTime()
            //   }
            // })
          } }
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

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);