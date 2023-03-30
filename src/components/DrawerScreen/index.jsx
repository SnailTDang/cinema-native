import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import HeaderApp from "../HeaderApp";

export default function DrawerScreen(props) {
    return (
        <View style={{ flex: 1 }}>
            <HeaderApp {...props} />
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({});
