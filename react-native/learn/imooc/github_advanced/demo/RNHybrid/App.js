/**
 * React Native JS Native通信 | 混合开发
 * Author: CrazyCodeBoy
 * 技术博文：http://www.devio.org
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
import React, {Component} from 'react';
import CommonPage from './CommonPage';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return <CommonPage name="App1" {...this.props}/>;
    }
}
