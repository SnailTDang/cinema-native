import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from "react-native";
import colorHex from "../../constants/colorHex";
import ButtonIcon from "../ButtonIcon";

export default function HeaderApp(props) {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const headerTitle = (title) => {
        if (title === null) {
            return (
                <View style={[styles.logoApp, { width: height / 12 }]}>
                    <Image
                        source={require("../../../assets/METIZ_LOGO_WEB.png")}
                        style={styles.logoImg}
                    />
                </View>
            );
        } else {
            return <Text style={styles.headerTitle}>{title}</Text>;
        }
    };

    return (
        <View style={[styles.headerApp, { height: height / 12 }]}>
            <ButtonIcon
                nameIcon={props.type === "home" ? "menu" : "arrow-back"}
                onPress={() => {
                    props.type === "home"
                        ? props.navigation.toggleDrawer()
                        : props.navigation.goBack();
                }}
                sizeButton={height / 20}
                colorButton={colorHex.mainOrange}
            />
            {headerTitle(props.titleHeader)}
            <View>
                {props.type !== "notifications" ? (
                    <ButtonIcon
                        nameIcon={"notifications"}
                        onPress={() => {
                            props.navigation.navigate("Notifications");
                        }}
                        sizeButton={height / 20}
                        colorButton={colorHex.mainOrange}
                    />
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerApp: {
        flexDirection: "row",
        backgroundColor: colorHex.secondColor,
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoImg: {
        width: "100%",
        resizeMode: "contain",
    },
    headerTitle: {
        fontSize: 20,
        color: colorHex.mainOrange,
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 600,
    },
});
