import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screens/Splash";
import MainScreen from "../Screens/MainScreen";

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
                    name="Spalsh"
                    component={Splash}
                />
                <stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}