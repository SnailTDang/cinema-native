import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import colorHex from "../../constants/colorHex";
import HeaderApp from "../HeaderApp";

export function LabelDrawer(props) {
    return <Text style={styles.texLabel}>{props.label.toUpperCase()}</Text>;
}

export default function optionDrawer(params) {
    let baseOption = {
        drawerLabel: () => <LabelDrawer label={params.labelTitle} />,
        title: params.labelTitle,
        swipeEnabled: params.lockDrawer ? false : true,
        header: ({ navigation }) => {
            if (params.headerBar) {
                return (
                    <HeaderApp
                        titleHeader={params.titleHeader}
                        navigation={navigation}
                        type={params.typeHeader}
                    />
                );
            } else {
                return null;
            }
        },
    };

    let hideOption = { ...baseOption, drawerItemStyle: { height: 0 } };

    if (params.hideLabel) {
        return hideOption;
    } else {
        return baseOption;
    }
}

const styles = StyleSheet.create({
    texLabel: {
        color: colorHex.mainOrange,
        fontSize: 16,
        fontWeight: 600,
    },
});
