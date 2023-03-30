import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useState } from "react";
import colorHex from "../../constants/colorHex";

export default function FormField(props) {
    const {
        handleFormValueChange,
        onPress,
        label,
        placeholder,
        styleProps,
        secureTextEntry,
        textInputProps,
        formKey,
    } = props;
    const [isShowPass, setShowPass] = useState(secureTextEntry);
    return (
        <View
            style={styles.formFieldWrapper}
            onPress={() => {
                onPress();
                console.log(props);
            }}
        >
            <Text style={styles.labelText}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.formFieldText, styleProps]}
                onChange={(event) => {
                    handleFormValueChange(formKey, event.nativeEvent.text);
                    onPress();
                }}
                secureTextEntry={isShowPass}
                {...textInputProps}
            />
            {formKey === "matKhau" ? (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.visibilityBtn}
                    onPress={() => {
                        setShowPass(!isShowPass);
                    }}
                >
                    <Image
                        source={
                            isShowPass
                                ? require("../../../assets/hide.png")
                                : require("../../../assets/show.png")
                        }
                        style={styles.btnImage}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    formFieldWrapper: {},
    formFieldText: {
        fontSize: 20,
        borderRadius: 15,
        borderWidth: 1,
        padding: 12,
        color: colorHex.mainOrange,
        backgroundColor: colorHex.whiteMain,
    },
    labelText: {
        fontSize: 20,
        marginBottom: 12,
        paddingLeft: 10,
        paddingTop: 10,
        color: colorHex.whiteMain,
    },
    visibilityBtn: {
        position: "absolute",
        right: -25,
        bottom: "10%",
        height: "30%",
        width: "30%",
    },
    btnImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});
