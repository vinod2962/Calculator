import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    switchView: {
        alignSelf: "flex-end",
        marginRight: 20,
    },

    switchViewCostom: {
        height: 30,
        width: 70,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",

    },
    resultContainer: {
        width: "100%",
        alignSelf: "center",
        marginTop: 7,
        flex: 1,
        paddingEnd: 25

    },
    resultText: {

        fontSize: width * 0.07,
        alignSelf: "flex-end",
        paddingTop: 5,
    },

    previousResultText: {
        fontSize: width * 0.11,
        alignSelf: "flex-end",
        paddingTop: 4,

    },
    buttonContainer: {
        alignSelf: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#575859",
        width: "100%",
        paddingTop: 15
    }

})