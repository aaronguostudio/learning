import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CheckBox from 'react-native-check-box'

export default class HomePage extends React.Component {
    //在这里定义每个页面的导航属性
    static navigationOptions = {
        title: 'Home',
        headerBackTitle: '返回哈哈',//设置返回此页面的返回按钮文案，有长度限制
    };

    constructor(props) {
        super(props);
        this.state = {
            pageCheckedArray: [true, true, false],
        };
        console.disableYellowBox = true;
    }

    doCheck(index) {
        this.state.pageCheckedArray[index] = !this.state.pageCheckedArray[index];
        this.setState({
            pageCheckedArray:this.state.pageCheckedArray
        })

    }

    render() {
        const {navigation} = this.props;
        return <View style={{flex: 1, backgroundColor: "orange",}}>
            <Text style={styles.text}>欢迎来到HomePage</Text>
            <Button
                title="Go To Page1"
                onPress={() => {
                    navigation.navigate('Page1', {name: '动态的'});
                }}
            />
            <Button
                title="Go To Page2"
                onPress={() => {
                    navigation.navigate('Page2');
                }}
            />
            <Button
                title="Go To Page3"
                onPress={() => {
                    navigation.navigate('Page3', {name: 'Devio'});
                }}
            />
            <View style={styles.page_container}>
                <CheckBox
                    style={styles.check_btn}
                    checkBoxColor='white'
                    leftTextStyle={styles.page}
                    onClick={() => {
                        this.doCheck(0);
                    }}
                    isChecked={this.state.pageCheckedArray[0]}
                    leftText='Page1'
                />
                <CheckBox
                    style={styles.check_btn}
                    checkBoxColor='white'
                    leftTextStyle={styles.page}
                    onClick={() => {
                        this.doCheck(1);
                    }}
                    isChecked={this.state.pageCheckedArray[1]}
                    leftText='Page2'
                />
                <CheckBox
                    style={styles.check_btn}
                    checkBoxColor='white'
                    leftTextStyle={styles.page}
                    onClick={() => {
                        this.doCheck(2);
                    }}
                    isChecked={this.state.pageCheckedArray[2]}
                    leftText='Page3'
                />
            </View>

            <Button
                title="Go To TabNavigator"
                onPress={() => {
                    let tabs = [];
                    debugger
                    for (let i in this.state.pageCheckedArray) {
                        this.state.pageCheckedArray[i] && tabs.push('Page' + (parseInt(i) + 1));
                    }
                    navigation.navigate('TabNav', {name: 'Devio', tabs: tabs});
                }}
            />
            <Button
                title="Go To DrawerNavigator"
                onPress={() => {
                    navigation.navigate('DrawerNav', {name: 'Devio'});
                }}
            />
        </View>
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white'
    },
    page_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        padding: 10,
        borderColor: 'white'
    },
    check_btn: {
        padding: 10,
        flex: 1,
    },
    page: {
        color: 'white',
        fontSize: 15,
    }
});