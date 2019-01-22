import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Page4 extends React.Component {
    render() {
        const {navigation} = this.props;
        return <View style={{flex: 1, backgroundColor: "gray",}}>
            <Text style={styles.text}>欢迎来到Page4</Text>
            <Button
                onPress={() => navigation.openDrawer()}
                title="Open drawer"
            />
            <Button
                onPress={() => navigation.toggleDrawer()}
                title="Toggle drawer"
            />
            <Button
                onPress={() => navigation.navigate('Page5')}
                title="Go to Page5"
            />
        </View>
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white'
    },
    showText: {
        marginTop: 30,
        fontSize: 20,
        color: 'blue'
    },
    input: {
        height: 50,
        borderWidth: 1,
        marginTop: 10,
        borderColor: 'black'
    }
});