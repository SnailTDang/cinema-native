import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Button, Text } from "react-native";
import FormField from "../../../components/FormField";
import { formData } from "../../../components/FormField/helper/FormData.helper";
import colorHex from "../../../constants/colorHex";
import { userServices } from "../../../services/UserServices";

const FormLogin = (props) => {
    const navigation = useNavigation();
    const [messLogin, setMessLogin] = useState("");
    const [formValues, handleFormValueChange] = formData({
        taiKhoan: "",
        matKhau: "",
    });

    const fetchUserLogin = (user) => {
        if (user.taiKhoan === "" || user.matKhau === "") {
            if (user.taiKhoan === "" && user.matKhau === "") {
                setMessLogin("Please Enter Your Account And Password!");
            } else if (user.taiKhoan === "") {
                setMessLogin("Please Enter Your Account!");
            } else {
                setMessLogin("Please Enter Your Password!");
            }
        } else {
            userServices
                .postUserLogin(user)
                .then((res) => {
                    if (res.status === 200) {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "mainNavigation" }],
                        });
                    }
                })
                .catch(() => {
                    setMessLogin("Login Fail! Please enter your account again");
                });
        }
    };

    const clearMessLogin = () => {
        if (messLogin) {
            setMessLogin("");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{messLogin}</Text>
            <FormField
                onPress={clearMessLogin}
                label="Username"
                formKey="taiKhoan"
                placeholder="Your username"
                handleFormValueChange={handleFormValueChange}
            />
            <FormField
                onPress={clearMessLogin}
                label="Password"
                formKey="matKhau"
                placeholder="Your password"
                textInputProps={{
                    autoCapitalize: "none",
                }}
                secureTextEntry={true}
                handleFormValueChange={handleFormValueChange}
            />
            <TouchableOpacity
                style={styles.touchLogin}
                onPress={() => {
                    if (formValues) {
                        fetchUserLogin(formValues);
                    }
                }}
            >
                <Text style={styles.buttonLogin}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // display: "flex",
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
    message: {
        color: colorHex.mainOrange,
        fontSize: 16,
    },
    touchLogin: {
        marginTop: 30,
        alignItems: "center",
    },
    buttonLogin: {
        width: "50%",
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
