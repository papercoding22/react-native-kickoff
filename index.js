/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/Root';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Root);
