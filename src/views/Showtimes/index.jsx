import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContainerView from "../../components/ContainerView";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function Showtimes() {
    return (
        <ContainerView>
            <Text>Showtimes</Text>
        </ContainerView>
    );
}

const styles = StyleSheet.create({});
