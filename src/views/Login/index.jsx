import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import ContainerView from "../../components/ContainerView";
import { SafeAreaView } from "react-native";
import colorHex from "../../constants/colorHex";
import FormLogin from "./components/FormLogin";

export default function Login() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={loginStyles.safeAreaView}>
            <ScrollView style={{}}>
                <View style={loginStyles.layout}>
                    <Image
                        source={require("../../../assets/METIZ_LOGO_WEB.png")}
                    />
                    <Text style={[loginStyles.title, loginStyles.mainTitle]}>
                        LOGIN
                    </Text>
                    <Text style={[loginStyles.title, loginStyles.titleSecond]}>
                        Please login before Start!
                    </Text>
                </View>
                <ContainerView styleProps={[loginStyles.mainView]}>
                    <FormLogin />
                </ContainerView>
            </ScrollView>
        </SafeAreaView>
    );
}

export const loginStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colorHex.mainColor,
    },
    layout: {
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: "center",
        // textAlign: "center",
    },
    mainView: {
        flex: 1,
        width: "70%",
        alignSelf: "center",
    },
    title: {
        color: colorHex.mainOrange,
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: 600,
    },
    titleSecond: {
        fontSize: 20,
    },
});

const styles = StyleSheet.create({
    container: {
        display: "flex",
        margin: 20,
    },
    header: {
        fontSize: 20,
        paddingTop: 30,
    },
    formText: {
        fontSize: 20,
        padding: 10,
        paddingLeft: 0,
    },
});