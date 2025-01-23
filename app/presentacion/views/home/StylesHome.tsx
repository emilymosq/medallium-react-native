import {StyleSheet} from "react-native";
import {AppColors} from "../../themes/AppTheme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background
    },
    navbar:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    imagen: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        borderRadius: 50
    }
})

export default styles;