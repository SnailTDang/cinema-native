import { StyleSheet} from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomePage from "../views/HomePage";
import Showtimes from "../views/Showtimes";
import labelDrawer from "../components/LabelDrawer";
import colorHex from "../constants/colorHex";
import DrawerScreen from "../components/DrawerScreen";
import Notifications from "../views/Notifications";
import Profile from "../views/Profile";
import Promotions from "../views/Promotions";
import Contact from "../views/Contact";

const Drawer = createDrawerNavigator();

const drawerContainer = [
    { name: "Home", component: HomePage },
    { name: "Notifications", component: Notifications },
    { name: "Profile", component: Profile },
    { name: "Showtimes", component: Showtimes },
    { name: "Promotions", component: Promotions },
    { name: "Contact", component: Contact },
];

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
            {drawerContainer.map((route, index) => {
                let Component = route.component;
                const Element = (props) => {
                    return (
                        <DrawerScreen {...props}>
                            <Component />
                        </DrawerScreen>
                    );
                };

                return (
                    <Drawer.Screen
                        name={route.name}
                        component={Element}
                        key={index}
                        options={labelDrawer(route.name)}
                    />
                );
            })}
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({});
