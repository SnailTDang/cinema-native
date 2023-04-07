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
import LogoApp from "./components/Logo";

export default function HeaderApp(props) {
    const { height } = useWindowDimensions();

    const headerTitle = (title) => {
        if (title === null) {
            return (
                <LogoApp
                    styleView={[styles.logoApp, { width: height / 12 }]}
                    styleImg={[styles.logoImg]}
                />
            );
        } else {
            return (
                <>
                    <Text style={styles.headerTitle}>{title}</Text>
                    <LogoApp
                        style={[styles.logoApp, { width: height / 12 }]}
                        styleImg={[styles.logoImg]}
                    />
                </>
            );
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
                sizeButton={height / 25}
                colorButton={colorHex.mainOrange}
            />
            {headerTitle(props.titleHeader)}

            {props.type === "home" ? (
                <View>
                    <ButtonIcon
                        nameIcon={"notifications"}
                        onPress={() => {
                            props.navigation.navigate("Notifications");
                        }}
                        sizeButton={height / 25}
                        colorButton={colorHex.mainOrange}
                    />
                </View>
            ) : null}
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
