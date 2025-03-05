import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    topSection: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 15
    },
    icon: {
        width: 23,
        height: 23,
    },
    containerCardElementos:{
        width: "100%",
        maxHeight: "90%"
    },
    containerText: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 80,
    },
    textCentrado: {
        fontSize: 20,
        fontFamily: AppFonts.bold
    },
})
