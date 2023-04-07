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
        <View style={styles.formFieldWrapper}>
            <Text style={styles.labelText}>{label}</Text>
            <TextInput
                onFocus={onPress}
                placeholder={placeholder}
                style={[styles.formFieldText, styleProps]}
                onChange={(event) => {
                    handleFormValueChange(formKey, event.nativeEvent.text);
                    onPress();
                }}
                secureTextEntry={isShowPass}
                {...textInputProps}
            />
            {formKey === "matKhau" && (
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
                                ? require("../../../assets/show.png")
                                : require("../../../assets/hide.png")
                        }
                        style={styles.btnImage}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    formFieldWrapper: {
        // flex: 1,
    },
    formFieldText: {
        fontSize: 20,
        borderRadius: 15,
        borderWidth: 1,
        padding: 12,
        color: colorHex.mainOrange,
        backgroundColor: colorHex.whiteMain,
    },
    labelText: {
        fontSize: 16,
        marginBottom: 12,
        paddingLeft: 10,
        paddingTop: 10,
        color: colorHex.whiteMain,
    },
    visibilityBtn: {
        position: "absolute",
        right: 0,
        bottom: "10%",
        height: "30%",
        width: "20%",
        // marginRight: 10,
    },
    btnImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});
