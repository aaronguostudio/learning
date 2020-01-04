import React from 'react';
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import {Platform,} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomTabBar, createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import Page4 from "../pages/Page4";

const TABS = {//在这里配置页面的路由
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'Page10',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-home' : 'ios-basketball'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Page2: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'Page3',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-people' : 'ios-apps'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Page3: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: 'Page4',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={focused ? 'ios-chatboxes' : 'ios-chatbubbles'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
};

export default class DynamicTabNavigator extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    /**
     * 获取动态的Tab
     * @returns {*}
     * @private
     */
    _tabNavigator() {
        let tabs = {};
        if (this.props.navigation.state.params.tabs) {
            /**
             * 取出上一个页面传过来的要显示的tab参数，也可以是从服务端下发的的Tab的配置，
             * 比如显示createBottomTabNavigator中的那些Tab,
             * 这个配置页可以是在其他页面获取之后通过AsyncStorage写入到本地缓存，
             * 然后在这里读取缓存，也可以通过其他方式如props、global config等获取
             ***/
            this.props.navigation.state.params.tabs.forEach(e => {//根据需要定制要显示的tab
                tabs[e] = TABS[e];
            })

        } else {
            const {Page1, Page2} = TABS;//根据需要定制要显示的tab
            tabs = {Page1, Page2};
            Page1.navigationOptions.tabBarLabel = 'P1';//动态修改Tab的属性
        }
        return createAppContainer(createBottomTabNavigator(tabs, {//应用修改后的tab
            tabBarComponent: TabBarComponent,
            tabBarOptions: {
                activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
            }
        }));
    }

    render() {
        const Tabs = this._tabNavigator();
        return (
            <Tabs/>
        );
    }
}

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }

    render() {
        const {routes, index} = this.props.navigation.state;
        if (routes[index].params) {
            const {theme} = routes[index].params;
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme;
            }
        }

        /**
         * custom tabBarComponent
         * https://github.com/react-navigation/react-navigation/issues/4297
         */
        return (
            <BottomTabBar
                {...this.props}
                activeTintColor={this.theme.tintColor || this.props.activeTintColor}
            />
        );
    }

}


