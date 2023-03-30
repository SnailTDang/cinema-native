import { StyleSheet, Text } from "react-native";
import React from "react";
import colorHex from "../../constants/colorHex";

export function LabelDrawer(props) {
    return <Text style={styles.texLabel}>{props.label.toUpperCase()}</Text>;
}

export default function labelDrawer(label) {
    return {
        drawerLabel: () => <LabelDrawer label={label} />,
        title: null,
        header: ()=> null
    };
}

const styles = StyleSheet.create({
    texLabel: {
        color: colorHex.mainOrange,
        fontSize: 16,
        fontWeight: 600
    }
});
