import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screens/Splash";
import MainScreen from "../Screens/MainScreen";
import ListData from "../Screens/ListData";
import ThemeScreen from "../Screens/ThemeScreen";
import TestScreen from "../Screens/TestScreen";


const stack = createNativeStackNavigator();

export default function Route() {

    return (
        <NavigationContainer>
            <stack.Navigator
                initialRouteName="Splash" screenOptions={{
                    headerShown: false
                }}
            >
                <stack.Screen
                    name="ThemeScreen"
                    component={ThemeScreen}
                />
                <stack.Screen
                    name="Spalsh"
                    component={Splash}
                />
                <stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                />
                <stack.Screen
                    name="ListData"
                    component={ListData}
                />
                <stack.Screen
                    name="TestScreen"
                    component={TestScreen}
                />

            </stack.Navigator>
        </NavigationContainer>
    )
}