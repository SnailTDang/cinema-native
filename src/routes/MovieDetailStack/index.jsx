import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Showtimes from "../../views/Showtimes";
import optionDrawer from "../../components/LabelDrawer";

const Stack = createStackNavigator();

export default function MovieDetailStack() {
    return (
        <Stack.Navigator initialRouteName="Showtimes">
            <Stack.Screen
                name="Showtimes"
                component={Showtimes}
                options={optionDrawer({
                    labelTitle: "Showtimes",
                    titleHeader: "Showtimes",
                    headerBar: true,
                    typeHeader: "showtimes",
                    lockDrawer: true,
                })}
            />
            <Stack.Screen
                name="DetailMovie"
                component={Showtimes}
                options={optionDrawer({
                    labelTitle: "Showtimes",
                    titleHeader: "Showtimes",
                    headerBar: true,
                    typeHeader: "showtimes",
                    lockDrawer: true,
                })}
            />
            <Stack.Screen
                name="ShowtimesMovie"
                component={Showtimes}
                options={optionDrawer({
                    labelTitle: "Showtimes",
                    titleHeader: "Showtimes",
                    headerBar: true,
                    typeHeader: "showtimes",
                    lockDrawer: true,
                })}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
