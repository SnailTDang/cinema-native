import {
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    Keyboard,
} from "react-native";
import React from "react";

import colorHex from "../../constants/colorHex";
import FormLogin from "./components/FormLogin";
import { TouchableWithoutFeedback } from "react-native";

export default function Login() {
    return (
        <KeyboardAvoidingView
            style={[loginStyles.safeAreaView]}
            behavior={"padding"}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                style={{ flex: 1 }}
            >
                <View style={loginStyles.flex}>
                    <View style={loginStyles.layout}>
                        <Image
                            source={require("../../../assets/METIZ_LOGO_WEB.png")}
                        />
                        <Text
                            style={[loginStyles.title, loginStyles.mainTitle]}
                        >
                            LOGIN
                        </Text>
                        <Text
                            style={[loginStyles.title, loginStyles.titleSecond]}
                        >
                            Please login before Start!
                        </Text>
                    </View>
                    <View style={loginStyles.mainView}>
                        <FormLogin />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export const loginStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colorHex.mainColor,
    },
    layout: {
        alignItems: "center",
        // flex: 2,
        justifyContent: "flex-end",
    },
    mainView: {
        // flex: 1,
        marginBottom: 30,
        width: "80%",
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
    flex: {
        flex: 1,
        justifyContent: "space-around",
    },
});
