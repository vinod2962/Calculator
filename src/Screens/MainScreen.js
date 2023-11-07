import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Image,
    Alert,
    alert,
    Button,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import MainScreenCss from '../StyleSheet/MainScreenCss';
import Buttons from '../Components/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/ThemeSlice';
import comfig from '../redux/comfig';

var List = []
export default function MainScreen({ navigation }) {

    const THEME = useSelector(state => state.theme)
    const dispatch = useDispatch()
    // let themeName = JSON.stringify(THEME)
    // console.log("hhhhh =>" + THEME.data)


    useEffect(() => {
        getData()
        getData1()
    }, [])


    // const [themeDark, setThemeDark] = useState(false);
    const [result, setResult] = useState('');
    const [previousResult, setpreviousResult] = useState('');
    const [caption, setcaption] = useState('');
    const [data, setData] = useState([])

    const getData = async () => {
        let userData = await AsyncStorage.getItem("userData")
        let ObjData = JSON.parse(userData)
        List = [...ObjData]
        setData(List)
    }
    const getData1 = async () => {
        let theme = await AsyncStorage.getItem("theme")

    }


    const Calculation = val => {
        if (val === 'AC') {
            setpreviousResult('');
            setResult('');
        } else if (previousResult === '0') {
            if (val === '0' || val === '00') {
                setpreviousResult(previousResult);
            } else {
                setpreviousResult(previousResult + val);
            }
        } else if (val == '00') {
            if (previousResult.length === 0) {
                setpreviousResult(previousResult + '0');
            } else {
                setpreviousResult(previousResult + '00');
            }
        } else if (previousResult === 'Error') {
            if (
                val === '/' ||
                val === '*' ||
                val === '%' ||
                val === '-' ||
                val === '+' ||
                val === '='
            ) {
                setpreviousResult('');
            } else {
                setpreviousResult('');
            }
        } else if (val === 'DL') {
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
                if (previousResult === '') {
                    setpreviousResult('');
                } else if (
                    previousResult.slice(0, 1) === '/' ||
                    previousResult.slice(0, 1) === '*' ||
                    previousResult.slice(0, 1) === '%'
                ) {
                    setpreviousResult('Error');
                } else if (previousResult === 'Error') {
                    setpreviousResult('');
                } else if (
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
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonOperatorsBG
        },
        {
            value: 'DL',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '%',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '/',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonOperatorsBG
        },

        {
            value: '7',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '8',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '9',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '*',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonOperatorsBG
        },
        {
            value: '4',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '5',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '6',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '-',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonOperatorsBG
        },
        {
            value: '1',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '2',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '3',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '+',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonOperatorsBG
        },
        {
            value: '00',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '0',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '.',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonBG
        },
        {
            value: '=',
            color: comfig().ThemeButtonColor,
            backgroundColor: comfig().ThemeButtonOperatorsBG
        },
    ];
    const saveItem = async val => {
        if (
            val === '' ||
            val === null ||
            val === undefined ||
            previousResult === '' ||
            previousResult === null ||
            previousResult === undefined
        ) {
            Alert.alert('Alert', 'Please fill all fields');
        } else {
            setcaption(val);
            const obj = {
                caption: caption,
                previousResult: previousResult,
            };
            List.push(obj)
            const resultData = JSON.stringify(List);
            AsyncStorage.setItem('userData', resultData);
        }
    };

    const save = () => {
        Alert.prompt('Your Result : ' + previousResult, 'Caption', [
            {
                text: 'Save',
                onPress: val => saveItem(val),
            },
            {
                text: 'Cancel',
                onPress: () => null,
            },
        ]);
    };

    return (
        <SafeAreaView
            style={[
                MainScreenCss.mainContainer,
                { backgroundColor: comfig().mainSafeAreaBG },
            ]}>
            {/* <Button
                onPress={() => navigation.goBack()}
                title='backTheme'
            /> */}

            <View style={MainScreenCss.switchView}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity onPress={() => save()}>
                        <Image
                            style={{
                                height: 23,
                                width: 23,
                                tintColor: comfig().saveDataListImageIcon,
                            }}
                            source={require('../Assets/Images/saveImg.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ListData');
                        }}>
                        <Image
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: comfig().saveDataListImageIcon,
                                marginLeft: 7,
                            }}
                            source={require('../Assets/Images/listIcon.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={[
                        MainScreenCss.switchViewCostom,
                        { backgroundColor: comfig().switchViewCostomBG },
                    ]}>
                    <TouchableOpacity onPress={() => dispatch(changeTheme("LIGHT"))}>
                        <Image
                            style={{
                                height: 20,
                                width: 20,
                            }}
                            source={require('../Assets/Images/light1.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(changeTheme("DARK"))}>
                        <Image
                            style={{
                                height: 18,
                                width: 18,
                                tintColor: THEME.data == "LIGHT" ? 'lightblue' : THEME.data == "DARK" ? '#156DB0' : null,
                            }}
                            source={require('../Assets/Images/dark1.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={[
                    MainScreenCss.resultContainer,
                    {
                        borderColor: comfig().resultContainerBorderColor,
                        backgroundColor: comfig().resultContainerBG,
                    },
                ]}>
                <Text
                    style={[
                        MainScreenCss.resultText,
                        {
                            color: comfig().TextColorResult

                        },
                    ]}>
                    {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>

                <Text
                    numberOfLines={2}
                    style={[
                        MainScreenCss.previousResultText,
                        {
                            color: comfig().TextColorResult

                        },
                    ]}>
                    {!!previousResult
                        ? previousResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : previousResult}
                </Text>
            </View>

            <View
                style={[
                    MainScreenCss.buttonContainer,
                    {
                        backgroundColor: comfig().buttonContainerBG,
                    },

                ]}>
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
                            shadowColor={THEME.data == "LIGHT" ? 'black' : THEME.data == "DARK" ? 'white' : null}
                            backgroundColor={item.backgroundColor}
                            color={item.color}
                            onClick={val => Calculation(val)}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
