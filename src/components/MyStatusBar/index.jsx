import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import colorHex from "../../constants/colorHex";

export default function MyStatusBar() {
    return (
        <SafeAreaView style={styles.heightBar}>
            <StatusBar
                animated={true}
                backgroundColor={colorHex.secondColor}
                barStyle={"light"}
                hidden={false}
                networkActivityIndicatorVisible={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    heightBar: {
        backgroundColor: colorHex.secondColor
    },
});
