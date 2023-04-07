import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Login from "./src/views/Login";
import MyStatusBar from "./src/components/MyStatusBar";
import HomeNavigation from "./src/routes/HomeNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <MyStatusBar />
            <NavigationContainer>
                <Stack.Navigator
                    useLegacyImplementation
                    initialRouteName="Login"
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="mainNavigation"
                        component={HomeNavigation}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
const styles = StyleSheet.create({});
