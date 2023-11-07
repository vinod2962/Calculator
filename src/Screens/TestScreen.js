import { View, Text, TouchableOpacity, Image, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


export default function TestScreen({ navigation }) {
    const [visible, setVisible] = useState(true);

    const hideMenu = () => {
        setVisible(false);
    }

    const showMenu = () => {
        setVisible(true)
    };

    return (
        <SafeAreaView>
            <View>
                <Button
                    title='Back menu'
                    onPress={() => navigation.goBack()}
                />


                <Text>TestScreen</Text>


                <Menu
                    visible={visible}
                    anchor={<Text onPress={showMenu}>Show menu</Text>}
                    onRequestClose={hideMenu}
                >
                    <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
                    <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
                    <MenuItem disabled>Disabled item</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
                </Menu>
            </View>
        </SafeAreaView >
    )
}