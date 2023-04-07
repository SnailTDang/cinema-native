import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomePage from "../../views/HomePage";
import Showtimes from "../../views/Showtimes";
import optionDrawer from "../../components/LabelDrawer";
import colorHex from "../../constants/colorHex";
import DrawerScreen from "../../components/DrawerScreen";
import Notifications from "../../views/Notifications";
import Profile from "../../views/Profile";
import Promotions from "../../views/Promotions";
import Contact from "../../views/Contact";
import DetailMovie from "../../views/DetailMovie";
import HomeStackNavigator from "../HomeStackNavigator";

const Drawer = createDrawerNavigator();

export default function HomeNavigation(props) {
    return (
        <>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: colorHex.secondColor,
                    },
                }}
            >
                <Drawer.Screen
                    name={"HomeNavigator"}
                    component={HomeStackNavigator}
                    // options={{ headerShown: false }}
                    options={optionDrawer({
                        labelTitle: "Home",
                        titleHeader: null,
                        headerBar: false,
                        typeHeader: "home",
                        hideHeader: true,       
                        lockDrawer: true,
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
                {/* <Drawer.Screen
                    name={"DetailMovie"}
                    initialParams={{ params: props.route.params }}
                    component={DetailMovie}
                    options={optionDrawer({
                        hideLabel: true,
                        headerBar: true,
                        titleHeader: props.route.params || "Detail",
                        typeHeader: "Detail",
                        lockDrawer: true,
                    })}
                /> */}
            </Drawer.Navigator>
        </>
    );
}
