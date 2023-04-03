import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colorHex from "../../constants/colorHex";

export default function ButtonText(props) {
    const { activeOpacity, style, onPress, title } = props;
    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={[styles.baseButton, style]}
            onPress={() => {
                onPress();
            }}
        >
            <Text style={styles.button}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    baseButton: {
        marginTop: 30,
        alignSelf: "center",
        width: "50%",
    },
    button: {
        textAlign: "center",
        backgroundColor: colorHex.mainOrange,
        color: colorHex.whiteMain,
        fontSize: 25,
        fontWeight: 600,
        paddingVertical: 8,
        borderRadius: 20,
    },
});
