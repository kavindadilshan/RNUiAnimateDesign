/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App: () => Node = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header/>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Aniuta')}>
                        <Section title="Aniuta">
                            Style 01
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Appear Animation')}>
                        <Section title="Appear Animation View">
                            Style 02
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Delete Button')}>
                        <Section title="Delete Button">
                            Style 03
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Section title="Login">
                            Style 04
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Swaying Scroll')}>
                        <Section title="Swaying Scroll">
                            Style 05
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Better Touch')}>
                        <Section title="Better Touch">
                            Style 06
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Curved Translate')}>
                        <Section title="Curved Translate">
                            Style 07
                        </Section>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Fresh Refresh')}>
                        <Section title="Fresh Refresh">
                            Style 08
                        </Section>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
