import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { loginStyles } from "../Login";
import { SafeAreaView } from "react-native";
import MoviesSwiper from "../MoviesSwiper";
import HeaderApp from "../../components/HeaderApp";
import { moviesManager } from "../../services/MoviesManager";
import Showtimes from "../Showtimes";
import optionDrawer from "../../components/LabelDrawer";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomePage(props) {
    const [banners, setBanners] = useState([]);
    const fetchBanner = () => {
        moviesManager.getListBanners("GP09").then((res) => {
            console.log(res.data)
            setBanners(res.data);
        });
    };

    useEffect(() => {
        fetchBanner()
    }, []);

    return (
        <SafeAreaView style={loginStyles.safeAreaView}>
            {/* <HeaderApp navigation={props.navigation} /> */}
            <MoviesSwiper banners={banners} />
        </SafeAreaView>
    );
}

// export const HomeNavigator = (props) => {
//     return (
//         <Stack.Navigator initialRouteName="Home">
//             <Stack.Screen
//                 name="Home"
//                 component={HomePage}
//                 // options={{ headerShown: false }}
//                 options={optionDrawer({
//                     labelTitle: "Home",
//                     titleHeader: "Home",
//                     headerBar: true,
//                     typeHeader: "home",
//                     lockDrawer: true,
//                 })}
//             />
//             <Stack.Screen
//                 name="Showtimes"
//                 component={Showtimes}
//                 options={optionDrawer({
//                     labelTitle: "Showtimes",
//                     titleHeader: "Showtimes",
//                     headerBar: true,
//                     typeHeader: "showtimes",
//                     lockDrawer: true,
//                 })}
//             />
//             <Stack.Screen
//                 name="DetailMovie"
//                 component={Showtimes}
//                 // options={optionDrawer({
//                 //     labelTitle: "Showtimes",
//                 //     titleHeader: "Showtimes",
//                 //     headerBar: true,
//                 //     typeHeader: "showtimes",
//                 //     lockDrawer: true,
//                 // })}
//             />
//             <Stack.Screen
//                 name="ShowtimesMovie"
//                 component={Showtimes}
//                 // options={optionDrawer({
//                 //     labelTitle: "Showtimes",
//                 //     titleHeader: "Showtimes",
//                 //     headerBar: true,
//                 //     typeHeader: "showtimes",
//                 //     lockDrawer: true,
//                 // })}
//             />
//         </Stack.Navigator>
//     );
// };

const styles = StyleSheet.create({});
