import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Login from "./src/views/Login";
import MainNavigator from "./src/routes";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
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
                        component={MainNavigator}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar
                animated={true}
                backgroundColor={"#ffffff"}
                barStyle={"dark-content"}
                hidden={false}
            />
        </>
    );
}
const styles = StyleSheet.create({});
