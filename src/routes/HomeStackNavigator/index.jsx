import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../views/HomePage";
import DetailMovie from "../../views/DetailMovie";
import optionDrawer from "../../components/LabelDrawer";

const Stack = createStackNavigator();

export default function HomeStackNavigator(props) {
    console.log(props);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                component={HomePage}
                options={optionDrawer({
                    labelTitle: "Home",
                    titleHeader: null,
                    headerBar: true,
                    typeHeader: "home",
                    lockDrawer: true,
                })}
            />
            <Stack.Screen
                name={"DetailMovie"}
                initialParams={{ params: props.route.params }}
                component={DetailMovie}
                // options={{ headerShown: false }}
                options={optionDrawer({
                    hideLabel: true,
                    headerBar: true,
                    titleHeader: props.route.params || "Detail",
                    typeHeader: "Detail",
                    lockDrawer: true,
                })}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
