import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './src/index';
import Aniuta from './src/Aniuta/AniutaView';
import AppearAnimationView from './src/AppearAnimation /AppearAnimationView';
import DeleteButton from './src/DeleteButtonView/button';
import Login from './src/Login/index';
import SwayingScroll from './src/SwayingScroll/App';
import BetterTouch from './src/BetterTouch/index';
import CurvedTranslate from './src/CurvedTranslate/index';
import FreshRefresh from './src/FreshRefresh/index';

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={'Home'}
                        component={Home}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name={'Aniuta'}
                        component={Aniuta}
                    />
                    <Stack.Screen
                        name={'Appear Animation'}
                        component={AppearAnimationView}
                    />
                    <Stack.Screen
                        name={'Delete Button'}
                        component={DeleteButton}
                    />
                    <Stack.Screen
                        name={'Login'}
                        component={Login}
                    />
                    <Stack.Screen
                        name={'Swaying Scroll'}
                        component={SwayingScroll}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name={'Better Touch'}
                        component={BetterTouch}
                    />
                    <Stack.Screen
                        name={'Curved Translate'}
                        component={CurvedTranslate}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name={'Fresh Refresh'}
                        component={FreshRefresh}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
