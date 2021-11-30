/**
 * @format
 */

import {AppRegistry,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

LogBox.ignoreLogs([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
    'Encountered two children with the same key,',
    'componentWillReceiveProps has been renamed,',
    'Sending `onAnimatedValueUpdate` with no listeners registered.',
    'ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.',
    'VirtualizedLists should never be nested',
    'Warning: Can\'t perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.'
]);

AppRegistry.registerComponent(appName, () => App);
