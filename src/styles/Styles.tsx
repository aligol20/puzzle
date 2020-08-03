import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    safe_area: { alignItems: "center", justifyContent: 'space-around', flexDirection: "column", width: width, height: height, backgroundColor: "#CFCFCF" }
    , main_view: {
        width: 360, height: 360,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    tile: { width: 120, height: 120, position: "absolute" },
    image: { width: 120, height: 120 },
    correct_button: { backgroundColor: "#545498", width: 0.4 * width, borderRadius: 13 },
    button_title: { margin: 13, textAlign: "center", color: "white" }
})
