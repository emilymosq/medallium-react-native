import { StyleSheet } from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background,
        alignItems: "center",
    },
    bottomSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginVertical: 30,
        gap: 5,
    },
    topSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginTop: 45,
    },
    icon: {
        width: 23,
        height: 23,
    },
    iconAdd: {
        width: 38,
        height: 38,
    },

});
