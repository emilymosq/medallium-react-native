import {StyleSheet} from "react-native";
import {AppColors} from "../../themes/AppTheme";

export const styles = StyleSheet.create({
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
    icon: {
        width: 23,
        height: 23,
    },
    containerCardElementos:{
        width: "100%",
        maxHeight: "90%"
    },
})
