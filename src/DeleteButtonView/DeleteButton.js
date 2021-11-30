import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Button from "./button";

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            icon: require("../../assets/fonts/icomoon.ttf"),
        });
        setFontsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);

    return <View style={styles.container}>
        <View style={styles.subContainer}>
            {fontsLoaded && <Button />}
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});
