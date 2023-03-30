import React from "react";
import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import colorHex from "../../constants/colorHex";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HeaderApp(props) {
    const {height} = useWindowDimensions()
    return (
        <View style={[styles.headerApp, {height: height/12}]}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.toggleDrawer();
                }}
            >
                <Ionicons name="menu" size={height/20} color={colorHex.mainOrange} />
            </TouchableOpacity>
            <View style={[styles.logoApp, {width: height/12}]}>
                <Image source={require("../../../assets/METIZ_LOGO_WEB.png")} style={styles.logoImg}/>
            </View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('Notifications')
                }}
            >
                <Ionicons
                    name="notifications"
                    size={height/20}
                    color={colorHex.mainOrange}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerApp: {
        flexDirection: "row",
        backgroundColor: colorHex.secondColor,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    logoApp: {
        // width: 70,
    },
    logoImg: {
        width: '100%',
        resizeMode: 'contain'
    }
});
