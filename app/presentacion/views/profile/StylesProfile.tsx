import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

const styles = StyleSheet.create({
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
        paddingVertical: 25
    },
    list: {
        width: 20,
        height: 20
    },
    userImageContainer: {
        alignItems: "center"
    },
    userImage: {
        marginTop: 15,
        width: 100,
        height: 100,
        resizeMode: "contain",
        borderRadius: 50
    },
    datosPersonales: {
        fontWeight: "condensedBold",
        fontSize: 26,
        textAlign: "center",
        marginVertical:20,
        fontFamily: AppFonts.semiBold
    },
    dataContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        borderWidth: 10,
        borderColor: "#E3E3E3",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "100%",
        height: 100,
        marginVertical: 10
    },
    dataTitle: {
        textDecorationLine: "underline",
        fontFamily: AppFonts.semiBold,
        fontSize: 17
    },
    dataValue: {
        fontSize: 17,
        fontFamily: AppFonts.secondary
    },
    cerrarSesionContainer: {
        alignItems: "flex-end",
        position: "absolute",
        bottom: 30,
        right: 40
    },
    cerrarSesion: {
        fontSize: 20,
        fontFamily: AppFonts.semiBold,
        textDecorationLine: "underline",
    }

})

export default styles;