import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export default function ListItem(props) {

    return (
        <View
            style={{
                width: Dimensions.get("screen").width * 0.98,
                flexDirection: "row",
                marginVertical: 2,
                borderRadius: 5,
                // borderWidth: 1,
                borderColor: "white"
            }}
        >
            <View
                style={{
                    width: Dimensions.get("screen").width * 0.36,
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 5,
                    margin: 0.5
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "500",
                        alignItems: "stretch",
                        alignSelf: "center"


                    }}
                >Caption</Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: "#5E5D5C",
                        alignSelf: "center"
                    }}
                >{props.caption}</Text>
            </View>
            <View
                style={{
                    width: Dimensions.get("screen").width * 0.60,
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 5,
                    margin: 0.5,
                    marginLeft: 2.5
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        alignItems: "stretch",
                        alignSelf: "center",
                        fontWeight: "500",


                    }}
                >Result</Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: "#5E5D5C",
                        alignSelf: "center"
                    }}
                >{props.result}</Text>
            </View>

            <View>

            </View>
        </View>
    )
}