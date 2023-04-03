import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomePage from "../views/HomePage";
import Showtimes from "../views/Showtimes";
import optionDrawer from "../components/LabelDrawer";
import colorHex from "../constants/colorHex";
import DrawerScreen from "../components/DrawerScreen";
import Notifications from "../views/Notifications";
import Profile from "../views/Profile";
import Promotions from "../views/Promotions";
import Contact from "../views/Contact";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: colorHex.secondColor,
                },
            }}
        >
            <Drawer.Screen
                name={"Home"}
                component={HomePage}
                options={optionDrawer({
                    labelTitle: "Home",
                    titleHeader: null,
                    headerBar: true,
                    typeHeader: "home",
                })}
            />
            <Drawer.Screen
                name={"Profile"}
                gestureEnabled={true}
                component={Profile}
                options={optionDrawer({
                    labelTitle: "Profile",
                    titleHeader: "User Profile",
                    headerBar: true,
                    typeHeader: "profile",
                    lockDrawer: true,
                })}
            />
            <Drawer.Screen
                name={"Showtimes"}
                component={Showtimes}
                options={optionDrawer({
                    labelTitle: "Showtimes",
                    titleHeader: "Showtimes",
                    headerBar: true,
                    typeHeader: "showtimes",
                    lockDrawer: true,
                })}
            />
            <Drawer.Screen
                name={"Notifications"}
                component={Notifications}
                options={optionDrawer({
                    labelTitle: "Notifications",
                    titleHeader: "Notifications",
                    headerBar: true,
                    typeHeader: "notifications",
                    lockDrawer: true,
                })}
            />
            <Drawer.Screen
                name={"Promotions"}
                component={Promotions}
                options={optionDrawer({
                    labelTitle: "Promotions",
                    titleHeader: "Promotions",
                    headerBar: true,
                    typeHeader: "promotions",
                    lockDrawer: true,
                })}
            />
            <Drawer.Screen
                name={"Contact"}
                component={Contact}
                options={optionDrawer({
                    labelTitle: "Contact",
                    titleHeader: "Contact",
                    headerBar: true,
                    typeHeader: "Contact",
                    lockDrawer: true,
                })}
            />
            <Drawer.Screen
                name={"DetailMovie"}
                component={Showtimes}
                options={optionDrawer({
                    hideLabel: true,
                    labelTitle: "Detail",
                    headerBar: true,
                    typeHeader: "Detail",
                    lockDrawer: true,
                })}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({});
