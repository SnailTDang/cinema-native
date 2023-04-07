import { StyleSheet, Image, View } from "react-native";
import React from "react";

export default function LogoApp(props) {
    return (
        <View style={[styles.logoApp, props.styleView]}>
            <Image
                source={require("../../../../../assets/METIZ_LOGO_WEB.png")}
                style={[props.styleImg]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    logoApp: {},
});
