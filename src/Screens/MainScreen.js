import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, InteractionManager, FlatList } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import MainScreenCss from '../StyleSheet/MainScreenCss'
import Buttons from '../Components/Buttons'
import Colors from '../Assets/Colors'
import { Switch } from 'react-native-switch'

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default function MainScreen({ navigation }) {






    const [themeDark, setThemeDark] = useState(true)
    const [result, setResult] = useState("0")
    const [previousResult, setpreviousResult] = useState("0")



    const Calculation = (val) => {
        if (val === "AC") {
            setpreviousResult("0")
            setResult("0")
        }
        else if (val === "DL") {
            console.log("previousResult", previousResult);

            setpreviousResult((prev) => {
                console.log("previousResult", typeof prev);

                return Number(String(prev)?.slice(0, -1))
            })

        }
        else if (val === "=") {

            try {
                if (previousResult?.slice(-1) == "+" || previousResult?.slice(-1) == "-" || previousResult?.slice(-1) == "*" || previousResult?.slice(-1) == "/" || previousResult?.slice(-1) == "%" || previousResult?.slice(-1) == ".") {
                    setpreviousResult(eval(previousResult).slice(0, -1))
                }
                else {
                    setpreviousResult(eval(previousResult))
                    setResult(previousResult)
                }
            }
            catch (e) {
                setResult("Format Error")
            }

        }
        else {


            if (previousResult === "0") {
                if (isNaN(val)) {
                    setpreviousResult(previousResult + val)
                }
                else {
                    setpreviousResult(val)
                }
            }
            else if (previousResult === isNaN(val)) {


                if (previousResult?.slice(-1) == "+" || previousResult?.slice(-1) == "-" || previousResult?.slice(-1) == "*" || previousResult?.slice(-1) == "/" || previousResult?.slice(-1) == "%" || previousResult?.slice(-1) == ".") {
                    setpreviousResult(previousResult.slice(0, -1) + val)
                }
                else {
                    setpreviousResult(previousResult + val)
                }
            }
            else {
                setpreviousResult(previousResult + val)

            }
        }

    }


    const values = [
        {
            value: "AC",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.primary : Colors.primary
        },
        {
            value: "DL",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "%",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "/",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.primary : Colors.primary
        },

        {
            value: "7",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG

        },
        {
            value: "8",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "9",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "*",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.primary : Colors.primary
        },
        {
            value: "4",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "5",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "6",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "-",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.primary : Colors.primary
        },
        {
            value: "1",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "2",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "3",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "+",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.primary : Colors.primary
        },
        {
            value: "00",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "0",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: ".",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.darkThemeButtonBG : Colors.lightThemeButtonBG
        },
        {
            value: "=",
            color: themeDark ? Colors.darkThemeButtonColor : Colors.lightThemeButtonColor,
            backgroundColor: themeDark ? Colors.primary : Colors.primary
        },


    ]

    return (
        <SafeAreaView style={[MainScreenCss.fullScreen, { backgroundColor: themeDark ? "#575859" : "#DBD9D5" }]}>

            <View
                style={{
                    alignSelf: "flex-end",
                    marginRight: 20,

                }}
            >
                <Switch
                    value={themeDark}
                    onValueChange={() => setThemeDark(!themeDark)}
                    thumbColor={themeDark ? "white" : "black"}
                    trackColor={themeDark ? "yellow" : "red"}
                    circleSize={23}
                    barHeight={20}
                    backgroundActive={'#DBD9D5'}
                    backgroundInactive={'white'}
                    activeText={''}
                    inActiveText={''}
                    circleActiveColor={'white'}
                    circleInActiveColor={'#000000'}
                    switchBorderRadius={10}
                    switchWidthMultiplier={1.5}

                />

            </View>
            <View
                style={{
                    borderColor: themeDark ? "white" : "#6B6F71",
                    width: width / 1.13,
                    // height: width / 1.3,
                    alignSelf: "center",
                    // paddingRight: 10,
                    marginTop: 10,
                    borderWidth: 1,

                }}>

                <View
                    style={{
                        borderColor: themeDark ? "white" : "#6B6F71",
                        width: width / 1.1,
                        alignSelf: "center",
                        paddingRight: 10,
                        marginTop: 10,
                        // borderWidth: 1
                    }}>
                    <Text
                        numberOfLines={2}
                        style={{
                            color: themeDark ? Colors.textColor : Colors.textColor,
                            fontSize: 42,
                            alignSelf: "flex-end",
                            paddingTop: 10,
                        }}
                    >{result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                    <Text
                        numberOfLines={4}
                        style={{
                            color: themeDark ? "#E3B539" : "#E3B539",
                            fontSize: 27,
                            alignSelf: "flex-end",
                            paddingTop: 10,
                        }}
                    >{previousResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                </View>
            </View>

            <View
                style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: 0,
                }}>
                <FlatList
                    scrollEnabled={false}
                    style={{
                        alignSelf: "center",
                        bottom: 10
                    }}
                    data={values}
                    numColumns={"4"}
                    renderItem={({ item, index }) => (
                        <Buttons
                            value={item.value}
                            shadowColor={themeDark ? "white" : "black"}
                            backgroundColor={item.backgroundColor}
                            color={item.color}
                            calculate={(val) => Calculation(val)} />
                    )}
                />
            </View>
        </SafeAreaView >
    )
}