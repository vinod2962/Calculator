import { View, Text, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/ThemeSlice';
import comfig from '../redux/comfig';

export default function ThemeScreen({ navigation }) {



    const THEME = useSelector(state => state.theme)
    // console.log("gggg=>" + THEME.data)

    const dispatch = useDispatch()
    const lightTheme = () => {
        dispatch(changeTheme('LIGHT'))
        navigation.navigate("MainScreen")
    }
    const darkTheme = () => {
        dispatch(changeTheme('DARK'))
        navigation.navigate("MainScreen")
    }


    return (
        <SafeAreaView
            style={{
                justifyContent: 'center',
                alignItems: "center",
                flex: 1,
                backgroundColor: comfig().ThemeSelectionScreenBG
            }}
        >
            <Text
                style={{
                    color: comfig().ThemeSelectionButtonText,
                    fontSize: 50,
                    position: "relative",
                    bottom: 55
                }}>
                Select Theme
            </Text>

            <View
                style={{
                    justifyContent: 'center',
                    alignItems: "center",
                }}
            >

                <TouchableOpacity
                    onPress={() => lightTheme()}
                >
                    <Text
                        style={{
                            margin: 10,
                            paddingTop: 3,
                            color: "black",
                            borderWidth: 1,
                            height: Dimensions.get("screen").width * 0.12,
                            width: Dimensions.get("screen").width * 0.60,
                            textAlign: "center",
                            alignContent: "center",
                            borderRadius: 20,
                            backgroundColor: "white",
                            overflow: "hidden",
                            fontSize: 30,

                        }}>
                        Light Theme
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => darkTheme()}
                >
                    <Text

                        style={{
                            margin: 10,
                            paddingTop: 3,
                            color: "white",
                            borderWidth: 1,
                            height: Dimensions.get("screen").width * 0.12,
                            width: Dimensions.get("screen").width * 0.60,
                            textAlign: "center",
                            alignContent: "center",
                            borderRadius: 20,
                            backgroundColor: "black",
                            overflow: "hidden",
                            fontSize: 30,
                        }}>
                        Dark Theme
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    );
}

