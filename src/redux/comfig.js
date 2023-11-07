import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const comfig = () => {
    const THEME = useSelector(state => state.theme)
    let light = {
        ThemeSelectionScreenBG: "#D6D5D4",
        ThemeSelectionButtonText: "black",
        ThemeButtonOperatorsBG: "#F7B93D",
        ThemeButtonColor: "black",
        TextColorResult: "#F4A810",
        ThemeButtonBG: "white",
        mainSafeAreaBG: 'white',
        saveDataListImageIcon: "black",
        switchViewCostomBG: "black",
        buttonContainerBG: "#D6D5D4",
        buttonShadowColor: 'black',
        resultContainerBorderColor: "#6B6F71",
        resultContainerBG: "white"

    }

    let dark = {
        ThemeSelectionScreenBG: "#575859",
        ThemeSelectionButtonText: "white",
        ThemeButtonOperatorsBG: "#F4A810",
        ThemeButtonColor: "white",
        TextColorResult: "#F4A810",
        ThemeButtonBG: "#575859",
        mainSafeAreaBG: '#252929',
        saveDataListImageIcon: "white",
        switchViewCostomBG: "white",
        buttonContainerBG: "#575859",
        buttonShadowColor: 'white',
        resultContainerBorderColor: "white",
        resultContainerBG: "#252929"

    }


    return THEME.data == "DARK" ? dark : THEME.data == "LIGHT" ? light : THEME.data == "PINK" ? pink : null

}

export default comfig