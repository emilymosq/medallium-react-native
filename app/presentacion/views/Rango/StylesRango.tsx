import {StyleSheet} from "react-native";
import {AppColors} from "../../themes/AppTheme";

const stylesRango = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    topSection: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",

    },
    imagen: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50
    },
    icon: {
        width: 23,
        height: 23,
    },
    containerCardYoKai:{
        width: "100%",
        maxHeight: 400
    },
})

export default stylesRango;