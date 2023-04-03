import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ButtonIcon(props) {
    const { sizeButton, onPress, nameIcon, colorButton } = props;
    return (
        <TouchableOpacity
            onPress={() => {
                onPress();
            }}
        >
            <Ionicons name={nameIcon} size={sizeButton} color={colorButton} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({});
