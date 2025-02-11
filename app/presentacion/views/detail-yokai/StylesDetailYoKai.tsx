import { StyleSheet } from "react-native";
import { AppColors } from "../../themes/AppTheme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background,
        alignItems: "center",
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
    yoKaiContainer: {
        alignItems: "center",
        width: "100%",
    },
    yoKai: {
        width: 280,
        height: 280,
        backgroundColor: AppColors.tribuGuapo,
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center",
    },
    yoKaiName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    yoKaiImage: {
        width: 160,
        height: 160,
        resizeMode: "contain",
        marginVertical: 5,
    },
    tribu:{
        width: "100%",
        justifyContent:"center",
        alignItems: "center",
        bottom: 5,
        marginBottom: 10
    },
    tribuImagen: {
        width: 55,
        height: 55,
        resizeMode: "contain",
        position: "absolute"
    },
    bottomSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginVertical: 30,
        gap: 5,
    },
    extra: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: "#535353",
        borderWidth: 1,
        borderRadius: 50,
        gap: 8,
    },
});
