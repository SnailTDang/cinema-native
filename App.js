import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import BaseForm from "./src/components/BaseForm";
import BaseText from "./src/components/BaseText";
import HeaderApp from "./src/components/HeaderApp";
import Task from "./src/components/Task";
import MoviesSwiper from "./src/views";
import HomePage from "./src/views/HomePage";

const Drawer = createDrawerNavigator();

export default function App() {
    const [todos, setTodos] = useState([]);
    const pushTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
    };
    return (
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePage} />
                <Drawer.Screen name="Notifications" component={HomePage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f1d2f",
        marginTop: 25,
    },
    listTodo: {
        flex: 1,
    },
    headerTitle: {
        marginTop: 45,
        paddingHorizontal: 20,
    },
    textHeader: {
        color: "#0548fc",
        fontSize: 36,
        fontWeight: 600,
    },
    taskBox: {
        flex: 1,
        flexDirection: "column",
    },
});
