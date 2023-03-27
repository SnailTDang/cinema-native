import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function index(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
