import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import FormField from "../../../components/FormField";
import { formData } from "../../../components/FormField/helper/FormData.helper";
import colorHex from "../../../constants/colorHex";
import { userServices } from "../../../services/UserServices";
import ButtonText from "../../../components/ButtonText";

const FormLogin = (props) => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [messLogin, setMessLogin] = useState("");
    const [formValues, handleFormValueChange] = formData({
        taiKhoan: "",
        matKhau: "",
    });

    const fetchUserLogin = useCallback((user) => {
        if (!user.taiKhoan || !user.matKhau) {
            setMessLogin(
                !user.taiKhoan && !user.matKhau
                    ? "Please Enter Your Account And Password!"
                    : !user.taiKhoan
                    ? "Please Enter Your Account!"
                    : "Please Enter Your Password!"
            );
        } else {
            setIsLoading(true);
            userServices
                .postUserLogin(user)
                .then((res) => {
                    if (res.status === 200) {
                        navigation.navigate("mainNavigation");
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [{ name: "mainNavigation" }],
                        // });
                    }
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    console.log(err);
                    setMessLogin("Login Fail! Try enter right your account!");
                });
        }
    });

    const clearMessLogin = () => {
        if (messLogin) {
            setMessLogin("");
        }
    };

    return (
        <View style={styles.container}>
            <FormField
                onPress={() => {
                    clearMessLogin();
                }}
                label="Username"
                formKey="taiKhoan"
                placeholder="Your username"
                handleFormValueChange={handleFormValueChange}
            />
            <FormField
                onPress={() => {
                    clearMessLogin();
                }}
                label="Password"
                formKey="matKhau"
                placeholder="Your password"
                textInputProps={{
                    autoCapitalize: "none",
                }}
                secureTextEntry={true}
                handleFormValueChange={handleFormValueChange}
            />
            <Text style={styles.message}>{messLogin}</Text>
            <ButtonText
                isLoading={isLoading}
                title={"LOGIN"}
                fontSize={20}
                activeOpacity={0.8}
                style={styles.touchLogin}
                onPress={() => {
                    fetchUserLogin(formValues);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    message: {
        color: colorHex.mainOrange,
        fontSize: 16,
        marginTop: 10,
    },
    touchLogin: {
        marginTop: 30,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        width: "50%",
    },
    buttonLogin: {
        textAlign: "center",
        backgroundColor: colorHex.mainOrange,
        color: colorHex.whiteMain,
        fontSize: 25,
        fontWeight: 600,
        paddingVertical: 8,
        borderRadius: 20,
    },
});

export default FormLogin;
