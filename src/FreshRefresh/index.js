import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions,StatusBar } from 'react-native';
import Animated from 'react-native-reanimated';
import RefreshableWrapper from '../assets/Library/react-native-fresh-refresh';
import LottieView2 from 'lottie-react-native';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
const data = ['1', '2', '3', '4', '5', '6'];
const { width } = Dimensions.get('screen');
const contentOffset = 0;


const EmptyComponent = (props) => {
    return (
        <View>
            <Text>LIST EMPTY COMPONENT</Text>
        </View>
    );
};
const ListItem = (props) => {
    return (
        <View style={{ height: 200 }}>
            <Text>LIST Item COMPONENT</Text>
            <Text> {props.item}</Text>
        </View>
    );
};

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [listData, setListData] = useState([]);

    const refreshSimulationHandler = () => {
        setListData([]);
        setIsLoading(true);
        setTimeout(async () => {
            setListData(data);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <View style={styles.header}></View>
            <RefreshableWrapper
                contentOffset={contentOffset}
                Loader={() => (
                    <LottieView2
                        style={styles.lottie}
                        autoPlay
                        source={require('../assets/refresh.json')}
                    />
                )}
                isLoading={isLoading}
                onRefresh={() => {
                    refreshSimulationHandler();
                }}
                EmptyComponent={EmptyComponent}
            >
                <AnimatedFlatlist
                    data={listData}
                    bounces={false}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => {
                        return <ListItem item={item} />;
                    }}
                    style={styles.scrollList}
                    contentContainerStyle={styles.contenContainer}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    ListEmptyComponent={() => <EmptyComponent />}
                />
            </RefreshableWrapper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: { width, height: 100, backgroundColor: 'grey' },
    contenContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        paddingBottom: 100,
        alignItems: 'center',
    },
    lottie: {
        width: 50,
        height: 50,
    },
    scrollList: { width, paddingTop: 20 },
});
