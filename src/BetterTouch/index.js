import React from 'react';
import { Text, View } from 'react-native';
import { Touchable, CircularTouchable } from 'react-native-better-touchable';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Touchable
                    onPress={() => alert('Better Touchable Pressed!')}
                    style={{
                        backgroundColor: '#eee',
                        width: '100%',
                        height: 50,
                    }}
                    rippleColor={'red'}>
                    <Text>Press Touchable!</Text>
                </Touchable>


                <CircularTouchable
                    rippleColor={'green'}
                    size={80}
                    onPress={() => alert('Circular Touchable Pressed!')}>
                    <Text>Press Circular Touchable!</Text>
                </CircularTouchable>

            </View>
        );
    }
}
