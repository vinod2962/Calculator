import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height
export default function Buttons(props) {

    const { calculate } = props;
    return (
        <TouchableOpacity


            onPress={() => calculate(props.value)}
            style={{
                height: width / 5.3,
                width: width / 5.3,
                borderWidth: 0.4,
                margin: 8,
                borderRadius: 0,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: props.shadowColor,
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                elevation: 2,
                backgroundColor: props.backgroundColor,
                borderRadius: 23
            }}>
            <Text
                style={{
                    fontSize: 25,
                    justifyContent: "center",
                    alignItems: "center",
                    color: props.color,
                    fontWeight: "500"
                }}>
                {props.value}
            </Text>
        </TouchableOpacity>
    )
}