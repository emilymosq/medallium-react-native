import {StyleSheet} from "react-native";
import {AppColors} from "../../themes/AppTheme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        paddingHorizontal: 30
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
        fontFamily: 'Poppins'
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
        height: "15%"
    },
    dataTitle: {
        textDecorationLine: "underline",
        fontWeight: "bold",
        fontSize: 17
    },
    dataValue: {
        fontSize: 17
    },
    cerrarSesionContainer: {
        position: "absolute",
        bottom: -130,
        right: 60,
    },
    cerrarSesion: {
        fontSize: 20,
        fontWeight: "bold",
        textDecorationLine: "underline",
    }

})

export default styles;