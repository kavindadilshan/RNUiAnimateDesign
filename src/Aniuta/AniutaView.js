import React, { useState } from 'react';
import { Provider, createStore } from 'aniuta';
import { View, Text, Button } from 'react-native';

//useCounter.js. key must be unique
const useCounter = createStore({
    key: 'CounterStore',
    Store: () => {
        const [count, setCount] = useState(0);

        const increment = () => setCount(count + 1);
        const decrement = () => setCount(count - 1);
        const reset = () => setCount(0);

        return { count, increment, decrement, reset };
    },
});

//counter.js - Counter Component
function Counter() {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <View>
            <Button title='-' onPress={decrement} />
            <Text>{count.toString()}</Text>
            <Button title='+' onPress={increment} />
            <Button title='reset' onPress={reset} />
        </View>
    );
}

//Just wrap App with Provider component and you are good to go
export default function App() {
    return (
        <View>
            <Provider>
                <Counter />
            </Provider>
        </View>
    );
}
