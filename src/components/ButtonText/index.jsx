import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colorHex from "../../constants/colorHex";
import { ActivityIndicator } from "react-native";

export default function ButtonText(props) {
    const { activeOpacity, style, onPress, title, isLoading, fontSize } = props;
    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={[styles.baseButton, style]}
            onPress={onPress}
        >
            <View style={{ width: 50 }}></View>
            <Text style={[styles.button, {fontSize: fontSize}]}>{title}</Text>
            <View style={{ width: 50, alignSelf: 'center' }}>
                {isLoading && <ActivityIndicator />}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    baseButton: {
        marginTop: 30,
        alignSelf: "center",
        width: "50%",
        backgroundColor: colorHex.mainOrange,
        borderRadius: 20,
    },
    button: {
        textAlign: "center",
        color: colorHex.whiteMain,
        fontSize: 20,
        fontWeight: 600,
        paddingVertical: 8,
    },
});
