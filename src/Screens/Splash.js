import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import splashCss from '../StyleSheet/splashCss'
import * as Animatable from 'react-native-animatable';

export default function Splash({ navigation }) {

    useEffect(() => {
        setInterval(() => {
            navigation.navigate("MainScreen")
        }, 2000)
    })
    return (
        <SafeAreaView
            style={splashCss.fullScreen}>
            <View>
                <Animatable.Image
                    animation={"zoomIn"}
                    style={{
                        height: 90,
                        width: 90,
                        alignSelf: "center"

                    }}
                    source={require("../Assets/Images/logo.png")} />
                <Animatable.Text
                    animation={"zoomIn"}
                    style={splashCss.text}
                >Calulator</Animatable.Text>
            </View>
        </SafeAreaView>

    )
}