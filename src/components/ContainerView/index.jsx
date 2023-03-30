import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colorHex from "../../constants/colorHex";

export default function ContainerView(props) {
    const { styleProps, children } = props;
    return <View style={styleProps}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
