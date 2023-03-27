import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function HeaderApp() {
    return (
        <View style={styles.marginTop}>
            <IconButton icon={(props) => <Icon name="menu" {...props} />} color="#ff5400" />
        </View>
    );
}

const styles = StyleSheet.create({
    marginTop: {
    },
});
