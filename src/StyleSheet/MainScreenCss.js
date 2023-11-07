import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    switchView: {
        justifyContent: "space-between",
        marginRight: 20,
        marginLeft: 10,
        flexDirection: "row"
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
        marginTop: 15,
        flex: 1,
        paddingEnd: 25,


    },
    resultText: {

        fontSize: width * 0.06,
        alignSelf: "flex-end",
        paddingTop: 3,

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
        paddingTop: 10
    }

})