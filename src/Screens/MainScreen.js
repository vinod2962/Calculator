import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    InteractionManager,
    FlatList,
    Image,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import MainScreenCss from '../StyleSheet/MainScreenCss';
import Buttons from '../Components/Buttons';
import Colors from '../Assets/Colors';
import { Switch } from 'react-native-switch';
import * as Animatable from 'react-native-animatable';

export default function MainScreen({ navigation }) {
    const [themeDark, setThemeDark] = useState(false);
    const [result, setResult] = useState('');
    const [previousResult, setpreviousResult] = useState('');

    const Calculation = val => {
        if (val === 'AC') {
            setpreviousResult('');
            setResult('');
        }
        else if (previousResult === "0") {
            if (val === "0" || val === "00") {
                setpreviousResult(previousResult)
            }
            else {
                setpreviousResult(previousResult + val)
            }
        }
        else if (val == '00') {
            if (previousResult.length === 0) {
                setpreviousResult(previousResult + '0');
            }
            else {
                setpreviousResult(previousResult + '00');
            }
        }
        else if (previousResult === 'Error') {
            if (
                val === '/' ||
                val === '*' ||
                val === '%' ||
                val === '-' ||
                val === '+' ||
                val === '='
            ) {
                setpreviousResult('');
            }
            else {
                setpreviousResult('');
            }
        }
        else if (val === 'DL') {
            setpreviousResult(prev => {
                if (prev.length == 1) {
                    setResult('');
                    return result;
                } else {
                    return String(prev)?.slice(0, -1);
                }
            });
        } else if (val === '=') {
            try {
                if (previousResult === "") {
                    setpreviousResult("")
                }
                else if (
                    previousResult.slice(0, 1) === '/' ||
                    previousResult.slice(0, 1) === '*' ||
                    previousResult.slice(0, 1) === '%'
                ) {
                    setpreviousResult('Error');
                }
                else if (previousResult === 'Error') {
                    setpreviousResult('');
                }
                else if (
                    previousResult?.slice(-1) == '+' ||
                    previousResult?.slice(-1) == '-' ||
                    previousResult?.slice(-1) == '*' ||
                    previousResult?.slice(-1) == '/' ||
                    previousResult?.slice(-1) == '%' ||
                    previousResult?.slice(-1) == '.'
                ) {
                    setpreviousResult(eval(previousResult).slice(0, -1));
                } else {
                    setpreviousResult(eval(previousResult));
                    setResult(previousResult);
                }
            } catch (e) {
                setResult(previousResult);
            }
        } else {
            // console.log("previousResult", typeof previousResult)
            if (previousResult === '0') {
                if (isNaN(val)) {
                    setpreviousResult(previousResult + val);
                } else {
                    setpreviousResult(val);
                }
            } else if (isNaN(val)) {
                let data = previousResult.toString();
                if (
                    data?.slice(-1) == '+' ||
                    data?.slice(-1) == '-' ||
                    data?.slice(-1) == '*' ||
                    data?.slice(-1) == '/' ||
                    data?.slice(-1) == '%' ||
                    data?.slice(-1) == '.'
                ) {
                    setpreviousResult(previousResult.slice(0, -1) + val);
                } else {
                    setpreviousResult(data + val);
                }
            } else {
                setpreviousResult(previousResult + val);
            }
        }
    };

    const values = [
        {
            value: 'AC',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonOperatorsBG
                : Colors.lightThemeButtonOperatorsBG,
        },
        {
            value: 'DL',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '%',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '/',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonOperatorsBG
                : Colors.lightThemeButtonOperatorsBG,
        },

        {
            value: '7',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '8',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '9',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '*',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonOperatorsBG
                : Colors.lightThemeButtonOperatorsBG,
        },
        {
            value: '4',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '5',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '6',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '-',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonOperatorsBG
                : Colors.lightThemeButtonOperatorsBG,
        },
        {
            value: '1',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '2',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '3',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '+',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonOperatorsBG
                : Colors.lightThemeButtonOperatorsBG,
        },
        {
            value: '00',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '0',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '.',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonBG
                : Colors.lightThemeButtonBG,
        },
        {
            value: '=',
            color: themeDark
                ? Colors.darkThemeButtonColor
                : Colors.lightThemeButtonColor,
            backgroundColor: themeDark
                ? Colors.darkThemeButtonOperatorsBG
                : Colors.lightThemeButtonOperatorsBG,
        },
    ];
    return (
        <SafeAreaView
            style={[
                MainScreenCss.mainContainer,
                { backgroundColor: themeDark ? '#252929' : 'white' },
            ]}>
            <View style={MainScreenCss.switchView}>
                <View
                    style={[MainScreenCss.switchViewCostom, { backgroundColor: themeDark ? "white" : "black", }]}
                >

                    <TouchableOpacity
                        onPress={() => setThemeDark(false)}
                    >
                        <Image
                            style={{
                                height: 20,
                                width: 20,
                            }}
                            source={require("../Assets/Images/light1.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setThemeDark(true)}
                    >
                        <Image
                            style={{
                                height: 18,
                                width: 18,
                                tintColor: themeDark ? "#156DB0" : "lightblue"
                            }}
                            source={require("../Assets/Images/dark1.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={[
                    MainScreenCss.resultContainer,
                    {
                        borderColor: themeDark ? 'white' : '#6B6F71',
                        backgroundColor: themeDark ? "#252929" : "white"
                    },
                ]}>
                <Text
                    style={[
                        MainScreenCss.resultText,
                        { color: themeDark ? Colors.darkTextColorResult : Colors.lightTextColorResult },
                    ]}>
                    {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>

                <Text
                    numberOfLines={2}
                    style={[
                        MainScreenCss.previousResultText,
                        {
                            color: themeDark
                                ? Colors.darkTextColorResult
                                : Colors.lightTextColorResult,
                        },
                    ]}>
                    {!!previousResult
                        ? previousResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : previousResult}
                </Text>

            </View>


            <View style={[MainScreenCss.buttonContainer, {
                backgroundColor: themeDark ? "#575859" : "#DBD9D5"
            }]}>
                <FlatList
                    scrollEnabled={false}
                    style={{
                        alignSelf: 'center',
                        bottom: 10,
                    }}
                    data={values}
                    numColumns={'4'}
                    renderItem={({ item, index }) => (
                        <Buttons
                            value={item.value}
                            shadowColor={themeDark ? 'white' : 'black'}
                            backgroundColor={item.backgroundColor}
                            color={item.color}
                            calculate={val => Calculation(val)}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
