import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import ListItem from '../Components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


var List = []
export default function ListData({ navigation }) {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => {
        setVisible(false);
    }

    const showMenu = () => {
        setVisible(true)
    };

    const [data, setData] = useState([])
    // const [caption, setcaption] = useState('')
    // const [result, setResult] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let userData = await AsyncStorage.getItem("userData")
        let ObjData = JSON.parse(userData)
        List = [...ObjData]
        setData(List)
        console.log(List)

    }

    const fireBaseStore = () => {
        navigation.navigate("TestScreen")
        setVisible(false)
    }

    return (
        <SafeAreaView
            style={{
                backgroundColor: "#252929",
                flex: 1
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: "white"
                        }}
                        source={require('../Assets/Images/back.png')}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 25,
                        color: "white"
                    }}>
                    Saved Lists
                </Text>
                <Menu
                    visible={visible}
                    anchor={<TouchableOpacity
                        onPress={showMenu}
                    >
                        <Image
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: "white"
                            }}
                            source={require('../Assets/Images/dots.png')}
                        />
                    </TouchableOpacity>}
                    onRequestClose={hideMenu}
                >
                    <MenuItem onPress={() => AsyncStorage.clear()}>Delete all records</MenuItem>
                    <MenuItem onPress={() => fireBaseStore()}>Save all record on cloud</MenuItem>
                    <MenuItem onPress={() => () => deleteItem()}>delete selected item</MenuItem>
                    <MenuDivider
                        color='black'
                    />
                    <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
                </Menu>
            </View>
            <View
                style={{
                    marginTop: 20
                }}
            >
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <ListItem
                            caption={item.caption}
                            result={item.previousResult}
                        />
                    )}
                />

            </View>
        </SafeAreaView >
    );
}
