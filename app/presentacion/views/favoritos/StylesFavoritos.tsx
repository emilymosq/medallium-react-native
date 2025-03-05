import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: AppColors.background,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 25,
        paddingBottom: 10,
    },
    list: {
        width: 25,
        height: 25
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textCentrado: {
        fontSize: 20,
        fontFamily: AppFonts.bold
    },
})