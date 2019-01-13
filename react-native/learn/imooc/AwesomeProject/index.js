/** @format */

import {AppRegistry} from 'react-native';
import WelcomePage from './js/page/WelcomePage';
import AppNavigators from './js/navigator/AppNavigators';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigators);
